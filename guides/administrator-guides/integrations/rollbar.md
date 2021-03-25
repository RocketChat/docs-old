# Sentry

Add Rollbar notifications via a new WebHook in Rocket.Chat This script works for the Rollbar.com

1. In Rocket.Chat go to "Administration"-&gt;"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Bonus: add [https://avatars.io/twitter/rollbar/medium](https://avatars.io/twitter/rollbar/medium) as Avatar URL
4. Set "Enable Script" to true and enter the javascript in the "Script" box
5. Press Save changes and copy the _Webhook URL_ \(added just below the script box\)
6. Go to your Rollbar project, ie. [https://rollbar.com/](https://rollbar.com/)&lt; organization &gt;/&lt; project &gt;/settings/notifications/webhook/ and enable the "WebHook" integration. It's in the project "settings" under Integrations and then Notifications. A WebHook integration is added there when enabled.
7. Add a new webhook by pasting the Rocket.Chat url you've copied in step 5 in the "URLs" textarea \(1 URL per line\) and press the Enable Webhook Integration button
8. Test the webhook with the "Send Test Notification" button in Rollbar, a Test Results box should appear below, with more info \(success or failure\)

Paste this in javascript in the "Script" textarea on Rocket.Chat WebHook settings

```javascript
class Script {

  process_incoming_request({ request }) {
    // console is a global helper to improve debug
    console.log(request.content);

    return {
      content: {
        text: "(" + request.content.event_name  + ") \n*" + request.content.data.item.title + "* \n*Environment:* "+ request.content.data.item.environment,
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

Use the console.log\(request.content\) line to debug the json content, posted by Rollbar.
