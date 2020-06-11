# Transcript

Request a Livechat transcript

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/transcript` | `no` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` | `XFzMqgn33DcsQkpJp` | Required | The room `_id`. |
| `token` | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`. |
| `email` | `visitor@rocket.chat` | Required | The visitor `email`. |

## Example payload

```javascript
{
  "rid":"XFzMqgn33DcsQkpJp",
  "token": "iNKE8a6k6cjbqWhWd",
  "email": "visitor@rocket.chat"
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/transcript \
     -d '{"rid":"XFzMqgn33DcsQkpJp", "token": "iNKE8a6k6cjbqWhWd", "email": "visitor@rocket.chat"}'
```

## Example Result

```javascript
{
  "message": "Livechat transcript sent",
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

