---
description: Learn how to handle omnichannel conversations.
---

# Omnichannel Conversation

When you log in to your workspace as an agent and [set your status to **Available**](./#omnichannel-agent-availability)**,** to handle new conversations:

* Any new Conversation initiated to the [department](../omnichannel/departments.md) you belong to appears under **Chats in Progress**
* Click on a conversation to reply to omnichannel contact.

## Omnichannel Conversation Quick Actions

Some quick actions can be performed at the top of the chat screen in an Omnichannel conversation. They are shown as icons on the top right.

## Adding to Favorites

Click <img src="../../.gitbook/assets/Favourite icon.png" alt="" data-size="line"> to add an omnichannel conversation to your favorites.

## Moving back to the Queue

If an omnichannel conversation needs to be handled by another agent within your department,&#x20;

* Click <img src="../../.gitbook/assets/icon move back to queue.png" alt="" data-size="line"> to&#x20;
* Click **Move to the queue**.

The conversation starts to appear in the Queued Chats for other agents to see.

## Forwarding a conversation

To forward a conversation:

1. Click on the <img src="../../.gitbook/assets/forward-chat.png" alt="" data-size="line"> icon.
2. Enter the department or the Agent to whom the conversation should be forwarded.
3. Leave a comment if necessary
4. Hit **Forward**.
5. A notification appears briefly at the top to indicate if the operation succeeded or failed.

## Sending conversation transcript

Following an Omnichannel conversation, it may be necessary to forward the transcript to the contact you were serving as an agent. To send a transcript:

* Click <img src="../../.gitbook/assets/send-transcript.png" alt="" data-size="line"> icon.
* Enter their **Email**.
* Enter the **Subject**.
* Hit **Request**.

## Place conversation On-Hold ![](<../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1).jpg>)

During supporting conversation as an agent, you can find yourself in a situation where Omnichannel contacts terminate the conversation abruptly. Still, the conversation will persist in your queue until it is **Closed**. This can potentially impact your service capacity as you may be unable to engage in new conversations due to the maximum number of simultaneous conversations allowed per agent. To address this concern, you can utilize the **Place Chat On-Hold** feature to pause the conversation temporarily.

To place a conversation on hold,

* Click <img src="../../.gitbook/assets/image (1).png" alt="" data-size="line">
* Click **Place Chat On-Hold**&#x20;

If the Omnichannel contact engages again, the routing algorithm will try to find you first to assign this conversation. If you are busy serving other conversations at maximum capacity, the conversation will be assigned to the next available agent.

Or click the conversation in the queue at any time and click **Resume** to engage with the same contact again.

{% hint style="info" %}
You can place the conversation on hold manually only when you send the last message to the contact.
{% endhint %}

## Ending a conversation

To end a conversation:

1. Click <img src="../../.gitbook/assets/end-conversation.png" alt="" data-size="line"> icon.
2. Enter comments if any
3. Update [Tags](../omnichannel/tags-managers-guide.md) for this conversation.
4. Select **Export chat transcript as PDF** in case you need it exported.
5. Select **Send chat transcript via email** if you want it sent to the guest's email.
6. Click **Confirm,** and the conversation disappears from the **Chats in Progress** queue.
7. The PDF conversation transcript is sent to you as a direct message if you request that the chat be exported.

## Calling

Communication with omnichannel contacts on Rocket.Chat can also be done using audio/video calls. Your workspace must have at least one call app installed to make these calls.&#x20;

{% hint style="info" %}
To enable Rocket.Chat video call feature, please get in touch with your administrator or follow the [instructions](https://docs.rocket.chat/guides/administration/settings/video-conference-admin-guide/omnichannel-video-audio-call-admins-guide).
{% endhint %}

{% hint style="success" %}
The following flow is sampled for web users, but both (Web and Mobile) user journeys are supported.
{% endhint %}

To make a call:

1. Click <img src="../../.gitbook/assets/phone-icon.png" alt="" data-size="line">icon from quick actions on the right side
2. Click **Join Call** button in the conversation.
3. Enter your name in the new browser window and hit **Join meeting**

## Room information

* Click the <img src="../../.gitbook/assets/info.png" alt="" data-size="line">icon from quick actions on the right side to reveal the details of your current conversation.
* The details revealed include the date and time, average response time, queue time, the contact name, and your username.
* Click **Edit** to add some further information. E.g., the topic discussed or priority&#x20;
* Hit **Save**

## Canned Responses ![](<../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1).jpg>)

Canned responses allow you to call pre-saved message snippets with shortcuts (preceded with `!`) to communicate a quick note to your omnichannel contact in omnichannel as well as regular conversations inside your Rocket.Chat's workspace.

**To send a canned response,**

* Start your message with `!` and a shortcut or you can select the canned response from the drop-down list that will appear above your text field
* You can also use the same canned responses when talking to your peers outside Omnichannel&#x20;

To access all available canned responses for your department or all public canned responses on your workspace,&#x20;

* Click <img src="../../.gitbook/assets/image (2) (1).png" alt="" data-size="line"> from quick actions on the right side
* Hover your cursor over the canned response you want to use in your current conversation&#x20;
* Hit **Use**

### Creation of canned response from a room

You can create a canned response during an omnichannel conversation on the go if you have appropriate permissions.

{% hint style="info" %}
Check [canned-responses](../omnichannel/canned-responses/ "mention") or contact your workspace administrator.&#x20;
{% endhint %}

To create a canned response in a conversation,

* Click <img src="../../.gitbook/assets/image (2) (1).png" alt="" data-size="line"> from quick actions on the right side
* Scroll down and click **Create**
* Enter **Shortcut**. E.g., `!welcome`
* Enter **Message**. E.g., `Welcome to Rocket.Chat LiveChat support! How can I help you?`
* Update **Tags** if required
* Hit Save. Your new canned response is saved and ready to be used.

## Contact information

To get the contact details of the currently selected omnichannel conversation's contact,

* Click ![](../../.gitbook/assets/contact-info.png)from quick actions on the right side

While viewing contact information, click **Edit** to edit the contact details or click **Chat History** to see the chat history**.**

## Searching chats

To search for messages in a conversation,

1. Click ![](../../.gitbook/assets/search.png) from quick actions on the right side.
2. Enter your search query.
3. The search result is displayed as you type. You can also use [Regular Expressions.](https://en.wikipedia.org/wiki/Regular\_expression) For example, to search for the word `error` followed by any three digits, use `error\d{3}` .

## Searching for file attachments

To search for files that have been attached to the conversation,

1. Click  <img src="../../.gitbook/assets/attach-file.png" alt="" data-size="line">from quick actions on the right side
2. All files that have been attached are displayed.
3. Enter the search query.
4. Optionally, choose the file type you are interested in. By default, all the file types are displayed.

## Viewing contact chat history

To get the chat history of the contact:

1. Click  ![](../../.gitbook/assets/contact-history.png) icon
2. The contact is displayed alongside the last closing message which you sent.
3. Below the contact details, click the ![](../../.gitbook/assets/messages.png) icon, and the messages in the history are displayed.
4. Enter a search query in the search box. The results are displayed as you type.
