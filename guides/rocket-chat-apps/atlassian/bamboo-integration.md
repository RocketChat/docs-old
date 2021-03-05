---
description: Atlassian Bamboo Integration
---

# Bamboo

## Installation

You can install our Bamboo Integration Rocket.Chat App from your Rocket.Chat Administration area.

* Go to **Administration** &gt; **Marketplace**
* Search for the **Bamboo Integration** and click on the item
* Click on the **Install** button
* Click on **Activate**

Now that you have the app installed in your server, it is time to configure the integration with your Bamboo instance.

## Configuration

Go to any channel or private group and execute the slashcommand `/bamboo install`. You will receive an ephemeral message with instructions on how to configure your Bamboo, as follows:

1. On your Bamboo, install the [Rocket.Chat Notifications for Bamboo](https://marketplace.atlassian.com/apps/1220022/rocket-chat-notifications-for-bamboo) add-on;
2. Add a notification on a Build Plan or Deployment Environment;
3. Select the "Rocket.Chat" recipient type;
4. On the "Rocket.Chat URL" field, insert the URL given to you by the step \#4 in the ephemeral message \(e.g., `https://example.com:3000/api/apps/private/6a7b5a37-b9bb-4d49-ae38-c6ebcb3fe479/ejDjQ9Kyh2wBgrSwt/webhook`\);
5. On the "Rocket.Chat channel" field, type the name of the channel or private group you want to be notified of the events;

After that, your Rocket.Chat will start receiving the configured notifications.

> **Note**: Not all Build/Deployment events are supported by the Bamboo Integration at the time of this writing. Unsupported events will not result in any notification sent in Rocket.Chat. The list of supported events is as follows:

* Plans:
  * All Builds Completed
  * Failed Builds and First Successful
* Jobs:
  * All Jobs Completed
  * Failed Jobs and First Successful
  * Job Error
* Deployments:
  * Deployment Started and Finished
  * Deployment Failed

