# Push Notification Security

Instead of sending the message content through push gateway, Apple**,** and Google, the Secured Push Notification sends just the ID of the message. 

Once the ID reaches the user’s device, the message is retrieved from Rocket.Chat server and the notification is created.

{% hint style="info" %}
Please note that this process works for both situations if the user is using Rocket.Chat’s push gateway or his own.
{% endhint %}



