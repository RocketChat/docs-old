# Role Sync

Gets all the roles in the system which are updated after a given date.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/roles.sync` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `updatedSince` | `2017-11-25T15:08:17.248Z` | Required | Date as ISO string |

## Example call to get all the roles after a given date

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/roles.sync?updatedSince=2017-11-25T15:08:17.248Z
```

## Example Result

```javascript
{
  "roles": {
   "update" :[
      {
        "_id": "admin",
        "description": "Admin",
        "mandatory2fa": false,
        "protected": true,
        "scope": "Users"
      }
    ],
    "remove" : [
      {
        "_id": "user",
        "description": "User",
        "mandatory2fa": false,
        "protected": true,
        "scope": "Users"
      }
    ]
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 3.1.0 | Added |

