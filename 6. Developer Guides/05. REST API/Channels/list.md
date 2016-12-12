---
order: 50
---

# Channel List
Lists all of the channels on the server.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.list` | `yes` | `get` |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/channels.list
```

## Example Result
```json
{
    "channels": [
        {
            "_id": "ByehQjC44FwMeiLbX",
            "name": "test-test",
            "t": "c",
            "usernames": [
                "testing1"
            ],
            "msgs": 0,
            "u": {
                "_id": "aobEdbYhXfu5hkeqG",
                "username": "testing1"
            },
            "ts": "2016-12-09T15:08:58.042Z",
            "ro": false,
            "sysMes": true,
            "_updatedAt": "2016-12-09T15:22:40.656Z"
        },
        {
            "_id": "t7qapfhZjANMRAi5w",
            "name": "testing",
            "t": "c",
            "usernames": [
                "testing2"
            ],
            "msgs": 0,
            "u": {
                "_id": "y65tAmHs93aDChMWu",
                "username": "testing2"
            },
            "ts": "2016-12-01T15:08:58.042Z",
            "ro": false,
            "sysMes": true,
            "_updatedAt": "2016-12-09T15:22:40.656Z"
        }
    ],
    "success": true
}
```
