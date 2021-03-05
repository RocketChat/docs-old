# Room

The room object represents any form of communication between two or more users. There are at least two fields on the room object.

* `_id`: The room / user id \(depends on the room type\)
* `t`: The room type

## Room Types

* `d`: Direct chat
* `c`: Chat
* `p`: Private chat
* `l`: Livechat

The information that comes with the room object changes according to its type.

### Direct chat

A direct chat between two users. In this case the room object only has two fields:

* `_id`: The room id
* `t`: The room type \(in this case `d`\)

Example:

```javascript
{
    "_id": "room-id",
    "t": "d"
}
```

You'll need to access the room information using data from [Get Subscriptions](https://docs.rocket.chat/developer-guides/realtime-api/method-calls/get-subscriptions).

### Chat

An open chatroom. A chat contains more information about the room as it follows:

* `_id`: The room id
* `t`: The room type \(in this case `c`\)
* `name`: The room name
* `u`: The room creator \(it may return a null user\)
* `topic`: \(Optional\) The room topic
* `muted`: \(Optional\) A collection of muted users by its username
* `jitsiTimeout`: \(Optional\) \(?\)

Example:

```javascript
{
    "_id": "room-id",
    "t": "c",
    "name": "room-name",
    "u": { "_id": "user-id", "username": "username" },
    "topic": "room-topic",
    "muted": [ "username" ],
    "jitsiTimeout": { "$date": 1480377601 }
}
```

### Private chat

A private chatroom. This type of room resembles the open chat room with an addition.

* `_id`: The room id
* `t`: The room type \(in this case `p`\)
* `name`: The room name
* `u`: The room creator \(it may return a null user\)
* `topic`: \(Optional\) The room topic
* `muted`: \(Optional\) A collection of muted users by its username
* `jitsiTimeout`: \(Optional\) \(?\)
* `ro`: Flags if the room is read-only

Example:

```javascript
{
    "_id": "room-id",
    "t": "p",
    "name": "room-name",
    "u": { "_id": null, "username": null },
    "topic": "room-topic",
    "ro": false // This room is not read-only
}
```

