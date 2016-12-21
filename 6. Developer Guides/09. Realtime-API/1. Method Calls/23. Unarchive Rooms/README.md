# Unarchive Rooms
Unarchving a room removes it from being read only and then adds it back to the channel list on the left.

## Requirements
| Logged In | Permission | Setting |
| --- | --- | --- |
| Yes | `unarchive-room` | _none_ |

## Parameters
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
* [Create Channels][1]
* [Create Private Groups][2]
* [Delete Rooms][3]
* [Archive Rooms][4]
* [Save Room Settings][5]

[1]:../19.%20Create%20Channel
[2]:../20.%20Create%20Private%20Groups
[3]:../21.%20Delete%20Rooms
[4]:../22.%20Archive%20Rooms
[5]:../29.%20Save%20Room%20Settings
