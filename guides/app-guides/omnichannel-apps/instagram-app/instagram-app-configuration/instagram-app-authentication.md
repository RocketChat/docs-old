---
description: >-
  Authorise Omni-Gateway to send and receive Instagram messages on behalf your
  account.
---

# Instagram App Authentication

## Dependencies

Before initiating the authentication process, please ensure all the dependencies stated below are met:\
1\. An Instagram [Business Account](https://help.instagram.com/502981923235522?fbclid=IwAR0TNcoToWKAq8OTOH4VjUC75NSk8EyqFW2Xz5KWDX7SsYK-9rNYppMMnLs)\
2\. A Facebook Account. Click [here](https://www.facebook.com) to create one, if you don't have it already.\
2\. A Facebook Page connected to your Instagram account. Click [here](https://www.facebook.com/pages/creation/) to create a new Facebook Page and click [here](https://help.instagram.com/399237934150902?fbclid=IwAR1m2-JgIIGQBqmJG1vaVSAuOdIdM-hd5k9U-j7BaQ-t5x0WizKVEfr-gbQ) for a guide on how to connect your Facebook Page to your Instagram account.\
3\. Make sure your [Rocket.Chat](http://rocket.chat) instance is on a public Address and is accessible by anyone on the internet. Goto \``Admin -> General -> Site Url`\` to confirm this.\
4\. Lastly, Make sure your [Rocket.Chat](http://rocket.chat) instance is connected to [Rocket.Chat](http://rocket.chat) Cloud. Goto \``Admin -> Connectivity Services`\` to connect to Cloud.

## Authentication

The first step after the configuration and resolving the dependencies is authentication with Instagram.

1. Please click on the button shown below to start the authentication process with Instagram.

![](broken-reference)

2\. As soon as you click **Start Authentication** the authentication process is started. Please authorize [Rocket.Chat](http://rocket.chat)'s Instagram app to complete this process.

![](<../../../../../.gitbook/assets/image (544).png>)

3\. You are redirected to the following page where you can use your email to authorize Instagram.

![](<../../../../../.gitbook/assets/image (545).png>)



4\. Confirm here.

![](<../../../../../.gitbook/assets/2021-11-29\_01-14-57 (2).png>)

At this step, you must have a Instagram page associated with the account. If you don’t have one yet, you can [create yours in just 30 seconds](https://www.facebook.com/pages/create/?ref\_type=registration\_form).

In case you have multiple pages associated with your Instagram account it will prompt a selection box to choose the preferred page to connect.

After successfully selecting your page, you will receive a success message with credentials, as shown below:

![](<../../../../../.gitbook/assets/image (548).png>)

Try it out by sending a message to your Instagram page.

## Subscribe/Unsubscribe

After successful authentication, as an admin, you are subscribed to the Instagram page by default. But you can choose to unsubscribe if you want, as shown below:

![](<../../../../../.gitbook/assets/image (559).png>)

![](<../../../../../.gitbook/assets/image (560).png>)

## Edit Page Configuration

You can edit page configuration as shown below:

![](<../../../../../.gitbook/assets/image (561).png>)



Following are the settings available:

1. You can route all the conversations coming from this page to a specific **Department**. Only the agents of this department are able to serve Instagram conversations coming from this page.
2. You can set the **Welcome Message** that will be sent to visitors when they send their first message.
3. The **Conversation Finished Message** will be sent to visitors when the conversation is closed
4. You can set the **Default message for offline service** that will be sent to your visitor when no agents are available online

{% hint style="info" %}
Only the agents of  this particular department are able to see and take the chats.
{% endhint %}

![](<../../../../../.gitbook/assets/image (563).png>)

## Slash Commands

{% hint style="info" %}
Here are the shortcuts you can use in Instagram Bot:

1. **/Instagram authorize** Starts the Instagram authorization process
2. &#x20;**/Instagram unauthorize** Revoke Instagram authorization&#x20;
3. **/Instagram edit pageId** Edit Page configuration for the given pageId&#x20;
4. **/Instagram help** Shows help message
{% endhint %}

{% hint style="danger" %}
Please note that when a Instagram Messenger users sends a message and there's no agent available on the server to chat, the conversation won't be created. This means that when agents get back to work they will not know that someone was reaching out. So please make sure you have at least one agent online at all times.&#x20;
{% endhint %}
