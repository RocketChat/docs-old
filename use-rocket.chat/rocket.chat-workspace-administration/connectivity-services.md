# Connectivity Services

Rocket.Chat Connectivity Services gives you access to connect your self-hosted workplace to Rocket.Chat cloud. Connecting your workplace to the cloud gives you access to interact with services like

* Mobile push notifications gateway
* Live Chat Omnichannel proxy
* OAuth proxy for social network
* Apps Marketplace

To access this menu:

* Navigate to **Administration** > **Workspace** > **Connectivity Services**

## Introduction

Rocket.Chat Cloud provides a list of features/services, such as:

* [Rocket.Chat Push Notification Gateway](https://docs.rocket.chat/guides/administrator-guides/notifications/push-notifications#push-gateway)
* [Rocket.Chat Marketplace](https://rocket.chat/marketplace)
* Omnichannel proxy
* Automatic license synchronization

To use those services, Rocket.Chat server must be connected to [cloud.rocket.chat](https://cloud.rocket.chat). Below are the steps required to connect and synchronize a Rocket.Chat self-hosted server to our cloud infrastructure.

{% hint style="info" %}
The steps below are required only for self-managed instances. Rocket.Chat SaaS workspaces are always connected to our Cloud infrastructure.
{% endhint %}

{% hint style="info" %}
To connect your server to our Cloud, your Rocket.Chat server must be on a supported version.
{% endhint %}

## Registration steps

{% hint style="success" %}
If you are an enterprise customer (self-hosted Enterprise or Pro-licensed), we create a cloud account for you. Please login to your workspace, insert the cloud registration code you received in the welcome email, and then hit **Login to** [**Rocket.Chat**](http://rocket.chat) **Cloud**
{% endhint %}

**If you don't have a cloud account yet:**

* Go to [cloud.rocket.chat](https://cloud.rocket.chat) and&#x20;
* Hit **Create account**
* Fill up the registration form and hit **Next**
* A verification email will be sent to your provided email address. Please click the verification link. It redirects you to cloud.rocket.chat.&#x20;
* After the validation, you will be logged into your Cloud console.&#x20;
* In order to register your self-hosted workspace: please select the **Register self-managed** under **Workspaces.**&#x20;

<figure><img src="../../.gitbook/assets/RocketChat cloud register self manage.png" alt=""><figcaption><p>Rocket.Chat cloud register self manage</p></figcaption></figure>

* A pop-up will be displayed in order to select the workspace type:

<figure><img src="../../.gitbook/assets/Cloud services.png" alt=""><figcaption><p>Cloud services</p></figcaption></figure>

1. **Internet Access**: Rocket.Chat server that has a connection to the internet (connected to the outside)
2. **No Internet Access**: Special cases where Rocket.Chat workspace is air-gapped.

{% hint style="info" %}
See the guide on how to register an offline workspace.[air-gapped-workspace-configuration.md](../../setup-and-administer-rocket.chat/rocket.chat-air-gapped-deployment/air-gapped-workspace-configuration.md "mention")
{% endhint %}

{% hint style="info" %}
In the following section, we are going to cover the option for **Internet Access**.
{% endhint %}

## Apply Online License

A registration token will be generated when selecting the "Internet Access" option. Copy the token, as this will be used to register your Rocket.Chat server.

![](../../.gitbook/assets/c\_8.png)

* On your Rocket.Chat workspace, navigate to **Administration** > **Workspace** > **Connectivity Services**
* Enter the **Email** linked to your Rocket.Chat Cloud account
* &#x20;Paste the registration token generated in the **Token** field
* Hit **Connect**

It will set the connection between your Rocket.Chat workspace and Rocket.Chat Cloud console. When the connection is successful, the _Connectivity Services_ panel will look like this:

![](../../.gitbook/assets/c\_10.png)

Finally, in order to ensure the synchronization between Rocket.Chat workspace and Rocket.Chat Cloud, hit the **Sync** button. This will trigger the synchronization framework. This is recommended right after registering your server.&#x20;

The newly registered workspace will be listed in the **Workspace** section at [cloud.rocket.chat](https://cloud.rocket.chat)
