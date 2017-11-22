# User Create Token

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.createToken` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` or `username` | `BsNr28znDkG8aeo7W` | Required | The id or username of the user. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.createToken \
     -d '{ "userId": "BsNr28znDkG8aeo7W" }'
```

## Example Result

```json
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
| 0.56.0 | Added |
