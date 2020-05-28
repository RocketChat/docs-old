# Login with Twitter

Authenticate with Twitter.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/login` | `no` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `serviceName` | `twitter` | Required | The desired OAuth service name |
| `accessToken` | `hash` | Required | Access token provided by twitter oauth |
| `accessTokenSecret` | `hash` | Required | Access token secret provided by twitter oauth |
| `appSecret` | `hash` | Required | The secret provided by twitter for app |
| `appId` | `hash` | Required | The id provided by twitter for app |
| `expiresIn` | `200` | Required | Lifetime of token\(in seconds\) |

## Example Call - As JSON

```bash
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/login \
      -d '{ "serviceName": "twitter", "accessToken": "hash", accessTokenSecret: "hash",
      "appSecret": "hash", "appId": "hash", "expiresIn": 200}'
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
| 0.63.0 | Added |

