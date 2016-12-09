---
order: 10
---

# Logout
| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/logout` | `yes` | `get` | _n/a_ |

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
