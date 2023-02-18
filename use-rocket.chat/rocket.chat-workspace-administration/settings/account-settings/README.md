---
description: Modify workspace member account settings.
---

# Accounts

To access this setting, navigate to

**Administration** > **Workspace** > **Settings** > **Accounts.**

These are the basic Account configuration settings. Most of the options are either `True` or `False` depending on whether you want the setting enabled or not.

* **Allow anonymous read**: If enabled, allows people to use the chat without having to create an account or log in. Anonymous users are only allowed to read messages on public channels.
* **Allow anonymous write**: If enabled, allows Anonymous users to post messages on public channels.
* **Allow users to delete own account**: Setting this to true allows users to delete their account. When a user is deleted, all their messages are deleted too.
* **Allow User Profile Change**: Setting this to false blocks users from changing the information on their profile.
* **Allow User Avatar Change**: Setting this to false blocks users from changing their avatar.
* **Allow Name Change**: Setting this to false blocks users from changing their names.
* **Allow Custom Status Message:** Setting this to true allows users to create the custom status message.
* **Allow Username Change**: Setting this to false blocks users from changing their usernames.
* **Allow User Email Change**: Setting this to false blocks users from changing their email.
* **Allow User Password Change**: Setting this to false blocks users from changing their password.
* **Allow Password Change for OAuth Users:** Setting this to false blocks OAuth users from changing their password.
* **Allow Email Notifications:** Setting this to true enables the users to receive email notifications.
* **Custom Fields to Show in User Info**: Other fields to be displayed in the user info. Please see more in [Custom fields](custom-fields.md).
* **Login Expiration in Days**: After this number of days of inactivity, the user is logged out.
* **Show Default Login Form**: Setting this to false removes the login form from the login screen. This setting is useful when you are using a third-party login system.
* **Placeholder for email or username login field**: This changes the placeholder for the _email or username_ field on the login screen.
* **Placeholder for password login field**: This changes the placeholder for the _password_ field on the login screen.
* **Confirm Placeholder for Password Login Field:** This confirms the placeholder for the password field on the login screen.
* **Forget user session on window close**: This logs out users when they close the window running Rocket.Chat.
* **Fields to Consider in Search**: Specifies the fields to be considered when searching for users. The default is _username, name, bio, and nickname._
* **Default Directory Listing**: This sets the default directory to be listed.
* **Allow Invisible Status Option:** Setting this option allows users to set the invisible status.
* **Reset section to default**: Click the button to reset all these basic configurations back to their default value.



## Two Factor Authentication

* **Enable Two Factor Authentication**: Here you can enable or disable Two Factor Authentication for users, and set for how long a token is valid.
* **Maximum Delta**: Let you set the number of tokens that are valid at any given time.
* **Enable Two-Factor Authentication via TOTP**: This lets you set whether or not users can set up two-factor authentication with authentication apps like Google Authenticator.
* **Enable Two Factor Authentication via Email:** Sets whether users receive certain emails with a temporary code to authorize some actions.
* **Auto opt in new users for Two Factor via Email**: When set to true users have the Two-Factor Authentication via Email enabled by default. This can be disabled on their profile page.
* **Time to expire the code sent via email in seconds**: Receives in seconds how long the two-factor code sent to a user's email is valid.
* **Remember Two Factor for (seconds)**: This lets you set how long in seconds users won't be able to request an authorization code if it was already provided.
* **Enforce password fallback**: Turning this on forces users to enter their passwords in order to perform some important tasks.

## Default User Preferences

{% hint style="info" %}
Default user preferences for notifications are universal for all the users in your workspace until a user changes it for themselves.
{% endhint %}

* **Enable Auto-Away**: When set to True, it automatically changes the User's status to **Away** they exit Rocket.Chat.
* **Idle Time Limit**: Sets how long _in milliseconds_ for a User to go idle.
* **Require Interaction to Dismiss Desktop Notification**: Enabling this sets the notification prompt active until the User interacts with it.
* **Desktop Notifications Default Alert**: This lets you set when the desktop notification alert is triggered. The default is _All messages_. This only concerns the groups and channels the user belongs to.
* **Push Notifications Default Alert**: Setting this to allow the users to set whether they want to receive push notifications or not. The default is _All messages._
* **Mobile Notifications Default Alert**: Sets when the default notification alert plays on mobile devices.
* **Unread Tray Icon Alert**: Disabling this stops the unread tray icon from displaying.
* **Use Emojis**: Setting this to false disables the use of emojis.
* **Convert ASCII to Emoji**: When this is true, ASCII characters are converted to emojis.
* **Auto Load Images**: Turning this off prevents images from auto-loading when a room/chat is opened.
* **Save Mobile Bandwidth**: When enabled acts like a data saver.
* **Collapse Embedded Media by Default**: Setting this to true are cause embedded media cards to collapse.
* **Hide Usernames**: When enabled, it'll hide usernames in conversation rooms.
* **Hide Roles**: When set to true, user roles like _admin_, and _moderator_ are not be shown in chat rooms.
* **Hide Right Sidebar with Click**: Enabling this gives the ability for the right sidebar to be hidden.
* **Display Avatars**: Setting this to true displays the user's avatars in chat.
* **Group by Type**: This lets you group conversations by type.
* **Sidebar Channel List Mode**: This lets you choose from _Extended, Medium, and Condensed_ how the sidebar should be.
* **Display Avatars in Sidebar**: Disabling this disables avatars from showing in the sidebar.
* **Unread on top**: Turning this on displays all unread messages at the top.
* **Sort by:** This lets you sort the list by the user activity or in alphabetical order.
* **Show thread messages in the main thread:**
* **Group favorites**: Setting this to false disables favoriting groups.
* **Enter key Behavior**: Lets you configure the action of the Enter key. The available options are: Normal mode (send with Enter), Alternative mode (send with Enter+Ctrl/Alt/Shift/CMD)
* **MessageBox View Mode**: Lets you select how message boxes appear. The available options are Normal, Cozy, and Compact.
* **Offline Email Notifications**: Lets you set when users should receive email notifications. The available options are Disabled and Every Mention/DM.
* **New Room Notification**: Configures the notification when a new room is created/joined.
* **New Message Notification**: Lets you select the notification for new messages. The default options are None and Default.
* **Mute-Focused Conversations**: When set to true, no notifications are sent for focused/open conversations.
* **Notifications sound volume**: Lets you set the notification volume.
* **Enable New Message Template**: Enable this setting to allow users to create new message template.

## Avatar

* **Resize Avatar**: Set this to true to resize user avatars to a predefined size. You need ImageMagick or GraphicsMagick installed on your server for this feature to work.
* **Avatar Size**: The desired size after the avatar resizing. The unit is pixels (px).
* **Avatar External Provider URL**: Lets you set a URL from which avatars can be loaded. Example: https://acme.com/api/v1/{username}
* **Room Avatar External Provider URL**: The URL where the room avatar is loaded from.
* **Avatar cache time**: This sets how long _in milliseconds_ you want users avatar to be cached.
* **Block Unauthenticated Access to Avatars**: Enabling this restricts access to users avatars for those that are not authenticated.
* **Set Default Avatar**: If this setting is set to true, Rocket.Chat tries to find a default avatar based on OAuth Account or Gravatar.

## Iframe

* **Enabled**: Enable this option to authenticate users using your own login page in place of the Rocket.Chat's login page via the[ iframe integration](https://developer.rocket.chat/rocket.chat/iframe-integration).
* **Iframe URL:** Enter the URL of the page you want to show as the login page of your Rocket.Chat instance. The login page then communicates back to Rocket.Chat using `postMessage` API.

{% hint style="info" %}
* The Login page can be created in any programming language and/or web framework.
* By setting `API URL` and `API Method` parameters enables Rocket.Chat to call the third-party system to either log in or verify if the user is already logged in.
{% endhint %}

* **API URL:** Enter the URL, which refers to the endpoint on the third-party system, and this checks if the user is already logged in to that system.
* **API Method:** Specify the API (POST) method, to be used by Rocket.Chat to submit information to the `API URL.`

{% hint style="info" %}
If the user has already logged into the third-party system, the `API URL` should communicate to Rocket.Chat and return a JSON object containing either a`token` or `loginToken` property, otherwise (if the user is not already logged in) the `API URL` should return an empty body with the status `401.`
{% endhint %}

## Failed Login Attempts

* **Enable collect login data**: When set to true, it allows for the collection of failed login attempts.
* **Block failed login attempts by Username**: Blocks failed login attempts with username.
* **How many failed attempts until block by User**: Lets you set how many failed login attempts before blocking the user.
* **Time to unblock User (In Minutes)**: Sets in minutes how long to unblock a user after blocking.
* **Block failed login attempts by IP**: Enables the blocking of IP addresses after failed login attempts.
* **How many failed attempts until block by IP**: Lets you set how many failed login attempts before blocking an IP address.
* **Time to unblock IP (In Minutes)**: Sets how long to unblock a blocked IP.
* **IP Whitelist**: Takes in a list of comma-separated IP addresses to be whitelisted.
* **Notify of failed login attempts**: When set true, a channel is notified of all failed login attempts.
* **Channel to send the notifications**: Specifies the channel where the failed login attempts is sent to. We recommend you create the channel first without the `#` symbol in the channel name.

## Login Logs

* **Log (on console) failed login attempts**: Logs all failed login attempts on the console.
* **Show Username on failed login attempts logs**: When enabled, usernames are shown on the console for all failed login attempts.
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

* **Send email to user when user is activated**: When enabled, an email is sent to the user after their account has been activated.
* **Send email to user when user is deactivated**: If set to `true`, users get an email after account deactivation.
* **Default username prefix suggestion**: This is the prefix that is suggested when a user is creating a username. Default is `user`.
* **Require Name For Signup**: If this is set to true, the name of the user is required to create an account.
* **Require Password Confirmation**: If this is set to true, the user has to input their password twice when registering.
* **Only allow verified users to login:** Enable this option only to allow the verified users only to log in.
* **Verify Email for External Accounts**: If this is set to true, users has to confirm their email via a confirmation email sent to their email. (For this setting to work, the SMTP settings must be already set up. See [Email Configuration](../email/setup.md))
* **Manually Approve New Users**: If this is set to true, new users have to wait for a user with the `view-user-administration` permission to approve their account before using Rocket.Chat.
* **Allowed Domains List**: This blocks emails with different domains than the ones on the list.
* **Blocked Domains List**: This blocks emails with domains that are on the list.
* **Blocked Username List:** This blocks usernames that are on the list.
* **Use Default Blocked Domains List**: Blocks the email domains listed [here](https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/app/lib/server/lib/defaultBlockedDomainsList.js)
* **Use DNS Domain Check**: When this is set to true, users won't be able to register with invalid domains.
* **Registration Form**: This changes how the registration form is presented. Currently, there are 3 options:
  * Public: The form is made public and anyone is able to access it.
  * Disabled: The form is disabled and users can not register through it.
  * Secret URL: The form is only accessible using a specific URL.
* **Registration Form Secret URL**: String to be added to the secret URL. Is recommended to use a random string for that. Example: `https://open.rocket.chat/register/[secret_hash]`.You can copy this URL to share the form with anyone.
* **Invite URL Type**: URL type can either be direct or through a proxy.
* **Registration Form Link Replacement Text**: Text to be shown in place of the registration form when the registration form is disabled.
* **Registration with Authentication Services**: Set this to true to allow registration with third-party authentication services like Google or Twitter.
* **Default Roles for Authentication Services**: Default roles users are given when registering through authentication services.
* **Default Roles for Users:** Default roles users are given when registering through manual registration.
* **Password Reset**: Set this to true to allow users to reset their password.
* **Custom Fields**: A valid `JSON` of key-value pairs of additional fields to be added during user registration.
