# Delete Rooms
Deleting a room, either a private group or public channel, is actually completed via the method `eraseRoom`. The user deleting the room must have permission to do so, by either being owner or admin.

## Requirements
| Logged In | Permission | Setting |
| --- | --- | --- |
| Yes | `delete-c` _or_ `delete-p` | _none_ |

## Parameters
1. String - the id of the room to delete

## Example Call

```json
{
    "msg": "method",
    "method": "eraseRoom",
    "id": "92",
    "params": [
        "roomId"
    ]
} 
```

## Example Response

```json
{
    "msg": "result",
    "id": "92",
    "result": 1
}
```

## See Also
* [Create Channels][1]
* [Create Private Groups][2]
* [Archive Rooms][3]
* [Unarchive Rooms][4]
* [Save Room Settings][5]

[1]:../19.%20Create%20Channel
[2]:../20.%20Create%20Private%20Groups
[3]:../22.%20Archive%20Rooms
[4]:../23.%20Unarchive%20Rooms
[5]:../29.%20Save%20Room%20Settings
