# Permission

Rocket.Chat has a vast and customizable permissions system. Most of the actions a user can make requires a certain permission so you can customize what users can do and see.

You can find the permission grid under Administration -> Permissions.

Permission changes are immediate and transparent. Users do not need to logout, login or refresh to change permissions.

## Roles

A `Role` is a set of permissions that can be given to users. Rocket.Chat already comes with a set of default roles that can be edited. You can also create new roles for users.

When someone is registered in a Rocket.Chat server, it will normally receive the `user`. If the user is a bot or a guest from a livechat channel, it can receive different roles. Also the first user of a server always receives the role of `admin`.

Roles can have different scopes. Currently we have two scopes `Global` and `Rooms`. The permissions of the `Global` roles are valid for the whole server, while the `Rooms` roles only applies to individual channels, where a user have to be elected to that role in that channel.

An example of `Global` role would be an `admin`, that have permissions valid for the whole server, while a `moderator` that have a `Rooms` role would have permissions only in a channel that they were elected for that role.

Also, by default roles are shown as little tags on the side of a username on messages.

### Default Roles

- **admin** `(Global)` - Have access to all settings and administrator tools.
- **moderator** `(Rooms)` - Have moderation permissions for a channel. Has to be elected by a channel owner.
- **owner** `(Rooms)` - Have owner permissions for a channel. When a user creates a channel they become the owner of that channel. They can also elect more owners for that channel.
- **user** `(Global)` - Normal user rights. Most users receive this role when registering.
- **bot** `(Global)` - Special Role for bot users, with some permissions related to bot functionality.
- **leader** `(Rooms)` - it doesn't have any special permissions, but is used when setting a `leader` to a channel. Leaders appear on the header of a channel.
- **anonymous** `(Global)` - unauthenticated users that access the server when the `Allow Anonymous Read` setting is activated.
- **guest** `(Global)` - anonymous users that want to write and participate in channels when the `Allow Anonymous Read` and `Allow Anonymous Write` settings are activated.
- **livechat-agent** `(Global)` - Agents of livechat. They can answer to livechat requests.
- **livechat-manager** `(Global)` - Manager of livechat, they can manage agents and guest.
- **livechat-guest** `(Global)` - Users coming from a livechat channel.

## Permissions Available

|  Permission    | Purpose
|  :---  | :----
| access-mailer | Permission to use the [Mailer Tool](../email/mailer). Accessible from Administration -> Mailer.
| access-permissions | Permission to create and edit roles and permissions. Accessible from Administration -> Permissions.
| add-oauth-service | Permission to manage different OAuth services and apps. Accessible from Administration -> OAuth Apps.
| add-user-to-any-c-room | Permission to add a user to a public channel.
| add-user-to-any-p-room | Permission to add a user to a private channel.
| add-user-to-joined-room | Permission to add a user to a joined channel.
| archive-room | Permission to archive a channel.
| assign-admin-role | Permission to promote user to Admin. Requires view-user-administration permission. Accessible from Administration -> Users.
| auto-translate | Permission to use the [Auto Translate Tool](../google-cloud/auto-translate). Accessible from Administration -> Message -> Auto Translate.
| ban-user | Permission to ban a user.
| bulk-create-c | Permission to bulk create public channels.
| bulk-register-user | Permission to bulk add users.
| clean-channel-history | Permission to prune a channel's messages and/or files.
| close-livechat-room | Permission to close your own live chat channels.
| close-others-livechat-room | Permission to close others live chat channels .
| create-c | Permission to create public channels.
| create-d | Permission to start direct messages.
| create-p | Permission to create private groups.
| create-user | Permission to create new users. Accessible from Administration -> Users. Click the + sign found on the top right hand corner of the Users list to create a new user.
| delete-c | Permission to delete public channels.
| delete-d | Permission to delete direct messages.
| delete-message | Permission to delete a message within a channel. See [deleting messages](../../user-guides/messaging/#deleting-messages).
| delete-p | Permission to delete private channels.
| delete-user | Permission to delete users.
| edit-message | Permission to edit a message. See [editing messages](../../user-guides/messaging/#editing-messages).
| edit-other-user-active-status | Permission to enable or disable other accounts. Accessible from Administration -> Users.
| edit-other-user-info | Permission to change other user's name, username or email address. Accessible from Administration -> Users.
| edit-other-user-password | Permission to modify other user's passwords. Requires edit-other-user-info permission. Accessible from Administration -> Users.
| edit-privileged-setting | Permission to edit privileged settings.
| edit-room | Permission to edit a room's name, topic, type (private or public status) and status (active or archived).
| edit-room-retention-policy | Permission to edit's a room's retention policy.
| force-delete-message | Permission to forcefully delete messages, independent of any deletion blocking setting.
| join-without-join-code | Permission to bypass join codes when entering a channel with a join code set.
| mail-messages | Permission to use the "Mail Messages" tool in the channel actions menu.
| manage-apps | Permission to manage all apps. Accessible from Administration -> Apps.
| manage-assets | Permission to manage assets. Must also be admin Accessible from Administration -> Assets.
| manage-emoji | Permission to add custom emojis to the server. Accessible from Administration -> Custom Emoji.
| manage-integrations | Permission to manage all integrations. Accessible from Administration -> Integrations.
| manage-oauth-apps | Permission to manage OAuth apps. Accessible from Administration -> OAuth.
| manage-own-integrations | User can create and edit own integration - webhooks.
| manage-sounds | Permission to manage sounds. Accessible from Administration -> Custom Sounds.
| mention-all | Permission to mention everyone in a channel.
| mute-user | Permission to mute other users in the same channel.
| pin-message | Permission to pin a message in a channel.
| post-readonly | Permission to post messages on read only channels.
| preview-c-room | Permission to preview public channels.
| remove-user | Permission to remove users from channels.
| run-import | Permission to use the data importer tools. Must also be an admin. Accessible from Administration -> Import.
| run-migration | Permission to run migrations.
| save-others-livechat-room-info | Permission to add additional information to both the visitor and livechat rooms.
| send-many-messages | Permission to bypasses rate limit of 5 messages per second.
| set-leader | Permission to set leaders for channels
| set-moderator | Permission to set moderators for channels.
| set-owner | Permission to set other users as owner of a public channel.
| set-react-when-readonly | Permission to react to messages in only channels.
| snippet-message | Permission to create message snippets.
| unarchive-room | Permission to unarchive channels.
| user-generate-access-token | Permission to create authorization tokens for users.
| view-broadcast-member-list | Permission to view the list of users in a broadcast channel.
| view-c-room | Permission to view public channels.
| view-d-room | Permission to view direct messages. Does not affect ability to begin / start a direct message with another user.
| view-full-other-user-info | Permission to view full profile of other users including account creation date, last login, etc.
| view-history | Permission to view the channel history.
| view-join-code | Permission to view the join code of channels.
| view-joined-room | Permission to view current joined channels.
| view-l-room | Permission to view live chat channel.
| view-livechat-manager | Permission to view other livechat managers.
| view-livechat-rooms | Permission to view list of live chat channels.
| view-logs | Permission to view logs. Accessible from Administration -> View Logs.
| view-other-user-channels | Permission to manage channels on the admin screen.
| view-outside-room | Permission to find new channels and users. Users without this permission wont see channels that they are not part of when searching using the spotlight.
| view-p-room | Permission to view private channels.
| view-privileged-setting | Permission to view privileged settings.
| view-room-administration | Enables Administration -> Channels module. Enables Permission to view public, private and direct message statistics. Does not include the permission to view conversations or archives.
| view-statistics | Enables Administration -> Info module. Enables the permission to view system statistics such as number of users logged in, number of rooms, operating system information.
| view-user-administration | Enables Administration -> Users module. Only includes partial, read-only list view of other user accounts currently logged into the system. No user account information is accessible with this permission. Add view-full-other-user-info to see complete list of other users via the Administration -> Users.
