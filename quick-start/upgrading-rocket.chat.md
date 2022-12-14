# Updating Rocket.Chat

Rocket.Chat ships updates frequently to introduce new capabilities, fix bugs, and in some cases address potential security issues. Each of these updates improves Rocket.Chat to provide valuable and secure capabilities to our users.

Workspace admins should monitor new releases and our release notes [here ](https://github.com/RocketChat/Rocket.Chat/releases)to determine whether updates should be applied to their workspace. We recommend that workspaces are kept current with Rocket.Chat releases.

{% hint style="danger" %}
* For a successful update, you must not skip any major version. That is, say you want to move from version `1.x.x` to say `4.x.x`, you need to traverse chronologically `1.x.x` -> `2.x.x` -> `3.x.x` -> `4.x.x`. Ideally, it's even better to make more granular steps, and not skip more than two minor versions at a time.
* Upgrading to `v5` requires you to be on at least `4.x`.
{% endhint %}

* [Updating on Docker](upgrading-rocket.chat.md#upgrading-rocket.chat-on-docker)
* [Updating on Snap](upgrading-rocket.chat.md#upgrading-rocket.chat-snap)
* [Updating Digital Ocean](upgrading-rocket.chat.md#upgrading-rocket.chat-digital-ocean-one-click-install)

## Updating Rocket.Chat on Docker

Assuming you followed our installation guide on installing with [Docker and Docker Compose](installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/), to update the `rocketchat` docker image to the latest version, you can use the following commands. Your data should not be affected by this, since it's located in the `mongo` image.

```
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest
docker-compose stop rocketchat
docker-compose rm rocketchat
docker-compose up -d rocketchat
```

## Updating Rocket.Chat Snap

The Rocket.Chat snap installation puts you on the `latest` track at the time of installation, which means you will always get the latest releases on that track.

{% hint style="info" %}
It is highly advised to [backup your data](installing-and-updating/rapid-deployment-methods/snaps/snap-backup-and-restore.md#backup-rocket.chat-snap-data) before upgrading
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

## Updating Rocket.Chat Digital Ocean One-Click Install

To update your Rocket.Chat Digital Ocean Droplet:

1. Update the update tool:\
   `sudo rocketchatctl upgrade-rocketchatctl`
2. Update Rocket.Chat:\
   `sudo rocketchatctl update`
3. The server is broken and doesn’t start, because it requires Nodejs 14.x.x\
   Install it:\
   `sudo apt-get -y update && sudo apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_14.x | sudo bash setup_14.x`\
   `sudo apt-get install -y nodejs`\
   ``\
   ``If you face any errors with installing the node, reboot your system and you’ll be able to continue with the next steps.\
   ![](<../.gitbook/assets/image (625).png>)
4. If it is not updated already, change the path to new nodejs in the service config:\
   `sudo nano /lib/systemd/system/rocketchat.service`\
   In the line beginning with “ExecStart=” replace “/usr/local/bin/node” with “/usr/bin/node”
5. Reload the service and start the server:\
   `sudo systemctl daemon-reload`\
   `sudo systemctl restart rocketchat.service`
6. Check that it’s running:\
   `sudo systemctl status rocketchat.service`

Other important topics concerning updates can be found here.

{% embed url="https://docs.rocket.chat/getting-support#mongodb-versions" %}

{% content-ref url="installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/docker-containers/mongodb-mmap-to-wiredtiger-migration.md" %}
[mongodb-mmap-to-wiredtiger-migration.md](installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/docker-containers/mongodb-mmap-to-wiredtiger-migration.md)
{% endcontent-ref %}
