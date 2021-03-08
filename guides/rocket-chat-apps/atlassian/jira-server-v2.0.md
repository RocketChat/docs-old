---
description: How to install and configure your Jira Server integration with Rocket.Chat
---

# Jira Server v2.0

## Features

This app lets you connect your channels or private groups to different projects from different Jira Servers.

The following notifications are supported:

* Project created;
* Project deleted;
* Issue created;
* Issue transitioned;
* Issue updated;

## Installation

{% hint style="warning" %}
**Migrating from version 1.x:** Please note that this is a _major_ version update, which means it includes breaking changes. You _will need_ to configure your connections again after the update.
{% endhint %}

You can install our Jira Server Integration Rocket.Chat App from your Rocket.Chat Administration area.

* Go to **Administration &gt; Marketplace**
* Search for the **Jira Server Integration** and click on the item
* Click on the **Install** button
* Click on **Activate**

Now that you have the app installed in your server, it is time to configure the integration with your Jira instance.

## Configuration

Go to any channel or private group and execute the slashcommand `/jira-server`. You will be prompted with the _Room Preferences_ dialog_:_

![Room Preferences dialog](../../../.gitbook/assets/image%20%2813%29.png)

Here you can connect your channel or private group to different Jira Servers. The server list is currently empty as this is a fresh install, so let's connect to a new Jira Server

### Connecting to Jira Servers

To add a new Jira Server connection from the _Room Preferences_ dialog, click on the "Connect to another Jira Server" button. You will be prompted with a form to fill in the details for the connection:

![New Jira Server form](../../../.gitbook/assets/image%20%286%29.png)

> **Note**: We advise against using your own Jira user in the installation process. That is because the Rocket.Chat App has to persist the credentials to be able to search for projects and issues later on. We recommend creating a new user with administrative privileges. After the installation process, you can revoke those privileges from the user.

After successfully connecting to the server \(the app will let you know if anything goes wrong\), just select the new server from the list to integrate it with your channel/private group.

![Select the new server to integrate with it](../../../.gitbook/assets/image%20%2812%29.png)

Hit "Save" and you're good to go!

Now we have to subscribe your channel to specific projects, so it starts receiving notifications from Jira.

### Subscribing to Jira Projects

Go to the channel/private group that you want to receive notifications on and run the Jira slash command `/jira-server`.  You will be prompted with the _Room Integration_ dialog:

![Room Integration dialog](../../../.gitbook/assets/image%20%2814%29.png)

You can click the "Subscribe" button to subscribe to any project you wish.

### Managing your Integration

If you want to manage your channel/private group integration, you can use the menu in the _Room Integration_ dialog to do so:

![Room Integration dialog menu](../../../.gitbook/assets/image%20%2810%29.png)

* **Manage Connections** - Takes you to the [_Room Preferences_ dialog above](jira-server-v2.0.md#configuration). From there you can manage to which servers your channel/private group is connected, add new servers, etc.
* **Reset Connections** - Will reset all connected servers and projects from this room. Use this if you no longer want to receive notifications on your channel/private group.

