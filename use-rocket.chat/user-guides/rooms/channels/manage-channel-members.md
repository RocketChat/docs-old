# Manage Channel Members

## View Channel Members

Channel members must have either one of these roles: Owner, Leader, Moderator, or User. Each channel member's [permission](../../../workspace-administration/permissions.md) members will depend on their role. The channel owner can manage all the channel members and assign any of these roles to them.

To see the list of members in a Channel,&#x20;

* Click the **Members** icon at the top-right menu of the channel screen. At first, the list only shows currently active users. Select **All** from the dropdown option beside the search bar to see all users.
* Select a user to view their **User Info**. The user preview screen shows their name, username, any role tags they might have, and their current timezone.
* You can send a direct message or call the user from the user info.&#x20;
* Click the **three dots** icon to see other user actions like ignore, mute user, or set roles ( as moderator, leader, or owner).

## Add Members to Channel

You can add members to a channel in two ways:&#x20;

* Send an Invite Link
* Manually Adding Users

### Manually Adding Users

You can use **the Add Users** option to add users already in your workspace.

To add a new user,

* At the bottom of the Channel members page, click **Add.**&#x20;
* Search and select the users, then click **Add users.**&#x20;

{% hint style="warning" %}
Rocket.Chat notifies you if the user is already an existing channel member**.**
{% endhint %}

### Send an Invite Link

At the bottom of the channel members page, click **Invite Link** and copy the generated link to share with your invitees.

#### Edit Invite Link

Depending on how long you want an invite link to last, you can edit the invite link periodically. &#x20;

To generate a new link,

* On the Invite Link page, Click **Edit Invite.**
* Select **Expiration (Days)** from the drop-down, select **Max number of uses,** and click **Generate New Link.**

{% hint style="info" %}
This link will ask the invitee to sign up if they are outside your Rocket.Chat workspace before granting them access to the channel.
{% endhint %}

#### Delete Invite Link

\
To delete an invite link, see [Delete an Invite Record via Admin Panel](https://docs.rocket.chat/guides/administration/admin-panel/invites#delete-a-record). This feature comes in handy when you have an invite link with an **Expiration date: Never**. To avoid abuse, you can revoke it by deleting the invite record.

{% hint style="warning" %}
You must have the **Create Invite Link** [permission](../../../workspace-administration/permissions.md) granted for your role to use the [permission](../../../workspace-administration/permissions.md). It is turned **ON** for the Admin, Owner, and Moderator roles. However, you can always ask the workspace administrator to update it to suit your needs.
{% endhint %}

## Remove a member from the Team

By default, only the channel owner can remove a team member. Although, other users with appropriate [permissions ](../../../workspace-administration/permissions.md)can also remove a team member.

* In the Channel members screen, search and select the user to view their **User Info**.&#x20;
* Click the **three dots** icon, then select **Remove from room.**
