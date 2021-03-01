# Favoriting Rooms

When a user makes a room as a favorite, the yellow star appears and it moves the room up to the "favorites" section of the list of rooms.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Payload

1. String - the id of the room to leave
2. Boolean - whether the room is a favorite or not, defaults to true

## Example Call

```javascript
{
    "msg": "method",
    "method": "toggleFavorite",
    "id": "16",
    "params": [
        "roomId",
        true/false
    ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "16",
    "result": 1
}
```

## See Also

* [Joining Channels](joining-channels.md)
* [Leaving Rooms](leaving-rooms.md)

