---
description: >-
  Authorise Omni-Gateway to send and receive Facebook messages on behalf your
  account.
---

# Facebook App Authentication

The first step after the configuration and resolving the dependencies is authentication with Facebook.

1. Please click on the button shown below to start the authentication process with Facebook.

![](<../../../../../.gitbook/assets/image (542).png>)

2\. As soon as you click **Start Authentication** the Authentication process is started. Please authorize [Rocket.Chat](http://rocket.chat)'s Facebook app to complete this process.

![](<../../../../../.gitbook/assets/image (544).png>)

3\. You are redirected to the following page where you can use your business email to authorize Facebook.

![](<../../../../../.gitbook/assets/image (545).png>)

4\. Confirm here.

![](<../../../../../.gitbook/assets/image (547).png>)

You receive a success message with credentials, as shown below:

![](<../../../../../.gitbook/assets/image (548).png>)

## Subscribe/Unsubscribe

After successful authentication, as an admin, you are subscribed to the Facebook page by default. But you can choose to unsubscribe if you want, as shown below:

![](<../../../../../.gitbook/assets/image (559).png>)

![](<../../../../../.gitbook/assets/image (560).png>)

## Edit Page Configuration

You can edit page configuration as shown below:

![](<../../../../../.gitbook/assets/image (561).png>)

Following are the settings available:

1. You can route all the conversations coming from this page to a specific\*\* Department\*\*. Only the agents of this department are able to serve Facebook conversations coming from this page.
2. You can set the\*\* Welcome Message\*\* that will be sent to visitors when they send their first message.
3. The **Conversation Finished Message** will be sent to visitors when the conversation is closed
4. You can set the \*\*Default message for offline service \*\*that will be sent to your visitor when no agents are available online

{% hint style="info" %}
Only the agents of this particular department are able to see and take the chats.
{% endhint %}

![](<../../../../../.gitbook/assets/image (563).png>)

## Slash Commands

{% hint style="info" %}
Here are the shortcuts you can use in Facebook Bot:

1. **/facebook authorize** Starts the facebook authorization process
2. **/facebook unauthorize** Revoke facebook authorization
3. **/facebook edit pageId** Edit Page configuration for the given pageId
4. **/facebook help** Shows help message
{% endhint %}
