# Get all the mentions of a channel

It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.getAllUserMentionsByChannel` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/channels.getAllUserMentionsByChannel?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
    "mentions": [
        {
            "_id": "Gptx3mc6TjSv5tLWb",
            "rid": "GENERAL",
            "msg": "@rocket.cat",
            "ts": "2018-03-12T14:59:14.166Z",
            "u": {
                "_id": "47cRd58HnWwpqxhaZ",
                "username": "test",
                "name": "test"
            },
            "mentions": [
                {
                    "_id": "47cRd58HnWwpqxhaZ",
                    "username": "rocket.cat"
                }
            ],
            "channels": [],
            "_updatedAt": "2018-03-12T14:59:14.171Z"
        },
        {
            "_id": "rwerwfjuii6TjSv5tLWb",
            "rid": "GENERAL",
            "msg": "@rocket.cat",
            "ts": "2018-03-12T14:59:14.166Z",
            "u": {
                "_id": "47cRd58HnWwpqxhaZ",
                "username": "test",
                "name": "test"
            },
            "mentions": [
                {
                    "_id": "47cRd58HnWwpqxhaZ",
                    "username": "rocket.cat"
                }
            ],
            "channels": [],
            "_updatedAt": "2018-03-12T14:59:14.171Z"
        }
    ],
    "count": 2,
    "offset": 10,
    "total": 2,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.63.0 | Added |

