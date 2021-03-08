# Get Mentioned Messages

Retrieve mentioned messages. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getMentionedMessages` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The room id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.getMentionedMessages?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
    "messages": [
        {
            "_id": "pN5jb4c9fhsDt8rfY",
            "rid": "GENERAL",
            "msg": "@rocketchat.internal.admin.test",
            "ts": "2019-10-08T17:53:18.112Z",
            "u": {
                "_id": "TwHg3x3i6gGHuyFjX",
                "username": "a",
                "name": "a"
            },
            "_updatedAt": "2019-10-08T17:53:18.184Z",
            "mentions": [
                {
                    "_id": "rocketchat.internal.admin.test",
                    "name": "RocketChat Internal Admin Test",
                    "username": "rocketchat.internal.admin.test"
                }
            ],
            "channels": []
        },
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

