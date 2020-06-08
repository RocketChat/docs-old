# Leaving Rooms

You can leave any rooms, except for direct messages and except for rooms you are the last owner of.

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
    "method": "leaveRoom",
    "id": "11",
    "params": [
        "roomId"
    ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "11"
}
```

## See Also

* [Joining Channels](joining-channels.md)
* [Create Channels](create-channels.md)

