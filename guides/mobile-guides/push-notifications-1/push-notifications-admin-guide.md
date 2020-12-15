# Push Notifications Admin Guide

By default, the community users have 10k push notifications for free. If you are a deployment that uses mobile clients a lot, you might feel the need to extend your per month push notification limit. To subscribe to your desired push notification bundle you first need to [subscribe to our cloud account](https://docs.rocket.chat/guides/administrator-guides/connectivity-services) if you don't have one. 

## Subscribe a Package

To subscribe to  a push notification package:

1. Please goto to our [sponsorship page](https://sponsorship.rocket.chat/)

2. Choose your desired package from the packages below:

![](../../../.gitbook/assets/image%20%281%29.png)

3. Login with your GitHub account

4. Login with cloud

5. Select their workspace from the list

6. We apply the cap from that your selected sponsorship to your workspace

## Set default user preferences \(admin and users\)

{% hint style="info" %}
Default user preferences are universal for all the users until individual users change them for themselves. 
{% endhint %}

To check user preferences for push notifications:

1. Go to **Administration.**

![](../../../.gitbook/assets/image%20%2830%29.png)

2. Goto '**Account'** in **Settings** and scroll down to **Default User Preference.**

![](../../../.gitbook/assets/image%20%2821%29.png)

3. Set **Mobile Notifications Default Alert** to Mentions. It will send notifications in case of a mention of user's name or only of the threads the user has subscribed to intentionally. 

![](../../../.gitbook/assets/image%20%2841%29.png)

{% hint style="warning" %}
We suggest you should check the push notification configuration in user preferences before enabling them because you might want to use your limit wisely.
{% endhint %}

## Push Notifications Configuration

To enable push notifications:

1. Go to **Administration.**

![](../../../.gitbook/assets/image%20%2830%29.png)

2. Search '**Push'** in **Settings.**

![](../../../.gitbook/assets/image%20%28137%29.png)

3. **Enable** push notifications. 

4. **Enable** your Gateway. \(_Option not available on a cloud server_\)

{% hint style="info" %}
If you are on a cloud server, you dont get to choose as there is a default rocket.chat gateway. On a self-hosted server, you have an option to either use rocket.chat gateway or configure your own.
{% endhint %}

5. Enable **Production**.

6. You are all set to send a test push to your user now. 

{% hint style="info" %}
To successfully send a test push to your user, you will have to be logged in to the server on your mobile client and then close or minimize the application. 
{% endhint %}

![](../../../.gitbook/assets/image%20%2860%29.png)

### Privacy

In Privacy, you can configure what amount of information you want your push notification to have. 

1. Go to **Administration.**

![](../../../.gitbook/assets/image%20%2830%29.png)

2. Search '**Push'** in **Settings.**

![](../../../.gitbook/assets/image%20%28137%29.png)

3. Go to **Privacy** 

![](../../../.gitbook/assets/image%20%28156%29.png)

![](../../../.gitbook/assets/image%20%2891%29.png)

{% hint style="info" %}
Above are the default settings. If **Fetch full message content from the server on receipt** is enabled and you're running the Enterprise Edition, the notification payload that is sent through the Apple Push Notification service or Firebase Cloud Messaging service contains no message content. Instead, it contains only the message ID which is then used by the mobile app to fetch the message content from the [Rocket.Chat](http://rocket.chat/) server to display the notification. If something happens and the app cannot reach the server in time, a generic push notification message is shown. When the setting is disabled, the whole message content is sent via push notification payload so the mobile app can display the notification right away.
{% endhint %}

## Connect to cloud

When you purchase any package of push notifications as a self-managed customer, you need to connect your workspace to our cloud. 

1. Go to connectivity services, check if you are connected. Cloud workspace should be connected by default. 
2. If not go to [connectivity services](https://docs.rocket.chat/guides/administrator-guides/connectivity-services) and follow the guide. 
3. Once done go to Push and send a test message to your user.

## Check the count of notification used per month



## Enable push notifications for channels

