---
description: REST API Favorite Methods
---

# Favorite

Favorite or unfavorite room.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/rooms.favorite` | `yes` | `POST` |

## Payload

\| `roomId` \| `GENERAL` \| Required \| Room Id where to favorite or unfavorite. \| \| `roomName` \| `general` \| Optional \| Room Name where to favorite or unfavorite. \| \| `favorite` \| `true/false` \| Required \| The value to favorite\(true\)/unfavorite\(false\) room. \|

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-Type: application/json" \
     http://localhost:3000/api/v1/rooms.favorite  \
     -d '{ "roomId": "GENERAL", "favorite": true }'
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
| 0.64.0 | Added |

