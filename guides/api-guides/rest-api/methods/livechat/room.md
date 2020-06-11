# Room

Get the Livechat room data or open a new room.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/room` | `no` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`. |
| `rid` |  | Optional | The room `_id`. |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/room?token=iNKE8a6k6cjbqWhWd
```

## Example Result

```javascript
{
  "room": {
    "_id": "onrMgdKbpX9Qqtvoi",
    "msgs": 0,
    "usersCount": 1,
    "lm": "2018-09-14T17:36:48.276Z",
    "fname": "Livechat Visitor",
    "t": "l",
    "ts": "2018-09-14T17:36:48.276Z",
    "v": {
      "_id": "YgEoq2djbGdjjZnsL",
      "username": "guest-4",
      "token": "iNKE8a6k6cjbqWhWd",
      "status": "online"
    },
    "servedBy": {
      "_id": "7Gm3PoFCJWTCJ68XR",
      "username": "livechat.agent"
    },
    "cl": false,
    "open": true,
    "waitingResponse": true,
    "jitsiTimeout": "2018-09-14T18:36:48.273Z",
    "_updatedAt": "2018-09-14T17:36:48.276Z"
  },
  "newRoom": true,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## Close Livechat room

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/room.close` | `no` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` | `XFzMqgn33DcsQkpJp` | Required | The room `_id`. |
| `token` | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`. |

## Example payload

```javascript
{
  "rid": "XFzMqgn33DcsQkpJp",
  "token": "iNKE8a6k6cjbqWhWd"
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/room.close \
     -d '{"rid": "XFzMqgn33DcsQkpJp", "token": "iNKE8a6k6cjbqWhWd"}'
```

## Example Result

```javascript
{
  "rid": "XFzMqgn33DcsQkpJp",
  "comment": "Closed by visitor",
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## Transfer Livechat room

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/room.transfer` | `no` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` | `XFzMqgn33DcsQkpJp` | Required | The room `_id`. |
| `token` | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`. |
| `department` | `wXpPLofkffqWAwDNF` | Required | The new `department`. |

## Example payload

```javascript
{
  "rid": "XFzMqgn33DcsQkpJp",
  "token": "iNKE8a6k6cjbqWhWd",
  "department": "wXpPLofkffqWAwDNF"
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/room.transfer \
     -d '{"rid": "XFzMqgn33DcsQkpJp", "token": "iNKE8a6k6cjbqWhWd", "department": "wXpPLofkffqWAwDNF"}'
```

## Example Result

```javascript
{
  "room": {
    "_id": "XFzMqgn33DcsQkpJp",
    "servedBy": {
      "_id": "wiyTfFKXr5GhgRu9A",
      "username": "livechat.agent"
    },
    "open": true,
    "departmentId": "wXpPLofkffqWAwDNF"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## Forward Livechat room

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/room.forward` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `XFzMqgn33DcsQkpJp` | Required | The room `_id`. |
| `userId` | `iNKE8a6k6cjbqWhWd` | Optional | The new `agent ID`. |
| `departmentId` | `wXpPLofkffqWAwDNF` | Optional | The new `department ID`. |

## Example payload

```javascript
{
  "roomId": "XFzMqgn33DcsQkpJp",
  "userId": "iNKE8a6k6cjbqWhWd"
}
```

```javascript
{
  "roomId": "XFzMqgn33DcsQkpJp",
  "departmentId": "wXpPLofkffqWAwDNF"
}
```

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/livechat/room.forward \
     -d '{"roomId": "XFzMqgn33DcsQkpJp", "userId": "iNKE8a6k6cjbqWhWd"}'
```

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/livechat/room.forward \
     -d '{"roomId": "XFzMqgn33DcsQkpJp", "departmentId": "wXpPLofkffqWAwDNF"}'
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
| 0.74.1 | Added |

## Send the Livechat survey

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/room.survey` | `no` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` | `XFzMqgn33DcsQkpJp` | Required | The room `_id`. |
| `token` | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`. |
| `data` | `[{"name": "satisfaction", "value":"3"}]` | Required | The survey `data`. |

## Example payload

```javascript
{
  "rid":"XFzMqgn33DcsQkpJp",
  "token": "iNKE8a6k6cjbqWhWd",
  "data": [
    {
      "name": "satisfaction",
      "value": "3"
    }
  ]
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/room.survey \
     -d '{"rid":"XFzMqgn33DcsQkpJp", "token": "iNKE8a6k6cjbqWhWd", "data": "[{"name": "satisfaction", "value": "3"}]"}'
```

## Example Result

```javascript
{
  "rid": "XFzMqgn33DcsQkpJp",
  "data": {
    "satisfaction": "3",
    "agentResposiveness": "5"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

