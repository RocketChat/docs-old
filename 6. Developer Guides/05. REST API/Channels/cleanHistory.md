---
order: 10
---

# Channel Clean History 
Cleans up a channel, removing messages from the provided time range.

| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/channels.cleanHistory` | `yes` | `post` | Object: `{ "roomId": "channelId", "latest": "2016-12-09T13:42:25.304Z", "oldest": "2016-08-30T13:42:25.304Z", "inclusive": true/false }` |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.cleanHistory \
     -d '{ "roomId": "channelId", "latest": "2016-12-09T13:42:25.304Z", "oldest": "2016-08-30T13:42:25.304Z" }'
```

## Example Result
```json
{
   "success": true
}
```