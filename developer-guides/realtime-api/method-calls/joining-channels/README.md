# Joining Channels

You can only join yourself to public channels, private groups are not joinable. Some public channels require you to enter a `joinCode`.

## Requirements

| Logged In | Permission    | Setting |
| --------- | ------------- | ------- |
| Yes       | `view-c-room` | _none_  |

## Payload

1. String - the id of the room to join
2. String - the `joinCode`, only needed if the room requires a code to join

## Example Call

```json
{
    "msg": "method",
    "method": "joinRoom",
    "id": "99",
    "params": [
        "roomId",
        "joinCode"
    ]
}
```

## Example Response

The response from calling the method will return a result of whether the user joined the channel or not.

```json
{
    "msg": "result",
    "id": "99",
    "result": true/false
}
```

## See Also

- [Create Channels][1]
- [Delete Rooms][2]
- [Archive Rooms][3]

[1]: ../create-channels/

[2]: ../delete-rooms/

[3]: ../archive-rooms/
