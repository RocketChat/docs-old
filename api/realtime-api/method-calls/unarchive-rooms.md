# Unarchive Rooms

Unarchiving a room removes it from being read only and then adds it back to the channel list on the left.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | `unarchive-room` | _none_ |

## Payload

1. String - the id of the room to unarchive

## Example Call

```javascript
{
    "msg": "method",
    "method": "unarchiveRoom",
    "id": "99",
    "params": [
        "roomId"
    ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "99"
}
```

## See Also

* [Create Channels](create-channels.md)
* [Create Private Groups](create-private-groups.md)
* [Delete Rooms](delete-rooms.md)
* [Archive Rooms](archive-rooms.md)
* [Save Room Settings](save-room-settings.md)

