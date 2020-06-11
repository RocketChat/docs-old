# Group Members

Lists the users of participants of a private group. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

Requires `view-broadcast-member-list` if room is a broadcast.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.members` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId`    `roomName` | `ByehQjC44FwMeiLbX`    `user` | Required | The room id.    The room name. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/groups.members?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
    "members": [
        {
            "_id": "Q4GkX6RMepGDdQ7YJ",
            "status": "online",
            "name": "Marcos Defendi",
            "utcOffset": -3,
            "username": "marcos.defendi"
        },
        {
            "_id": "rocket.cat",
            "name": "Rocket.Cat",
            "username": "rocket.cat",
            "status": "online",
            "utcOffset": 0
        }
    ],
    "count": 2,
    "offset": 0,
    "total": 2,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.59.0 | Added |

