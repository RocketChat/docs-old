# User Guides

Here you'll learn how to use [Rocket.Chat](https://rocket.chat/) as a user.

## Channels

Conversations in Rocket.Chat are organized into __channels__. Channels are essentially chat rooms with many useful features. 

There are three kinds of channels: [public channels](Public-channels), [private groups](Private-groups), and [direct (1-on-1) messages](Direct-messages).


### Public channels

**Public channels** (also called **channels** for short) are the most important kind. Use channels for conversations that are open to your entire team. A channel can be joined by anyone on your team. 

Channels make it easy to find what's going on with your team. New team members can join a channel and read all the information previously shared by other users.

When in doubt, create a channel. Public conversations help you build a knowledge base of your organization with minimal effort. For example, create a channel for a company department or to discuss a certain programming language.

### Private groups

**Private groups** are closed channels. They are visible only to their members. They are best used for subjects that are sensitive, confidential, or limited to a small group of team members.

Private groups can be joined by invitation only. You can decide who can invite others to a private group by changing the permissions. By default, only administrators, room owners, and moderators can invite others to private rooms.

### Direct Messages

**Direct messages (DMs)** are private, 1-on-1 conversation between team members. These conversations are visible only to you and the person you DM with.

## Channel operations

### Favorites

To help you organize and prioritize things, we recommend you add your favorite channels, Private Groups, and DMs using the star icon in the upper left hand corner of the message area, next to the room name. Starring helps you to avoid noise and to focus on what's important to you.

### Joining channels

Find existing channels by clicking on the `More channels...` button on the left-hand pane. Then click on a channel to preview its contents. If you want to join it, click on the `JOIN` button.

### Hiding and leaving channels

There are two notions of leaving a channel:

1. To **hide** a channel is to remain a member of the channel but to remove it from your list of channels on the left-hand pane. 
1. To **leave** a channel is to remove it from your list of channels _and to leave the channel_ (i.e., no longer be a member of the channel).

Every channel has an **owner**, and the owner of a channel cannot leave a channel until setting someone else as the owner of that channel. A user interface for making someone else the owner of a channel is [in progress](https://github.com/RocketChat/Rocket.Chat/issues/3365).

To **leave** a channel, enter the command `/part` or `/leave` in the message window. Alternatively, hover your mouse over the channel in the list of channels on the left-hand side and click on the button with the right-pointing arrow. On the mobile app, pull from the left-hand side to see the list of open channels, hold down on the channel to bring up the buttons, and click on the right-arrow button.

To **hide** a channel, hover your mouse over the channel in the list of channels on the left-hand side and click on the button with a diagonal line covering an eyeball. On the mobile app, pull from the left-hand side to see the list of open channels, hold down on the channel to bring up the buttons, and click on the eyeball button.

## Messaging

Sending messages in Rocket.Chat is self-explanatory: type a message in the message box and press Enter or the Send Button.

If you want to send multiple lines of text, press &#x21E7; &#x23ce; (`shift + enter`) to move to the next line.

### Notify other team members

To get someone’s attention in a channel, type @ followed by their username, e.g. `@guarilha`. (They’ll see a red badge on the channel and be notified via email or their mobile device if they’re not online)

You can also notify everyone in a channel by typing `@all`. But avoid using `@all` because it notifies everyone. Although `@all` is useful for important announcements, it can be distracting if abused.

### Deleting Messages

The ability to delete message is configurable under Rocket.Chat Administration panel.

When enabled, you can delete a message by clicking the cog icon in your message and then clicking the trash icon in the menu popover. A confirmation will be displayed before the message is deleted.

It's also possible to hide or show "Message removed" when messages are deleted.


## Rocket.Chat ❤ Emoji!

To insert emoji in a message, hit the emoji button to the right of the text input to view an emoji picker. You can also type your desired emoji by wrapping its name with `:`; for example, `:heart:` produces :heart:.

### Emoji reactions

You can also _react_ to a message with an emoji. 
+ On the **desktop** application: hover over a message, click on the gear icon, click on the smiling face icon, and choose an emoji.
+ On the **mobile** application: press and hold your finger on a message to bring up a menu, press `Reactions`, and choose an emoji.
Then an emoji appears below the message. 

To remove an emoji reaction, click on the emoji below the message. To reiterate an existing emoji reaction that someone else posted, click on that emoji to add to that emoji's counter.


## Learn more

- [Setup desktop and push notifications](Notifications)
- [Upload files](File%20Uploads/)
- [Chat off the record](Off-The-Record/)
- [Pin messages](Pinning%20Messages/)
- [Remote video monitoring](Remote%20Video%20Monitoring/)
- [Screenshare](Screensharing/)
- [Star Messages](Starring%20Messages/)
- [Make voice and video calls](Voice%20and%20video%20calls/)
