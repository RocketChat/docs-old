# Settings Get

Gets the setting for the provided `_id`.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/settings/:_id` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `_id` | `Livechat_enabled` | Required | The setting's `_id` field |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/settings/Livechat_enabled
```

## Example Result

```javascript
{
  "_id": "Livechat_enabled",
  "value": false,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.42.0 | Added |

