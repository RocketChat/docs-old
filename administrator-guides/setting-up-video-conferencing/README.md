# Video Conferencing

If you want to enable video conferencing, you have 2 options, [Jitsi Meet](#jitsi-meet) or [RocketChat Meet](#rocketchat-meet-powered-by-webrtc).

We recommend using Jitsi for video conference, since RocketChat Meet is still a work in progress.

## Jitsi Meet

You can use the [Jitsi Meet](https://jitsi.org/jitsi-meet/) video conferencing platform embedded in Rocket.Chat.

The [Jitsi Meet project](https://jitsi.org/Projects/JitsiMeet) (Jitsi Video Bridge) is a tried and true bandwidth efficient WebRTC compatible SFU (server based)
solution from our gracious FOSS partner, [Jitsi](https://jitsi.org/).

Through the collaboration arrangement with Jitsi, Rocket.Chat users can enjoy reliable and robust
group video chat, audio chat, and screen sharing experience out of the box.

To enable Jitsi:

Go to `Administation -> SETTINGS -> Video Conference` then set `Enabled`  to `True`.

From there you can set where video conferences can be held (channels, private rooms and direct messages).

### How to set up your own Jitsi Meet server

In some use-cases, where the Jitsi.org infrastructure may be remote or inaccessible, or where you
require total privacy, setting up your own Jitsi Meet servers stack may be necessary.

You can find extensive instructions on setting up a Jitsi Meet servers stack at the [official Jisti Meet repository](https://github.com/jitsi/jitsi-meet).

After setting your Jitsi Meet Server you can set the meeting Domain to the one on your server.

## Rocket.Chat Meet (Powered by WebRTC)

Rocket.Chat Meet (in some places named as WebRTC) is our own take on implementing pure WebRTC. It still a work in progress but if you want to use it you can go to `Administration -> WebRTC`.

From there you can set where video conferences can be held (channels, private rooms and direct messages).

You can also define a list of `STUN/TURN` Servers to be used.
