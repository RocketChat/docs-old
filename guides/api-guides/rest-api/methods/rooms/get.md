---
description: REST API Get Methods
---

# Get

Get all opened rooms \(all joined public & private channels and all DMs\) for this user.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/rooms.get` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `updatedSince` | `2017-11-25T15:08:17.248Z` | Optional | Date as ISO string |

When you provide the `updatedSince` query parameter in the URL then the `update` and `remove` in the response will contain only those updated and removed since this date and time.

## Example Call to get all of the rooms

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/rooms.get
```

## Example Result

```javascript
{
   "update": [
      {
         "_id": "GENERAL",
         "name": "general",
         "t": "c",
         "_updatedAt": "2018-01-21T21:03:43.736Z",
         "default": true
      },
      {
         "_id": "3WpJQkDHhrWPBvXuWhw5DThnhQmxDWnavu",
         "t": "d",
         "_updatedAt": "2018-01-21T21:07:16.123Z"
      },
      {
         "_id": "hw5DThnhQmxDWnavurocket.cat",
         "t": "d",
         "_updatedAt": "2018-01-21T21:07:18.510Z"
      },
      {
         "_id": "hw5DThnhQmxDWnavuhw5DThnhQmxDWnavu",
         "t": "d",
         "_updatedAt": "2018-01-21T21:07:20.324Z"
      },
      {
         "_id": "EAemRsye7khfr9Stt",
         "name": "123",
         "fname": "123",
         "t": "p",
         "u":          {
            "_id": "hw5DThnhQmxDWnavu",
            "username": "user2"
         },
         "_updatedAt": "2018-01-24T21:02:04.318Z",
         "customFields": {},
         "ro": false
      }
   ],
   "remove": [],
   "success": true
}
```

## Example Call to get the rooms which have changed after the provided date

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/rooms.get?updatedSince=2018-01-26T00:11:22.345Z
```

## Example Result

```javascript
{
   "update": [
      {
         "_id": "GENERAL",
         "name": "general",
         "t": "c",
         "_updatedAt": "2018-01-27T16:14:15.379Z",
         "default": true
      }
   ],
   "remove": [],
   "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.62.0 | Added |

