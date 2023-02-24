# Simple Telegram Bot

A simple relay communication between Rocket.Chat and Telegram is possible by configuring a basic bot. The guide below shows a community example of how this can be achieved with webhooks.

This will give you the possibility of relaying messages between Telegram and Rocket.Chat in a specified room of your choice.

{% hint style="success" %}
Rocket.Chat [Enterprise workspaces](../settings/enterprise.md) have the [Telegram App](../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/) packaged with many more functionalities and other [Omnichannel](../../omnichannel/) features to use.
{% endhint %}

{% hint style="warning" %}
Note: This integration is not designed to work for Omnichannel Conversations. Please check out the [Telegram App](../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/) for serving your Omnichannel conversations with Telegram.
{% endhint %}

## Getting Started

{% hint style="info" %}
Make sure Your Rocket.Chat workspace URL is publicly available.
{% endhint %}

1. Log in to your [Telegram](https://web.telegram.org/) account on your mobile or using a browser
2. Add and open a conversation with the user `BotFather`
3. Click **start**
4. Send `/newbot` to start creating a new bot
5. Follow the instructions to continue
   * Set the bot's username
   * Telegram successfully creates the bot and shows how to access it
6. Copy the token provided, it will be needed for the configuration

![Creating new telegram bot](<../../../.gitbook/assets/Creating telegram bot.png>)

## Configuration

{% hint style="info" %}
Before configuring the Telegram integration, make sure you:

* [Create a channel](../../user-guides/rooms/channels/create-a-new-channel.md) on Rocket.Chat for incoming and outgoing conversations.
* [Create a user](../users/#add-new-users) with `bot` [role ](../../../setup-and-administer-rocket.chat/roles-in-rocket.chat)to be used for the relay.
{% endhint %}

### Creating an Incoming Telegram webhook in Rocket.Chat

The incoming webhook is responsible for relaying messages from Telegram into Rocket.Chat into a specific [Channel](../../user-guides/rooms/channels/).

To create an incoming webhook

* Go to **Administration** > **Workspace** > **Integrations** in Rocket.Chat
* Create a new Incoming Webhook following this guide [#create-a-new-incoming-webhook](./#create-a-new-incoming-webhook "mention")
  * Enable the integration
  * Set the webhook integration name
  * Set the **Post to Channel** as the channel created above
  * Set **Post as**, as the user created above
  * Enable the script and paste the following code

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

* **Save**

This creates a new incoming integration with a **webhook URL** and **token** provided.

#### Setting Telegram webhook

* Copy the incoming webhook URL provided by Rocket.Chat after saving
* Change the following URL with `yourTelegramBotToken` and Incoming `webhookURL` and open on your browser

```html
https://api.telegram.org/bot<my-telegram-authorization-token>/setwebhook?url=<Incoming_Webhook_Link_from_Rocket.Chat>
```

* You see a response in this format to indicate success

```json
{
"ok": true,
"result": true,
"description": "Webhook was set"
}
```

#### Test Telegram Incoming Integration

Test your incoming Webhook by sending a telegram message to the Telegram bot.

The message sent gets posted in the `channel` by the `user`you specified in the incoming webhook configuration page.

![Telegram bot webhook Rocket.Chat](<../../../.gitbook/assets/Telegram bot webhook with Rocket.Chat.png>)

### Creating a Telegram Group with Bot access

A Telegram group can be configured to send and receive messages to and from Rocket.Chat

Create a Telegram group and grant bot access

* Create a new Telegram group
* Get the group chat id. This can be gotten by
  * Adding the user `RawDataBot`to the group
  * On joining, a response like below is seen with the chat id

```
Your chat id is -873457731, your id is 1140377161

Also you can send me username or joinchat link in a private message

Kisses, your bot
```

* Change the bot group privacy settings so it can listen to all messages by:
  * Sending the message `/setprivacy` to botFather
  * Choosing the bot you want to edit
  * Setting the status to `Disable`

![Change telegram bot group privacy settings](<../../../.gitbook/assets/Change telegram bot group privacy settings.png>)

### Creating an Outgoing Telegram webhook in Rocket.Chat

The outgoing integration is used to relay messages back from Rocket.Chat to Telegram.

* Go to **Administration** > **Workspace** > **Integrations** in Rocket.Chat
* Create an outgoing webhook following this guide [#create-a-new-outgoing-webhook](./#create-a-new-outgoing-webhook "mention")
  * Select the Message sent as the **Event Trigger**
  * Enable the integration
  * Set any Trigger Words in which messages must have before they get relayed if needed
  * Specify the channel to listen in
  * Set the URL following this format:

```html
https://api.telegram.org/bot<my-telegram-authorization-token>/sendMessage?chat_id=<chat-id>
```

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

* **Save**
* Add your bot to the telegram group and enjoy cross-platform communication between Rocket.Chat and Telegram.

<figure><img src="../../../.gitbook/assets/Rocket.Chat X Telegram.png" alt=""><figcaption><p>Rocket.Chat X Telegram</p></figcaption></figure>

{% hint style="success" %}
* Multiple Outgoing Triggers can be configured to cover all use cases.
* The scripts can be customized as needed. Learn more here [#script-details](./#script-details "mention")
{% endhint %}
