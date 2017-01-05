---
order: 10
---

# Channel Clean History 
Cleans up a channel, removing messages from the provided time range.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.cleanHistory` | `yes` | `POST` |

## Payload
| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |
| `latest` | `2016-09-30T13:42:25.304Z` | Optional <br> Default: now | The end of time range of messages to clean |
| `oldest` | `2016-05-30T13:42:25.304Z` | Optional <br> Default: _n/a_ | The start of the time range of messages to clean |
| `inclusive` | `true` | Optional <br> Default: `false` | Whether messages which land on latest and oldest should be included |

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

## Change Log
| Version | Description |
| :--- | :--- |
| 0.47.0 | Added |
