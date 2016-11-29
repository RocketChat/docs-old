# Realtime API

IMPORTANT! - These docs are based on an unrealesed version of the API. If you want to try it out, point your client to [http://demo.rocket.chat](http://demo.rocket.chat). You may check the code on Rocket.Chat's [experimental][3] branch.

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

[1]:1.%20Method%20Calls/
[2]:2.%20Subscriptions/
[3]:https://github.com/RocketChat/Rocket.Chat/tree/experimental
