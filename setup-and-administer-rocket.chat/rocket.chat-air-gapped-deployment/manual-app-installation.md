# Air-gapped App Installation

Rocket.Chat allows you to extend and bring in new functionalities to your workspace by building and using Rocket.Chat apps using the [apps engine](https://developer.rocket.chat/apps-engine/rocket.chat-apps-engine).

These apps can help in improving collaboration, boosting productivity, and have you do more with your workspace.

{% hint style="info" %}
Following apps work without internet access and can be requested via your registered support contact in the support team.

* [Bamboo Integration](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian/bamboo-integration.md)
* [Bitbucket Server](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian/bitbucket-server-integration.md)
* [Confluence Server](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian/confluence-server-integration.md)
* [Data Loss Prevention](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/data-loss-prevention-dlp-app.md)
* Jenkins Integration
* [JIRA Server Integration](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian/jira-server-integration.md)
* [Jitsi](../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/jitsi-app.md)
* [Pexip](../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/pexip-app.md)
{% endhint %}

As a fully air-gapped user, you will have to manually install the apps you need to use on your workspace. In this section, we will see how to get and install an app in an air-gapped workspace.

## Getting an App

You have the option to:

1. [Request for an existing Rocket.Chat App](manual-app-installation.md#1.-requesting-for-a-rocket.chat-app) (if you are an Enterprise customer)
2. [Build an App by yourself](manual-app-installation.md#2.-building-a-rocket.chat-app) (for Community)

### 1. Requesting for a Rocket.Chat App

The apps can be requested via your registered support contact in the support team.

### 2. Building a Rocket.Chat App

See the guide on building Rocket.Chat apps.

{% embed url="https://developer.rocket.chat/apps-engine/getting-started" %}

## Installing an App

After getting your packaged and ready-to-use app in a `.zip` format, follow the instructions below to install it on your workspace.

* &#x20;Navigate to **Administration** -> **Workspace** -> **Apps**
* Click on **Upload App**

<figure><img src="../../.gitbook/assets/Apps panel.png" alt=""><figcaption><p>Apps panel</p></figcaption></figure>

* You are taken to a page to either install from a URL or a file
* Choose the **Install from file** method&#x20;
* Select the `.zip` file of the app and **Install**

<figure><img src="../../.gitbook/assets/App installation page.png" alt=""><figcaption><p>App installation page</p></figcaption></figure>

* **Agree** to the permissions needed to complete the installation.

