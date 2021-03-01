# Use Invite Token

Report to the server that an invite token was used. No permissions are required.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/useInviteToken` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `iS7pza` | Required | The id of the invite being used. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/useInviteToken \
     -d '{ "token": "iS7pza" }'
```

## Example Result

```javascript
{
    "room": {
        "rid": "QqsWiqNH2TnxtvZQq",
        "fname": "a-room-name",
        "name": "a-room-name",
        "t": "p"
    },
    "success": true
}
```

