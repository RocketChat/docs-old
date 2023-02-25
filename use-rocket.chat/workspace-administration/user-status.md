# User Status



The Rocket.Chat User Status setting lets you manage users' presence and status in your workspace.

A **Presence** is used to determine the **Status** of a user in the workspace.

By default, Rocket.Chat has the following Presence presets.

* **Online**: Used to indicate a user is online and available.
* **Away**: Indicates a user is idle and away from the workspace. See how to configure the Idle time limit here [Default User Preferences](settings/account-settings/#default-user-preferences) or as a user in [User Presence](../user-guides/user-panel/my-account/#user-presence).
* **Busy**: This shows a user is busy and unavailable on the workspace.
* **Offline**: Used to indicate a user is offline and not connected.

To access this menu,

Navigate to **Administration** > **Workspace** > **User Status**

## Presence Service

With the Presence service enabled, users can see the status of other users in the workspace.

To enable the Presence service,

* Navigate to **Administration** > **Workspace** > **User Status** > **Presence service.** The Presence service cap side panel opens up.
* Toggle the **Service status** to on.

{% hint style="warning" %}
The Presence service automatically gets disabled when concurrent connections are up to 200 on Rocket.Chat _Free Edition(Community Edition)_.

[Enterprise workspaces](settings/enterprise.md) have no cap on the Presence service.
{% endhint %}

{% hint style="info" %}
When the Presence service gets disabled automatically due to the cap on concurrent connections,

* Users see the status indicator for all users, including themselves as `disabled`.
* The workspace Administrator has to manually reactivate the Presence service when the total number of connections drops below the connection limit of 200.&#x20;
* Workspace users and administrator(s) are notified that Presence is inactive because the workspace has exceeded the connection limit.
{% endhint %}

## Custom Status

To create a custom status,

* Navigate to **Administration** > **Workspace** > **User Status** > **New custom status.** A side panel opens up.
* Enter a **name** for your custom status.
* Select a **presence** to tie with your custom status.
* Hit **Save**

### Use Custom Status

Created custom status shows up along with the default status presets to all users across your workspace.

To set a custom status,&#x20;

* Click on your avatar by the top left of your workspace
* A dropdown is seen
* Select the custom status from the list of statuses.

### Delete/Edit Custom Status

To delete or edit a custom status,

* Navigate to **Administration** > **Workspace** > **User Status**
* Search and click the custom status you want to edit or delete.
* Hit **Delete** or **Edit** to delete or update the selected status, respectively.
