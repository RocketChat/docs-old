# Get Message

Retrieves a single chat message by the provided id. Callee must have permission to access the room where the message resides.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getMessage` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `msgId` | `7aDSXtjMA3KPLxLjt` | Required | The id of the message to get. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.getMessage?msgId=7aDSXtjMA3KPLxLjt
```

## Example Result

```javascript
{
  "message": {
    "_id": "7aDSXtjMA3KPLxLjt",
    "rid": "GENERAL",
    "msg": "This is a test!",
    "ts": "2016-12-14T20:56:05.117Z",
    "u": {
      "_id": "y65tAmHs93aDChMWu",
      "username": "graywolf336"
    }
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.47.0 | Added |

