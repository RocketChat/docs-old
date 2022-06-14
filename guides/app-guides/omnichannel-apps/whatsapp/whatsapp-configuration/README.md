# WhatsApp Configuration

To access the settings, go to **Administration** > **Apps**.

as shown below:

![](<../../../../../.gitbook/assets/2021-11-20\_23-29-48 (1).png>)

Search Whatsapp under the **Installed** tab in **Apps** menu on your Rocket.Chat administration panel.

Click open your WhatApp instance to see the settings available to you as an administrator:‌

Following are the settings available:‌

![](<../../../../../.gitbook/assets/2022-01-15\_19-53-39 (7).png>)

* **Notification of undeliverable message** to alert the agent that a message was not delivered to the WhatsApp platform.
* **Agents Display Info:** You can choose to display the agent's name or username.
* **File Uploads Enabled:** You can enable/disable file sharing and also set a limit for **Maximum File Upload Size (in bytes)**.
* **Accepted Media Types:** You can provide a list of media types comma-separated. Please leave it blank for accepting all media types.
* **Allow Quote Messages:** If enabled, Agents will see the quoted message reference on Rocket.Chat, when the Contact quotes/replies to a message on WhatsApp.

{% hint style="warning" %}
Before activating **Allow Quote Messages** feature, please ensure that you have the following index on "rocketchat\_apps\_persistence" collection in DB: **appId\_1\_associations\_1** You'd face performance issues if this index is not present. This index was added on version 4.2.0, so if you're on or above this version, then you should be good.
{% endhint %}

* **Template Message Metadata Refresh Interval(in Minutes):** For a better user experience, the app must cache some Template Messages meta-data information. You can define the duration (in minutes) within which the app will automatically refresh its cache.[ Further information on template messages is available here](https://developer.rocket.chat/guides/developer/apps-dev-guides/whatsapp-integration).
* Enter an endpoint URL here under **Message Status Endpoint URL**, where you want to receive the status of each message exchanged.
* **Filter Message Status:** Filter the statuses you wish to receive at the endpoint ("Message Status Endpoint URL") based on Message Type.
* **Allow List options for Quick Replies:** If enabled, messages with more than three quick reply options would be rendered as List options. Note: Max limit for list options is 10
* **Custom label for all List Option buttons:** Define a custom label message which you want to display on all Quick reply options sent as List Message.
* Hit **Save Changes** to save your settings.

‌Your WhatsApp is successfully configured, and you can see the new WhatsApp channel upon closing the administration panel, as shown below:

![](<../../../../../.gitbook/assets/image (442).png>)
