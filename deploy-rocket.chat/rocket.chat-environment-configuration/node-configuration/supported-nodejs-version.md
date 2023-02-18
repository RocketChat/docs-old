---
description: Each Rocket.Chat version requires a specific Node version for it to work
---

# Supported NodeJs Version

{% hint style="info" %}
The only reason you may need to check this (except for idle curiosity or debugging purposes) is if you're using the manual method of deployment. We don't recommend manual installation. Instead, [Docker](../../../quick-start/installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/) is recommended and encouraged. With [Docker](../../../quick-start/installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/) (or [Snap](../../prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/snaps/)) you won't need to worry about the Node version.
{% endhint %}

Rocket.Chat is built with [Meteor](https://meteor.com), a JavaScript framework. The version of Meteor in use dictates the supported NodeJs version for that specific version.

You can check the supported NodeJs version for any specific release by navigating over to out GitHub releases page for that specific version.

For example, in case of 4.5.0, you can head over to

{% embed url="https://github.com/RocketChat/Rocket.Chat/releases/4.5.0" %}
Release 4.5.0
{% endembed %}

Look for "Engine versions".

![Supported NodeJs Version](<../../../.gitbook/assets/image (667).png>)

You can also use our releases API to access this information. Taking the version 4.5.0 as an example, to know the supported node version for this release, perform a GET on

{% embed url="https://releases.rocket.chat/4.5.0/info" %}
Releases Endpoint
{% endembed %}

You're looking for the `nodeVersion` key. For the current latest version, with `curl` and `jq`:

```
~ via  v12.22.11 took 25s
➜ curl https://releases.rocket.chat/latest/info -s | jq '.nodeVersion' -r
14.18.3
```
