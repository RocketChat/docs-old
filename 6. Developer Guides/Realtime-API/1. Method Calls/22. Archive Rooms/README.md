# Archive Rooms

Archiving a room marks it as read only and then removes it from the channel list on the left.

## Requirements

| Logged In | Permission | Setting |
| --- | --- | --- |
| Yes | `archive-room` | _none_ |

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

[1]:../19.%20Create%20Channel
[2]:../20.%20Create%20Private%20Groups
[3]:../21.%20Delete%20Rooms
[4]:../23.%20Unarchive%20Rooms
[5]:../29.%20Save%20Room%20Settings
