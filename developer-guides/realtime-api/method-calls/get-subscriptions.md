# Get Subscriptions

Returns a `result` with a user's subscription collection. You may pass no params or a date param with the time stamp of your last update. If a date is passed the result will only contains changes to the subscriptions.

Example call:

```javascript
{
    "msg": "method",
    "method": "subscriptions/get",
    "id": "42",
    "params": [ { "$date": 1480377601 } ]
}
```

Response:

```javascript
{
    "msg": "result",
    "id": "42",
    "result": [
        ... // subscriptions
    ]
}
```

## Subscription Object

The subscription object contains the information about the room and the user relation to it.

* `t`: The room type \(the same used on the \[room object\]\[1\]\)
* `ts`: Timestamp the room was created at, so this should equal the room's `ts` field
* `ls`: Last seen timestamp \(The last time the user has seen a message in the room\)
* `name`: The room name
* `rid`: The room id
* `u`: An simple `user` object with its id and username
* `open`: Whether the room the subscription is for has been opened or not \(defaults to false on direct messages\). This is used in the clients to determine whether the user can see this subscription in their list, since you can hide rooms from being visible without leaving them.
* `alert`: Whether there is an alert to be displayed to the user
* `roles`: \(Optional\) The collection of roles the user belongs to \(at least one `role-name` will be present\)
* `unread`: The total of unread messages
* `_updatedAt`: Timestamp of when the subscription record was updated
* `_id`: The subscription id

An example:

```javascript
{
    "t": "d",
    "ts": { "$date": 1480377601 },
    "ls": { "$date": 1480377601 },
    "name": "username",
    "rid": "room-id",
    "u": { "_id": "user-id", "username": "username" },
    "open": true,
    "alert": false,
    "unread": 0,
    "_updatedAt": { "$date": 1480377601 },
    "_id": "subscription-id"
}
```

