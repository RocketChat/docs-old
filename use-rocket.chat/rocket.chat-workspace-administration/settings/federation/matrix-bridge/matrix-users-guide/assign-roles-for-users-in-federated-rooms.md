# Assign roles for users in federated rooms

Room members are able to assign room roles for federated users within a federated room context. Rocket.Chat already has a feature like this one in regular rooms, however, the behavior is slightly different for federated rooms.&#x20;

\
Federated rooms support 3 roles:

* Owner
* Moderator
* User (default)

Matrix uses the concept of power levels to define room roles. Having said that, given the room roles we currently support, we can define the Owner as the most powerful role, followed by the Moderator role (less powerful than the Owner, but more powerful than the User), and finally the User role (the less powerful one).

### IMPORTANT

{% hint style="danger" %}
Rocket.Chat global roles are not supported in federated rooms, it doesn't matter if they are "Rooms" scoped, they are not supported.
{% endhint %}

{% hint style="danger" %}
For rooms created using [Element](https://app.element.io/#/welcome) as a Matrix client, only Owners (admins) are able to assign room roles/permissions, you do need to change the "Change permissions" room setting to "Moderator", otherwise Moderators users using Rocket.Chat as their Matrix Client, will NOT be able to assign roles for other users.


{% endhint %}

<figure><img src="../../../../../../.gitbook/assets/image (37) (1) (1).png" alt=""><figcaption><p><em>Change permissions room setting when the room was created using Element as a client</em></p></figcaption></figure>

{% hint style="danger" %}
As you can see in the screenshot above, when rooms are created using Element, there is a myriad of room permissions possibilities, they have really granular options to define roles required to deal with each specific event. Keep in mind if you change the permissions for events to a specific one, this might lead to unexpected behavior (in Rocket.Chat side) if your peers are using Rocket.Chat as a Matrix client.
{% endhint %}

Users carrying these permissions can do:

* Owner: Invite users, assign new owners, promote/demote moderators, remove users from the room, edit room name and room topic.
* Moderator: Invite users, assign new moderators, remove users from the room, and edit room name and topic.
* Users: nothing related to room management.

The main rules for assigning roles in federated rooms are:

* At the moment of the room creation, only room owners (admin) are able to assign roles.
* All the users added to federated rooms have a User role by default.
* Users with the same role cannot assign roles (promote/demote) between them.
* Users with a specific role cannot demote other users from the room with the exact same role.
* Users can only demote and promote again users in the layer right below as his/her own roles.
* Whenever a user wants to promote a user to a role as powerful as his/her own role, it will not be possible to undo that change(a confirmation modal will double-check the operation).
* Whenever a user wants to demote himself/herself, it will not be possible to regain the same privileges the user has had, the only possibility is for a user with the necessary permission to give back the same role for that user(a confirmation modal will double-check the operation).

For any applicable another rule, they are the same as regular Rocket.Chat rooms, (e.g Room owners cannot demote themselves if they are the last owner of the room).

<figure><img src="../../../../../../.gitbook/assets/image (7) (2).png" alt=""><figcaption><p><em>Room owner possibilities for any other default user.</em></p></figcaption></figure>

<figure><img src="../../../../../../.gitbook/assets/image (24) (1).png" alt=""><figcaption><p><em>Room owner trying to demote (remove as an owner, switching to moderator) himself/herself confirmatio modal.</em></p></figcaption></figure>

<figure><img src="../../../../../../.gitbook/assets/image (11) (1).png" alt=""><figcaption><p><em>User trying to assign the same role as himself/herself confirmation modal.</em></p></figcaption></figure>

<figure><img src="../../../../../../.gitbook/assets/image (15) (1).png" alt=""><figcaption><p><em>View of a regular user (with no permissions to assign roles, invite users, etc)</em></p></figcaption></figure>
