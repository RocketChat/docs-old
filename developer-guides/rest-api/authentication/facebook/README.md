# Login with Facebook

| URL             | Requires Auth | HTTP Method |
| :-------------- | :------------ | :---------- |
| `/api/v1/login` | `no`          | `POST`      |

## Payload

| Argument      | Example                         | Required | Description                               |
| :---------    | :------------------------------ | :------- | :---------------------------------------- |
| `serviceName` | `facebook`                      | Required | The desired OAuth service name            |
| `accessToken` | `hash`                          | Required | Access token provided by facebook oauth   |
| `secret`      | `hash`                          | Required | The secret provided by facebook for app   |
| `expiresIn`   | `200`                           | Required | Lifetime of token(in seconds)             |
| `identity`    | `{id: '1', name: 'rocket.cat'}` | Optional | Facebook user identity                    |

## Example Call - As JSON

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/login \
      -d '{ "serviceName": "facebook", "accessToken": "hash",
      "secret": "hash", "expiresIn": 200 }'
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
| 0.63.0 | Added |
