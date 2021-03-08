# Directory

A method, that searches by users or channels on all users and channels available on server. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with [Query and Fields Query Parameters](../../query-and-fields-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/directory` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `query` | `{"text": "rocket", "type": "users", "workspace": "local"}` | Required | When `type` is `users` you can send an additional `workspace` field, that can be `local` \(default\) or `all`. `workspace=all` will work only if [Federation](../../../../guides/administrator-guides/federation.md) is enabled. |

## Example Call

```bash
curl -G -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
          -H "X-User-Id: hw5DThnhQmxDWnavu" \
          -H "Content-type: application/json" \
          http://localhost:3000/api/v1/directory \
          --data-urlencode 'query={"text": "rocket", "type": "users", "workspace": "local"}'
```

## Example Result

```javascript
{
    "result": [
        {
            "_id": "jRca8kibJx8NkLJxt",
            "createdAt": "2018-04-13T12:46:26.517Z",
            "emails": [
                {
                    "address": "user.test.1523623548558@rocket.chat",
                    "verified": false
                }
            ],
            "name": "EditedRealNameuser.test.1523623548558",
            "username": "editedusernameuser.test.1523623548558",
            "avatarETag": "6YbLtc4v9b4conXon"
        }
    ],
    "count": 1,
    "offset": 0,
    "total": 1,
    "success": true
}
```

## Example Call

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
          -H "X-User-Id: hw5DThnhQmxDWnavu" \
          -H "Content-type: application/json" \
 http://localhost:3000/api/v1/directory?query={"text": "gene", "type": "channels"}&count=1&offset=2
```

## Example Result

```javascript
{
    "result": [
        {
            "_id": "GENERAL",
            "ts": "2018-05-15T19:10:54.689Z",
            "name": "general",
            "usernames": [
                "rocketchat.internal.admin.test",
                "editedusernameuser.test.1526941091574"
            ]
        }
    ],
    "count": 1,
    "offset": 2,
    "total": 4,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.0.0 | Added `workspace` query param |
| 0.65.0 | Added Pagination fields: `count`, `total`, `offset` |
| 0.64.0 | Added |

