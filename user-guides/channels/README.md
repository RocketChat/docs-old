# Channels

Conversations in Rocket.Chat are organized into __channels__. Channels are chat rooms with many useful features.

There are three kinds of channels: [public channels](#public-channels), [private groups](#private-groups), and [direct (1-on-1) messages](#direct-messages).

## Public channels

**Public channels** (also called **channels** for short) are the most important kind. Use channels for conversations that are open to your entire team. A channel can be joined by anyone on your team.

Channels make it easy to find what's going on with your team. New team members can join a channel and read all the information previously shared by other users.

When in doubt, create a channel. Public conversations help you build a knowledge base of your organization with minimal effort. For example, create a channel for a company department or to discuss a certain programming language.

## Private groups

**Private groups** are closed channels. They are visible only to their members. Use private groups for subjects that are sensitive, confidential, or limited to a small group of team members.

Private groups can be joined by invitation only. The administrator sets the permissions that determine who can invite others to a private group. By default, only administrators, room owners, and moderators can invite others to private rooms.

## Direct Messages

**Direct messages (DMs)** are private, 1-on-1 conversation between team members. You can think of a DM as a private group with only two members.

## Listing channels

The public and private channels you are watching are listed in the left sidebar under the "Channels" sections.

Public channels are indicated by a hash symbol next to the channel name, and private channels by a lock. Public channels appear first, private channels below them and each group will be ordered alphabetically.

### Unread messages

When a channel has new messages, its name will be highlighted on the channel list.

If using Unread Mode, a new section called "Unread" will appear on the left sidebar and all channels with unread messages will be moved to this new section.

To activate Unread Mode you must go to Preferences under My Account and change the "Sidebar channel list mode" setting to "Unread Rooms Mode".

### Mentions

When someone mentions you with `@username`, `@all` or `@here`, a symbol or a number will appear alongside the channel name.  If you were mentioned, an `@` will show.  If someone mentions `@all` or `@here` a number will show up showing the number of times you were mentioned.

## Joining new channels and starting direct messages

There are three ways of joining a public channel, you can either search for it, be invited to it or be mentioned in it.

For starting a direct message you can either search the user you want to talk or click on that users avatar and click on the "Conversation Button".

To search for channels and users, use the search bar under your account box. Alternatively you can press <kbd>Ctrl/Cmd</kbd> + <kbd>k</kbd> to access the search bar quickly.

A search will find channels (including the ones you are part of) and users. Private channels can't be searched.

When you click in a search result, the following can happen:

- If the result is a channel, and you already aren't part of it, you will join that channel;
- If the result is a user, you will start a direct message with that user;

## Leaving channels

There are two notions of leaving a channel:

1. To **hide** a channel is to remain a member of the channel but to remove it from your list of channels on the left-hand pane.
2. To **leave** a channel is to remove it from your list of channels _and to leave the channel_ (i.e., no longer be a member of the channel).

Every channel has an **owner**, and the owner of a channel cannot leave a channel until setting someone else as the owner of that channel.

To **leave** a channel, enter the command `/part` or `/leave` in the message window. Alternatively, hover your mouse over the channel in the list of channels on the left-hand side and click on the `leave channel` button.

To **hide** a channel, hover your mouse over the channel in the list of channels on the left-hand side and click on the `hide channel` button.

## Creating Channels

To create a channel you need to click on the plus `+` button that is alongside the channel search bar.

This will open a pop up, and there you can set the name of that channel, if it is public or private, set it to read-only, broadcast it and invite users.

In read only channels, messages can only be posted by people with the write permissions. Users can react to messages in this channel. Read only channels are good for announcements or voting for example.

Encrypted channels, messages will be end to end encrypted.  See: [End to End Encryption](../end-to-end-encryption/) for details.

Broadcasted channels will behave like read only channels, with only users with the right permission being able to post there. The differences to a read only channel are:

- Users without permission (the same one to post on read only channels) inside this channel won't be able to see each other in the user list.
- Users without permission won't be able to react to messages.
- On every message posted on this channel will have a reply button that redirects the user to a direct message with the user that posted the message, having a reply to the message clicked already ready on the message box.
- This channel cannot be converted to a normal or read only channel again.
