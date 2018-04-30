# Public Settings Get

List all public settings.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/settings.public` | `no` | `GET` |

## Example Call

```bash
curl http://localhost:3000/api/v1/settings.public
```

## Example Result

```json
{
  "settings": [
  { "_id": "API_Drupal_URL", "value": "" },
  { "_id": "API_Embed", "value": true }],
  "count": 50,
  "offset": 0,
  "total": 299,
  "success": true
}
```
