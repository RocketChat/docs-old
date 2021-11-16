# Push (Notifications Admin Guide)

By default, the community users have 10k push notifications for free. If you are a deployment that uses mobile clients a lot, you might feel the need to extend your per-month push notification limit. To subscribe to your desired push notification bundle, you first need to [subscribe to our cloud account](https://docs.rocket.chat/guides/administrator-guides/connectivity-services) if you don't have one.

## Subscribe a Package

To subscribe to a push notification package:

1. Please go to our [sponsorship page](https://sponsorship.rocket.chat)
2. Choose your desired package from the packages below:

![](<../../../.gitbook/assets/image (136).png>)

1. Login with your GitHub account
2. Login with [Rocket.Chat Cloud](https://cloud.rocket.chat)
3. Select **the workspace you want to apply the cap to**. The cap will be applied automatically with the respective limit according to the selected sponsorship perk.

{% hint style="info" %}
Please note that only **one** sponsorship subscription can be applied to a workspace. You can not stack a few subscriptions to get more push messages. If you need more than 20k you will need to contact our sales representative at [sales@rocket.chat](mailto:sales@rocket.chat)
{% endhint %}

## Set default user preferences (admin and users)

{% hint style="info" %}
Default user preferences are universal for all the users until individual users change them for themselves.
{% endhint %}

To check user preferences for push notifications:

1. Go to **Administration**

![](<../../../.gitbook/assets/image (27).png>)

1. Goto '**Account'** in **Settings** and scroll down to **Default User Preference**

![](<../../../.gitbook/assets/image (138).png>)

1. Set **Mobile Notifications Default Alert** to Mentions. It will send notifications in case of a mention of the user's name or only the threads the user has intentionally subscribed to.

![](<../../../.gitbook/assets/image (139).png>)

{% hint style="warning" %}
We suggest you should check the push notification configuration in user preferences before enabling them because you might want to use your limit wisely.
{% endhint %}

## Push Notifications Configuration

To enable push notifications:

1. Go to **Administration**

![](<../../../.gitbook/assets/image (27).png>)

1. Search '**Push'** in **Settings**

![](<../../../.gitbook/assets/image (140).png>)

1. **Enable** push notifications
2. **Enable** your Gateway (_Option not available on a cloud server_)

{% hint style="info" %}
If you are on a cloud server, you don't get to choose as there is a default rocket.chat gateway. On a self-hosted server, you have an option to either use rocket.chat gateway or configure your own.
{% endhint %}

1. Enable **Production**
2. You are all set to send a test push to your user now.

{% hint style="info" %}
To successfully send a test push to your user, you will have to be logged in to the server on your mobile client and then close or minimize the application.
{% endhint %}

![](<../../../.gitbook/assets/image (141).png>)

### Privacy

In Privacy, you can configure what amount of information you want your push notification to have.

1. Go to **Administration**

![](<../../../.gitbook/assets/image (27).png>)

1. Search '**Push'** in **Settings**

![](<../../../.gitbook/assets/image (140).png>)

1. Go to **Privacy**

![](<../../../.gitbook/assets/image (151).png>)

![](<../../../.gitbook/assets/image (142).png>)

{% hint style="info" %}
Above are the default settings. If **Fetch full message content from the server on the receipt** is enabled and you're running the _Enterprise Edition or Gold_, the notification payload sent through the Apple Push Notification service or Firebase Cloud Messaging service contains no message content. Instead, it contains only the message ID, which is then used by the mobile app to fetch the message content from the [Rocket.Chat](http://rocket.chat) server to display the notification. If something happens and the app cannot reach the server in time, a generic push notification message is shown. When the setting is disabled, the whole message content is sent via push notification payload so the mobile app can display the notification right away.
{% endhint %}

## Cloud Service Privacy Terms Agreement

Make sure you have agreed to terms and conditions.

1. Go to **Administration**

![](<../../../.gitbook/assets/image (27).png>)

1. Search '**Setup Wizard'** in **Settings**

![](<../../../.gitbook/assets/image (152).png>)

1. Go to '**Cloud Info'**

![](<../../../.gitbook/assets/image (154).png>)

1. Turn the **Cloud Service Privacy Terms Agreement** toggle on

![](<../../../.gitbook/assets/image (153).png>)

{% hint style="info" %}
If **Cloud Service Privacy Terms Agreement** is not toggled ON, the push won't work.
{% endhint %}

1. Hit **Save changes**

![](<../../../.gitbook/assets/image (155).png>)

## Connect to cloud

When you purchase any package of push notifications as a self-managed customer, you need to connect your workspace to our cloud.

1. Go to connectivity services; check if you are connected. Cloud workspace should be connected by default.
2. If not, go to [connectivity services](https://docs.rocket.chat/guides/administrator-guides/connectivity-services) and follow the guide.
3. Once done, go to Push and send a test message to your user.

## Check the count of notification used per month

To check the count of notification used per month:

1. Go to [cloud.rocket.chat](http://cloud.rocket.chat)

![](<../../../.gitbook/assets/image (156).png>)

1. Go to Workspaces and select the workspace you want to check count for.
2. Push notifications block will show the number of used notifications per your current limit per month.

![](<../../../.gitbook/assets/image (157).png>)

## Enable push notifications for channels

Users can configure what notifications they want to receive on mobile for each channel.

To enable push notifications for channels:

1. Open room actions

![](<../../../.gitbook/assets/image (158).png>)

1. Notification preferences

![](<../../../.gitbook/assets/image (159).png>)

1. Mobile

![](<../../../.gitbook/assets/image (160).png>)

1. Select what type of notifications you want to receive.

![](<../../../.gitbook/assets/image (161).png>)

{% hint style="info" %}
On some channels, notifications can stop if the number of users exceeds the set limit. The limit is set in the Administration -> General -> Notifications.
{% endhint %}
