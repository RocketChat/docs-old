# Channel Actions

With channels you can also do more than merely post messages and upload files, you can interact in various ways through the channel actions menu. Channel actions are located to the right of the channel title. Some of the menus are accessible by clicking on the three dots at the end of the channel header.

_Channel actions vary depending on the server configuration, so the items listed below might not all be visible in your installation._

## Favorites

To help organize and prioritize your communications, you can **favorite** (or **star**) channels, private groups, and DMs.

To favorite a channel, click on the star icon to the left of the channel header (next to the room name).

Favoriting a channel moves it to a "Favorites" section on the channels list, making it easier to access and find.

## Channel Info

Here you can see all kinds of information about the current channel. If you have the proper permissions, this information can be edited. These are the channel info options:

- __Channel Name__: The name of the channel, how users see the title and find the channel via search.

- __Topic__: The topic shows next to the title on the channel header. Great for giving more info on what the channel is about.

- __Announcement__: The announcement is shown in a very visible bar under the channel header.

- __Description__: The description of the channel.

- __Private__: Tells whether a channel is private, and can set the channel to private or public.

- __Read Only__: Tells whether a channel is read only, and toggles the read only status on the channel. In read only channels, messages can only be posted by people with the right permission. Good for announcements channels and such.

- __Archived__: Tells if a channel is archived, and toggles the archived status of a channel. Nobody can post messages in an archived channel, and channel search will not find that channel.

- __Password__: Tells whether a channel has a password and let you set the password. If a channel has a password, other users need to enter the password to become a member of the channel.
## Search Messages

Rocket Chat search supports basic search commands which work like Gmail search.

Rocket Chat also supports the use of "[regular expressions](https://en.wikipedia.org/wiki/Regular_expression)". The benefits of regular expressions are great search flexibility and the ability to search chat entries in any language, even ones which are traditionally a challenge to search (like "CJK" languages - Chinese, Japanese, Korean).

### Basic Search Commands

You can use these commands before or after entering search terms:

`from:me` to search for messages only created by the current user.

`from:user.name` to search for messages created by a specific user. The username entered must be the format without spaces (i.e. "john.doe" and not "John Doe". To search for any time a user was mentioned, just search for their username.

`has:star` returns messages that are starred by the current user.

`is:pinned` or `has:pin` returns messages that are pinned in the current channel.

`has:url` or `has:link` returns messages that contain a link.

`has:location` or `has:map` returns messages that have a location attached.

`before:dd/mm/yyyy`, `after:dd/mm/yyyy` and `on:dd/mm/yyyy` return message that were created before, after, or on the provided date.
Dashes `dd-mm-yyyy` or dots `dd.mm.yyyy` can be used instead of slashes.

`order:asc`, `order:ascend`, or `order:ascending` sorts messages by ascending timestamp.

`order:desc`, `order:descend`, or `order:descending` sorts messages by descending timestamp.

You can also jump to where a message is located by hovering the mouse over the search result and selecting `jump to message`.

### Regex

These references tell more about the powerful world of regex:

- Wikipedia - <https://en.wikipedia.org/wiki/Regular_expression>
- Regex 101 - <https://regex101.com/#javascript>
- Regexr - <http://regexr.com/>
- Regex Info - <http://www.regular-expressions.info/javascriptexample.html>

## Members List

Here you can see all the users on channel and see more information about them. If you have the proper permission, you can manage them on your channel.

At first, only the current active users are shown. To see all users, click the `show all` link.

To see more information on a user, click their name on the list.

The user preview screen shows their name, username, any role tags they might have, and their current timezone.
From there you can also:

- Start a direct conversation with the user by clicking the `conversation` option

- Start a video call with the user

- Set the user as channel owner

- Set the user as channel moderator

- Mute the user

- Remove the user from the channel

## Notifications

You can change the behavior of notifications for channels where you are a member. By default, a channel notifies you whenever someone mentions you or uses the `@all` mention.

These options are on the channel notifications tab:

- __Disable Notifications__: disable all notifications for the channel.

- __Audio__: select whether the channel will emit a sound whenever someone mentions you or posts a message in that channel. The sound to play can be specified.

- __Desktop__: controls notification behavior when using any desktop app or browser.

- __Mobile__: controls push notification behavior when using any mobile app.

- __Email__: set whether email is sent whenever someone mentions you or posts a message, or disable email notifications.

- __Unread Room Status__: Controls whether the channel on the channel list is highlighted when there is a new message or mention.

- __Unread Tray Icon__: Controls whether the tray icon is highlighted when there are new messages or mentions on the current channel.

## Files List

A list of all the files uploaded to the current channel.

## Mentions

All messages which mentioned you in the current channel.

## Starred Messages

All messages which you have starred in the current channel.

## Pinned Messages

All messages that were pinned on the current channel.

## OTR

OTR stands for __Off The Record__ Messaging.

OTR is basically end to end encrypted conversations.

You can only use OTR in direct messages (one-on-one) and both sides must be online.

To start OTR conversation, click on _START OTR_. The other user will be notified to start a OTR.

After your request is confirmed by other side, messages are encrypted. Encrypted messages have a key icon on the right side.
