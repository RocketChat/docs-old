# Channel Info

Retrieves the information about the channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.info` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required \(if no roomName\) | The channel's id |
| `roomName` | `general` | Required \(if no roomId\) | The channel's name |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/channels.info?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "testing",
    "fname": "testing",
    "t": "c",
    "msgs": 0,
    "usersCount": 2,
    "u": {
      "_id": "HKKPmF8rZh45GMHWH",
      "username": "marcos.defendi"
    },
    "customFields": {},
    "broadcast": false,
    "encrypted": false,
    "ts": "2020-05-21T13:14:07.070Z",
    "ro": false,
    "default": false,
    "sysMes": true,
    "_updatedAt": "2020-05-21T13:14:07.096Z"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.48.0 | Added |

