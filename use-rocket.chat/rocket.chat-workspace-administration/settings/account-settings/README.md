---
description: Modify workspace member account settings
---

# Accounts

In this guide, we will go over all settings in the _Accounts_ Section.

To access this setting, go to: **Administration** > **Workspace** > **Settings** > **Accounts**

These are the basic Account configuration settings. Most of the options are either `True` or `False` depending on whether you want the setting enabled or not.

* **Allow anonymous read**: Setting this to true will allow people to use the chat without having to create an account or log in. Anonymous users will be only allowed to read messages on public channels.
* **Allow anonymous write**: This will allow Anonymous users to post messages on public channels.
* **Allow users to delete own account**: Setting this to true allows users to delete their account. When a user is deleted all their messages are deleted too.
* **Allow User Profile Change**: Setting this to false will block users from changing the information on their profile.
* **Allow User Avatar Change**: Setting this to false will block users from changing their avatar.
* **Allow Name Change**: Setting this to false will block users from changing their name.
* **Allow Custom Status Message:** Setting this to true will allow users to create the custom status message.
* **Allow Username Change**: Setting this to false will block users from changing their usernames.
* **Allow User Email Change**: Setting this to false will block users from changing their email.
* **Allow User Password Change**: Setting this to false will block users from changing their password.
* **Allow Password Change for OAuth Users:** Setting this to false will block OAuth users from changing their password.
* **Allow Email Notifications:** Setting this to true will enable the users to receive email notifications.
* **Custom Fields to Show in User Info**: Other fields to be displayed in the user info. Please see more at [Custom fields](custom-fields.md).
* **Login Expiration in Days**: After this number of days of inactivity, the user will be logged out.
* **Show Default Login Form**: Setting this to false will remove the login form from the login screen. This setting is useful when you are using a third-party login system.
* **Placeholder for email or username login field**: This will change the placeholder for the _email or username_ field on the login screen.
* **Placeholder for password login field**: This will change the placeholder for the _password_ field on the login screen.
* **Confirm Placeholder for Password Login Field:** This will confirm the placeholder for the password field on the login screen.
* **Forget user session on window close**: This will log out users when they close the window running Rocket.Chat.
* **Fields to Consider in Search**: Specifies the fields to be considered when searching for users. Default is _username, name, bio, nickname._
* **Default Directory Listing**: This will set the default directory to be listed.
* **Allow Invisible Status Option:** Setting this option will allow users to set the invisible status.

Clicking on the `Reset` button will reset all these basic configurations back to their default value.

## Two Factor Authentication

* **Enable Two Factor Authentication**: Here you can enable or disable Two Factor Authentication for users, and set for how long a token is valid.
* **Maximum Delta**: Lets you set the number of tokens that are valid at any given time.
* **Enable Two Factor Authentication via TOTP**: Lets you set whether or not users can set up two-factor authentication with authentication apps like Google Authenticator.
* **Enable Two Factor Authentication via Email:** Sets whether users will receive certain emails with a temporary code to authorize some actions.
* **Auto opt in new users for Two Factor via Email**: When set to true users will have the Two Factor Authentication via Email enabled by default. This can be disabled on their profile page.
* **Time to expire the code sent via email in seconds**: Receives in seconds how long the two-factor code sent to a users email will be valid.
* **Remember Two Factor for (seconds)**: This lets you set how long in seconds users won't be able to request authorization code if it was already provided.
* **Enforce password fallback**: Setting this to true will force users to enter their passwords in order to perform some important tasks.

## Default User Preferences

* **Enable Auto-Away**: When set to True, it will automatically change the User's status to Away they exit Rocket.Chat.
* **Idle Time Limit**: Sets how long _in milliseconds_ for a User to go idle.
* **Require Interaction to Dismiss Desktop Notification**: Enabling this will set the notification prompt active until the User interacts with it.
* **Desktop Notifications Default Alert**: Lets you set when the desktop notification alert is triggered. Default is _All messages_. This only concerns the groups and channels the user belongs to.
* **Push Notifications Default Alert**: Setting this to allow the users to set whether they want to receive push notifications or not. Default is _All messages._
* **Mobile Notifications Default Alert**: Sets when the default notification alert will play on mobile devices.
* **Unread Tray Icon Alert**: Setting this to false will stop the unread tray icon from displaying.
* **Use Emojis**: Setting this to false will disable the use of emojis.
* **Convert ASCII to Emoji**: When this is true, ASCII characters will be converted to emoji.
* **Auto Load Images**: Setting this to false will prevent images from auto-loading when a room/chat is opened.
* **Save Mobile Bandwidth**: When enabled acts like a data saver.
* **Collapse Embedded Media by Default**: Setting this to true will cause embedded media cards to collapse.
* **Hide Usernames**: When enabled, it'll hide usernames in conversation rooms.
* **Hide Roles**: When set to true, user roles like _admin_, and _moderator_ will not be shown in chat rooms.
* **Hide Right Sidebar with Click**: Setting this true will give the ability for the right sidebar to be hidden.
* **Display Avatars**: Setting this to true will display user's avatar in chat.
* **Group by Type**: This lets you group conversations by type.
* **Sidebar Channel List Mode**: Lets you choose from _Extended, Medium, Condensed_ how the sidebar should be.
* **Display Avatars in Sidebar**: Enabling this will disable avatars from showing at the sidebar.
* **Unread on top**: Setting this to true will display all unread messages at the top.
* **Sort by:** Lets you sort the list by the user activity or an alphabetical order.
* **Show thread messages in the main thread:**
* **Group favorites**: Setting this to false will disable favoriting groups.
* **Enter key Behaviour**: Lets you configure the action of the Enter key. The available options are: Normal mode (send with Enter),Alternative mode (send with Enter+Ctrl/Alt/Shift/CMD)
* **MessageBox View Mode**: Lets you select how message boxes appear. The available options are: Normal, Cozy and Compact.
* **Offline Email Notifications**: Lets you set when users should receive email notifications. The available options are: Disabled and Every Mention/DM.
* **New Room Notification**: Configures the notification when a new room is created/joined.
* **New Message Notification**: Lets you select the notification for new messages. The default options are: None and Default.
* **Mute Focused Conversations**: When set to true, no notification will be sent for focused/open conversations.
* **Notifications sound volume**: Lets you set the notification volume.
* **Enable New Message Template**: Enable this setting to allow users to create new message template.

## Avatar

* **Resize Avatar**: Set this to true to resize user avatars to a predefined size. You need ImageMagick or GraphicsMagick installed on your server for this feature to work.
* **Avatar Size**: The desired size after the avatar resizing. The unit is pixels (px).
* **Avatar External Provider URL**: Lets you set a URL from which avatars can be loaded. Example: https://acme.com/api/v1/{username}
* **Room Avatar External Provider URL**: The URL where room avatar will be loaded from.
* **Avatar cache time**: This will set how long _in milliseconds_ you want users avatar to be cached.
* **Block Unauthenticated Access to Avatars**: Enabling this will restrict access to users avatar for those that are not authenticated.
* **Set Default Avatar**: If this setting is set to true, Rocket.Chat will try to find a default avatar based on OAuth Account or Gravatar.

## Iframe

* **Enabled**:  Enable this option to authenticate users using your own login page in place of the Rocket.Chat's login page via the[ iframe integration](https://developer.rocket.chat/rocket.chat/iframe-integration).&#x20;
* **Iframe URL:**  Enter **** the URL of the page you want to show as the login page of your Rocket.Chat instance. The login page will then communicate back to Rocket.Chat using `postMessage` API.&#x20;

{% hint style="info" %}
* The Login page can be created in any programming language and/or web framework.
* By setting `API URL` and `API Method` parameters will enable Rocket.Chat to call the third party system to either login or to verify if the user is already logged in.
{% endhint %}

* **API URL:**  Enter the URL, which refers to the endpoint on the third-party system and this will check if the user is already logged in to that system.&#x20;
* **API Method:** Specify the API (POST) method, Rocket.Chat will use to submit information to the `API URL.`

{% hint style="info" %}
If the user has already logged into the third-party system, the `API URL` should communicate to Rocket.Chat and return a JSON object containing either a`token` or `loginToken` property, otherwise (if the user is not already logged in) the `API URL` should return an empty body with the status `401`.
{% endhint %}

![Iframe Admin Settings](../../../../../.gitbook/assets/iframesetting\_07062022.png)

## Failed Login Attempts

* **Enable collect log in data**: When set to true, it allows for the collection of failed logins attempts.
* **Block failed login attempts by Username**: Blocks failed login attempts with username.
* **How many failed attempts until block by User**: Lets you set how many failed login attempts before blocking the user.
* **Time to unblock User (In Minutes)**: Sets in minutes how long to unblock a user after blocking.
* **Block failed login attempts by IP**: Enables the blocking of IP addresses after failed login attempts.
* **How many failed attempts until block by IP**: Lets you set how many failed login attempts before blocking an IP address.
* **Time to unblock IP (In Minutes)**: Sets how long to unblock a blocked IP.
* **IP Whitelist**: Takes in a list of comma-separated IP addresses to be whitelisted.
* **Notify of failed login attempts**: When set true, a channel will be notified of all failed login attempts.
* **Channel to send the notifications**: Specifies the channel where the failed login attempts notification will be sent to. We recommend you create the channel first without the `#` symbol in the channel name.

## Login Logs

* **Log (on console) failed login attempts**: Logs all failed login attempts on the console.
* **Show Username on failed login attempts logs**: When enabled, usernames will be shown on the console for all failed login attempts.
* **Show UserAgent on failed login attempts logs:** Shows the user agent on failed login attempts when enabled.
* **Show Client IP on failed login attempts logs**: When set to true, it shows the client IP address on the console on any failed login attempt.
* **Show Forwarded IP on failed login attempts logs**: Show the forwarded IP on any failed login attempts.

## Password History

* **Enable Password History:** When enabled, users won't be able to update their passwords to some of their most recently used passwords.
* **Password History Length**: Lets you set number of most recently used passwords to prevent users from reusing them.

## Password Policy

**Enable Password Policy**: When this is set to true, new passwords must follow the corresponding configured policies.

The various settings that fall under this have simple descriptions for understanding.

## Registration

* **Send email to user when user is activated**: When enabled, an email will be sent to the user after their account has been activated.
* **Send email to user when user is deactivated**: If set to `true`, users will get an email after account deactivation.
* **Default username prefix suggestion**: This is the prefix that will be suggested when a user is creating a username. Default is `user`.
* **Require Name For Signup**: If this is set to true, the name of the user will be required to create an account.
* **Require Password Confirmation**: If this is set to true, the user will have to input his password twice when registering.
* **Only allow verified users to login:** Enable this option only to allow the verified users to login.
* **Verify Email for External Accounts**: If this is set to true, users will have to confirm their email via a confirmation email sent to their email. (For this setting to work, the SMTP settings must be already set up. See [Email Configuration](../email/setup.md))
* **Manually Approve New Users**: If this is set to true, new users will have to wait for a user with the `view-user-administration` permission to approve their account before using Rocket.Chat.
* **Allowed Domains List**: This will block emails with different domains than the ones on the list.
* **Blocked Domains List**: This will block emails with domains that are on the list.
* **Blocked Username List:** This will block usernames that are on the list.
* **Use Default Blocked Domains List**: Will block the email domains listed [here](https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/app/lib/server/lib/defaultBlockedDomainsList.js)
* **Use DNS Domain Check**: When this is set to true, users won't be able to register with invalid domains.
* **Registration Form**: This will change how the registration form is presented. Currently, there are 3 options:
  * Public: The form will be public and anyone will be able to access it.

![Public](../../../../../.gitbook/assets/Registration\_Public\_10062022.png)

* Disabled: The form will be disabled and users won't be able to register through it.

![Disabled](../../../../../.gitbook/assets/Registration\_Disabled\_10062022.png)

* Secret URL: The form will be only accessible using a specific URL.

![Secret URL](../../../../../.gitbook/assets/Registration\_Secret\_10062022.png)

* **Registration Form Secret URL**: String to be added to the secret URL. Is recommended to use a random string for that. Example: `https://open.rocket.chat/register/[secret_hash]`.You can copy this URL to share the form with anyone.
* **Invite URL Type**: URL type can either be direct or through a proxy.
* **Registration Form Link Replacement Text**: Text to be shown in place of the registration form when the registration form is disabled.
* **Registration with Authentication Services**: Set this to true to allow registration with third-party authentication services like Google or Twitter.
* **Default Roles for Authentication Services**: Default roles users will be given when registering through authentication services.
* **Default Roles for Users:** Default roles users will be given when registering through manual registration.
* **Password Reset**: Set this to true to allow users to reset their password.
* **Custom Fields**: A valid `JSON` of key values pairs of additional fields to be added during user registration.
