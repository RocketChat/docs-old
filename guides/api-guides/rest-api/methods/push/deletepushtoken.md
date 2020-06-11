# Delete

Removes push token on the server.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/push.token` | `yes` | `DELETE` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `TOKEN` | Required | The Token |

## Example Call

```bash
curl -H "X-Auth-Token: wQcX06fwNoW_syxZl4OS67afcFJkKI6AjzOJGA1-0-J" \
     -H "X-User-Id: 52d5Rw8LT3TeDa59Z" \
     -H "Content-type:application/json" \
     -X "DELETE" \
     http://localhost:3000/api/v1/push.token \
     -d '{"token": "TOKEN"}'
```

## Example Result

```javascript
{
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.60.0 | Added. |

