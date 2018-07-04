# Snaps

## Installation

Installing a snap on Ubuntu is as easy as

```
sudo snap install rocketchat-server
```

Then browse to `http://localhost:3000` and setup Rocket.Chat.

Snaps are secure. Rocket.Chat and all of its dependencies are isolated from the rest of your system. Snaps also auto update when we release a new version. So no need more hassle updating.

On Ubuntu 14.04LTS, install `snapd` first:

```
sudo apt-get install snapd
```

## FAQ

If you have questions about snaps best place to ask them is at the [#ubuntu-snap](https://open.rocket.chat/channel/ubuntu-snap) channel.

### How do I access my site at a different port?  How do I enable TLS/SSL with my snap?

Check out our guide for enabling caddy [here](../../../../installation/manual-installation/ubuntu/snaps/autossl/).

### Ubuntu 16.04 LTS gives message "snap not found", whats wrong?

Make sure you're using x64 or amd64 (or armhf) images, especially on VPS or VMs. x86 (32-bit) is not supported.

### How do I manually update to new release?

While updates happen automatically usually within 6 hours from time of release, you can update manually by issuing this command:

```
sudo snap refresh rocketchat-server
```

### How do I revert to the previous version of Rocket.Chat?

```
sudo snap revert rocketchat-server
```

### How do I tell if Rocket.Chat is actually running?

You can check on the status of Rocket.Chat with:

```
sudo service snap.rocketchat-server.rocketchat-server status
```

You can also check on the status of Mongo and Caddy:

```
sudo service snap.rocketchat-server.rocketchat-mongo status
sudo service snap.rocketchat-server.rocketchat-caddy status
```

### How can I view the logs?

To see the logs from Rocket.Chat:

```
sudo journalctl -f -u snap.rocketchat-server.rocketchat-server
```

To see the logs from Mongo or Caddy:

```
sudo journalctl -f -u snap.rocketchat-server.rocketchat-mongo
sudo journalctl -f -u snap.rocketchat-server.rocketchat-caddy
```

### I need to restart Rocket.Chat, how do I do this?

To restart Rocket.Chat:

```
sudo service snap.rocketchat-server.rocketchat-server restart
```

Mongo and Caddy can similarly be restarted:

```
sudo service snap.rocketchat-server.rocketchat-mongo restart
sudo service snap.rocketchat-server.rocketchat-caddy restart
```

### What is the restart policy?

The snap's policy is to restart on failure.

### How do I backup my snap data?

#### 1. Stop your rocketchat-server:

```
sudo service snap.rocketchat-server.rocketchat-server stop
```

*Please note: while the rocketchat-server service should be stopped, the rocketchat-mongo service should be kept running!*

```
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

#### 2. Issue this backup command:

```
sudo snap run rocketchat-server.backupdb
```

#### 3. If all goes well, you will see some output similar to:

```
[+] A backup of your data can be found at /var/snap/rocketchat-server/common/backups/rocketchat_backup_<timestamp>.tgz
```

#### 4. Start your rocketchat-server:

```
sudo service snap.rocketchat-server.rocketchat-server start
```

#### 4. Copy your backup file to a different system for safekeeping!

### How do I restore backup data to my snap?

#### 1. Stop your rocketchat-server:

```
sudo service snap.rocketchat-server.rocketchat-server stop
```

*Please note: while the rocketchat-server service should be stopped, the rocketchat-mongo service should be kept running!*

```
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

#### 2. Copy your backup file to the snap's common folder:

```
sudo cp rocketchat_backup.tgz /var/snap/rocketchat-server/common/
```

#### 3. Issue this restore command:

```
sudo snap run rocketchat-server.restoredb /var/snap/rocketchat-server/common/rocketchat_backup.tgz
```

#### 4. If you are replacing an existing database, you will be warned:

```
*** ATTENTION ***
* Your current database WILL BE DROPPED prior to the restore!
* Would you like to make a backup of the current database before proceeding?
* (y/n/Q)>
```

- Press `y` and `Enter` to make a backup of the database in its current state.
- Press `n` and `Enter` to continue *without a backup* of the database in its current state.
- Press any key and/or `Enter` to quit the restore process without making any changes.

#### 5. If you choose to proceed and all goes well, you will see some output similar to:

```
[*] Extracting backup file...
[*] Restoring data...
[*] Preparing database...
[+] Restore completed! Please restart the snap.rocketchat services to verify.
```

*If something goes wrong, you will instead be presented with a path to the relevant log file to help remedy errors. In this case, the database may not be usable until a restore is successfully performed.*

#### 6. Start your rocketchat-server:

```
sudo service snap.rocketchat-server.rocketchat-server start
```

### What folders do snaps use?

- Your actual snap files for each version of Rocket.Chat are copied to: `/var/lib/snapd/snaps` and they are mounted in read-only mode.
- Your snap common directory is: `/var/snap/rocketchat-server/common/`; file uploads to disk and the database are stored here.
- Your snap data directory is `/var/snap/rocketchat-server/<version>`; this is a versioned folder.
- You can access the current snap data directory at `/var/snap/rocketchat-server/current`.

### How do I remove a specific previous version of Rocket.Chat?

You can do this by issuing the following command, where `N` is the desired version:

```
snap remove --revision=N rocketchat-server
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

### How do I add a tool like strace to debug what's happening in my snap?

```
snapcraft prime
snap try prime --devmode
cp /usr/bin/strace prime
snap run <snap.app> --shell
sudo ./strace
```
