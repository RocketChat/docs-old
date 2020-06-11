# History

Lists all history of the specified integration. Requires the permission `manage-outgoing-integrations` or `manage-own-outgoing-integrations`. It will return the integrations based on user permission. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with [Query and Fields Query Parameters](../../query-and-fields-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/integrations.history` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/integrations.history?id=nvdQuJQ6tE9HRFBzd
```

## Example Result

```javascript
{
    "history": [],
    "offset": 0,
    "items": 0,
    "total": 0,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.1.0 | Separate permissions in `incoming` and `outgoing`. |
| 0.53.0 | Added |

