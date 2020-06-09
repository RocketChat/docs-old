# Channel Remove Moderator

Removes the role of moderator from a user in the current channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.removeModerator` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |
| `userId` | `nSYqWzZ4GsKTX4dyK` | Required | The user's id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.removeModerator \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "userId": "nSYqWzZ4GsKTX4dyK" }'
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
| 0.49.4 | Added |

