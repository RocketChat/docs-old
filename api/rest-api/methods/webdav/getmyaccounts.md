# Get My Accounts

Retrieves the user's webdav accounts.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/webdav.getMyAccounts` | `yes` | `GET` |

## Example call to get all the roles

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/webdav.getMyAccounts
```

## Example Result

```javascript
{
  "accounts": [
    {
      "_id": "P3Gru7ocFCd4vpKEs",
      "server_url": "http://localhost:8080/remote.php/webdav/",
      "username": "admin",
      "name": "Webdav account"
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

