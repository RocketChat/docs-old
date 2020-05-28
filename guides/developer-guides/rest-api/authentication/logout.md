# Logout

Invalidate your REST API authentication token.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/logout` | `yes` | `POST` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -X POST http://localhost:3000/api/v1/logout
```

## Result

```javascript
{
   "status": "success",
   "data": {
     "message": "You've been logged out!"
   }
}
```

