# oAuth

A simple method, requires no authentication, that returns list of all available oauth services.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/settings.oauth` | `no` | `GET` |

## Example Call

```bash
curl http://localhost:3000/api/v1/settings.oauth
```

## Example Result

```javascript
{
    "services": [
        {
            "_id": "iJeY7x4wxnh2p3pLr",
            "name": "facebook",
            "clientId": "test",
            "buttonLabelText": "test",
            "buttonColor": "#13679A",
            "buttonLabelColor": "#FFFFFF",
            "custom": false
        },
        {
            "_id": "iJeY7x4wxnh2p3pLr",
            "name": "twitter",
            "clientId": "test",
            "buttonLabelText": "",
            "buttonColor": "",
            "buttonLabelColor": "",
            "custom": false
        },
        {
             "_id": "5RQ4SBL3NuZKsqxaF",
             "service": "test",
             "clientId": "test",
             "custom": true,
             "serverURL": "/test/test",
             "tokenPath": "/oauth/token",
             "identityPath": "/me",
             "authorizePath": "/oauth/authorize",
             "scope": "openid",
             "buttonLabelText": "test",
             "buttonLabelColor": "#FFFFFF",
             "loginStyle": "popup",
             "buttonColor": "#13679A",
             "tokenSentVia": "payload",
             "identityTokenSentVia": "default",
             "usernameField": "dfsgdfgdfgdfgsd",
             "mergeUsers": true
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Renamed field `appId` to `clientId` and added flag `custom` to indicate whether the oauth service is customized and fix `id` inconsistence\(set all cases to `_id`\) |
| 0.63.0 | Added |

