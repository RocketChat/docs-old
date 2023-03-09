# Secured Push Notification

![](<../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (17).jpg>)

If you are using the Enterprise edition, the Secured Push Notification sends the ID of the message rather than the entire message through a push gateway (Apple or Google). Once the ID reaches the user’s device, the message is retrieved from Rocket.Chat server and the notification is created.

{% hint style="info" %}
This process works for both situations if the user uses Rocket.Chat’s push gateway or his own.
{% endhint %}

## Privacy

You can enable and configure push notifications for workspace members using mobile devices.

### Show Channel/Group/Username in Notification

The default is **TRUE**. Disabling this setting prevents the Channel, Group, Discussion, and Username from being sent to the push notification gateway.

### Show Message in Notification

The default is **TRUE**. Disabling this setting prevents the message content from being sent to the push notification gateway.

If the above privacy settings are disabled, the user receives a push notification without contextual information, as no such contextual information is sent to the push notification gateway in the first place. Then, the user can access the contextual information by opening the Rocket.Chat application. It is helpful in compliance-sensitive requirements like HIPAA to prevent sensitive information from being disclosed via push notification.

### **Fetch full message content from the server on the receipt**

If this setting is enabled, the notification payload sent through the Apple Push Notification service or Firebase Cloud Messaging service contains no message content. Instead, it has only the message ID, which is used by the mobile app to fetch the message content from the [Rocket.Chat](http://rocket.chat) server to display the notification. A generic push notification message is shown if something happens and the app cannot reach the server in time. When the setting is disabled, the message content is sent via push notification payload so the mobile app can immediately display the notification.

To update privacy for push notifications,

* Go to **Administration > Workspace > Settings > Push**
* Go to **Privacy** and update your settings.
* Click **Save Change**s.
