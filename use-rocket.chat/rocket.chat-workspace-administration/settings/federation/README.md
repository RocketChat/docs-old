# Federation

Federation allows for an unlimited number of workspaces to communicate with each other. Federating a workspace makes it visible to other workspaces over the federated network, thus making communication with other Federation-enabled servers possible.

To access Federation on your workspace, navigate to **Administration > Workspace > Settings > Federation**

Rocket.Chat provides Federation using the [Matrix Protocol](https://matrix.org/) and the [Rocket.Chat Federation Network](../../../workspace-administration/settings/federation/rocket.chat-federation/) (Will be deprecated on 6.0.0).

Rocket.Chat provides federation in the following ways:

****[**Matrix Bridge**](matrix-bridge/)**:** See how to federate your Rocket.Chat workspace with the [Matrix Protocol](https://matrix.org/).

****[**Rocket.Chat Federation**](../../../rocket.chat-federation/): Learn how to federate with Rocket.Chat basic federation.

{% hint style="info" %}
* We strongly recommend federating using Matrix Bridge.
* The Rocket.Chat basic federation is deprecated from version `6.0.`
{% endhint %}
