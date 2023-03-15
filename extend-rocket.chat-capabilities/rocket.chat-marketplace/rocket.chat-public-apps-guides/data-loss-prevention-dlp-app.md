# Data Loss Prevention (DLP) App

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (27).jpg" alt=""><figcaption></figcaption></figure>

Data loss prevention (DLP), in its simplest terms, is a security mechanism that helps to ensure that sensitive data is not unduly shared, misused, lost, or accessed by unauthorized users.

{% hint style="info" %}
The Data Loss Prevention App is free to use for [Enterprise ](../../../use-rocket.chat/workspace-administration/settings/enterprise.md)workspaces.

The App works best with the most recent version of Rocket.Chat.
{% endhint %}

{% hint style="success" %}
This app can also work in a fully air-gapped environment. If you are an Enterprise customer running an air-gapped workspace, follow the [air-gapped-app-installation.md](../../../setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-app-installation.md "mention") guide and then follow the configuration instructions below.
{% endhint %}

## Installing the Data Loss Prevention App

To install the Data Loss Prevention App,

* Open up your Rocket.Chat workspace
* Navigate to **Administration** > **Workspace** > **Apps**
* Search for Data Loss Prevention
* Click and open the result, this shows you details about the app
* Hit **Install** to install the app

This successfully installs the app and you can now configure the settings as needed.

## Configuring the Data Loss Prevention App

After installing the app, you need to configure the rule set for its functionality.

That can be done by:

* Open the DLP app details page
* Switch to the **Settings** tab
* Configure the following settings as needed

### Settings

* **Rules for Blacklisting message**: Takes in an array of regular expressions defining the rules. Add each Regular Expression on a new line.
* **Moderator Channel**: Specify the channel to which all blacklisted messages will be forwarded to. From there, the [Channel Moderators](../../../setup-and-administer-rocket.chat/roles-in-rocket.chat/#rocket.chat-user-roles) can either `Approve` or `Reject` the message. e.g `general`
* **Content control type**: Set channels you would like to monitor or not monitor.
  * Channels: Comma-separated list of channels where you wish to apply the **Content control type** rule.
* **Censor only Sensitive Information**: If enabled, only the sensitive information will be replaced by ###### (multiple hashtags)
* **Custom Blacklisted Message title**: Set the title of a temporal message replacing a blacklisted message.
* **Custom Pending approval message**: This message will be shown in place of the blacklisted message in a room until the blacklisted message gets approved. Will be shown if the user clicks on the **More info** button under the blacklisted message in a room until the blacklisted message gets approved
* **Custom Rejected Message**: This message will be shown in place of the blacklisted message in a room when a moderator rejects a blacklisted message.

{% hint style="info" %}
* Through DLP features, admins can create a list of regular expressions to be monitored in Rocket.Chat and it can be applied to any conversation.
* Once a regular expression is detected, it appears blurred in the room where it was originally written. The original message then is forwarded to a predefined channel for auditing flow, where a moderator can approve or reject its content. Rooms can have more than one moderator.
* It’s also possible to select the rooms to apply the DLP app. If you have channels on your workspace where sensitive information is frequently shared or where data leak is more likely to happen, e.g `the finance team channel,`you can place a restriction on this specific channel.
{% endhint %}

* **Save changes** to commit.

The Data Loss Prevention App is ready and functional on your workspace.

{% content-ref url="../../../use-rocket.chat/user-guides/security-bundle/data-loss-prevention-user-guide.md" %}
[data-loss-prevention-user-guide.md](../../../use-rocket.chat/user-guides/security-bundle/data-loss-prevention-user-guide.md)
{% endcontent-ref %}
