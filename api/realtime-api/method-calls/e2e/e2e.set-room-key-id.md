# Set Room Key Id

This method marks an existing room as encrypted.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Payload

1. String - the id of the room that is being updated.
2. String - the keyID to add to the room.

## Example Call

```javascript
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

```javascript
{
    "msg": "result",
    "id": "8",
    "result": 1
}
```

## See Also

* [Get Users of Room Without Key](https://github.com/RocketChat/docs/tree/0f8db37bf9b56438fec3e87a94f192f3585e92e8/developer-guides/realtime-api/method-calls/e2e.get-users-of-room-without-key)
* [Fetch My Keys](https://github.com/RocketChat/docs/tree/0f8db37bf9b56438fec3e87a94f192f3585e92e8/developer-guides/realtime-api/method-calls/e2e.fetch-my-keys)
* [Set User Public And Private Keys](https://github.com/RocketChat/docs/tree/0f8db37bf9b56438fec3e87a94f192f3585e92e8/developer-guides/realtime-api/method-calls/e2e.set-user-public-and-private-keys)
* [Update Group Key](https://github.com/RocketChat/docs/tree/0f8db37bf9b56438fec3e87a94f192f3585e92e8/developer-guides/realtime-api/method-calls/e2e.update-group-key)

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

