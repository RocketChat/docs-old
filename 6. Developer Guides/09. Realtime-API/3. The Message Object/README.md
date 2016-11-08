# The Message object

The message object is the very soul of a conversation. It encapsulates all the information need in order to represent a single entry on a message list.

The message object contains these fields:

- `_id`: The message id
- `rid`: The room id - Identify the room the message belongs
- `msg`: The textual message
- `ts`: The message time stamp (date of creation on client)
- `u`: The user that send the message
- `_updatedAt`: The time stamp when the message got saved on the server
- `editedAt`: (Optional) The time stamp of when the message was edited
- `editedBy`: (Optional) The user that editted the message
- `urls`: (Optional) A collection of URLs metadata. Available when the message contains at least one URL

The user presented on `u` and `editedBy` fields are a simplified version of the user information:

- `_id`: The user id
- `username`: The username

The URL metadata contains several informational fields:

- `url`: The URL itself (just as it appears on the message)
- `meta`: URL metadata (varies accord to the URL)
- `headers`: Some HTTP headers (varies accord to the URL)
- `parsedUrl`: The parsed URL broken into its parts

```json
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
