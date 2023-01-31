# Nextcloud Rocket.Chat App

The Nextcloud Rocket.Chat App integration offers a very powerful Open Source collaboration platform with a very high level of security and ownership. The flexibility to enjoy features from both solutions combined gives you a step further to use the _ultimate open-source alternative to MS 365._

![](<../../../.gitbook/assets/image (642).png>)

## Nextcloud Rocket.Chat App Setup

### Prerequisites

To use the Nextcloud Rocket.App, you are expected to have the following workspaces running:

* Rocket.Chat following our [deployment guide](../../../quick-start/deploying-rocket.chat)
* [Nextcloud](https://nextcloud.com)

{% hint style="warning" %}
Connecting Nextcloud with Rocket.Chat requires your Rocket.Chat sever to be on an SSL-protected domain. This is strictly for security reasons.
{% endhint %}

{% hint style="info" %}
You need to make the following changes to your Rocket.Chat settings

* Have two-factor Authentication disabled on your Rocket.Chat settings **Administration** > **Workspace** > **Settings** > **Accounts** > **Two Factor Authentication**
* Disable Restrict access inside any Iframe **Administration** > **Workspace** > **Settings** > **General** > **Restrict access inside any Iframe**
* Enable to send and receive data inside an iframe **Administration** > **Workspace** > **Settings** > **General** > **Iframe Integration**
{% endhint %}

### Setup

When that is all done, follow these procedures to get setup

* Go to your Nextcloud Dashboard and navigate to the **Apps** section

![](<../../../.gitbook/assets/image (634).png>)

* Navigate down to the **Social & Communication** category and locate the **Rocket.Chat App** then **Download and Enable**

![](<../../../.gitbook/assets/image (651).png>)

* Head over to your **Nextcloud settings** section and you will find a **Rocket.Chat** menu, open it to proceed with linking your Rocket.Chat workspace

![](<../../../.gitbook/assets/image (648).png>)

* Fill in the Rocket.Chat URL, admin username, and password to authenticate, click on **Connect and Save**. This will automatically generate an access token and userId to be used

![](<../../../.gitbook/assets/image (253) (1) (2).png>)

![](<../../../.gitbook/assets/image (667) (1) (1).png>)

* After connecting, the Admin User ID and Admin Token will be automatically filled, and your app is ready for use

![](<../../../.gitbook/assets/image (638).png>)

* Now along with other existing Nextcloud apps, you should see you now have Rocket.Chat included

![](<../../../.gitbook/assets/image (663).png>)

* Clicking on the Rocket.Chat icon will open up the chat interface like normal, all within Nextcloud.

![](<../../../.gitbook/assets/image (674).png>)

## Features

Using this integration gives you the possibility to:

* Extend and streamline communication with external parties using Rocket.Chat’s federation and bridges into Slack and Microsoft Teams.
* Easily collaborate on projects and documents using Rocket.Chat’s chat right in Nextcloud.
* Use a single productivity platform that integrates with other tools, including Nextcloud, and keeps all communications and notifications in one place.
* Leverage more advanced user governance features, access levels, and role-based permissions
* Easily map even the most complex organizational structure into groups, teams, and discussions.
* Securely collaborate and communicate with anyone via the world’s leading social media channels such as Whatsapp, Messenger, Twitter, Instagram, Telegram, and others.
* Turn their chats into productivity tools using integrations with various HR tools, CRM solutions, ticketing systems, project management solutions, and developer tools to build powerful workflows.
* Make digital workplaces and communities more engaging and collaborative using [Rocket.Chat’s marketplace of apps](https://rocket.chat/marketplace).
* Ensure full governance of all their communications using message audits, flexible retention policies, powerful engagement analytics and dashboards, and more.
* Send advanced message formatting like code snippets, formula syntax, message threads, and more.
