---
description: Enterprise/Gold Feature
---

# Secured Push Notification

Instead of sending the message content through push gateway, Apple**,** and Google, if you are running Enterprise/Gold edition the Secured Push Notification sends just the ID of the message. 

Once the ID reaches the user’s device, the message is retrieved from Rocket.Chat server and the notification is created.

{% hint style="info" %}
Please note that this process works for both situations if the user is using Rocket.Chat’s push gateway or his own.
{% endhint %}

###  Privacy <a id="privacy"></a>

In Privacy, you can configure what amount of information you want your push notification to have.‌

1. Go to **Administration**

![](https://gblobscdn.gitbook.com/assets%2F-M418Ul0aSTwf2PYsyPW%2F-MIu7bi07NaZFbYSpJXT%2F-MIuGig9NcK8dKxenTuF%2Fimage.png?alt=media&token=12c524f6-d316-404d-8d1c-8900b61b22fb)

2. Search '**Push'** in **Settings**

​‌

![](https://gblobscdn.gitbook.com/assets%2F-M418Ul0aSTwf2PYsyPW%2F-MNoqPzvogBnNTSPZgYI%2F-MNowERLUMcrX9DNhVFy%2Fimage.png?alt=media&token=34db2493-3fc7-4c38-972b-52e0517731bf)

3. Go to **Privacy**

\*\*\*\*

![](../../../.gitbook/assets/image%20%28165%29.png)

![](https://gblobscdn.gitbook.com/assets%2F-M418Ul0aSTwf2PYsyPW%2F-MNzbyGrcLT-zbYvvICD%2F-MNze_IPgEDo_oOUzi8I%2Fimage.png?alt=media&token=053aa749-50ef-4b1d-912e-c795ecc7c58f)

Above are the default settings. 

The first two toggles are self-explanatory. 

If **Fetch full message content from the server on receipt** is enabled and you're running the _Enterprise Edition or Gold_, the notification payload, that is sent through the Apple Push Notification service or Firebase Cloud Messaging service contains no message content. Instead, it contains only the message ID which is then used by the mobile app to fetch the message content from the [Rocket.Chat](http://rocket.chat/) server to display the notification. If something happens and the app cannot reach the server in time, a generic push notification message is shown. When the setting is disabled, the whole message content is sent via push notification payload so the mobile app can display the notification right away.

