# Manage guest users

If you want to invite external users to your Rocket.Chat workspace, you can add them as guest users.

Here are the steps that will help you manage your guest users.

* [Guest Users in Rocket.Chat](manage-guest-users.md#guest-users-in-rocket.chat)&#x20;
* [Guest Access Permissions](manage-guest-users.md#rocket.chat-guest-access-permissions)&#x20;
* [Add a guest user](manage-guest-users.md#add-a-guest-user-to-channels)
* [Activate guest users](manage-guest-users.md#enable-guest-users)&#x20;
* [Deactivate guest users](manage-guest-users.md#disable-guest-users)&#x20;

### Before you begin

* You need to be aware of the permissions set for guest users in Rocket.Chat.&#x20;
* You must be an administrator to add a guest to Rocket.Chat workspace.&#x20;

## Guest Users in Rocket.Chat

Guest is a role that is available on Enterprise. All users assigned with the guest role, don't count on the cap of the seat, but they count towards the guest cap. It's possible to set a maximum number of guest users and channels a guest can join for every license.

### What can a guest user do?

Guest users have fewer capabilities than regular users.&#x20;

As a guest user in Rocket. Chat, you can start the conversation, view direct messages, view joined rooms, and view the private room.

## **Guest Access Permissions**

{% hint style="info" %}
Guest accounts are only available on Enterprise, and the permissions are pre-defined for this role.
{% endhint %}

Go to **Administration > Permissions.** You will notice that the permissions that a guest role has are: start the conversation, view direct messages, view joined the room, and view private room.

#### Permissions Available **for the Guest Role**

![Permissions](../../../../.gitbook/assets/GuestUser\_Permissions.png)

### Add a Guest User

* Go to **Administration > Users > New** as shown below:

![](<../../../../.gitbook/assets/New User.png>)

* On the **Add User** page**,** enter the guest users' information:
  * **Name:** Enter the name of the guest user.
  * **Username:** Enter the guest users's username.
  * **Email:** Enter the guest users's email address.
  * **Status Message:** Set the guest user's status message.
  * **Bio:** Enter the guest user's bio information.
  * **Nickname:** Enter the guest users's nickname.
  * **Password:** Enter the guest users's password.
  * **Require password change:** Enable or disable this option to change or reset the password.
  * **Set random password and send by email:** Enable or disable this option to set random password and send by email.
  * **Roles:** Select the **guest** role from the dropdown menu.
  * **Join default channels:** Set whether you want the guest user to join default channels.
  * **Send welcome email:** Set whether you want to send a welcome email **** to the guest user.
* Click **Save**.

{% hint style="info" %}
**Roles** - This will define what permissions a user has.&#x20;
{% endhint %}

Once the guest user is added, you can edit, activate and deactivate the guest role.

### Activate Guest Users

* Go to **User Info** and then click **Activate.**

![](../../../../.gitbook/assets/ActivateGuestuser.png)

### Deactivate Guest Users

* Go to **User Info** and then click **Deactivate.**

![](../../../../.gitbook/assets/Deactivateguest.png)
