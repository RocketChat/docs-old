---
description: Enable and configure omnichannel on your workspace
---

# Omnichannel Admin's Guide

OmniChannel adds the ability to receive conversations from a pop-up livechat support on your website or your business Facebook chat or any other media directly in Rocket.chat.

Enabling and using Rocket.Chat omnichannel gives seamless, effortless and high-quality customer experiences all within a defined channel on your Rocket.Chat workspace.

## Activation

### Enable Omnichannel

To enable the Omnichannel feature on your Rocket.Chat instance:

1. Go to **Administration**

![](<../../../../.gitbook/assets/image (586).png>)

1. Search '**Omnichannel**' in **Settings** and enable it

![](<../../../../.gitbook/assets/image (26).png>)

Now the admin will have access to _**Omnichannel Panel Settings**_ through a new menu called `Omnichannel`, as shown below:

![](<../../../../.gitbook/assets/image (587).png>)

## Configuration

### **OmniChannel Basic Settings**

1. Enable Omnichannel on your Rocket.Chat instance
2. Enable/Disable request comment from the agent when closing a conversation
3. Enable/Disable acceptance of new omnichannel requests when the agent is idle
4. Enable/Disable continuous sound notification for new omnichannel room/conversation
5. Enable/Disable file uploads in the livechat widget
6. Enable/Disable asking the visitor if they would like a transcript of the conversation.
7. Enter the message to show when asking for a transcript.

![](<../../../../.gitbook/assets/image (46).png>)

### Business Hour

The feature turns on the omnichannel toggle for the set business hours automatically. And you will be able to receive omnichannel conversations after. The toggle will be turned off during off-hours. The enterprise workspaces can set up multiple business hours according to different time zones and their business needs. Community workspaces can only set up one set of business hours.

1. Enable business hours
2. Choose multiple business hours according to your enterprise needs

![](<../../../../.gitbook/assets/image (49).png>)

### CRM Integration

Please follow the steps given [here](https://docs.rocket.chat/guides/omnichannel/webhook).

### External Frame

If you have an app that you want to integrate with Rocket.Chat and use that app to embed an iFrame in Rocket.Chat to interact with your CRM. You can do so using External Frame.

1. Enable external frame
2. Add the URL of your external frame
3. Enter the encryption key, as shown below:

![](<../../../../.gitbook/assets/image (50).png>)

### Facebook

If your organization wishes to communicate with users of Facebook, you can enable integration within Rocket.Chat to do so.

First, you will need to request an API key from Rocket.Chat Support then set it up within your Administration area.

Send an email to [omni@rocket.chat](mailto:omni@rocket.chat) to request an API key. These are processed as time allows, and may take a few days, but you should have your key and secret soon enough.

1. Enable Facebook integration
2. Enter your _OmniChannel API Key_
3. _Enter OmniChannel API Secret_. **Save** the changes

‌

![](https://gblobscdn.gitbook.com/assets%2F-M418Ul0aSTwf2PYsyPW%2F-MIz0NPAavAh0lU\_m6WU%2F-MIz2cI9LQb6iNIthxPa%2Fimage.png?alt=media\&token=b082edb1-8ac9-4f9b-84d5-5434d74bbbbf)

### GDPR

If you are a GDPR compliant company and want to allow your visitors to request to remove their data, Rocket.chat allows you to do that for all your incoming chats, as shown below:

![](<../../../../.gitbook/assets/image (61) (1).png>)

### Livechat

1. Set the title of your widget
2. Set the color of the title bar of your widget
3. Enable message character limit
4. Set the allowed message character length
5. Display offline form
6. Validate email address

as shown below:

![](<../../../../.gitbook/assets/image (51).png>)

Now customize the appears of your livechat widget here for the hours when none of your agents are online/working.

1. Set **Offline Form Unavailable Message**, if any
2. Set **Offline Tittle**
3. Set title bar **Color** for the offline widget
4. Give instructions, if any
5. Set the email address where you want to receive your offline messages
6. Set success message to display to the visitor when they have sent their message offline

as shown below:

![](<../../../../.gitbook/assets/image (52).png>)

Some more settings that you can customize according to your needs are shown below:

![](<../../../../.gitbook/assets/image (54).png>)

### RD Station

This is a CRM integration with RD Station.

We set up your token, and when a new livechat conversation starts, your visitor information is sent to the RD station.

![](<../../../../.gitbook/assets/image (56).png>)

### Routing

Routing allows you to define the behavior of your livechat queues.

Detail of every setting is listed below:

1. Select your preferred routing method (Please refer to [this](https://docs.rocket.chat/guides/omnichannel-guides/omnichannel/livechat-queues) article for information on types of routing methods used in rocket chat)
2. Enable acceptance of incoming omnichannel requests even if there are no online agents if you want
3. Enable if you want the routing system to attempt to find a bot agent before addressing new conversations to a human agent
4. Set the limit of **Max number of items displayed in the queue** if you want
5. Enable if you want to show the livechat queue to all the agents
6. Mention your External Queue Service URL if your _Omnichannel Routing Method_ is **External** **Service**
7. Enter **Secret Token**
8. Enable the **Waiting queue** if you want
9. Enter the **max. number of simultaneous chats** that you want your agents to attend
10. The **Number of recent chats to calculate estimated wait time** defines the number of last served rooms that will be used to calculate queue wait times
11. Enable **The Last-Chatted Agent Prefered** setting allocates chats to the agent who previously interacted with the same visitor if the agent is available when the chat starts

![](<../../../../.gitbook/assets/image (59).png>)

### Sessions

Sessions allow you to decide how you want to handle your chat sessions when an agent goes offline:

1. You can either forward the chat to another agent, close it or do nothing
2. Mention the amount of time in seconds that you want to wait before you want to consider that the agent has abandoned the chat
3. Enter the message to display to the visitor on closing the session
4. Mention the time you want to wait to consider visitor abandonment
5. Enable automatic closing of rooms abandoned by the visitor if you want
6. Enter the message to display to the visitor when the room is automatically closed by visitor inactivity

As shown below:

![](<../../../../.gitbook/assets/image (60).png>)

### Video and Audio Call

Make Jitsi, your Omnichannel call provider by going to **`Administration > Omnichannel > Video and Audio Call > Call Provider > Jitsi`**
