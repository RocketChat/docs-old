# Snaps

## Installation

Installing a snap on Ubuntu is as easy as

```
sudo snap install rocketchat-server
```

Snaps are secure. Rocket.Chat and all of its dependencies are isolated from the rest of your system. Snaps also auto update when we release a new version. So no need more hassle updating.


## FAQ
If you have questions about snaps best place to ask them is in: [#ubuntu-snap](https://demo.rocket.chat/channel/ubuntu-snap)

### How do I manually update to new release?

Updates happen automatically usually in a 6 hour window from time of release.  If you want it quicker you can do:
```
sudo snap refresh rocketchat-server
```

### How do I tell if Rocket.Chat is actually running?

You can check on the status of Rocket.Chat with:
```
sudo systemctl status snap.rocketchat-server.rocketchat-server.service
```

You can also check on the status of Mongo running in the snap with:
```
sudo systemctl status snap.rocketchat-server.mongo.service
```

### How can I view the logs?

To see the logs from rocket.chat 
```
sudo journalctl -u snap.rocketchat-server.rocketchat-server
```

To see the logs from mongo 
```
sudo journalctl -u snap.rocketchat-server.rocketchat-mongo
```

### I need to restart Rocket.Chat, how do I do this?

```
sudo systemctl restart snap.rocketchat-server.rocketchat-server
```
Also can restart Mongo via:
```
sudo systemctl restart snap.rocketchat-server.mongo
```

### What is the restart policy?

The snaps policy is to restart on failure.

### I need to backup the data from my snap how do I do this?

All data is located in `/var/snap/rocketchat-server/common`

So you can make a quick and easy backup via:
```
tar cvf rocketchat-backup.tar /var/snap/rocketchat-server/common/'
```

### What folders do snaps use?

* Your actual snap files for each version of Rocket.Chat are copied to: `/var/lib/snapd/snaps` and they are mounted read only
* Your snap common directory is: `/var/snap/rocketchat-server/common/` file upload to disk, and database is stored here.
* Your snap data directory is `/var/snap/rocketchat-server/<version>` this is a versioned folder.

### I want to manually move a previous version of Rocket.Chat how do I do this?

You can do this via:
```
snap remove --revision=35 rocketchat-server
```

<!--### I need to install snaps on a computer with out a network, how do I get the snaps?

You will need two things.  First you need the ubuntu-core snap.  This is a base snap that is normally auto downloaded if you are connected to the internet.  You can get this via:
```
curl -X GET -H "Content-Type: application/json" -H "X-Ubuntu-Series: 16" -H "X-Ubuntu-Architecture: amd64" "https://search.apps.ubuntu.com/api/v1/snaps/details/ubuntu-core?channel=stable&confinement=strict"
```
Make sure to change the architecture if differs from amd64

Then you need to get the Rocket.Chat snap via:

```
curl -X GET -H "Content-Type: application/json" -H "X-Ubuntu-Series: 16" -H "X-Ubuntu-Architecture: amd64" "https://search.apps.ubuntu.com/api/v1/snaps/details/rocketchat-server?channel=stable&confinement=strict"
```
-->
### I need to add in a tool like strace to debug what's happening in my snap.  How do I do this?

```
snapcraft prime
snap try prime --devmode
cp /usr/bin/strace prime
snap run <snap.app> --shell
sudo ./strace
```
