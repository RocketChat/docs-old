# Role Create

Create a new role in the system.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/roles.create` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | `newRole` | Required | The name of the new role. |
| `scope` | `Subscriptions` | Optional   Default: `Users` | The scope of the new role. |
| `description` | `Role description` | Optional | A description for the new role. |

## Example Call

```bash
curl -H "Content-type:application/json" \
     -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/roles.create \
     -d '{ "name": "newRole" }' \
     -d '{ "scope": "Subscriptions" }' \
     -d '{ "description": "Role description" }' \
```

## Example Result

```javascript
{
    "role": {
        "_id": "newRole",
        "name": "newRole",
        "scope": "Subscriptions",
        "description": "Role description",
        "_updatedAt": "2018-08-23T03:57:54.603Z"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

