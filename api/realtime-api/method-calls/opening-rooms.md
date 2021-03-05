# Opening Rooms

When you open a room, that room shows up on the list of channels and marks the property `open` to `true` on the user's subscription of the room.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Payload

1. String - the id of the room to open

## Example Call

```javascript
{
    "msg": "method",
    "method": "openRoom",
    "id": "19",
    "params": [
        "roomId"
    ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "19",
    "result": 1
}
```

## See Also

* [Hiding Rooms](hiding-rooms.md)
* [Joining Channels](joining-channels.md)
* [Leaving Rooms](leaving-rooms.md)
* [Create Channels](create-channels.md)

