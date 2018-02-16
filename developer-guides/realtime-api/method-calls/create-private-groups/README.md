# Create Private Groups

Creates a private group.

## Requirements

| Logged In | Permission | Setting |
| --------- | ---------- | ------- |
| Yes       | `create-p` | _none_  |

## Payload

1. String - name of the channel
2. Array of strings - usernames of the people to add to the private group when it is created. This can be empty and only the caller of the method will be a member of the group.

## Example Call

```json
{
    "msg": "method",
    "method": "createPrivateGroup",
    "id": "89",
    "params": [
        "channel-name",
        ["array-of-usernames", "who-are-in-the-channel"]
    ]
}
```

## Example Response

The response will be an object with one property `rid` which is the id of the newly created private group.

```json
{
    "msg": "result",
    "id": "89",
    "result": [
        { "rid": "BBkfgYT2azf7RPTTg" }
    ]
}
```

## See Also

- [Create Channels][1]
- [Delete Private Groups][2]
- [Archive Rooms][3]
- [Unarchive Rooms][4]

[1]: ../create-channels/

[2]: ../delete-rooms/

[3]: ../archive-rooms/

[4]: ../unarchive-rooms/
