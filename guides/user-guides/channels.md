# Channels

Conversations in Rocket.Chat occur in **channels**. Channels are chat rooms with useful features designed to increase communication and collaboration.

There are three kinds of channels: [public channels](channels.md#public-channels), [private groups](channels.md#private-groups), and [direct \(1-on-1\) messages](channels.md#direct-messages).

## Public channels

**Public channels** \(also called **channels** for short\) act as a base for all channel types. Use channels for conversations that are open to your entire team. Anyone on your team can join a channel.

Channels make it easy to find what's going on with your team. New team members can join a channel and read all the information previously shared by other users.

When in doubt, create a channel. Public conversations help you build a knowledge base of your organization with minimal effort. For example, create a channel for a company department or to discuss a specific programming language.

## Private groups

**Private groups** are closed channels. They are visible only to their members. Use private groups for subjects that are sensitive, confidential, or limited to a small group of team members.

Private groups are joined through invitation only. The administrator sets the permissions that determine who can invite others to a private group. By default, only administrators, room owners, and moderators can invite others to private rooms.

## Direct Messages

**Direct messages \(DMs\)** are a private 1-on-1 conversation between team members. They can be sent to any user on your server.

**Direct Messages Between Multiple Users** There is a feature that allows you to chat with multiple users inside a DM. For more info check: [Direct Messages Between Multiple Users](direct-messages-between-multiple-users.md).

## Listing channels

Find public and private channels that you are watching in the left sidebar under the **Channels** sections.

Public channels are represented by a hash symbol next to the channel name, and private channels by a lock. Public channels appear first above private channels below them and alphabetically ordered.

### Unread messages

Channels with new messages appear bolded.

When using the **Unread Mode**, a new section called **Unread** appears on the left sidebar. All channels with unread messages move to this new section until the messages have been reads.

To activate Unread Mode, go to **My Account**&gt; **Preferences**. Change the **Sidebar channel list mode** setting to **Unread Rooms Mode**.

### Mentions

When someone mentions you with `@username`, `@all` or `@here`, a symbol or a number will appear alongside the channel name. When mentioned, an `@` symbol appears next to your name. If someone mentions `@all` or `@here` a number will show up showing the number of times the mention is specific to you.

### Notifications Preferences

There are several notification settings a user can customize to channels. To find notification settings for a specific channel, go to the channel and click the **More** symbol at the top-right of the chat view. Then, select **Notification Preferences**.

* **Mute/Receive alerts:** Receive or mute any notifications from a channel.
* **Mute/Receive mentions:** Receive or mute notifications for mentions while receiving notifications for messages in a channel.
* **Hide/Show counter:** Show the number of unread messages for a channel.
* **Notification sound:** Choose a sound for notifications besides the alerts default **Desktop**.  Mobile currently supports only the alerts inside your mobile device. You can also select when to play the alert, duration of the alert, and the alert itself.

> There are some default choices for audio provided by Rocket.Chat. However, you also get to choose custom audio files for the same. Get further information about [Custom Sounds](../administrator-guides/custom-sounds.md).

## Joining new channels and starting direct messages

There are three ways of joining a public channel; through search, invites, or mentions.

For starting a direct message, you can either search the user you want to talk or click on that user's avatar and click on the **Conversation Button**.

To search for channels and users, use the search bar under your account box. Alternatively you can press Ctrl/Cmd + k to access the search bar quickly.

A search will find channels \(including the ones you are part of\) and users. You can not search inside private channels.

When you click on a search result, the following can happen:

* If the result is a channel, and you already aren't part of it, you will join that channel;
* If the result is a user, you will start a direct message with that user;

## Leaving channels

There are two options for leaving a channel:

1. **Hide:** Remain a member of the channel but remove it from your list of channels on the left-hand pane.
2. **Leave:** Remove the channel your list of channels and abdicate membership.

Every channel has an **owner**, and the owner of a channel cannot leave a channel until setting someone else as the owner of that channel.

To leave a channel, enter the command `/part` or `/leave` in the message window. Alternatively, hover your mouse over the channel in the list of channels on the left-hand side and click on the **leave channel** button.

To hide a channel, hover your mouse over the channel in the list of channels on the left-hand side and click on the **hide channel** button.

## Creating Channels

To create a channel, you need to click on the plus `+` button that is alongside the channel search bar.

A pop-up opens. You can set the name of that channel, choose if the channel is public or private, set the channel to read-only, broadcast the channel, and invite users.

In read-only channels, messages can only be sent by users with write permissions. All users can react to messages in this channel. Read-only channels are most suitable for announcements and voting.

Encrypted channels, messages will be end to end encrypted. See: [End to End Encryption](end-to-end-encryption.md) for details.

Broadcasted channels behave like read-only channels, with only users with the right permission being able to post there. The differences to a read-only channel are:

* Users without permission \(the same one to post on read-only channels\) inside this channel won't be able to see each other in the user list.
* Users without permission won't be able to react to messages.
* Every message contains a reply button that redirects the user to a direct message with the user that posted the message.
* This channel cannot be converted to a read-only or open channel again.

