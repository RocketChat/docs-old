---
description: You can view the available and installed Rocket.Chat Apps and manage them.
---

# Rocket.Chat Marketplace

[Rocket.Chat](http://rocket.chat) Apps are extensions, or plugins, that can be added to your workspace to customize your collaboration experience. For example, you can install Reminders and insert the Add Reminder button on a message in your workspace. Rocket.Chat provides many apps that can be installed and managed through the marketplace. You can search for any app on the marketplace and install it on your Rocket.Chat server. You can also upload your custom app package yourself and then install it.

**These Apps can do the following :**

* Display interactive and dynamic content on their own surface - like a modal or the room’s contextual bar.
* Create buttons in the UI for users to interact with native content.
* Create slash commands for users to trigger more generic interactions.
* Register endpoints to receive data from other applications and services.
* Work on both desktop and mobile clients.
* Send messages to users; create and manage public channels, groups, discussions, and threads.

{% hint style="info" %}
You must register your workspace (even if it is a community edition) on [Rocket.Chat Cloud](https://cloud.rocket.chat) before you can install apps from the Rocket.Chat marketplace.
{% endhint %}

## Types of Apps

### Public Apps

Public Apps are all the apps available on the Rocket.Chat [marketplace](https://www.rocket.chat/marketplace). They include Polls, Twitter, Jitsi, amongst many others.&#x20;

{% hint style="info" %}
You can learn how to install and enable each of them in the [App Guide](rocket.chat-public-apps-guides/).
{% endhint %}

### Private Apps

A private app is an app that it's not listed on the marketplace. A workspace can develop its apps and publish them on the workspace. They can only work on the workspace that uploaded it.

## App Limitations

For community edition (CE), a user can install numerous apps from the marketplace but enable only five. Once it reaches the limit, you can upgrade to the enterprise edition (EE) for access to enable all apps in the workspace. If your workspace version is `5.4` or lower, you can use all the enabled apps you already have. However, you can not purchase or enable more apps once the limit is reached.

For enterprise edition (EE), if a workspace liscense expires and the workspace has exceded the the **** limit, thene market place disable all downloaded apps, and the app count returns to zero.

You can browse Rocket.Chat apps either on our [marketplace](https://rocket.chat/marketplace) or access them directly from **Administration > Apps > Marketplace.**

On the **Explore** tab of the **Apps** screen,

* You can see all the apps available on Rocket.Chat and seach for the one you need.
* You can also filter based on **Categories, Status, and Price.** Choose between multiple categories within the filter to help you find the best app for your workspace users.
* <img src="../../.gitbook/assets/image.png" alt="" data-size="line"> tag next to an app on the marketplace means you need to upgrade your workspace to a higher version in order to use the app.

On the **Installed** tab of the **Apps** screen,

* You can find the apps you have installed on your workspace.
* **Enable/Disable/Uninstall** any of your installed apps.
* View App details.
* View **logs** of the app.
* Provide additional user settings and configuration for the app. (All Rocket.Chat Apps might not require any setup configuration or user settings.)

{% hint style="success" %}
If you are subscribed to Rocket.Chat's **Enterprise Edition**, you can install and enable all the apps available in the marketplace on your workspace. However, for **Community Edition**, you can to install any number of apps but only enable up to five apps on your workspace.&#x20;
{% endhint %}

If you are looking for the manual/user guide of a particular app, kindly check [App User Guides](rocket.chat-public-apps-guides/) or search for it within the documentation.

Some apps are part of the **Enterprise Edition** offerings. You don't have to purchase them if you already subscribe to the Enterprise Edition of Rocket.Chat. They include the following:

* [Jira Server](rocket.chat-public-apps-guides/atlassian/jira-server-integration.md)
* Jira Cloud
* [Confluence Server](rocket.chat-public-apps-guides/atlassian/confluence-server-integration.md)
* Confluence Cloud
* [Bitbucket Server](rocket.chat-public-apps-guides/atlassian/bitbucket-server-integration.md)
* Bitbucket Cloud
* [Bamboo](rocket.chat-public-apps-guides/atlassian/bamboo-integration.md)
* [Zoom](rocket.chat-public-apps-guides/zoom.md)
* [Data Loss Prevention (DLP)](rocket.chat-public-apps-guides/data-loss-prevention-dlp-app.md)
* [Facebook](https://docs.rocket.chat/guides/app-guides/omnichannel-apps/facebook-app)
* [Trello](https://docs.rocket.chat/guides/app-guides/trello)
* [Instagram Direct](rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/)
* [Telegram](rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/)
* [Twitter](rocket.chat-public-apps-guides/omnichannel-apps/twitter-app/)
* [Pexip](../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/pexip-app.md)
* [Google Meet](../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/google-meet-app.md)

{% content-ref url="../../setup-and-administer-rocket.chat/roles-in-rocket.chat/marketplace-roles.md" %}
[marketplace-roles.md](../../setup-and-administer-rocket.chat/roles-in-rocket.chat/marketplace-roles.md)
{% endcontent-ref %}
