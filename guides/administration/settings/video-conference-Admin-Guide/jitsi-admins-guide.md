# Jitsi Admin's Guide

## Jitsi

You can use the [Jitsi Meet](https://jitsi.org/jitsi-meet/) video conferencing platform embedded in Rocket.Chat.

The [Jitsi Meet project](https://jitsi.org/Projects/JitsiMeet) (Jitsi Video Bridge) is a tried and true bandwidth-efficient WebRTC compatible SFU (server-based) solution from our gracious FOSS partner, [Jitsi](https://jitsi.org).

Through the collaboration arrangement with Jitsi, Rocket.Chat users can enjoy reliable and robust group video chat, audio chat, and screen sharing experience out of the box.



**To enable BBB:**

1. Go to **Administration**&#x20;

![](<../../../../.gitbook/assets/image (249).png>)

2\. Search **Video conference**&#x20;

![](<../../../../.gitbook/assets/image (250).png>)

3\. Hit Jitsi

![](../../../../.gitbook/assets/2021-11-26\_01-35-25.png)



4\. **Enabled**: Lets you enable the use of Jitsi.

5\. **Domain**: Your Jitsi domain

6\. **URL room prefix**: Lets you set the URL room prefix

7\. **URL room suffix**: Your room sufix

8\. **Enable room name hash**: Enables room hash when set to true. Recommended to enable if the Jitsi instance doesn't use any authentication mechanism.

9\. **SSL**: Your jitsi SSL

10\. **Always Open in New Window**: When enabled, video conferences will be triggered to open in a new window.

11\. **Enable for Channels**: When set to true, enables video conferencing in channels

12\. **Enable for Teams**: Lets you to enable video conferencing in teams

13\. **Chrome Extension Id**: Your Jitsi chrome extension Id

14\. **Enable JWT auth**: Activate this to enable JWT auth

15\. **Application ID (iss)**: Your Jitsi application ID

16\. **Application Secret**: Your Jitsi app secret

17\. **Limit token to Jitsi Room**: Lets you limit tokens to Jitsi Room

![](../../../../.gitbook/assets/2021-11-26\_01-59-31.png)

### How to set up your own Jitsi Meet server

In some use-cases, where the Jitsi.org infrastructure may be remote or inaccessible, or where you require total privacy, setting up your own Jitsi Meet servers stack may be necessary.

You can find extensive instructions on setting up a Jitsi Meet servers stack at the [official Jisti Meet repository](https://github.com/jitsi/jitsi-meet).

After setting your Jitsi Meet Server, you can set the meeting Domain to the one on your server.
