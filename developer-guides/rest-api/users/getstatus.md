# Get Status

Gets a user's Status if the query string `userId` or `username` is provided, otherwise it gets the callee's.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.getStatus` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` or `username` | `BsNr28znDkG8aeo7W` | Optional | The id or username of the user. If not provided, the auth user is used. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.getStatus?userId=BsNr28znDkG8aeo7W
```

## Example Result

```javascript
{
    "message": "My status update",
    "connectionStatus": "online",
    "status": "away",
    "success": true
}
```

## Self Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.getStatus
```

## Example Result

```javascript
{
    "message": "Latest status",
    "connectionStatus": "online",
    "status": "online",
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.2.0 | Added |

