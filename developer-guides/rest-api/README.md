# Rocket.Chat REST API

The REST API allows you to control and extend Rocket.Chat with ease.

> **This API is a work in progress, so feel free to test, ask us questions, and submit Pull Requests!**

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
| `/api/v1/info` | Information about the Rocket.Chat server. | [Link](Miscellaneous/info/) |

### Authentication

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/login` | Authenticate with the REST API. | [Link](authentication/login/) |
| `/api/v1/logout` | Invalidate your REST API authentication token. | [Link](authentication/logout/) |
| `/api/v1/me` | Displays information about the authenticated user. | [Link](authentication/me/) |

### Users

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/users.create` | Create a new user. | [Link](users/create/) |
| `/api/v1/users.createToken` | Create a user authentication token. | [Link](users/createToken/) |
| `/api/v1/users.delete` | Deletes an existing user. | [Link](users/delete/) |
| `/api/v1/users.getAvatar` | Gets the URL for a user's avatar. | [Link](users/getAvatar/) |
| `/api/v1/users.getPresence` | Gets the online presence of the a user. | [Link](users/getPresence/) |
| `/api/v1/users.info` | Gets a user's information, limited to the caller's permissions. | [Link](users/info/) |
| `/api/v1/users.list` | All of the users and their information, limited to permissions. | [Link](users/list/) |
| `/api/v1/users.register` | Register a new user. | [Link](users/register/) |
| `/api/v1/users.resetAvatar` | Reset a user's avatar | [Link](users/resetAvatar/) |
| `/api/v1/users.setAvatar` | Set a user's avatar | [Link](users/setAvatar/) |
| `/api/v1/users.update` | Update an existing user. | [Link](users/update/) |

### Channels

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/channels.addAll` | Adds all of the users on the server to a channel. | [Link](channels/addAll/) |
| `/api/v1/channels.archive` | Archives a channel. | [Link](channels/archive/) |
| `/api/v1/channels.cleanHistory` | Cleans up a channel's history, requires special permission. | [Link](channels/cleanHistory/) |
| `/api/v1/channels.close` | Removes a channel from a user's list of channels. | [Link](channels/close/) |
| `/api/v1/channels.create` | Creates a new channel. | [Link](channels/create/) |
| `/api/v1/channels.getIntegrations` | Gets the channel's integration. | [Link](channels/getIntegrations/)
| `/api/v1/channels.history` | Retrieves the messages from a channel. | [Link](channels/history/) |
| `/api/v1/channels.info` | Gets a channel's information. | [Link](channels/info/) |
| `/api/v1/channels.invite` | Adds a user to a channel. | [Link](channels/invite/) |
| `/api/v1/channels.kick` | Removes a user from a channel. | [Link](channels/kick/) |
| `/api/v1/channels.leave` | Removes the calling user from a channel. | [Link](channels/leave/) |
| `/api/v1/channels.list` | Retrives all of the channels from the server. | [Link](channels/list/) |
| `/api/v1/channels.list.joined` | Gets only the channels the calling user has joined. | [Link](channels/list-joined/) |
| `/api/v1/channels.open` | Adds the channel back to the user's list of channels. | [Link](channels/open/) |
| `/api/v1/channels.rename` | Changes a channel's name. | [Link](channels/rename/) |
| `/api/v1/channels.setDescription` | Sets a channel's description. | [Link](channels/setDescription/) |
| `/api/v1/channels.setJoinCode` | Sets the channel's code required to join it. | [Link](channels/setJoinCode/) |
| `/api/v1/channels.setPurpose` | Sets a channel's description. | [Link](channels/setPurpose/) |
| `/api/v1/channels.setReadOnly` | Sets whether a channel is read only or not. | [Link](channels/setReadOnly/) |
| `/api/v1/channels.setTopic` | Sets a channel's topic. | [Link](channels/setTopic/) |
| `/api/v1/channels.setType` | Sets the type of room the channel should be. | [Link](channels/setType/) |
| `/api/v1/channels.unarchive` | Unarchives a channel. | [Link](channels/unarchive/) |

### Groups

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/groups.archive` | Archives a private group. | [Link](groups/archive/) |
| `/api/v1/groups.close` | Removes a private group from the list of groups. | [Link](groups/close/) |
| `/api/v1/groups.create` | Creates a new private group. | [Link](groups/create/) |
| `/api/v1/groups.history` | Retrieves the messages from a private group. | [Link](groups/history/) |
| `/api/v1/groups.info` | Gets the information about a private group. | [Link](groups/info/) |
| `/api/v1/groups.invite` | Adds a user to the private group. | [Link](groups/invite/) |
| `/api/v1/groups.kick` | Removes a user from a private group. | [Link](groups/kick/) |
| `/api/v1/groups.leave` | Removes the calling user from the private group. | [Link](groups/leave/) |
| `/api/v1/groups.list` | List the private groups the caller is part of. | [Link](groups/list/) |
| `/api/v1/groups.open` | Adds the private group back to the list of groups. | [Link](groups/open/) |
| `/api/v1/groups.rename` | Changes the name of the private group. | [Link](groups/rename/) |
| `/api/v1/groups.setDescription` | Sets a private group's description. | [Link](groups/setDescription/) |
| `/api/v1/groups.setPurpose` | Sets a private group's description. | [Link](groups/setPurpose/) |
| `/api/v1/groups.setReadOnly` | Sets whether the room is read only or not. | [Link](groups/setReadOnly/) |
| `/api/v1/groups.setTopic` | Sets a private group's topic. | [Link](groups/setTopic/) |
| `/api/v1/groups.setType` | Sets the type of room this group will be. | [Link](groups/setType/) |
| `/api/v1/groups.unarchive` | Unarchives a private group. | [Link](groups/unarchive/) |

### Chat

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/chat.delete` | Deletes an existing chat message. | [Link](chat/delete/) |
| `/api/v1/chat.getMessage` | Retrieves a single chat message. | [Link](chat/getMessage/) |
| `/api/v1/chat.pinMessage` | Pins a chat message to the message's channel. | [Link](chat/pinMessage/) |
| `/api/v1/chat.postMessage` | Posts a new chat message. | [Link](chat/postMessage/) |
| `/api/v1/chat.react` | Sets/unsets the user's reaction to an existing chat message. | [Link](chat/react/) |
| `/api/v1/chat.starMessage` | Stars a chat message for the authenticated user. | [Link](chat/starMessage/) |
| `/api/v1/chat.unPinMessage` | Removes the pinned status of the provided chat message. | [Link](chat/unPinMessage/) |
| `/api/v1/chat.unStarMessage` | Removes the star on the chat message for the authenticated user. | [Link](chat/unStarMessage/) |
| `/api/v1/chat.update` | Updates the text of the chat message. | [Link](chat/update/) |

### IM

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/im.close` | Removes a direct message from the list of direct messages. | [Link](im/close/) |
| `/api/v1/im.history` | Retrieves the messages from a direct message. | [Link](im/history/) |
| `/api/v1/im.messages.others` | Retrieves the messages from any direct message in the server. | [Link](im/messages-others/) |
| `/api/v1/im.list` | List the direct messages the caller is part of. | [Link](im/list/) |
| `/api/v1/im.list.everyone` | List all direct message the caller in the server. | [Link](im/list-everyone/) |
| `/api/v1/im.open` | Adds the direct message back to the list of direct messages. | [Link](im/open/) |
| `/api/v1/im.setTopic` | Sets a direct message topic. | [Link](im/setTopic/) |

### Settings

| Url | Method | Short Description | Details Page |
| :--- | :--- | :--- | :--- |
| `/api/v1/settings/:_id` | `GET` | Gets a setting. | [Link](settings/get/) |
| `/api/v1/settings/:_id` | `POST` | Updates a setting. | [Link](settings/update/) |

## Language specific wrappers
### Java
* [rocket-chat-rest-client](https://github.com/baloise/rocket-chat-rest-client)

### PHP
* [rocket-chat-rest-client](https://github.com/Fab1en/rocket-chat-rest-client)

### Python
* [rocketchat_API](https://github.com/jadolg/rocketchat_API)

### Ruby
* [rocketchat-ruby](https://github.com/abrom/rocketchat-ruby)
