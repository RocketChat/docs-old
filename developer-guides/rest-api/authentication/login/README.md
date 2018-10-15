# Login

| URL             | Requires Auth | HTTP Method |
| :-------------- | :------------ | :---------- |
| `/api/v1/login` | `no`          | `POST`      |

## Payload

| Argument   | Example            | Required | Description   |
| :--------- | :----------------- | :------- | :------------ |
| `username` | `myusername`       | Required | Your username |
| `password` | `my$up3erP@ssw0rd` | Required | Your password |

## Notes

-> **You will need to provide the `authToken` and `userId` for any of the authenticated methods.** <br/>
-> **If your user has two-factor(2FA) authentication enabled, you must send a request like [this](#example-call---when-two-factor2fa-authentication-is-enabled).** <br/>
-> **If LDAP authentication is enabled, you must maintain the login in the same way as you normally do. Similarly if 2FA is enabled for an LDAP user. Everything stays the same.** <br/>

## Example Call - As Form Data

```bash
curl http://localhost:3000/api/v1/login \
     -d 'ldap=true&ldapOptions=[]&ldapPass=mypassword&username=myusername'
```

## Example Call - As JSON

```bash
curl -d '{ "ldap": true,
           "ldapOptions": [],
           "ldapPass": "mypassword",
           "username": "myusername" }' \
     -H "Content-Type: application/json" \
     https://localhost:3000/api/v1/login
```

## Example Call - When two-factor(2FA) authentication is enabled

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/login \
      -d '{ "totp": { "login": { "user": {"email": "rocket.cat@rocket.chat"}, "password": "password" }, "code": "224610" } }
```

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/login \
      -d '{ "totp": { "login": { "user": {"username": "rocket.cat"}, "password": "password" }, "code": "224610" } }
```

## Result

```json
{
    "status": "success",
    "data": {
        "authToken": "4hE0md4nAhvNlZKBfbnIOVn0PASpQfQ2rdx19x90qtj",
        "me": {
            "status": "online",
            "username": "yourusername",
            "name": "yourname",
            "roles": [
                "user"
            ],
            "settings": {
                "preferences": {
                   ...
                }
            },
            "utcOffset": 17,
            "email": "youraddress",
            "statusConnection": "online",
            "active": true,
            "_id": "kF4gNg6u7JJ5pmjJW",
            "emails": [
                {
                    "verified": true,
                    "address": "youraddress"
                }
            ]
        },
        "userId": "kF4gNg6u7JJ5pmjJW"
    }
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Added `me` property to response |
| 0.60.0 | Added |
