Add GitLab notifications via a new WebHook in RocketChat
1. In Rocket.Chat go to "Administration"->"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Set "Enable Script" to true and enter the javascript in the "Script" box
4. Press Save changes and copy the *Webhook URL* (added just below the script box)
5. Go to your gitlab project, ie. https://gitlab.com/< username >/< project >/hooks . It's in the project "settings" under Webhooks menu GitLab.
6. Add a new webhook by pasting the Rocket.Chat url you've copied in step 4, select at least 1 checkbox and press the button (conveniently called "Add Webhook")
7. Test the webhook with the "Test Hook" button in Gitlab, a topbar should appear with more info(success or failure)

Paste this in javascript in the "Script" textarea on Rocket.Chat webhook settings
```javascript
// see https://gitlab.com/help/web_hooks/web_hooks for full json posted by GitLab
class Script {

    process_incoming_request({
        request
    }) {
        // console is a global helper to improve debug
        // console.log(request.content);
        if (request.headers['x-gitlab-event'] === "Push Hook") {
          return {
              content: {
                  username: request.content.user_name,
                  text: request.content.user_name + " pushed " + request.content.total_commits_count + " commits to " + request.content.project.name + ". See: " + request.content.project.web_url,
                  icon_url: request.content.user_avatar,

              }
          };
        }

        if (request.headers['x-gitlab-event'] === "Issue Hook") {
          return {
              content: {
                  username: request.content.user.name,
                  text: request.content.user.username + " "+ request.content.object_attributes.state +" an issue _" + request.content.object_attributes.title + "_ on " + request.content.project.name + ".\n\n*Description:* " + request.content.object_attributes.description + ".\nSee: " + request.content.object_attributes.url,
                  icon_url: request.content.user.avatar_url,

              }
          };
        }

        return {
            error: {
                success: false,
                message: 'Error example'
            }
        };
    }
}


```
This example contains code for Push hook & Issue hook. It can easily be extended with more.

Gitlab webhook help: https://gitlab.com/help/web_hooks/web_hooks
