---
description: Installing on Windows 10 Pro 64bit with Docker for Windows
---

# Windows 10

_Note: This is a community supported installation method. You can discuss about this in the_ [_forum thread_](https://forums.rocket.chat/t/windows-10-pro-installation-guide/408)_._

Please make sure:

* you have at least 4 GB of memory on your Windows 10 Pro machine
* you are running 64 bit edition of Windows 10 Pro
* you have the latest updates installed, and no updates pending
* you have enabled Hyper-V (requires a reboot, go to Control Panel -> Add Windows Components -> Hyper-V)
* you have at least 20 GB of disk space, preferably SSD

## Steps:

* Download and install [Docker for Windows](https://docs.docker.com/docker-for-windows/)
* Create or open a directory you want to hold the content of your server
* Create a file named `docker-compose.yml` based on [our example](https://github.com/RocketChat/Rocket.Chat/blob/develop/docker-compose.yml)
* In the same directory as the above file, run the following command and wait for the server to fully start, takes a couple of minutes

```
docker-compose up
docker-compose logs -f rocketchat
```

* Access your Rocket.Chat server at `http://localhost:3000`
