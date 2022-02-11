# Snaps

## Installation

This requires you to have snap

On Ubuntu 16.04LTS, install `snapd` first:

```
sudo apt-get install snapd
```

Installing Rocket.Chat with snap on Ubuntu is as easy as executing

```
sudo snap install rocketchat-server
```

Then browse to `http://localhost:3000` and setup Rocket.Chat.

Snaps are secure. Rocket.Chat and all of its dependencies are isolated from the rest of your system. Snaps also auto-update when we release a new version. So no need for more hassle updating.

To move between different major releases, from 2.x to 3.x or from 3.x to 4.x, take a look at [snap tracks](https://forums.rocket.chat/t/introducing-snap-tracks/5890).
