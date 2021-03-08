---
description: REST API Rooms Info Methods
---

# Rooms Info

Retrieves the information about the room. It supports [Fields Query Parameters](../../query-and-fields-info.md) **only**.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/rooms.info` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required \(if no roomName\) | The rooms's id |
| `roomName` | `general` | Required \(if no roomId\) | The rooms's name |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/rooms.info?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
  "room": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "testing",
    "fname": "testing",
    "t": "c",
    "msgs": 0,
    "usersCount": 2,
    "u": {
      "_id": "HKKPmF8rZh45GMHWH",
      "username": "marcos.defendi"
    },
    "customFields": {},
    "broadcast": false,
    "encrypted": false,
    "ts": "2020-05-21T13:14:07.070Z",
    "ro": false,
    "default": false,
    "sysMes": true,
    "_updatedAt": "2020-05-21T13:14:07.096Z"
  },
  "success": true
}
```

## Example Call with fields query parameters

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/rooms.info?roomId=ByehQjC44FwMeiLbX&fields={"name": 1}
```

## Example Result

```javascript
{
  "room": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "testing"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.72.0 | Added |

