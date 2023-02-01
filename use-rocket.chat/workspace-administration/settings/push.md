---
description: >-
  Enable and configure push notifications for workspace members using mobile
  devices
---

# Push

{% hint style="info" %}
By default, community workspaces come with 10,000 free monthly push notifications. If you need more, please [contact us](https://www.rocket.chat/sales-contact) to discuss upgrading to an Enterprise plan.
{% endhint %}

## Set default user preferences

{% hint style="info" %}
Default user preferences are universal for all users (admin and user) in the workspace until individual users change them for themselves.
{% endhint %}

To check user preferences for push notifications:

* Navigate to **Administration** > **Workspace** > **Settings** > **Account** and scroll down to **Default User Preference**
* Set **Mobile Notifications Default Alert** to Mentions. It will send notifications in case of a mention of the user's name or only the threads the user has intentionally subscribed to.

![](<../../../.gitbook/assets/image (139).png>)

{% hint style="warning" %}
We suggest you should check the push notification configuration in user preferences before enabling them because you might want to use your limit wisely.
{% endhint %}

## Push Notifications Configuration

To enable push notifications:

* Go to **Administration > Workspace > Settings > Push**
* **Enable** push notifications
* **Enable** your Gateway (_Option not available on a cloud server_)

{% hint style="info" %}
If you are on a cloud server, you don't get to choose as there is a default Rocket.Chat gateway. On a self-hosted server, you have an option to use Rocket.Chat gateway or configure your own.
{% endhint %}

* Enable **Production**
* You are all set to send a test push to your user now.

{% hint style="info" %}
To successfully send a test push to your user, you will have to be logged in to the server on your mobile client and then close or minimize the application.
{% endhint %}

![](<../../../.gitbook/assets/image (141).png>)

### Privacy

In Privacy, you can configure what amount of information you want your push notification to have.

![](<../../../.gitbook/assets/image (142).png>)

{% hint style="info" %}
Above are the default settings. If **Fetch full message content from the server on the receipt** is enabled and you're running the _Enterprise Edition_, the notification payload sent through the Apple Push Notification service or Firebase Cloud Messaging service contains no message content. Instead, it contains only the message ID, which is then used by the mobile app to fetch the message content from the [Rocket.Chat](http://rocket.chat) server to display the notification. If something happens and the app cannot reach the server in time, a generic push notification message is shown. When the setting is disabled, the whole message content is sent via push notification payload so the mobile app can display the notification right away.
{% endhint %}

## Cloud Service Privacy Terms Agreement

Make sure you have agreed to terms and conditions.

* Go to **Administration > Workspace > Settings > Setup Wizard**
* Go to '**Cloud Info'**
* Turn the **Cloud Service Privacy Terms Agreement** toggle on

{% hint style="info" %}
If **Cloud Service Privacy Terms Agreement** is not toggled ON, the push won't work.
{% endhint %}

* Hit **Save changes**

![](<../../../.gitbook/assets/image (155).png>)

## Connect to cloud

When you purchase any package of push notifications as a self-managed customer, you need to connect your workspace to our cloud.

* Go to connectivity services; check if you are connected. Cloud workspace should be connected by default.
* If not, go to [connectivity services](https://docs.rocket.chat/guides/administrator-guides/connectivity-services) and follow the guide.
* Once done, go to Push and send a test message to your user.

## Check the count of notifications used per month

To check the count of notifications used per month:

* Go to [cloud.rocket.chat](http://cloud.rocket.chat)

![](<../../../.gitbook/assets/image (156).png>)

* Go to Workspaces and select the workspace you want to check count for.
* Push notifications block will show the number of used notifications per your current limit per month.

![](<../../../.gitbook/assets/image (157).png>)

## Enable push notifications for channels

Users can configure what notifications they want to receive on mobile for each channel.

To enable push notifications for channels:

* Open room actions

![](<../../../.gitbook/assets/image (158).png>)

* Notification preferences

![](<../../../.gitbook/assets/image (159).png>)

* Mobile

![](<../../../.gitbook/assets/image (160).png>)

* Select what type of notifications you want to receive.

![](<../../../.gitbook/assets/image (161).png>)

{% hint style="info" %}
On some channels, notifications can stop if the number of users exceeds the set limit. The limit is set in the Administration -> General -> Notifications.
{% endhint %}
