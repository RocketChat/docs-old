# Sentry

Add Sentry notifications via a new WebHook in Rocket.Chat
This script works for the sentry.com and self-hosted version.

1. In Rocket.Chat go to "Administration"->"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Bonus: add <https://avatars.io/twitter/getsentry/medium> as Avatar URL
4. Set "Enable Script" to true and enter the javascript in the "Script" box
5. Press Save changes and copy the *Webhook URL* (added just below the script box)
6. Go to your Sentry project, ie. <https://app.getsentry.com/>< organization >/< project >/settings/plugins/ and enable the "WebHooks" integration. It's in the project "settings" under All Integrations. A WebHooks integration is added there when enabled.
7. Add a new webhook by pasting the Rocket.Chat url you've copied in step 5 in the "Callback URLs" textarea (1 URL per line) and press the Save Changes button
8. Test the webhook with the "Test Configuration" button in Sentry, a Test Results box should appear below, with more info (success or failure)

Paste this in javascript in the "Script" textarea on Rocket.Chat WebHook settings

```javascript
class Script {

  process_incoming_request({ request }) {
    // console is a global helper to improve debug
    // console.log(request.content);

    return {
      content: {
        text: "Error in project *" + request.content.project_name + "* (" + request.content.project + ").\n*Message:* "+ request.content.message+"\n*Culprit:* " + request.content.culprit +".\n*Check url:* " + request.content.url,
       }
    };

     return {
       error: {
         success: false,
         message: 'Error example'
       }
     };
  }
}
```

Use the console.log(request.content) line to debug the json content, posted by Sentry.
