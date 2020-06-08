# Channel Set Topic

Sets the topic for the channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.setTopic` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |
| `topic` | `Discuss all of the testing.` | Required | The channel's topic to set. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.setTopic \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "topic": "Discuss all of the testing" }'
```

## Example Result

```javascript
{
  "topic": "Testing out everything.",
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.13.0 | Added |

