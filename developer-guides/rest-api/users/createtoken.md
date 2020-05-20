# Create Token

**IMPORTANT** To be able to use this endpoint you must set the ENV VAR \(CREATE\_TOKENS\_FOR\_USERS=true\).

Create a user authentication token. This is the same type of session token a user would get via login and will expire the same way. Requires `user-generate-access-token` permission.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.createToken` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` or `username` | `BsNr28znDkG8aeo7W` | Required | The id or username of the user. |

## Example Call - Via userId

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.createToken \
     -d '{ "userId": "BsNr28znDkG8aeo7W" }'
```

## Example Result

```javascript
{
  "data": {
    "userId": "BsNr28znDkG8aeo7W",
    "authToken": "2jdk99wuSjXPO201XlAks9sjDjAhSJmskAKW301mSuj9Sk",
  },
  "success": true
}
```

## Example Call - Via username

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.createToken \
     -d '{ "username": "test" }'
```

## Example Result

```javascript
{
  "data": {
    "userId": "BsNr28znDkG8aeo7W",
    "authToken": "2jdk99wuSjXPO201XlAks9sjDjAhSJmskAKW301mSuj9Sk",
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.1.0 | Added ENV VAR to be able to use this endpoint \(process.env.CREATE\_TOKENS\_FOR\_USERS\). |
| 0.56.0 | Added |

