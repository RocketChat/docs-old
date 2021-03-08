# Get Starred Messages

Retrieve starred messages. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getStarredMessages` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The room id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.getStarredMessages?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
    "messages": [
        {
            "_id": "ePeoiJQ3Qfc4556TW",
            "rid": "GENERAL",
            "msg": "fsdfs",
            "ts": "2019-10-09T19:17:21.883Z",
            "u": {
                "_id": "rocketchat.internal.admin.test",
                "username": "rocketchat.internal.admin.test",
                "name": "RocketChat Internal Admin Test"
            },
            "_updatedAt": "2019-10-09T19:17:25.196Z",
            "mentions": [],
            "channels": [],
            "starred": [
                {
                "_id": "rocketchat.internal.admin.test"
                }
            ]
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
| 2.2.0 | Added |

