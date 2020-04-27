# Archive Rooms

Archiving a room marks it as read only and then removes it from the channel list on the left.

## Requirements

| Logged In | Permission     | Setting |
| --------- | -------------- | ------- |
| Yes       | `archive-room` | _none_  |

## Payload

1. String - the id of the room to archive

## Example Call

```json
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

```json
{
    "msg": "result",
    "id": "97"
}
```

## See Also

- [Create Channels][1]
- [Create Private Groups][2]
- [Delete Rooms][3]
- [Unarchive Rooms][4]
- [Save Room Settings][5]

[1]: ../create-channels/

[2]: ../create-private-groups/

[3]: ../delete-rooms/

[4]: ../unarchive-rooms/

[5]: ../save-room-settings/
