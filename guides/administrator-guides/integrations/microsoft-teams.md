# Microsoft Teams

## Goal

* Receive message from Microsoft Teams \(**Incoming WebHook**\)
* Send message to Microsoft Teams Channel\(**Outgoing WebHook**\)

## Create Incoming WebHook in Rocket.Chat

_**Note:** I would advise to create New Team so not all members in your organisation have access to this Integration_

1. **Create Incoming Webhook with Default parameters:**
   * Go to **Integrations** --&gt; Create **New integration** --&gt; Select **Incoming WebHook**
   * Assign **Name**
   * Assign **Post to Channel** \(This will be the Channel where you want to recieve msg from Teams\)
   * Assign **Post as** \(Create Bot user and add bot the above mentioned Channel\)
   * Copy and paste below script in **Script** section.

```text
class Script {
    process_incoming_request({ request }) {
        // UNCOMMENT THE BELOW LINE TO DEBUG IF NEEDED.
        // console.log(request.content);
        if ('edited_message' in request.content) {
            request.content = request.content;
        }
        let from = request.content.from;
        let who = from.name;
        let icon_url = '/avatar/' + from.name + '.jpg'
        let body = request.content.text.slice(16);

        if(!body) {
          if(request.content.hasOwnProperty("sticker") && request.content.sticker.emoji) {
            // It's a sticker
            body = request.content.sticker.emoji
        } else {
           return {}
          }
        }

        return {
            content: {
                username: who,
                icon_url: icon_url,
                text: body
            }
        };
    }
}
```

1. **Save** and then open your **Incoming WebHook** You should be able to see **Webhook URL** just **copy** that, We will need that during Creating **Outgoing WebHook** in MS Teams.

## Create Outgoing WebHook in MS Teams:

1. Select the appropriate team and select **Manage team** from the \(**•••**\) drop-down menu.
2. Choose the **Apps** tab from the navigation bar.
3. From the window's lower right corner select Create an **outgoing webhook**.
4. In the resulting popup window complete the required fields:

   * **Name** - The webhook title and @mention tap. \(This will be your bot name in MS Teams\)
   * **Callback URL** - Paste the URL here we copied from Rocket.Chat.
   * **Description** - A detailed string that will appear in the profile card and the team-level App dashboard.
   * **Profile Picture** \(optional\) an app icon for your webhook.
   * Select the **Create** button from lower right corner of the pop-up window and the outgoing webhook will be added to the current team's channels. 

   _**Note :**_ _The Name We mentioned above will be the bot name so when you send message to Rocket.Chat Mention to Bot example @namebot_

   \_\_

## Create Incoming WebHook in MS Teams:

1. Navigate to the **Team** where you want to add the webhook and select \(**•••**\) **More Options** from the top navigation bar and Select **Apps** and select **More apps**.
   * Choose **Connectors** from the drop-down menu and search for **Incoming Webhook**.
   * Select the **Configure** button, provide a name, and, optionally, upload an image avatar for your webhook.
   * Select appropriate **Teams** and **Channel**.
   * The dialog window will present a unique URL that will map to the channel. Make sure that you **copy and save the URL**—you will need to provide it to Rocket.Chat Outgoing WebHook.
   * Select the **Done** button. The webhook will be available in the team channel.

## Create Outgoing Webhook in Rocket.Chat:

1. Create **Outgoing WebHook** from Integration:
   * Select **Message Sent** as **Event Trigger**
   * Select the **Channel** \(same as mentioned in Incoming Webhook\)
   * Paste the **URL** we copied from Microsoft Teams
   * Select Bot **Post as** \(same as in Incoming Webhook\)
   * Paste Below **Script**:

```text
class Script {
        prepare_outgoing_request({ request }) {
          console.log(request.data);
            if (request.data.bot) {
                //Don't repost messages from the bot.
                return { };
            } else {
                return {
                    url: request.url,
                    method: 'POST',
                    headers: {"ContentType":"application/json","Content-type":"application/json"},
                    data: {
                      context: 'http://schema.org/extensions',
                      type: 'MessageCard',
                    //  text: '{\'<b>' + request.data.user_name+ '</b>:': \"Isravel - Hello World\"}';
                                  text: request.data.user_name.bold() + ": " + request.data.text,
                      //                      text: encodeURIComponent( request.data.user_name.bold() + request.data.text)
                    },
                 //   method: 'GET'
                };
            }
        }
    }
```

## Enjoy!

