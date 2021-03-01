---
description: REST API Get Discussions Methods
---

# Get Discussions

Get all the discussions of room. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/rooms.getDiscussions` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/rooms.getDiscussions?roomId=GENERAL
```

## Example Result

```javascript
{
    "discussions": [
        {
            "_id": "hthLkno5RqTyNna4H",
            "name": "8BRnQEJQM8MjJWxkJ",
            "fname": "general discussion",
            "t": "p",
            "msgs": 1,
            "usersCount": 1,
            "u": {
                "_id": "rocketchat.internal.admin.test",
                "username": "rocketchat.internal.admin.test"
            },
            "topic": "general",
            "prid": "GENERAL",
            "ts": "2019-04-03T01:01:36.286Z",
            "ro": false,
            "sysMes": true,
            "default": false,
            "_updatedAt": "2019-04-03T01:01:36.402Z",
            "lastMessage": {
                "msg": "test",
                "ts": "2019-04-03T01:01:36.339Z",
                "u": {
                    "_id": "rocketchat.internal.admin.test",
                    "username": "rocketchat.internal.admin.test",
                    "name": "RocketChat Internal Admin Test"
                },
                "rid": "hthLkno5RqTyNna4H",
                "_id": "LLoaxBR8A7M24Qiji",
                "_updatedAt": "2019-04-03T01:01:36.368Z",
                "mentions": [],
                "channels": []
            },
            "lm": "2019-04-03T01:01:36.339Z"
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
| 1.0.0 | Added |

