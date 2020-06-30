# Get Discussions of A Room

Retrieve the discussions of a room. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getDiscussions` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The room id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.getDiscussions?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
  "messages": [
    {
      "_id": "WSxSpajNjbNZDkGmq",
      "t": "discussion-created",
      "rid": "GENERAL",
      "ts": "2019-12-03T17:53:44.600Z",
      "msg": "d",
      "u": {
        "_id": "CaevAPDbXN252kyXa",
        "username": "marcos.defendi"
      },
      "groupable": false,
      "drid": "iQyCSjH2kixh46R7v",
      "attachments": [],
      "_updatedAt": "2019-12-03T17:53:44.600Z"
    },
  ],
  "count": 1,
  "offset": 0,
  "total": 4,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

