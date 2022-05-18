# Snaps

## Installation

Snap is preinstalled in most modern distributions. If it is not, please read snap's [official documentation](https://snapcraft.io/docs/installing-snapd) on how to install snap.

Installing Rocket.Chat with snap on Ubuntu is as easy as executing:

```
sudo snap install rocketchat-server
```

Then browse to `http://localhost:3000` and setup Rocket.Chat.

The above command should install the latest version available. You can also specify install by track.

Snaps are secure. Rocket.Chat and all of its dependencies are isolated from the rest of your system. Snaps also auto-update when we release a new version. So no need for more hassle updating.

To move between different major releases, from 2.x to 3.x or from 3.x to 4.x, take a look at [snap tracks](https://forums.rocket.chat/t/introducing-snap-tracks/5890).
