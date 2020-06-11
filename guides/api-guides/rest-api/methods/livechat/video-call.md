# Video Call

Request a Livechat transcript

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/video.call/:token` | `no` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` |  | Optional | The room `_id`. |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/video.call?token=iNKE8a6k6cjbqWhWd
```

## Example Result

```javascript
{
  "videoCall": {
    "rid": "vp3D9H8ud6HYvRpvq",
    "domain": "meet.jit.si",
    "provider": "jitsi",
    "room": "RocketChatFsitsR8HptRxCmE4Qvp3D9H8ud6HYvRpvq",
    "timeout": "2018-09-21T15:26:13.308Z"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

