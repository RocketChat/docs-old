# Set Topic

Sets the topic for the direct message.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/im.setTopic` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The direct message id |
| `topic` | `Discuss all of the testing.` | Required | The direct message topic to set. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/im.setTopic \
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
| 0.48.0 | Added |

