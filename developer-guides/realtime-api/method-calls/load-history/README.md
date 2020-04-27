# Load History

Use this method to make the initial load of a room. After the initial load you may subscribe to the room messages stream (see [Stream Room Message][1]).

This method accepts 4 parameters in the following order:

- The room id
- The NEWEST message timestamp date (or null) to only retrieve messages before this time. - this is used to do pagination
- The message quantity
- A date object - the date of the last time the client got data for the room

The result is composed of the `messages` collection and the `unreadNotLoaded`counter.

The `message` object is fairly complex and have [its own section describing it][2]. The `unreadNotLoaded` counts the quantity of unread messages not loaded by the call.

Examples:

**Request of the latest 50 messages**

```json
{
    "msg": "method",
    "method": "loadHistory",
    "id": "42",
    "params": [ "room-id", null, 50, { "$date": 1480377601 } ]
}
```

**Request of the latest 50 messages, using pagination**

```json
{
    "msg": "method",
    "method": "loadHistory",
    "id": "42",
    "params": [ "room-id", { "$date": 1480377205 }, 50, { "$date": 1480377601 } ]
}
```

**Response**

```json
{
    "msg": "result",
    "id": "42",
    "result": {
        "messages": [
            ... // messages
        ],
        "unreadNotLoaded": 0
    }
}
```

[1]: ../../subscriptions/stream-room-messages/

[2]: ../../the-message-object/
