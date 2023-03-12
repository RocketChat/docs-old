---
description: Enable and configure Omnichannel
---

# Omnichannel Admin's Guide

Configure how [Omnichannel](../../../omnichannel/) can be used to streamline conversations from various mediums into Rocket.Chat. Omnichannel adds the ability to set up and receive conversations from pop-up [Live Chat widgets](../../../omnichannel/livechat-widget-installation.md) on your website or from your business Facebook.

Enabling and using Rocket.Chat Omnichannel gives seamless, effortless, and high-quality customer experiences all within a defined channel on your Rocket.Chat workspace.

To access this section:

&#x20;Navigate to **Administration** > **Workspace** > **Settings** > **Omnichannel**

{% hint style="info" %}
Remember to hit **Save Changes** in order to apply any changes made here.
{% endhint %}

* **Enable Omnichannel**: When set to true, it enables the Omnichannel feature on your Rocket.Chat instance.\
  Workspace administrators and omnichannel managers can now see the [Omnichannel ](../../../omnichannel/)section to manage, while Omnichannel [Agents ](../../../omnichannel/agents.md)have access to their respective Omnichannel features.
* **Request comment when closing conversation**: If enabled, the agent will need to set a comment before the conversation is closed.
* **Accept new omnichannel requests when the agent is idle**: Toggle true to let Omnichannel agents receive new chat requests when they are idle.
* File Uploads Enabled: Enable this to allow file uploads on Omnichannel communication channels.
* **Ask visitors if they would like a transcript after chat closed**: When enabled, Omnichannel visitors will be asked if they need a transcript of their conversation after closing.
* **Message to Show When Asking About Transcript**: This lets you set a message that will be shown to the visitor when asking if they need a transcript.

## Canned Responses <a href="#a4x6dcwkpxm" id="a4x6dcwkpxm"></a>

{% hint style="info" %}
Canned Responses is an [Enterprise](../../../../setup-and-administer-rocket.chat/enterprise-edition-trial/) feature. ![](<../../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (27).jpg>)
{% endhint %}

Under this section, you can enable or disable the use of Canned Responses.\
Canned Response allows for OmnichannelAgents to use predefined message replies.

* **Enable Canned Responses**: Turn on to enable the use of Canned Replies.

Learn more about Canned Responses below:

{% content-ref url="../../../omnichannel/canned-responses/" %}
[canned-responses](../../../omnichannel/canned-responses/)
{% endcontent-ref %}

## External Frame <a href="#gdtlte4az75" id="gdtlte4az75"></a>

Use an external frame to embed Rocket.Chat into your own solution or interact with your CRM.

* **External frame enabled**: Turn on to enable External frame.
* **External frame URL**: Add the URL of your external frame.
* **Encryption key (JWK)**: If provided, it will encrypt the user's token with the provided key, and the external system will need to decrypt the data to access the token.

## Live Chat

Manage Omnichannel Live Chat settings.

* **Livechat Title**: The title shown on your Live Chat widget.
* **Livechat title background color**: The Live Chat background color.
* **Enable message character limit**: Toggle on to enable the message character limit.
* **Livechat message character limit**: Set a limit on message characters allowed on the visitor.
* **Display Offline Form**: When enabled, the offline form will be seen by visitors when there is no available agent.
* **Clear guest session when chat ended**: Toggle on to clear guest session when a chat ends.
* **Validate Email Address**: When turned on, the visitor's email address will be validated.
* **Offline Form Unavailable Message**: A message to show when the online form is unavailable.
* **Title**: The offline form title.
* **Color**: The style color of the Live Chat widget. This also changes the color of the Live Chat icon.
* **Instructions**: Instructions to your visitor to fill out the form to send a message.
* **Email Address to Send Offline Messages**: An email address to which you want all offline messages to be sent.
* **Offline Success Message**: A message seen by the visitor after successfully sending an offline message.
* **Allow Visitor to Switch Departments**: When enabled, Live Chat visitors will be able to switch departments.
* **Show agent information**: Enable this to show information about the agent attending to a visitor in the Live Chat widget.
* **Show agent email**: When set to true, the Omnichannel Agent's email will be visible to the visitor.
* **Conversation Finished Message**: Set a message to be sent to a visitor when the conversation is finished.
* **Conversation Finished Text**: Additional text to show after a conversation is finished.
* **Show Pre-registration Form**: This lets you set whether or not to show the pre-registration form.
* **Show name field**: Toggle to show or hide the name field.
* **Show email field**: Toggle to show or hide the email field.
* **Monitor History for Changes on**: This lets you monitor history changes on Page URL or Page Title.
* **Send Visitor Navigation History as a Message**: When set to true, you can send a visitor's navigation history to them as a message.
* **Registration Form Message**: The message seen on the registration form.
* **Livechat Allowed Domains**: Comma-separated list of domains allowed to embed the Live Chat widget. Leave blank to allow all domains.
* **Send Livechat offline messages to a channel**: Whether to send Live Chat offline message to a channel.
* **Channel Name**: The channel to which Live Chat offline messages should be sent to.

See how to [install the Live Chat widget](../../../omnichannel/livechat-widget-installation.md) and manage the [Live Chat appearance](../../../omnichannel/livechat-widget-appearance.md) on this [Omnichannel guide](../../../omnichannel/).

## Business Hour

Set your business hours to automatically manage when your Live Chat agents are online.

{% hint style="info" %}
Configuring multiple business hours is an [Enterprise](../../../../setup-and-administer-rocket.chat/enterprise-edition-trial/) feature. ![](<../../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (27).jpg>)
{% endhint %}

* **Business hours enabled**: Toggle on to enable business hours.
* **Business Hour Type (Single or Multiple)**: Set the type of business hour. Community workspaces can only set a single business hour.

Learn more on how to create and manage Business Hours here.

{% content-ref url="../../../omnichannel/business-hours-managers-guide.md" %}
[business-hours-managers-guide.md](../../../omnichannel/business-hours-managers-guide.md)
{% endcontent-ref %}

## CRM Integration

Integrate your Rocket.Chat Live Chat events using webhooks to other external tools or CRMs.

See more details about this below.

{% content-ref url="../../../omnichannel/webhooks-managers-guide.md" %}
[webhooks-managers-guide.md](../../../omnichannel/webhooks-managers-guide.md)
{% endcontent-ref %}

## Facebook

Configure the integration between Rocket.Chat and Facebook and communicate directly with your Facebook users.

{% hint style="info" %}
You are required to request an `OmniChannel API Key` and an `OmniChannel API Secret` from Rocket.Chat support through [omni@rocket.chat](mailto:omni@rocket.chat). This can take a few days depending on demand.
{% endhint %}

* **Facebook integration enabled**: Set true to enable Facebook integration.
* **OmniChannel API Key**: The OmniChannel API Key provided by support.
* &#x20;**OmniChannel API Secret**: The OmniChannel API Secret provided by support.

{% content-ref url="../../../omnichannel/facebook-messenger-managers-guide.md" %}
[facebook-messenger-managers-guide.md](../../../omnichannel/facebook-messenger-managers-guide.md)
{% endcontent-ref %}

## GDPR

Configure GDPR data processing and consent.

* **Allow to collect and store HTTP header information**: This lets you determine whether Live Chat is allowed to store information collected from HTTP header data, such as IP address, User-Agent, and so on.
* **Force visitors to accept data processing consent**: When toggled on, visitors are not allowed to start chatting without consent.
* **Data processing consent text**: Set the consent text that visitors see about how you process their data.

## Queue Management <a href="#uuvo8ic5yio" id="uuvo8ic5yio"></a>

<figure><img src="../../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (27).jpg" alt=""><figcaption></figcaption></figure>

Configure Omnichannel Queue and how simultaneous chats get managed.

* **Waiting queue**: Turn on to enable the Omnichannel queue.
* **Waiting queue message**: A message that is displayed to the visitor when they get in the queue.
* **Max. number of simultaneous chats**: Set the maximum number of simultaneous chats that agents can tend to.
* **Calculate and dispatch Omnichannel waiting queue statistics**: Processing and dispatching queue statistics such as position and estimated waiting time. If the _Livechat channel_ is not in use, it is recommended to disable this setting and prevent the server from doing unnecessary processes.
* **Queue processing delay timeout**: Set time in seconds in which queue delay processing will timeout.
* **Number of recent chats to calculate estimate wait time**: The number of served chats to be used when calculating queue time.
* **Maximum waiting time in queue**: The maximum time in minutes for which a chat can be kept in queue, `-1 means unlimited`.

See more about Queuing here.

{% content-ref url="../../../omnichannel-agents-guides/omnichannel-queue.md" %}
[omnichannel-queue.md](../../../omnichannel-agents-guides/omnichannel-queue.md)
{% endcontent-ref %}

## Routing

Routing allows you to define the behavior of your Live Chat queues.

* **Omnichannel Routing Method**: Select your preferred routing method. Please refer to this article [queue-types-routing-algorithm.md](queue-types-routing-algorithm.md "mention") for information on the types of routing methods used in Rocket.Chat.
* **Accept with No Online Agents**: When enabled, Omnichannel conversations will be accepted even when there are no Agents online.
* **Assign new conversations to bot agent**: Enable this, and the routing system will attempt to find a bot agent before addressing new conversations to a human agent.
* **Max number of items displayed in the queue**: Set the maximum number of items displayed in the incoming Omnichannel queue.
* **Show Queue List to All Agents**: Enable this to show the Omnichannel Queue list to all  [Omnichannel Agents](../../../omnichannel/agents.md).
* **External Queue Service URL**: Set your External Queue Service URL if your _Omnichannel Routing Method_ is [External Service](queue-types-routing-algorithm.md#external-service).
* **Secret Token**: Enter the secret token.
* **Last-Chatted Agent Preferred**: Enable to allow the allocation of chats to the agent who previously interacted with the same visitor if the agent is available when the chat starts.
* **Assign new conversations to the contact manager**: This setting allocates a chat to the assigned Contact Manager as long as the Contact Manager is online when the chat starts.

## Sessions

The Sessions setting allows you to define how open chat sessions are to be handled.

* **How to Handle Open Sessions When Agent Goes Offline**: Select what happens to an open chat session when an Agent goes offline.
  * **None**: Nothing happens.
  * **Forward**: Gets forwarded to another Agent.
  * **Close**: The chat gets closed.
* **How Long to Wait After Agent Goes Offline**: Set the time in seconds before the action specified above happens.
* **Comment to Leave on Closing Session**: Set a comment to be displayed to the Visitor on closing the chat.
* **How Long to Wait to Consider Visitor Abandonment?**: This lets you set how long in seconds to wait for before considering the Visitor abandoned the chat.
* **How to handle Visitor Abandonment**: Select what to do when Visitors abandon chats.
* **Custom message when room is automatically closed by visitor inactivity**: Set a message that will be sent when a chat gets automatically closed due to the Visitor's inactivity.
* **How long to wait before closing a chat in On Hold Queue?**: Define how long in seconds the chat will remain in the On Hold queue until it's automatically closed by the system.
* **Custom message for closed chats in On Hold queue**: Custom Message to be sent when a room in On-Hold queue gets automatically closed by the system.
* **Allow agents to manually place chat On Hold**: When enabled, the agent will have the option to place a chat On Hold, provided the agent has sent the last message.
* **Timeout (in seconds) for automatic transfer of unanswered chats to another agent**: Specify the time in seconds for unanswered chats to be transferred to other agents.

## Video and Audio Call

Configure the provider responsible for your Video and Audio calls.

* **Call Provider**: Select the Call provider between `Jitsi` and `Web.RTC` to use for Omnichannel Calls.

Extend the functionality of video and audio calling with any of the available [Rocket.Chat Conference Call](../../../rocket.chat-conference-call/conference-call-admin-guide/) Apps like [Jitsi](../../../rocket.chat-conference-call/conference-call-admin-guide/jitsi-app.md), [Pexip](../../../rocket.chat-conference-call/conference-call-admin-guide/pexip-app.md), [BigBlueButton](../../../rocket.chat-conference-call/conference-call-admin-guide/bigbluebutton-bbb-app.md), and [Google Meet](../../../rocket.chat-conference-call/conference-call-admin-guide/google-meet-app.md).
