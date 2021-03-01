# History

Retrieves the messages from a direct message.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/im.history` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The direct message id |
| `latest` | `2016-09-30T13:42:25.304Z` | Optional   Default: now | The end of time range of messages to retrieve |
| `oldest` | `2016-05-30T13:42:25.304Z` | Optional   Default: _n/a_ | The start of the time range of messages to retrieve |
| `inclusive` | `true` | Optional   Default: `false` | Whether messages which land on latest and oldest should be included |
| `offset` | `10` | Optional   Default: `0` | The offset of the list messages to retrieve |
| `count` | `100` | Optional   Default: `20` | The amount of messages to retrieve |
| `unreads` | `false` | Optional   Default: `false` | Whether the amount of unreads should be included. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/im.history?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
  "messages": [
    {
      "_id": "AkzpHAvZpdnuchw2a",
      "rid": "ByehQjC44FwMeiLbX",
      "msg": "hi",
      "ts": "2016-12-09T12:50:51.555Z",
      "u": {
        "_id": "y65tAmHs93aDChMWu",
        "username": "testing"
      },
      "_updatedAt": "2016-12-09T12:50:51.562Z"
    },
    {
      "_id": "vkLMxcctR4MuTxreF",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2016-12-08T15:41:37.730Z",
      "msg": "testing2",
      "u": {
        "_id": "bRtgdhzM6PD9F8pSx",
        "username": "testing2"
      },
      "groupable": false,
      "_updatedAt": "2016-12-08T16:03:25.235Z"
    },
    {
      "_id": "bfRW658nEyEBg75rc",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2016-12-07T15:47:49.099Z",
      "msg": "testing",
      "u": {
        "_id": "nSYqWzZ4GsKTX4dyK",
        "username": "testing1"
      },
      "groupable": false,
      "_updatedAt": "2016-12-07T15:47:49.099Z"
    },
    {
      "_id": "pbuFiGadhRZTKouhB",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2016-12-06T17:57:38.635Z",
      "msg": "testing",
      "u": {
        "_id": "y65tAmHs93aDChMWu",
        "username": "testing"
      },
      "groupable": false,
      "_updatedAt": "2016-12-06T17:57:38.635Z"
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.75.0 | Added `offset` property |
| 0.48.0 | Added |

