# Integrations History

Lists all history of the specified integration. Requires the permission `manage-integrations`. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info/) along with [Query and Fields Query Parameters](../../query-and-fields-info/).

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

```json
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
| 0.53.0 | Added |
