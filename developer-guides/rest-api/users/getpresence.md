# Get Presence

Gets a user's presence if the query string `userId` or `username` is provided, otherwise it gets the callee's.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.getPresence` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` or `username` | `BsNr28znDkG8aeo7W` | Optional | The id or username of the user. If not provided, the auth user is updated. |

## Other Users Example Call - Via userId

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.getPresence?userId=BsNr28znDkG8aeo7W
```

## Example Result

```javascript
{
  "presence": "offline",
  "success": true
}
```

## Other Users Example Call - Via username

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.getPresence?username=test
```

## Example Result

```javascript
{
  "presence": "offline",
  "success": true
}
```

## Self Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.getPresence
```

## Example Result

```javascript
{
  "presence": "offline",
  "connectionStatus": "offline",
  "lastLogin": "2016-12-08T18:26:03.612Z",
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.49.0 | Updated to support `userId` or `username` |
| 0.48.0 | Renamed to `users.getPresence` |
| 0.35.0 | Added as `user.getPresence` |

