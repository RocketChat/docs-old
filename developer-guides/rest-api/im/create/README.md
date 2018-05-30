# IM Create

Create a direct message session with another user.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/im.create` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `username` | `rocket.cat` | Required | The username to open a direct message session |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/im.create \
     -d '{ "username": "rocket.cat" }'
```

## Example Result

```json
{
    "room": {
        "_id": "Lymsiu4Mn6xjTAan4RtMDEYc28fQ5aHpf4",
        "_updatedAt": "2018-03-26T19:11:50.711Z",
        "t": "d",
        "msgs": 0,
        "ts": "2018-03-26T19:11:50.711Z",
        "meta": {
            "revision": 0,
            "created": 1522094603745,
            "version": 0
        },
        "$loki": 65,
        "usernames": [
            "rocket.cat",
            "user.test"
        ]
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.59.0| Added |
