# Creating rooms

## Creating a channel/group (Enterprise edition only)

Start [creating a channel in Rocket.Chat](https://docs.rocket.chat/guides/user-guides/rooms/channels/create-a-new-channel) (make sure the Federated option is enabled as in the image below).

You can either create the channel with no users or invite them at the moment of the creation.

\
**Important**: By enabling this _Federated_ option, the _Encrypted, Read-Only, and Broadcast_ are not available. We do not support those channels as federated channels at this moment.

![Create a Federated Channel](<../../../../../../../.gitbook/assets/Federation\_Create Channel (1).png>)

## Creating a Direct Message 1:1 (Enterprise edition only)

Start [creating a 1:1 Direct Message](../../../../../../user-guides/rooms/direct-messages/create-a-new-direct-message-1-1.md), and make sure you are following the [syntax to invite external users](invite-a-federated-user.md#invite-external-users-syntax).

## Creating a Multi-user Direct Message (Enterprise edition only)

Start [creating a Multi-user Direct Message](../../../../../../user-guides/rooms/direct-messages/direct-messages-between-multiple-users.md), and make sure you are following the [syntax to invite external users](invite-a-federated-user.md#invite-external-users-syntax).

## Slash commands

You can also use an available slash command to create and invite users for Direct Messages rooms. The general syntax for the available slash command is:

```
/federation dm @username:server.com
```

Where:

* `/federation`: The slash command itself.
* `dm`: The command you want to execute, _dm_ is the only one available at this point.
* `@username:server.com`: The external user you want to invite, using the [syntax to invite external users.](invite-a-federated-user.md#invite-external-users-syntax)

## Creating a Multi-user Direct Message using slash command (Enterprise edition only)

To create Multi-user Direct Messages using slash commands you need to open the message box in any channel and type the following command using the [syntax to invite external users](invite-a-federated-user.md#invite-external-users-syntax):

```
/federation dm @username1:server.com @username2:server2.com
```

## Creating a Direct Message 1:1 using slash command

To create a 1:1 Direct Message using slash commands you need to open the message box in any channel and type the following command using the [syntax to invite external users](invite-a-federated-user.md#invite-external-users-syntax):

```
/federation dm @username1:server.com
```
