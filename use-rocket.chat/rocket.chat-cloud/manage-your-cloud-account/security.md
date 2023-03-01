---
description: Manage the security of your Rocket.Chat Cloud account.
---

# Security

## Password

You can reset your password easily by signing out and clicking **Reset password** on the Rocket.Chat Cloud login page.

A password reset link is sent to your email if it matches an account.

## Two Factor Authentication

Setting up 2FA(Two Factor Authentication) provides a higher layer of securing to your Rocket.Chat Cloud account.

{% hint style="info" %}
Before setting up 2FA, you must set a password for your account first.
{% endhint %}

To set up 2FA:

* Click on **Enable** to enable the feature
* A modal is shown, prompting you to enter your TOTP (time-based one-time password) or to create one if you don't have
* Download and have available any Authenticator app of your choice to proceed. Some popular Authenticators include [Google Authenticator](https://googleauthenticator.net/),[ Authy, ](https://authy.com/)and[ Duo](https://duo.com/)
* Scan the QR Code provided with your Authenticator app or setup the Authentication keys manually
* Copy the code displayed by the newly added Authentication means (`Rocket.Chat Cloud`) and fill in the field prompting to enter the code, then proceed
* A list of backup codes is provided. Save them securely in case you lose access to your Authenticator app
* After that, the 2FA setup is completed

You should now see on the security page the number of backup codes left and have the ability to disable 2FA or generate new codes.

{% hint style="success" %}
With 2FA enabled on your account, you will be required to provide the Authenticator code when resetting your password and when logging in through password or passwordless means.
{% endhint %}
