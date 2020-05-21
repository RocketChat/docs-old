# stream-room-messages

This is the room messages stream. You just need the room ID for subscribing.

```javascript
{
    "msg": "sub",
    "id": "unique-id",
    "name": "stream-room-messages",
    "params":[
        "room-id",
        false
    ]
}
```

To unsubscribe from a room, send "unsub", along with the ID of the previous subscribe message.

```javascript
{
    "msg": "unsub",
    "id": "unique-id",
}
```

If you want to subscribe to a user's messages stream, just pass `__my_messages__` as the room ID.

