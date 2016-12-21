---
order: 15
---

# User Delete
| URL | Requires Auth | HTTP Method | Payload |
| :--- | :--- | :--- | :--- |
| `/api/v1/users.delete` | `yes` | `POST` | Object: `{ userId }` |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.delete \
     -d '{ "userId": "BsNr28znDkG8aeo7W" }'
```

## Example Result
```json
{
  "success": true
}
```
