---
description: An extension for the existing production-ready WhatsApp App.
---

# WhatsApp Sandbox

The **WhatsApp Sandbox** app allows you quickly test [Rocket.Chat](http://rocket.chat/) integration with WhatsApp within a sandbox environment. In this test environment, you can test sending messages and templates and receive a webhook.

{% hint style="info" %}
This app is not intended for production use. It is only intended for testing purposes. For production use, please use the [official WhatsApp integration](https://docs.rocket.chat/guides/app-guides/omnichannel-apps/whatsapp).
{% endhint %}

{% hint style="warning" %}
You must have the [Omnichannel feature](../../../../../use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide/) enabled, as well as have [agents](https://docs.rocket.chat/guides/omnichannel/agents) and [managers](https://docs.rocket.chat/guides/omnichannel/managers) assigned in order to receive and send Omnichannel messages\*\*.\*\*
{% endhint %}

### Quickstart: How to test WhatsApp in the Sandbox <a href="#quickstart-set-up-a-log-analytics-workspace" id="quickstart-set-up-a-log-analytics-workspace"></a>

* Get a Test API key from 360Dialog. You can get one by following the steps mentioned [here](https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox).
* Once you have a Sandbox API key, you can update the app setting with the API key (From **Administrator -> Apps -> Installed -> Whatsapp Sandbox -> Settings**).
* You can then start sending messages from WhatsApp to [Rocket.Chat](http://rocket.chat/).

{% hint style="info" %}
To get any support, please run the `/whatsapp-sandbox support` command.
{% endhint %}

{% content-ref url="whatsapp-sandbox-installation.md" %}
[whatsapp-sandbox-installation.md](whatsapp-sandbox-installation.md)
{% endcontent-ref %}

{% content-ref url="whatsapp-sandbox-configuration/" %}
[whatsapp-sandbox-configuration](whatsapp-sandbox-configuration/)
{% endcontent-ref %}

{% content-ref url="whatsapp-sandbox-configuration/delete-whatsapp-sandbox.md" %}
[delete-whatsapp-sandbox.md](whatsapp-sandbox-configuration/delete-whatsapp-sandbox.md)
{% endcontent-ref %}

{% content-ref url="whatsapp-sandbox-agents-guide.md" %}
[whatsapp-sandbox-agents-guide.md](whatsapp-sandbox-agents-guide.md)
{% endcontent-ref %}
