# Setting up Process Managers and Init Systems

## PM2

## Systemd

Deploy [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) to Linux that run on systemd (RedHat, Centos, Ubuntu, CoreOS and so on).

### How to run Rocket.Chat on systemd.

First we need to create the unit file.

`vi /etc/systemd/system/rocketchat.service`

With the contents:

```
[Unit]
Description=RocketChat Server
After=network.target remote-fs.target nss-lookup.target mongod.target nginx.target  # Remove or Replace nginx with your proxy

[Service]
ExecStart=/usr/local/bin/node /var/www/rocketchat/main.js    # Specify the location of node and location of main.js
Restart=always                                               # If set to always, the service will be restarted regardless of whether it exited cleanly or not, got terminated abnormally by a signal, or hit a timeout.
RestartSec=10                                                # Restart service after 10 seconds if node service crashes
StandardOutput=syslog                                        # Output to syslog
StandardError=syslog                                         # Output to syslog
SyslogIdentifier=nodejs-example
#User=<alternate user>
#Group=<alternate group>
Environment=NODE_ENV=production PORT=3000 ROOT_URL=https://rocketchat.domain.com MONGO_URL=mongodb://localhost:27017/rocketchat

[Install]
WantedBy=multi-user.target
```

Then you need to enable the service `systemctl enable rocketchat.service`

To start the service `systemctl start rocketchat.service`

To verify it is running `systemctl status rocketchat.service`

### Backup

All data will be hourly backed up to `/data/domains/example.org/data` folder. We advise to copy this folder to a remote location in case of hardware failure.

## Upstart - Ubuntu

__Note: Upstart is no longer supported. We no longer support Ubuntu 14.04. If upgrading please see systemd or Ubuntu 16.04__

The following examples are upstart jobs which control automatic start-up and, if necessary, respawning of your Rocket.Chat app, as well as management of an optional hubot chat-bot.

In order to use the examples, simply copy each example and save into a file, paying attention to the fact that the filenames should be preserved unless you edit the examples
to reflect any filename changes you make. Be sure to edit the environment variables, and possibly paths, according to your particular installation. Once you've saved the files to the
proper directory (/etc/init) usage is as simple as rebooting.

Which upstart management jobs that you use depend on what type of Rocket.Chat deployment you are using (Docker-compose, non-docker, etc). A race-condition exists with
docker-compose which requires that mongo and the Rocket.Chat application be started independently, thus a slightly modified upstart job is required compared to non-docker instances.

- - -

### Non-Docker-Compose

Save as: `/etc/init/rocketchat.conf`

```
description "rocketchat application server"

# Wait for mongod before starting rocketchat app
start on (started mongod)
stop on runlevel [!2345]

# Automatically attempt to restart with finite limits
respawn
respawn limit 99 5

# Export necessary variables and start the Applications / Services
script
    export MONGO_URL=mongodb://localhost:27017/rocketchat
    export ROOT_URL=https://host.yourdomain.tld
    export PORT=3000
    exec /usr/local/bin/node /home/administrator/Rocket.Chat/main.js
end script
```

Save as: `/etc/init/rocketchat_hubot.conf`

```
description "hubot launcher"

# Wait for the rocketchat upstart job before starting hubot
start on started rocketchat
stop on runlevel [!2345]

# Automatically Respawn with finite limits
respawn
respawn limit 99 5

script
    # Wait until Rocket.Chat is up and listening to port tcp 3000
    until nc -z localhost 3000; do
        sleep 1
    done

    # Export necessary variables
    export ROCKETCHAT_ROOM=GENERAL
    export ROCKETCHAT_USER=bot_username
    export ROCKETCHAT_PASSWORD=bot_password

    # Change to the hubot directory
    cd /home/administrator/myhubot

    # Launch Hubot
    exec bin/hubot -a rocketchat
end script
```

- - -

### Docker-Compose

Save as: `/etc/init/rocketchat_mongo.conf`

```
description "MongoDB service manager for rocketchat"

# Start MongoDB after docker is running
start on (started docker)
stop on runlevel [!2345]

# Automatically Respawn with finite limits
respawn
respawn limit 99 5

# Path to our app
chdir /var/www/rocket.chat

script
    # start mongoDB
    exec /usr/local/bin/docker-compose up db
end script
```

Save as: `/etc/init/rocketchat_app.conf`

```
description "Rocketchat service manager"

# Start Rocketchat after mongo upstart job is running
start on (started rocketchat_mongo)
stop on runlevel [!2345]

# Automatically Respawn with finite limits
respawn
respawn limit 99 5

# Path to our app
chdir /var/www/rocket.chat

script
    # Bring up rocketchat app and hubot
    exec /usr/local/bin/docker-compose up rocketchat hubot
end script
```
