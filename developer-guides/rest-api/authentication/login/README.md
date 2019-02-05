# Login

| URL             | Requires Auth | HTTP Method |
| :-------------- | :------------ | :---------- |
| `/api/v1/login` | `no`          | `POST`      |

## Payload

| Argument   | Example            | Required | Description   |
| :--------- | :----------------- | :------- | :------------ |
| `user` | `foo@bar.com` OR `myusername` | Required | Your username or email |
| `password` | `my$up3erP@ssw0rd` | Required | Your password |

## Notes

-> **You will need to provide the `authToken` and `userId` for any of the authenticated methods.** <br/>
-> **If your user has two-factor(2FA) authentication enabled, you must send a request like [this](#example-call---when-two-factor2fa-authentication-is-enabled).** <br/>
-> **If LDAP authentication is enabled, you must maintain the login in the same way as you normally do. Similarly if 2FA is enabled for an LDAP user. Everything stays the same.** <br/>

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

## Example Call - When two-factor(2FA) authentication is enabled

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

```json
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
              }
        }
   }
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Added `me` property to response |
| 0.60.0 | Added |
