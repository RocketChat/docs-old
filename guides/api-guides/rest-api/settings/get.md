# Private Settings

List all private settings.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/settings` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/settings
```

## Example Result

```javascript
{
  "settings": [
          { "_id": "API_Allow_Infinite_Count", "value": true },
          { "_id": "API_CORS_Origin", "value": "*" }
  ],
  "count": 50,
  "offset": 0,
  "total": 299,
  "success": true
}
```

