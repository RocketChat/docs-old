# Configure with an active PBX server

If you have:

1. An active [PBX server](../configure-without-previously-having-a-pbx-server/)
2. [SIP extensions](../configure-without-previously-having-a-pbx-server/sip-extensions.md) created
3. [Asterisk manager](../configure-without-previously-having-a-pbx-server/configure-asterisk-manager-interface-and-users.md) configured
4. And [Omnichannel activated](https://docs.rocket.chat/guides/omnichannel#omnichannel-activation)

You can start to configure the voice channel Rocket.Chat workspace.

### 1. Enable Voice Channel

1. Navigate to **Administration** > **Workspace** > **Settings** > **Voice Channel**
2. Enable voice channel, as shown below:

<figure><img src="../../../../.gitbook/assets/voice channel-voice channel.png" alt=""><figcaption><p>Voice channel</p></figcaption></figure>

**Rocket.Chat establishes two connections with Asterisk, one via AMI to read configuration and list extensions, queues, and some other things, and the second one is the WebRTC SIP registration.**

### 2. Configure AMI connection

Go to the menu **Avatar Menu > Administration - Settings - Voice Channel**, and in the **Management Server** section under the **Settings** tab, fill the form with the FQDN of your server and the user/password that we just [here](https://docs.rocket.chat/guides/rocket.chat-voice-channel/getting-started-with-voice-channel/configure-without-previously-having-a-pbx-server) or should be provided to you by your _Asterisk manager._

<figure><img src="../../../../.gitbook/assets/AMI connection-voice channel.png" alt=""><figcaption><p><em>AMI connection</em></p></figcaption></figure>

### 2.1 Test AMI Connection&#x20;

To test AMI connection, turn to the **Extensions** tab. Here you should see a list of the existing extensions in Asterisk:

<figure><img src="../../../../.gitbook/assets/Extensions-voice channel.png" alt=""><figcaption><p>Extensions</p></figcaption></figure>

Also enabling the AMI debug you may see connections coming and the RC AMI user connected:

```tcl
manager set debug on
manager show connected
```

<figure><img src="../../../../.gitbook/assets/Rocket.Chat connected to the Asterisk’s AMI.png" alt=""><figcaption><p>Rocket.Chat connected to the Asterisk’s AMI</p></figcaption></figure>

If you see it, your Rocket.Chat is connected to Asterisk’s AMI.

## 3. Configure WebSocket Server Connection

Rocket.Chat needs a WebSocket connection to forward calls from Asterisk to Rocket.Chat.

The parameters for a FreePBX connection are:

<figure><img src="../../../../.gitbook/assets/Websocket connection.png" alt=""><figcaption><p>Websocket connection</p></figcaption></figure>

Change them according to your Asterisk server conditions. Then in the Settings tab, assign at least one extension to a Rocket.Chat user. When that user logs in to Rocket.Chat the webphone will try to connect to Asterisk.

### 3.1 Test WebSocket Connection&#x20;

To test the WebSocket Connection, you just need to log in with a user associated with an extension and check if the extension registers successfully.&#x20;

![WebSocket not connected](<../../../../.gitbook/assets/image (2) (1).png>)

The phone icon with a slash over means that the WebSocket connection is possible, Rocket.Chat could send a SIP Options packet to Asterisk, and it was successfully answered. Click on the phone icon, and it will turn green. Now the user is ready to receive calls, and in Asterisk, you should have received a SIP register packet, and the extension should be properly registered. Validate it with:

`pjsip show endpoints`

<figure><img src="../../../../.gitbook/assets/Rocket.Chat configured with Asterisk.png" alt=""><figcaption><p>Rocket.Chat configured with Asterisk</p></figcaption></figure>

Congratulations! You have successfully configured Rocket.Chat with Asterisk!

The next step now is to [associate your Rocket.Chat agents with Asterisk extensions.](associate-agents-with-extensions-in-rocket.chat.md)\
