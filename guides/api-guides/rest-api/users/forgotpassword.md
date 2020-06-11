# Forgot Password

Send email to reset your password.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.forgotPassword` | `no` | `POST` |

**Note**

* Please ensure that you have completed the configuration of the Email; otherwise, your users will not receive the mail normally. Accessible from Administration -&gt; Email.

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `email` | `email@rocket.cat` | Required | The email to send password reset link |

## Example Call - As JSON

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/users.forgotPassword \
      -d '{ "email": "email@rocket.cat" }'
```

## Result

```javascript
{
  "status": "success"
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Added |

