# Marketplace Roles

Internally, we have two different roles for [rocket.chat-marketplace](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/ "mention"); one within the publisher and the second within the system. Henceforth known as publisher roles and system roles.

## Publisher Roles

There are three different roles within a Publisher.

* [Owner](marketplace-roles.md#publisher-owner)
* [Developer](marketplace-roles.md#publisher-developer)
* [Viewer](marketplace-roles.md#publisher-viewer)

as shown below:

<figure><img src="../../.gitbook/assets/Publisher Roles.png" alt=""><figcaption></figcaption></figure>

The Owner role is applied whenever someone creates a publisher. Each of the subsequent roles only applies to people they have invited.

### Publisher: Owner

The `owner` has permission to manage everything on the publisher dashboard. This includes managing both Apps and other Users.

To change the role of another user,

* Click **Change Role** from the **Actions** dropdown across the user in question
* Select the desired Role to change

### Publisher: Developer

A user with the `developer` role can read everything and update Apps.

### Publisher: Viewer

The `viewer` role can read everything but can not update anything.
