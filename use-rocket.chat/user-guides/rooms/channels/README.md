# Channels

Channels are chat rooms with useful features designed to increase communication and collaboration. For example, you can have a dedicated channel for the designers in your workspace to discuss design-related topics.

## Type Of Channels

Teams can be made private or public. The list of channels is displayed on the sidebar of your workspace. **Public Channels** are listed first, followed by **private Channels**, in alphabetical order.

### Public Channels

**Public Channels** are **open for all members of a Rocket.Chat workspace** to join, and anything posted is searchable by all members. They are identified by: ![](../../../../.gitbook/assets/2021-12-23\_19-51-58.png)

Channels make it easy to find out what's going on with your team. New members can join a channel and read all the information previously shared by other users. Public conversations help you build your organization's knowledge base with minimal effort. For example, create a channel for a company department or to discuss a specific programming language.



{% hint style="success" %}
Users mentioned in a thread inside a **public channel** are automatically added to that channel.
{% endhint %}

### Private Channels&#x20;

**Private Channels** are closed channels. They are only visible only to their members. Use private channels for sensitive, confidential subjects that are not open to all members. They are identified by: ![](../../../../.gitbook/assets/2021-12-23\_19-50-54.png)

Private channels are joined through invitation only. The administrator sets the permissions that determine who can invite others to the channel. Only administrators, room owners, and moderators can invite others to private rooms by default.&#x20;

## Channel Privacy and Encryption

### Read-Only Channels

Only authorized users (users with write permissions) can send messages in **Read-Only** **channels**. All other users can react to messages on this channel. **Read-Only channels** are most suitable for announcements and voting.

### Broadcast Channels

Like read-only channels, broadcast channels allow authorized users with the appropriate permissions to write new messages while other users can reply to existing messages.

However, it differs from read-only channels in the following ways:

* All messages have a reply button that redirects you to the sender's direct message (DM), replying to the message as a quote.
* Users without permission won't be able to react to messages.
* Users without permission (the same one to post on read-only channels) inside this channel won't be able to see each other in the user list.

### Encrypted Channels

Encrypted channels have end-to-end encryption enabled across all messages exchanged by the Channel members. To learn more, see [End to End Encryption](../../security-bundle/end-to-end-encryption-user-guide.md).

## Channel Information

The room information screen gives detailed information about the current channel. These details include:

* **Channel Name**: The channel's name, how users see the title and find the channel via search.
* **Topic**: The topic is displayed next to the title on the channel header. It is a great way to provide more channel information.
* **Announcement**: Announcements are highlighted in a bar under the channel header.
* **Description**: The description of the channel.
* **Private**: Tells whether a channel is private or public.
* **Read Only**: Tells whether a channel is read-only.
* **Archived**: Tells if a channel is archived. Nobody can post messages on an archived channel, and a channel search will not find that channel.
* **Password**: Tells whether a channel has a password and lets you set the password. If a channel has a password, users need to enter the password to become a channel member.

{% hint style="warning" %}
If a [Retention Policy](../../../workspace-administration/settings/retention-policies.md) is active on this channel, a red warning box appears stating when messages or files are deleted.
{% endhint %}
