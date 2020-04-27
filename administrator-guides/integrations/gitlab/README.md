# GitLab

Add GitLab notifications via a new WebHook in Rocket.Chat

1. In Rocket.Chat go to "Administration"->"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Set "Enable Script" to true and enter the javascript in the "Script" box
4. Press Save changes and copy the *Webhook URL* (added just below the script box)
5. Go to your GitLab project, ie. <https://gitlab.com/>< username >/< project >/hooks . It's in the project "settings" under Webhooks menu GitLab.
6. Add a new webhook by pasting the Rocket.Chat url you've copied in step 4, select at least 1 checkbox and press the button (conveniently called "Add Webhook")
7. Test the webhook with the "Test Hook" button in GitLab, a topbar should appear with more info (success or failure)

Paste this in javascript in the "Script" text area on Rocket.Chat webhook settings

```javascript
/* eslint no-console:0, max-len:0 */
// see <https://gitlab.com/help/web_hooks/web_hooks> for full json posted by GitLab
const MENTION_ALL_ALLOWED = false; // <- check that bot permission allow has mention-all before passing this to true.
const NOTIF_COLOR = '#6498CC';
const IGNORE_CONFIDENTIAL = true;
const refParser = (ref) => ref.replace(/^refs\/(?:tags|heads)\/(.+)$/, '$1');
const displayName = (name) => (name && name.toLowerCase().replace(/\s+/g, '.'));
const atName = (user) => (user && user.name ? '@' + displayName(user.name) : '');
const makeAttachment = (author, text, color) => {
    return {
        author_name: author ? displayName(author.name) : '',
        author_icon: author ? author.avatar_url : '',
        text,
        color: color || NOTIF_COLOR
    };
};
const pushUniq = (array, val) => ~array.indexOf(val) || array.push(val); // eslint-disable-line

class Script { // eslint-disable-line
    process_incoming_request({ request }) {
        try {
            let result = null;
            const channel = request.url.query.channel;
            const event = request.headers['x-gitlab-event'];
            switch (event) {
                case 'Push Hook':
                    result = this.pushEvent(request.content);
                    break;
                case 'Merge Request Hook':
                    result = this.mergeRequestEvent(request.content);
                    break;
                case 'Note Hook':
                    result = this.commentEvent(request.content);
                    break;
                case 'Confidential Issue Hook':
                case 'Issue Hook':
                    result = this.issueEvent(request.content, event);
                    break;
                case 'Tag Push Hook':
                    result = this.tagEvent(request.content);
                    break;
                case 'Pipeline Hook':
                    result = this.pipelineEvent(request.content);
                    break;
                case 'Build Hook': // GitLab < 9.3
                    result = this.buildEvent(request.content);
                    break;
                case 'Job Hook': // GitLab >= 9.3.0
                    result = this.buildEvent(request.content);
                    break;
                case 'Wiki Page Hook':
                    result = this.wikiEvent(request.content);
                    break;
                default:
                    result = this.unknownEvent(request, event);
                    break;
            }
            if (result && result.content && channel) {
                result.content.channel = '#' + channel;
            }
            return result;
        } catch (e) {
            console.log('gitlabevent error', e);
            return this.createErrorChatMessage(e);
        }
    }

    createErrorChatMessage(error) {
        return {
            content: {
                username: 'Rocket.Cat ErrorHandler',
                text: 'Error occured while parsing an incoming webhook request. Details attached.',
                icon_url: '',
                attachments: [
                    {
                        text: `Error: '${error}', \n Message: '${error.message}', \n Stack: '${error.stack}'`,
                        color: NOTIF_COLOR
                    }
                ]
            }
        };
    }

    unknownEvent(data, event) {
        return {
            content: {
                username: data.user ? data.user.name : (data.user_name || 'Unknown user'),
                text: `Unknown event '${event}' occured. Data attached.`,
                icon_url: data.user ? data.user.avatar_url : (data.user_avatar || ''),
                attachments: [
                    {
                        text: `${JSON.stringify(data, null, 4)}`,
                        color: NOTIF_COLOR
                    }
                ]
            }
        };
    }
    issueEvent(data, event) {
        if (event === 'Confidential Issue Hook' && IGNORE_CONFIDENTIAL) {
            return false;
        }
        const project = data.project || data.repository;
        const state = data.object_attributes.state;
        const action = data.object_attributes.action;
        let user_action = state;
        let assigned = '';

        if (action === 'update') {
            user_action = 'updated';
        }

        if (data.assignee) {
            assigned = `*Assigned to*: @${data.assignee.username}\n`;
        }

        return {
            content: {
                username: 'gitlab/' + project.name,
                icon_url: project.avatar_url || data.user.avatar_url || '',
                text: (data.assignee && data.assignee.name !== data.user.name) ? atName(data.assignee) : '',
                attachments: [
                    makeAttachment(
                        data.user, `${user_action} an issue _${data.object_attributes.title}_ on ${project.name}.
*Description:* ${data.object_attributes.description}.
${assigned}
See: ${data.object_attributes.url}`
                    )
                ]
            }
        };
    }

    commentEvent(data) {
        const project = data.project || data.repository;
        const comment = data.object_attributes;
        const user = data.user;
        const at = [];
        let text;
        if (data.merge_request) {
            const mr = data.merge_request;
            const lastCommitAuthor = mr.last_commit && mr.last_commit.author;
            if (mr.assignee && mr.assignee.name !== user.name) {
                at.push(atName(mr.assignee));
            }
            if (lastCommitAuthor && lastCommitAuthor.name !== user.name) {
                pushUniq(at, atName(lastCommitAuthor));
            }
            text = `commented on MR [#${mr.id} ${mr.title}](${comment.url})`;
        } else if (data.commit) {
            const commit = data.commit;
            const message = commit.message.replace(/\n[^\s\S]+/, '...').replace(/\n$/, '');
            if (commit.author && commit.author.name !== user.name) {
                at.push(atName(commit.author));
            }
            text = `commented on commit [${commit.id.slice(0, 8)} ${message}](${comment.url})`;
        } else if (data.issue) {
            const issue = data.issue;
            text = `commented on issue [#${issue.id} ${issue.title}](${comment.url})`;
        } else if (data.snippet) {
            const snippet = data.snippet;
            text = `commented on code snippet [#${snippet.id} ${snippet.title}](${comment.url})`;
        }
        return {
            content: {
                username: 'gitlab/' + project.name,
                icon_url: project.avatar_url || user.avatar_url || '',
                text: at.join(' '),
                attachments: [
                    makeAttachment(user, `${text}\n${comment.note}`)
                ]
            }
        };
    }

    mergeRequestEvent(data) {
        const user = data.user;
        const mr = data.object_attributes;
        const assignee = mr.assignee;
        let at = [];

        if (mr.action === 'open' && assignee) {
            at = '\n' + atName(assignee);
        } else if (mr.action === 'merge') {
            const lastCommitAuthor = mr.last_commit && mr.last_commit.author;
            if (assignee && assignee.name !== user.name) {
                at.push(atName(assignee));
            }
            if (lastCommitAuthor && lastCommitAuthor.name !== user.name) {
                pushUniq(at, atName(lastCommitAuthor));
            }
        }
        return {
            content: {
                username: `gitlab/${mr.target.name}`,
                icon_url: mr.target.avatar_url || mr.source.avatar_url || user.avatar_url || '',
                text: at.join(' '),
                attachments: [
                    makeAttachment(user, `${mr.action} MR [#${mr.iid} ${mr.title}](${mr.url})\n${mr.source_branch} into ${mr.target_branch}`)
                ]
            }
        };
    }

    pushEvent(data) {
        const project = data.project || data.repository;
        const web_url = project.web_url || project.homepage;
        const user = {
            name: data.user_name,
            avatar_url: data.user_avatar
        };
        // branch removal
        if (data.checkout_sha === null && !data.commits.length) {
            return {
                content: {
                    username: `gitlab/${project.name}`,
                    icon_url: project.avatar_url || data.user_avatar || '',
                    attachments: [
                        makeAttachment(user, `removed branch ${refParser(data.ref)} from [${project.name}](${web_url})`)
                    ]
                }
            };
        }
        // new branch
        if (data.before == 0) { // eslint-disable-line
            return {
                content: {
                    username: `gitlab/${project.name}`,
                    icon_url: project.avatar_url || data.user_avatar || '',
                    attachments: [
                        makeAttachment(user, `pushed new branch [${refParser(data.ref)}](${web_url}/commits/${refParser(data.ref)}) to [${project.name}](${web_url}), which is ${data.total_commits_count} commits ahead of master`)
                    ]
                }
            };
        }
        return {
            content: {
                username: `gitlab/${project.name}`,
                icon_url: project.avatar_url || data.user_avatar || '',
                attachments: [
                    makeAttachment(user, `pushed ${data.total_commits_count} commits to branch [${refParser(data.ref)}](${web_url}/commits/${refParser(data.ref)}) in [${project.name}](${web_url})`),
                    {
                        text: data.commits.map((commit) => `  - ${new Date(commit.timestamp).toUTCString()} [${commit.id.slice(0, 8)}](${commit.url}) by ${commit.author.name}: ${commit.message.replace(/\s*$/, '')}`).join('\n'),
                        color: NOTIF_COLOR
                    }
                ]
            }
        };
    }

    tagEvent(data) {
        const project = data.project || data.repository;
        const web_url = project.web_url || project.homepage;
        const tag = refParser(data.ref);
        const user = {
            name: data.user_name,
            avatar_url: data.user_avatar
        };
        let message;
        if (data.checkout_sha === null) {
            message = `deleted tag [${tag}](${web_url}/tags/)`;
        } else {
            message = `pushed tag [${tag} ${data.checkout_sha.slice(0, 8)}](${web_url}/tags/${tag})`;
        }
        return {
            content: {
                username: `gitlab/${project.name}`,
                icon_url: project.avatar_url || data.user_avatar || '',
                text: MENTION_ALL_ALLOWED ? '@all' : '',
                attachments: [
                    makeAttachment(user, message)
                ]
            }
        };
    }

    createColor(status) {
        switch (status) {
            case 'success':
                return '#2faa60';
            case 'pending':
                return '#e75e40';
            case 'failed':
                return '#d22852';
            case 'canceled':
                return '#5c5c5c';
            case 'created':
                return '#ffc107';
            case 'running':
                return '#607d8b';
            default:
                return null;
        }
    }

    pipelineEvent(data) {
        const project = data.project || data.repository;
        const commit = data.commit;
        const user = {
            name: data.user_name,
            avatar_url: data.user_avatar
        };
        const pipeline = data.object_attributes;

        return {
            content: {
                username: `gitlab/${project.name}`,
                icon_url: project.avatar_url || data.user_avatar || '',
                attachments: [
                    makeAttachment(user, `pipeline returned *${pipeline.status}* for commit [${commit.id.slice(0, 8)}](${commit.url}) made by *${commit.author.name}*`, this.createColor(pipeline.status))
                ]
            }
        };
    }

    buildEvent(data) {
        const user = {
            name: data.user_name,
            avatar_url: data.user_avatar
        };

        return {
            content: {
                username: `gitlab/${data.repository.name}`,
                icon_url: '',
                attachments: [
                    makeAttachment(user, `build named *${data.build_name}* returned *${data.build_status}* for [${data.project_name}](${data.repository.homepage})`, this.createColor(data.build_status))
                ]
            }
        };
    }

    wikiPageTitle(wiki_page) {
        if (wiki_page.action === 'delete') {
            return wiki_page.title;
        }

        return `[${wiki_page.title}](${wiki_page.url})`;
    }

    wikiEvent(data) {
        const user_name = data.user.name;
        const project = data.project;
        const project_path = project.path_with_namespace;
        const wiki_page = data.object_attributes;
        const wiki_page_title = this.wikiPageTitle(wiki_page);
        const action = wiki_page.action;

        let user_action = 'modified';

        if (action === 'create') {
            user_action = 'created';
        } else if (action === 'update') {
            user_action = 'edited';
        } else if (action === 'delete') {
            user_action = 'deleted';
        }

        return {
            content: {
                username: project_path,
                icon_url: project.avatar_url || data.user.avatar_url || '',
                text: `The wiki page ${wiki_page_title} was ${user_action} by ${user_name}`
            }
        };
    }
}
```

This example contains code for several hooks. It can easily be extended with more. Source: <https://github.com/malko/rocketchat-gitlab-hook>.

GitLab webhook help: <https://gitlab.com/help/web_hooks/web_hooks>
