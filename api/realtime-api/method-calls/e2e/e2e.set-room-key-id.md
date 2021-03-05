# Set Room Key ID

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

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

