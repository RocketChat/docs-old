# Generate Personal Access Token

Generate Personal Access Token. Requires `create-personal-access-tokens` permission.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.generatePersonalAccessToken` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `tokenName` | `mypersonaltoken` | Required | The name of the token. |
| `bypassTwoFactor` | `true` or `false` | Optional, default: `false` | If 2FA requirement should be ignored when using this token. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.generatePersonalAccessToken \
     -d '{ "tokenName": "mypersonaltoken", "bypassTwoFactor": true }'
```

## Example Result

```javascript
{
  "token": "2jdk99wuSjXPO201XlAks9sjDjAhSJmskAKW301mSuj9Sk"
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 3.1.0 | Added `bypassTwoFactor` param |
| 0.69.0 | Added |

