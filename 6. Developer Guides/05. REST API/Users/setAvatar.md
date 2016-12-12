# User Set Photo/Avatar
| URL | Requires Auth | HTTP Method | Payload |
| :--- | :--- | :--- | :--- |
| `/api/v1/users.setAvatar` | `yes` | `POST` | Object: `{ avatarUrl: "http://domain.tld/to/my/own/avatar.jpg" }` _or_ a file |

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
```json
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
