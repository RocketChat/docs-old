# Subscriptions

TODO: Break each stream on its own page and with its response  - as directories

Streams are the way to plug into a continuous source of updates (changes). Any subscriber registered will receive the latest changes as they occour.

In order to subscribe to a stream you must send a message with `msg: sub`, an unique `id`, the stream `name` and the `params` to be applied on the stream.

```json
{
    "msg": "sub",
    "id": "unique-id",
    "name": "the-stream",
    "params":[ "event", false ]
}
```

The new stream API will propagate only changes to subscribers, which may break some drivers. In order to keep it back-compatible the last parameter in the parameters must be an boolean: wharever or not you required back-compatibility. If set to `true` you should receive an `add` event everytime something new is created.

## stream-notify-all

General user-wide stream.

Events available:

 - roles-change
 - updateEmojiCustom
 - deleteEmojiCustom
 - updateAvatar
 - public-settings-changed
 - permissions-changed

```json
{
    "msg": "sub",
    "id": "unique-id",
    "name": "stream-notify-all",
    "params":[
        "event",
        false
    ]
}
```

## stream-notify-user

This is the user stream.

Events available:

 - message
 - otr
 - webrtc
 - notification
 - rooms-changed
 - subscriptions-changed

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

## stream-notify-room

This is a room stream.

Events available:

 - deleteMessage

```json
{
    "msg": "sub",
    "id": "unique-id",
    "name": "stream-notify-room",
    "params":[
        "room-id/event",
        false
    ]
}
```

## stream-room-messages

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
