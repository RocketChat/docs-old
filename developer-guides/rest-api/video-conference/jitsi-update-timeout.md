# Update Jitsi Timeout

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/video-conference/jitsi.update-timeout` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ehyoM5JSQi94RwqPE7` | Required | The room Id of the room to update the jitsi timeout. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/video-conference/jitsi.update-timeout \
     -d '{ "roomId": "hyoM5JSQi94RwqPE7" }'
```

## Example Result

```javascript
{
    "jitsiTimeout": "2019-01-16T13:17:11.951Z",
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.74.0 | Added |

