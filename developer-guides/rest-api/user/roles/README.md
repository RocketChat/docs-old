# User roles

Returns all logged in user roles.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/user.roles` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 6eWs4ECxUITYYoZ_bAYK5OE2srkxAepQqQA1cGGv3jK" \
     -H "X-User-Id: hvzu8z6mHFigiXy6Y" \
     http://localhost:3000/api/v1/user.roles
```

## Example Result

```json
{
  "username": "rafaelks",
  "roles": [
    "admin"
  ],
  "_id": "hvzu8z6mHFigiXy6Y",
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.61.0 | Added. |