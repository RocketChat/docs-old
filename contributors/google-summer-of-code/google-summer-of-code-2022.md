# Google Summer of Code 2022

## [![Google Summer of Code 2020](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://summerofcode.withgoogle.com)

## How to apply

Rocket.Chat will apply as a participating open source organization for the Google Summer of Code 2022 program.

For contributors,  application for Google Summer of Code 2022 will open on April 4th 2022. &#x20;

Accepted projects and contributors will be announced on May 20th 2022.

Please see [Official Google Summer of Code 2022  Timeline ](https://developers.google.com/open-source/gsoc/timeline)for more details.

#### **Contacting Rocket.Chat**

For general information, please visit our 24 x 7  community channel for Google Summer of Code 2022 :  [ https://open.rocket.chat/channel/gsoc2022](https://open.rocket.chat/channel/gsoc2022)

Join our [Google Summer of Code 2022 Team](https://open.rocket.chat/channel/google-summer-of-code) today and interact with over 100 like-minded contributors and meet the mentors in the team channels.&#x20;

If you have ideas and proposals that are not on our idea list, or if a mentor is not available, you can also email to:

gsoc+2022@rocket.chat

Interested contributors are also encouraged to interact directly with our team and community on GitHub:\
\
[https://github.com/RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)

Those who prefers forums can post messages on our GSoC forum channel (although as the leading open source team chat project we prefer you use Rocket.Chat channels above to reach us instantly) :\
\
[https://forums.rocket.chat/t/google-summer-of-code-gsoc/118](https://forums.rocket.chat/t/google-summer-of-code-gsoc/118)\


#### **Shout out to our early contributors**

We are very thankful for the enthusiastic participation of our early contributors.   The learning curve for Rocket.Chat's huge production code base is known to be very steep and they are getting a head-start even before the announcement of the GSoC 2022 program.  Check out our [GSoC 2022 Leaderboard](https://gsoc.rocket.chat), to see their amazing  contributions:   30 Merged PRs, 61 Open PRs, and 75 Issues as of Feb 10, 2022.\


## Project Ideas

### Federation of Rocket.Chat Servers

* **Mentors:** Matthew Hodgson ([@arathorn](https://github.com/ara4n))  Rodrigo Nascimento ([@rodrigo.nascimento](https://github.com/rodrigok))
* **Description:** Tens of thousands of Rocket.Chat servers are running at this very minute on the Internet. There is currently no way for users/bots/services of one instance to address or communicate with those from another. This project's mission is to make it possible. You will be working and exchanging ideas with the very best in the field - experts from Matrix.org and Rocket.Chat.
* **Desirable Skills:** Familiarity with JavaScript development. Demonstrated interest and/or passion on networking and federation protocols research and evolution.
* **Goal/Deliverable:** The foundation for all Rocket.Chat users/bots/services to optionally communicate with one another, across all connected instances.

### Create a Progressive Web App client

* **Mentors:**  Karl Prieb ([@karl.prieb](https://github.com/karlprieb))
* **Description:** Create a new PWA client for Rocket.Chat using [Angular](https://angular.io) framework, WebSocket and mobile-first approach.
* **Desirable Skills:** Some Javascript coding skills would be required to complete this task.
* **Goal/Deliverable:** A PWA client with basic chat functionality like channels and direct messages list, users status, channel messages, user preferences, etc.

### Improved End-to-End Encryption Implementation (currently feature-named OTR)

* **Mentors:** Marcelo Schmidt ([@marcelo.schmidt](https://github.com/marceloschmidt))  Mitar ([@mitar](https://github.com/mitar))
* **Description:** Taking and improving our end-to-end encryption implementation. Perhaps replace with more modern protocols, such as [Signal](https://en.wikipedia.org/wiki/Signal\_Protocol).
* **Desirable Skills:** Some Javascript coding skills and familiarity with cryptography.
* **Goal/Deliverable:** The ability to have end-to-end encrypted conversations between users. There are various features possible: forward secrecy, online and offline use (do users have to be online at the same time for encryption to be possible), do we store messages on the server, pair or group conversations, encrypted file transfer, etc.

### File uploads and exchanges with OwnCloud

* **Mentors:** Diego Sampaio ([@diego.sampaio](https://github.com/sampaiodiego))  Thomas Müller ([@thomas.muller](https://github.com/DeepDiver1975)) deepdiver1975@gmail.com
* **Description:**  When you upload a file today in Rocket.Chat, your server may be configured to store it on AWS S3,  Google's object storage, MongoDB's GridFS, or local filesystem. This project adds OwnCloud as an official target destination. In addition, since every user of Rocket.Chat may have her/his own OwnCloud server - some way to support file exchanges with those servers will also be interesting. You will be working with top engineers who actually designed and coded these features, from OwnCloud and Rocket.Chat, on this project.
* **Desirable Skills:** Familiarity with PHP and JavaScript development. Familiarity with (and already a user of) Rocket.Chat and OwnCloud definitely a plus.
* **Goal/Deliverable:** Support integrations between OwnCloud and Rocket.Chat as if it was designed-in since the very first day.

### Use of Chromecast as Presentation Room

* **Mentors:** Bradley Hilton ([@graywolf336](https://github.com/graywolf336))
* **Description:** Use Chromecast as presentation output which shows a chat room and will join any Jitsi / WebRTC meetings that are started in it, this way meetings can be started inside Rocket.Chat and the Chromecast can be on a TV/Monitor inside a conference room.
* **Desirable Skills:** Some Javascript coding skills will be required to complete this task. Students with WebRTC knowledge and/or who have already produced Chromecast apps are on a good start. A Chromecast is required for this task.
* **Goal/Deliverable:** Being able to pair a room with Chromecast, displaying it's messages. Chromecast app needs to be able to automatically join a Jitsi/WebRTC video call.

### Integrated Personal Email Gateway

* **Mentors:** Rodrigo Nascimento ([@rodrigo.nascimento](https://github.com/rodrigok))
* **Description:** Add feature to allow automated reply when offline, and forwarding of incoming messages via email.
* **Desirable Skills:** Some Javascript coding skills will be required to complete this task. An understanding of industry standard SMTP and POP protocols, and configuration of standard email servers will be required.
* **Goal/Deliverable:**  Ability for each user to set an away message, and receive any offline messages - in batches per interval, via through email account.

### Create an SDK for Mobile Apps to include a chat inside other apps

* **Mentors:** Rafeal Kellermann ([@rafaelks](https://github.com/rafaelks))
* **Description:** Create an SDK (for iOS and/or Android) to embed in any app that wants to have a chat inside it. It could be useful for support and also for chat in enterprise apps. One example is an app that’s used by all sellers from a company to be able to communicate with each other using Rocket.Chat. Another example is something very similar to Intercom ([https://www.intercom.com/mobile](https://www.intercom.com/mobile))
* **Desirable Skills:** Students will be required to code in either Java for Android SDK or Swift for the iOS SDK. Students will also need to understand how Rocket.Chat communicates over websockets.
* **Goal/Deliverable:** To have an SDK that allows App Developers to embed a chat system inside their own apps using Rocket.Chat servers to deliver messages.
