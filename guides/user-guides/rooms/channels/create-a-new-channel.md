# Create a new Channel

{% hint style="info" %}
Channels have restrictions in their naming. The `regex` responsible for validation can be located in **Admin** > **General** > **UTF8**&#x20;
{% endhint %}

### **To create a new channel**

![](<../../../../.gitbook/assets/image (383).png>)

You can set the name of that channel, choose if the channel is public or private, set the channel to read-only, broadcast the channel, and invite users.

#### Read- Only Channels

In Read-Only Channels, messages can only be sent by users with write permissions. All users can react to messages on this channel. Read-Only Channels are most suitable for announcements and voting.

#### Encrypted Channels

In Encrypted Channels, messages will be end-to-end encrypted. For more information, see [End to End Encryption](../../security-bundle/end-to-end-encryption.md).

#### Broadcasted Channels

Broadcasted Channels behave like read-only channels, with only users with the right permission being able to post there. The differences to a read-only channel are:

* Users without permission (the same one to post on read-only channels) inside this channel won't be able to see each other in the user list.
* Users without permission won't be able to react to messages.
* Every message contains a reply button that redirects the user to a direct message with the user that posted the message.
* This channel cannot be converted to a read-only or open channel again.

![](<../../../../.gitbook/assets/image (384).png>)

Hit **Create** and your new channel is created.
