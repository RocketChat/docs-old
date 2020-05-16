# Group Set Purpose

Sets the description for the private group \(the same as groups.setDescription, obsolete\).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.setPurpose` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The private group's id |
| `purpose` | `Test out everything.` | Required | The description to set for the private group. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/groups.setPurpose \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "purpose": "Test out everything" }'
```

## Example Result

```javascript
{
  "purpose": "Testing out everything.",
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.48.0 | Added |

