# Group Archive

Archives a private group, only if you're part of the group.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.archive` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `HyehQjC44FwMeiLbX` | Required | The private groups's id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/groups.archive \
     -d '{ "roomId": "HyehQjC44FwMeiLbX" }'
```

## Example Result

```javascript
{
   "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.48.0 | Added |

