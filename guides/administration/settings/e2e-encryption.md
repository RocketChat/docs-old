---
description: Settings for group encryption.
---

# E2E Encryption

End-to-end encryption (E2EE) is a system of communication where only the communicating users can read the messages. Rocket.Chat uses this in order to prevent potential eavesdroppers.

To access this setting, go to **Administration** > **Settings** > **E2E Encryption**.

![](<../../../.gitbook/assets/administration >)

![](<../../../.gitbook/assets/image (689).png>)

{% hint style="warning" %}
This feature is currently in beta! Please report bugs to [github.com/RocketChat/Rocket.Chat/issues](https://github.com/RocketChat/Rocket.Chat/issues) and be aware of:

* Encrypted messages of encrypted rooms will not be found by search operations.
* The mobile apps may not support the encrypted messages (they are implementing it).
* Bots may not be able to see encrypted messages until they implement support for it.
* Uploads will not be encrypted in this version.
{% endhint %}

* **Enable encryption for Direct Rooms by default**: When set to true, direct rooms will be encrypted by default.
* **Enable encryption for Private Rooms by default**: When enabled, private rooms will be encrypted by default.
