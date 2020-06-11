# Realtime API

Point your client to the Websocket of the server you want to connect to:

```text
wss://[ABC.DOMAIN.COM]/websocket
```

Our real-time API is composed of two elements: [Method Calls](method-calls/) and [Subscriptions](subscriptions/). Both of them are supported directly in the websocket connection.

To make it possible to have everything working on the same connection we use RPC with the following format.

```javascript
{
    "msg": "type-of-communication",
    "id": "unique-id",
    ... // per call defined data
}
```

The type of communication is defined according to the call:

* [Method Calls](method-calls/): `method`
* [Subscriptions](subscriptions/): `sub`

  Please note, the server will send you "ping" and you must respond with "pong" otherwise the server will close the connection.

Before requesting any method / subscription you have to send a connect message:

```javascript
{
    "msg": "connect",
    "version": "1",
    "support": ["1"]
}
```

## Resources

* A basic example script that uses the 'ddp' NodeJS package to subscribe to the Realtime-API stream of a Group/Channel here [https://github.com/jszaszvari/rocketchat-ddp-listener](https://github.com/jszaszvari/rocketchat-ddp-listener)
* [Rocket.Chat.RealTime.API.RxJS](https://github.com/inf3cti0n95/Rocket.Chat.RealTime.API.RxJS) Abstraction for Utilizing [Rocket.Chat](https://rocket.chat/)'s [Realtime API](https://rocket.chat/docs/developer-guides/realtime-api) Methods with [RxJS](http://reactivex.io/rxjs/). [https://github.com/inf3cti0n95/Rocket.Chat.RealTime.API.RxJS](https://github.com/inf3cti0n95/Rocket.Chat.RealTime.API.RxJS)

