# Dialogflow App Configuration

Search Dialogflow in the **Apps** menu on your Rocket.Chat administration panel, as shown below:

![](<../../../../../.gitbook/assets/image (444).png>)

Click open your Dialogflow app to see the settings available to you as an administrator: 

Following are the settings available:

1. Set the[ name of the bot you have already configured](https://docs.rocket.chat/guides/apps-guides/omnichannel-apps/dialogflow-app/dialogflow-app-configuration/bot-user-configuration) in **Bot Username**. This is the user who will assist the conversations through Dialogflow integration. 
2. **Project Id**, **Client Email**, **Private Key **are the credentials available inside your dialog flow instance. 
3. Suppose the omnichannel end-user asks something that the bot is not trained to answer and fails. **Fallback Responses Limit **defines how many failures of the conversation should be forwarded to a human agent. 
4. Upon bot-to-live agent handover, the visitor is transferred to **Target Department for Handover.**
5. The Bot sends a **Handover Message** to the visitor upon handover.
6. The Bot sends **Service Unavailable Message** to Visitor if service is unavailable.
7. The **Close Chat Message** is sent automatically when a chat is closed.
8. If **Hide Quick Replies **is enabled, then all quick-replies will hide when a visitor clicks on any one of them. 
9. Hit **Save.**

![](<../../../../../.gitbook/assets/image (452).png>)

Dialogflow app is successfully configured.
