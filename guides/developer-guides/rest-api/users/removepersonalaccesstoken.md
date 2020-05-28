# Remove Personal Access Token

Remove a personal access token. Requires `create-personal-access-tokens` permission.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.removePersonalAccessToken` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `tokenName` | `mypersonaltoken` | Required | The name of the token. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.removePersonalAccessToken \
     -d '{ "tokenName": "mypersonaltoken" }'
```

## Example Result

```javascript
{
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.69.0 | Added |

