# Jitsi Admin's Guide

## Jitsi

You can use the [Jitsi Meet](https://jitsi.org/jitsi-meet/) video conferencing platform embedded in Rocket.Chat.

The [Jitsi Meet project](https://jitsi.org/Projects/JitsiMeet) (Jitsi Video Bridge) is a tried and true bandwidth-efficient WebRTC compatible SFU (server-based) solution from our gracious FOSS partner, [Jitsi](https://jitsi.org).

Through the collaboration arrangement with Jitsi, Rocket.Chat users can enjoy reliable and robust group video chat, audio chat, and screen sharing experience out of the box.

To enable Jitsi:

Go to `Administration -> SETTINGS -> Video Conference` then set `Enabled` to `True`.

* **Enabled**: Lets you enable the use of Jitsi.
* **Domain**: Your Jitsi domain
* **URL room prefix**: Lets you set the URL room prefix
* **URL room suffix**: Your room sufix
* **Enable room name hash**: Enables room hash when set to true. Recommended to enable if the Jitsi instance doesn't use any authentication mechanism.
* **SSL**: Your jitsi SSL
* **Always Open in New Window**: When enabled, video conferences will be triggered to open in a new window.
* **Enable for Channels**: When set to true, enables video conferencing in channels
* **Enable for Teams**: Lets you enable video conferencing in teams
* **Chrome Extension Id**: Your Jitsi chrome extension Id
* **Enable JWT auth**: Activate this to enable JWT auth
* **Application ID (iss)**: Your Jitsi application ID
* **Application Secret**: Your Jitsi app secret
* **Limit token to Jitsi Room**: Lets you limit tokens to Jitsi Room

![](<../../../../.gitbook/assets/image (655).png>)

### How to set up your own Jitsi Meet server

In some use-cases, where the Jitsi.org infrastructure may be remote or inaccessible, or where you require total privacy, setting up your own Jitsi Meet servers stack may be necessary.

You can find extensive instructions on setting up a Jitsi Meet servers stack at the [official Jisti Meet repository](https://github.com/jitsi/jitsi-meet).

After setting your Jitsi Meet Server, you can set the meeting Domain to the one on your server.
