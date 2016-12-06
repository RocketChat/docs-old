# REST API Authentication
The authentication with the REST API is a two step process.

1. Passing your username and password to the `/api/login`
2. Using the `authToken` and `userId` provided back on every method

## Login Details
| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/login` | `no` | `post` | Object: `{ user, password }` |

* Notes:
 * **You will need to provide the `authToken` and `userId` for any of the authenticated methods.**

### Example Call
```bash
curl http://localhost:3000/api/login \
     -d "user=myusername&password=mypassword"
```

### Result
```json
{
  "status": "success",
  "data": {
      "authToken": "9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq",
      "userId": "aobEdbYhXfu5hkeqG"
   }
}
```

## Logout Details
| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/logout` | `yes` | `get` | _n/a_ |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/logout
```

### Result
```json
{
   "status": "success",
   "data": {
     "message": "You've been logged out!"
   }
}
```