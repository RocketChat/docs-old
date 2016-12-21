# Realtime API

__IMPORTANT!__ These docs are based on an unreleased version of the API. If you want to try it out, point your client to [http://demo.rocket.chat](http://demo.rocket.chat). You can also check out the code on Rocket.Chat's [experimental](https://github.com/RocketChat/Rocket.Chat/tree/experimental) branch.

Our realtime API is composed of two elements: [Method Calls][1] and [Subscriptions][2]. Both of them are supported directly in the websocket connection.

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

[1]:1.%20Method%20Calls/
[2]:2.%20Subscriptions/
