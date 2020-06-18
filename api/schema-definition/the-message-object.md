# Message

The message object is the very soul of a conversation. It encapsulates all the information need in order to represent a single entry on a message list.

The message object contains these fields:

* `_id`: The message id
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
    "messages": [
        {
            "_id": "message-id",
            "rid": "room-id",
            "msg": "Hello World!",
            "ts": { "$date": 1480377601 },
            "u": {
                "_id": "user-id",
                "username": "username"
            },
            "_updatedAt": { "$date": 1480377601 }
        },
        {
            "_id": "message-id",
            "rid": "room-id",
            "msg": "Hello!",
            "ts": { "$date": 1480377601 },
            "u": {
                "_id": "user-id",
                "username": "username"
            },
            "_updatedAt": { "$date":1480377601 },
            "editedAt": { "$date": 1480377601 },
            "editedBy": {
                "_id": "user-id",
                "username": "username"
            }
        }
    ]
}
```

