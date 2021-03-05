# Create

Create a direct message session with another user.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/im.create` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `username` | `rocket.cat` |  | The username to open a direct message session, required if `usernames` is not provided |
| `usernames` | `rocket.cat, anotheruser` |  | List of usernames to open a multiple direct message session, required if `username` is not provided |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/im.create \
     -d '{ "username": "rocket.cat" }'
```

## Example Result

```javascript
{
    "room": {
          "t": "d",
          "rid": "PMrDaS4axRqkjY7errocket.cat",
          "usernames": [
               "g1",
               "rocket.cat"
          ]
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.59.0 | Added |
| 3.1.0 | Added usernames fields |

