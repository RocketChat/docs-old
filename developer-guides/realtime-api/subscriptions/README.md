# Subscriptions

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

The new stream API will propagate only changes to subscribers, which may break some drivers. In order to keep it back-compatible the last parameter in the parameters must be an boolean: whatever or not you required back-compatibility. If set to `true` you should receive an `add` event everytime something new is created.
