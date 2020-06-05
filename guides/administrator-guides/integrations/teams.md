# Microsoft Team
---
## Goal
- Receive message from Microsoft Teams (__Incoming WebHook__)  
- Send message to Microsoft Teams Channel(__Outgoing WebHook__)   
---
## Create Incoming WebHook in Rocket.Chat
  
_I would advise to create New Team so not all members in your organisation have access to this Integration_  
  
1. Create Incoming Webhook with Default parameters:
    - Go to __Integrations__ --> Create __New integration__ --> Select __Incoming WebHook__  
    - Assign __Name__  
    - Assign __Post to Channel__ (This will be the Channel where you want to recieve msg from Teams)  
    - Assign __Post as__ (Create Bot user and add bot the above mentioned Channel)
    - Copy and paste below script in __Script__ section.
```
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
2. __Save__ and then open your __Incoming WebHook__ You should be able to see __Webhook URL__ just __copy__ that, We will need that during Creating __Outgoing WebHook__ in MS Teams.  
  
---  
## Create Outgoing WebHook in MS Teams:
1. Select the appropriate team and select __Manage team__ from the (__•••__) drop-down menu.  
2. Choose the __Apps__ tab from the navigation bar.  
3. From the window's lower right corner select Create an __outgoing webhook__.  
4. In the resulting popup window complete the required fields:
    - __Name__ - The webhook title and @mention tap. (This will be your bot name in MS Teams)
    - __Callback URL__ - Paste the URL here we copied from Rocket.Chat.
    - __Description__ - A detailed string that will appear in the profile card and the team-level App dashboard.
    - __Profile Picture__ (optional) an app icon for your webhook.
    - Select the __Create__ button from lower right corner of the pop-up window and the outgoing webhook will be added to the current team's channels.  
___Note :___ _The Name We mentioned above will be the bot name so when you send message to Rocket.Chat Mention to Bot example @namebot_
  
---  
## Create Incoming WebHook in MS Teams:
1. Navigate to the __Team__ where you want to add the webhook and select (__•••__) __More Options__ from the top navigation bar and Select __Apps__ and select __More apps__.
    - Choose __Connectors__ from the drop-down menu and search for __Incoming Webhook__.
    - Select the __Configure__ button, provide a name, and, optionally, upload an image avatar for your webhook.
    - Select appropriate __Teams__ and __Channel__.
    - The dialog window will present a unique URL that will map to the channel. Make sure that you __copy and save the URL__—you will need to provide it to Rocket.Chat Outgoing WebHook.
    - Select the __Done__ button. The webhook will be available in the team channel.   
  
---
## Create Outgoing Webhook in Rocket.Chat:
1. Create __Outgoing WebHook__ from Integration:
    - Select __Message Sent__ as __Event Trigger__  
    - Select the __Channel__ (same as mentioned in Incoming Webhook)  
    - Paste the __URL__ we copied from Microsoft Teams  
    - Select Bot __Post as__ (same as in Incoming Webhook)
    - Paste Below __Script__:
```
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
---
