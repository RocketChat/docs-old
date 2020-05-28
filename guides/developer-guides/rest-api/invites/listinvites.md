# List Invites

Lists all of the invites on the server. Requires the `create-invite-links` permission.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/listInvites` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/listInvites
```

## Example Result

```javascript
[
  {
    "_id": "kDKQ3H",
    "days": 1,
    "maxUses": 1,
    "rid": "s7CE842q9WtvLctD7",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2019-12-20T03:31:56.774Z",
    "expires": "2019-12-21T03:31:56.774Z",
    "uses": 1,
    "_updatedAt": "2019-12-20T03:33:40.065Z"
  },
  {
    "_id": "99ScEP",
    "days": 1,
    "maxUses": 0,
    "rid": "s7CE842q9WtvLctD7",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2019-12-20T03:38:20.485Z",
    "expires": "2019-12-21T03:38:20.485Z",
    "uses": 0,
    "_updatedAt": "2019-12-20T03:38:20.485Z"
  },
  {
    "_id": "Y5JKM4",
    "days": 0,
    "maxUses": 1,
    "rid": "s7CE842q9WtvLctD7",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2019-12-20T03:38:25.313Z",
    "expires": null,
    "uses": 1,
    "_updatedAt": "2019-12-20T03:38:40.116Z"
  }
]
```

