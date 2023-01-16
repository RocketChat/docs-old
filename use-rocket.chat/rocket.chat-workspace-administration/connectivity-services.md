# Connectivity Services

Rocket.Chat Connectivity Services gives you access to connect your self-hosted workplace to Rocket.Chat cloud. Connecting your workplace to the cloud gives you access to interact with services like

* Mobile push notifications gateway
* Live Chat Omnichannel proxy
* OAuth proxy for social network
* Apps Marketplace

To access this menu, go to **Administration** > **Workspace** > **Connectivity Services.**

as shown below:

![](<../../../.gitbook/assets/2021-11-20\_23-29-48 (1) (1) (1) (1) (12) (10) (1) (1) (1) (4).png>)

![](../../../.gitbook/assets/2021-11-21\_01-53-58.png)

## Introduction

Rocket.Chat Cloud provides a list of features/services such as

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

1. Go to [cloud.rocket.chat](https://cloud.rocket.chat) and create a new account

![](<../../../.gitbook/assets/image (647) (2).png>)

* Fill up the registration form and **Register**

![](<../../../.gitbook/assets/image (665) (1) (1).png>)

* A verification email will be sent in order to activate your new Cloud account

![](<../../../.gitbook/assets/image (681) (1).png>)

* The verification link will forward to cloud.rocket.chat. After the validation, you will be logged into your Cloud console. In order to register your self-hosted workspace, please select the "Register self-managed" button

<figure><img src="../../../.gitbook/assets/RocketChat cloud register self manage.png" alt=""><figcaption><p>Rocket.Chat cloud register self manage</p></figcaption></figure>

* A pop-up will be displayed in order to select the workspace type:

<figure><img src="../../../.gitbook/assets/Cloud services.png" alt=""><figcaption><p>Cloud services</p></figcaption></figure>

1. **Internet Access**: Rocket.Chat server that has a connection to the internet (connected to the outside)
2. **No Internet Access**: Special cases where Rocket.Chat server has no connection at all (totally air-gapped).

{% hint style="info" %}
In this section, we are going to cover the option for **Internet Access**.
{% endhint %}

See the guide on how to Register an offline workspace.

{% content-ref url="../../../setup-and-administer-rocket.chat/rocket.chat-air-gapped-deployment/offline-workspace-registration.md" %}
[offline-workspace-registration.md](../../../setup-and-administer-rocket.chat/rocket.chat-air-gapped-deployment/offline-workspace-registration.md)
{% endcontent-ref %}

## Apply Online License

When selecting the "Internet Access" option, a registration token will be generated. Copy the token as this will be used to register your Rocket.Chat server.

![](../../../.gitbook/assets/c\_8.png)

1.  On your Rocket.Chat server, go to _Administration > Connectivity Services._

    Fill up the "Email" field with the email related to your Rocket.Chat Cloud account and in the "Token" field please paste the registration token generated. Finally, hit the "Connect" button.

![](../../../.gitbook/assets/c\_9.png)

1. It will set the connection between your Rocket.Chat server and Rocket.Chat Cloud console. When the connection is successful, the _Connectivity Services_ panel will look like this:

![](../../../.gitbook/assets/c\_10.png)

1. Finally, in order to ensure the synchronization between Rocket.Chat server and Rocket.Chat Cloud, hit the "Sync" button as this will trigger the synchronization framework.

This is recommended right after registering your server. The newly registered workspace will be listed in the "Workspace" section at [cloud.rocket.chat](https://cloud.rocket.chat)
