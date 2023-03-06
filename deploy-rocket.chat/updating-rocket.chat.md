# Updating Rocket.Chat

Rocket.Chat ships updates frequently to introduce new capabilities, fix bugs, and in some cases address potential security issues. Each of these updates improves Rocket.Chat to provide valuable and secure capabilities to our users.

Workspace admins should monitor new releases and our release notes [here ](https://github.com/RocketChat/Rocket.Chat/releases)to determine whether updates should be applied to their workspace. We recommend that workspaces are kept current with Rocket.Chat releases.

{% hint style="danger" %}
* For a successful update, you must not skip any major version. That is, say you want to move from version `1.x.x` to say `4.x.x`, you need to traverse chronologically `1.x.x` -> `2.x.x` -> `3.x.x` -> `4.x.x`. Ideally, it's even better to make more granular steps, and not skip more than two minor versions at a time.
* Upgrading to `v5` requires you to be on at least `4.x`.
{% endhint %}

* [Updating on Docker](updating-rocket.chat.md#upgrading-rocket.chat-on-docker)
* [Updating on Snap](updating-rocket.chat.md#upgrading-rocket.chat-snap)

## Updating Rocket.Chat on Docker

Provided your workspace was deployed using [Docker and Docker Compose](../quick-start/installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/), you can update the `rocketchat` [docker image](prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/docker-and-docker-compose/docker-containers/available-images.md) and the version of your Rocket.Chat server to the latest or any version following any of these guides.

{% hint style="success" %}
Updating the Rocket.Chat image doesn't affect your data, since it exists in the mongo image.
{% endhint %}

### Updating to Latest

{% hint style="info" %}
Make sure the Rocket.Chat image value in the [compose file](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml) points to the `latest` tag on the registry.
{% endhint %}

You can update directly to the latest version of Rocket.Chat by:

* Pulling the Rocket.Chat image with the `latest` tag

```
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest
```

* Stop and restart the existing container

```
docker-compose stop rocketchat
docker-compose rm rocketchat
docker-compose up -d rocketchat
```

### Updating to a specific version

To update your Rocket.Chat server to a specific version, follow these steps:

* In your deployment directory, edit your `.env` or `compose.yml` file to point to the desired Rocket.Chat version

<details>

<summary>Changing version in <code>.env</code></summary>

In the [`.env`](https://github.com/RocketChat/Docker.Official.Image/blob/master/env.example) file, change the `RELEASE` value to your specified version.

```
RELEASE=<desired version>
```

</details>

OR

<details>

<summary>Changing version in <code>compose.yml</code></summary>

In the [`compose.yml`](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml) file, change the `rocketchat` service `image` value to point to an image in the rocketchat registry image with a [tag](https://hub.docker.com/r/rocketchat/rocket.chat/tags/) of your desired version.

```
services:
  rocketchat:
    image:registry.rocket.chat/rocketchat/rocket.chat:<desired version>
```

</details>

* Stop and restart the existing rocketchat container by running

```
docker-compose stop rocketchat
docker-compose rm rocketchat
docker-compose up -d rocketchat
```

See [available-images.md](prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/docker-and-docker-compose/docker-containers/available-images.md "mention") for more on rocketchat docker images.

## Updating Rocket.Chat Snap

The Rocket.Chat snap installation puts you on the `latest` track at the time of installation, which means you will always get the latest releases on that track.

{% hint style="info" %}
It is highly advised to [back up your data](prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/snaps/snap-backup-and-restore.md#backup-rocket.chat-snap-data) before upgrading.
{% endhint %}

**Before performing a major version update, it is recommended to check our forum's announcement section**: [https://forums.rocket.chat/c/announcements/10](https://forums.rocket.chat/c/announcements/10) as major releases are usually delayed by a couple of weeks. This happens so that feedback is gotten and minor patches are made before pushing out.

You  can force an update by running:

```
sudo snap refresh rocketchat-server
```

Updating to a major version requires a track change learn more about this in this discussion [https://forums.rocket.chat/t/introducing-snap-tracks/5890](https://forums.rocket.chat/t/introducing-snap-tracks/5890).

Switching to a particular track is done by executing the following command. You will only receive updates relating to this track.

```
sudo snap switch rocketchat-server --channel=x.x/stable
```

Besides the **latest** track, there is also **stable**, **candidate** and **edge.**

More details on what channels are: [https://snapcraft.io/docs/channels](https://snapcraft.io/docs/channels)

**To update to a new version, execute**

```
sudo snap refresh rocketchat-server --channel=x.x.x/stable
```

{% embed url="https://docs.rocket.chat/getting-support#mongodb-versions" %}

{% content-ref url="prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/docker-and-docker-compose/docker-containers/mongodb-mmap-to-wiredtiger-migration.md" %}
[mongodb-mmap-to-wiredtiger-migration.md](prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/docker-and-docker-compose/docker-containers/mongodb-mmap-to-wiredtiger-migration.md)
{% endcontent-ref %}
