# Messages

This page explains the ins and outs of messaging in Rocket.Chat.

## Compose messages

To compose a message in Rocket.Chat, go the channel or user you want to send a message. Type the message box and press Enter or the **Send** Button.

If you want to add new lines of text, press Shift + Enter to add a new line.

## Cursor movement

While writing or editing messages, you can move the cursor using the arrow keys. Where the cursor moves depends on the wrapping of the text.

Hold `Alt` or `Command` while pressing the right or left arrow keys to move the cursor to the beginning or end of the message.

## Notify other team members

To get the attention of a specific team member in a channel, type `@` followed by their username, for example, `@username`. The mentioned user sees a red badge on the channel or is notified via email or their mobile device if they're not online.

You can also notify everyone in a channel by typing `@all`. We recommend using `@all` sparingly. Although notifying everyone in the channel is useful for announcements, not every message requires this.

## Send attachments

You can send a variety of attachments on your messages, like files, audio, links, videos, and many more.

To access the attachment menu you can, click on the **plus** \(+\) icon on the message input.

### Files

You can select files using three methods:

* By choosing the **Select Files from Computer** option from the attachment menu
* By dragging and dropping the file on Rocket.Chat
* By pasting an image from the clipboard

After selecting the file, add a name and a description of the file and press **Send**.

_Remember that the server administrator can block certain file types from being uploaded._

### Audio

When using Rocket.Chat through a web browser give Rocket.Chat permission to use your microphone.

To start recording, click on the **Create new Audio Message** or the option in the attachment menu or the microphone inside the message box. To stop recording, click the green checkmark. The audio message automatically sends. You can choose to play or download the message.

### Video

When using Rocket.Chat through a web browser give Rocket.Chat permission to use your webcam.

To start recording, click on the **Create new Video Message** option in the attachment menu, then click the red circle icon.

While recording, a stop button appears. To end the recording, press **Stop**.

Preview the video you recorded by pressing **Ok**. A window appears where you can watch, download, and name the video. To send the video, click **Send** or click **Cancel** to discard the video.

## Interacting with Google Drive

_Note:_ Google Drive features available only if the server's admin has enabled Google Drive access and provided the correct API keys. For instructions to obtain these keys can see the [Administrator guides](../administrator-guides/).

### From Google Drive to Rocket.Chat

Files can be uploaded from Google Drive to a room by selecting the **Select Files from Google Drive** option on the attachment menu. This opens a Google Drive file picker GUI with search and view modes. Select the required file, enter a title and description, and then click **Upload**.

Files upload in the same format to Rocket.Chat as they are in Google Drive with exception to Google docs, slides and sheets which convert to pdfs upon upload.

### From Rocket.Chat to Google Drive

Files uploaded as a message attached to a room can be uploaded to Google Drive. Click **Save to Google Drive** above the file attachment. The file saves to Google Drive in its original format.

### Create Google Docs, Slides and Sheets

Create Google docs, slides, and sheets by clicking to corresponding file type in the attachments menu. The file saves to that user's Google Drive account and posts on the message or channel from which creation occurs. The sharing setting for the file shall remain default. It can be changed by the file owner via the link to collaborate with other users.

## Links

URLs to other sites automatically generate a preview of that site's content. Copy and paste the link into the message box to create the preview.

## Location

To share your location, click **Share My Location**. A message generates a link to a Google Map of your location.

## Emoji

To insert an emoji, click the **smiley face icon** in the message box. Browse through emoji using the icon categories or through the search box.

You can also insert emojis by inputting an [emoji code](https://www.webfx.com/tools/emoji-cheat-sheet/).

### Emoticons

Rocket.Chat changes common emoticons, or symbols used to represent emoji, to the equivalent emoji. For example, `:)` converts to the `:smiley:` emoji.

### Disabling emojis

Emojis can be enabled/disabled in [Your Account](user-panel/managing-your-account.md) settings under the **Messages** section.

When graphical emojis are disabled, emoji keywords and shortcuts display as regular text.

## Formatting

Use the following symbols to format text as desired:

* Bold: `*Lorem ipsum dolor*`
* Italic: `_Lorem ipsum dolor_`
* Strike: `~Lorem ipsum dolor~`
* Inline code: `Lorem ipsum dolor` 
* Image: `![Alt text](https://rocket.chat/favicon.ico)`
* Link: `[Lorem ipsum dolor](https://www.rocket.chat/)` or `<https://www.rocket.chat/ |Lorem ipsum dolor>`

