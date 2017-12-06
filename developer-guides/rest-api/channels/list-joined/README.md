# Channel List Joined
Lists all of the channels the calling user has joined. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info/) along with just the [Fields Query Parameter](../../query-and-fields-info/).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.list.joined` | `yes` | `GET` |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/channels.list.joined
```

## Example Result
```json
{
    "channels": [
        {
            "_id": "ByehQjC44FwMeiLbX",
            "name": "invite-me",
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
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.49.0 | Count and offset query parameters supported. |
| 0.48.0 | Added |
