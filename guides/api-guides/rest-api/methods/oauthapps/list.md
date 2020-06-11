# List

Retrieves all OAuth Apss

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/oauth-apps.list` | `yes` | `GET` |

## Example

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/oauth-apps.list
```

## Example Result

```javascript
{
  "oauthApps": [
    {
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
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

