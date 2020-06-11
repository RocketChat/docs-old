# Login

Login with your username and password.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/login` | `no` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `user` | `foo@bar.com` OR `myusername` | Optional | Your username or email |
| `password` | `my$up3erP@ssw0rd` | Optional | Your password |
| `resume` | `9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq` | Optional | Your previously issued authToken |

### Notes

* **Whilst none of the arguments are required in every request, every request requires some arguments to be provided. You MUST provide either `user` AND `password`, or provide `resume`.**
* **You will need to provide the `authToken` and `userId` for any of the authenticated methods.**
* **If your user has two-factor\(2FA\) authentication enabled, you must send a request like** [**this**](login.md#example-call---when-two-factor2fa-authentication-is-enabled)**.**
* **If LDAP authentication is enabled, you must maintain the login in the same way as you normally do. Similarly if 2FA is enabled for an LDAP user. Everything stays the same.**

## Example Call - As Form Data

```bash
curl http://localhost:3000/api/v1/login \
     -d "user=myusername&password=mypassword"
```

```bash
curl http://localhost:3000/api/v1/login \
     -d "user=my@email.com&password=mypassword"
```

## Example Call - As JSON

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/login \
      -d '{ "user": "myusername", "password": "mypassword" }'
```

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/login \
      -d '{ "user": "my@email.com", "password": "mypassword" }'
```

## Example Call - When two-factor\(2FA\) authentication is enabled

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/login \
      -d '{ "user": "myusername", "password": "mypassword", "code": "224610" }'
```

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/login \
      -d '{ "user": "my@email.com", "password": "mypassword", "code": "224610" }'
```

## Result

```javascript
{
  "status": "success",
  "data": {
      "authToken": "9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq",
      "userId": "aobEdbYhXfu5hkeqG",
      "me": {
            "_id": "aYjNnig8BEAWeQzMh",
            "name": "Rocket Cat",
            "emails": [
                {
                  "address": "rocket.cat@rocket.chat",
                  "verified": false
                }
            ],
            "status": "offline",
            "statusConnection": "offline",
            "username": "rocket.cat",
            "utcOffset": -3,
            "active": true,
            "roles": [
                "admin"
            ],
            "settings": {
                "preferences": {}
              },
            "avatarUrl": "http://localhost:3000/avatar/test"
        }
   }
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.0.0 | Added `avatarUrl` property to response |
| 0.64.0 | Added `me` property to response |
| 0.60.0 | Added |

