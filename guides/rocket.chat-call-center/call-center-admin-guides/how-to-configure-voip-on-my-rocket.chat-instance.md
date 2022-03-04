# How to Configure VoIP on my Rocket.Chat instance?

Please make sure your environment meets the prerequisites to be able to configure VoIP/Call Center feature on your Rocket.Chat instance.

{% content-ref url="../voip-introduction/voip-prerequisites.md" %}
[voip-prerequisites.md](../voip-introduction/voip-prerequisites.md)
{% endcontent-ref %}

To configure VoIP on your Rocket.Chat instance:

1. Go to **Avatar Menu > Administration > Settings**&#x20;
2. Search **Call Center**

as shown below:

![Rocket.Chat Call Center](<../../../.gitbook/assets/image (687).png>)

## 1. Enabling VoIP

VoIP does not come enabled by default. You can enable it on your Rocket.Chat instance by:

1. Go to **Avatar Menu > Administration > Settings**&#x20;
2. Search **Call Center**

as shown below:

![VoIP Enable/Disable](<../../../.gitbook/assets/image (666).png>)

## 2. Configuration of the management server (Asterisk)

**Rocket.Chat** is using **** [**Asterisk**](https://www.asterisk.org) as its call management server. To get your own Asterisk server please [contact](https://www.asterisk.org/products/) Asterisk.

Rocket.Chat needs the following credentials to connect to Asterisk and start receiving the call management matrix such as queues, extensions, and other management data.

{% hint style="info" %}
Asterisk is a software PBX (A switching system for organizations to share trunks).

Rocket.Chat is using it for call bookkeeping data like how many queues are there, extension data, agents allocated to a queue, routing system, and others.
{% endhint %}

To configure this integration between Rocket.Chat and Asterisk:

* Go to **Avatar Menu > Administration > Settings**&#x20;
* Search **Call Center**
* Under the **Settings** tab navigate to **Management Server** and click it open.
* All the settings needed here should be provided to you by your _Asterisk manager._&#x20;

![Management server configuration ](<../../../.gitbook/assets/image (668).png>)

## 3. Configuration of call server

Rocket.Chat needs a WebSocket connection for the forwarding of calls from Asterisk to Rocket.Chat.

To configure this WebSocket connection between Rocket.Chat and Asterisk:

* Go to **Avatar Menu > Administration > Settings**&#x20;
* Search **Call Center**
* Under the **Settings** tab navigate to **Server Configuration** and click it open.
* All the settings needed here should be provided to you by your _Asterisk manager._&#x20;

![Call server configuration](<../../../.gitbook/assets/image (647).png>)

Congratulations! Your Rocket.Chat instance is connected to Asterisk server and is able to receive calls from Asterisk server successfully. 😊

{% hint style="info" %}
The connection and communication between Rocket.Chat client (SIP Client) and Asterisk are established using WebSockets.
{% endhint %}

{% hint style="info" %}
The phone numbers that your customers are dialling are associated with the queues in Asterisk.
{% endhint %}
