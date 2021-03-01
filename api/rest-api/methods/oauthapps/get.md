# Get

Retrieves an OAuth App by id or client id

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/oauth-apps.get` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `appId` | `jn32kjnnd0943j4njk` | Required \(if the `clientId` is not sent\) | The app's id. |
| `clientId` | `nkn8jk67b8b99b78` | Required \(if the `appId` is not sent\) | The client's id. |

## Example

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/oauth-apps.get?appId=jn32kjnnd0943j4njk
```

## Example Result

```javascript
{
  "oauthApp": {
    "_id": "zapier",
    "name": "Zapier",
    "active": true,
    "clientId": "zapier",
    "clientSecret": "RTK6TlndaCIolhQhZ7_KHIGOKj41RnlaOq_o-7JKwLr",
    "redirectUri": "https://zapier.com/dashboard/auth/oauth/return/RocketChatDevAPI/",
    "_createdAt": "2019-10-17T22:55:32.787Z",
    "_createdBy": {
      "_id": "system",
      "username": "system"
    },
    "_updatedAt": "2019-10-17T22:55:32.787Z"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

