# Manual App Installation

Rocket.Chat gives you the ability to extend and bring in new functionalities to your workspace by building and using Rocket.Chat apps using the [apps engine](https://developer.rocket.chat/apps-engine/rocket.chat-apps-engine).

These apps can help in improving collaboration, boosting productivity, and have you do more with your workspace.

{% hint style="info" %}
A list of published Rocket.Chat apps are available on the [Rocket.Chat Apps marketplace](https://marketplace.rocket.chat/)
{% endhint %}

As a fully air-gapped user, you will have to manually install the apps you need to use on your workspace.

In this section, we will see how to get and install an app in an air-gapped workspace.

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

After getting your packaged and ready-to-use app in a `.zip` format, follow the instructions below to have it installed manually on your workspace.

* Go to the Rocket.Chat **Administration** -> **Workspace** -> **Settings** -> **General** -> **Apps**&#x20;
* Toggle ON **Enable the App Framework** and **Enable development mode**
* Then **Save changes**

<figure><img src="../.gitbook/assets/Enable app development mode.png" alt=""><figcaption><p>Enable app development mode</p></figcaption></figure>

* After enabling, navigate to **Administration** -> **Workspace** -> **Apps**
* Click on **Upload App**&#x20;

<figure><img src="../.gitbook/assets/Apps panel.png" alt=""><figcaption><p>Apps panel</p></figcaption></figure>

* You are taken to a page to either install from a URL or a file
* Choose the **Install from file** method then select the `.zip` file of the app and **Install**

<figure><img src="../.gitbook/assets/App installation page.png" alt=""><figcaption><p>App installation page</p></figcaption></figure>

* **Agree** to the permissions needed to complete the installation
