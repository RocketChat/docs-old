# Unarchive Rooms

Unarchiving a room removes it from being read only and then adds it back to the channel list on the left.

## Requirements

| Logged In | Permission       | Setting |
| --------- | ---------------- | ------- |
| Yes       | `unarchive-room` | _none_  |

## Payload

1. String - the id of the room to unarchive

## Example Call

```json
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

```json
{
    "msg": "result",
    "id": "99"
}
```

## See Also

- [Create Channels][1]
- [Create Private Groups][2]
- [Delete Rooms][3]
- [Archive Rooms][4]
- [Save Room Settings][5]

[1]: ../create-channels/

[2]: ../create-private-groups/

[3]: ../delete-rooms/

[4]: ../archive-rooms/

[5]: ../save-room-settings/
