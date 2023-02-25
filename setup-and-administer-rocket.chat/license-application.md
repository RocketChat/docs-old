# License Application

Rocket.Chat License unlocks additional functionality included with your purchased [plan](https://www.rocket.chat/pricing). To be able to utilize these functionalities, you need to activate your workspace with a license.

This guide outlines how to add a license to your SaaS or Self-Managed workspace.&#x20;

## License on SaaS Workspaces

### I have a workspace from trial

If you created your workspace from [SaaS trial](https://www.rocket.chat/trial-saas-new) you can get a license for your workspace by

* Navigating to **Administration** > **Workspace** > **Connectivity Services**
* Click on **Sync** to sync the workspace to Rocket.Chat cloud

The Enterprise License gets applied to your workspace, and you can manage your cloud workspace [Rocket.Chat Cloud](https://cloud.rocket.chat/).

### I have a workspace provisioned by Rocket.Chat

If your workspace was provisioned by Rocket.Chat, you can access and get it set up by following the:

{% content-ref url="accessing-your-workspace/rocket.chat-setup-wizard.md" %}
[rocket.chat-setup-wizard.md](accessing-your-workspace/rocket.chat-setup-wizard.md)
{% endcontent-ref %}

### I do not have a workspace

To get a new SaaS workspace, you can use any of the following methods

* [Creating a SaaS trial](https://www.rocket.chat/trial-saas-new)
* [Contacting Rocket.Chat sales](../use-rocket.chat/rocket.chat-cloud/manage-your-cloud-account/contact-sales.md)
  * Before contacting sales, decide on a URL to use in the format `<your URL>.rocket.chat`
  * After the workspace has been created, visit the workspace URL and set it up following the [setup-wizard.md](../use-rocket.chat/workspace-administration/settings/setup-wizard.md "mention")

## License on Self-Managed Workspaces

After successfully [deploying your Rocket.Chat](../deploy-rocket.chat/prepare-for-your-deployment/) workspace applying license is possible with any of the following means depending on the type of workspace.

* **Online Workspace**: The Rocket.Chat workspace has access to the internet
* **Offline or Air-gapped workspace**: The Rocket.Chat workspace deployed has restricted or no internet access.

{% hint style="info" %}
To apply a license to a self-managed workspace, you are required to [Register your workspace](../use-rocket.chat/workspace-administration/connectivity-services.md#registration-steps).
{% endhint %}

Below are links to guides explaining how this can be archived

### Online Workspace

{% content-ref url="../use-rocket.chat/workspace-administration/connectivity-services.md" %}
[connectivity-services.md](../use-rocket.chat/workspace-administration/connectivity-services.md)
{% endcontent-ref %}

### Offline Workspace

{% content-ref url="rocket.chat-air-gapped-deployment/offline-license.md" %}
[offline-license.md](rocket.chat-air-gapped-deployment/offline-license.md)
{% endcontent-ref %}
