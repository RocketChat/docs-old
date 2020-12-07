# Push Notifications Admin Guide

By default, the community users have 10k push notifications for free. If you are a deployment that uses mobile clients a lot, you might feel the need to extend your per month push notification limit. To subscribe to your desired push notification bundle you first need to [subscribe to our cloud account](https://docs.rocket.chat/guides/administrator-guides/connectivity-services) if you don't have one. 

## Subscribe a Package

To subscribe to  a push notification package:

1. Please goto to our [sponsorship page](https://sponsorship.rocket.chat/)

2. Choose your desired package from the packages below:

![](../../../../.gitbook/assets/image%20%281%29.png)

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

![](../../../../.gitbook/assets/image%20%2830%29.png)

2. Goto '**Account'** in **Settings** and scroll down to **Default User Preference.**

![](../../../../.gitbook/assets/image%20%2821%29.png)

3. Set **Mobile Notifications Default Alert** to Mentions. It will send notifications in case of a mention of user's name or only of the threads the user has subscribed to intentionally. 

![](../../../../.gitbook/assets/image%20%2841%29.png)

{% hint style="warning" %}
We suggest you should check the push notification configuration in user preferences before enabling them because you might want to use your limit wisely.
{% endhint %}

## Enable Push Notifications

To enable push notifications:

1. Go to **Administration.**

![](../../../../.gitbook/assets/image%20%2830%29.png)

2. Search '**Push'** in **Settings.**

![](../../../../.gitbook/assets/image%20%2851%29.png)

3. **Enable** push notifications. 

4. **Enable** your Gateway. \(_Option not available on a cloud server_\)

{% hint style="info" %}
If you are on a cloud server, you dont get to choose as there is a default rocket.chat gateway. On a self-hosted server, you have an option to either use rocket.chat gateway or configure your own.
{% endhint %}

5. Enable **Production**.

6. You are all set to send a test push to your user now.

![](../../../../.gitbook/assets/image%20%2846%29.png)

## Check the count of notification used per month



## Enable push notifications for channels

