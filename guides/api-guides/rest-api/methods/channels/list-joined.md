# Channel List Joined

Lists all of the channels the calling user has joined. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with just the [Fields Query Parameter](../../query-and-fields-info.md).

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

```javascript
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

## Query Example Call

This example shows a list of Direct Messages' Rooms filtered by "customFields.field1" ended with "5" using a regular expression.

```bash
curl -H "X-Auth-Token: OKoJelLu8rYtbyc3c5YtTwxIE-UvT1FzWv9cdq1XPI1" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     http://localhost:3000/api/v1/channels.list.joined?query=%7B%20%22name%22%3A%20%7B%20%22%24regex%22%3A%20%22al%24%22%20%7D%20%7D
```

## Query Example Result

```javascript
{
    "channels": [
        {
            "_id": "GENERAL",
            "ts": "2018-01-21T20:58:41.142Z",
            "t": "c",
            "name": "general",
            "msgs": 1,
            "default": true,
            "_updatedAt": "2018-01-21T21:03:43.736Z",
            "username": "user2"
        }
    ],
    "offset": 0,
    "count": 1,
    "total": 1,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.62.0 | Add 'query' parameter support. |
| 0.49.0 | Count and offset query parameters supported. |
| 0.48.0 | Added |

