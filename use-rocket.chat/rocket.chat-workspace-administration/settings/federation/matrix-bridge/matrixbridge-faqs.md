# Matrix Bridge FAQs



<details>

<summary>What is the Matrix Protocol?</summary>

[Matrix](https://matrix.org/) is an open standard for interoperable, decentralized, real-time communication over IP.

</details>

<details>

<summary>How does Matrix work in Rocket.Chat?</summary>

Rocket.Chat aims to enable seamless communication and collaboration across platforms, empowering individuals and organizations to connect on their terms and fluently share information with other platforms.

</details>

<details>

<summary>What is a homeserver?</summary>

It's an implementation of the Matrix spec, there are some existing homeservers, the most famous are [Synapse ](https://github.com/matrix-org/synapse)and [Dendrite](https://github.com/matrix-org/dendrite).

</details>

<details>

<summary>How do I install Synapse?</summary>

* Installing [Synapse](https://matrix.org/docs/guides/installing-synapse).
* Configuring [federation](https://matrix-org.github.io/synapse/latest/federate.html).

</details>

<details>

<summary>What are the prerequisites for using Matrix on Rocket.Chat?</summary>

See how to [install and configure](../../../../../guides/administration/admin-panel/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup.md) Rocket.Chat Matrix Bridge integration.

</details>

<details>

<summary>How do I test my Rocket.Chat Matrix Bridge setup?</summary>

See how to [test ](../../../../../guides/administration/admin-panel/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup.md#testing-your-setup)your setup.

</details>

<details>

<summary>How can I block undesired homeservers to contact me?</summary>

See [how to create allow/block lists](matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list.md) in your Matrix homeserver configuration.

</details>

<details>

<summary>What happens when I invite someone from an external server?</summary>

Whenever you invite someone to chat with you either through a public, private, or DM rooms, a copy for that external user will be created in your local workspace, and a copy for your user will be created in the external (inviter) server as well. From there every message is stored on both sides.

</details>

<details>

<summary>Will the copies for external users created in my local workspace be counted as a valid seats (Enterprise license)?</summary>

No, all the copies being created to support the Matrix Bridge feature will NOT be counted as a valid seat. Only users you create in your local workspace.

</details>

<details>

<summary>Can I change the Role of an federated user in my local workspace?</summary>

No, all the external users created in your local workspace will be created as a User (user role) and without an email and password, which means they are not able to login directly into your workspace, the only way for them to communicate with your local workspace must be only through the open channel you have with them.

</details>

<details>

<summary>Will I be able to see the presence status for a federated user?</summary>

Unfortunately not at this point, when it comes to presence status the support from Bridges are very unstable, and due to that, we don't support that yet.

</details>

For more information about the Matrix Protocol, visit [FAQs](https://matrix.org/faq/).
