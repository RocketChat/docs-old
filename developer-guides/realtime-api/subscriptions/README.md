# Subscriptions

Streams are the way to plug into a continuous source of updates \(changes\). Any subscriber registered will receive the latest changes as they occur.

In order to subscribe to a stream you must send a message with `msg: sub`, an unique `id`, the stream `name` and the `params` to be applied on the stream.

```javascript
{
    "msg": "sub",
    "id": "unique-id",
    "name": "the-stream",
    "params":[ "event", false ]
}
```

The new stream API will propagate only changes to subscribers, which may break some drivers. In order to keep it back-compatible the last parameter in the parameters must be a boolean: whatever or not you required back-compatibility. If set to `true` you should receive an `add` event every time something new is created.

_NOTE_: before you can subscribe to any stream or use any Subscription related features, you have to send a [login request](https://docs.rocket.chat/developer-guides/realtime-api/method-calls/login/) using the RealTime API.

Unsubscribing from a stream can be done in the following way:

```javascript
{
    "msg": "unsub",
    "id": "subscription-id"
}
```

Where the `subcription_id` is the unique `id` that was used when you initially made the call to subscription. The response will be following:

```javascript
{
    "msg": "nosub",
    "id": "subscription-id"
}
```

Be aware that even a call to an invalid or nonexistent `subscription_id` will produce a non-error response containing at least `"msg": "nosub"`, and whatever `id` you provided. The `id` field is omitted if no `id` was provided.

