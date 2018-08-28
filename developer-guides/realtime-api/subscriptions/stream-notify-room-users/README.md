# stream-notify-room-users

This is the stream for room users. Currently used to notify about WebRTC Calls.

Events available:

- webrtc

```json
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
