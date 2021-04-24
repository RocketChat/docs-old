# OTR

{% hint style="info" %}
This feature is currently in beta. Search operations will not find encrypted messages of encrypted rooms. The mobile apps and multi-DMs may not support the encrypted messages \(currently under implementation\). File Uploads will not be encrypted in this version.
{% endhint %}

Off-the-record \(OTR\) Messaging is a feature that allows users to exchange **temporary, encrypted messages directly between each other**. This happens by using the local**,** non-persistent session storage of their browser rather than storing messages on the Rocket.Chat server. After an OTR session ends and the session storage is cleared, the OTR messages are removed and can no longer be restored.

As an administrator, you can enable/disable OTR for your workspace, as shown below:

![](../../../.gitbook/assets/image%20%28387%29.png)

