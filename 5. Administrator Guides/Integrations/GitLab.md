Add GitLab notifications via a new WebHook in Rocket.Chat

1. In Rocket.Chat go to "Administration"->"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Set "Enable Script" to true and enter the javascript in the "Script" box
4. Press Save changes and copy the *Webhook URL* (added just below the script box)
5. Go to your gitlab project, ie. https://gitlab.com/< username >/< project >/hooks . It's in the project "settings" under Webhooks menu GitLab.
6. Add a new webhook by pasting the Rocket.Chat url you've copied in step 4, select at least 1 checkbox and press the button (conveniently called "Add Webhook")
7. Test the webhook with the "Test Hook" button in Gitlab, a topbar should appear with more info(success or failure)

Paste this in javascript in the "Script" textarea on Rocket.Chat webhook settings
```javascript
/*jshint  esnext:true*/
// see https://gitlab.com/help/web_hooks/web_hooks for full json posted by GitLab
const NOTIF_COLOR = '#6498CC';

class Script {
	process_incoming_request({
		request
	}) {
		try {
			switch (request.headers['x-gitlab-event']) {
				case 'Push Hook':
					return this.pushEvent(request.content);
				case 'Merge Request Hook':
					return this.mergeRequestEvents(request.content);
				case 'Note Hook':
					return this.commentEvent(request.content);
				case 'Issue Hook':
					return this.issueEvent(request.content);
				case 'Tag Push Hook':
					return this.tagEvent(request.content);
			}
		} catch (e) {
			console.log('gitlabevent error', e);
			return {
				error: {
					success: false,
					message: e.message || e
				}
			};
		}
	}

	issueEvent(data) {
		return {
			content: {
				username: data.user.name,
				text: `${data.user.username} ${data.object_attributes.state} an issue _${data.object_attributes.title}_ on ${data.project.name}. *Description:* ${data.object_attributes.description}. See: ${data.object_attributes.url}`,
				icon_url: data.user.avatar_url
			}
		};
	}

	commentEvent(data) {
		const comment = data.object_attributes;
		const user = data.user;
		let text;
		if (data.merge_request) {
			let mr = data.merge_request;
			text = `${user.name} commented on Merge Request #${mr.id} [${mr.title}](${comment.url})`;

		} else if (data.commit) {
			let commit = data.commit;
			let message = commit.message.replace(/\n[^\s\S]+/, '...').replace(/\n$/, '');
			text = `${user.name} commented on commit [${commit.id.slice(0, 8)} ${message}](${comment.url})`;
		} else if (data.issue) {
			let issue = data.issue;
			text = `${user.name} commented on issue [#${issue.id} ${issue.title}](${comment.url})`;
		} else if (data.snippet) {
			let snippet = data.snippet;
			text = `${user.name} commented on code snippet [#${snippet.id} ${snippet.title}](${comment.url})`;
		}
		return {
			content: {
				username: 'gitlab/' + data.project.name,
				icon_url: data.project.avatar_url || user.avatar_url || '',
				text,
				attachments: [{
					text: comment.note,
					color: NOTIF_COLOR
				}]
			}
		};
	}

	mergeRequestEvent(data) {
		const user = data.user;
		const mr = data.object_attributes;
		return {
			content: {
				username: `gitlab/${mr.target.name}`,
				icon_url: mr.target.avatar_url || mr.source.avatar_url || user.avatar_url || '',
				attachments: [{
					title: `${user.name} ${mr.action} Merge Request #${mr.id} ${mr.title}`,
					title_link: mr.url,
					text: `_${mr.source_branch} into ${mr.target_branch}_`,
					color: NOTIF_COLOR
				}]
			}
		};
	}

	pushEvent(data) {
		const project = data.project;
		return {
			content: {
				username: `gitlab/${project.name}`,
				text: `![${data.user_name}](${data.user_avatar}) ${data.user_name} pushed ${data.total_commits_count} commits to ${project.name}. See: ${project.web_url}`,
				icon_url: project.avatar_url || data.user_avatar || '',
				attachments: [{
					title: data.total_commits_count + ' Commits',
					title_link: project.web_url,
					text: data.commits.map((commit) => `  - ${new Date(commit.timestamp).toUTCString()} [${commit.id.slice(0, 8)}](${commit.url}) by ${commit.author.name}: ${commit.message.replace(/\s*$/, '')}`).join('\n'),
					color: NOTIF_COLOR
				}]
			}
		};
	}

	tagEvent(data) {
		let tag = data.ref.replace(/^.*?([^\/]+)$/, '$1');
		return {
			content: {
				username: `gitlab/${data.project.name}`,
				icon_url: data.project.avatar_url || data.user_avatar || '',
				text: `${data.user_name} push tag [${tag} ${data.checkout_sha.slice(0, 8)}](${data.project.web_url}/tags/${tag})`
			}
		};
	}

}

```
This example contains code for Push hook & Issue hook. It can easily be extended with more (a more complete example can be found here: https://gist.github.com/malko/763c617106063b27d928e886f78c146d).

Gitlab webhook help: https://gitlab.com/help/web_hooks/web_hooks
