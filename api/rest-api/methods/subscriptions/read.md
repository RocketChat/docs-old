# Read

Mark any room \(channel, group and DMs\) as read.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/subscriptions.read` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description | Valid Format\(s\) |
| :--- | :--- | :--- | :--- | :--- |
| `rid` | `L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y` OR `GENERAL` | Required | A valid `rid` for a channel, group or DM | Alphanumeric mixed-case string |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-Type: application/json" \
     http://localhost:3000/api/v1/subscriptions.read \
     -d '{"rid":"L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y"}'
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
| 0.61.0 | Endpoint Added. |

