# Deeplink

## General information

Our mobile and desktop clients have implemented deeplinking that will allow them to handle links meant for Rocket.Chat.

This is done using a special url that the applications are registered to handle.

There are two prefixes available:

* `https://go.rocket.chat`
* `rocketchat://`

We call `https://go.rocket.chat` links go links. Links here will work across web, mobile and desktop clients.

The alternative will only be handled by mobile and desktop clients.

In all examples below `https://go.rocket.chat/` is interchangeable with `rocketchat://`

## Authentication

These links can be used for adding a server to your client in one click. This makes it easier for deployment. You then have a universal link that will add to the clients.

You can also include credentials to make it add the server and auto log them in.

Authentication links start with: `https://go.rocket.chat/auth`

**Params:**

* host: The host of the server;
* token \(optional\): The token of the user to be authenticated;
* userId \(optional\): The id of the user to be authenticated;

**Examples:**

Link directly to server:

```text
https://go.rocket.chat/auth?host=open.rocket.chat
```

Link directly to server and authenticate:

```text
https://go.rocket.chat/auth?host=foo.bar.com&token=123abc&userId=1234abcd
```

## Channel / Group / DM

You can also link directly to a room.

These links start with: `https://go.rocket.chat/room`

**Params:**

* host: The host of the server;
* rid: The rid of the room to be opened;
* path \(optional\): The path URL to be opened on the web;

**Example:**

```text
https://go.rocket.chat/room?host=open.rocket.chat&rid=GENERAL&path=channel/general
```

