# Frequently Asked Support Questions&#x20;

### How Do I  fix slow connections & iOS connection errors?

95% or more of these are due to improperly configure reverse proxies where the WebSocket is not working properly. If a WebSocket cannot be correctly established, the client will try and fallback to an XHR connection. It is extremely slow and flaky. The iOS app will not connect at all without a WebSocket. Please use Chrome/ium and dev tools to check for the presence of a WebSocket.

### **How Do I Inspect WebSocket?**

* Right Click, Inspect
* Network, F5 to refresh
* Look for the WS filter
*   Should see websocket

    websocket - wss://open.rocket.chat/sockjs/123/pbiz45rm/websocket

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

### How Do I find Information about Notifications?

Please read this for the current notification logic:

[Push Notification Logic](https://rocket.chat/2019/09/27/push-notification/)

### How Do I Troubleshoot General Bugs?

* It isn't a bug unless you can repeat it. So, make a note of everything you do.&#x20;
* You can always use a note editor and paste in histories of commands, logs, files. changes, hacks or whatever.
* The more you document, the easier it is for a dev to find, and fix and make sure you have all the correct versions of software used.
* Start your little history. Be clear. Be concise. Don't waffle. Stick to the facts, not your guesses.

### How Do I Upgrade to Rocket.Chat Latest Version?

Upgrading is a fraught business at any time. First you have Rocket.Chat itself, and then the Mongo database.

Snaps should auto-update so this is aimed at those who use other methods.

* **Rule One:** Backup. Lots of them and lots of ways, and practice restores as well.
* **Rule Two**: Use virtual machines for testing. They are so cheap.

**Upgrade to the Latest MongoDB Version?**

* Did I mention backups? Read how to do this. Practice it.
* Use the Mongo documentation. There are leaps between 2.x and 3.x
* Then there are more leaps as you proceed trough 3.x and then again to 4.x
* As of writing 3.4 is going EoL so you need to be on 3.6
* For now I would get to 3.6 and then start preparing for 4.x
* To convert from mmapv1 -> wiredtiger you will need to backup, convert, restore

**Upgrade to  Rocket.Chat Latest Version**

Please read this [https://docs.rocket.chat/quick-start/upgrading-rocket.chat](https://docs.rocket.chat/quick-start/upgrading-rocket.chat) guide for upgrading Rocket.Chat.

### **Reference Links**

Forums:\
[https://forums.rocket.chat](https://forums.rocket.chat/)

Documentation (not always easy to find stuff - take your time here):\
[https://rocket.chat/docs/](https://rocket.chat/docs/)

New feature requests:\
[https://github.com/RocketChat/feature-requests](https://github.com/RocketChat/feature-requests)

Nginx reverse proxy:\
[https://rocket.chat/docs/installation/manual-installation/configuring-ssl-reverse-proxy/](https://rocket.chat/docs/installation/manual-installation/configuring-ssl-reverse-proxy/)

Notification logic:\
[https://whimsical.co/Bngw3kot3wWPMAAJTebDUJ](https://whimsical.co/Bngw3kot3wWPMAAJTebDUJ)
