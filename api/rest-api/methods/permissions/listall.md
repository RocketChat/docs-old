---
permalink: /developer-guides/rest-api/permissions/list-all/
redirect_from:
  - /developer-guides/rest-api/permissions/list/
---

# List All

Returns all permissions from the server.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/permissions.listAll` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `updatedSince` | `2017-11-25T15:08:17.248Z` | Optional | Date as ISO string |

When you provide the `updatedSince` query parameter in the URL then the `update` and `remove` in the response will contain only those updated and removed since this date and time.

## Example Call to get all of the rooms

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/permissions.listAll?updatedSince=2017-11-25T15:08:17.248Z
```

## Example Result

```javascript
{
  "update": [
    {
       "_id": "access-permissions",
       "_updatedAt": "2018-11-28T11:55:49.106Z",
       "roles": [
           "admin"
       ]
    },
    {
        "_id": "add-oauth-service",
        "_updatedAt": "2018-11-28T12:59:51.974Z",
        "roles": [
           "admin",
           "user"
         ]
   }
  ],
  "remove": [],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.73.0 | Added |

