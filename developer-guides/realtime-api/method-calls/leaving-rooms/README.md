# Leaving Rooms

You can leave any rooms, except for direct messages and except for rooms you are the last owner of.

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
    "method": "leaveRoom",
    "id": "11",
    "params": [
        "roomId"
    ]
}
```

## Example Response

```json
{
    "msg": "result",
    "id": "11"
}
```

## See Also

- [Joining Channels][1]
- [Create Channels][2]

[1]: ../joining-channels/

[2]: ../create-channels/
