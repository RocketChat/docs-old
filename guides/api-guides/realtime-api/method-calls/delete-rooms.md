# Delete Rooms

Deleting a room, either a private group or public channel, is actually completed via the method `eraseRoom`. The user deleting the room must have permission to do so, by either being owner or admin.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | `delete-c` _or_ `delete-p` | _none_ |

## Payload

1. String - the id of the room to delete

## Example Call

```javascript
{
    "msg": "method",
    "method": "eraseRoom",
    "id": "92",
    "params": [
        "roomId"
    ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "92",
    "result": 1
}
```

## See Also

* [Create Channels](create-channels.md)
* [Create Private Groups](create-private-groups.md)
* [Archive Rooms](archive-rooms.md)
* [Unarchive Rooms](unarchive-rooms.md)
* [Save Room Settings](save-room-settings.md)

