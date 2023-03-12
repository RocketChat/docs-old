---
description: Installing on Windows 10 Pro 64-bit with Docker for Windows
---

# Windows 10

{% hint style="info" %}
_This is a community-supported installation method. To learn more, see this_ [_forum thread_](https://forums.rocket.chat/t/windows-10-pro-installation-guide/408)_._
{% endhint %}

## Requirements

* Minimum of 4 GB of memory on your Windows 10 Pro machine.
* A 64-bit edition of Windows 10 Pro.
* The latest updates have been installed on your Windows.
* Enabled Hyper-V (requires a reboot). Navigate to **Control Panel > Add Windows Components > Hyper-V.**
* Minimum of 20 GB of disk space, preferably SSD.

## Install Rocket.Chat

* Download and install [Docker for Windows](https://docs.docker.com/desktop/install/windows-install/).
* Create or open a directory you want to hold the content of your server.
* Create a file named `docker-compose.yml` based on [this example](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml).
* Run the following command in the same directory as the above file and wait for the server to start.

```
docker-compose up
docker-compose logs -f rocketchat
```

* Access your Rocket.Chat server via `http://localhost:3000.`
