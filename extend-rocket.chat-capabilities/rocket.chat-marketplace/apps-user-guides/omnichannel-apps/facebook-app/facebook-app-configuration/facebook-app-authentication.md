---
description: >-
  Authorize Omni-Gateway to send and receive Facebook messages on behalf your
  account.
---

# Facebook App Authentication

## Dependencies

Before initiating the authentication process, please ensure all the dependencies stated below are met:

1\. A Facebook Account. Click [here](https://www.facebook.com) to create one if you don't have it already.\
2\. A Facebook page. This is the page from where your customers can message you. Click [here](https://www.facebook.com/pages/creation/) to create one if you don't have it already.\
3\. Make sure your [Rocket.Chat](http://rocket.chat) instance is on a public address and is accessible by anyone on the internet. Goto \``Admin -> General -> Site Url`\` to confirm this.\
4\. Lastly, Make sure your [Rocket.Chat](http://rocket.chat) instance is connected to [Rocket.Chat](http://rocket.chat) Cloud. Goto \``Admin -> Connectivity Services`\` to connect to Cloud.

## Authentication

The next step after the configuration and resolving the dependencies is authentication with Facebook.

1. Please click on the button shown below to start the authentication process with Facebook.

![](<../../../../../../.gitbook/assets/image (542).png>)

2\. As soon as you click **Start Authentication** the authentication process is started. Please authorize [Rocket.Chat](http://rocket.chat)'s Facebook app to complete this process.

![](<../../../../../../.gitbook/assets/image (544).png>)

3\. You are redirected to the following page where you can use your email to authorize Facebook.

![](<../../../../../../.gitbook/assets/image (545).png>)

4\. Confirm here.

![](<../../../../../../.gitbook/assets/2021-11-29\_01-14-57 (2).png>)

At this step, you must have a Facebook page associated with the account. If you don’t have one yet, you can [create yours in just 30 seconds](https://www.facebook.com/pages/create/?ref\_type=registration\_form).

In case you have multiple pages associated with your Facebook account it will prompt a selection box to choose the preferred page to connect.

After successfully selecting your page, you will receive a success message with credentials, as shown below:

![](<../../../../../../.gitbook/assets/image (548).png>)

Try it out by sending a message to your Facebook page.

## Subscribe/Unsubscribe

After successful authentication, as an admin, you are subscribed to the Facebook page by default. But you can choose to unsubscribe if you want, as shown below:

![](<../../../../../../.gitbook/assets/image (559).png>)

![](<../../../../../../.gitbook/assets/image (560).png>)

## Edit Page Configuration

You can edit page configuration as shown below:

![](<../../../../../../.gitbook/assets/image (561).png>)

Following are the settings available:

1. You can route all the conversations coming from this page to a specific **Department**. Only the agents of this department are able to serve Facebook conversations coming from this page.
2. You can set the **Welcome Message** that will be sent to visitors when they send their first message.
3. The **Conversation Finished Message** will be sent to visitors when the conversation is closed
4. You can set the **Default message for offline service** that will be sent to your visitor when no agents are available online

{% hint style="info" %}
Only the agents of this particular department are able to see and take the chats.
{% endhint %}

![](<../../../../../../.gitbook/assets/image (563).png>)

## Slash Commands

{% hint style="info" %}
Here are the shortcuts you can use in Facebook Bot:

1. **/facebook authorize** Starts the facebook authorization process
2. **/facebook unauthorize** Revoke facebook authorization
3. **/facebook edit pageId** Edit Page configuration for the given pageId
4. **/facebook help** Shows help message
{% endhint %}

{% hint style="danger" %}
Please note that when a Facebook Messenger user sends a message and there's no agent available on the server to chat, the conversation won't be created. This means that when agents get back to work they will not get to know that someone was reaching out. So please make sure you have at least one agent online at all times.
{% endhint %}
