---
description: >-
  Keep conversations private, ensuring only the sender and intended recipients
  are able to read them
---

# E2E Encryption

End-to-end encryption (E2EE) is a system of communication where only the communicating users can read the messages. Rocket.Chat uses this to prevent potential eavesdroppers.

{% hint style="info" %}
**IMPORTANT:** **E2E encryption functionality is currently in beta** and includes notable restrictions that workspace owners should carefully consider before activating this feature for production use as follow:

* E2E encrypted messages will not appear in search operations&#x20;
* Bots or other ancillary systems interacting via webhooks or REST API will not be able to read E2EE encrypted messages&#x20;
* File uploads are not encrypted&#x20;
* Rocket.Chat enables users to reset their private E2EE key to avoid permanent loss of data during the beta period
{% endhint %}



To access this setting, go to **Administration** > **Workspace** > **Settings** > **E2E Encryption**.

* **Enable encryption for Direct Rooms by default**: When set to true, direct rooms will be encrypted by default.
* **Enable encryption for Private Rooms by default**: When enabled, private rooms will be encrypted by default.
