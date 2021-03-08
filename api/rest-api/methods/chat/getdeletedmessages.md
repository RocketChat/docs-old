# Get Deleted Messages

Retrieve message read receipts. It supports ONLY the [Offset and Count Query Parameters](../../offset-and-count-and-sort-info.md)

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getDeletedMessages` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The room id |
| `since` | `2018-12-12T00:11:22.345Z` | Required | The date \(ISODate\) to search deleted messages |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.getDeletedMessages?roomId=ByehQjC44FwMeiLbX&since=2018-12-12T00:11:22.345Z&count=1&offset=2
```

## Example Result

```javascript
{
    "messages": [
        {
            "_id": "W32fr3LjPxQ2TQH8A"
        },
        {
            "_id": "D43CH4HC2J43C2JB4"
        }
    ],
    "count": 2,
    "offset": 2,
    "total": 91,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.73.0 | Added |

