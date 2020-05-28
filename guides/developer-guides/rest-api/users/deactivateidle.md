# Delete

Deactivate Idle users. Requires `edit-other-user-active-status` permission.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.deactivateIdle` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `daysIdle` | 2 | Required | The days idle. |
| `role` | `admin` | Optional, default `user` | User role. |

## Example Call - Via userId

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.deactivateIdle \
     -d '{ "daysIdle": 2, "role": "admin" }'
```

## Example Result

```javascript
{
  "count": 1,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 3.1.0 | Added |

