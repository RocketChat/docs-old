# Simple Telegram Bot

_Follow these instructions to get a simple Telegram Bot setup_

{% hint style="info" %}
Make sure Your Rocket.Chat workspace URL is publicly available.
{% endhint %}

## Getting Started

1. Open [telegram](https://web.telegram.org/) chat in your browser or mobile phone
2. Add and open a conversation with the user `BotFather`
3. Click **start**
4. Send `/newbot` to start creating a new bot
5. Follow the instructions to continue

![Creating new telegram bot](<../../../../.gitbook/assets/Creating telegram bot.png>)

## Getting the Token

1. Note the token provided for your bot
2. Go to the **Administration** > **Integrations** Page
3. Create a new Incoming Webhook following these instructions
   * Set the webhook integration name, the room to post to and which user to use
   * Enable script and past the following code

### Incoming Webhook for Rocket.Chat

```javascript
class Script {
    addQuotePrefix(str) {
        let tmp = str.split('\n'),
            res = [];

        for (const frag of tmp) {
            res.push(`> ${frag}`);
        }

        return res.join('\n');
    }

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

        if(request.content.message.reply_to_message) {
              var quotedMessage = 
                "*" +
                request.content.message.reply_to_message.from.username +
                "*\n" +
                request.content.message.reply_to_message.text;

              quotedMessage = this.addQuotePrefix(quotedMessage);
            body = quotedMessage + '\n' + body;
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

* Copy incoming webhook URL provided by Rocket.Chat after saving
* Change the following URL with `yourToken` and Incoming `webhookURL` and execute in a regular browser

```html
https://api.telegram.org/bot<myauthorization-token>/setwebhook?url=<Incoming_Webhook_Link_from_Rocket.Chat>
```

* You should see a response of this format to indicate success

```json
{
"ok": true,
"result": true,
"description": "Webhook was set"
}
```

* Test your incoming Webhook by sending a telegram message to the bot. It should be posted in the  `channel` by the `user`you specified in the incoming webhook configuration page. Check Rocket.Chat's Logs and write down `chat_id` (or `[chat-id]`)

![Telegram bot webhook Rocket.Chat](<../../../../.gitbook/assets/Telegram bot webhook with Rocket.Chat.png>)

## Create Outgoing WebHook in Rocket.Chat

* Create an outgoing webhook and specify the channel  to listen in
* In the URL field, set the URL following this format:

```html
https://api.telegram.org/bot<myauthorization-token>/sendMessage?chat_id=<chat-id>
```

* `chat-id` should be your Telegram group id, You can get it by adding the `@RawDataBot`  or [`@getidsbot`](https://t.me/getidsbot) to your group

```javascript
Message
 ├ message_id: 338
 ├ from
 ┊  ├ id: *****
 ┊  ├ is_bot: false
 ┊  ├ first_name: 사이드
 ┊  ├ username: ******
 ┊  └ language_code: en
 ├ chat
 ┊  ├ id: -1001118554477    // This is Your Group id
 ┊  ├ title: Test Group
 ┊  └ type: supergroup
 ├ date: 1544948900
 └ text: A
```

* Paste the Outgoing Webhook below.
* Enable listening at the Bot with /privacy and to disable ([example](http://i.imgur.com/xSjdAAy.jpg?1))
* Add Bot to telegram group and utilize nice cross platform communication.

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

Enjoy! Please note, this was a community submission and is very simple. If you feel there are improvements that can be made, please feel free to submit improvements via pull requests!! :heart:

![final product](http://i.imgur.com/LqpqUC8.jpg?1)
