# Get Message Read Receipts

Retrieve message read receipts.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getMessageReadReceipts` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `messageId` | `ByehQjC44FwMeiLbX` | Required | The message id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.getMessageReadReceipts?messageId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
    "receipts": [
        {
            "_id": "HksCYdTpCiM9DZ7Sa",
            "roomId": "GENERAL",
            "userId": "nvw6PBrXTejp4sfQt",
            "messageId": "WyDsZzjk2wHogtWK2",
            "ts": "2018-02-26T20:34:03.907Z",
            "user": {
                "username": "rocket.cat",
                "name": "Rocket cat",
                "_id": "nvw6PBrXTejp4sfQt"
            }
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.63.0 | Added |

