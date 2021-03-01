# Register

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.register` | `no` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `username` | `rogersmith` | Required | The username for the user. |
| `email` | `roger@example.com` | Required | The email for the user. |
| `pass` | `passw0rd` | Required | The password for the user. |
| `name` | `Roger Smith` | Required | The name of the user. |
| `secretURL` | `Jjwjg6gouWLXhMGKW` | Optional | String appended to secret registration URL \(if using\). |

## Example Call

```bash
curl -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.register \
     -d '{ "username": "rogersmith", "email": "roger@example.com", "pass": "passw0rd", "name": "Roger Smith"}'
```

## Example Result

```javascript
{
  "user": {
    "_id": "nSYqWzZ4GsKTX4dyK",
    "type": "user",
    "status": "offline",
    "active": true,
    "name": "Example User",
    "utcOffset": 0,
    "username": "example"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.50.0 | Added |

