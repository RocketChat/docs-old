# Channel Delete

Remove a public channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.delete` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required \(if no roomName\) | The channel's id |
| `roomName` | `general` | Required \(if no roomId\) | The channel's name |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.delete \
     -d '{ "roomName": "channelname" }'
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
| 0.71.0 | Removed `channel` property |
| 0.49.0 | Added |

