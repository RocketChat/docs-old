# Group Info

Retrieves the information about the private group, only if you're part of the group.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.info` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required (if no roomName) | The private group's id |
| `roomName` | `Exclusive.Chat` | Required (if no roomId) | The private group's name |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/groups.info?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```json
{
  "group": {
    "_id": "ByehQjC44FwMeiLbX",
    "ts": "2016-11-30T21:23:04.737Z",
    "t": "p",
    "name": "testing",
    "usernames": [
      "testing",
      "testing1"
    ],
    "u": {
        "_id": "aobEdbYhXfu5hkeqG",
        "username": "testing1"
    },
    "msgs": 1,
    "default": true,
    "_updatedAt": "2016-12-09T12:50:51.575Z",
    "lm": "2016-12-09T12:50:51.555Z"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.48.0 | Added |
