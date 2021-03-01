# Notify Room Stream

Use this call to notify a room about some specific events.

The method used is `stream-notify-room` and the general format is:

```javascript
{
    "msg": "method",
    "method": "stream-notify-room",
    "id": "42",
    "params": [
        ... // params varies
    ]
}
```

## Typing

One of the events you may notify a room about is the user typing on the keyboard. This call needs three params.

* `room-id/typing`: The first param is the room id followed with `/typing`
* `username`: The second param is the username
* `flag`: The third param is a boolean indicating if the user is typing \(`true`\) or it's not typing \(`false`\)

Example call \(the user is typing\):

```javascript
{
    "msg": "method",
    "method": "stream-notify-room",
    "id": "42",
    "params": [
        "room-id/typing",
        "username",
        true
    ]
}
```

