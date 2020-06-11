# Set Status

Sets a user Status when the status message and state is given.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.setStatus` | `yes` | `POST` |

## Arguments

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `message` | `My status update.` | Required | The user's status message. |
| `status` | `online` | Optional | The user's status like `online`, `away`, `busy`, `offline`. |

## Example Call

```bash
curl -H "X-Auth-Token: 40tB-Cn5YQJ74QMlQXi4Zf4E_-e0P5CrklU2pWOtV9M" \
     -H "X-User-Id: uunbZHiuEnib8Pawj" \
     -d '{"message":"My status update", "status": "online"}' \
     http://localhost:3000/api/v1/users.setStatus
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
| `1.2.0` | Added |

