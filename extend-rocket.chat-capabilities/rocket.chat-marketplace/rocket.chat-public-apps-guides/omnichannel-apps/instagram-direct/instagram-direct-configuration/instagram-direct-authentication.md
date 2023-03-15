---
description: >-
  Authorize Omni-Gateway to send and receive Instagram Direct messages on behalf
  of your account.
---

# Instagram Direct Authentication

## Dependencies

Before initiating the authentication process, please ensure all the dependencies stated below are met:\
1\. An Instagram [Business Account](https://help.instagram.com/502981923235522?fbclid=IwAR0TNcoToWKAq8OTOH4VjUC75NSk8EyqFW2Xz5KWDX7SsYK-9rNYppMMnLs)\
2\. A Facebook Account. Click [here](https://www.facebook.com) to create one, if you don't have it already.\
3\. A Facebook Page connected to your Instagram account. Click [here](https://www.facebook.com/pages/creation/) to create a new Facebook. Page and click [here](https://help.instagram.com/399237934150902?fbclid=IwAR1m2-JgIIGQBqmJG1vaVSAuOdIdM-hd5k9U-j7BaQ-t5x0WizKVEfr-gbQ) for a guide on how to connect your Facebook Page to your Instagram account.\
4\. Enable Message Control Connected Tools Settings from your Instagram account on mobile. Click [here](https://developers.facebook.com/docs/messenger-platform/instagram/get-started#connected-tools-toggle) for more info.\
5\. Make sure your [Rocket.Chat](http://rocket.chat) instance is on a public Address and is accessible by anyone on the internet. Goto \``Admin -> General -> Site Url`\` to confirm this.\
6\. Lastly, Make sure your [Rocket.Chat](http://rocket.chat) instance is connected to [Rocket.Chat](http://rocket.chat) Cloud. Goto \``Admin -> Connectivity Services`\` to connect to Cloud.

## Authentication

The first step after the configuration and resolving the dependencies is authentication with Instagram Direct.

1. Please click on the button shown below to start the authentication process with Instagram Direct.

![](<../../../../../../.gitbook/assets/2022-01-20\_20-26-27 (1) (2) (1) (1) (1).png>)

2\. As soon as you click **Start Authentication** the authentication process is started. Please authorize [Rocket.Chat](http://rocket.chat)'s Instagram Direct to complete this process.

3\. You are redirected to the following page where you can use your email to authorize Instagram Direct.

![](<../../../../../../.gitbook/assets/image (545).png>)

4\. Confirm the Instagram business account you want to use with Rocket.Chat Omni Gateway. If you don’t have one yet, you can [create yours in just 30 seconds](https://www.facebook.com/pages/create/?ref\_type=registration\_form).

![](../../../../../../.gitbook/assets/2021-12-31\_18-10-57.png)

5\. In case you have multiple pages associated with your Instagram account, it will prompt a selection box to choose the preferred page to connect.

![](<../../../../../../.gitbook/assets/2021-12-31\_18-11-21 (1) (1) (1) (1) (1) (1).png>)

6\. Determine what Rocket.Chat Omni Gateway can do with the pages you have selected.

![](../../../../../../.gitbook/assets/2021-12-31\_18-11-40.png)

![](../../../../../../.gitbook/assets/2021-12-31\_18-11-52.png)

After successfully selecting your page, you will receive a success message with credentials, as shown below:

![](<../../../../../../.gitbook/assets/2021-12-31\_18-12-56 (7).png>)

Try it out by sending a message to your Instagram page.

## Subscribe/Unsubscribe

After successful authentication, as an admin, you are subscribed to the Instagram page by default. But you can choose to unsubscribe if you want, as shown below:

![](<../../../../../../.gitbook/assets/2021-12-31\_18-12-56 (9).png>)

![](<../../../../../../.gitbook/assets/2021-12-31\_19-18-27 (1) (1) (1) (1) (1) (1).png>)

## Edit Page Configuration

You can edit page configuration as shown below:

![](<../../../../../../.gitbook/assets/2021-12-31\_18-12-56 (1) (1) (1) (4) (2) (1) (1) (1) (1) (3).png>)

Following are the settings available:

1. You can route all the conversations coming from this page to a specific \*\*\*\* [**Department**](https://docs.rocket.chat/guides/omnichannel/departments). Only the agents of this department are able to serve Instagram conversations coming from this page.
2. You can set the **Welcome Message** that will be sent to visitors when they send their first message.
3. The **Conversation Finished Message** will be sent to visitors when the conversation is closed
4. You can set the **Default message for offline service** that will be sent to your visitor when no agents are available online

{% hint style="info" %}
Only the agents of this particular department are able to see and take the chats.
{% endhint %}

![](../../../../../../.gitbook/assets/2022-01-28\_00-00-27.png)

## Slash Commands

{% hint style="info" %}
Here are the shortcuts you can use in Instagram Bot:

1. **/Instagram authorize** Starts the Facebook authorization process to connect your instagram accounts
2. **/Instagram unauthorize** Revoke facebook authorization to remove all connected instagram accounts
3. **/Instagram edit pageId** Edit Page configuration for the given pageId
4. **/Instagram help** Shows help message
{% endhint %}

{% hint style="danger" %}
Please note that when an Instagram user sends a message and there's no agent available on the server to chat, the conversation won't be created. This means that when agents get back to work they will not get to know that someone was reaching out. So please make sure you have at least one agent online at all times.
{% endhint %}
