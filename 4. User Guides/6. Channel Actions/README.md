# Channel Actions

With channels you can also do more than simply post messages and upload files, you can interact with it in various ways trough the channel actions menu, the channel actions are located by the right of the channel title. To access some of the menus you might have to click on the three dots by the end of the channel header.

_Channel actions may vary depending on the server configuration, so you might not see all of the items listed below_

## Favorites

To help you organize and prioritize your communications, you can **favorite** (or **star**) channels, private groups, and DMs.

To favorite a channel, click on the star icon in left end of the channel header (next to the room name).

Favoriting a channel moves it to a "Favorites" section on the channels list, thus making easier to access and find.

## Channel Info

Here you can see all kinds of information about the channel you are currently on, and if you have the proper permissions, edit this information. You have the following options on channel info:

- __Channel Name__: This is name of the channel, is how users see the title and find the channel via search.

- __Topic__: The topic will show next to the title on the channel header. Great for giving more info on what is the channel about.

- __Announcement__: The announcement will be shown in a very visible bar under the channel header.

- __Description__: The description of the channel.

- __Private__: Tells if a channel is private or not, can be used to change the channel to private or public.

- __Read Only__: Tells if a channel is read only, can be used to toggle the read only status on the channel. In read only channels messages can only be posted by people with the right permission, great for announcements channels and alike.

- __Archived__: Tells if a channel is archived, can be used to toggle the archived status on a channel. In a archived channel nobody can post messages and the channel search won't find that channel.

## Search Messages

Rocket Chat search supports basic search commands which work similar to Gmail search.

Rocket Chat also supports the use of "[regular expressions](https://en.wikipedia.org/wiki/Regular_expression)", the benefits of which are great search flexibility and the ability to search chat entries in any language, even ones which are traditionally a challenge for search (e.g. "CJK" languages - Chinese, Japanese, Korean).

### Basic Search Commands

You can use the following commands before or after entering your search term:

`from:me` to search for messages only created by the current user.

`from:user.name` to search for messages created by a specific user. The username entered must be the format without spaces (i.e. "john.doe" and not "John Doe". If you want to search for anytime a user was mentioned, simply search for their username.

`has:star` returns messages that are starred by the current user.

`is:pinned` or `has:pin` returns messages that are pinned in the current channel.

`has:url` or `has:link` returns messages that contain a link.

`has:location` or `has:map` returns messages that have a location attached

`before:dd/mm/yyyy`, `after:dd/mm/yyyy` and `on:dd/mm/yyyy` return message that were created before, after or on the provided date.
You can also use dashes `dd-mm-yyyy` or dots `dd.mm.yyyy` instead of slashes.

`order:asc` sorts messages by ascending timestamp. You can also use `order:ascend` or `order:ascending`

`order:desc` sorts messages by ascending timestamp. You can also use `order:descend` or `order:descending`.

You can also jump to where a message is located by hovering your mouse over the search result and selecting `jump to message`.

### Regex

If you're interested, please use the following references to learn more about the world of regex.

- Wikipedia - <https://en.wikipedia.org/wiki/Regular_expression>
- Regex 101 - <https://regex101.com/#javascript>
- Regexr - <http://regexr.com/>
- Regex Info - <http://www.regular-expressions.info/javascriptexample.html>

## Members List

Here you can see all the users on channel, see more info about them and if you have the proper permission, manage them on your channel.

At first you will see only the current active users, to see all users press the `show all` link.

To see more info on a user, click on their name on the list.

On the user preview screen you can see their name, username, any role tags they might have and their current timezone.
From there you can also:

- Start a direct conversation with that user by pressing the `conversation` option;

- Start a video call with that user;

- Set that user as owner of the channel;

- Set that user as moderator of the channel;

- Mute that user;

- Remove that user from the channel;

## Notifications

You can change the behavior of notifications for each channel that you are part of. By default a channel will notificate you whenever someone mentions you or use the `@all` mention.

You have the following options on channel notifications tab:

- __Disable Notifications__: this will disable all notifications for that channel.

- __Audio__: with this setting you can set if you want the channel to emit a sound whenever someone mentions you or post a message in that channel, you can also specify which sound you want to play.

- __Desktop__: this setting controls the behavior of notifications when you are using any desktop app or browser.

- __Mobile__: this setting controls the behavior of push notifications when you are using any mobile app.

- __Email__: with this setting you can set if you want to receive emails whenever someone mentions you, post a message or you don't want to receive email notifications.

- __Unread Room Status__: This setting controls if the channel on the channel list will be highlighted when there is a new message or mention.

- __Unread Tray Icon__: This setting controls if the tray icon will be highlighted when there are new messages or mentions on the current channel.

## Files List

Here you can see all the files uploaded to the current channel.

## Mentions

Here you can see all the messages that mentioned you in the current channel.

## Starred Messages

Here you can see all messages that you have starred in the current channel.

## Pinned Messages

Here you can see all messages that were pinned on the current channel.

## OTR

OTR stands for __Off The Record__ Messaging.

OTR is basically end to end encrypted conversations.

You can only use OTR in direct messages (1-on-1) and also both sides must be online.

When you want to start OTR conversation, click on _START OTR_, then the other user will be notified to start a OTR.

After your request is confirmed by other side, messages sent will be encrypted, a encrypted message will have a key icon on it's right side.