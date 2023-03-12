# Data Loss Prevention User Guide

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (27).jpg" alt=""><figcaption></figcaption></figure>

Data loss prevention (DLP), in its simplest terms, is a security mechanism that helps to ensure that sensitive data is not unduly shared, misused, lost, or accessed by unauthorized users.

Rocket.Chat's DLP App includes several controls to prevent data loss, such as restricting access to sensitive information, monitoring data transfers, and detecting and blocking potentially dangerous activities.

If there is any Rocket.Chat [Room](../rooms/), where sensitive information like credit card details, phone numbers, and IP addresses is being exchanged between users, you can prevent or restrict the sharing of this sensitive information using the DLP app.&#x20;

To get the DLP app functioning on your workspace, you need the workspace administrator to install and configure the app from the [Rocket.Chat marketplace](../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/).

That can be done following this guide.

{% content-ref url="../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/data-loss-prevention-dlp-app.md" %}
[data-loss-prevention-dlp-app.md](../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/data-loss-prevention-dlp-app.md)
{% endcontent-ref %}

## Data Loss Prevention App in Action

With the app installed and fully configured, the defined rulesets now take effect.

Say, for example, a user wants to share credit card details with a room or with another user,&#x20;

* The DLP app picks up this message and replaces the sensitive data with `###.` Clicking on **More info** gives more details about the message and its current status.

<figure><img src="../../../.gitbook/assets/Sensitive message sent.png" alt=""><figcaption><p>Sensitive message sent</p></figcaption></figure>

* The app's bot user `dlp.bot` notifies the specified channel about the sharing of sensitive details
* Channel Moderators can **Accept** or **Reject** the message from being sent or not

<figure><img src="../../../.gitbook/assets/DLP Channel moderator action.png" alt=""><figcaption><p>DLP Channel moderator action</p></figcaption></figure>

#### Approve

Approving a message lets the message go through, and it is received and visible in the room.

#### Reject

Rejecting a message prevents it from reaching its destination, and the status gets updated to `Rejected.`
