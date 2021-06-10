---
description: Atlassian Confluence Server Integration
---

# Confluence Server

## Installation

You can install our Confluence Server Integration Rocket.Chat App from your Rocket.Chat Administration area.

* Go to **Administration** &gt; **Marketplace**
* Search for the **Confluence Server Integration** and click on the item
* Click on the **Install** button
* Click on **Activate**

Now that you have the app installed in your server, it is time to configure the integration with your Confluence instance.

## Configuration

First, make sure you have the [Rocket.Chat for Confluence](https://marketplace.atlassian.com/apps/1220180/rocket-chat-for-confluence) add-on installed on your Confluence server.

Go to any channel or private-group and execute the slashcommand `/confluence-server install CONFLUENCE_BASE_URL USER PASSWORD`, where:

* **CONFLUENCE\_BASE\_URL** is the base URL of your Confluence server. You can see this information in **Confluence administration** &gt; **General Configuration**;
* **USER** is the username of a user in your Confluence;
* **PASSWORD** is the password of the user mentioned above;

After that your Rocket.Chat will be connected to your Confluence instance.

Add the @rocket.cat user to the specific room and give him rights to write messages.

> **Note**: We advise against using your own Confluence user in the installation process. That is because the Rocket.Chat App has to persist the credentials to be able to search for spaces later on. We recommend creating a new user for the installation.

In order to enable notifications, you have to connect a channel or private group to one or more Confluence Spaces; whenever a page is created or updated in this Space a notification will be sent to the channel or private group they’ve been connected to.

To connect a channel or private group to a Confluence Space execute the slashcommand `/confluence-server connect`. You will receive an ephemeral message with the available spaces. Choose one or more from the list and click on the Connect button.

You can connect as many Spaces as you want to a channel or private group; similarly, a Space can be connected to as many channels or private groups as you want.

