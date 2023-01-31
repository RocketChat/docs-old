# GitLab

Setting up GitLab webhook integration gives you the ability to receive event notifications from GitLab directly in your desired Rocket.Chat room.

These events include and are not limited to:

* Comments
* Issues events
* Merge requests
* Deployment events

{% hint style="info" %}
In configuring this integration, make sure your Rocket.Chat is publicly available on a URL.
{% endhint %}

## GitLab Rocket.Chat Integration

To configure the webhook integration between GitLab and Rocket.Chat, you need to:

1. [Create a new webhook integration on Rocket.Chat](gitlab.md#creating-a-new-gitlab-webhook-integration)
2. [Link to the GitLab repository webhook setting](gitlab.md#gitlab-webhooks-settings)

Follow these steps below to do that

### Creating a new GitLab webhook integration

* On your Rocket.Chat workspace, go to **Administration** -> **Workspace** -> **Integrations**
* Switch to the **Incoming** tab and create a **New** Integration
* Fill in the details of your webhook including the **name** of the webhook, the **room** to post into, the **user to post as** and enable it

<figure><img src="../../../.gitbook/assets/GitLab new incoming Webhook.png" alt=""><figcaption><p>GitLab new incoming Webhook</p></figcaption></figure>

* Enable Scripts and paste the following code into the Scripts box

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

* **Save** the settings
* The **Webhook URL** and **Token** are generated after saving
* Copy these credentials, they will be used later

<figure><img src="../../../.gitbook/assets/GitLab webhook url and token.png" alt=""><figcaption><p>GitLab webhook url and token</p></figcaption></figure>

### GitLab Webhooks settings

After creating the new incoming webhook integration on Rocket.Chat, it is time to link it up with the GitLab repository.

* Go to your GitLab project page then navigate to **Settings** > **Webhooks**
* Fill in the `URL` and `token` you copied from the Rocket.Chat setting
* Select the type of events you want to be notified on and **Add webhook**

<figure><img src="../../../.gitbook/assets/GitLab webhook setting.png" alt=""><figcaption><p>GitLab webhook setting</p></figcaption></figure>

{% hint style="success" %}
After successful configuration, you can test the Webhook with any event trigger and see the notification in your specified Rocket.Chat room.
{% endhint %}

<figure><img src="../../../.gitbook/assets/GitLab webhook test.png" alt=""><figcaption><p>GitLab webhook test</p></figcaption></figure>

{% hint style="info" %}
More material

* GitLab-Rocket.Chat webhook example: [https://github.com/malko/rocketchat-gitlab-hook](https://github.com/malko/rocketchat-gitlab-hook)
* GitLab webhook help: [https://docs.gitlab.com/ee/user/project/integrations/webhooks.html](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html)
{% endhint %}
