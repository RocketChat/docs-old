# Update own basic information

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.updateOwnBasicInfo` | `yes` | `POST` |

Note that to update the password or email for the user you must send `currentPassword` property encrypted in SHA256 together in payload.

**WARNING:** This API does not work when the server contains custom fields. There's a bug report [here](https://github.com/RocketChat/Rocket.Chat/issues/11154) related to that.

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `data.email` | `example@example.com` | Optional | The email address for the user. |
| `data.name` | `Example User` | Optional | The display name of the user. |
| `data.username` | `example` | Optional | The username for the user. |
| `data.currentPassword` | `5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5@w0rd` | Optional | The password for the user encrypted in SHA256. |
| `data.newPassword` | `passw0rd` | Optional | The new password for the user |
| `data.customFields` | `{ twitter: '@example' }` | Optional   Default: `undefined` | Any custom fields the user should have on their account. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.updateOwnBasicInfo \
     -d '"data" :{"email": "rocket.cat@rocket.chat", "newPassword": "passw0rd",
     "currentPassword": "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5",
      "username": "rocket.cat", name": "Example user" }'
```

## Example Result

```javascript
{
    "user": {
        "_id": "47cRd58HnWwpqxhaZ",
        "createdAt": "2018-03-09T13:17:11.951Z",
        "services": {
            "password": {
                "bcrypt": "$2a$10$zb/dp.AHZAhwPzgmOHcQA.5eOfu6pAYU5gchg3O74z7XzWAppJflq"
            },
            "email": {
                "verificationTokens": [
                    {
                        "token": "rzDjTJBoN8qdc5LCVM3xqaRHEx0lR9mxkFutB6fv-YP",
                        "address": "rocket.cat@rocket.chat",
                        "when": "2018-03-09T13:17:11.968Z"
                    },
                    {
                        "token": "bFdoXbtvVl4NYXNMQn-sb6t9TWwuBYkkntakvkNqyzr",
                        "address": "rocket.cat@rocket.chat",
                        "when": "2018-03-09T13:18:33.414Z"
                    },
                    {
                        "token": "reYkTD_OfKHYgU1p6ON-UyJjvXGODl6EoZ-GLQlg81s",
                        "address": "rocket.cat@rocket.chat",
                        "when": "2018-03-09T14:41:21.633Z"
                    }
                ]
            },
            "resume": {
                "loginTokens": [
                    {
                        "when": "2018-03-09T13:17:12.110Z",
                        "hashedToken": "T6sIP43ctqMedzVsxiF/dln27ua7l56/Rys+aq7J2JA="
                    },
                    {
                        "hashedToken": "0z7NG4SFO00ZvR71nNqAhK0yv/9OeGJ74WZWAUxzAwA="
                    }
                ]
            }
        },
        "emails": [
            {
                "address": "rocket.cat@rocket.chat",
                "verified": false
            }
        ],
        "type": "user",
        "status": "online",
        "active": true,
        "name": "Example User",
        "_updatedAt": "2018-03-09T20:21:08.992Z",
        "roles": [
            "admin",
            "user",
            "bot"
        ],
        "lastLogin": "2018-03-09T20:15:20.019Z",
        "statusConnection": "online",
        "utcOffset": -3,
        "username": "rocket.cat",
        "settings": {
            "profile": {}
        },
        "customFields": {
          "twitter": "userstwitter"
        }
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.62.2 | Added as `user.updateOwnBasicInfo` |

