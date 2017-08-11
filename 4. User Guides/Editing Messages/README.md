# Messaging

Rocket.Chat provides several features for composing messages and editing sent messages.

## Composing messages

### Cursor movement while composing a message
You can move the cursor using the arrow keys while writing or editing messages. When you press the `Up Arrow` or `Down Arrow` keys, the cursor moves to the location determined by the wrapping of the text.

### Move the cursor to the beginning or end of a message
Holding `Alt` or `Command` while pressing an arrow key moves to the beginning or end of the message.

## Editing messages

To edit a message, click on the gear icon next to the message, and then click on the pencil icon. Alternatively, in the message input box, press the `Up Arrow` to edit the last message sent.

The administrator of a Rocket.Chat team sets the permissions for who can edit messages. (See `edit-message` in the list of permissions.) By default, only administrators, moderators, and admins can edit messages.

### Switching messages to edit

While editing, if the cursor is at the **beginning** of a message, pressing the `Up Arrow` switches to editing the **previous** message you wrote.

Similarly, if the cursor is at the **end** of a message, pressing the `Down Arrow` switches to editing the **next** message you wrote.

### Drafting messages

Rocket.Chat saves drafts of edits to your messages. That way, you can return to an edit draft after switching to another message. Pressing `ESCAPE` discards an edit draft.

### Deleting messages

You can delete a message by clicking on the gear icon next to the message and clicking on the trash icon.

You can also delete a message by emptying the contents while editing and saving your changes. You will be asked to confirm the message deletion and warned that the message contents will be be able to be recovered.

## Sending emojis

You can insert emojis in your messages as you want by clicking on the emoji smiley face icon on the left of the compose message box to browse or search for emojis.

You can also insert emojis by inputing a colon `:` in the message compose box followed by typing the emoji name.

For example to input the smiley face emoji start typing `:smile:`, after you have input two characters of the emoji's name a list of matched emojis will be displayed.

As you input more characters from the name, the search space will narrow. You can use the `Up` and `Down` arrow keys and `Enter` to select an emoji to insert or select one by left clicking on it.

Alternatively you can type out the full emoji name, make sure to end the name with a `:`.

### Emoji shortcuts

Various emoji shortcuts exists to display popular text representations as graphical emojis. For example a message with the following text `:)` will display as the graphical `:slight_smile:` emoji.

### Disabling emojis

Graphical emojis can be enabled/disabled in [Your Account](../managing-your-account/) settings under the **Messages** section.

When graphical emojis are disabled, emoji keywords and shortcuts will be displayed as is  e.g. `:smile:` or `:)`.
