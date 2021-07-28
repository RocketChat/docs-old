# Jitsi Meet Admin Guide

You can use the [Jitsi Meet](https://jitsi.org/jitsi-meet/) video conferencing platform embedded in Rocket.Chat.

The [Jitsi Meet project](https://jitsi.org/Projects/JitsiMeet) \(Jitsi Video Bridge\) is a tried and true bandwidth-efficient WebRTC compatible SFU \(server-based\) solution from our gracious FOSS partner, [Jitsi](https://jitsi.org/).

Through the collaboration arrangement with Jitsi, Rocket.Chat users can enjoy reliable and robust group video chat, audio chat, and screen sharing experience out of the box.

To enable Jitsi:

Go to `Administration -> SETTINGS -> Video Conference` then set `Enabled` to `True`.

![](../../../../.gitbook/assets/image%20%28239%29.png)

Here, you can set where video conferences can be held \(channels, private rooms, and direct messages\).

## How to set up your own Jitsi Meet server

In some use-cases, where the Jitsi.org infrastructure may be remote or inaccessible, or where you require total privacy, setting up your own Jitsi Meet servers stack may be necessary.

You can find extensive instructions on setting up a Jitsi Meet servers stack at the [official Jisti Meet repository](https://github.com/jitsi/jitsi-meet).

After setting your Jitsi Meet Server, you can set the meeting Domain to the one on your server.

