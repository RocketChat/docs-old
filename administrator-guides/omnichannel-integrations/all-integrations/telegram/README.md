# Simple Telegram Bot:

Follow the following instructions for a simple Telegram Bot setup.

## Get Started

1. Open the **Telegram** chat in your browser or mobile phone
2. Add the **BotFather** user
3. Click **Start**
4. Click **/newbot**
5. Follow the instructions

![instructions](http://i.imgur.com/8y9SG49.jpg?1)

## Get the Token

1. Wait for the Token (displayed as [myauthorization-token])
2. Go to the **Administration Portal** of Rocket.Chat and find the **Integrations** page
3. Create a new **Incoming Webhook** following these instructions
    - Enable script
    - Paste the following javascript

### Incoming Webhook for Rocket.Chat

```javascript
class Script {
    process_incoming_request({ request }) {
        // UNCOMMENT THE BELOW LINE TO DEBUG IF NEEDED.
        // console.log(request.content);
        if ('edited_message' in request.content) {
            request.content.message = request.content.edited_message;
        }
        let from = request.content.message.from;
        let who = from.username
        let icon_url = '/avatar/' + from.username + '.jpg'
        if(!who)  {
          if (from.first_name && from.last_name) {
            who = `${from.first_name} ${from.last_name}`
          } else if (from.first_name) {
            who = from.first_name
          } else {
            who = from.last_name
          }
          icon_url = `/avatar/${request.content.message.from.first_name}.jpg`
        }
        let body = request.content.message.text

        if(!body) {
          if(request.content.message.hasOwnProperty("sticker") && request.content.message.sticker.emoji) {
            // It's a sticker
            body = request.content.message.sticker.emoji
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

## Configure the Incoming Webhook in Telegram

1. Copy the _incoming webhook URL_ you created from Rocket.Chat

2. Change the following URL with your token and incoming webhook URL, and execute it in your regular browser:
`https://api.telegram.org/bot[myauthorization-token]/setwebhook?url=[Incoming_Webhook_Link_from_Rocket.Chat]`

3. You should receive the following message:
`{ "ok": true, "result": true, "description": "Webhook successfully set" }` (or similar)

4. Test your incoming webhook by sending a telegram message to the bot. It should appear in the channel/user you specified in the incoming webhook. Check Rocket.Chat's Logs and write down the `chat_id` (or `[chat-id]`)

## Create the Outgoing Webhook in Rocket.Chat

1. Create the outgoing webhook and specify the channel with the following URL: `https://api.telegram.org/bot[myauthorization-token]/sendMessage?chat_id=[chat-id]`

2. Paste the outgoing webhook below

3. Enable listening at the Bot with **/privacy** (Here's an[example](http://i.imgur.com/xSjdAAy.jpg?1))

4. Add Bot to Telegram group and enjoy the best cross-platform communication.

```javascript
class Script {
    prepare_outgoing_request({ request }) {
        if (request.data.bot) {
            //Don't repost messages from the bot.
            return { };
        } else {
            return {
                url: request.url + '&parse_mode=HTML' + '&text=' + encodeURIComponent('<b>' + request.data.user_name+ '</b>: ' + request.data.text),
                method: 'GET'
            };
        }
    }
}
```

Bear in mind that this is a simple community contribution. If you feel there is room for improvements, feel free to submit your suggestions through pull requests.

![final product](http://i.imgur.com/LqpqUC8.jpg?1)
