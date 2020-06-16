---
description: >-
  The event is the former message, but way more flexible, allowing us to use it
  for different goals. Currently, we only use it for messages and some room
  events.
---

# The Event Object

The event object contains these fields:

```javascript
{
    messages: [
        {
            "_id": "8aa776ae767c37254c6a85f914a6151d3bb558ff0a9d639f13f0fe5f11af92db",
            "_pids": [],
            "v": 2,
            "ts": ISODate("2020-06-11T19:46:40.192Z"),
            "src": "peerc.allskar.com",
            "ct": "room",
            "cid": "a7c5MQFQGe4XKMyEo",
            "t": "room",
            "dHash": "469d7080b26464d8e684dc72c409dd669676ff0e6bbdd4b6f3392c4cb1fd780d",
            "d": {
                ...data
            },
            "_updatedAt": ISODate("2020-06-11T19:46:42.392Z")
        },
        {
            "_id": "f53baadb1090c2b4f9d445d030902e142065b5e177a50799c2cc6b1d2a75800e",
            "_cid": "D2Hznvc4jt7YRSaQy",
            "_pids": [
                "8aa776ae767c37254c6a85f914a6151d3bb558ff0a9d639f13f0fe5f11af92db"
            ],
            "v": 2,
            "ts": ISODate("2020-06-11T19:46:42.385Z"),
            "src": "localhost",
            "ct": "room",
            "cid": "a7c5MQFQGe4XKMyEo",
            "t": "msg",
            "dHash": "793dd0f58f7f9b243ecb35fed189260633058e0ee1468813148b4e8b33567a2e",
            "d": {
                ...data
            },
            "_updatedAt": ISODate("2020-06-11T19:46:44.394Z")
        }
    ]
}
```

