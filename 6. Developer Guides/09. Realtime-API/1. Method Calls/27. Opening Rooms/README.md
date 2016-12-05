# Opening Rooms
When you open a room, that room shows up on the list of channels and marks the property `open` to `true` on the user's subscription of the room.

## Requirements
| Logged In | Permission | Setting |
| --- | --- | --- |
| Yes | _none_ | _none_ |

## Parameters
1. String - the id of the room to open

## Example Call

```json
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

```json
{
    "msg": "result",
    "id": "19",
    "result": 1
}
```

## See Also
* [Hiding Rooms][1]
* [Joining Channels][2]
* [Leaving Rooms][3]
* [Create Channels][4]

[1]:../26.%20Hiding%20Rooms
[2]:../24.%20Joining%20Channels
[3]:../25.%20Leaving%20Rooms
[4]:../19.%20Create%20Channel
