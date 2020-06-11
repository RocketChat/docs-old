---
description: REST API Create Discussion Methods
---

# Create Discussion

Creates a new discussion for room. It requires at least one of the following permissions: `start-discussion` OR `start-discussion-other-user`, AND must be with the following setting enabled: `Discussion_enabled`.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/rooms.createDiscussion` | `yes` | `POST` |

## Payload

\| `prid` \| `GENERAL` \| Required \| Parent room id of the discussion. \| \| `t_name` \| `discussion name` \| Required \| Discussion name. \| \| `users` \| `['rocket.cat']` \| Optional\| Array of users to join in the discussion, if not provide will be an empry array\(Note: if provided, it must be an array\). \| \| `pmid` \| `aobEgbghXfe543keqG` \| Optional \| Parent message id\(if the discussion comes from a message\). \| \| `reply` \| `reply of this discussion` \| Optional \| The reply of the discussion. \|

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-Type: application/json" \
     http://localhost:3000/api/v1/rooms.createDiscussion  \
     -d '{ "prid": "GENERAL", "t_name": "Discussion Name"}'
```

## Example Result

```javascript
{
    "discussion": {
        "rid": "cgk88DHLHexwMaFWh",
        "name": "WJNEAM7W45wRYitHo",
        "fname": "Discussion Name",
        "t": "p",
        "msgs": 0,
        "usersCount": 0,
        "u": {
            "_id": "rocketchat.internal.admin.test",
            "username": "rocketchat.internal.admin.test"
        },
        "topic": "general",
        "prid": "GENERAL",
        "ts": "2019-04-03T01:35:32.271Z",
        "ro": false,
        "sysMes": true,
        "default": false,
        "_updatedAt": "2019-04-03T01:35:32.280Z",
        "_id": "cgk88DHLHexwMaFWh"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.0.0 | Added |

