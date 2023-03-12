# Assign roles for users in federated rooms

Room members are able to assign room roles for federated users within a federated room context.

Roles in federated rooms are slightly different from the regular [Rocket.Chat Roles](../../../../permissions.md#default-roles) for the [_Room Scope_](../../../../permissions.md#scope-of-roles).

Federated rooms support 3 roles:

* **Owner**: Owns a room and has full control over it and its activities.\
  They can invite users, assign new owners, promote/demote moderators, remove users from the room, and edit room name and topic.
* **Moderator**: Moderators can manage user actions and details of the room.\
  They can invite users, assign new moderators, remove users from the room, and edit room name and topic.
* **User** (default): Room users are capable of sending and performing message actions in the room. Users cannot perform any room management related task

Matrix uses the concept of power levels to define room roles with the `Owner` being the most powerful, followed by the `Moderator`and the `User`the least powerful.

### IMPORTANT

{% hint style="danger" %}
Rocket.Chat global roles are not supported in federated rooms, it doesn't matter if they are  [_Room Scoped_](../../../../permissions.md#scope-of-roles).
{% endhint %}

{% hint style="danger" %}
For rooms created using [Element](https://app.element.io/#/welcome) as a Matrix client, only Owners (admins) are able to assign room roles/permissions, you need to change the **Change permissions** room setting to`Moderator`, otherwise Moderators users using Rocket.Chat as their Matrix Client, will NOT be able to assign roles for other users.

This can be done by navigating to **Room info** > **Room settings** > **Roles & Permission** on your Element client.
{% endhint %}

<figure><img src="../../../../../../.gitbook/assets/Element change role permission.png" alt=""><figcaption><p><em>Change permissions room setting when the room was created using Element as a client</em></p></figcaption></figure>

{% hint style="warning" %}
Rooms that are created with Element as the client has a set of room permission possibilities.

Changing the permissions for event-specific features can lead to unexpected behaviour for users on Rocket.Chat as their Matrix client.
{% endhint %}

The main rules for assigning roles in federated rooms are:

* At the moment of the room creation, only room owners (admin) are able to assign roles.
* All the users added to federated rooms have a User role by default.
* Users with the same role cannot assign roles (promote/demote) between them.
* Users with a specific role cannot demote other users from the room with the exact same role.
* Users can only demote and promote again users in the layer right below as his/her own roles.
* Whenever a user wants to promote a user to a role as powerful as his/her own role, it will not be possible to undo that change(a confirmation modal will double-check the operation).
* Whenever a user wants to demote himself/herself, it will not be possible to regain the same privileges the user has had, the only possibility is for a user with the necessary permission to give back the same role for that user(a confirmation modal will double-check the operation).

For any applicable other rule, they are the same as regular Rocket.Chat rooms, (e.g Room owners cannot demote themselves if they are the last owner of the room).

<figure><img src="../../../../../../.gitbook/assets/image (7) (2).png" alt=""><figcaption><p><em>Room owner possibilities for any other default user.</em></p></figcaption></figure>

<figure><img src="../../../../../../.gitbook/assets/image (24) (1).png" alt=""><figcaption><p><em>Room owner trying to demote (remove as an owner, switching to moderator) himself/herself confirmatio modal.</em></p></figcaption></figure>

<figure><img src="../../../../../../.gitbook/assets/image (11) (1).png" alt=""><figcaption><p><em>User trying to assign the same role as himself/herself confirmation modal.</em></p></figcaption></figure>

<figure><img src="../../../../../../.gitbook/assets/image (15) (1) (1).png" alt=""><figcaption><p><em>View of a regular user (with no permissions to assign roles, invite users, etc)</em></p></figcaption></figure>
