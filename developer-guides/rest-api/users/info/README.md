# User Information
Retrieves information about a user, the result is only limited to what the callee has access to view.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.info` | `yes` | `GET` |

## Query Parameters
| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` or `username` | `BsNr28znDkG8aeo7W` | Required | The id or username of the user. |

## Other Users Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.info?userId=BsNr28znDkG8aeo7W
```

## Example Result Regular User Callee
```json
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

## Example Result Admin Callee
```json
{
  "user": {
    "_id": "nSYqWzZ4GsKTX4dyK",
    "createdAt": "2016-12-07T15:47:46.861Z",
    "services": {
      "password": {
        "bcrypt": ...
      },
      "email": {
        "verificationTokens": [
          {
            "token": "...",
            "address": "example@example.com",
            "when": "2016-12-07T15:47:46.930Z"
          }
        ]
      },
      "resume": {
        "loginTokens": [
          {
            "when": "2016-12-07T15:47:47.334Z",
            "hashedToken": "..."
          }
        ]
      }
    },
    "emails": [
      {
        "address": "example@example.com",
        "verified": true
      }
    ],
    "type": "user",
    "status": "offline",
    "active": true,
    "roles": [
      "user"
    ],
    "name": "Example User",
    "lastLogin": "2016-12-08T00:22:15.167Z",
    "statusConnection": "offline",
    "utcOffset": 0,
    "username": "example"
  },
  "success": true
}
```

## Change Log
| Version | Description |
| :--- | :--- |
| 0.49.0 | Updated to support `userId` or `username` |
| 0.48.0 | Renamed to `users.info` |
| 0.35.0 | Added as `user.info` |
