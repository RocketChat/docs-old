# Roles in Rocket.Chat

Roles in Rocket.Chat makes it easy for you to manage, control and secure access to resources and features.

A Role can be tied to one or more [**Permissions**](../../use-rocket.chat/workspace-administration/permissions.md) allowing different users to have different levels of access based on the role assigned to them by the workspace Admin.

As a Rocket.Chat workspace administrator, you can assign certain privileges to users, such as the ability to send messages or manage channels. By assigning roles and permissions, it is possible to control and limit the actions of a user, ensuring that they are only able to access and perform the action that they are authorized to do so.

This document aims at listing out the various Roles in Rocket.Chat using the following categories:

* [Administrator Role](./#rocket.chat-administrator-role)
* [User Roles](./#rocket.chat-user-roles)
* [Omnichannel Roles](./#rocket.chat-omnichannel-roles)
* [Marketplace Roles](./#rocket.chat-marketplace-roles)

## Rocket.Chat Administrator Role

A Rocket.Chat Administrator has the `Admin` role, which gives them full access to the entire Rocket.Chat workspace.

They can manage both [workspace-administration](../../use-rocket.chat/workspace-administration/ "mention") and [omnichannel](../../use-rocket.chat/omnichannel/ "mention") settings.

## Rocket.Chat User Roles

Rocket.Chat users can have one or more roles, allowing them to perform the various actions granted by the Role's permissions.

| Role          | Description                                                                                                                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user`        | The `user` role is the most common role in Rocket.Chat. It serves as a standard role for all members in a Rocket.Chat instance. [Users ](../../use-rocket.chat/user-guides/)can join [rooms](../../use-rocket.chat/user-guides/rooms/), send messages, upload files, and participate in all forms of communication. |
| `bot`         | [Bots ](../../use-rocket.chat/workspace-administration/settings/bots.md)are automated users that can be programmed to perform specific tasks, such as sending messages, answering questions, and triggering notifications.                                                                                          |
| `guest`       | Guest users are non-registered users who have access to your Rocket.Chat instance public channels.                                                                                                                                                                                                                  |
| `anonymous`   | Unauthenticated visitors on your Rocket.Chat workspace. Anonymous users do not have a specified username.                                                                                                                                                                                                           |
| `app`         | Automated users that are used by Rocket.Chat Apps from the [rocket.chat-marketplace](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/ "mention")                                                                                                                                                      |
| `Owner`       | A [Channel ](../../use-rocket.chat/user-guides/rooms/channels/)owner is a user designated as the owner of a specific channel. The channel owner has the ability to manage the channel, including controlling access to the channel, editing channel settings, and managing messages within the channel.             |
| `Leader`      | A channel Leader gets pinned on the top of a channel and they can receive 1:1 messages from other channel users.                                                                                                                                                                                                    |
| `Moderator`   | Moderators have the ability to manage messages, delete messages, and ban users in a specific channel.                                                                                                                                                                                                               |
| `auditor`     | <p>Gives a user the ability to view and <a href="../../use-rocket.chat/message-auditing-log.md">audit all messages</a> within the workspace.<br>Users with <code>auditor</code> role alone cannot send messages.</p>                                                                                                |
| `auditor-log` | <p>The <code>auditor-log</code> role gives a user the ability to see <a href="../../use-rocket.chat/message-auditing-log.md">logs about all audited messages</a> with timestamps and by who.<br>Users with just the<code>auditor-log</code> role cannot send messages.</p>                                          |

## Rocket.Chat Omnichannel Roles

[Omnichannel](../../use-rocket.chat/omnichannel/)-related Roles give Rocket.Chat users have the ability to interact with or manage various Omnichannel features.

| Role               | Description                                                                                                                                                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Livechat Agent`   | Live Chat [Agents](../../use-rocket.chat/omnichannel/agents.md) are responsible for handling visitors' inquiries and support requests through [Omnichannel Live Chat](../../use-rocket.chat/omnichannel/livechat-widget-installation.md). |
| `Livechat Manager` | Live Chat [Managers ](../../use-rocket.chat/omnichannel/managers.md)have the ability to manage Livechat [Agents](../../use-rocket.chat/omnichannel/agents.md) and all other [Omnichannel ](../../use-rocket.chat/omnichannel/)features.   |
| `livechat-monitor` | Users with the `livechat-monitor` role can view and [monitor ](../../use-rocket.chat/omnichannel/monitors.md)Live Chat interactions and analytics.                                                                                        |

{% hint style="info" %}
You can create and manage custom Roles with specified permissions tailored to your needs. Learn more about Rocket.Chat Roles here [#roles](../../use-rocket.chat/workspace-administration/permissions.md#roles "mention")
{% endhint %}

### Rocket.Chat Marketplace Roles

{% content-ref url="marketplace-roles.md" %}
[marketplace-roles.md](marketplace-roles.md)
{% endcontent-ref %}
