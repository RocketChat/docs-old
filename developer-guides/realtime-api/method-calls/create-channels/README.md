# Create Channels

Creates a public channel.

## Requirements

| Logged In | Permission | Setting |
| --------- | ---------- | ------- |
| Yes       | `create-c` | _none_  |

## Payload

1. String - name of the channel
2. Array of strings - usernames of the people to add to the channel when it is created. This can be empty and only the caller of the method will be a member of the channel.
3. Boolean - whether the channel is read only or not

## Example Call

```json
{
    "msg": "method",
    "method": "createChannel",
    "id": "85",
    "params": [
        "channel-name",
        ["array-of-usernames", "who-are-in-the-channel"],
        true/false
    ]
}
```

## Example Response

The response will be an object with one property `rid` which is the id of the newly created room.

```json
{
    "msg": "result",
    "id": "85",
    "result": [
        { "rid": "BBkfgYT2azf7RPTTg" }
    ]
}
```

## See Also

- [Create Private Groups][1]
- [Delete Channels][2]
- [Archive Rooms][3]
- [Unarchive Rooms][4]

[1]: ../create-private-groups/

[2]: ../delete-rooms/

[3]: ../archive-rooms/

[4]: ../unarchive-rooms/
