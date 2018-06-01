# List Permissions

Returns all permissions from the server.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/permissions.list` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 6eWs4ECxUITYYoZ_bAYK5OE2srkxAepQqQA1cGGv3jK" \
     -H "X-User-Id: hvzu8z6mHFigiXy6Y" \
     http://localhost:3000/api/v1/permissions.list
```

## Example Result

```json
{
  "permissions": [
    {
      "_id": "access-permissions",
      "roles": [
        "admin"
      ],
      "_updatedAt": "2018-01-25T13:03:20.879Z",
      "meta": {
        "revision": 0,
        "created": 1516980515815,
        "version": 0
      },
      "$loki": 1
    },{
      ...
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.66.0 | Added. |