# Account Settings

In this section, you can modify various settings about the accounts of the users in your Rocket.Chat server.

In this guide, we will go over all settings in the _Accounts_ Section.

These are the basic Account configuration settings. Most of the options are either `True` or `False` depending on whether you want the setting enabled or not.

* **Allow anonymous read**: Setting this to true will allow people to use the chat without having to create an account or log in. Anonymous users will be only allowed to read messages on public channels.
* **Allow anonymous write**: This will allow Anonymous users to post messages on public channels.
* **Allow users to delete own account**: Setting this to true allows users to delete their account. When a user is deleted all their messages are deleted too.
* **Allow User Profile Change**: Setting this to false will block users from changing information on their profile.
* **Allow User Avatar Change**: Setting this to false will block users from changing their avatar.
* **Allow Name Change**: Setting this to false will block users from changing their name.
* **Allow User Username Change**: Setting this to false will block users from changing their username.
* **Allow User Email Change**: Setting this to false will block users from changing their email.
* **Allow User Password Change**: Setting this to false will block users from changing their password.
* **Custom Fields to Show in User Info**: Other fields to be displayed in the user info. Please see more at [Custom fields](custom-fields.md)
* **Login Expiration in Days**: After this number of days of inactivity, the user will be logged out.
* **Show Default Login Form**: Setting this to false will remove the login form from the login screen. This setting is useful when you are using a third-party login system.
* **Placeholder for email or username login field**: This will change the placeholder for the _email or username_ field on the login screen.
* **Placeholder for password login field**: This will change the placeholder for the _password_ field on the login screen.
* **Forget user session on window close**: This will log out users when they close the window running Rocket.Chat
* **Fields to Consider in Search**: Specifies the fields to be considered when searching for users. Default is _username, name_.
* **Default Directory Listing**: This will set the default directory to be listed.

Clicking on the `Reset` button will reset all these basic configurations back to their default value.

## Default User Preferences

* **Enable Auto Away**: When set to True, it will automatically change the User's status to Away they exit Rocket.Chat.
* **Idle Time Limit**: Sets how long _in miliseconds_ for a User to go idle.
* **Notification Duration**: This will set how long _in miliseconds_ for a notification to be displayed.
* **Require Interaction to Dismiss Desktop Notification**: Enabling this will set the notification prompt active untill the User interacts with it.
* **Audio Notifications Default Alert**: A dropdown to select when to play the default audio notification. Default to _Mentions_.
* **Desktop Notifications Default Alert**: Lets you set when the desktop notificaion alert is triggered. Default is _All messages_. THis only concerns the groups and channels the user belongs to.
* **Mobile Notifications Default Alert**: Sets when the default notification alert will play on mobile devices.
* **Unread Tray Icon Alert**: Setting this to false will stop the unread tray icon from displaying.
* **Use Emojis**: Setting this to false will disable the use of emojis.
* **Convert ASCII to Emoji**: When this is true, ASCII characters will be converted to emoji.
* **Auto Load Images**: Seting this to false will prevent images from auto loading when a room/chat is opened.
* **Save Mobile Bandwidth**: When enabled acts like a data saver.
* **Collapse Embedded Media by Default**: Setting this to true will cause embedded media cards to collapse.
* **Hide Usernames**: When enabled, it'll hind usernames in conversation rooms.
* **Hide Roles**: When set to true, user roles like _admin_, _moderator_ will not be shown in chat rooms.
* **Hide Right Sidebar with Click**: Setting this true will give ability for the right sidebar to be hidden.
* **Hide Avatars**: Enabling this will make users avatar not to show in chat.
* **Group by Type**: This lets you group converstions by type.
* **Sidebar Channel List Mode**: Lets you choose from _Extended, Medium, Condensed_ how the sidebar should be.
* **Hide Avatars in Sidebar**: Enabling this will disable avatars from showing at the sidebar.
* **Unread on top**: Setting this to true will display all unread messages at the top.
* **Group favorites**: Setting this to false will disable favoriting groups.
* **Enter key Behaviour**: Let's you configure the action of the Enter key.
* **MessageBox View Mode**: Lets you select how message boxes appear.
* **Offline Email Notifications**: Lets you set when users should recieve email notifications.
* **New Room Notification**: Configures the notification when a new room is created/joined.
* **New Message Notification**: Lets you select the notification for new messages.
* **Mute Focused Conversations**: When set to true, no notification will be sent for focused/open conversations.
* **Notifications sound volume**: Lets you set the notification volume.
* **Group discussions**: When set to true allows for group discussion.

## Avatar

* **Resize Avatar**: Set this to true to resize users avatars to a predefined size. You need ImageMagick or GraphicsMagick installed on your server for this feature to work.
* **Avatar Size**: The desired size after the avatar resizing. The unit is pixels \(px\).
* **Avatar External Provider URL**: Lets you set a url from which avatars can be loaded.
* **Avatar cache time**: This will set how long _in miliseconds_ you want user's avatar to be cached.
* **Block Unauthenticated Access to Avatars**: Enabling this will restrict access to user's avatar for those that are not authenticated.
* **Set Default Avatar**: If this setting is set to true, Rocket.Chat will try to find a default avatar based on OAuth Account or Gravatar.

## Iframe

These settings are related to the Iframe Integration, please see the [Iframe integration page](../developer/iframe-integration/) for more details.

## Password Policy

**Enable Password Policy**: When this is set to true, new passwords must follow the corresponding configured polices.

The various settings that fall under this have simple descriptions for understanding.

## Registration

* **Send email to user when user is activated**: When enabled, an email will be sent to the user after their account has been activated.
* **Send email to user when user is deactivated**: If set to True, users will get an email after account deactivation.
* **Default username prefix suggestion**: This is the prefix that will be suggested when a user is creating a username. Default is `user`.
* **Require Name For Signup**: If this is set to true, the name of the user will be required to create an account.
* **Require Password Confirmation**: If this is set to true, the user will have to input his password twice when registering.
* **Email Verification**: If this is set to true, users will have to confirm their email via a confirmation email sent to their email. \(For this setting work, the SMTP settings must be already set up. See [Email Configuration](email/setup.md)\)
* **Manually Approve New Users**: If this is set to true, new users will have to wait for a user with the `view-user-administration` permission to approve their account before using Rocket.Chat.
* **Allowed Domains List**:  This will block emails with different domains than the ones on this list.
* **Blocked Domains List**:  This will block emails with domains that are on this list.
* **Use Default Blocked Domains List**: Will block the email domains listed on this [file](https://github.com/RocketChat/Rocket.Chat/blob/develop/packages/rocketchat-lib/server/lib/defaultBlockedDomainsList.js)
* **Use DNS Domain Check**: When this is set to true, users won't be able to register with invalid domains.
* **Registration Form**: This will change how the registration form is presented. Currently, there are 3 options:
  * Public: The form will be public and anyone will be able to access;
  * Disabled: The form will be disabled and users won't be able to register through it;
  * Secret URL: The form will be only accessible using a specific URL;
* **Registration Form Secret URL**: String to be added to the secret URL. Is recommended to use a random string for that. Example: `https://open.rocket.chat/register/[secret_hash]`.
* **Invite URL Type**: URL type can either be direct or through a proxy.
* **Registration Form Link Replacement Text**: Text to be shown in place of the registration form when the registration form is disabled.
* **Registration with Authentication Services**: Set this to true to allow registration with third-party authentication services like Google or Twitter.
* **Default Roles for Authentication Services**: Default roles users will be given when registering through authentication services.
* **Password Reset**: Set this to true to allow users to reset their password.
* **Custom Fields**: A valid `JSON` of key values pairs of additional fields to be added during user registration.

## Two Factor Authentication

Here you can enable or disable Two Factor Authentication for users, and set for how long a token is valid.

