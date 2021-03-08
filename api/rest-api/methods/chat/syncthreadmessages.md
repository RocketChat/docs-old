# Sync Thread Messages

It supports the [Query, Fields](../../query-and-fields-info.md#query-example) and [sort](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.syncThreadMessages` | `yes` | `GET` |

## Query Parameters

One of roomId or roomName is required.

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `tmid` | `hbs2ZAjHH2JXrP7C7` | Required | Thread's message ID |
| `updatedSince` | `2017-11-25T15:08:17.248Z` | Required | Date as ISO string |

When you provide the `updatedSince` query parameter in the URL then the `update` and `remove` in the response will contain only those updated and removed since this date and time.

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.syncThreadMessages?tmid=hbs2ZAjHH2JXrP7C7&updatedSince=2019-02-25T15:08:17.248Z
```

## Example Result

```javascript
{
    "messages": {
        "update": [
            {
                "_id": "8BciMkvotHLpmpDEG",
                "rid": "GENERAL",
                "tmid": "hbs2ZAjHH2JXrP7C7",
                "msg": "test",
                "ts": "2019-04-16T18:30:46.615Z",
                "u": {
                    "_id": "rocketchat.internal.admin.test",
                    "username": "rocketchat.internal.admin.test",
                    "name": "RocketChat Internal Admin Test"
                },
                "_updatedAt": "2019-04-16T18:30:46.669Z",
                "mentions": [],
                "channels": []
            }
        ],
        "remove": []
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.0.0 | Added |

