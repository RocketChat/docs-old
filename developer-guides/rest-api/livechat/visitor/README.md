# Dealing with Livechat visitors

Retrieve a visitor data

| URL                               | Requires Auth | HTTP Method |
| :-------------------------------- | :------------ | :---------- |
| `/api/v1/livechat/visitor/:token` | `no`          | `GET`       |

## Payload

| Argument | Example             | Required | Description           |
| :------- | :------------------ | :------- | :-------------------- |
| `token`  | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`.  |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/visitor/iNKE8a6k6cjbqWhWd
```

## Example Result

```json
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
| :------ | :---------- |
| 0.70.0  | Added       |

## Register a new Livechat visitor

| URL                                  | Requires Auth | HTTP Method |
| :----------------------------------- | :------------ | :---------- |
| `/api/v1/livechat/visitor`           | `no`          | `POST`      |

## Example payload

```json
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

```json
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
| :------ | :---------- |
| 0.70.0  | Added       |

## Send Visitor navigation history

| URL                             | Requires Auth | HTTP Method |
| :------------------------------ | :------------ | :---------- |
| `/api/v1/livechat/page.visited` | `no`          | `POST`      |

## Example payload

```json
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

```json
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
| :------ | :---------- |
| 0.70.0  | Added       |
