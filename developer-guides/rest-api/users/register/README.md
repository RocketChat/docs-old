# Register

Register a new user.

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
| `secretURL` | `Jjwjg6gouWLXhMGKW` | Optional | String appended to secret registration URL (if using). |

## Example Call

```bash
curl -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.register \
     -d '{ "username": "rogersmith", "email": "roger@example.com", "pass": "passw0rd", "name": "Roger Smith"}'
```

## Example Result

```json
{
  "user": {
    "_id": "Jh9qrMxNvkYbsmEds",
    "createdAt": "2019-05-03T11:24:57.877Z",
    "services": {
      "password": {
        "bcrypt": "$2b$10$YhP9IDJcDZ2NRS26jtRSD.x3YGA06BTknPoEuNM0Oaf8rb4WVWssC",
        "reset": {
          "token": "aKi5dCZ-8CNDFJ7xWg7mleefozXLBr9Sjnbhh6aHtbD",
          "email": "roger@example.com",
          "when": "2019-05-03T11:24:58.614Z",
          "reason": "enroll"
        }
      },
      "email": {
        "verificationTokens": [
          {
            "token": "flg2bqOwouqKtM11Hc_IEKpQUUnDJ-WKEDVZL5rkpYh",
            "address": "roger@example.com",
            "when": "2019-05-03T11:24:58.574Z"
          }
        ]
      }
    },
    "emails": [
      {
        "address": "roger@example.com",
        "verified": false
      }
    ],
    "type": "user",
    "status": "offline",
    "active": true,
    "_updatedAt": "2019-05-03T11:24:58.625Z",
    "roles": [
      "user"
    ],
    "name": "Roger Smith",
    "username": "rogersmith"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.50.0 | Added |
