# Delete

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/emoji-custom.delete` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `emojiId` | `ByehQjC44FwMeiLbX` | Required | The custom emoji id to be deleted. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/emoji-custom.delete \
     -d '{ "emojiId": "ByehQjC44FwMeiLbX" }'
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
| 0.74.0 | Added |

