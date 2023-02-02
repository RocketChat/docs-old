---
description: Administrator initial workspace configuration for Rocket.Chat server.
---

# Rocket.Chat Setup Wizard

After installing your Rocket.Chat server, it is time to configure and start enjoying all the amazing features.

Rocket.Chat provides multiple [Rocket.Chat Client Apps](../../deploy-rocket.chat/installing-client-apps/) that can be used for the user interface.

{% hint style="info" %}
This guide proceeds with the assumption you have either the latest Rocket.Chat Desktop client or Browser installed.

The server used for this guide is available at [http://localhost:3000/](http://localhost:3000)
{% endhint %}

### Adding Rocket.Chat server to Desktop Client

* After installing the [Rocket.Chat Desktop Client](../../deploy-rocket.chat/installing-client-apps/#desktop-apps), launch the application.
* You are presented with an interface with a text field to input your server URL. Enter your server URL in this case `http://localhost:300`  and then click **Connect.**

If you initially had any server linked on your client app, you can add another by clicking on the plus sign icon by the left of the navigation menu.

### Accessing Rocket.Chat Using Browser

To access Rocket.Chat in your browser, you should type the link, [http://localhost:3000](http://localhost:3000) in any of your preferred desktop browsers.

## Setup Wizard

To launch your workspace, it is required to do a simple 4-step setup.

* **Admin Information**: Fill in this information as it is needed to create the very first user who will automatically be the administrator of your Rocket.Chat workspace. The necessary information required includes your name, chosen username, your provided organizational email, and a password chosen by you. The next thing to do is click on **Continue** to be taken to the page for the organization's information.
* **Organization Information**: This involves information about your organization. The information to be filled in about your organization include the organization's name, its type, the size of the organization, the country in which your organization operates, and the industry your organization is linked to, as well as the website of your organization, if there is any. When all the fields have been filled, you can go ahead and click on **Continue** to proceed to the third step, which has to do with server information.
* **Server Info**: The server Info form has four fields which include the site name, selecting your preferred language from a dropdown, selecting whether the server is private or public, and finally selecting the option to opt into two-factor authentication via email. Click on the Continue option to go next step.
* **Register Your Server**: You are asked to register your workspace to the Rocket.Chat Cloud or proceed with a standalone server.

{% hint style="success" %}
We recommend you register your workspace, which will automatically create a [Rocket.Chat Cloud Account](broken-reference) for you, and you can enjoy all its benefits like;

* Mobile push notifications
* Omnichannel: Communicate with external providers (WhatsApp, Facebook, Instagram, Telegram, Twitter)
* Access to marketplace apps
{% endhint %}

<details>

<summary>Information collected for Registered workspaces</summary>

Suppose you choose to register your workspace, Rocket.Chat collects the following information about your workspace.

* The **workspace Id** to help identify the workspace.
* The organization's **address.**
* **Contact name** for the workspace.
* **Contact email** for the workspace.
* The number of **seats** for the workspace.
* The **account name.**
* The **organization type**.&#x20;
* What **industry** the organization belongs to.
* The **size of the organization**.&#x20;
* The **country** of the organization.
* **Language** set for the workspace.&#x20;
* **Website** of the organization.
* **Site name** of the workspace.
* The **workspace type**.
* The **deployment method** used for the workspace.
* The **deployment platform.**
* The **version of Rocket.Chat** deployed.

</details>

#### Register Workspace

* Click on **Register to access** to continue and check if you want to receive security updates or not.
* Ensure that you agree to the [**Terms**](../../rocket.chat-legal/terms.md) and [**Privacy Policy**](../../rocket.chat-privacy-and-security/privacy-policies/) of Rocket.Chat before clicking **Continue**.
* Open up your email inbox and click **verify registration.** Make sure the security codes match.
* Confirm the registration and go back to your server.



#### Continue as Standalone

* Click **Continue as standalone,** then **Confirm.**

Your workspace is now ready for use.

{% hint style="success" %}
From here, you can get a 30days trial on the features that come with the [Enterprise Edition](../enterprise-edition-trial/).
{% endhint %}
