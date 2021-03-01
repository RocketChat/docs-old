---
description: Chat Message Delete
---

# Delete

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.delete` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The room id of where the message is to delete. |
| `msgId` | `7aDSXtjMA3KPLxLjt` | Required | The message id to delete. |
| `asUser` | `true` | Optional   Default: `false` | Whether the message should be deleted as the user who sent it. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.delete \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "msgId": "7aDSXtjMA3KPLxLjt", "asUser": true }'
```

## Example Result

```javascript
{
  "_id": "7aDSXtjMA3KPLxLjt",
  "ts": 1481741940895,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.48.0 | Added |

