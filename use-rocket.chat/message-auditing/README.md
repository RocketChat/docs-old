---
permalink: /administrator-guides/message-auditing/
official: true
enterprise: true
---

# Message Auditing

<figure><img src="../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (24).jpg" alt=""><figcaption></figcaption></figure>

Rocket.Chat allows authorized users to audit messages and read conversations in a workspace. The user must have an `auditor` [role](../../setup-and-administer-rocket.chat/roles-in-rocket.chat/) and `Can Audit` [permission](../workspace-administration/permissions.md) to access the auditing panel. As  an organization, you may want to inspect the [omnichannel](../omnichannel/) conversations and watch out for [agents ](../omnichannel/agents.md)that use improper language with customers.  An auditor can do the following:

* Review messages in private rooms.
* Review messages by users.
* Review direct messages between users.
* Review omnichannel messages.
* Check the audit history of individuals using the Message Auditing Panel.

To access the Message Auditing Panel,&#x20;

* Navigate to **Administration** > **Audit** > **Messages,**

{% hint style="info" %}
If you cant find the audit options, don't hesitate to get in touch with your workspace administrator to [assign message auditing permmisions to you](assign-message-auditing-permissions-to-specific-users.md).&#x20;

See [**Messaging Auditing  Log**](./) to learn more about the auditing log history.
{% endhint %}

## Search and Review Messages

You can sort messages with various filters in your workspace.

### By Channel/Room

To search for a specific message in a room,

* Update the **Message** field with the key phrase of the message you are searching .lf you wish to pull all messages, leave the **Message** field empty.
* Select the **start** and **end date** to limit the search results to a specific time frame. The ![](<../../.gitbook/assets/three-dot-icon (1).png>)**three-dots icon** also provides other time options like **Today**, **Last Week,** etc.
* Select the room you want to search in from the **Channel** dropdown**.**&#x20;
* Click **Apply** to reveal the messages gotten between the periods.

### By Users

To search for a specific message by users,

* Update the **Message** field with the key phrase of the message you are searching .lf you wish to pull all messages, leave the **Message** field empty.
* Select the **start** and **end date** to limit the search results to a specific time frame. The ![](<../../.gitbook/assets/three-dot-icon (1).png>)**three-dots icon** also provides other time options like **Today**, **Last Week,** etc.
* Type the username and select the user(s) for which you want to search messages in the **Users** field.
* Click **Apply**. The selected users' conversations between those periods that match the search phrase are displayed.

### By Direct Messages

To search for a specific message by a direct message(DM),

* Update the **Message** field with the key phrase of the message you are searching .lf you wish to pull all messages, leave the **Message** field empty.
* Select the **start** and **end date** to limit the search results to a specific time frame. The ![](<../../.gitbook/assets/three-dot-icon (1).png>)**three-dots icon** also provides other time options like **Today**, **Last Week,** etc.
* Select at least two users whose direct messages you want to check in the **Users** field.
* Click **Apply**. The conversations between the users selected in that time frame that matches the search phrase are displayed.

### By Omnichannel

To search for a specific Omnichannel conversation:

* Update the **Message** field with the key phrase of the message you are searching .lf you wish to pull all messages, leave the **Message** field empty.
* Select the **start** and **end date** to limit the search results to a specific time frame. The ![](<../../.gitbook/assets/three-dot-icon (1).png>)**three-dots icon** also provides other time options like **Today**, **Last Week,** etc.
* Enter the visitor's number in the **Visitor** field.
* Enter the agent's name who served the conversation you want in the **Agent** field.
* Click **Apply**.
