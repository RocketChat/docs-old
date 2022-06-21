# Snap FAQ

If you have questions about snaps best place to ask them is at the [#ubuntu-snap](https://open.rocket.chat/channel/ubuntu-snap) channel.

### When will my snap installation get the latest release?

Snaps are one of our biggest install base. They are also auto updating. As a result we like to spend more time testing before releasing. Updated Snaps are usually released around the 15th of the month - around 2 weeks after a new release. This gives us time to look for issues so you don't have to.

If you have special requirements and really need to use the latest release immediately then please consider another installation method e.g docker

### How do I access my site at a different port? How do I enable TLS/SSL with my snap?

You can change the default port (port 3000) to something else by changing the `port` configuration option. For example if you wanted to change the HTTP port to 8080 instead of 3000:

```
sudo snap set rocketchat-server port=8080
```

Make sure you restart the `rocketchat-service` service afterwards for the change to take effect. Read [here](https://docs.rocket.chat/installing-and-updating/snaps#i-need-to-restart-rocket-chat-how-do-i-do-this) for more information on that. **Your only need to restart the RocketChat application itself, not the database or Caddy**.

For enabling TLS/SSL, check out our guide for enabling caddy [here](auto-ssl-with-snaps.md).

### Ubuntu 16.04 LTS gives message "snap not found", what's wrong?

Make sure you're using x64 or amd64 (or armhf) images, especially on VPS or VMs. x86 (32-bit) is not supported.

### How do I manually update to a new release?

While updates happen automatically usually within 6 hours from time of release, you can update manually by issuing this command:

```
sudo snap refresh rocketchat-server
```

### How do I revert to the previous version of Rocket.Chat?

```
sudo snap revert rocketchat-server
```

### How do I list the services shipped with Rocket.Chat snap?

The Rocket.Chat snap provides three services. Outside of the snap context, globally, each service is named like `snap.<SnapName>.<SnapServiceName>`. Look at the table down below to have a better understanding.

| Service    | Snap Service Name | Systemd Service Name                     |
| ---------- | ----------------- | ---------------------------------------- |
| MongoDB    | rocketchat-mongo  | snap.rocketchat-server.rocketchat-mongo  |
| Caddy      | rocketchat-caddy  | snap.rocketchat-server.rocketchat-caddy  |
| RocketChat | rocketchat-server | snap.rocketchat-server.rocketchat-server |

You can check the list of services yourself with:

```
snap info rocketchat-server
```

Look for the `services` section.

### How do I tell if Rocket.Chat is actually running?

You can check whether either or all of them are running or not with the following command:

```bash
snap services rocketchat-server
```

Look into the third column (`Current`) that logs the current state of the services.

Another option is to use the `systemctl` command. To quickly check if a service is active or not, use the `is-active` subcommand or the more well-known `status` subcommand. See the above table to know the name of the service you want to inspect.

```
systemctl is-active snap.rocketchat-server.rocketchat-mongo
systemctl is-active snap.rocketchat-server.rocketchat-caddy
systemctl is-active snap.rocketchat-server.rocketchat-server
```

Or use the `status` subcommand:

```
systemctl status snap.rocketchat-server.rocketchat-mongo
systemctl status snap.rocketchat-server.rocketchat-caddy
systemctl status snap.rocketchat-server.rocketchat-server
```

### How can I view the logs?

You can either use the `snap logs` command, or the systemd alternative, `journalctl`. Always refer to [this table](https://docs.rocket.chat/installing-and-updating/snaps#how-do-i-list-the-services-shipped-with-rocket-chat-snap) to know which service name to use where.

Using `snap logs`:

```
sudo snap logs -f rocketchat-server.rocketchat-server
sudo snap logs -f rocketchat-server.rocketchat-mongo
sudo snap logs -f rocketchat-server.rocketchat-caddy
```

To see the logs from Rocket.Chat using `journalctl`:

```
sudo journalctl -fu snap.rocketchat-server.rocketchat-server
```

To see the logs from Mongo or Caddy:

```
sudo journalctl -fu snap.rocketchat-server.rocketchat-mongo
sudo journalctl -fu snap.rocketchat-server.rocketchat-caddy
```

### How do I schedule updates?

If you don't want snaps just updating when available you can set when your snaps will update.

The following example asks the system to only update snaps between 4.00am and 7.00am, and 7.00pm and 10:10pm:

```
sudo snap set system refresh.timer=4:00-7:00,19:00-22:10
```

You can find more about your options in the [snapcraft documentation](https://snapcraft.io/docs/keeping-snaps-up-to-date#heading--controlling-updates).

### I need to restart Rocket.Chat, how do I do this?

This follows the similar structure as many of the previous questions. You can use both the `snap` command or `systemctl` to restart RocketChat.

With `snap` you get the additional benefit of restarting all of the services with a single command:

```
sudo snap restart rocketchat-server
```

You can also restart each service individually:

```
sudo snap restart rocketchat-server.rocketchat-server
sudo snap restart rocketchat-server.rocketchat-mongo
sudo snap restart rocketchat-server.rocketchat-caddy
```

To restart Rocket.Chat using `systemctl`:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-server
```

Mongo and Caddy can similarly be restarted:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-mongo 
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy
```

### What is the restart policy?

The snap's policy is to restart on failure.

### How do I backup my snap data?

#### 1. Stop your rocketchat-server:

```
sudo snap stop rocketchat-server.rocketchat-server
```

_Please note: while the rocketchat-server service should be stopped, the rocketchat-mongo service should be kept running!_

```
systemctl is-active snap.rocketchat-server.rocketchat-mongo
```

You should get `active` as a response.

#### 2. Issue this backup command:

```
sudo snap run rocketchat-server.backupdb
```

If all goes well, you will see some output similar to:

```
[+] A backup of your data can be found at /var/snap/rocketchat-server/common/backup/rocketchat_backup_<timestamp>.tar.gz
```

#### 3. Start your rocketchat-server:

```
sudo snap start rocketchat-server.rocketchat-server
```

#### 4. Copy your backup file to a different location or system for safekeeping!

### How do I restore backup data to my snap?

#### 1. Stop your rocketchat-server:

```
sudo snap stop rocketchat-server.rocketchat-server
```

_Please note: while the rocketchat-server service should be stopped, the rocketchat-mongo service should be kept running!_

```
systemctl is-active snap.rocketchat-server.rocketchat-mongo
```

You should get `active` as a response.

#### 2. Copy your backup file to the snap's common folder:

```
sudo cp rocketchat_backup.tar.gz /var/snap/rocketchat-server/common/
```

#### 3. Issue this restore command:

```
sudo snap run rocketchat-server.restoredb /var/snap/rocketchat-server/common/rocketchat_backup.tgz
```

#### 4. If you are replacing an existing database, you will be warned:

```
*** ATTENTION ***
* Your current database WILL BE DROPPED prior to the restore!
* Do you want to continue?
1) Yes
2) No
#?
```

Select 1 or 2 according to your need.

#### 5. If you choose to proceed and all goes well, you will see some output similar to:

```
[*] Extracting backup file...
[*] Restoring data...
[*] Preparing database...
[+] Restore completed! Please restart the snap.rocketchat services to verify.
```

_If something goes wrong, you will instead be presented with a path to the relevant log file to help remedy errors. In this case, the database may not be usable until a restore is successfully performed._

#### 6. Start your rocketchat-server:

```
sudo snap start rocketchat-server.rocketchat-server
```

### How do I access the MongoDB shell?

You might want to access the mongo shell shipped with our RocketChat snap. To do so, run:

```
rocketchat-server.mongo
```

### How do I edit MongoDB configuration?

You can find the mongod configuration file in `/var/snap/rocketchat-server/current/mongod.conf`.

## How do I add option to mount media?

Note that the interface providing the ability to access removable media is not automatically connected upon install, so if you'd like to use external storage (or otherwise use a device in `/media` for data), you need to give the snap permission to access removable media by connecting that interface:

```
sudo snap connect rocketchat-server:removable-media
```

### What folders do snaps use?

* Your actual snap files for each version of Rocket.Chat are copied to: `/var/lib/snapd/snaps` and they are mounted in read-only mode.
* Your snap common directory is: `/var/snap/rocketchat-server/common/`; file uploads to disk and the database are stored here.
* Your snap data directory is `/var/snap/rocketchat-server/<version>`; this is a versioned folder.
* You can access the current snap data directory at `/var/snap/rocketchat-server/current`.

### How do I remove a specific previous version of Rocket.Chat?

You can do this by issuing the following command, where `N` is the desired version:

```
snap remove --revision=N rocketchat-server
```

### How do I add a tool like strace to debug what's happening in my snap?

```
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

Starting from release 0.73, it is possible to overwrite any rocket.chat environmental variables dropping files ending in `.env` in $SNAP\_COMMON directory (`/var/snap/rocketchat-server/common/`), for example, you can create a file to change SMTP settings:

```bash
cat /var/snap/rocketchat-server/common/overwrite-smtp.env
OVERWRITE_SETTING_SMTP_Host=my.smtp.server.com
```

Remember to restart rocket.chat service after creating .env files:

```bash
sudo systemctl restart snap.rocketchat-server.rocketchat-server.service
```

More than one .env file is allowed, and more than one environmental variable defined per file is allowed.
