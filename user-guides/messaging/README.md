# Messaging

## Composing messages

Sending messages in Rocket.Chat is self-explanatory: type a message in the message box and press <kbd>Enter</kbd> or the Send Button.

If you want to send multiple lines of text, press <kbd>Shift</kbd> + <kbd>Enter</kbd> to add a new line.

## Cursor movement while composing a message

You can move the cursor using the arrow keys while writing or editing messages. When you press the `Up Arrow` or `Down Arrow` keys, the cursor moves to the location determined by the wrapping of the text.

### Move the cursor to the beginning or end of a message

Holding `Alt` or `Command` while pressing an arrow key moves to the beginning or end of the message.

## Notify other team members

To get someone’s attention in a channel, type `@` followed by their username, for example `@guarilha`. (They’ll see a red badge on the channel and be notified via email or their mobile device if they’re not online)

You can also notify everyone in a channel by typing `@all`. But avoid using `@all` because it notifies everyone. Although `@all` is useful for important announcements, it can be distracting if abused.

## Sending attachments

In Rocket.Chat you can send a variety of attachments on your message, like files, audio, links, videos, and many more.

To access the attachment menu you can simply click on the plus (+) icon on the message input.

### Files

You can select files using three methods:

- By selecting the `Select Files from Computer` option from the attachment menu;
- By dragging and dropping the file on Rocket.Chat;
- By pasting a image from the clipboard;

After Selecting the file, you will be prompted to add a name and a description to it. After that just press send.

_Be aware that the server administrator can block certain file types from being uploaded._

### Audio

Before sending a audio message, if you are using a browser, you need to give Rocket.Chat permission to use your microphone.

To start recording you can simply click on the `Create new Audio Message` option on the attachment menu. To stop recording just press the same option again.

You will have the chance to listen to the message before sending it.

### Video

Before sending a video message, if you are using a browser, you need to give Rocket.Chat permission to use your camera.

To start recording you can simply click on the `Create new Video Message` option on the attachment menu.

Then click the circle icon, when the recording starts the icon will be replaced with a square "stop" icon. To end the video recording, click the "stop" icon.

To preview and send your last video recorded, click the "ok" button, which will display a window where you can watch and download the video, name it and give it an optional description. Click the "send" button to send the video or the "cancel" button to discard the video recording.

### Links

When you send a link in a message, you will get a preview of the site, and in some cases it can create a interactive attachment, like a youtube video preview or a Spotify mini player.

### Location

Before sharing your location if you are using a browser, you need to give Rocket.Chat permission to use your current location.

To share your location, click on the option `Share My Location`, that will send a message with a map preview and a link to Google Maps on your current location.

## Emojis

To insert a emoji in a message, hit the emoji button on the left of the message input to view an emoji picker. There you can select by sections and search for emojis.

You can also insert emojis by inputing a colon `:` in the message compose box followed by typing the emoji name.

For example to input the smiley face emoji start typing `:smile:`, after you have input two characters of the emoji's name a list of matched emojis will be displayed.

As you input more characters from the name, the search space will narrow. You can use the `Up` and `Down` arrow keys and `Enter` to select an emoji to insert or select one by left clicking on it.

Alternatively you can type out the full emoji name, make sure to end the name with a `:`.

### Emoji shortcuts

Various emoji shortcuts exists to display popular text representations as graphical emojis. For example a message with the following text `:)` will display as the graphical `:slight_smile:` emoji.

### Disabling emojis

Graphical emojis can be enabled/disabled in [Your Account](../managing-your-account/) settings under the **Messages** section.

When graphical emojis are disabled, emoji keywords and shortcuts will be displayed as is  e.g. `:smile:` or `:)`.

## Message Actions

You can interact with already posted messages too. To open the message actions menu, hover your mouse over the desired message, click on the three dots that will appear on the right side of the message.

### Editing messages

To edit a message, click on the `edit` option on the message actions menu. Alternatively, in the message input box, press the `Up Arrow` to edit the last message sent.

_The administrator of a Rocket.Chat team sets the permissions for who can edit messages from other users. By default, only administrators, moderators, and owners of the channels can edit messages from other users._

#### Switching messages to edit

While editing, if the cursor is at the **beginning** of a message, pressing the `Up Arrow` switches to editing the **previous** message you wrote.

Similarly, if the cursor is at the **end** of a message, pressing the `Down Arrow` switches to editing the **next** message you wrote.

#### Drafting messages

Rocket.Chat saves drafts of edits to your messages. That way, you can return to an edit draft after switching to another message. Pressing `ESCAPE` discards an edit draft.

#### Deleting messages

You can delete a message by clicking on `delete` option on the message actions menu.

You can also delete a message by emptying the contents while editing and saving your changes. You will be asked to confirm the message deletion and warned that the message contents will be be able to be recovered.

### Starring messages

Starring a message makes it easy to find it later. To star a message, select the `star-message` option on the message actions menu, to un-star it just select the `unstar` option on the message actions menu.

You can find your starred messages on the starred messages tab. <!-- TODO: add link to starred message tab -->

Starred messages are per chat room and are not global, each room has its own list of messages you have starred in that channel.

### Pinning messages

Pinning a message to a channel causes the message to be easily accessible via pinned messages tab. <!-- TODO: add link to pinned message tab -->  To pin a message, select the `pin-message` option on the message actions menu, to un-pin it just select the `unpin` option on the message actions menu.

_The administrator of a Rocket.Chat team sets the permissions for who can pin messages in a channel. By default, only administrators, moderators, and owners of the channel can pin messages ._

### Reactions

You can quickly respond to any message with an emoji reaction. Reactions can be used for any purpose including voting, checking off to-do items, showing excitement, answering questions or just for fun.

To add reaction to a message, hover your mouse over it, and click on the smiling face icon on the right of the message
and choose an emoji.

To remove an emoji reaction, click on the emoji below the message. To reiterate an existing emoji reaction that someone else posted, click on that emoji to add to that emoji's counter.

### Permalinking a message

Permalinking a message creates a link directing to that message, also if you post a permalink on another channel it creates a preview with the contents of the message.

To permalink a message simply click on the `permalink` option on the message actions menu and the link will be copied to your clipboard.

### Copying a message

To copy the contents of a message to your clipboard, simply click on the `copy` option on the message actions menu.

### Replying to a message

Replying to a message will create a attachment showing the message you wish to reply after the sent text.

To reply to a message, click on the `reply` option on the message actions menu and write your message after the link that was inserted on the message input.

Replying to a already replied message will create a string of messages, showing every message quoted before the current one.

### Quoting a message

It has the same effect of replying a message.
