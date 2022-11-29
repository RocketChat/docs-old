# Federation

## Introduction

Federation allows for an unlimited number of workspaces to communicate with each other. Federating a workspace makes it visible to other workspaces over the federated network, and this makes it possible for messages and files to be shared with other Federation-enabled servers.

Rocket.Chat provides Federation using [Matrix Bridge](https://matrix.org/) and the [Rocket.Chat Federation Network](federation/rocket.chat-federation.md).

{% hint style="info" %}
We recommend federating using [Matrix Bridge](federation/matrix-bridge/)
{% endhint %}

See the guide on configuring federation:

{% content-ref url="federation/matrix-bridge/" %}
[matrix-bridge](federation/matrix-bridge/)
{% endcontent-ref %}

{% content-ref url="federation/rocket.chat-federation.md" %}
[rocket.chat-federation.md](federation/rocket.chat-federation.md)
{% endcontent-ref %}

## Features

* <mark style="color:green;">**Current**</mark>
  * Invite users from remote servers
  * Direct chats between servers
  * Private and broadcast rooms with remote users from any number of servers
  * Read receipts, notifications, and alerts distributed to remote servers
  * Mute/Unmute remote users
  * Share files among servers
* <mark style="color:yellow;">**Confirmed Next Features**</mark>
  * Encrypted rooms
  * Whitelist servers to communicate with
  * Better federation set-up process, with helpers to validate the configuration
  * Public rooms with remote users from any number of servers
