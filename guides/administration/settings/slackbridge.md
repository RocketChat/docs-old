---
description: Configure SlackBridge to mirror Slack in real-time
---

# SlackBridge

SlackBridge lets you mirror Slack and Rocket.Chat servers in real-time.

To access this menu, go to **Administration** > **Settings** > **SlackBridge**

![](<../../../.gitbook/assets/administration >)

![](<../../../.gitbook/assets/image (693) (1).png>)

{% hint style="info" %}
Remember to hit **Save Changes** in order to apply any changes made.
{% endhint %}

* **Enabled**: Toggle to true to enable SlackBridge
* **API Tokens**: Takes in API tokens of your Slack servers. You can configure multiple slack servers by adding one API Token per line.
* **File Upload**: Enable to permit file uploads between servers.
* **SlackBridge Out Enabled**: Choose whether SlackBridge should also send your messages back to Slack
* **SlackBridge Out All**: Send messages from all channels that exist in Slack and the bot has joined
* **SlackBridge Out Channels**: Lets you choose which channels will send messages back to Slack.
* **Alias Format**: Import messages from Slack with an alias; `%s` is replaced by the username of the user. If empty, no alias will be used.
* **Exclude Bots**: Takes in a regular expression to not propagate messages from any bot whose name matches the regular expression. If left empty, all messages from bots will be propagated.
* **Reactions**: Enable to get reactions
* **Remove channel links**: Remove the internal link between Rocket.Chat channels and Slack channels. The links will afterwards be recreated based on the channel names.
