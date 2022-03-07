---
description: This section shows how to setup analytics on your server.
---

# Analytics

Setting up analytics gives you the possibility to see how users interact with your server and help measure the metrics and monitor the different measures of user experience.

To access analytics, go to **Administration > Analytics.**

![](<../../../.gitbook/assets/administration >)

![](<../../../.gitbook/assets/image (644).png>)

From there, you will have access to various configurations that can be done.

{% hint style="success" %}
Remember to always hit **Save changes** to apply any changes made.
{% endhint %}

## Google Analytics

Lets you set up Google Analytics.

* **Enable**: When enabled, Google Analytics is active and you will be prompted to set a Tracking ID.
* **Tracking ID:** Takes in your Google Analytics tracking ID.

## Features Enabled

Lets you set various properties to analyze and track.

* **Messages**: When set to true, actions users perform on messages will be tracked.
* **Rooms**: When enabled, actions like; `create, leave, delete` on channels or groups will be tracked
* **Users**: This Lets you track events related to actions on users like; `password reset times, profile picture change,` etc.

## Piwik

Gives you the ability to set up Matomo formerly Piwik for analytics.

* **Enable**: When set to true, it enables Piwik analytics on your server.
* **URL**: The url where the Piwik resides, be sure to include the trailing slash. Example: `//piwik.rocket.chat/`
* **Client ID**: The site id to be use for identifying your site. Example: `17`
*   **Additional Piwik Sites**: Takes in additional Piwik website URLs and site IDs to track thesame data into different websites. Example;&#x20;

    `[ { "trackerURL" : "https://my.piwik.domain2/" , "siteId" : 42 }, { "trackerURL" : "https://my.piwik.domain3/" , "siteId" : 15 } ]`
* **Prepend Domain**: Lets you set whether or not to prepend the site domain to the page title when tracking.
* **All Subdomains**: Lets you track visitors across all subdomains.
* **Hide Outgoing Links**: Takes in URLs, one domain per line without any separator to hide their clicks in the outlinks report.
