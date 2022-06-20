# Dead Simple Screen Sharing

{% hint style="info" %}
This integration is no longer available for free, and the access to API is paid only.
{% endhint %}

Log in as an administrator and go to **Administration > Integrations > New Integration > Outcoming Webhook** and configure the outgoing webhook settings:

* **Event Trigger**: Select **Message Sent**  of **** which type of event will trigger this Outgoing WebHook Integration.
* Set Enabled to "**True**".
* In the Name enter "**Dead Simple Screen Sharing**"
* Under the Channel Type in `all_public_channels,all_private_groups,all_direct_messages`
* Trigger words type in `screenshare`
* Under URLs type: `https://app.deadsimplescreensharing.com/webhook/rocketchat`
* Under Post as: `rocket.cat`
* Click "**Save Changes**".

You can now easily create a meeting right from Rocket.Chat by just typing /`screenshare` in Rocket.Chat and a Dead Simple Screen Sharing meeting will be created, and you and your team members can visit the meeting link and perform screen sharing and audio-conferencing.

To know more about the service: [https://deadsimplescreensharing.com/](https://deadsimplescreensharing.com/)
