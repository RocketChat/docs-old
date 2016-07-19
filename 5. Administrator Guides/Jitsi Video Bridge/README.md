# Jitsi Video Bridge

Rocket.Chat has long featured the ability to video and voice chat one-on-one, or with small groups. 

The implementation is based on WebRTC, and operates peer-to-peer without a server.   
 
 While this implementation is mostly functional, there exists severe limitations with geographically 
 disbursed participants, group chat use-cases (bandwidth required by p2p group chat
 is not scalable beyond 3 users or so), and more.

The [Jitsi Meet project](https://jitsi.org/Projects/JitsiMeet) (Jitsi Video Bridge) is a tried and true bandwidth efficient WebRTC compatible SFU (server based) 
solution from our gracious FOSS partner, [Jitsi](https://jitsi.org/).

Through the collaboration arrangement with Jitsi, Rocket.Chat users can enjoy  reliable and robust
group video chat, audio chat, and screensharing experience out of the box.  

To enable Jitsi:

`Administation -> SETTINGS -> Video Conference`

then

Set  `Enabled`  to `True`

No further configuration is needed.

## How to set up your own Jitsi Video Bridge

In some use-cases, where the Jitsi.org infrastructure may be remote or inaccessible, or where you
require total privacy,  setting up your own Jitsi Meet servers stack may be necessary.

You can find extensive instructions on setting up a Jitsi Meet servers stack at the [official Jisti Meet repository](https://github.com/jitsi/jitsi-meet).

Also, please consult our guide to [quick setup of Jitsi Meet servers stack via Docker image]().


