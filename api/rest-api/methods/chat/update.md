# Update

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.update` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The room id of where the message is. |
| `msgId` | `7aDSXtjMA3KPLxLjt` | Required | The message id to update. |
| `text` | `Updated text` | Required | Updated text for the message. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.update \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "msgId": "7aDSXtjMA3KPLxLjt", "text": "Updated text" }'
```

## Example Result

```javascript
{
    "message": {
        "_id": "qGdhTGDnhMLJPQYY8",
        "rid": "GENERAL",
        "msg": "gif+ testing update",
        "ts": "2017-01-05T17:06:14.403Z",
        "u": {
            "_id": "R4jgcQaQhvvK6K3iY",
            "username": "graywolf336"
        },
        "_updatedAt": "2017-01-05T19:42:20.433Z",
        "editedAt": "2017-01-05T19:42:20.431Z",
        "editedBy": {
            "_id": "R4jgcQaQhvvK6K3iY",
            "username": "graywolf336"
        }
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.49.0 | Added |

