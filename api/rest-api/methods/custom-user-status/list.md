# Custom User Status List

Lists all available custom user's status.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/custom-user-status.list` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/custom-user-status.list
```

## Example Result

```javascript
{
  "statuses": [
    {
      "_id": "oGxJ2irQcPkgFLGef",
      "name": "status 1",
      "statusType": "busy",
      "_updatedAt": "2019-12-09T20:26:06.477Z"
    },
    {
      "_id": "d3TjnQgKWttgaW9Hh",
      "name": "status 2",
      "statusType": "online",
      "_updatedAt": "2019-12-09T20:25:10.884Z"
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 4,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

