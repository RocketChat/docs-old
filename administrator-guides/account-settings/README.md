# Account Settings

In this section you can modify various settings about the accounts of the users in your Rocket.Chat server.

In this guide we will go over all settings in the _Accounts_ Section.

- __Allow anonymous read__: Setting this to true will allow people to use the chat without having to create a account or log in. Anonymous users will be only allowed to read messages on public channels.
- __Allow anonymous write__: This will allow Anonymous users to post messages on public channels.
- __Allow users to delete own account__: Setting this to true allows users to delete they own account. When a user is deleted all their messages are deleted too.
- __Allow User Profile Change__: Setting this to false will block users from changing information on their profile.
- __Allow User Avatar Change__: Setting this to false will block users from changing their avatar.
- __Allow User Username Change__: Setting this to false will block users from changing their username.
- __Allow User Email Change__: Setting this to false will block users from changing their email
- __Allow User Password Change__: Setting this to false will block users from changing their password.

<!-- - __Custom Fields to Show in User Info__: link to dedicated custom field document -->

- __Login Expiration in Days__: After this number of days of inactivity the user will be logged out.
- __Show form-based Login__: Setting this to false will remove the log in form from the login screen. This setting is useful when you are using a third party login system.
- __Placeholder for email or username login field__: This will change the placeholder for the _email or username_ field on the login screen.
- __Placeholder for password login field__: This will change the placeholder for the _password_ field on the login screen.
- __Forget user session on window close__: This will log out users when they close the window containing Rocket.Chat

## Avatar

- __Resize Avatar__: Set this to true to resize users avatars to a predefined size. You need ImageMagick or GraphicsMagick installed on your server for this feature to work.
- __Avatar Size__: The desired size after the avatar resizing. The unit is pixels (px).
- __Set Default Avatar__: If this setting is set to true, Rocket.Chat will try to find a default avatar based on OAuth Account or Gravatar.

## Iframe

These settings are related to the Iframe Integration, please se the [Iframe integration page] (/developers-guides/iframe-integration) for more details.

## Registration

- __Default username prefix suggestion__: This is the prefix that will be suggested when a user is creating a username.
- __Require Name For Signup__: If this is set to true, the name of the user will be required to create a account.
- __Require Password Confirmation__: If this is set to true, the user will have to input his password twice when registering.
- __Email Verification__: If this is set to true, users will have to confirm their email via a confirmation email sent to their email. (For this setting work, the SMTP settings must be already set up. See [Email Configuration]({{ site.url }}/administrator-guides/setup))
- __Manually Approve New Users__: If this is set to true, new users will have to wait for a user with the `view-user-administration` permission to approve their account before using Rocket.Chat.
- __Allowed Domains List__:  This will block emails with different domains than the ones on this list.
- __Blocked Domains List__:  This will block emails with domains that are on on this list.
- __Use Default Blocked Domains List__: Will block the email domains listed on this [file](https://github.com/RocketChat/Rocket.Chat/blob/develop/packages/rocketchat-lib/server/lib/defaultBlockedDomainsList.js)
- __Use DNS Domain Check__: When this is set to true, users wont be able to register with invalid domains.
- __Registration Form__: This will change how the registration form is presented. Currently there are 3 options:
    - Public: The form will be public and anyone will be able to access;
    - Disabled: The form will be disable and users wont be able to register through it;
    - Secret URL: The form will be only accessible using a specific URL;
- __Registration Form Secret URL__: String to be added to the secret URL. Is recommended to use a random string for that. Example: `https://open.rocket.chat/register/[secret_hash]`.
- __Registration Form Link Replacement Text__: Text to be shown in place of the registration form when the registration form is disabled.
- __Registration with Authentication Services__: Set this to true to allow registration with third party authentication services like Google or Twitter.
- __Default Roles for Authentication Services__: Default roles users will be given when registering through authentication services.
- __Password Reset__: Set this to true to allow users to reset their password.

<!--- __Custom Fields__ TODO: Create dedicated custom field document, since is a big topic -->
