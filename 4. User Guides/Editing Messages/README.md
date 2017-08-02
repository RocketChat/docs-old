# Messaging

Rocket.Chat provides several features for composing messages and for editing them after they have been sent.

## Composing messages 

### Cursor movement while composing a message
As you compose a message, you can move the cursor using the arrow keys. When you hit the <kbd>Up Arrow</kbd> or <kbd>Down Arrow</kbd> keys, the cursor moves to the location determined by the wrapping of the text:

![wrap](https://cloud.githubusercontent.com/assets/4238626/14960976/17064ab4-10a0-11e6-9ee9-efe9239004a3.gif)

### Move the cursor to the beginning or end of a message
Holding <kbd>Alt</kbd> or <kbd>Command</kbd> while hitting an arrow key moves to the beginning or end of the message:

![alt_up_down](https://cloud.githubusercontent.com/assets/4238626/14960972/17009c90-10a0-11e6-9450-d69257310e24.gif)

## Editing messages

To edit a message, click on the gear icon next to the message, and then click on the pencil icon. Alternatively, in the message input box, hit the <kbd>Up Arrow</kbd>.

The administrator of a Rocket.Chat team sets the permissions for who can edit messages. (See `edit-message` in the list of permissions.) By default, only administrators, moderators, and admins can edit messages.

### Switching messages

If the cursor is at the **beginning** of a message, hitting the <kbd>Up Arrow</kbd> switches to editing the **previous** message that you wrote:

![keyup](https://cloud.githubusercontent.com/assets/4238626/14960973/1701d506-10a0-11e6-880d-0b4cb95f907f.gif)

Similarly, if the cursor is at the **end** of a message, hitting the <kbd>Down Arrow</kbd> switches to editing the **next** message that you wrote.

### Drafts of edits

Rocket.Chat saves a draft of your edits to messages. That way, you can return to the draft of an edit after switching to another message and back. Hitting <kbd>ESCAPE</kbd> discards a draft of an edit.

![draft](https://cloud.githubusercontent.com/assets/4238626/14960975/17041cda-10a0-11e6-9b6f-572d70c7473c.gif)

### Emptying message deletes it

Editing the message so that it has no content is interpreted as deleting the message:

![delete](https://cloud.githubusercontent.com/assets/4238626/14960977/1706e71c-10a0-11e6-8d44-48bf20f79ae4.gif)

(You can also delete a message by clicking on the gear icon next to the message and clicking on the trash icon.)
