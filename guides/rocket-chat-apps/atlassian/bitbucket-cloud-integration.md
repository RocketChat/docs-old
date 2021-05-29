---
description: Atlassian Bitbucket Cloud integration
---

# Bitbucket Server

Here you will find how to install and use the Bitbucket Cloud Integration.

## Installation

You can install our Bitbucket Cloud Integration Rocket.Chat application from your Rocket.Chat administration area. 

Note: you will be charged a $5 fee for up to 10 accesses and may increase depending on how many active users you have on Rocket.Chat having up to 14 days triall.

Knowing this we can proceed to the next step ...

Go to **Administration &gt; Marketplace**.
* Search for **Bitbucket Cloud Integration** and click on the item
Click on the **Install** button.
Click on **Activate**

Now that you have the application installed on your server, it's time to configure the integration with your Bitbucket instance.

## Configuration

In order to enable notifications, you need to connect a channel or private group to one or more Bitbucket repositories; to connect the channel or private group, access it and run the slash `/bitbucket connect REPO_URL` command, where:

* REPO_URL**: is the url of the repository you want to connect to, for example `http://bitbucket.org/projects/repo1/`.

You will receive an ephemeral message with further instructions on how to add a webhook to your Bitbucket repository.

![Example of the ephemeral message](.../.../...gitbook/assets/image1%20%281%29.png)

Now go to your Bitbucket repository and [create a new Webhook](https://confluence.atlassian.com/bitbucketserver/managing-webhooks-in-bitbucket-server-938025878.html). In the URL field, paste the URL that was generated for you in the ephemeral message {https://example.com:3000/api/apps/private/d98e7da9-2398-4bd1-a596-d5cac28468bd/zC5r4DxBQSTHfrhLg/webhook?repoId=aHR0cDovL2xcY2FsaG9zdDo30TkwL2Jpd6J1Y2t1dHxQUk9KRUNUXzF8cmVwzE=}(for example, `https://example.com:3000/api/apps/private/d98e7da9-2398-4bd1-a596-d5cac28468bd/zC5r4DxBQSTHfrhLg/webhook?repoId=aHR0cDovL2xcY2FsaG9zdDo30TkwL2Jpd6J1Y2t1dHxQUk9KRUNUXzF8cmVwzE=`)

![Webhook creation example](.../.../...gitbook/assets/image2%20%20%281%29.png)

After that, Bitbucket will send notifications about some events to the connected channel or the private room.

> **Note**: Only some of the available events are interpreted by the Rocket.Chat application. These are **Repository Push, Pull Request Opened, Approved, Merged** and **Declined**. Any hooks sent to Rocket.Chat from other events will not result in any type of notification being sent.

> **Note**: In order for requests to be written to Rocket.Chat you will need to add the Rocket.Cat boot.

![Example of chosen events](.../.../...gitbook/assets/image3.png)

### Tips

* If you want to link the same repository to another channel or private group, simply repeat the process on them, using the same repository URL;





Translated with www.DeepL.com/Translator (free version)
