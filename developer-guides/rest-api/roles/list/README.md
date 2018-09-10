# Role List

Gets all the roles in the system.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/roles.list` | `yes` | `GET` |

## Example call to get all the roles

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/roles.list
```

## Example Result

```json
{
    "roles": [
        {
            "_id": "admin",
            "scope": "Users",
            "description": "Admin",
            "protected": true
        },
        {
            "_id": "moderator",
            "scope": "Subscriptions",
            "description": "Moderator",
            "protected": true
        },
        {
            "_id": "leader",
            "scope": "Subscriptions",
            "description": "Leader",
            "protected": true
        },
        {
            "_id": "owner",
            "scope": "Subscriptions",
            "description": "Owner",
            "protected": true
        },
        {
            "_id": "user",
            "scope": "Users",
            "description": "",
            "protected": true
        },
        {
            "_id": "bot",
            "scope": "Users",
            "description": "",
            "protected": true
        },
        {
            "_id": "guest",
            "scope": "Users",
            "description": "",
            "protected": true
        },
        {
            "_id": "anonymous",
            "scope": "Users",
            "description": "",
            "protected": true
        },
        {
            "_id": "livechat-agent",
            "name": "livechat-agent",
            "scope": "Users"
        },
        {
            "_id": "livechat-manager",
            "name": "livechat-manager",
            "scope": "Users"
        },
        {
            "_id": "livechat-guest",
            "name": "livechat-guest",
            "scope": "Users"
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |