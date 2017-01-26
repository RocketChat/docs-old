# Snaps

## Installation

Installing a snap on Ubuntu is as easy as

```
sudo snap install rocketchat-server
```

Snaps are secure. Rocket.Chat and all of its dependencies are isolated from the rest of your system. Snaps also auto update when we release a new version. So no need more hassle updating.


## FAQ
If you have questions about snaps best place to ask them is in: [#ubuntu-snap](https://demo.rocket.chat/channel/ubuntu-snap)

### How do I access my site at a different port?  How do I enable TLS/SSL with my snap?

Check out our guide for enabling caddy: [here](/3.%20Installation/4.%20Manual%20Installation/Ubuntu/Snaps/AutoSSL.md)

### Ubuntu 16.04 LTS gives message "snap not found", whats wrong?

Make sure you're using x64 or amd64 (or armhf) images, especially on VPS or VMs. x86 is 32 bit and not supported.

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
sudo systemctl status snap.rocketchat-server.rocketchat-mongo.service
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
sudo systemctl restart snap.rocketchat-server.rocketchat-mongo
```

### What is the restart policy?

The snaps policy is to restart on failure.

### How do I backup my snap data?

#### 1. Make a quick and easy backup via:
```
sudo snap run rocketchat-server.backupdb
```

#### 2. You will then see a bunch of output text followed by:
```
A backup of your data can be found at /var/snap/rocketchat-server/<version>/backup.tgz
```

#### 3. Copy `backup.tgz` to a different system for safekeeping.

### How do I restore backup data to my snap?

#### 1. Assuming you have your `backup.tgz` file (see above), simply extract it to a desired location (e.g., ~/backup_data)
```
cd ~
mkdir backup_data
cd backup_data
tar zxvf /path/to/your/backup.tgz
```

This will create the following directory tree where you can find the extracted backup data:
`~/backup_data/var/snap/rocketchat-server/<version>/dump/parties`

#### 2. Confirm your database name
The snap database name should be `parties`, but just to be safe:
```
sudo /snap/rocketchat-server/current/bin/mongo
(...)
> show dbs
local    0.000GB
parties  0.004GB
> exit
```

#### 3. Use `mongorestore` to restore your backup data back into your snap database
#### Important: before proceeding, consult https://docs.mongodb.com/manual/reference/program/mongorestore/ to learn about additional options and the non-overwriting behavior of `mongorestore` when the target database already exists.

##### Please note: at the time of writing, mongorestore required openssl version 1.0.2 specifically. If you see an error like this - `(...) version 'OPENSSL_1.0.2' not found (required by /snap/rocketchat-server/current/bin/mongorestore)` - simply install the required openssl version to continue.

When you are ready, run the following command (replacing `<version>` with the appropriate directory name):
```
sudo /snap/rocketchat-server/current/bin/mongorestore --db parties \
~/backup_data/var/snap/rocketchat-server/<version>/dump/parties/
```

#### 4. Restart your services
```
sudo service snap.rocketchat-server.rocketchat-mongo  restart
sudo service snap.rocketchat-server.rocketchat-server restart
sudo service snap.rocketchat-server.rocketchat-caddy  restart
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
