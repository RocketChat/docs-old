# Find or Create Invite

Creates or return an existing invite with the specified parameters. Requires the `create-invite-links` permission.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/findOrCreateInvite` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` | `'csFYrDeixJG7PnrAh'` | Required | The id of the room that the invite is being created for. |
| `days` | `0` | Required | The number of days that the invite will be valid for. Send 0 for unlimited. |
| `maxUses` | `20` | Required | The number of times that the invite can be used. Send 0 for unlimited. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/findOrCreateInvite \
     -d '{ "rid": "csFYrDeixJG7PnrAh", "days": 10, "maxUses": 0 }'
```

## Example Result

```javascript
{
    "_id": "kDKQ3H",
    "days": 10,
    "maxUses": 0,
    "rid": "csFYrDeixJG7PnrAh",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2017-01-06T13:23:46.018Z",
    "expires": "2017-01-16T13:23:46.018Z",
    "_updatedAt": "2017-01-06T13:23:46.018Z",
    "uses": 0,
    "url": "http://open.rocket.chat/invite/kDKQ3H",
    "success": true
}
```

