---
order: 20
---

# Settings Update
Updates the setting for the provided `_id`.

| URL | Requires Auth | HTTP Method |
| --- | ------------- | ----------- |
| `/api/v1/settings/:_id` | `yes` | `get` |

## Parameters
| Argument | Example | Required | Description |
| -------- | ------- | -------- | ----------- |
| `_id` | `Livechat_enabled` | Required | The setting's `_id` field |
| `value` | `true` | Required | The value to update the setting. |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/settings/Livechat_enabled \
     -d '{ "value": true }'
```

## Example Result

```json
{
  "success": true
}
```
