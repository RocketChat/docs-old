# Permission

Rocket.Chat has a vast and customizable permissions system. Most of the actions a user can make requires a certain permission so you can customize what users can do and see.

You can find the permission grid under Administration -> Permissions.

Permission changes are immediate and transparent. Users do not need to logout, login or refresh to change permissions.

## Roles

A `Role` is a set of permissions that can be given to users. Rocket.Chat already comes with a set of default roles that can be edited. You can also create new roles for users.

When someone is registered in a Rocket.Chat server, it will normally receive the `user`. If the user is a bot, a guest from a livechat channel, it can receive different roles. Also the first user of a server receives the role of `admin`.

Roles can have different scopes. Currently we have two scopes `Global` and `Rooms`. The permissions of the `Global` roles are valid for the whole server, while the `Rooms` roles only applies to individual channels, where a user have to be elected to that role in that channel.

An example of `Global` role would be an `admin`, that have permissions valid for the whole server, while a `moderator` that have a `Rooms` role would have permissions only in a channel that he was elected for that role.

Also, by default roles are shown as little tags on the side of a username on messages.

### Default Roles

- admin `(Global)` - Have access to all settings and administrator tools.
- moderator `(Rooms)` - Have moderation permissions for a channel. Has to be elected by a channel owner.
- owner `(Rooms)` - Have owner permissions for a channel. When a user creates a channel he becomes the owner of that channel. He can also elect more owners for that channel.
- user `(Global)` - Normal user rights. Most users receive this role when registering.
- bot `(Global)` - Special Role for bot users, with some permissions related to bot functionality.
- leader `(Rooms)` - it doesn't have any special permissions, but is used when setting a `leader` to a channel. Leaders appear on the header of a channel.
- anonymous `(Global)` - unauthenticated users that access the server when the `Allow Anonymous Read` setting is activated.
- guest `(Global)` - anonymous users that want to write and participate in channels when the `Allow Anonymous Read` and `Allow Anonymous Write` settings are activated.
- livechat-agent `(Global)` - Agents of livechat. They can answer to livechat requests.
- livechat-manager `(Global)` - Manager of livechat, they can manage agents and guest.
- livechat-guest `(Global)` - Users coming from a livechat channel.

## Permissions Available

|  Permission    | Purpose
|  :---  | :----
| access-mailer | Accessible from Administration -> Mailer. Permission to send use the [Mailer Tool](../email/mailer).
| access-permissions | Accessible from Administration -> Permissions.Permission to create and edit roles and permissions.
| add-oauth-service | Accessible from Administration -> OAuth Apps. Permission to manage different OAuth services and apps.
| add-user-to-any-c-room | Permission to add a user to a public channel.
| add-user-to-any-p-room | Permission to add a user to a private channel.
| add-user-to-joined-room | Permission to add a user to a joined channel.
| archive-room | Permission to archive a channel.
| assign-admin-role | Accessible from Administration -> Users module. Permission to promote user to Admin. Requires view-user-administration permission.
| auto-translate | Accessible from Administration -> Message -> Auto Translate. Permission to use the Auto Translate Tool <!--Add Link to auto translate article when we have one -->

| ban-user | Permission to ban a user.
| bulk-create-c | Permission to bulk create public channels.
| bulk-register-user | Permission to bulk add users.
| clean-channel-history | Permission to clear the history of a channel.
| close-livechat-room | Permission to close your own live chat channels.
| close-others-livechat-room | Permission to close others live chat channels .
| create-c | Permission to create public channels.
| create-d | Permission to start direct messages.
| create-p | Permission to create private groups.
| create-user | Accessible from Administration -> Users. Click the + sign found on the top right hand corner of the Users list to create a new user.
| delete-c | Permission to delete public channels.
| delete-d | Permission to delete direct messages.
| delete-message | Permission to delete a message within a channel. See [deleting messages](../../user-guides/messaging/#deleting-messages).
| delete-p | Permission to delete private channels.
| delete-user | Permission to delete users.
| edit-message | Permission to edit a message. See [editing messages](../../user-guides/messaging/#editing-messages).
| edit-other-user-active-status | Accessible from Administration -> Users. Permission to enable or disable other accounts.
| edit-other-user-info | Accessible from Administration -> Users. Permission to change other user's name, username or email address.
| edit-other-user-password | Accessible from Administration -> Users. Permission to modify other user's passwords. Requires edit-other-user-info permission.
| edit-privileged-setting | Permission to edit privileged settings.
| edit-room | Permission to edit a room's name, topic, type (private or public status) and status (active or archived).

| force-delete-message | Permission to forcefully delete messages, independent of any deletion blocking setting.

| join-without-join-code | Permission to bypass join codes when entering a channel with a join code.
| mail-messages | Permission to use the "Mail Messages" tool in the channel actions menu.
| manage-apps | Accessible from Administration -> Apps. Permission to manage all apps.
| manage-assets | Accessible from Administration -> Assets. Permission to manage assets. Must also be admin
| manage-emoji | Accessible from Administration -> Custom Emoji. Permission to add custom emojis to the server.
| manage-integrations | Accessible from Administration -> Integrations. Permission to manage all integrations.
| manage-oauth-apps | Accessible from Administration -> OAuth. Permission to OAuth.
| manage-own-integrations | User can create and edit own integration - webhooks.
| manage-sounds | Accessible from Administration -> Custom Sounds. Permission to manage sounds.
| mention-all | Permission to mention everyone in a channel.
| mute-user | Permission to mute other users in the same channel.
| pin-message | Permission to pin a message in a channel.
| post-readonly | Permission to post messages on read only channels.
| preview-c-room | Permission to preview public channels.
| remove-user | Permission to remove users from channels.

| run-import | Accessible from Administration -> Import. Permission to import data. Must also be an admin
| run-migration | Permission to run migrations.

| save-others-livechat-room-info |

| send-many-messages | Permission to bypasses rate limit of 5 messages per second.

| set-leader | permission to set leaders for channels

| set-moderator | Permission to set moderators for channels.
| set-owner | Ability to set other users as owner of a public channel.

| set-react-when-readonly | Allows reaction in only channels.

| snippet-message | Allow creating of message snippets.

| unarchive-room | Permission to unarchive channels.

| user-generate-access-token |

| view-broadcast-member-list |

| view-c-room | Ability to view public channels.
| view-d-room | Ability to view direct messages. Does not affect ability to begin / start a direct message with another user.
| view-full-other-user-info | View full profile of other users including account creation date, last login, etc.

| view-history |
| view-join-code | Ability to view the join code of channels

| view-joined-room |

| view-l-room | Permission to live chat room.
| view-livechat-manager |
| view-livechat-rooms | Permission to view list of live chat rooms.
| view-logs | Accessible from Administration -> View Logs. Permission to view logs.

| view-other-user-channels |

| view-outside-room |

| view-p-room | Permission to view private channels.
| view-privileged-setting | Permission to view privileged settings.
| view-room-administration | Enables Administration -> Rooms module. Enables ability to view public, private and direct message statistics. Does not include the ability to view conversations or archives.
| view-statistics | Enables Administration -> Info module. Enables ability to view system statistics such as number of users logged in, number of rooms, operating system information.
| view-user-administration | Enables Administration -> Users module. Only includes partial, read-only list view of other user accounts currently logged into the system. No user account information is accessible with this permission. Add view-full-other-user-info to see complete list of other users via the Administration -> Users module.
