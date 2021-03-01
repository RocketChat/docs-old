---
description: REST API Admin Rooms Methods
---

# Admin Rooms

Retrieves all rooms \(requires the `view-room-administration` permission\). It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/rooms.adminRooms` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `types` | `['c']` | Optional \(must be an array\) | The rooms types |
| `filter` | `general` | Optional | The rooms's name |

## Example

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/rooms.adminRooms?types[]=c&types[]=p&filter=GENERAL
```

## Example Result

```javascript
{
  "rooms": [
    {
      "_id": "GENERAL",
      "t": "c",
      "name": "general",
      "usernames": [],
      "msgs": 98,
      "usersCount": 38,
      "default": true
    },
  ],
  "count": 1,
  "offset": 0,
  "total": 88,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

