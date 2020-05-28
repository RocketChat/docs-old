# Channel Join

Joins yourself to the channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.join` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |
| `joinCode` | `1234` | Required | The join code of the room |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.join \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "joinCode": "1234" }'
```

## Example Result

```javascript
{
    "channel": {
        "_id": "nxXKHF2o2nzKYtFMM",
        "name": "test",
        "fname": "test",
        "t": "c",
        "msgs": 8,
        "usersCount": 2,
        "u": {
            "_id": "rocketchat.internal.admin.test",
            "username": "rocketchat.internal.admin.test"
        },
        "customFields": {},
        "broadcast": false,
        "encrypted": false,
        "ts": "2019-01-16T12:00:04.783Z",
        "ro": false,
        "sysMes": true,
        "default": false,
        "_updatedAt": "2019-01-16T12:06:30.426Z",
        "joinCodeRequired": true
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.49.0 | Added |

