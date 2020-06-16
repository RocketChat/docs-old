---
description: >-
  The event is the former message, but way more flexible, allowing us to use it
  for different goals. Currently, we only use it for messages and some room
  events.
---

# The Event Object

The event object contains these fields:

* `_id`: The event id, which is a SHA256 hash of the `src`, `ct`, `cid`
* `rid`: The room id - Identify the room the message belongs
* `msg`: The textual message
* `ts`: The message time stamp \(date of creation on client\)
* `u`: The user that sent the message
* `_updatedAt`: The time stamp when the message got saved on the server
* `editedAt`: _\(Optional\)_ The time stamp of when the message was edited
* `editedBy`: _\(Optional\)_ The user that edited the message
* `urls`: _\(Optional\)_ A collection of URLs metadata. Available when the message contains at least one URL
* `attachments`: _\(Optional\)_ A collection of [attachment objects](../rest-api/methods/chat/postmessage.md#attachments-detail), available only when the message has at least one attachment
* `alias`: _\(Optional\)_ A way to display the message is "sent" from someone else other than the user who sent the message
* `avatar`: _\(Optional\)_ A url to an image, that is accessible to anyone, to display as the avatar instead of the message user's account avatar
* `groupable`: _\(Optional\)_ Boolean that states whether or not this message should be grouped together with other messages from the same user
* `parseUrls`: _\(Optional\)_ Whether Rocket.Chat should try and parse the urls or not

The user presented on `u` and `editedBy` fields are a simplified version of the user information:

* `_id`: The user id
* `username`: The username

The URL metadata contains several informational fields:

* `url`: The URL itself \(just as it appears on the message\)
* `meta`: URL metadata \(varies accord to the URL\)
* `headers`: Some HTTP headers \(varies accord to the URL\)
* `parsedUrl`: The parsed URL broken into its parts

[The attachment object is fully described here](../rest-api/methods/chat/postmessage.md#attachments-detail)

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

