# Sync Thread List

List all custom emojis available. It supports the [Query, Fields](../../query-and-fields-info.md#query-example) and [sort](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.syncThreadsList` | `yes` | `GET` |

## Query Parameters

One of roomId or roomName is required.

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` | `WyKnz8gDdS5jemBoK` | Required | Room's ID |
| `updatedSince` | `2017-11-25T15:08:17.248Z` | Required | Date as ISO string |

When you provide the `updatedSince` query parameter in the URL then the `update` and `remove` in the response will contain only those updated and removed since this date and time.

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.syncThreadsList?rid=GENERAL&updatedSince=2019-02-25T15:08:17.248Z
```

## Example Result

```javascript
{
    "threads": {
        "update": [
            {
                "_id": "J8Sqi5zPw62WgE4Md",
                "rid": "GENERAL",
                "msg": "test1",
                "ts": "2019-04-16T18:16:00.614Z",
                "u": {
                    "_id": "rocketchat.internal.admin.test",
                    "username": "rocketchat.internal.admin.test",
                    "name": "RocketChat Internal Admin Test"
                },
                "_updatedAt": "2019-04-16T18:17:09.749Z",
                "mentions": [],
                "channels": [],
                "replies": [
                    "rocketchat.internal.admin.test"
                ],
                "tcount": 1,
                "tlm": "2019-04-16T18:17:09.672Z"
            },
            {
                "_id": "hbs2ZAjHH2JXrP7C7",
                "rid": "GENERAL",
                "msg": "another test",
                "ts": "2019-04-16T18:13:20.403Z",
                "u": {
                    "_id": "rocketchat.internal.admin.test",
                    "username": "rocketchat.internal.admin.test",
                    "name": "RocketChat Internal Admin Test"
                },
                "_updatedAt": "2019-04-16T18:30:46.722Z",
                "mentions": [],
                "channels": [],
                "replies": [
                    "rocketchat.internal.admin.test"
                ],
                "tcount": 1,
                "tlm": "2019-04-16T18:30:46.615Z"
            }
        ],
        "remove": [
            {
                "_id": "GXwCSs4cx6456WBJk",
                "rid": "GENERAL",
                "msg": "test",
                "ts": "2019-04-16T18:13:39.217Z",
                "u": {
                    "_id": "rocketchat.internal.admin.test",
                    "username": "rocketchat.internal.admin.test",
                    "name": "RocketChat Internal Admin Test"
                },
                "_updatedAt": "2019-04-16T18:16:00.696Z",
                "mentions": [],
                "channels": [],
                "replies": [
                    "rocketchat.internal.admin.test"
                ],
                "tcount": 1,
                "tlm": "2019-04-16T18:16:00.614Z",
                "_deletedAt": "2019-04-16T18:16:13.508Z",
                "__collection__": "message"
            }
        ]
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.0.0 | Added |

