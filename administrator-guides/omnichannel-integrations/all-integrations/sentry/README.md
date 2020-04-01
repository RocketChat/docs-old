# Sentry

This integration adds Sentry notifications via a new Webhook in Rocket.Chat.
This script works for the "sentry.com" and self-hosted version.

1. In Rocket.Chat go to **Administration > Integrations** and create a **New Integration**.
2. Choose **Incoming Webhook**.
3. Follow all instructions like Enable, give it a name, link to channel etc. Optionally, add <https://avatars.io/twitter/getsentry/medium> as the Avatar URL.
4. Set **Enable Script** to `true` and enter the javascript in the **Script** box.
5. Press **Save Changes** and copy the *Webhook URL* (added just below the script box).
6. Go to your **Sentry project** (<https://app.getsentry.com/>< organization >/< project >/settings/plugins/). In **Settings**, find **All Integrations** and enable the **"Webhooks**.
7. Add a new webhook by pasting the *Rocket.Chat URL* you copied in Step 5 to the **Callback URLs** text area (one URL per line) and press the **Save Changes** button.
8. Use the **Test Configuration** button in Sentry to test your webhook. The **Test Results** box returns with whether success or failure.

Paste this in javascript in the **Script** text area of the Rocket.Chat webhook settings:

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

Use the `console.log(request.content)` line to debug the JSON content posted by Sentry.
