# Support FAQs

## **Slow connections. iOS connection error**

95% or more of these are due to improperly configured reverse proxies where the WebSocket is not working properly. If a WebSocket cannot be correctly established, the client will try and fall back to an XHR connection. It is extremely slow and flaky. The iOS app will not connect at all without a WebSocket.

Please use Chrome and dev tools to check for the presence of a WebSocket.

## **WebSockets**

* Right Click, Inspect
* Network, F5 to refresh
* Look for the WS filter
*   Should see WebSocket

    WebSocket - wss://open.rocket.chat/sockjs/123/pbiz45rm/websocket

Click it and look on the right for 'Headers'

Has this got a green light?

```
 Status Code: 101 Switching Protocols
```

What do the headers say?

```
Response headers
 Connection: Upgrade
 Sec-WebSocket-Accept: nXd/PfaHuA1Kx/ggJWAAy+96Ee4=
 Upgrade: websocket
```

## **Upgrading Rocket.Chat**

For upgrading first, you have Rocket.Chat itself, and then the Mongo database.

Snaps should auto-update so this is aimed at those who use other methods.

* Rule One. Backup. Lots of them and lots of ways, and practice restores as well.
* Rule Two. Use virtual machines for testing. They are so cheap.

Upgrading Mongo

* Again backups! Please read how to do this. Practice it.
* Use the Mongo documentation. There are leaps between 2.x and 3.x
* Then there are more leaps as you proceed trough 3.x and then again to 4.x
* As of writing 3.4 is going EoL so you need to be on 3.6
* For now I would get to 3.6 and then start preparing for 4.x

Upgrading Rocket

Did we mention backups? Yup - boring. Until you need them. 😉

Most Roket.Chat updates also update the database schema - the core layout.

Now, theoretically apart from adding oplogs to Mongo for Rocket 1.x + you should be able to merrily jump from say 0.62 through to todays 2.1.x

Except..... those schema changes. If you are going to hit a problem, it will be one of those.

The devs test changes from one version to another, and maybe even over a few versions. But not every single version up to latest or say 0.74.3 -> 1.3.2

That's where it may go wrong.

So a recommended path is something like this:

```
-> 0.73.x -> 1.0.x -> 1.32 -> 2.0.x -> 2.1.x
```

Or possibly even more cautious:

```
 -> 073.x - 1.0.x -> 1.1.x -> 1.2.x -> 1.3.x -> 2.0.x -> 2.1.x
```

( 'x' means the last patched version e.g. 1.3.2 Check [tags](https://github.com/RocketChat/Rocket.Chat/tags) or [releases](https://github.com/RocketChat/Rocket.Chat/releases) )

We have seen people make some big jumps. And some disasters too. If in doubt, take your time and a backup!😃
