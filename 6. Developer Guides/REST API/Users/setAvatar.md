---
order: 45
---

# User Set Photo/Avatar
| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.setAvatar` | `yes` | `POST` |

## Payload
| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `avatarUrl` | `http://domain.tld/to/my/own/avatar.jpg` | Required (if no a file) | Url of the avatar for the user. |

## Upload a file

### Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     -F "image=@my-own-avatar.png" \
     http://localhost:3000/api/v1/users.setAvatar
```

### Example Result
```json
{
    "success": true
}
```


## Set from a URL

### Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     -d '{"avatarUrl": "http://domain.tld/to/my/own/avatar.jpg"}' \
     http://localhost:3000/api/v1/users.setAvatar
```

### Example Result
```json
{
    "success": true
}
```

## Change Log
| Version | Description |
| :--- | :--- |
| 0.48.0 | Set other users avatars if the callee has permission. |
| 0.46.0 | Added |
