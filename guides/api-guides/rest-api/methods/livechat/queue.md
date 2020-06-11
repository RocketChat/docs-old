# Queue

## List queued chats

Get the queued chats. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/queue` | `yes` | `GET` |

## Query params

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `includeOfflineAgents` | `true` | Optional | Whether include offline agents or not. |
| `agentId` | `aobEdbYhXfu5dsd9` | Optional | The agent's id. |
| `departmentId` | `3n2kj3n2j3fu5hkeqG` | Optional | The department's id. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/queue?includeOfflineAgents=true
```

## Example Result

```javascript
{
    "queue": [
    {
      "chats": 1,
      "user": {
        "_id": "CaevAPDbXN252kyXa",
        "username": "marcos.defendi",
        "status": "online"
      },
      "department": {
        "_id": "457diLwcQMmdpaTjo",
        "name": "Department 1"
      }
    },
    {
      "chats": 2,
      "user": {
        "_id": "CaevAPDbXN252kyXa",
        "username": "marcos.defendi",
        "status": "online"
      },
      "department": {
        "_id": "5mt9oEtQxuMMH23Co",
        "name": "Department 2"
      }
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
| 2.4.0 | Added |

