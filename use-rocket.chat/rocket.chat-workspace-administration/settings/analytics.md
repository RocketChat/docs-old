---
description: See how users interact with your workspace.
---

# Analytics

Setting up analytics allows you to see how users interact with your server and help measure the metrics and monitor the different user experience measures.

To access analytics, navigate to **Administration > Workspace > Settings > Analytics.**

You have access to various configurations that can be done.

{% hint style="success" %}
Remember always to hit **Save changes** to apply any changes made.
{% endhint %}

## Google Analytics

Lets you set up Google Analytics.

* **Enable**: When enabled, Google Analytics is active, and you are prompted to set a Tracking ID.
* **Tracking ID:** Takes in your Google Analytics tracking ID.

## Features Enabled

Lets you set various properties to analyze and track.

* **Messages**: When set to true, actions users perform on messages are tracked.
* **Rooms**: When enabled, actions like; `create, leave, delete` on channels or groups are tracked
* **Users**: This Lets you track events related to actions on users like; `password reset times, profile picture change,` etc.

## Piwik

Gives you the ability to set up Matomo, formerly Piwik, for analytics.

* **Enable**: When set to true, it enables Piwik analytics on your server.
* **URL**: The url where the Piwik resides, be sure to include the trailing slash. Example: `//piwik.rocket.chat/`
* **Client ID**: The site id to be use for identifying your site. Example: `17`
*   **Additional Piwik Sites**: Takes in additional Piwik website URLs and site IDs to track the same data into different websites. Example;

    `[ { "trackerURL" : "https://my.piwik.domain2/" , "siteId" : 42 }, { "trackerURL" : "https://my.piwik.domain3/" , "siteId" : 15 } ]`
* **Prepend Domain**: Lets you set whether or not to prepend the site domain to the page title when tracking.
* **All Subdomains**: Lets you track visitors across all subdomains.
* **Hide Outgoing Links**: Takes in URLs, one domain per line without any separator to hide their clicks in the outlinks report.
