# Hiding Rooms

When you hide a room, that room no longer shows up on the list of channels and marks the property `open` to `false` on the user's subscription of the room.

## Requirements

| Logged In | Permission | Setting |
| --------- | ---------- | ------- |
| Yes       | _none_     | _none_  |

## Payload

1. String - the id of the room to leave

## Example Call

```json
{
    "msg": "method",
    "method": "hideRoom",
    "id": "14",
    "params": [
        "roomId"
    ]
}
```

## Example Response

```json
{
    "msg": "result",
    "id": "14",
    "result": 1
}
```

## See Also

- [Joining Channels][1]
- [Leaving Rooms][2]
- [Create Channels][3]

[1]: ../joining-channels/

[2]: ../leaving-rooms/

[3]: ../create-channels/
