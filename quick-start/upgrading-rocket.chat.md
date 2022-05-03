# Upgrading Rocket.Chat

Rocket.Chat ships out updates frequently, to fix little bugs, address security issues or make small tweaks on a particular version of the app. All these to improve and help keep the application functional.

Upgrade on the other hand is a complete move to another version and is performed less frequently. A few reasons you may want to upgrade your workspace can be:

* Improvements in performance and stability
* Resolve the potential problems by fixing bugs and errors
* Enjoy new features, experiences and functionalities

{% hint style="info" %}
As of the time of this writing, the current version of Rocket.Chat is [`4.6.3`](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.6.3)`using node version 14.x.x`
{% endhint %}

<details>

<summary>Upgrading Rocket.Chat on Docker</summary>

To upgrade your Rocket.Chat setup on Docker, it is recommended you backup your data first if you don't have persistent volume for all your data.

1. Stop container by running:\
   &#x20;`docker stop <name_or_id>`
2. Delete container:\
   `docker rm <name_or_id>`
3. Delete image `docker rmi <name_image>`
4. Create or download the latest container:\
   `docker create <name_or_id>`
5. Start container:\
   `docker start <name_or_id>`



</details>

<details>

<summary>Upgrading Rocket.Chat Snap</summary>

The Rocket.Chat snap installation automatically pushes out updates periodically.

To upgrade to a new version, execute

```
sudo snap refresh rocketchat-server --channel=x.x.x/stable --classic
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
