# Accounts

### Allow Anonymous Read

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Anonymous Write

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Users to Delete Own Account

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Email Change

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Password Change

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Name Change

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow User Avatar Change

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow User Profile Change

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Username Change

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Placeholder for Password Login Field

_FILL HERE_


### Custom Fields to Show in User Info

_FILL HERE_


### Default Directory Listing

- **Channels**: _FILL HERE_
- **Users**: _FILL HERE_


### Placeholder for Email or Username Login Field

_FILL HERE_


### Forget User Session on Window Close

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Login Expiration in Days

_FILL HERE_


### Placeholder for Password Login Field

_FILL HERE_


### Fields to Consider in Search

_FILL HERE_


### Show Default Login Form

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


## Default User Preferences


### Audio Notifications Default Alert

- **All messages**: _FILL HERE_
- **Mentions**: _FILL HERE_
- **Nothing**: _FILL HERE_


### Auto Load Images

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Collapse Embedded Media by Default

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Convert ASCII to Emoji

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Notification Duration

_FILL HERE_


### Desktop Notifications Default Alert

- **All messages**: _FILL HERE_
- **Mentions**: _FILL HERE_
- **Nothing**: _FILL HERE_


### Offline Email Notifications

- **Disabled**: _FILL HERE_
- **Every Mention/DM**: _FILL HERE_


### Enable Auto Away

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Hide Avatars

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Hide Right Sidebar with Click

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Hide Roles

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Hide Usernames

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Idle Time Limit

_FILL HERE_


### MessageBox_view_mode

- **Normal**: _FILL HERE_
- **Cozy**: _FILL HERE_
- **Compact**: _FILL HERE_


### Mobile Notifications Default Alert

- **All messages**: _FILL HERE_
- **Mentions**: _FILL HERE_
- **Nothing**: _FILL HERE_


### Mute Focused Conversations

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### New Message Notification

- **None**: _FILL HERE_
- **Default**: _FILL HERE_


### New Room Notification

- **None**: _FILL HERE_
- **Default**: _FILL HERE_


### Notifications sound volume

_FILL HERE_


### Show room counter on sidebar

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Save Mobile Bandwidth

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Enter key Behaviour

- **Normal mode (send with Enter)**: _FILL HERE_
- **Alternative mode (send with Enter + Ctrl/Alt/Shift/CMD)**: _FILL HERE_
- **Desktop mode (only sends with enter on desktop)**: _FILL HERE_


### Group by Type

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Hide Avatars

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Group favorites

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Unread on top

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Sidebar Channel List Mode

- **Extended**: _FILL HERE_
- **Medium**: _FILL HERE_
- **Condensed**: _FILL HERE_


### Unread Tray Icon Alert

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Use Emojis

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


## Avatar


### Block Unauthenticated Access to Avatars

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Avatar cache time

_FILL HERE_

> Number of seconds the http protocol is told to cache the avatar images.


### Avatar External Provider URL

_FILL HERE_

> Example: `https://acme.com/api/v1/{username}`


### Resize Avatars

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Avatar Size

_FILL HERE_


### Set Default Avatar

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Tries to determine default avatar based on OAuth Account or Gravatar


## Iframe


### Api Method

_FILL HERE_


### API URL

_FILL HERE_


### Enabled

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Iframe URL

_FILL HERE_


## Password Policy


### At Least One Lowercase

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Enforce that a password contain at least one lowercase character.


### At Least One Number

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Enforce that a password contain at least one numerical character.


### At Least One Symbol

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Enforce that a password contain at least one special character.


### At Least One Uppercase

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Enforce that a password contain at least one lowercase character.


### Enable Password Policy

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> When enabled, user passwords must adhere to the policies set forth. Note: this only applies to new passwords, not existing passwords.


### Forbid Repeating Characters

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Ensures passwords do not contain the same character repeating next to each other.


### Max Repeating Characters

_FILL HERE_

> The amount of times a character can be repeating before it is not allowed.


### Maximum Length

_FILL HERE_

> Ensures that passwords do not have more than this amount of characters. Use `-1` to disable.


### Minimum Length

_FILL HERE_

> Ensures that passwords must have at least this amount of characters. Use `-1` to disable.


## Registration


### Allowed Domains List

_FILL HERE_

> Comma-separated list of allowed domains


### Blocked Domains List

_FILL HERE_

> Comma-separated list of blocked domains


### Blocked Username List

_FILL HERE_

> Comma-separated list of blocked usernames (case-insensitive)


### Custom Fields

_FILL HERE_

> Should be a valid JSON where keys are the field names containing a dictionary of field settings. Example:<br/><code>{
 "role": {
  "type": "select",
  "defaultValue": "student",
  "options": ["teacher", "student"],
  "required": true,
  "modifyRecordField": {
   "array": true,
   "field": "roles"
  }
 },
 "twitter": {
  "type": "text",
  "required": true,
  "minLength": 2,
  "maxLength": 10
 }
}</code> 


### Default Username Prefix Suggestion

_FILL HERE_


### Email Verification

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Make sure you have correct SMTP settings to use this feature


### Manually Approve New Users

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Password Reset

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Registration Form

- **Public**: _FILL HERE_
- **Disabled**: _FILL HERE_
- **Secret URL**: _FILL HERE_


### Registration Form Link Replacement Text

_FILL HERE_


### Registration Form Secret URL

_FILL HERE_

> You must provide a random string that will be added to your registration URL. Example: https://open.rocket.chat/register/[secret_hash]


### Default Roles for Authentication Services

_FILL HERE_

> Default roles (comma-separated) users will be given when registering through authentication services


### Registration with Authentication Services

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Require Name For Signup

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Require Password Confirmation

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Send email to user when user is activated

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Send email to user when user is deactivated

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Use DNS Domain Check

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Use Default Blocked Domains List

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


## Two Factor Authentication


### Enable Two Factor Authentication

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Maximum Delta

_FILL HERE_

> The Maximum Delta determines how many tokens are valid at any given time. Tokens are generated every 30 seconds, and are valid for (30 * Maximum Delta) seconds. <br/>Example: With a Maximum Delta set to 10, each token can be used up to 300 seconds before or after it's timestamp. This is useful when the client's clock is not properly synced with the server.

