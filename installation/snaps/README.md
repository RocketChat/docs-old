# Snaps

## Installation

Installing a snap on Ubuntu is as easy as

```text
sudo snap install rocketchat-server
```

Then browse to `http://localhost:3000` and setup Rocket.Chat.

Snaps are secure. Rocket.Chat and all of its dependencies are isolated from the rest of your system. Snaps also auto update when we release a new version. So no need more hassle updating.

On Ubuntu 16.04LTS, install `snapd` first:

```text
sudo apt-get install snapd
```

To move between different major releases,  from 2.x to 3.x  or from 3.x to 4.x,  take a look at  [snap tracks](https://forums.rocket.chat/t/introducing-snap-tracks/5890).

## FAQ

If you have questions about snaps best place to ask them is at the [\#ubuntu-snap](https://open.rocket.chat/channel/ubuntu-snap) channel.

### When will my snap installation get the latest release?

Snaps are one of our biggest install base. They are also auto updating. As a result we like to spend more time testing before releasing. Updated Snaps are usually released around the 15th of the month - around 2 weeks after a new release. This gives us time to look for issues so you don't have to.

If you have special requirements and really need to use the latest release immediately then please consider another installation method e.g docker

### How do I access my site at a different port?  How do I enable TLS/SSL with my snap?

Check out our guide for enabling caddy [here](autossl.md).

### Ubuntu 16.04 LTS gives message "snap not found", what's wrong?

Make sure you're using x64 or amd64 \(or armhf\) images, especially on VPS or VMs. x86 \(32-bit\) is not supported.

### How do I manually update to a new release?

While updates happen automatically usually within 6 hours from time of release, you can update manually by issuing this command:

```text
sudo snap refresh rocketchat-server
```

### How do I revert to the previous version of Rocket.Chat?

```text
sudo snap revert rocketchat-server
```

### How do I tell if Rocket.Chat is actually running?

You can check on the status of Rocket.Chat with:

```text
sudo service snap.rocketchat-server.rocketchat-server status
```

You can also check on the status of Mongo and Caddy:

```text
sudo service snap.rocketchat-server.rocketchat-mongo status
sudo service snap.rocketchat-server.rocketchat-caddy status
```

### How can I view the logs?

To see the logs from Rocket.Chat:

```text
sudo journalctl -f -u snap.rocketchat-server.rocketchat-server
```

To see the logs from Mongo or Caddy:

```text
sudo journalctl -f -u snap.rocketchat-server.rocketchat-mongo
sudo journalctl -f -u snap.rocketchat-server.rocketchat-caddy
```

### I need to restart Rocket.Chat, how do I do this?

To restart Rocket.Chat:

```text
sudo service snap.rocketchat-server.rocketchat-server restart
```

Mongo and Caddy can similarly be restarted:

```text
sudo service snap.rocketchat-server.rocketchat-mongo restart
sudo service snap.rocketchat-server.rocketchat-caddy restart
```

### What is the restart policy?

The snap's policy is to restart on failure.

### How do I backup my snap data?

#### 1. Stop your rocketchat-server:

```text
sudo service snap.rocketchat-server.rocketchat-server stop
```

_Please note: while the rocketchat-server service should be stopped, the rocketchat-mongo service should be kept running!_

```text
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

#### 2. Issue this backup command:

```text
sudo snap run rocketchat-server.backupdb
```

#### 3. If all goes well, you will see some output similar to:

```text
[+] A backup of your data can be found at /var/snap/rocketchat-server/common/backup/rocketchat_backup_<timestamp>.tar.gz
```

#### 4. Start your rocketchat-server:

```text
sudo service snap.rocketchat-server.rocketchat-server start
```

#### 4. Copy your backup file to a different system for safekeeping!

### How do I restore backup data to my snap?

#### 1. Stop your rocketchat-server:

```text
sudo service snap.rocketchat-server.rocketchat-server stop
```

_Please note: while the rocketchat-server service should be stopped, the rocketchat-mongo service should be kept running!_

```text
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

#### 2. Copy your backup file to the snap's common folder:

```text
sudo cp rocketchat_backup.tgz /var/snap/rocketchat-server/common/
```

#### 3. Issue this restore command:

```text
sudo snap run rocketchat-server.restoredb /var/snap/rocketchat-server/common/rocketchat_backup.tgz
```

#### 4. If you are replacing an existing database, you will be warned:

```text
*** ATTENTION ***
* Your current database WILL BE DROPPED prior to the restore!
* Would you like to make a backup of the current database before proceeding?
* (y/n/Q)>
```

* Press `y` and `Enter` to make a backup of the database in its current state.
* Press `n` and `Enter` to continue _without a backup_ of the database in its current state.
* Press any key and/or `Enter` to quit the restore process without making any changes.

#### 5. If you choose to proceed and all goes well, you will see some output similar to:

```text
[*] Extracting backup file...
[*] Restoring data...
[*] Preparing database...
[+] Restore completed! Please restart the snap.rocketchat services to verify.
```

_If something goes wrong, you will instead be presented with a path to the relevant log file to help remedy errors. In this case, the database may not be usable until a restore is successfully performed._

#### 6. Start your rocketchat-server:

```text
sudo service snap.rocketchat-server.rocketchat-server start
```

## How do I add option to mount media?

Note that the interface providing the ability to access removable media is not automatically connected upon install, so if you'd like to use external storage \(or otherwise use a device in `/media` for data\), you need to give the snap permission to access removable media by connecting that interface:

```text
sudo snap connect rocketchat-server:removable-media
```

### What folders do snaps use?

* Your actual snap files for each version of Rocket.Chat are copied to: `/var/lib/snapd/snaps` and they are mounted in read-only mode.
* Your snap common directory is: `/var/snap/rocketchat-server/common/`; file uploads to disk and the database are stored here.
* Your snap data directory is `/var/snap/rocketchat-server/<version>`; this is a versioned folder.
* You can access the current snap data directory at `/var/snap/rocketchat-server/current`.

### How do I remove a specific previous version of Rocket.Chat?

You can do this by issuing the following command, where `N` is the desired version:

```text
snap remove --revision=N rocketchat-server
```

### How do I add a tool like strace to debug what's happening in my snap?

```text
snapcraft prime
snap try prime --devmode
cp /usr/bin/strace prime
snap run <snap.app> --shell
sudo ./strace
```

### How do I change rocket.chat PORT, MONGO\_URL and MONGO\_OPLOG\_URL in my snap?

Starting from release 0.73, it is possible to configure these environmental variables through snap hooks like this:

```bash
sudo snap set rocketchat-server port=<another-port>
sudo snap set rocketchat-server mongo-url=mongodb://<your-url>:<your-port>/<your-db-name>
sudo snap set rocketchat-server mongo-oplog-url=mongodb://<your-url>:<your-port>/local
```

Remember to restart rocket.chat service after setting new values:

```bash
sudo systemctl restart snap.rocketchat-server.rocketchat-server.service
```

This is an example to run rocket.chat on port 4000 instead of 3000 and set database name to rocketchat instead of parties:

```bash
sudo snap set rocketchat-server port=4000
sudo snap set rocketchat-server mongo-url=mongodb://localhost:27017/rocketchat
sudo systemctl restart snap.rocketchat-server.rocketchat-server.service
```

### How do I change other environmental variables in my snap?

Starting from release 0.73, it is possible to overwrite any rocket.chat environmental variables dropping files ending in `.env` in $SNAP\_COMMON directory \(`/var/snap/rocketchat-server/common/`\), for example, you can create a file to change SMTP settings:

```bash
cat /var/snap/rocketchat-server/common/overwrite-smtp.env
OVERWRITE_SETTING_SMTP_Host=my.smtp.server.com
```

Remember to restart rocket.chat service after creating .env files:

```bash
sudo systemctl restart snap.rocketchat-server.rocketchat-server.service
```

More than one .env file is allowed, and more than one environmental variable defined per file is allowed.

