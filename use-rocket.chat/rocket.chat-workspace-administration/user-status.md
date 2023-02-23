# User Status

The Rocket.Chat User Status setting lets you manage users' presence and status in your workspace.

A **Presence** is used to determine the **Status** of a user in the workspace.

By default, Rocket.Chat has the following Presence presets.

* **Online**: Used to indicate a user is online and available.
* **Away**: Indicates a user is idle and away from the workspace. See how to configure the Idle time limit here [Default User Preferences](settings/account-settings/#default-user-preferences) or as a user in [User Presence](../user-guides/user-panel/managing-your-account/#user-presence).
* **Busy**: This shows a user is busy and not available on the workspace.
* **Offline**: Used to indicate a user is offline and not connected.

To access this menu,

Navigate to **Administration** > **Workspace** > **User Status**

Here, you can manage the [Presence service](user-status.md#presence-service) and [Custom Status](user-status.md#custom-status).

## Presence Service

{% hint style="warning" %}
The Presence service automatically gets disabled when concurrent connections are up to 200 on Rocket.Chat _Free Edition(Community Edition)_.

[Enterprise workspaces](settings/enterprise.md) have no cap on the Presence service.
{% endhint %}

### Enable Presence service

With the Presence service enabled, users are able to see the status of other users in the workspace.

To enable the Presence service,

* Click on **Presence service** from the **User Status** page
* The Presence service cap side pannel open up
* Toggle the **Service status** to true

{% hint style="info" %}
When the Presence service gets disabled automatically due to the cap on concurrent connections,

* Users see the status indicator for all users including themselves as `disabled`.
* The workspace Administrator has to manually reactivate the Presence service when the total number of connections drops below the connection limit of 200.&#x20;
* Workspace users and administrator(s) are notified that Presence is inactive because the workspace has exceeded the connection limit.
{% endhint %}

## Custom Status

### Create a Custom Status

* Click on **New custom status** at the top right.
* A side panel opens up prompting you to set the details.
* Enter a **name** for your custom status.
* Select a **presence** to tie with your custom status.
* Hit **Save**

### Use Custom Status

Created custom status shows up along with the default status presets to all users across your workspace.

To set a custom status,&#x20;

* Click on your avatar by the top left of your workspace
* A dropdown is seen
* Select the custom status from the list of statuses

### Delete/Edit Custom Status

To delete or edit a custom status,

Search and click the custom status you want to edit or delete.

Press **Delete** or **Edit** to delete or update the selected status respectively.
