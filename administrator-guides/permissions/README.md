# Permission

Permission changes are immediate and transparent.  Users do not need to logout, login or refresh to change permissions.

## Roles Available

- admin
- moderator
- owner
- user
- bot
- guest
- livechat-agent
- livechat-manager
- livechat-guest

## Permissions Available

|  Permission    | Purpose
|  :---  | :----
|  access-mailer | Accessible from Administration -> Mailer.  Permission to send mass email to all users.
| access-permissions | Accessible from Administration -> Permissions module.  Modify permissions for various roles.
| add-oauth-service |
| add-user-to-any-c-room | Permission to add a user to a public room.
| add-user-to-any-p-room | Permission to add a user to a private room.
| add-user-to-joined-room | Permission to add a user to a joined room.
| archive-room | Permission to archive a room.
| assign-admin-role | Accessible from Administration -> Users module.  Permission to promote user to Admin.  Requires view-user-administration permission.
| auto-translate |
| ban-user | Permission to ban a user.
| bulk-create-c | Permission to bulk create public rooms.
| bulk-register-user | Permission to bulk add users.
| clean-channel-history | Permission to prune a channel's messages and/or files.
| close-livechat-room | Permission to close your own live chat room.
| close-others-livechat-room | Permission to close others live chat rooms.
| create-c | Permission to create a public channel.
| create-d | Permission to create a direct chat.
| create-p | Permission to create a private group.
| create-user | Accessible from Administration -> Users module. Click the + sign found on the top right hand corner of the Users list to create a new user.
| delete-c | Permission to delete a public room.
| delete-d | Permission to delete a direct chat.
| delete-message | Permission to delete a message within a room.  If this permission is assigned then hold your mouse over the message until you see a gear appear.  Click the gear then click the trash can to remove the message from the conversation.
| delete-p | Permission to delete a private room.
| delete-user | Permission to delete a user.
| edit-message | Permission to edit a message.  If this permission is assigned then hold your mouse over the message until you see a gear appear.  Click the gear then click the pencil icon to edit the message.
| edit-other-user-active-status | Accessible from Administration -> Users module.  Permission to enable or disable other accounts.
| edit-other-user-info | Accessible from Administration -> Users module.  Permission to change other user's name, username or email address.
| edit-other-user-password | Accessible from Administration -> Users module.  Permission to modify other user's passwords.  Requires edit-other-user-info permission.
| edit-privileged-setting | Permission to edit privileged settings
| edit-room | Permission to edit a room's name, topic, type (private or public status) and status (active or archived).  This menu is visible by clicking the INFO icon on the top right hand corner of the screen while inside a room.
| edit-room-retention-policy | Permission to edit's a room's retention policy.
| join-without-join-code |
| mail-messages |
| manage-assets | Accessible from Administration -> Assets. Permission to manage assets. Must also be admin
| manage-emoji | Accessible from Administration -> Custom Emoji. Click the + sign found on the top right hand corner of the emoji list to add a new emoji.
| manage-integrations | Accessible from Administration -> Integrations.  Permission to manage all integrations.
| manage-oauth-apps | Accessible from Administration -> OAuth.  Permission to OAuth.
| manage-own-integrations | User can create and edit own integration - webhooks.
| manage-sounds | Accessible from Administration -> Custom Sounds.  Permission to manage sounds.
| mention-all | Permission to mention everyone
| mute-user | Permission to mute other users in the same channel.
| pin-message | Permission to pin a message.
| post-readonly |
| preview-c-room | Permission to preview a public room.
| remove-user | Permission to remove a user from a room.
| run-import | Accessible from Administration -> Import. Permission to import data. Must also be an admin
| run-migration | Permission to run migrations.
| save-others-livechat-room-info |
| set-moderator | Permission to set a moderator for a room.
| set-owner | Ability to set other users as owner of a public channel.
| set-react-when-readonly |
| snippet-message |
| unarchive-room | Permission to unarchive a room.
| view-c-room | Ability to view public chat rooms.
| view-d-room | Ability to view direct messages.  Does not affect ability to begin / start a direct message with another user.
| view-full-other-user-info | View full profile of other users including account creation date, last login, etc.
| view-history |
| view-join-code |
| view-joined-room |
| view-l-room  | Permission to live chat room.
| view-livechat-manager |
| view-livechat-rooms | Permission to view list of live chat rooms.
| view-logs | Accessible from Administration -> View Logs. Permission to view logs.
| view-other-user-channels |
| view-p-room | Permission to view private rooms.
| view-privileged-setting | Permission to view privileged settings.
| view-room-administration | Enables Administration -> Rooms module.  Enables ability to view public, private and direct message statistics.  Does not include the ability to view conversations or archives.
| view-statistics | Enables Administration -> Info module. Enables ability to view system statistics such as number of users logged in, number of rooms, operating system information.
| view-user-administration | Enables Administration -> Users module.  Only includes partial, read-only list view of other user accounts currently logged into the system.  No user account information is accessible with this permission.  Add view-full-other-user-info to see complete list of other users via the Administration -> Users module.
