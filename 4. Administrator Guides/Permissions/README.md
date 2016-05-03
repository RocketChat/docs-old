# Permission

Permission changes are immediate and transparent.  Users do not need to logout, login or refresh to change permissions.

### Roles Available

* admin
* moderator
* owner
* user
* bot
* livechat-agent
* livechat-manager
* livechat-guest

### Permissions Available

|  Permission    | Purpose
|  :---  | :----
|  access-mailer | Accessible from Administration -> Mailer.  Permission to send mass email to all users.
| access-permissions | Accessible from Administration -> Permissions module.  Modify permissions for various roles.
| add-oauth-service |
| add-user | Accessible from Administration -> Users module.  Click the + sign found on the top right hand corner of the Users list to create a new user.
| assign-admin-role | Accessible from Administration -> Users module.  Permission to promote user to Admin.  Requires view-user-administration permission.
| ban-user |
| bulk-create-c |
| bulk-register-user |
| create-c | Permission to create a public channel.
| create-p | Permission to create a private group.
| delete-c |
| delete-d |
| delete-message | Permission to delete a message within a room.  If this permission is assigned then hold your mouse over the message until you see a gear appear.  Click the gear then click the trash can to remove the message from the conversation.
| delete-p |
| delete-user |
| edit-message | Permission to edit a message.  If this permission is assigned then hold your mouse over the message until you see a gear appear.  Click the gear then click the pencil icon to edit the message.
| edit-other-user-active-status | Accessible from Administration -> Users module.  Permission to enable or disable other accounts.
| edit-other-user-info | Accessible from Administration -> Users module.  Permission to change other user's name, username or email address.
| edit-other-user-password | Accessible from Administration -> Users module.  Permission to modify other user's passwords.  Requires edit-other-user-info permission.
| edit-privileged-setting |
| edit-room | Permission to edit a room's name, topic, type (private or public status) and status (active or archived).  This menu is visible by clicking the INFO icon on the top right hand corner of the screen while inside a room.
| mail-messages |
| manage-assets |
| manage-integrations |
| manage-oauth-apps |
| mute-user | Permission to mute other users in the same channel.
| remove-user | Permission to remove a user from a room.
| run-migration |
| set-moderator |
| set-owner | Ability to set other users as owner of a public channel.
| view-c-room | Ability to view public chat rooms.
| view-d-room | Ability to view direct messages.  Does not affect ability to begin / start a direct message with another user.
| view-full-other-user-info | View full profile of other users including account creation date, last login, etc.
| view-l-room  |
| view-livechat-manager |
| view-other-user-channels |
| view-p-room |
| view-privileged-setting |
| view-room-administration | Enables Administration -> Rooms module.  Enables ability to view public, private and direct message statistics.  Does not include the ability to view conversations or archives.
| view-statistics | Enables Administration -> Info module. Enables ability to view system statistics such as number of users logged in, number of rooms, operating system information.
| view-user-administration | Enables Administration -> Users module.  Only includes partial, read-only list view of other user accounts currently logged into the system.  No user account information is accessible with this permission.  Add view-full-other-user-info to see complete list of other users via the Administration -> Users module.



