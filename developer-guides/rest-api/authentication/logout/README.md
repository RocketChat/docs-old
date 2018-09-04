# Logout

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- | :--- |
| `/api/v1/logout` | `yes` | `POST` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/logout
```

## Result

```json
{
   "status": "success",
   "data": {
     "message": "You've been logged out!"
   }
}
```
