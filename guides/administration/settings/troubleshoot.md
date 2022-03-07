# Troubleshoot

Configure how troubleshooting is handled on your server.

To access this section, go to **Administration** > **Settings** > **Troubleshoot**.

![](<../../../.gitbook/assets/administration >)

![](<../../../.gitbook/assets/image (656).png>)

{% hint style="danger" %}
We recommend these settings be altered only with guidance of the Rocket.Chat Development or Support Teams. Do not touch them if you don't know what you are doing!
{% endhint %}

* **Disable Notifications**: This setting completely disables the notifications system; sounds, desktop notifications, mobile notifications, and emails will stop!
* **Disable Presence Broadcast**: This setting prevents all instances from sending the status changes of the users to their clients keeping all the users with their presence status from the first load!
* **Disable Instance Broadcast**: Setting this to true prevents the Rocket.Chat instances from sending events to the other instances. It may cause syncing problems and misbehavior!
* **Disable Sessions Monitor**: This setting stops the processing of user sessions causing the statistics to stop working correctly!
* **Disable Livechat Activity Monitor**: Activating this setting stops the processing of LiveChat visitor sessions causing the statistics to stop working correctly!
* **Disable Statistics Generator**: Lets you stop the processing of all statistics making the info page outdated until someone clicks on the refresh button and may cause other missing information around the system.
* **Disable Data Exporter Processor**: This setting stops the processing of all export requests from users, so they will not receive the link to download their data!
* **Disable Workspace Sync**: Enabling this stops the sync of the server with Rocket.Chat's cloud and may cause issues with the marketplace and enterprise licenses!
