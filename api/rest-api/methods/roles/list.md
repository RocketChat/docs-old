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

```javascript
{
  "roles": [
    {
      "_id": "admin",
      "description": "Admin",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Users"
    },
    {
      "_id": "moderator",
      "description": "Moderator",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Subscriptions"
    },
    {
      "_id": "leader",
      "description": "Leader",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Subscriptions"
    },
    {
      "_id": "owner",
      "description": "Owner",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Subscriptions"
    },
    {
      "_id": "user",
      "description": "",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Users"
    },
    {
      "_id": "bot",
      "description": "",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Users"
    },
    {
      "_id": "guest",
      "description": "",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Users"
    },
    {
      "_id": "anonymous",
      "description": "",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Users"
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
| 0.73.0 | Added mandatory2fa property |
| 0.70.0 | Added |

