# Security

To access this menu, Click on you **profile** and go to **My Account** > **Security**

![](<../../../../.gitbook/assets/image (676) (2).png>)

## Two Factor Authentication

Enable or disable Two Factor Authentication (2FA) for your account on a Rocket.Chat server.

When you enable 2FA, you are required to get a key code from an app on your phone, thus increasing security when logging in.

**Note**: 2FA can be turned on and off by the system admin. If you can't find this setting, please contact your system admin.

To enable 2FA, you need to:

* Click the **Enable two-factor authentication** button.
* Use an authentication app, such as Google Authenticator, Authy, or Duo, to scan the QR code. Scanning the QR code displays a six-digit code. Enter the code into Rocket.Chat.
* Copy your backup code somewhere safe if you need to access it in the future without the authentication app. Click **Send** to finish.
* To disable the 2FA, click on **Stop two-factor authentication**.

{% hint style="info" %}
[Please find a detailed guide on 2FA here](security.md#two-factor-authentication).
{% endhint %}

## E2E Encryption

* **Change Encryption Password**: You can now create encrypted private groups and direct messages. You may also change existing private groups or DMs to encrypted.\
  This is end to end encryption so the key to encode/decode your messages will not be saved on the server. For that reason you need to store your password somewhere safe. You will be required to enter it on other devices you wish to use e2e encryption on.
* **Reset E2E Key**: This option will remove your current E2E key and log you out.\
  When you login again, Rocket.Chat will generate you a new key and restore your access to any encrypted room that has one or more members online.\
  Due to the nature of the E2E encryption, Rocket.Chat will not be able to restore access to any encrypted room that has no member online.

{% hint style="info" %}
[Please find a detailed guide on E2E Encryption here.](https://docs.rocket.chat/guides/user-guides/security-bundle/end-to-end-encryption)
{% endhint %}
