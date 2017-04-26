---
order: 6
---

# Rocket.Chat REST API

The REST API allows you to control and extend Rocket.Chat with ease.

> **This API is in BETA, however feel free to test, ask us questions, and submit Pull Requests!**

If you are an end-user and not a dev or a tester, [create an issue](https://github.com/RocketChat/Rocket.Chat/issues/new) to request new APIs -- and consider [make a donation](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZL94ZE6LGVUSN) to the project.

> All API calls in the documentation are made using `curl`.  However, you are free to use Java / Python / PHP / Golang / Ruby / Swift / Objective-C / Rust / Scala / C# or any other programming languages.

## Production Security Concerns
When calling a production Rocket.Chat server, ensure it is running via HTTPS and has a valid SSL Certificate. The login method requires you to post your username and password in plaintext, which is why we highly suggest only calling the REST login api over HTTPS. Also, few things to note:

* Only call via HTTPS
* Implement a timed authorization token expiration strategy
* Ensure the calling user only has permissions for what they are calling an no more

### Miscellaneous Information
| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/info` | Information about the Rocket.Chat server. | [Link](Miscellaneous/info.md) |

### Authentication
| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/login` | Authenticate with the REST API. | [Link](Authentication/login.md) |
| `/api/v1/logout` | Invalidate your REST API authentication token. | [Link](Authentication/logout.md) |
| `/api/v1/me` | Displays information about the authenticated user. | [Link](Authentication/me.md) |

### Users
| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/users.create` | Create a new user. | [Link](Users/create.md) |
| `/api/v1/users.delete` | Deletes an existing user. | [Link](Users/delete.md) |
| `/api/v1/users.getPresence` | Gets the online presence of the a user. | [Link](Users/getPresence.md) |
| `/api/v1/users.info` | Gets a user's information, limited to the caller's permissions. | [Link](Users/info.md) |
| `/api/v1/users.list` | All of the users and their information, limited to permissions. | [Link](Users/list.md) |
| `/api/v1/users.setAvatar` | Set a user's avatar | [Link](Users/setAvatar.md) |
| `/api/v1/users.update` | Update an existing user. | [Link](Users/update.md) |

### Channels
| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/channels.addAll` | Adds all of the users on the server to a channel. | [Link](Channels/addAll.md) |
| `/api/v1/channels.archive` | Archives a channel. | [Link](Channels/archive.md) |
| `/api/v1/channels.cleanHistory` | Cleans up a channel's history, requires special permission. | [Link](Channels/cleanHistory.md) |
| `/api/v1/channels.close` | Removes a channel from a user's list of channels. | [Link](Channels/close.md) |
| `/api/v1/channels.create` | Creates a new channel. | [Link](Channels/create.md) |
| `/api/v1/channels.getIntegrations` | Gets the channel's integration. | [Link](Channels/getIntegrations.md)
| `/api/v1/channels.history` | Retrieves the messages from a channel. | [Link](Channels/history.md) |
| `/api/v1/channels.info` | Gets a channel's information. | [Link](Channels/info.md) |
| `/api/v1/channels.invite` | Adds a user to a channel. | [Link](Channels/invite.md) |
| `/api/v1/channels.kick` | Removes a user from a channel. | [Link](Channels/kick.md) |
| `/api/v1/channels.leave` | Removes the calling user from a channel. | [Link](Channels/leave.md) |
| `/api/v1/channels.list` | Retrives all of the channels from the server. | [Link](Channels/list.md) |
| `/api/v1/channels.list.joined` | Gets only the channels the calling user has joined. | [Link](Channels/list.joined.md) |
| `/api/v1/channels.open` | Adds the channel back to the user's list of channels. | [Link](Channels/open.md) |
| `/api/v1/channels.rename` | Changes a channel's name. | [Link](Channels/rename.md) |
| `/api/v1/channels.setDescription` | Sets a channel's description. | [Link](Channels/setDescription.md) |
| `/api/v1/channels.setJoinCode` | Sets the channel's code required to join it. | [Link](Channels/setJoinCode.md) |
| `/api/v1/channels.setPurpose` | Sets a channel's description. | [Link](Channels/setPurpose.md) |
| `/api/v1/channels.setReadOnly` | Sets whether a channel is read only or not. | [Link](Channels/setReadOnly.md) |
| `/api/v1/channels.setTopic` | Sets a channel's topic. | [Link](Channels/setTopic.md) |
| `/api/v1/channels.setType` | Sets the type of room the channel should be. | [Link](Channels/setType.md) |
| `/api/v1/channels.unarchive` | Unarchives a channel. | [Link](Channels/unarchive.md) |

### Groups
| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/groups.archive` | Archives a private group. | [Link](Groups/archive.md) |
| `/api/v1/groups.close` | Removes a private group from the list of groups. | [Link](Groups/close.md) |
| `/api/v1/groups.create` | Creates a new private group. | [Link](Groups/create.md) |
| `/api/v1/groups.history` | Retrieves the messages from a private group. | [Link](Groups/history.md) |
| `/api/v1/groups.info` | Gets the information about a private group. | [Link](Groups/info.md) |
| `/api/v1/groups.invite` | Adds a user to the private group. | [Link](Groups/invite.md) |
| `/api/v1/groups.kick` | Removes a user from a private group. | [Link](Groups/kick.md) |
| `/api/v1/groups.leave` | Removes the calling user from the private group. | [Link](Groups/leave.md) |
| `/api/v1/groups.list` | List the private groups the caller is part of. | [Link](Groups/list.md) |
| `/api/v1/groups.open` | Adds the private group back to the list of groups. | [Link](Groups/open.md) |
| `/api/v1/groups.rename` | Changes the name of the private group. | [Link](Groups/rename.md) |
| `/api/v1/groups.setDescription` | Sets a private group's description. | [Link](Groups/setDescription.md) |
| `/api/v1/groups.setPurpose` | Sets a private group's description. | [Link](Groups/setPurpose.md) |
| `/api/v1/groups.setReadOnly` | Sets whether the room is read only or not. | [Link](Groups/setReadOnly.md) |
| `/api/v1/groups.setTopic` | Sets a private group's topic. | [Link](Groups/setTopic.md) |
| `/api/v1/groups.setType` | Sets the type of room this group will be. | [Link](Groups/setType.md) |
| `/api/v1/groups.unarchive` | Unarchives a private group. | [Link](Groups/unarchive.md) |

### Chat
| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/chat.delete` | Deletes a chat message. | [Link](Chat/delete.md) |
| `/api/v1/chat.postMessage` | Posts a new chat message. | [Link](Chat/postMessage.md) |
| `/api/v1/chat.update` | Updates the text of the chat message. | [Link](Chat/update.md) |

### IM
| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/im.close` | Removes a direct message from the list of direct messages. | [Link](Im/close.md) |
| `/api/v1/im.history` | Retrieves the messages from a direct message. | [Link](Im/history.md) |
| `/api/v1/im.messages.others` | Retrieves the messages from any direct message in the server. | [Link](IM/messages.others.md) |
| `/api/v1/im.list` | List the direct messages the caller is part of. | [Link](Im/list.md) |
| `/api/v1/im.list.everyone` | List all direct message the caller in the server. | [Link](Im/list.everyone.md) |
| `/api/v1/im.open` | Adds the direct message back to the list of direct messages. | [Link](Im/open.md) |
| `/api/v1/im.setTopic` | Sets a direct message topic. | [Link](Im/setTopic.md) |

### Settings
| Url | Method | Short Description | Details Page |
| :--- | :--- | :--- | :--- |
| `/api/v1/settings/:_id` | `GET` | Gets a setting. | [Link](Settings/get.md) |
| `/api/v1/settings/:_id` | `POST` | Updates a setting. | [Link](Settings/update.md) |

## Language specific wrappers
### Java
* [rocket-chat-rest-client](https://github.com/baloise/rocket-chat-rest-client)

### PHP
* [rocket-chat-rest-client](https://github.com/Fab1en/rocket-chat-rest-client)

### Python
* [rocketchat_API](https://github.com/jadolg/rocketchat_API)

### Ruby
* [rocketchat-ruby](https://github.com/abrom/rocketchat-ruby)
