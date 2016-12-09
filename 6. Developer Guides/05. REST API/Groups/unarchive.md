---
order: 75
---

# Group Unarchive 
Unarchives a private group.

| URL | Requires Auth | HTTP Method |
| --- | --- | --- | --- |
| `/api/v1/groups.unarchive` | `yes` | `post` |

## Parameters
| Argument | Example | Required | Description |
| -------- | ------- | -------- | ----------- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The private group's id |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/groups.unarchive \
     -d '{ "roomId": "ByehQjC44FwMeiLbX" }'
```

## Example Result
```json
{
   "success": true
}
```
