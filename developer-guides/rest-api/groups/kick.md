# Group Kick

Removes a user from the private group.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.kick` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The private group's id |
| `userId` | `nSYqWzZ4GsKTX4dyK` | Required | The user id of who to invite |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/groups.kick \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "userId": "nSYqWzZ4GsKTX4dyK" }'
```

## Example Result

```javascript
{
  "group": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "invite-me",
    "t": "p",
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
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.48.0 | Added |

