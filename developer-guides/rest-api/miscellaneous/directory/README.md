# Info

A method, that searches by users or channels on all users and channels available on server. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info/) along with [Query and Fields Query Parameters](../../query-and-fields-info/).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- | :--- |
| `/api/v1/directory` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
          -H "X-User-Id: hw5DThnhQmxDWnavu" \
          -H "Content-type: application/json" \
          http://localhost:3000/api/v1/directory?query={"text": "rocket", "type": "users"}
```

## Example Result

```json
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
            "username": "editedusernameuser.test.1523623548558"
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Added |
