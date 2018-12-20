# Get Deleted Messages

Retrieve message read receipts. It supports ONLY the [Offset and Count Query Parameters](../../offset-and-count-and-sort-info/)

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getDeletedMessages` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The room id |
| `since` | `2018-12-12T00:11:22.345Z` | Required | The date (ISODate) to search deleted messages (including the specific date) |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.getDeletedMessages?roomId=ByehQjC44FwMeiLbX&since=2018-12-12T00:11:22.345Z&count=1&offset=2
```

## Example Result

```json
{
    "messages": [
        {
            "_id": "W32fr3LjPxQ2TQH8A",
            "rid": "ByehQjC44FwMeiLbX",
            "msg": "asdsadasdas",
            "ts": "2018-12-20T18:41:51.106Z",
            "u": {
                "_id": "rocketchat.internal.admin.test",
                "username": "rocketchat.internal.admin.test",
                "name": "RocketChat Internal Admin Test"
            },
            "_updatedAt": "2018-12-20T18:41:51.148Z",
            "mentions": [],
            "channels": [],
            "_deletedAt": "2018-12-14T18:43:39.554Z"
        }
    ],
    "count": 1,
    "offset": 2,
    "total": 91,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.73.0 | Added |
