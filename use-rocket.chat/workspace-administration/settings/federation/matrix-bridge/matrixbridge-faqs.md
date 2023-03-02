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

It's an implementation of the Matrix spec, there are some existing homeservers. The most famous are [Synapse ](https://github.com/matrix-org/synapse)and [Dendrite](https://github.com/matrix-org/dendrite).

</details>

<details>

<summary>How do I install Synapse?</summary>

* Installing [Synapse](https://matrix.org/docs/guides/installing-synapse).
* Configuring [federation](https://matrix-org.github.io/synapse/latest/federate.html).

</details>

<details>

<summary>What are the prerequisites for using Matrix on Rocket.Chat?</summary>

See how to [install and configure](matrix-admin-guide/matrix-homeserver-setup/) Rocket.Chat Matrix Bridge integration.

</details>

<details>

<summary>How do I test my Rocket.Chat Matrix Bridge setup?</summary>

See how to [test ](matrix-admin-guide/matrix-homeserver-setup/#testing-your-setup)your setup.

</details>

<details>

<summary>How can I block undesired homeservers to contact me?</summary>

See [how to create allow/block lists](matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list.md) in your Matrix homeserver configuration.

</details>

<details>

<summary>What happens when I invite someone from an external server?</summary>

Whenever you invite someone to chat with you either through public, private, or DM rooms, a copy for that external user will be created in your local workspace. And a copy for your user will be created in the external (inviter) server as well. From there, every message is stored on both sides.

</details>

<details>

<summary>Will the copies for external users created in my local workspace be counted as a valid seats (Enterprise license)?</summary>

No, all the copies being created to support the Matrix Bridge feature will NOT be counted as valid seats. Only users you create in your local workspace are counted as valid seats.

</details>

<details>

<summary>Can I change the Role of an federated user in my local workspace?</summary>

No, all the external users created in your local workspace will be created as a User (user role) and without an email and password, which means they cannot log in directly to your workspace. The only way for them to communicate with your local workspace is through the open channel you have with them.

</details>

<details>

<summary>Will I be able to see the presence status for a federated user?</summary>

Unfortunately, not at this point. When it comes to presence status, the support from Bridges is very unstable, and due to that, we don't support it yet.

</details>

For more information about the Matrix Protocol, visit [FAQs](https://matrix.org/faq/).
