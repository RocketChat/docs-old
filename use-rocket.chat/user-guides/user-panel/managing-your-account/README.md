---
description: >-
  Manage your Rocket.Chat account settings through the browser, desktop, and
  mobile apps.
---

# My Account

To access and manage your Rocket.Chat account on a server,

* Log in to your Rocket.Chat server with a valid username and password.&#x20;
* Click your avatar and select **My Account**.
* You can update your **Profile**, **Preference** , **Security** and **Personal Access Tokens**.

{% hint style="info" %}
Account settings update on a single server **do not** change settings on a different server.
{% endhint %}

## Preference

In the **Preferences**, you can configure and set your preferences for your server.

To access this menu,&#x20;

* Navigate to **Avatar Menu > My Account** > **Preferences.**
* Update your preferences and click **Save Changes.**

### Localization

* **Language**: Set the language to use for the Rocket.Chat user interface.

### User Presence

* **Enable Auto-Away**: Enable the auto-away functionality, which changes the status to _away_ after an idle period.
* **Idle time limit**: Set the time in seconds it waits when status should change to away.

### Notifications

* **Desktop Notifications**: Click the **Test Desktop Notification** to see how notifications will be displayed on Desktop.
* **Require Interaction to Dismiss Desktop Notification**: When enabled, notifications must be attended to before they can be dismissed. i.e, they will remain in the notification panel until they are visited.
* **Show Desktop Notifications For**: Allows you select the type of messages for which the notifications have to be triggered (for both browser and desktop app notifications).
* **Send Push Notifications For**: Allows you select on what type of messages you wish to receive push notifications for.
* **Offline Email Notifications**: Allows you set what type of message notifications you want to receive by email.

{% hint style="danger" %}
For email notifications, you must verify your email address.
{% endhint %}

### Messages

* **Unread Tray Icon Alert**: Toggles if the tray icon highlights when you have unread messages.
* **Show thread messages in the main thread**: When enabled, threaded messages will be displayed directly in the room.
* **Time Format**: Set the time format of your account (**12 hour clock** or **24 hour clock**).
* **Use Emojis**: Enable this to allow the use of emojis.
* **Convert ASCII to Emoji**: Toggles emoji conversion when inputting ASCII characters.
* **Auto Load Images**: Enable to autoload images and avoid clicking on them to preview.
* **Save Mobile Bandwidth**: Saves mobile data when the app is open. Commonly known as Data Saver.
* **Collapse embedded media by default**: Toggles if messages with files collapse by default.
* **Hide usernames**: Hides usernames on the channels, showing only the users avatars.
* **Hide roles**: Hides role tags from users.
* **Hide right sidebar with a click**: Automatically closes the right sidebar when clicked.
* **Display Avatars**: Hides avatars on the channels, showing only the users' usernames.
* **Enter key behavior**: Lets you configure what the enter key does.
  * Normal mode (send with Enter)
  * Alternative mode (send with Enter + Ctrl/Alt/Shift/CMD)
  * Desktop mode (only sends with Enter on desktop)
* **View mode:** Change the amount of space messages take up on screen.
  * Normal: The default spacing between messages
  * Cozy: More space between messages (less on the screen)
  * Compact: Less space between messages (more on the screen)

### Highlights

* **Highlight words**: Specify a comma-separated list of words or phrases to trigger notifications for when mentioned by anyone in public or private channels of which you are a member.&#x20;

### Sound

* **New Room Notification**: Select the sound to play when added to a new room.
* **New Message Notification**: Select the sound to play for every new message.
* **Mute Focused Conversations**: When enabled, rooms that are opened and active will not create notifications.
* **Notifications sound volume**: Set the volume of the notification sound.

### My Data

Download your data as HTML or export it as JSON. Whichever option you choose, the request is processed in a queue, and a link to the exported file sent to your email.

## Profile

You can verify, edit and update your profile information in the user panel.

To access profile settings,&#x20;

* Navigate to **Avatar Menu > My Account** > **Profile**.
  * **Profile Picture**: Lets you upload a profile picture or use default avatar.
  * **Use URL for avatar**: Takes in a URL to fetch avatar from.
  * **Name**: Your name e.g. `John Doe`
  * **Username**: Your username e.g. `john.doe`
  * **Status Message**: Lets you specify a status update or what you are doing, along with a color.
  * **Nickname**: Set your nickname.
  * **Bio**: A short profile description.
  * **Email**: Your email address.
  * **New Password**: Update your acccount password.
  * **Confirm your Password:** Re-type your new password for confirmation.
  * **Resend Email Verification**: Click to request a link for email verification.
  * **Logout From Other Logged In Locations**: Click to sign-out of all other devices but the current one.

## Security

You can enable Two Factor Authentication (2FA) for your account to enhance your account security. There are two options for 2FA in Rocket.Chat :&#x20;

* **Two-factor authentication via TOTP :** It **** requires a key code from an authenticator app.
* **Two-factor authentication via Email :** It requies a key code that was sent to your email address**.**&#x20;

To access security settings,&#x20;

* Navigate to **Avatar Menu > My Account** > **Security**.

To enable **Two-factor authentication via TOTP**,

* Click **Enable Two-factor authentication via TOTP**.
* Use an authentication app, such as Google Authenticator, Authy, or Duo, to scan the QR code. Scanning the QR code displays a six-digit code. Enter the code into Rocket.Chat.
* Copy your backup code somewhere safe if you need to access it in the future without the authentication app. Click **Send** to finish.

To disable the 2FA, click **Disable Two-factor authentication via TOTP**.

To enable **Two-factor authentication via Email**,

* Click **Enable Two-factor authentication via Email**.

To disable the 2FA, click **Disable Two-factor authentication via Email**.

{% hint style="info" %}
&#x20;If you can't find the 2FA setting, please contact your workspace administrator. [See a detailed guide on 2FA here](./#two-factor-authentication).
{% endhint %}

### E2E Encryption

You can now create encrypted private groups and direct messages. You may also update existing private groups or DMs to encrypted. It is end-to-end encryption, so the key to encode/decode your messages isn't saved on the server. For that reason, you need to store your password somewhere safe. You will be required to enter it on other devices you wish to use e2e encryption.

#### **Change Encryption Password**

To create an encryption password,

* Enter a new encryption password&#x20;
* Confirm new encryption password and click **Save Changes**

#### &#x20;**Reset E2E Key**

This option will remove your current E2E key and log you out. When you log in again, Rocket.Chat will generate a new key and restore your access to any encrypted room that has one or more members online. Due to the nature of the E2E encryption, Rocket.Chat can't restore access to any encrypted room with no members online.

{% hint style="info" %}
[Please find a detailed guide on E2E Encryption here.](https://docs.rocket.chat/guides/user-guides/security-bundle/end-to-end-encryption)
{% endhint %}

## Personal Access Tokens

You can create personalized access tokens to use when making API calls.

To access **Personal Access Tokens**,&#x20;

* Navigate to **Avatar Menu > My Account** > **Personal Access Tokens**.

## **Creating a Personal Access Token**

To create a personal access token,&#x20;

* From the Access Token dashboard, enter the token name and hit **Add**.
* You can configure whether or not to ignore 2FA when using it by checking the **Ignore Two Factor Authentication** box.
* Enter your password or 2FA code to **Verify**.
* Your token is generated succesfully. A User Id and Token is displayed.

{% hint style="info" %}
Remember to store the user Id and Token in a safe place since you can only view it once.
{% endhint %}

## Delete Personal Access Token

To delete an access token,

* From the Personal Access Token list, click the **Delete** icon against the token you choose to delete.

## Regenerate Personal Access Token

To regenerate an existing access token,&#x20;

* From the Personal Access Token list, click the **Regenerate** icon against the token you choose to regenerate.

