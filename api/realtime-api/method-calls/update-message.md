# Update Message

Updating a message is what should be called when a user "edits" a message, passing in the changed message with the updates.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | `edit-message` | `Message_AllowEditing` - "Allow Message Editing" |

## Example Call

The only parameter that needs to be passed in is the [Message Object](../../schema-definition/the-message-object.md) which contains the updated message properties, such as the text.

```javascript
{
    "msg": "method",
    "method": "updateMessage",
    "id": "42",
    "params": [ messageObject ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "42",
    "result": []
}
```

## Additional Information

As mentioned in requirements, you must be logged in to be able to edit a message along with having the permission `edit-message`. Two settings apply, `Message_AllowEditing` and then `Message_AllowEditing_BlockEditInMinutes`. The first setting is a boolean, true/false, and the second setting is an integer that can be `0` for unlimited editing or anything greater and editing will be blocked after the time in minutes has passed.

## See Also

* [The Message Object](../../schema-definition/the-message-object.md)
* [Send Message Method](send-message.md)
* [Delete Message Method](delete-message.md)

