# Upgrading Rocket.Chat

Rocket.Chat ships updates frequently to introduce new capabilities, fix bugs and in some cases address potential security issues. Each of these updates improves Rocket.Chat to provide valuable and secure capabilities to our users.

Upgrade on the other hand is a complete move to another version and is performed less frequently. A few reasons you may want to upgrade your workspace can be:

* Improvements in performance and stability
* Resolve the potential problems by fixing bugs and errors
* Enjoy new features, experiences and functionalities

Workspace admins should monitor new releases and our release notes [here ](https://github.com/RocketChat/Rocket.Chat/releases)to determine whether updates should be applied to their workspace. We recommend that workspaces are kept current with Rocket.Chat releases.

{% hint style="info" %}
As of the time of this writing, the current version of Rocket.Chat is [`4.6.3`](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.6.3)`using Node version 14.18.3`
{% endhint %}

{% hint style="danger" %}
For a successful upgrade, it is recommended not to skip any major version. That is, say you want to move from version `1.x.x` to say `4.x.x`, you need to traverse chronologically `1.x.x` -> `2.x.x` -> `3.x.x` -> `4.x.x`. Ideally, it's even better to make more granular steps, and not skip more than two minor versions at a time.

This will prevent a couple of issues.
{% endhint %}

<details>

<summary>Upgrading Rocket.Chat on Docker</summary>

Assuming you followed our installation guide on installing with [Docker and Docker Compose](installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/), to upgrade the `rocketchat` docker image to the latest version, you can use the following commands. Your data should not be affected by this, since it's located in the `mongo` image.

```
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest
docker-compose stop rocketchat
docker-compose rm rocketchat
docker-compose up -d rocketchat
```

</details>

<details>

<summary>Upgrading Rocket.Chat Snap</summary>

The Rocket.Chat snap installation automatically pushes out updates periodically.

**Before performing a major version update, it is recommended to check our forum's announcement section**: [https://forums.rocket.chat/c/announcements/10](https://forums.rocket.chat/c/announcements/10)

You  can force an update by running `sudo snap refresh rocketchat-server`

Updating to a major version requires a track change learn more about this in this discussion [https://forums.rocket.chat/t/introducing-snap-tracks/5890](https://forums.rocket.chat/t/introducing-snap-tracks/5890).

Switching to a particular track is done by executing `sudo snap switch rocketchat-server --channel=`x`.x/stable` you will only receive updates relating to this version

To upgrade to a new version, execute

```
sudo snap refresh rocketchat-server --channel=x.x.x/stable
```

</details>

<details>

<summary>Upgrading Rocket.Chat Digital Ocean Oneclick Install</summary>

To upgrade your Rocket.Chat Digital Ocean droplet,

1. Upgrade the update tool:\
   `sudo rocketchatctl upgrade-rocketchatctl`
2. Upgrade Rocket.Chat:\
   `sudo rocketchatctl update`
3. The server is broken and doesn’t start, because it requires Nodejs 14.x.x\
   Install it:\
   `sudo apt-get -y update && sudo apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_14.x | sudo bash setup_14.x`\
   `sudo apt-get install -y nodejs`\
   ``\
   ``If you face any errors with installing node, reboot your system and you’ll be able to continue with the next steps.\
   ![](<../.gitbook/assets/image (625).png>)
4. If it's not updated already, change the path to new nodejs in the service config:\
   `sudo nano /lib/systemd/system/rocketchat.service`\
   In the line beginning with “ExecStart=” replace “/usr/local/bin/node” with “/usr/bin/node”
5. Reload the service and start the server:\
   `sudo systemctl daemon-reload`\
   `sudo systemctl restart rocketchat.service`
6. Check that it’s running:\
   `sudo systemctl status rocketchat.service`

</details>
