# Archive Rooms

Archiving a room marks it as read only and then removes it from the channel list on the left.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | `archive-room` | _none_ |

## Payload

1. String - the id of the room to archive

## Example Call

```javascript
{
    "msg": "method",
    "method": "archiveRoom",
    "id": "97",
    "params": [
        "roomId"
    ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "97"
}
```

## See Also

* [Create Channels](create-channels.md)
* [Create Private Groups](create-private-groups.md)
* [Delete Rooms](delete-rooms.md)
* [Unarchive Rooms](unarchive-rooms.md)
* [Save Room Settings](save-room-settings.md)

