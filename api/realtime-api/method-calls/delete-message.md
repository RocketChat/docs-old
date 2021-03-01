# Delete Message

There is only way one to delete a message inside of Rocket.Chat, but it only requires the message's `_id` being passed in.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | `delete-message` | `Message_AllowDeleting` - "Allow Message Deleting" |

## Example Call

All that is needed to delete a message is passing the `_id` of the message.

```javascript
{
    "msg": "method",
    "method": "deleteMessage",
    "id": "42",
    "params": [ { "_id": message_id } ]
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

As mentioned in requirements, you must be logged in to be able to delete a message. Two settings apply, `Message_AllowDeleting` and then `Message_AllowDeleting_BlockDeleteInMinutes`. The first setting is a boolean, true/false, and the second setting is an integer that can be `0` for always being allowed to delete or it can be greater than zero which the deleting with be disallowed/blocked after the time has passed.

Having the permission `delete-message` will allows deletion of any message, but still respects `Message_AllowDeleting_BlockDeleteInMinutes` setting.

Having the permission `force-delete-message` allows the deletion of any message, and it ignores the setting `Message_AllowDeleting_BlockDeleteInMinutes`.

## See Also

* [Send Message Method](send-message.md)
* [Update Message Method](update-message.md)

