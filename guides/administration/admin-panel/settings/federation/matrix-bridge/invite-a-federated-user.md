# Invite a federated user

### Invite a federated user

You can invite users from other servers through the slash command.&#x20;

![Invite Users](<../../../../../../.gitbook/assets/federationslashcommand (2).png>)

{% hint style="info" %}
If you invite another Rocket.Chat server, which currently will auto-accept.
{% endhint %}

The structure for the slash command:

**/bridge invite @username:server\_name**

* _/bridge -_the slash command alias
* _invite -_ the command you want to execute
* _@username:server\_name -_ This is the typical structure for the invite. You need to use the @username if you want to invite, followed by the server\_name split by (:)

{% hint style="info" %}
You must run the slash command before, inside the room you want to federate.[PreviousCreate a federated room](https://app.gitbook.com/o/-M41dOPtnjO7qK6KCyrt/s/-M418Ul0aSTwf2PYsyPW/\~/changes/Jm01GaDRkiCAzeHTQzyy/guides/administration/admin-panel/settings/federation/create-a-federated-room)
{% endhint %}
