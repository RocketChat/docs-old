# Get Username Suggestion

Gets a suggestion a new username to user.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.getUsernameSuggestion` | `yes` | `GET` |

## Other Users Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.getUsernameSuggestion
```

## Example Result

```javascript
{
  "result": "rocket.cat",
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.65.0 | Added |

