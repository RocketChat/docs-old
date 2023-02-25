# Telegram App Configuration

Search Telegram in the **Apps** menu on your Rocket.Chat administration panel, as shown below:

![Telegram in the Apps menu](<../../../../../../.gitbook/assets/image (532).png>)

Click open your Telegram app to see the settings available to you as an administrator **Settings** tab:

![Telegram app settings](<../../../../../../.gitbook/assets/2022-02-01\_16-04-42 (1).png>)

1. **Bot Token** sent by Telegram during Bot user activation. If you need help creating your telegram bot token, you can find the [instructions](https://docs.rocket.chat/guides/app-guides/omnichannel-apps/telegram-app/telegram-app-configuration/generate-your-telegram-bot-token) here.
2. You can set a **Default Department**. Only the agents of this department are able to serve Telegram conversations

{% hint style="warning" %}
If you don't have a department set up you won't receive any messages.
{% endhint %}

{% hint style="info" %}
Find out how to [create a department](https://docs.rocket.chat/guides/omnichannel/departments) for your Rocket.Chat workspace.
{% endhint %}

3\. You can set the **Service Unavailable Message** that will be sent to the user if some error occurs like if no agents are online

4\. You can set the **Welcome Message** that will be sent to visitors when they send their first message

5\. The **Conversation Finished Message** will be sent to visitors when the conversation is closed

{% hint style="info" %}
Only the agents of that particular department are able to see and take the chats.
{% endhint %}

6\. **Agents Display Name:** You can choose to display the agent's name or username.

7\. **File Upload Enabled:** You can enable/disable file sharing.

8\. And you can select the type of files you wish the Agents and your Telegram Contacts can share under **Accepted Media Types**

9\. Hit **Save Changes** in the top right corner to save your settings and your Telegram app is successfully configured. You can see the new Telegram channel upon closing the administration panel.

### Quick Replies

You can also use quick reply buttons to send/receive quick replies on telegram.

![Quick repiles](<../../../../../../.gitbook/assets/telegram quick replies .png>)

{% hint style="info" %}
**If you don't yet have a chatbot solution ready to connect to Omnichannel or are interested in discovering** [**Rocket.Chat**](http://rocket.chat) **natively compatible solutions such as** [**Dialogflow**](https://docs.rocket.chat/guides/app-guides/omnichannel-apps/dialogflow-app) **or** [**RASA**](https://docs.rocket.chat/guides/app-guides/omnichannel-apps/rasa-app)**. Check out our** [**marketplace**](https://rocket.chat/marketplace) **and learn more!**
{% endhint %}

You can also have [**Assign new conversations to bot agent**](https://docs.rocket.chat/guides/administration/settings/omnichannel-admins-guide#routing) \*\*\*\* toggled on for the routing conversation to the bot agent if any. Please note that it’s an optional configuration, but for companies that have a chatbot user serving Omnichannel conversations that’s a required setting.

![Telegram routing to bot agent](<../../../../../../.gitbook/assets/bot agent .png>)
