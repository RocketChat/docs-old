---
description: Secure your account with two factor authentication.
---

# Two Factor Authentication

With the ability to extensively use Rocket.Chat on multiple platforms, there's also risk of exposing your account details.

Luckily, it’s easy for you to add an extra level of protection to your accounts in the form of two-factor authentication, also commonly referred to as 2FA.

2FA increases the security of your account. Even if somebody guesses your password, they won’t be able to access your account without a second factor of confirmation you have in your possession.

{% hint style="info" %}
By default, 2FA is enabled with the email you used in signing up on the server.
{% endhint %}

## Enabling Two Factor Authentication

To enable 2FA on your account,&#x20;

* Click on your** Profile Badge** then navigate down to **My Account**

![](<../../../.gitbook/assets/image (672).png>)

* On my account, click on **Security**

![](<../../../.gitbook/assets/image (638).png>)

Time-based One-time Password (TOTP) is a time-based One Time Password. It is a very common form of 2FA.

It works by generating a unique numeric passwords with a standardized [algorithm](https://tools.ietf.org/html/rfc6238). The time-based passwords are made available and provide user friendly, increased account security when used as a second factor.

{% hint style="info" %}
You can use apps like **Google Authenticator, Authy**, etc to generate and manage your codes.
{% endhint %}

* Click on the **Enable two-factor authentication via TOTP **to enable** **it

![](<../../../.gitbook/assets/image (668).png>)

*   Open up your TOTP application and scan the QR code or enter the given code manually.

    After that, you enter the generated code from the app in to the field directly below then hit **Verify** to confirm

![](<../../../.gitbook/assets/image (685).png>)

* When it's done, you are provided with some recovery codes you can copy and store for recovery purposes.

![](<../../../.gitbook/assets/image (670).png>)

{% hint style="info" %}
The look of this interface might appear differently depending on the license you have on your server, but the workflow remains the same.
{% endhint %}
