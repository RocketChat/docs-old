# Unfollow Message

Unfollow a chat message to the message's channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.unfollowMessage` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `mid` | `7aDSXtjMA3KPLxLjt` | Required | The message id to unfollow. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: Z3cpiYN6CNK2oXWKv" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.unfollowMessage \
     -d '{ "mid": "7aDSXtjMA3KPLxLjt" }'
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
| 1.0.0 | Added |

