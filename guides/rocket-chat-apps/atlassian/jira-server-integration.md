---
description: Atlassian Jira Server Integration
---

# Jira Server

Here you will find how to install and use the Jira Server Integration.

## Installation

You can install our Jira Server Integration Rocket.Chat App from your Rocket.Chat Administration area.

* Go to **Administration &gt; Marketplace**
* Search for the **Jira Server Integration** and click on the item
* Click on the **Install** button
* Click on **Activate**

Now that you have the app installed in your server, it is time to configure the integration with your Jira instance.

## Configuration

Go to any channel or private group and execute the slashcommand `/jira-server install JIRA_URL USER PASSWORD`, where:

* **JIRA\_URL** is the base URL of your Jira server, e.g. `https://jira.example.com` or `https://example.com/jira`;
* **USER** is the username of a user in your Jira with administrative rights;
* **PASSWORD** is the password of the user mentioned above;

After that your Rocket.Chat will be connected to your Jira instance.

> **Note**: We advise against using your own Jira user in the installation process. That is because the Rocket.Chat App has to persist the credentials to be able to search for projects and issues later on. We recommend creating a new user with administrative privileges. After the installation process, you can revoke those privileges from the user.

In order to enable notifications, you have to connect a channel or private group to one or more Jira Projects; events that happen on those Jira Projects will result in a message sent to the channel or private group they’ve been connected to.

To connect a channel or private group, execute the slashcommand `/jira-server connect`. You will receive an ephemeral message containing the list of projects in your Jira that are available for you to connect to. Now for every project you want to connect, you can run the slashcommand `/jira-server connect PROJECT_KEY`.

A channel or private group can be connected to as many Jira Projects as you want; similarly, a Jira Project can be connected to as many channels or private groups as you want;

