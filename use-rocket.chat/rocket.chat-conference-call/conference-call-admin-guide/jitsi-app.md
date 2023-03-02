# Jitsi app

{% hint style="success" %}
This app can also work in a fully air-gapped environment. If you are an Enterprise customer running an air-gapped workspace, follow the [Air-gapped App installation guide](../../../setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-app-installation.md) and continue with the configuration instructions below.
{% endhint %}

**Jitsi** is a [collection of open Source projects](https://jitsi.github.io/handbook/docs/architecture) which provide state-of-the-art video conferencing capabilities that are secure, easy to use, and easy to self-host. The [Jitsi Meet project](https://jitsi.org/Projects/JitsiMeet) (Jitsi Video Bridge) is a tried and true bandwidth-efficient WebRTC-compatible SFU (server-based) solution from our gracious FOSS partner, [Jitsi](https://jitsi.org). Rocket.Chat users can now enjoy reliable and robust group video, audio, and screen-sharing experiences through **Jitsi**.

## Download the Jitsi app

{% hint style="info" %}
**A Jitsi server is required for this integration.**
{% endhint %}

To Download the **Jitsi** app on your workspace,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Jitsi Video Conference Provider** app.
* Click **Install**

## Set up the Jitsi app&#x20;

To set up the **Jitsi** app on your workspace,

* Confirm that the app is enabled.
* Go to the settings tab and update the following fields:
  * **Domain**: Your Jitsi domain
  * **Title prefix**: Text added before the title when identifying a video conference
  * **Title suffix**: Your room suffix
  * **Use SSL**: Your Jitsi SSL
  * **Chrome Extension Id**: Your Jitsi chrome extension Id
  * **Use Authentication Token**: When enabled, Rocket.Chat will generate a JWT token using the settings below.
  * **Application ID (iss)**: The app id to use when generating authentication tokens.
  * **Application Secret**: The app secret to use when generating authentication tokens.
  * **Limit token to Jitsi Room**: If enabled, generated tokens will grant access only to the intended Jitsi room.
  * **Token Auditor**: The auditor's name to use when generating authentication tokens.
  * **Token Expiration**: The expiring time of the authentication tokens.
* Click **Save Changes**

### Configure conference call using the Jitsi app

To configure the **Jitsi** video conference on your workspace,

* Go to **Administration > Settings > Conference Call**
* Select Jitsi as your **Default Provider**
* Select the options that meet your needs and click **Save changes.**

The **Jitsi** app is successfully configured on your server. Follow[conference-call-users-guide.md](../conference-call-users-guide.md "mention") to start using it.
