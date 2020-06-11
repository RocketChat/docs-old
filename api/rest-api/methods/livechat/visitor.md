# Visitors

Retrieve a visitor data

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/visitor/:token` | `no` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`. |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/visitor/iNKE8a6k6cjbqWhWd
```

## Example Result

```javascript
{
  "visitor": {
    "_id": "sGtcfEYz852uguxaS",
    "username": "guest-7",
    "_updatedAt": "2018-09-21T14:10:56.529Z",
    "token": "iNKE8a6k6cjbqWhWd",
    "phone": [
      {
        "phoneNumber": "55 51 5555-5555"
      }
    ],
    "visitorEmails": [
      {
        "address": "visitor@rocket.chat"
      }
    ],
    "name": "Livechat Visitor",
    "livechatData": {
      "address": "Rocket.Chat street"
    }
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## Register a new Livechat visitor

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/visitor` | `no` | `POST` |

## Example payload

```javascript
{
  "visitor": {
    "name": "Livechat Visitor",
    "email": "visitor@rocket.chat",
    "token": "iNKE8a6k6cjbqWhWd",
    "phone": "55 51 5555-5555",
    "customFields": [{
      "key": "address",
      "value": "Rocket.Chat street",
      "overwrite": true
    }]
  }
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/visitor \
    -d '{"visitor": {"name": "Livechat Visitor", "email": "visitor@rocket.chat", "token": "iNKE8a6k6cjbqWhWd", "phone": "55 51 5555-5555", "customFields": [{ "key": "address", "value": "Rocket.Chat street", "overwrite": true }] }'
```

## Example Result

```javascript
{
  "visitor": {
    "_id": "sGtcfEYz852uguxaS",
    "username": "guest-7",
    "_updatedAt": "2018-09-21T16:12:32.808Z",
    "token": "iNKE8a6k6cjbqWhWd",
    "phone": [
      {
        "phoneNumber": "55 51 5555-5555"
      }
    ],
    "visitorEmails": [
      {
        "address": "visitor@rocket.chat"
      }
    ],
    "name": "Livechat Visitor",
    "livechatData": {
      "address": "Rocket.Chat street"
    }
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## Send Visitor navigation history

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/page.visited` | `no` | `POST` |

## Example payload

```javascript
{
  "token": "iNKE8a6k6cjbqWhWd",
  "rid": "vp3D9H8ud6HYvRpvq",
  "pageInfo": {
    "change": "url",
    "title": "",
    "location": {
      "href": "http://localhost:3000/packages/rocketchat_livechat/assets/demo.html#page-4"
    }
  }
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/page.visited \
     -d '{"token": "iNKE8a6k6cjbqWhWd", "rid": "vp3D9H8ud6HYvRpvq", "pageInfo": { "change": "url", "title": "", "location": { "href": "http://localhost:3000/packages/rocketchat_livechat/assets/demo.html#page-4" } }}'
```

## Example Result

```javascript
{
  "page": {
    "msg": " - http://localhost:3000/packages/rocketchat_livechat/assets/demo.html#page-4",
    "navigation": {
      "page": {
        "change": "url",
        "title": "",
        "location": {
          "href": "http://localhost:3000/packages/rocketchat_livechat/assets/demo.html#page-4"
        }
      },
      "token": "iNKE8a6k6cjbqWhWd"
    }
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## Get the visitor info

Retrieve the visitor info

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/visitors.info` | `yes` | `GET` |

## Query Parameter

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `visitorId` | `iNKE8a6k6cjbqWhWd` | Required | The visitor's id. |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/visitors.info?visitorId=iNKE8a6k6cjbqWhWd
```

## Example Result

```javascript
{
    "visitor": {
        "_id": "L64iXAKtGaPfusnem",
        "username": "guest-4",
        "_updatedAt": "2019-10-21T19:36:47.960Z",
        "token": "hzf48867bv9lwjzigk2tk"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.3.0 | Added |

## Get the visitor navigation history

Retrieve the visitor navigation history

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/visitors.pagesVisited` | `yes` | `GET` |

## Query Parameter

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `iNKE8a6k6cjbqWhWd` | Required | The room's id. |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/visitors.pagesVisited?roomId=iNKE8a6k6cjbqWhWd
```

## Example Result

```javascript
{
    "pages": [
        {
            "_id": "7sixPtdqiCcfSRrWJ",
            "t": "livechat_navigation_history",
            "rid": "wBCg9ZgXT7Mvqz5Xu",
            "ts": "2019-10-21T19:51:22.298Z",
            "msg": "App test - http://localhost:8601/",
            "u": {
                "_id": "rocket.cat",
                "username": "rocket.cat"
            },
            "groupable": false,
            "navigation": {
                "page": {
                    "change": "url",
                    "title": "Test",
                    "location": {
                        "href": "http://localhost:8601/"
                    }
                },
                "token": "9vcfr6wb3sllv5t14d9x3"
            },
            "_hidden": true,
            "_updatedAt": "2019-10-21T19:51:22.298Z"
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.3.0 | Added |

## Get the visitor chat history

Retrieve the visitor chat history. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/visitors.chatHistory/room/room-id/visitor/visitor-id` | `yes` | `GET` |

## Query Parameter

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `iNKE8a6k6cjbqWhWd` | Required | The room's id. |
| `visitorId` | `iNKE8a6k6cjbqWhWd` | Required | The visitor's id. |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/visitors.chatHistory/room/room-id/visitor/visitor-id
```

## Example Result

```javascript
{
  "history": [
    {
      "_id": "Yjc62ZSoWiHB8Q6xr",
      "msgs": 1,
      "usersCount": 2,
      "lm": "2019-12-09T20:30:32.058Z",
      "fname": "Visitor 1575554334960",
      "t": "l",
      "ts": "2019-12-09T20:30:32.058Z",
      "v": {
        "_id": "sAvPE8bjCJP5YwPnN",
        "username": "guest-2",
        "token": "iNKE8a6k6cjbqWhWd",
        "status": "online"
      },
      "cl": false,
      "open": true,
      "waitingResponse": true,
      "_updatedAt": "2019-12-09T20:30:32.808Z",
      "servedBy": {
        "_id": "w6YjbdZHjghjfNBAg",
        "username": "marcos.defendi",
        "ts": "2019-12-09T20:30:32.166Z"
      }
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 14,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

