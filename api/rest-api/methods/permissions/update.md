# Update

Edits permissions on the server.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/permissions.update` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `permissions` | `[{"_id": "access-permissions", "roles": ["admin"]}]` | Required | The array of roles to overwrite. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/permissions.update \
     -d '{"permissions": [{"_id": "access-permissions", "roles": ["admin"]}]}'
```

## Example Result

```javascript
{
  "permissions": [
    {
      "_id": "access-permissions",
      "roles": [
        "admin"
      ],
      "_updatedAt": "2018-01-25T13:03:20.879Z",
      "meta": {
        "revision": 0,
        "created": 1516980515815,
        "version": 0
      },
      "$loki": 1
    },{
      ...
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.66.0 | Added. |

