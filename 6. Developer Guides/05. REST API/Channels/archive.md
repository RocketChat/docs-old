---
order: 5
---

# Channel Archive 
Archives a channel.

| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/channels.archive` | `yes` | `post` | Object: `{ "roomId": "channelId" }` |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.archive \
     -d '{ "roomId": "channelId" }'
```

## Example Result
```json
{
   "success": true
}
```