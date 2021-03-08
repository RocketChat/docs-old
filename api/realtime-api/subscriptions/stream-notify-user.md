# stream-notify-user

This is the user stream.

Events available:

* message
* otr \(Off the Record Message\)
* webrtc
* notification
* rooms-changed
* subscriptions-changed

```javascript
{
    "msg": "sub",
    "id": "unique-id",
    "name": "stream-notify-user",
    "params":[
        "user-id/event",
        false
    ]
}
```

