# Invite external users to your Rocket.Chat server

## Invite external users' syntax

Whenever you want to invite someone from an external server, use the following syntax to identify them

```
@username:server.com
```

<figure><img src="../../../../../../.gitbook/assets/Screenshot 2022-12-07 124356.png" alt=""><figcaption><p>Invite external users syntax</p></figcaption></figure>

Which is represented by the following parts:

* `@username`: The username from the external server (red part).
* `(:)`: A colon character separating the external username and the external server name.
* `server.com`: The external server name(blue part).

Once the Matrix Bridge is well configured and running, the external users' syntax is interpreted in any _Add Members_ inputs all over the system.

{% hint style="info" %}
After you invite an external user for the first time, a copy for that user will be created in your local Rocket.Chat instance. This means you don't need to use the external user syntax to invite that specific user anymore. You can simply invite the local user, which will appear for you as a suggestion in any _Add Members_ input.
{% endhint %}

{% hint style="info" %}
Once the external user exists and the external server is running, the external user will auto-join the room. We are not allowing the users to decide if they want to accept an invite or not yet.
{% endhint %}
