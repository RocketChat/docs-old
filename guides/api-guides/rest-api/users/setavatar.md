# Set Avatar

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.setAvatar` | `yes` | `POST` |

## Uploading a File

### Arguments

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `image` | Any image file | Required | The image file to use as the new avatar, as form data. |
| `userId` or `username` | `BsNr28znDkG8aeo7W` | Optional | The id or username of the user. If not provided, the auth user is updated. |

### Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -F "image=@my-own-avatar.png" \
     http://localhost:3000/api/v1/users.setAvatar
```

### Example Result

```javascript
{
    "success": true
}
```

## Providing a URL

### Arguments

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `avatarUrl` | `http://domain.tld/to/my/own/avatar.jpg` | Required | URL of the new avatar for the user. |
| `userId` or `username` | `BsNr28znDkG8aeo7W` | Optional | The id or username of the user. If not provided, the auth user is updated. |

### Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     -d '{"avatarUrl": "http://domain.tld/to/my/own/avatar.jpg"}' \
     http://localhost:3000/api/v1/users.setAvatar
```

### Example Result

```javascript
{
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.56.0 | Add support for `username` argument. |
| 0.48.0 | Set other users avatars if the callee has permission. |
| 0.46.0 | Added |

