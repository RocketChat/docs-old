---
description: >-
  If you want to invite external users to your Rocket.Chat workspace, you can
  add them as guest users.
---

# Guest users

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (34).jpg" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Guest is a role that is available only on the Enterprise edition, and it's not possible to change the permissions for this role.
{% endhint %}

{% hint style="success" %}
All users assigned to the guest role don't count on the cap of seats, but they count in the guest cap.
{% endhint %}

### What can a guest user do?

Guest users have fewer capabilities than regular users.

As a guest user of Rocket.Chat, you can start the conversation, view direct messages, view joined rooms, and view the private room.

{% hint style="info" %}
It's possible to set a maximum number of guest users for every license.

It's possible to set a maximum number of channels a guest can join for every license.
{% endhint %}

## Manage your guest users

### **Guest Access Permissions**

{% hint style="info" %}
Guest accounts are only available on Enterprise, and the permissions are pre-defined for this role.
{% endhint %}

Go to **Administration > Workspace > Permissions.** You will notice that the permissions that a guest role has are: start the conversation, view direct messages, view joined the room, and view private room.

#### Permissions Available **for the Guest Role**

![Permissions](../../../.gitbook/assets/GuestUser\_Permissions.png)

### Add a Guest User

{% hint style="info" %}
You must be an administrator to add a guest to Rocket.Chat workspace.
{% endhint %}

* Go to **Administration > Workspace > Users > New**
* On the **Add User** page\*\*,\*\* enter the guest users' information:
  * **Name:** Enter the name of the guest user.
  * **Username:** Enter the guest users's username.
  * **Email:** Enter the guest users' email address.
  * **Status Message:** Set the guest user's status message.
  * **Bio:** Enter the guest user's bio information.
  * **Nickname:** Enter the guest users's nickname.
  * **Password:** Enter the guest users's password.
  * **Require password change:** Enable or disable this option to change or reset the password.
  * **Set random password and send by email:** Enable or disable this option to set a random password and send by email.
  * **Roles:** Select the **guest** role from the dropdown menu.
  * **Join default channels:** Set whether you want the guest user to join default channels.
  * **Send welcome email:** Set whether you want to send a welcome email \*\*\*\* to the guest user.
* Click **Save**.

{% hint style="info" %}
**Roles** - This will define what permissions a user has.
{% endhint %}

Once the guest user is added, you can edit, activate and deactivate the guest role.

### Activate Guest Users

* Go to **User Info** and then click **Activate.**

### Deactivate Guest Users

* Go to **User Info** and then click **Deactivate.**
