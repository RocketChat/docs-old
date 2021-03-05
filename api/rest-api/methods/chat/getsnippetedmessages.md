# Get Snippeted Messages

Retrieve snippeted messages. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getSnippetedMessages` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The room id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.getSnippetedMessages?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
    "messages": [
        {
            "_id": "QQuPFFcLmsqHWeqhn",
            "rid": "GENERAL",
            "msg": "``````\ntest\n``````",
            "ts": "2019-10-25T21:42:39.022Z",
            "u": {
                "_id": "CaevAPDbXN252kyXa",
                "username": "marcos.defendi",
                "name": "Marcos Defendi"
            },
            "_updatedAt": "2019-10-25T22:54:02.094Z",
            "mentions": [],
            "channels": [],
            "snippetName": "ee",
            "snippeted": true,
            "snippetedBy": {
                "_id": "CaevAPDbXN252kyXa",
                "username": "marcos.defendi"
            }
        }
    ],
    "count": 1,
    "offset": 0,
    "total": 1,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.3.0 | Added |

