---
order: 15
---

# Channel Close
Removes the channel from the user's list of channels.

| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/channels.close` | `yes` | `post` | Object: `{ "roomId": "channelId" }` |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.close \
     -d '{ "roomId": "channelId" }'
```

## Example Result
```json
{
   "success": true
}
```