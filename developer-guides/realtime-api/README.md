# Realtime API

Point your client to the Websocket of the server you want to connect to:

```
wss://[ABC.DOMAIN.COM]/websocket
```

Our real-time API is composed of two elements: [Method Calls][1] and [Subscriptions][2]. Both of them are supported directly in the websocket connection.

To make it possible to have everything working on the same connection we use RPC with the following format.

```json
{
    "msg": "type-of-communication",
    "id": "unique-id",
    ... // per call defined data
}
```

The type of communication is defined according to the call:

- [Method Calls][1]: `method`
- [Subscriptions][2]: `sub`

    Please note, the server will send you "ping" and you must respond with "pong" otherwise the server will close the connection.

Before requesting any method / subscription you have to send a connect message:

```json
{
    "msg": "connect",
    "version": "1",
    "support": ["1"]
}
```

[1]: method-calls/

[2]: subscriptions/

You can find a basic example script that uses the 'ddp' NodeJS package to subscribe to the Realtime-API stream of a Group/Channel here <https://github.com/jszaszvari/rocketchat-ddp-listener>
