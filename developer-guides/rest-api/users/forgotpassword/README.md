# Forgot Password

| URL                            | Requires Auth | HTTP Method |
| :----------------------------- | :------------ | :---------- |
| `/api/v1/users.forgotPassword` | `no`          | `POST`      |

## Payload

| Argument      | Example                         | Required | Description                           |
| :---------    | :------------------------------ | :------- | :------------------------------------ |
| `email`       | `email@rocket.cat`              | Required | The email to send password reset link |

## Example Call - As JSON

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/users.forgotPassword \
      -d '{ "email": "email@rocket.cat" }'
```

## Result

```json
{
  "status": "success"
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Added |

