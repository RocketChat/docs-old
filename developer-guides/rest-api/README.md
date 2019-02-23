# Rocket.Chat REST API

The REST API allows you to control and extend Rocket.Chat with ease.

> **This API is a work in progress, so feel free to test, ask us questions, and submit Pull Requests!**

If you are an end-user and not a dev or a tester, [create a New Feature Request](https://forums.rocket.chat/c/feature-requests) to request new APIs -- and consider [making a donation](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZL94ZE6LGVUSN) to the project.

> All API calls in the documentation are made using `curl`.  However, you are free to use Java / Python / PHP / Golang / Ruby / Swift / Objective-C / Rust / Scala / C# or any other programming languages.

## Production Security Concerns

When calling a production Rocket.Chat server, ensure it is running via HTTPS and has a valid SSL Certificate. The login method requires you to post your username and password in plaintext, which is why we highly suggest only calling the REST login API over HTTPS. Also, few things to note:

- Only call via HTTPS
- Implement a timed authorization token expiration strategy
- Ensure the calling user only has permissions for what they are calling and no more

### Miscellaneous Information

| Url                       | Short Description                                         | Details Page                           |
| :------------------------ | :-------------------------------------------------------- | :------------------------------------- |
| `/api/v1/info`            | Information about the Rocket.Chat server.                 | [Link](miscellaneous/info/)            |
| `/api/v1/directory`       | Search by users or channels on all server.                | [Link](miscellaneous/directory/)       |
| `/api/v1/shield.svg`      | Gets the shield svg(badge) to add in your website.        | [Link](miscellaneous/shield-svg/)      |
| `/api/v1/spotlight`       | Searches for users or rooms that are visible to the user. | [Link](miscellaneous/spotlight/)       |
| `/api/v1/statistics`      | Statistics about the Rocket.Chat server.                  | [Link](miscellaneous/statistics/)      |
| `/api/v1/statistics.list` | Selectable statistics about the Rocket.Chat server.       | [Link](miscellaneous/statistics-list/) |

### Assets

| Url                         | Short Description                                  | Details Page                               |
| :-------------------------- | :------------------------------------------------- | :----------------------------------------- |
| `/api/v1/assets.setAsset`   | Set an asset image by name.                        | [Link](assets/setasset/)                   |
| `/api/v1/assets.unsetAsset` | Unset an asset by name                             | [Link](assets/unsetasset/)                 |

### Authentication

| Url                       | Short Description                                  | Details Page                               |
| :------------------------ | :------------------------------------------------- | :----------------------------------------- |
| `/api/v1/login`           | Authenticate with the REST API.                    | [Link](authentication/login/)              |
| `/api/v1/login`           | Authenticate with google.                          | [Link](authentication/google/)             |
| `/api/v1/login`           | Authenticate with facebook.                        | [Link](authentication/facebook/)           |
| `/api/v1/login`           | Authenticate with twitter.                         | [Link](authentication/twitter/)            |
| `/api/v1/logout`          | Invalidate your REST API authentication token.     | [Link](authentication/logout/)             |
| `/api/v1/me`              | Displays information about the authenticated user. | [Link](authentication/me/)                 |

### Users

| Url                                           | Short Description                                               | Details Page                                 |
| :-------------------------------------------- | :-------------------------------------------------------------- | :------------------------------------------- |
| `/api/v1/users.create`                        | Create a new user.                                              | [Link](users/create/)                        |
| `/api/v1/users.createToken`                   | Create a user authentication token.                             | [Link](users/createtoken/)                   |
| `/api/v1/users.delete`                        | Deletes an existing user.                                       | [Link](users/delete/)                        |
| `/api/v1/users.deleteOwnAccount`              | Deletes your own user.                                          | [Link](users/deleteownaccount/)              |
| `/api/v1/users.forgotPassword`                | Send email to reset your password.                              | [Link](users/forgotpassword/)                |
| `/api/v1/users.generatePersonalAccessToken`   | Generate Personal Access Token.                                 | [Link](users/generatepersonalaccesstoken/)   |
| `/api/v1/users.getAvatar`                     | Gets the URL for a user's avatar.                               | [Link](users/getavatar/)                     |
| `/api/v1/users.getPersonalAccessTokens`       | Gets the user's personal access tokens.                         | [Link](users/getpersonalaccesstokens/)       |
| `/api/v1/users.getPreferences`                | Gets all preferences of user.                                   | [Link](users/get-preferences/)               |
| `/api/v1/users.getPresence`                   | Gets the online presence of a user.                             | [Link](users/getpresence/)                   |
| `/api/v1/users.getUsernameSuggestion`         | Gets a suggestion a new username to user.                       | [Link](users/getusernamesuggestion/)         |
| `/api/v1/users.info`                          | Gets a user's information, limited to the caller's permissions. | [Link](users/info/)                          |
| `/api/v1/users.list`                          | All of the users and their information, limited to permissions. | [Link](users/list/)                          |
| `/api/v1/users.regeneratePersonalAccessToken` | Regenerate a user personal access token.                        | [Link](users/regeneratepersonalaccesstoken/) |
| `/api/v1/users.register`                      | Register a new user.                                            | [Link](users/register/)                      |
| `/api/v1/users.removePersonalAccessToken`     | Remove a personal access token.                                 | [Link](users/removepersonalaccesstoken/)     |
| `/api/v1/users.resetAvatar`                   | Reset a user's avatar                                           | [Link](users/resetavatar/)                   |
| `/api/v1/users.setAvatar`                     | Set a user's avatar                                             | [Link](users/setavatar/)                     |
| `/api/v1/users.setPreferences`                | Set user's preferences                                          | [Link](users/set-preferences/)               |
| `/api/v1/users.setActiveStatus`               | Set a user's active status.                                     | [Link](users/setactivestatus/)               |
| `/api/v1/users.update`                        | Update an existing user.                                        | [Link](users/update/)                        |
| `/api/v1/users.updateOwnBasicInfo`            | Update basic information of own user.                           | [Link](users/updateownbasicinfo/)            |

### Channels

| Url                                           | Short Description                                           | Details Page                                    |
| :-------------------------------------------- | :---------------------------------------------------------- | :---------------------------------------------- |
| `/api/v1/channels.addAll`                     | Adds all of the users on the server to a channel.           | [Link](channels/addall/)                        |
| `/api/v1/channels.addLeader` | Gives the role of Leader for a user in the current channel. | [Link](channels/addleader/) |
| `/api/v1/channels.archive`                    | Archives a channel.                                         | [Link](channels/archive/)                       |
| `/api/v1/channels.cleanHistory`               | Cleans up a channel's history, requires special permission. | [Link](channels/cleanhistory/)                  |
| `/api/v1/channels.close`                      | Removes a channel from a user's list of channels.           | [Link](channels/close/)                         |
| `/api/v1/channels.counters`                   | Gets channel counters.                                      | [Link](channels/counters/)                      |
| `/api/v1/channels.create`                     | Creates a new channel.                                      | [Link](channels/create/)                        |
| `/api/v1/channels.delete`                     | Removes a channel.                                           | [Link](channels/delete/)                       |
| `/api/v1/channels.files`                      | Gets a list of files from a channel.                        | [Link](channels/files/)                         |
| `/api/v1/channels.getAllUserMentionsByChannel`| Gets all the mentions of a channel.                         | [Link](channels/getallusermentionsbychannel/)   |
| `/api/v1/channels.getIntegrations`            | Gets the channel's integration.                             | [Link](channels/getintegrations/)               |
| `/api/v1/channels.history`                    | Retrieves the messages from a channel.                      | [Link](channels/history/)                       |
| `/api/v1/channels.info`                       | Gets a channel's information.                               | [Link](channels/info/)                          |
| `/api/v1/channels.invite`                     | Adds a user to a channel.                                   | [Link](channels/invite/)                        |
| `/api/v1/channels.join`                       | Joins yourself to a channel.                                | [Link](channels/join/)                          |
| `/api/v1/channels.kick`                       | Removes a user from a channel.                              | [Link](channels/kick/)                          |
| `/api/v1/channels.leave`                      | Removes the calling user from a channel.                    | [Link](channels/leave/)                         |
| `/api/v1/channels.list`                       | Retrieves all of the channels from the server.              | [Link](channels/list/)                          |
| `/api/v1/channels.list.joined`                | Gets only the channels the calling user has joined.         | [Link](channels/list-joined/)                   |
| `/api/v1/channels.members`                    | Retrieves all channel users.                                | [Link](channels/members/)                       |
| `/api/v1/channels.messages`                   | Retrieves all channel messages.                             | [Link](channels/messages/)                      |
| `/api/v1/channels.moderators`                 | List all moderators of a channel.                           | [Link](channels/moderators/)                    |
| `/api/v1/channels.online`                     | List all online users of a channel.                         | [Link](channels/online/)                        |
| `/api/v1/channels.open`                       | Adds the channel back to the user's list of channels.       | [Link](channels/open/)                          |
| `/api/v1/channels.removeleader` | Removes the role of Leader for a user in the current channel. | [Link](channels/removeleader/) |
| `/api/v1/channels.rename`                     | Changes a channel's name.                                   | [Link](channels/rename/)                        |
| `/api/v1/channels.roles`                      | Gets the user's roles in the channel.                       | [Link](channels/roles/)                         |
| `/api/v1/channels.setCustomFields`            | Sets a channel's custom fields.                             | [Link](channels/setcustomfields/)               |
| `/api/v1/channels.setAnnouncement`            | Sets a channel's announcement.                              | [Link](channels/setannouncement/)               |
| `/api/v1/channels.setDefault`                 | Sets whether a channel is a default channel or not.         | [Link](channels/setdefault/)                    |
| `/api/v1/channels.setDescription`             | Sets a channel's description.                               | [Link](channels/setdescription/)                |
| `/api/v1/channels.setJoinCode`                | Sets the channel's code required to join it.                | [Link](channels/setjoincode/)                   |
| `/api/v1/channels.setPurpose`                 | Sets a channel's description.                               | [Link](channels/setpurpose/)                    |
| `/api/v1/channels.setReadOnly`                | Sets whether a channel is read only or not.                 | [Link](channels/setreadonly/)                   |
| `/api/v1/channels.setTopic`                   | Sets a channel's topic.                                     | [Link](channels/settopic/)                      |
| `/api/v1/channels.setType`                    | Sets the type of room the channel should be.                | [Link](channels/settype/)                       |
| `/api/v1/channels.unarchive`                  | Unarchives a channel.                                       | [Link](channels/unarchive/)                     |

### Groups

| Url                              | Short Description                                  | Details Page                   |
| :------------------------------- | :------------------------------------------------- | :----------------------------- |
| `/api/v1/groups.archive`         | Archives a private group.                          | [Link](groups/archive/)        |
| `/api/v1/groups.addLeader`       | Gives the role of Leader for a user in the current group. | [Link](groups/addleader/) |
| `/api/v1/groups.close`           | Removes a private group from the list of groups.   | [Link](groups/close/)          |
| `/api/v1/groups.counters`        | Gets group counters.                               | [Link](groups/counters/)       |
| `/api/v1/groups.create`          | Creates a new private group.                       | [Link](groups/create/)         |
| `/api/v1/groups.delete`          | Removes a private group.                           | [Link](groups/delete/)         |
| `/api/v1/groups.files`           | Gets a list of files from a private group.         | [Link](groups/files/)          |
| `/api/v1/groups.history`         | Retrieves the messages from a private group.       | [Link](groups/history/)        |
| `/api/v1/groups.info`            | Gets the information about a private group.        | [Link](groups/info/)           |
| `/api/v1/groups.invite`          | Adds a user to the private group.                  | [Link](groups/invite/)         |
| `/api/v1/groups.kick`            | Removes a user from a private group.               | [Link](groups/kick/)           |
| `/api/v1/groups.leave`           | Removes the calling user from the private group.   | [Link](groups/leave/)          |
| `/api/v1/groups.list`            | List the private groups the caller is part of.     | [Link](groups/list/)           |
| `/api/v1/groups.listAll`         | List all the private groups.                       | [Link](groups/listall/)        |
| `/api/v1/groups.members`         | Gets the users of participants of a private group. | [Link](groups/members/)        |
| `/api/v1/groups.messages`        | Retrieves all group messages.                      | [Link](groups/messages/)       |
| `/api/v1/groups.moderators`      | List all moderators of a group.                    | [Link](groups/moderators/)     |
| `/api/v1/groups.open`            | Adds the private group back to the list of groups. | [Link](groups/open/)           |
| `/api/v1/groups.removeLeader`    | Removes the role of Leader for a user in the current group. | [Link](groups/removeleader/) |
| `/api/v1/groups.rename`          | Changes the name of the private group.             | [Link](groups/rename/)         |
| `/api/v1/groups.roles`           | Gets the user's roles in the private group.        | [Link](groups/roles/)          |
| `/api/v1/groups.setAnnouncement` | Sets a group's announcement.                       | [Link](groups/setannouncement/)|
| `/api/v1/groups.setCustomFields` | Sets private group's custom fields.                | [Link](groups/setcustomfields/)|
| `/api/v1/groups.setDescription`  | Sets a private group's description.                | [Link](groups/setdescription/) |
| `/api/v1/groups.setPurpose`      | Sets a private group's description.                | [Link](groups/setpurpose/)     |
| `/api/v1/groups.setReadOnly`     | Sets whether the room is read only or not.         | [Link](groups/setreadonly/)    |
| `/api/v1/groups.setTopic`        | Sets a private group's topic.                      | [Link](groups/settopic/)       |
| `/api/v1/groups.setType`         | Sets the type of room this group will be.          | [Link](groups/settype/)        |
| `/api/v1/groups.unarchive`       | Unarchives a private group.                        | [Link](groups/unarchive/)      |

### Chat

| Url                                   | Short Description                                                | Details Page                            |
| :------------------------------------ | :--------------------------------------------------------------- | :-------------------------------------- |
| `/api/v1/chat.delete`                 | Deletes an existing chat message.                                | [Link](chat/delete/)                    |
| `/api/v1/chat.getDeletedMessages`     | Retrieves the deleted messages since specific date.              | [Link](chat/getdeletedmessages/)        |
| `/api/v1/chat.getMessage`             | Retrieves a single chat message.                                 | [Link](chat/getmessage/)                |
| `/api/v1/chat.pinMessage`             | Pins a chat message to the message's channel.                    | [Link](chat/pinmessage/)                |
| `/api/v1/chat.postMessage`            | Posts a new chat message.                                        | [Link](chat/postmessage/)               |
| `/api/v1/chat.react`                  | Sets/unsets the user's reaction to an existing chat message.     | [Link](chat/react/)                     |
| `/api/v1/chat.reportMessage`          | Reports a message.                                               | [Link](chat/reportmessage/)             |
| `/api/v1/chat.search`                 | Search for messages in a channel.                                | [Link](chat/search/)                    |
| `/api/v1/chat.starMessage`            | Stars a chat message for the authenticated user.                 | [Link](chat/starmessage/)               |
| `/api/v1/chat.sendMessage`            | Send new chat message.                                           | [Link](chat/sendmessage/)               |
| `/api/v1/chat.unPinMessage`           | Removes the pinned status of the provided chat message.          | [Link](chat/unpinmessage/)              |
| `/api/v1/chat.unStarMessage`          | Removes the star on the chat message for the authenticated user. | [Link](chat/unstarmessage/)             |
| `/api/v1/chat.update`                 | Updates the text of the chat message.                            | [Link](chat/update/)                    |
| `/api/v1/chat.getMessageReadReceipts` | Retrieves message read receipts.                                 | [Link](chat/getmessagereadreceipts/)    |

### IM

| Url                          | Short Description                                             | Details Page                |
| :--------------------------- | :------------------------------------------------------------ | :-------------------------- |
| `/api/v1/im.close`           | Removes a direct message from the list of direct messages.    | [Link](im/close/)           |
| `/api/v1/im.counters`        | Gets counters of direct messages.                             | [Link](im/counters/)        |
| `/api/v1/im.create`          | Create a direct message session with another user.            | [Link](im/create/)          |
| `/api/v1/im.history`         | Retrieves the messages from a direct message.                 | [Link](im/history/)         |
| `/api/v1/im.files`           | Retrieves a list of files from a direct message.              | [Link](im/files/)           |
| `/api/v1/im.members`         | Retrieves the users of participants of a direct message.      | [Link](im/members/)         |
| `/api/v1/im.messages`        | Retrieves the messages from specific direct message.          | [Link](im/messages/)        |
| `/api/v1/im.messages.others` | Retrieves the messages from any direct message in the server. | [Link](im/messages-others/) |
| `/api/v1/im.list`            | List the direct messages the caller is part of.               | [Link](im/list/)            |
| `/api/v1/im.list.everyone`   | List all direct message the caller in the server.             | [Link](im/list-everyone/)   |
| `/api/v1/im.open`            | Adds the direct message back to the list of direct messages.  | [Link](im/open/)            |
| `/api/v1/im.setTopic`        | Sets a direct message topic.                                  | [Link](im/settopic/)        |

### Integrations

| Url                            | Short Description                                             | Details Page                |
| :----------------------------- | :------------------------------------------------------------ | :-------------------------- |
| `/api/v1/integrations.create`  | Creates an integration.                                       | [Link](integration/create/) |
| `/api/v1/integrations.history` | Lists all history of the specified integration.               | [Link](integration/history/)|
| `/api/v1/integrations.list`    | Lists all of the integrations.                                | [Link](integration/list/)   |
| `/api/v1/integrations.remove`  | Removes an integration.                                       | [Link](integration/remove/) |

### Permissions

| Url                             | Short Description                | Details Page                 |
| :------------------------------ | :------------------------------- | :--------------------------  |
| `/api/v1/permissions.listAll`   | Lists permissions on the server. | [Link](permissions/list-all/)|
| `/api/v1/permissions.update`    | Edits permissions on the server. | [Link](permissions/update/)  |

### Roles

| Url                          | Short Description                | Details Page                |
| :--------------------------- | :------------------------------- | :-------------------------- |
| `/api/v1/roles.create`   | Create a new role in the system. | [Link](roles/create/)   |
| `/api/v1/roles.list` | Gets all the roles in the system. | [Link](roles/list/) |
| `/api/v1/roles.addUserToRole` | Assign a role to an user. | [Link](roles/addusertorole/) |

### Push Token

| Url | Method | Short Description | Details Page |
| :--- | :--- | :--- | :--- |
| `/api/v1/push.token`              | `POST`    | Saves push token.                 | [Link](push/push-token/)       |
| `/api/v1/push.token`              | `DELETE`  | Removes push token.               | [Link](push/deletepushtoken/)  |

### Rooms

| Url                              | Short Description                                        | Details Page                    |
| :------------------------------- | :------------------------------------------------------- | :------------------------------ |
| `/api/v1/rooms.cleanHistory`     | Cleans up a room's history, requires special permission. | [Link](rooms/cleanhistory/)     |
| `/api/v1/rooms.favorite`         | Favorite/Unfavorite room.                                | [Link](rooms/favorite/)         |
| `/api/v1/rooms.get`              | Gets rooms.                                              | [Link](rooms/get/)              |
| `/api/v1/rooms.info`             | Gets info from a room.                                   | [Link](rooms/info/)             |
| `/api/v1/rooms.leave`            | Leaves a room.                                           | [Link](rooms/leave/)            |
| `/api/v1/rooms.saveNotification` | Sets the notifications settings of specific channel.     | [Link](rooms/savenotification/) |
| `/api/v1/rooms.upload/:rid`      | Upload a message with attached file.                     | [Link](rooms/upload/)           |

### Command Methods

| Url                     | Short Description                              | Details Page           |
| :---------------------- | :--------------------------------------------- | :--------------------- |
| `/api/v1/commands.get`  | Get specification of the slash command.        | [Link](commands/get/)  |
| `/api/v1/commands.list` | Lists all available slash commands.            | [Link](commands/list/) |
| `/api/v1/commands.run`  | Execute a slash command in the specified room. | [Link](commands/run/)  |

### Emoji Custom

| Url                     | Short Description                              | Details Page               |
| :---------------------- | :--------------------------------------------- | :---------------------     |
| `/api/v1/emoji-custom`  | List the custom emojis available.              | [Link](emoji-custom/get/)  |

### Settings

| Url                               | Method | Short Description                                   | Details Page                                    |
| :-------------------------------- | :----- | :-------------------------------------------------- | :---------------------------------------------- |
| `/api/v1/settings`                | `GET`  | Lists all private settings.                         | [Link](settings/get/)                           |
| `/api/v1/settings.public`         | `GET`  | Lists all public settings.                          | [Link](settings/public/)                    |
| `/api/v1/settings.oauth`          | `GET`  | Return list of all available oauth services.        | [Link](settings/oauth/) |
| `/api/v1/service.configurations`  | `GET`  | Lists all service configurations.                   | [Link](settings/service-configuration/)    |
| `/api/v1/settings/:_id`           | `GET`  | Gets a setting.                                     | [Link](settings/get-by-id/)                     |
| `/api/v1/settings/:_id`           | `POST` | Updates a setting.                                  | [Link](settings/update/)                        |

### Subscriptions

| Url                               | Method  | Short Description                  | Details Page                      |
| :-------------------------------- | :------ | :--------------------------------- | :-------------------------------- |
| `/api/v1/subscriptions.get`       |  `GET`  | Get all subscriptions.             | [Link](subscriptions/get/)                      |
| `/api/v1/subscriptions.getOne`    | `GET`   | Get the subscription by room Id.   | [Link](subscriptions/getone/)     |
| `/api/v1/subscriptions.read`      | `POST`  |  Mark a room as read.              | [Link](subscriptions/read/)       |
| `/api/v1/subscriptions.unread`    | `POST`  | Mark messages as unread.           | [Link](subscriptions/unread/)     |

### Video Conference

| Url                                              | Short Description                                           | Details Page                                   |
| :----------------------------------------------- | :---------------------------------------------------------- | :-----------------------------------------     |
| `/api/v1/video-conference/jitsi.update-timeout`  | Updates the timeout of Jitsi video conference in a channel. | [Link](video-conference/jitsi-update-timeout)  |

## Language specific wrappers

### Java

- [rocket-chat-rest-client](https://github.com/baloise/rocket-chat-rest-client)

### PHP

- [rocket-chat-rest-client](https://github.com/Fab1en/rocket-chat-rest-client)

### Python

- [rocketchat_API](https://github.com/jadolg/rocketchat_API)

### Ruby

- [rocketchat-ruby](https://github.com/abrom/rocketchat-ruby)
