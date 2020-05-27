# Group Create

Creates a new private group, optionally including specified users. The group creator is always included.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.create` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | `testing` | Required | The name of the new private group |
| `members` | `["rocket.cat"]` | Optional   Default: `[]` | The users to add to the group when it is created. |
| `readOnly` | `true` | Optional   Default: `false` | Set if the group is read only or not. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/groups.create \
     -d '{ "name": "testing" }'
```

## Example Result

```javascript
{
  "group": {
    "_id": "NtR6RQ7NvzA9ejecX",
    "name": "testing",
    "t": "p",
    "usernames": [
      "tester"
    ],
    "msgs": 0,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "tester"
    },
    "ts": "2016-12-09T16:53:06.761Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2016-12-09T16:53:06.761Z"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.35.0 | Added |

