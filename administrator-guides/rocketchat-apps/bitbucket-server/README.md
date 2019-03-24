# Bitbucket Server

Here you will find how to install and use the Bitbucket Server Integration.

## Installation

You can install our Bitbucket Server Integration Rocket.Chat App from your Rocket.Chat Administration area.

- Go to **Administration > Apps**
- Search for the **Bitbucket Server Integration** and click on the item
- Click on the **Install** button
- Click on **Activate**

Now that you have the app installed in your server, it is time to configure the integration with your Bitbucket instance.

## Configuration

In order to enable notifications, you have to connect a channel or private group to one or more Bitbucket repositories; To connect the channel or private group, access it and execute the command `/bitbucket-server connect REPO_URL`, where:

- **REPO_URL**: is the url of the repository you want to connect to, e.g. `http://example.com:7990/bitbucket/projects/PROJECT_1/repos/repo1/browse`.

You will receive an ephemeral message with further instructions on how to add a Webhook to your Bitbucket repository.

After that Bitbucket will send notifications on some events to the connected channel or private room.

### Tips

- If you want to connect the same repository to another channel or private group, simply repeat the process on them, using the same repository URL;

> **Note**: Only some of the available events are interpreted by the Rocket.Chat App. Those are **Repository Push, Pull Request Opened, Approved, Merged** and **Declined**. Any webhook sent to Rocket.Chat from other events will not result in any kind of notification being sent.