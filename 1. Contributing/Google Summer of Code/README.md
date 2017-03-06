[![Google Summer of Code 2017](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://developers.google.com/open-source/gsoc/)

## How to apply

Interested students should email the mentor(s) directly for discussion and further information.  You can also find them, most of the time, on our community server https://demo.rocket.chat/  for real-time chat.   Many of the mentors are fluent in both Portuguese and English.  If you have ideas and proposals that are not on our idea list, or if a mentor is not available, please email to contact+gsoc17@rocket.chat

For general information, and some real-time help on next steps, please visit our community server Google Summer of Code 2017 discussion group:    https://demo.rocket.chat/channel/gsoc17

Student applications will be accepted starting March 20th, 2017.  All applications must be in by April 3rd.

## Ideas

### Federation of Rocket.Chat Servers
* **Mentors:** Matthew Hodgson ([@arathorn](https://github/ara4n))  Rodrigo Nascimento ([@rodrigo.nascimento](https://github.com/rodrigok))
* **Description:** Tens of thousands of Rocket.Chat servers are running at this very minute on the Internet.  There is currently no way for users/bots/services of one instance to address or communicate with those from another.  This project's mission is to make it possible. You will be working and exchanging ideas with the very best in the field - experts from Matrix.org and Rocket.Chat.
* **Desirable Skills:** Familiarity with JavaScript development.  Demonstrated interest and/or passion on networking and federation protocols research and evolution.
* **Goal/Deliverable:** The foundation for all Rocket.Chat users/bots/services to optionally communicate with one another, across all connected instances.


### Improved End-to-End Encryption Implemenation (currently feature-named OTR)
* **Mentors:** Marcelo Schmidt ([@marcelo.schmidt](https://github.com/marceloschmidt))  Mitar ([@mitar](https://github.com/mitar))
* **Description:** Taking and improving our end-to-end encryption implementation. Perhaps replace with more modern protocols, such as [Signal](https://en.wikipedia.org/wiki/Signal_Protocol). 
* **Desirable Skills:** Some Javascript coding skills and familiarity with cryptography.
* **Goal/Deliverable:** The ability to have end-to-end encrypted conversations between users. There are various features possible: forward secrecy, online and offline use (do users have to be online at the same time for encryption to be possible), do we store messages on the server, pair or group conversations, encrypted file transfer, etc.

### Use of Chromecast as Presentation Room
* **Mentors:** Bradley Hilton ([@graywolf336](https://github.com/graywolf336)) 
* **Description:** Use Chromecast as presentation output which shows a chat room and will join any Jitsi / WebRTC meetings that are started in it, this way meetings can be started inside Rocket.Chat and the Chromecast can be on a TV/Monitor inside a conference room.
* **Desirable Skills:** Some Javascript coding skills will be required to complete this task. Students with WebRTC knowledge and/or who have already produced Chromecast apps are on a good start. A Chromecast is required for this task.
* **Goal/Deliverable:** Being able to pair a room with Chromecast, displaying it's messages. Chromecast app needs to be able to automatically join a Jitsi/WebRTC video call. 

### Integrated Personal Email Gateway
* **Mentors:** Rodrigo Nascimento ([@rodrigo.nascimento](https://github.com/rodrigok))
* **Description:** Add feature to allow automated reply when offline, and forwarding of incoming messages via email.
* **Desirable Skills:** Some Javascript coding skills will be required to complete this task. An understanding of industry standard SMTP and POP prototcols, and configuration of standard email servers will be required.
* **Goal/Deliverable:**  Ability for each user to set an away message, and receive any offline messages - in batches per interval, via through email account.

### Create a Progressive Web App client
* **Mentors:**  TBD
* **Description:** Create a PWA client using a framework like Angular, Aurelia, React or Polymer
* **Desirable Skills:** Some Javascript coding skills would be required to complete this task.
* **Goal/Deliverable:** A PWA client with basic functionality, composed of re-usable web components.

### Create an SDK for Mobile Apps to include a chat inside other apps.
* **Mentors:** Rafeal Kellermann ([@rafaelks](https://github.com/rafaelks))  Tiago Cunha ([@tiago.cunha](https://github.com/laggedHero))
* **Description:** Create an SDK (for iOS and/or Android) to embed in any app that wants to have a chat inside it. It could be useful for support and also for chat in enterprise apps. One example is an app that’s used by all sellers from a company to be able to communicate with each other using Rocket.Chat. Another example is something very similar to Intercom (https://www.intercom.com/mobile)
* **Desirable Skills:** Students will be required to code in either Java for Android SDK or Swift for the iOS SDK. Students will also need to understand how Rocket.Chat communicates over websockets.
* **Goal/Deliverable:** To have an SDK that allows App Developers to embed a chat system inside their own apps using Rocket.Chat servers to deliver messages.

### Calendar Integration for Meeting Scheduling
* **Mentors:** Bradley Hilton ([@graywolf336](https://github.com/graywolf336))
* **Description:** taking and embedding a calendar inside rocket.chat, being standalone yet integrating with all the calendars out there so people can schedule meetings and be reminded of upcoming meetings that are inside rocket.chat
* **Desirable Skills:** Some javascript coding skills
* **Goal/Deliverable:** The ability to schedule a meeting in Rocket.Chat

### Rocket.Chat on Mesh Network
* **Mentors:** Marcelo Schmidt ([@marcelo.schmidt](https://github.com/marceloschmidt))  Mitar ([@mitar](https://github.com/mitar))
* **Description:** Modify the Rocket.Chat to work on mesh networks. There are two basic types of mesh networks which would be interesting to cover:
  * A network of mostly always online off-the-shelf WiFi equipment which forms a network where all network nodes can connect directly to each other (no NAT). Here it would be interesting to port Rocket.Chat so that it could run served as a static resource from these limited devices (which are often not powerful enought to run MongoDB and node.js, which Rocket.Chat otherwise uses for server-side part). Rocket.Chat should be bundled into a static resource, served over HTTP to clients, which could then use something like WebRTC to connect to each other and communicate with each other. A very thin server-side program might be needed as well, to help with WebRTC connections for example, or discovery of other nodes to connect to. A distributed database like [Scuttlebot](http://scuttlebot.io/) could be used as well.
  * A [delay tolerant mesh network](https://en.wikipedia.org/wiki/Delay-tolerant_networking) where devices do not have regular connectivity between each other, and are often even moving around. Such networks often do not even use TCP/IP. On the other hand, devices often have much more storage space and power, when they are available. The idea is to change Rocket.Chat so that it can operate in such environment as well.
* **Desirable Skills:** Javascript, WebRTC, networking, OpenWrt, and programming for embeded devices (C, Lua, bash)
* **Goal/Deliverable:** An OpenWrt package providing a modified Rocket.Chat to work in a mesh network.

## Automatic Channels
* **Mentors:** Marcelo Schmidt ([@marcelo.schmidt](https://github.com/marceloschmidt))  Mitar ([@mitar](https://github.com/mitar))
* **Description:** Add a feature of creation of automatic channels to Rocket.Chat and automatic joining of users to those channels. The idea is to extend Rocket.Chat with a plugin system where plugins could classify users into channels. Then such channel would be automatically created, if it does not yet exist, and user added to it. This should also work reactivelly so that plugin can remove the user from a chnnel, and remove such channels. Use cases here are various. For example, a plugin could detect user's language and automatically add them to a channel for that language. Or, plugin could resolve user's IP into their country and add them to a channel for this country. If user changes the IP and moves to another country, they should be automatically moved to a new channel. In combination with mesh networking support, users could be automatically put into channels local to the node to whic they are connected.
* **Desirable Skills:** Some javascript coding skills
* **Goal/Deliverable:** Modification to Rocket.Chat with a plugin system for automatic channels and joining with two example plugins: based on browser specified language, and country basd on GeoIP of the user.

### Enable multi-instance High Availabilty (HA) configuration with snaps
* **Mentors:** Aaron Ogle ([@geekgonecrazy](https://github.com/geekgonecrazy))
* **Description:** Modify the Rocket.Chat snap to enable mongodb replica's and multi instance Rocket.Chat
* **Desirable Skills:** Familiarity with linux, and bash scripting.
* **Goal/Deliverable:** A snap that can be used in a multi-instance HA setup.
