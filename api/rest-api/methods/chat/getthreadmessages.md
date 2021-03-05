# Get Thread Messages

Get thread messages. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with [Query and Fields Query Parameters](../../query-and-fields-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getThreadMessages` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `tmid` | `7aDSXtjMA3KPLxLjt` | Required | The id of the the thread message. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.getThreadMessages?tmid=7aDSXtjMA3KPLxLjt
```

## Example Result

```javascript
{
    "messages": [
        {
            "_id": "gcGai9bRREqokjyPc",
            "rid": "GENERAL",
            "msg": "Test",
            "ts": "2019-04-08T13:15:52.017Z",
            "u": {
                "_id": "p4a8YxvLQEHmiBKTS",
                "username": "marcos.defendi",
                "name": "Marcos Defendi"
            },
            "_updatedAt": "2019-04-08T14:40:27.789Z",
            "mentions": [],
            "channels": [],
            "replies": [
                "p4a8YxvLQEHmiBKTS"
            ],
            "tcount": 5,
            "tlm": "2019-04-08T14:40:27.724Z"
        },
        {
            "_id": "GfhiiJjcjKFyYMuMY",
            "rid": "GENERAL",
            "tmid": "gcGai9bRREqokjyPc",
            "msg": "This is a test!",
            "ts": "2019-04-08T13:20:22.238Z",
            "u": {
                "_id": "p4a8YxvLQEHmiBKTS",
                "username": "marcos.defendi",
                "name": "Marcos Defendi"
            },
            "_updatedAt": "2019-04-08T13:20:22.265Z",
            "mentions": [],
            "channels": []
        }
    ],
    "count": 2,
    "offset": 0,
    "total": 2,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.0.0 | Added |

