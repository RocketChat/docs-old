# Get Pinned Messages

Retrieve pinned messages from a room. It supports ONLY the [Offset and Count Query Parameters](../../offset-and-count-and-sort-info.md)

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getPinnedMessages` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The room id |
| `offset` | `0` | Optional | See [Offset Parameter](../../offset-and-count-and-sort-info.md) |
| `count` | `1` | Optional | See [Count Parameter](../../offset-and-count-and-sort-info.md) |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
    http://localhost:3000/api/v1/chat.getPinnedMessages?roomId=ByehQjC44FwMeiLbX
```

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
    http://localhost:3000/api/v1/chat.getPinnedMessages?roomId=ByehQjC44FwMeiLbX&count=2&offset=0
```

## Example Result

```javascript
{
    "messages": [
        {
            "_id": "Srhca3mgthgjkEisJ",
            "rid": "ByehQjC44FwMeiLbX",
            "msg": "I pinned this message",
            "ts": "2019-03-23T00:53:24.388Z",
            "u": {
                "_id": "aobEdbYhXfu5hkeqG",
                "username": "user",
                "name": "User"
            },
            "mentions": [],
            "channels": [],
            "_updatedAt": "2019-03-23T00:53:28.813Z",
            "pinned": true,
            "pinnedAt": "2019-03-23T00:53:28.813Z",
            "pinnedBy": {
                "_id": "aobEdbYhXfu5hkeqG",
                "username": "user"
            }
        },
        {
            "_id": "m3AZcKrvayKEZSKJN",
            "rid": "GENERAL",
            "msg": "Ola",
            "ts": "2019-03-23T00:53:50.974Z",
            "u": {
                "_id": "aobEdbYhXfu5hkeqG",
                "username": "user",
                "name": "user"
            },
            "mentions": [],
            "channels": [],
            "_updatedAt": "2019-03-23T00:53:53.649Z",
            "pinned": true,
            "pinnedAt": "2019-03-23T00:53:53.649Z",
            "pinnedBy": {
                "_id": "aobEdbYhXfu5hkeqG",
                "username": "user"
            }
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
| 2.0.0 | Added |

