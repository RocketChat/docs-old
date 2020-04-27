# Save Room Settings

## Requirements

| Logged In | Permission  | Setting |
| --------- | ----------- | ------- |
| Yes       | `edit-room` | _none_  |

## Payload

1. String - the id of the room to leave
2. String - the room setting to save
3. Any - the value of the setting to save, this value type depends on what the setting accepts

## Available Settings

| Setting           | Accepted Values |
| ----------------- | --------------- |
| `roomName`        | String          |
| `roomTopic`       | String          |
| `roomDescription` | String          |
| `roomType`        | `c` or `p`      |
| `readOnly`        | Boolean         |
| `systemMessages`  | Boolean         |
| `default`         | Boolean         |
| `joinCode`        | String          |

## Example Call

```json
{
    "msg": "method",
    "method": "saveRoomSettings",
    "id": "16",
    "params": [
        "roomId",
        "setting",
        "value"
    ]
}
```

## Example Response

```json
{
    "msg": "result",
    "id": "16",
    "result": {
        "result": true,
        "rid": "roomId"
    }
}
```

## See Also

- [Create Channels][1]
- [Create Private Groups][2]
- [Delete Rooms][3]
- [Archive Rooms][5]
- [Unarchive Rooms][4]

[1]: ../create-channels/

[2]: ../create-private-groups/

[3]: ../delete-rooms/

[4]: ../unarchive-rooms/

[5]: ../archive-rooms/
