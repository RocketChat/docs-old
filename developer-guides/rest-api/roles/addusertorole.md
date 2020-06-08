# Role AddUserToRole

Assign a role to an user. Optionally, you can set this role to a room.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/roles.addUserToRole` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roleName` | `guest` | Required | The role name. |
| `username` | `rocket.chat` | Required | The user name. |
| `roomId` | `dK7vNYXMdHGLdukpL` | Optional | If the role scope be Subscriptions and assign it to a room, you need to pass the roomId as parameter. |

## Example Call

```bash
curl -H "Content-type:application/json" \
     -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/roles.addUserToRole \
     -d '{ "roleName": "guest" }' \
     -d '{ "username": "rocket.chat" }' \
     -d '{ "roomId": "dK7vNYXMdHGLdukpL" }' \
```

## Example Result

```javascript
{
    "role": {
        "_id": "guest",
        "name": "guest",
        "scope": "Subscriptions",
        "description": "",
        "_updatedAt": "2018-08-23T03:57:54.603Z"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

