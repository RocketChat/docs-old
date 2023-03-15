# Dialogflow App Configuration

Search Dialogflow in the **Apps** menu on your Rocket.Chat administration panel, as shown below:

![](<../../../../../../.gitbook/assets/image (460).png>)

Click open your Dialogflow app to see the settings available to you as an administrator under the **Settings** tab.

Following are the settings available:

1. Set the[ name of the bot you have already configured](https://docs.rocket.chat/guides/apps-guides/omnichannel-apps/dialogflow-app/dialogflow-app-configuration/bot-user-configuration) in **Bot Username**. This is the user who will assist the conversations through Dialogflow integration.

![](<../../../../../../.gitbook/assets/image (455).png>)

2\. **Project Id**, **Environment** (The [environment](https://cloud.google.com/dialogflow/es/docs/agents-versions) on which the bot is set up), **Client Email**, **Private Key** are the credentials available inside your dialog flow instance, and **Language** lets you choose the language in which you'd be interacting with the Bot.

![](<../../../../../../.gitbook/assets/2022-01-15\_19-13-30 (1) (1) (1) (1) (1) (1) (3).png>)

3\. Suppose the Omnichannel end-user asks something that the bot is not trained to answer and fails. **Fallback Responses Limit** defines how many failures of the conversation should be forwarded to a human agent.

4\. Upon bot-to-live agent handover, the visitor is transferred to **Target Department for Handover.**

5\. The Bot sends a **Handover Message** to the visitor upon handover.

6\. The Bot sends **Service Unavailable Message** to Visitor if service is unavailable.

7\. The **Close Chat Message** is sent automatically when a chat is closed.

8\. If **Hide Quick Replies** is enabled, then all quick-replies will hide when a visitor clicks on any one of them.

9\. Hit **Save.**

![](<../../../../../../.gitbook/assets/2021-12-12\_18-46-48 copy.png>)

Dialogflow app is successfully configured.
