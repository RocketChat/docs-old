# Account Settings

In this section, you can modify various settings about the accounts of the users in your Rocket.Chat server.

In this guide, we will go over all settings in the _Accounts_ Section.

- **Allow anonymous read**: Setting this to true will allow people to use the chat without having to create an account or log in. Anonymous users will be only allowed to read messages on public channels.
- **Allow anonymous write**: This will allow Anonymous users to post messages on public channels.
- **Allow users to delete own account**: Setting this to true allows users to delete their account. When a user is deleted all their messages are deleted too.
- **Allow User Profile Change**: Setting this to false will block users from changing information on their profile.
- **Allow User Avatar Change**: Setting this to false will block users from changing their avatar.
- **Allow User Username Change**: Setting this to false will block users from changing their username.
- **Allow User Email Change**: Setting this to false will block users from changing their email
- **Allow User Password Change**: Setting this to false will block users from changing their password.

<!-- - __Custom Fields to Show in User Info__: link to dedicated custom field document -->

- **Login Expiration in Days**: After this number of days of inactivity the user will be logged out.
- **Show form-based Login**: Setting this to false will remove the login form from the login screen. This setting is useful when you are using a third-party login system.
- **Placeholder for email or username login field**: This will change the placeholder for the _email or username_ field on the login screen.
- **Placeholder for password login field**: This will change the placeholder for the _password_ field on the login screen.
- **Forget user session on window close**: This will log out users when they close the window containing Rocket.Chat

## Avatar

- **Resize Avatar**: Set this to true to resize users avatars to a predefined size. You need ImageMagick or GraphicsMagick installed on your server for this feature to work.
- **Avatar Size**: The desired size after the avatar resizing. The unit is pixels (px).
- **Set Default Avatar**: If this setting is set to true, Rocket.Chat will try to find a default avatar based on OAuth Account or Gravatar.

## Iframe

These settings are related to the Iframe Integration, please see the [Iframe integration page](../../developer-guides/iframe-integration) for more details.

## Registration

- **Default username prefix suggestion**: This is the prefix that will be suggested when a user is creating a username.
- **Require Name For Signup**: If this is set to true, the name of the user will be required to create an account.
- **Require Password Confirmation**: If this is set to true, the user will have to input his password twice when registering.
- **Email Verification**: If this is set to true, users will have to confirm their email via a confirmation email sent to their email. (For this setting work, the SMTP settings must be already set up. See [Email Configuration](../email/setup))
- **Manually Approve New Users**: If this is set to true, new users will have to wait for a user with the `view-user-administration` permission to approve their account before using Rocket.Chat.
- **Allowed Domains List**:  This will block emails with different domains than the ones on this list.
- **Blocked Domains List**:  This will block emails with domains that are on this list.
- **Use Default Blocked Domains List**: Will block the email domains listed on this [file](https://github.com/RocketChat/Rocket.Chat/blob/develop/packages/rocketchat-lib/server/lib/defaultBlockedDomainsList.js)
- **Use DNS Domain Check**: When this is set to true, users won't be able to register with invalid domains.
- **Registration Form**: This will change how the registration form is presented. Currently, there are 3 options:
    - Public: The form will be public and anyone will be able to access;
    - Disabled: The form will be disabled and users won't be able to register through it;
    - Secret URL: The form will be only accessible using a specific URL;
- **Registration Form Secret URL**: String to be added to the secret URL. Is recommended to use a random string for that. Example: `https://open.rocket.chat/register/[secret_hash]`.
- **Registration Form Link Replacement Text**: Text to be shown in place of the registration form when the registration form is disabled.
- **Registration with Authentication Services**: Set this to true to allow registration with third-party authentication services like Google or Twitter.
- **Default Roles for Authentication Services**: Default roles users will be given when registering through authentication services.
- **Password Reset**: Set this to true to allow users to reset their password.

## Two Factor Authentication

Here you can enable or disable Two Factor Authentication for users, and set for how long a token is valid.
