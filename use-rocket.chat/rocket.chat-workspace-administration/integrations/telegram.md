# Simple Telegram Bot

A simple relay communication between Rocket.Chat and Telegram is possible by configuring a basic bot. The guide below shows a community example of how this can be achieved with webhooks.

This will give you the possibility of relaying messages between Telegram and Rocket.Chat in a specified room of your choice.

{% hint style="success" %}
Rocket.Chat [Enterprise users](../settings/enterprise.md) have the [Telegram App](../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/omnichannel-apps/telegram-app/) packaged with a lot more functionalities and other [Omnichannel](../../omnichannel/) features to use.
{% endhint %}

{% hint style="warning" %}
Note: This integration is not designed to work for Omnichannel Conversations. Please check our integration [here](../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/omnichannel-apps/telegram-app/) for serving your Omnichannel conversations from Telegram on Rocket.Chat.
{% endhint %}

## Getting Started

{% hint style="info" %}
Make sure Your Rocket.Chat workspace URL is publicly available.
{% endhint %}

1. Log in to your [telegram](https://web.telegram.org/) account on your mobile or using a browser
2. Add and open a conversation with the user `BotFather`
3. Click **start**
4. Send `/newbot` to start creating a new bot
5. Follow the instructions to continue

![Creating new telegram bot](<../../../.gitbook/assets/Creating telegram bot.png>)

## Getting the Token

1. Note the token provided for your bot
2. Go to the **Administration** > **Workspace** > **Integrations** page in Rocket.Chat
3. Create a new Incoming Webhook following these instructions
   * Set the webhook integration name, the room to post to and which user to use
   * Enable script and paste the following code and paste the following code in that field

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

* Test your incoming Webhook by sending a telegram message to the bot. It should be posted in the `channel` by the `user`you specified in the incoming webhook configuration page. Check Rocket.Chat's Logs and write down `chat_id` (or `[chat-id]`)

![Telegram bot webhook Rocket.Chat](<../../../.gitbook/assets/Telegram bot webhook with Rocket.Chat.png>)

## Create Outgoing WebHook in Rocket.Chat

* Create an outgoing webhook and specify the channel to listen in
* In the URL field, set the URL following this format:

```html
https://api.telegram.org/bot<myauthorization-token>/sendMessage?chat_id=<chat-id>
```

* `chat-id` should be your Telegram group id, You can get it by adding the `@RawDataBot` or [`@getidsbot`](https://t.me/getidsbot) to your group. You should get a response like the below on joining

```javascript
GetIDsBot - Get Meta information in Telegram

Available commands:
» /admins to get a list of all current admins.
» /json in reply to a message to get it's bot api json variant.
» /user in reply to a message for info about that user.

This chat
 ├ id: -576033868
 ├ title: RC-Tel-Group
 ├ type: group
 └ all_members_are_administrators: true

Its admins:
⭐️ R

ℹ️ Commands are rate limited in group chats. I do not talk unless asked to do so.
```

* Change the bot group privacy settings so it can listen to all messages by:
  * Sending the message `/setprivacy` to botFather
  * Choosing the bot you want to edit
  * Setting the status to `Disable`

![Change telegram bot group privacy settings](<../../../.gitbook/assets/Change telegram bot group privacy settings.png>)

* Enable Script and paste the following code

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

* Add your bot to the telegram group and enjoy cross-platform communication between Rocket.Chat and Telegram.

![final product](http://i.imgur.com/LqpqUC8.jpg?1)
