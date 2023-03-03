# Rocket.Chat Federation

Federation allows for unlimited communication between workspaces by making them visible to each other on the federated network.

Rocket.Chat uses the [Matrix](https://matrix.org/) communication protocol for decentralized and interoperable communications. Bridging Rocket.Chat through Matrix makes it easy for organizations to connect and collaborate with external parties using any federated Rocket.Chat workspace or Matrix-compatible platform.

To enable and set up Federation on your workspace, go to **Administration** > **Workspace** > **Settings** > **Federation**. See this guide.

{% content-ref url="../rocket.chat-workspace-administration/settings/federation/" %}
[federation](../rocket.chat-workspace-administration/settings/federation/)
{% endcontent-ref %}

Setup and Configure federation with Matrix with this guide.

{% content-ref url="../workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/" %}
[matrix-homeserver-setup](../workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/)
{% endcontent-ref %}

{% hint style="info" %}
![](<../../.gitbook/assets/Deprecated (1).png>) [Rocket.Chat basic federation](../workspace-administration/settings/federation/rocket.chat-federation/) is deprecated as from Rocket.Chat `6.0.`

We recommend federating with [matrix-bridge](../rocket.chat-workspace-administration/settings/federation/matrix-bridge/ "mention")``
{% endhint %}

See how to make use of federated communication with this guide.

{% content-ref url="../workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/" %}
[matrix-users-guide](../workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/)
{% endcontent-ref %}

## Features

### Current

The following features are currently supported with the Rocket.Chat federation implementation.

See the possibilities available for [Enterprise Edition(EE) ](../../setup-and-administer-rocket.chat/enterprise-edition-trial/)and Community Edition(CE) workspaces in the table below.

<table><thead><tr><th>Feature</th><th data-type="checkbox">CE/EE</th><th data-type="checkbox">EE Only</th></tr></thead><tbody><tr><td>Create federated channels, groups, DMs, and multi-user DMs from the UI. <a data-mention href="../workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/create-a-federated-rooms.md">create-a-federated-rooms.md</a></td><td>false</td><td>true</td></tr><tr><td>Invite external users to federated channels, groups, DMs, and multi-user DMs from the UI. <a data-mention href="../workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/invite-external-users-to-your-rocket.chat-server.md">invite-external-users-to-your-rocket.chat-server.md</a></td><td>false</td><td>true</td></tr><tr><td>Search public rooms in the Matrix Network.</td><td>false</td><td>true</td></tr><tr><td>Invite multiple users to multi-user DMs using slash commands.</td><td>false</td><td>true</td></tr><tr><td>Invite an external user to DMs using slash commands.</td><td>true</td><td>false</td></tr><tr><td>Send/Receive attachments (Files, audio, and video messages) </td><td>true</td><td>false</td></tr><tr><td>Edit, Delete and Qoute messages.</td><td>true</td><td>false</td></tr><tr><td>Message reactions and sending emojis.</td><td>true</td><td>false</td></tr><tr><td>Mention internal and external users in federated channels.</td><td>true</td><td>false</td></tr><tr><td>User's avatar synchronization.</td><td>true</td><td>false</td></tr><tr><td>User's typing indicator (<a href="../workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/#important-warning-about-the-installation">More Info</a>)</td><td>true</td><td>false</td></tr><tr><td>Define permissions for users inside rooms (<a href="../workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms.md">More info</a>) .</td><td>true</td><td>false</td></tr><tr><td>Support for <a href="https://spec.commonmark.org/0.30/">Markdown spec</a>.</td><td>true</td><td>false</td></tr><tr><td>Servers allow list/block list (<a href="../workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list.md">More info</a>).</td><td>false</td><td>false</td></tr></tbody></table>

#### Coming Soon

Matrix CLI setup tool for a smooth and easy setup.
