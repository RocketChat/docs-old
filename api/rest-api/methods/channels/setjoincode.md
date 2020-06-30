# Channel Set Join Code

Sets the code required to join the channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.setJoinCode` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |
| `joinCode` | `my-join-code` | Required | The join code which this channel will require to be joined. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.setJoinCode \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "joinCode": "my-join-code" }'
```

## Example Result

```javascript
{
    "channel": {
        "_id": "ByehQjC44FwMeiLbX",
        "name": "testing0",
        "t": "c",
        "msgs": 0,
        "u": {
            "_id": "aiPqNoGkjpNDiRx6d",
            "username": "goose160"
        },
        "ts": "2017-01-05T18:02:50.754Z",
        "ro": false,
        "sysMes": true,
        "_updatedAt": "2017-01-05T18:41:48.840Z",
        "usernames": [
            "goose160",
            "graywolf336"
        ],
        "joinCodeRequired": true
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.49.0 | Added |

