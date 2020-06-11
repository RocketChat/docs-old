# Search

Search for messages in a channel by id and text message.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.search` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `7aDSXtjMA3KPLxLjt` | Required | The id of the channel. |
| `searchText` | `test to search` | Required | The text message to search in messages. |
| `count` | `10` | Optional | The limit of result. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.search?roomId=GENERAL&searchText=test&count=10
```

## Example Result

```javascript
{
    "messages": [
        {
            "_id": "px9KLW9G2SfD5DKFt",
            "rid": "GENERAL",
            "msg": "this is a test",
            "ts": "2018-03-27T14:44:00.549Z",
            "u": {
                "_id": "RtMDEYc28fQ5aHpf4",
                "username": "marcos.defendi",
                "name": "Marcos Defendi"
            },
            "mentions": [],
            "channels": [],
            "_updatedAt": "2018-03-27T14:44:00.550Z",
            "score": 0.5833333333333334
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.67.0 | Changed `limit` query parameter to `count` |
| 0.60.0 | Added |

