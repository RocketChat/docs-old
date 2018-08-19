# DDP Requests

DDP Requests (DDPRs for short in this page) are objects sent from the server to trigger actions in subscriber clients (bots and possibly other websocket clients). This is handled at the adapter and/or SDK level, not by final users (e.g. normal bot developers).

## Use cases

DDPRs are currently used to prompt certain actions from bot clients, they are:

Check bot's aliveness - Periodically sending a '`heartbeat`' DDPR that waits for the client's response, indicating that it is alive and listening to the server.

Pause or resume bots functioning - Prompts the bot to stop listening to the normal message stream, in which the messages from rooms are received, until it reconnects, restarts, or is told otherwise. Useful when you want to stop the bot but do not currently have a direct access to it.

Request data - Used to prompt the bot to send some specific data, such as the last entries of its logger or statistics collected live by the SDK and the adapter.

## How it works

### Server

From the server, the only thing you need to do is to send a DDPR and wait for the response. This is possible by calling the function `RocketChat.sendDdpRequest`, explained below.

#### Sending a request (from the server)

To send a ClientCommand all you need to do is to call the function via `RocketChat.sendDdpRequest(user, request [, timeout])`, where:

- `user`: Object of the target user, containing the `_id` and `username` properties
- `request`: Object of the request, where it must have at least the `key` property, a unique string
- `timeout`: Integer, optional parameter of the timeout for the client to reply the request, defaults to 5 (seconds).

The function **returns** a promise that resolves with a reply object, rejects with a timeout error if the client did not respond in time or with any error that happened to be thrown.

This function adds a listener for a `'ddp-request-response-${_id of the request}'` event in the internal EventEmitter called RocketChat and initiates a timeout.

If the listener is called, the timeout is cleared and the function resolves with the event's first parameter, the DDP Request's response object.

If the listener is not called within the timeout period, the timeout removes the listener and rejects the promise.

Example - Sending a `pauseMessageStream` request:

```
const bot = {
  _id: 'e9e89dqw823d81',
  username: 'bot'
};

RocketChat.sendDdpRequest(bot, { key: 'pauseMessageStream' })
  .then((response) => {
    // client replied the request
    console.log(response);
  })
  .catch((err) => {
    // client did not reply within 5 seconds
    console.log(err);
  });
```

### Client

There are two ways to listen to DDPRs from the client

#### `meteor-streamer` package

In order to listen to DDPRs using the `meteor-streamer` package, you must connect to the streamer `ddp-requests` stream and set a listener for the event called `${userId}`, where `userId` is the user ID of the account logged in.

All DDPRs will come through this event, then you must handle them by filtering using the `key` property.

#### `meteor-streamer` compatibility mode

If it is not possible to use the package, the streamer has a compatibility mode where you can subscribe to the `stream-ddp-requests` publication and listen for `Change` events. That's the method used by the JS SDK.

#### Replying to DDPRs

Once the client receives the DDPR and acts according to it, it should call the `replyToDdpRequest` method from Rocket.Chat with two parameters, the `_id` property of the DDPR and the response object.

The response object must have at least a `success` property indicating its status.
