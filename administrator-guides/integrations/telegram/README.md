# Simple Telegram Bot:

_follow these instructions to get a simple Telegram Bot setup_

## Getting Started

1. Open telegram chat in your browser or mobile phone
2. Add the user `BotFather`
3. Click start
4. Click `/newbot`
5. Follow the Instructions

![instructions](http://i.imgur.com/8y9SG49.jpg?1)

## Getting the Token

1. Wait for the Token to be displayed referred to as [myauthorization-token]
2. Go to the Administration Portal of Rocket.Chat and the Integrations Page
3. Create a new Incoming Webhook following these instructions
    - Enable script
    - Paste the following

### Incoming Webhook for Rocket.Chat

```javascript
class Script {
    process_incoming_request({ request }) {
        // UNCOMMENT THE BELOW LINE TO DEBUG IF NEEDED.
        //console.log(request.content);
        if ('edited_message' in request.content) {
            request.content.message = request.content.edited_message;
        }
        let who = request.content.message.from.username
        let icon_url = '/avatar/' + request.content.message.from.username + '.jpg'
        if(!who)  {
          who = `${request.content.message.from.first_name} ${request.content.message.from.last_name}`
          icon_url = `/avatar/${request.content.message.from.first_name}.jpg`
        }
        let body = request.content.message.text

        if(!body) {
          if(request.content.message.sticker.emoji) {
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

## Letting Telegram Know About Rocket.Chat's WebHook

1. Copy incoming webhook URL from Rocket.Chat
2. Change following URL with your token and Incoming webhookURL and execute in regular browser `https://api.telegram.org/bot[myauthorization-token]/setwebhook?url=[Incoming_Webhook_Link_from_Rocket.Chat]`
3. Receive the message `{ "ok": true, "result": true, "description": "Webhook successfully set" }` (or similar)
4. Test your incoming Webhook by sending a telegram message to the bot. It should be posted in the channel/user you specified in the incoming webhook. Check Rocket.Chat's Logs and write down `chat_id` (or `[chat-id]`)

## Create Outgoing WebHook in Rocket.Chat

1. Create outgoing webhook and specify channel with the following url: `https://api.telegram.org/bot[myauthorization-token]/sendMessage?chat_id=[chat-id]`
2. Paste the Outgoing Webhook below.
3. Enable listening at the Bot with /privacy and to disable ([example](http://i.imgur.com/xSjdAAy.jpg?1))
4. Add Bot to telegram group and utilize nice cross platform communication.

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

## Conclusion

Enjoy! Please note, this was a community submission and is very simple. If you feel there are improvements which can be made, please feel free to submit improvements via pull requests!! :heart:

![final product](http://i.imgur.com/LqpqUC8.jpg?1)
