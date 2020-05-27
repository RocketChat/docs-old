# Register

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.removeOtherTokens` | `yes` | `POST` |

## Example Call

```bash
curl -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.removeOtherTokens \
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
| 3.1.0 | Added |

