# Hiding Rooms

When you hide a room, that room no longer shows up on the list of channels and marks the property `open` to `false` on the user's subscription of the room.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Payload

1. String - the id of the room to leave

## Example Call

```javascript
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

```javascript
{
    "msg": "result",
    "id": "14",
    "result": 1
}
```

## See Also

* [Joining Channels](joining-channels.md)
* [Leaving Rooms](leaving-rooms.md)
* [Create Channels](create-channels.md)

