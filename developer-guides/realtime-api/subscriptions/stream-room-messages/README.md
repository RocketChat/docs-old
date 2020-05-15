# stream-room-messages

This is the room messages stream. You just need the room ID for subscribing.

 ```json
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

Unsuscribe from a room

 ```json
{
    "msg": "unsub",
    "id": "ddp-room",
}
```

If you want to subscribe to a user's messages stream, just pass `__my_messages__` as the room ID.
