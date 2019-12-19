# Set Status

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.setStatus` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `status` | `away` | Required | The value of the status |
| `message` | `coffee break` | Required | The message for the status |

## Example call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.setStatus \
     -d '{"status": "away", "message": "coffee break" }'
```

## Example Result

```json
{
    "success": true
}
```

## Change Log