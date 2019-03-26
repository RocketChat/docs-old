# Rooms Info

Retrieves the information about the room. It supports [Fields Query Parameters](../../query-and-fields-info/) **only**.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/rooms.info` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required (if no roomName) | The rooms's id |
| `roomName` | `general` | Required (if no roomId) | The rooms's name |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/rooms.info?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```json
{
  "room": {
    "_id": "ByehQjC44FwMeiLbX",
    "ts": "2016-11-30T21:23:04.737Z",
    "t": "c",
    "name": "testing",
    "usernames": [
      "testing",
      "testing1",
      "testing2"
    ],
    "msgs": 1,
    "default": true,
    "_updatedAt": "2016-12-09T12:50:51.575Z",
    "lm": "2016-12-09T12:50:51.555Z"
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

```json
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
