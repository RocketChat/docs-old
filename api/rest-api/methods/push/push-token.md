# Post

Save new push token on the server.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/push.token` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | `id` | Optional | A record id for the Application/Token document to update. If this does not exist, will return 404. |
| `type` | `gcm` | Required | Can be `apn` or `gcm` |
| `value` | `TOKEN` | Required | The Token |
| `appName` | `com.example.rocketchat` | Required | The name of the application to associate the token with |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/push.token \
     -d '{"type": "gcm", "value": "TOKEN", "appName": "MyApp"}'
```

## Example Result

```javascript
{
    "result": {
        "token": {
            "gcm": "TOKEN"
        },
        "appName": "RocketAPP",
        "userId": "52d5Rw8LT3TeDa59Z",
        "enabled": true,
        "createdAt": "2018-09-11T18:22:55.006Z",
        "updatedAt": "2018-09-11T18:22:55.006Z",
        "_id": "DMMjKG2hFoLvM2hk7"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.60.0 | Added. |

