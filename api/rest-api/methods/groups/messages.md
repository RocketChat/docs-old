# Group messages

Lists all of the specific group messages on the server. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with [Query and Fields Query Parameters](../../query-and-fields-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.messages` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required\(if no `roomName` | The private group's id |
| `roomName` | `testGroup` | Required\(if no `roomId`\) | The private group's name |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/groups.messages?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
    "messages": [
        {
            "_id": "CeXwh5eBbdrtvnqG6",
            "rid": "agh2Sucgb54RQ8dDo",
            "msg": "s",
            "ts": "2018-10-05T13:48:21.616Z",
            "u": {
                "_id": "KPkEYwKKBKZnEEPpt",
                "username": "marcos.defendi",
                "name": "Marcos Defendi"
            },
            "_updatedAt": "2018-10-05T13:48:49.535Z",
            "reactions": {
                ":frowning2:": {
                    "usernames": [
                        "marcos.defendi"
                    ]
                }
            },
            "mentions": [],
            "channels": [],
            "starred": {
                "_id": "KPkEYwKKBKZnEEPpt"
            }
        },
        {
            "_id": "MrAeupRiF9TvhMesK",
            "t": "room_changed_privacy",
            "rid": "agh2Sucgb54RQ8dDo",
            "ts": "2018-10-05T00:11:16.998Z",
            "msg": "Private Group",
            "u": {
                "_id": "rocketchat.internal.admin.test",
                "username": "rocketchat.internal.admin.test"
            },
            "groupable": false,
            "_updatedAt": "2018-10-05T00:11:16.998Z"
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
| 0.59.0 | Added |

