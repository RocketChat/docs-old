# Login

| URL             | Requires Auth | HTTP Method |
| :-------------- | :------------ | :---------- |
| `/api/v1/login` | `no`          | `POST`      |

## Payload

| Argument   | Example            | Required | Description   |
| :--------- | :----------------- | :------- | :------------ |
| `username` | `myusername`       | Required | Your username |
| `password` | `my$up3erP@ssw0rd` | Required | Your password |

- Notes:
- **You will need to provide the `authToken` and `userId` for any of the authenticated methods.**

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
