# Validate Invite Token

Checks if an invite token is valid. No permissions are required.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/validateInviteToken` | `no` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `iS7pza` | Required | The id of the invite being validated. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/validateInviteToken \
     -d '{ "token": "iS7pza" }'
```

## Example Result

```javascript
{
  "valid": true,
  "success": true
}
```

