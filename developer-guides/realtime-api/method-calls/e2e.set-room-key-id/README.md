# Set Room Key Id

This method marks an existing room as encrypted.


## Requirements

| Logged In | Permission                 | Setting |
| --------- | -------------------------- | ------- |
| Yes       | _none_                     | _none_  |

## Payload

1. String - the id of the room that is being updated.
2. String - the keyID to add to the room.

## Example Call

```json
{
    "msg": "method",
    "method": "e2e.setRoomKeyID",
    "id": "8",
    "params": [
        "rid",
        "keyID"
    ]
}
```

## Example Response

```json
{
    "msg": "result",
    "id": "8",
    "result": 1
}
```

## See Also

- [Get Users of Room Without Key][1]
- [Fetch My Keys][2]
- [Set User Public And Private Keys][3]
- [Update Group Key][4]

[1]: ../e2e.get-users-of-room-without-key/

[2]: ../e2e.fetch-my-keys

[3]: ../e2e.set-user-public-and-private-keys/

[4]: ../e2e.update-group-key/
