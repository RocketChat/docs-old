# Channel Members List

Lists all channel users. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.members` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required \(if no roomName\) | The channel's id |
| `roomName` | `general` | Required \(if no roomId\) | The channel's name |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/channels.members?roomId=ByehQjC44FwMeiLbX&count=2
```

## Example Result

```javascript
{
    "members": [
        {
            "_id": "Loz7qh9ChSqHMPymx",
            "username": "customField_apiuser.test.1529436896005",
            "name": "customField_apiuser.test.1529436896005",
            "status": "offline"
        },
        {
            "_id": "Zc3Y3cRW7ZtS7Y8Hk",
            "username": "customField_apiuser.test.1529436997563",
            "name": "customField_apiuser.test.1529436997563",
            "status": "offline"
        }
    ],
    "count": 2,
    "offset": 0,
    "total": 35,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.59.0 | Added |

