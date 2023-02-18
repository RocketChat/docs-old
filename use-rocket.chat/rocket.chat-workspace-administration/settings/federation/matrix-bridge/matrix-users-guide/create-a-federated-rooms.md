# Rocket.Chat Federated Communication

## Creating a Federated Channel

<figure><img src="../../../../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1).jpg" alt=""><figcaption></figcaption></figure>

You can create federated [Channels](../../../../../user-guides/rooms/channels/) having both Rocket.Chat and other federated users.

To create a federated channel,

* Start by [creating a channel](../../../../../user-guides/rooms/channels/create-a-new-channel.md) within your Rocket.Chat workspace
* Enable **Federated**
* **Add members** if any or keep empty
* **Create**

{% hint style="info" %}
**Important**:&#x20;

* Federated Channels can not be _Encrypted, Read-Only, or Broadcasted_ for now_._
* You cannot create [Threads](../../../../../user-guides/rooms/threads/) or [Discussions](../../../../../user-guides/rooms/discussions/) within federated Channels.
{% endhint %}

## Creating a Direct Message 1:1

<figure><img src="../../../../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1).jpg" alt=""><figcaption></figcaption></figure>

You can create a [Direct Message](../../../../../user-guides/rooms/direct-messages/) with other federated users.

Create a federated DM with these steps:

* Start- by [creating a 1:1 Direct Message](../../../../../user-guides/rooms/direct-messages/create-a-new-direct-message-1-1.md)&#x20;
* Set the federated user you wish to message following the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax).

## Creating a Multi-user Direct Message

Using [Multi Direct Message](broken-reference), you can send Direct Messages to multiple users(federated or not) at once.

To create a federated Multi Direct Message:

* [Create a Multi-user Direct Message](broken-reference)&#x20;
* Select users, you want to send messages to following the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax).

## Slash commands

You can also use an available slash command to create and invite users for Direct Messages rooms. The general syntax for the available slash command is:

```
/federation dm @username:server.com
```

Where:

* `/federation`: The slash command itself.
* `dm`: The command you want to execute, _dm_ is the only one available at this point.
* `@username:server.com`: The external user you want to invite, using the [syntax to invite external users.](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax)

## Creating a Multi-user Direct Message using slash command

<figure><img src="../../../../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1).jpg" alt=""><figcaption></figcaption></figure>

To create Multi-user Direct Messages using slash commands you need to open the message box in any channel and type the following command using the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax):

```
/federation dm @username1:server.com @username2:server2.com
```

## Creating a Direct Message 1:1 using slash command

To create a 1:1 Direct Message using slash commands you need to open the message box in any channel and type the following command using the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax):

```
/federation dm @username1:server.com
```
