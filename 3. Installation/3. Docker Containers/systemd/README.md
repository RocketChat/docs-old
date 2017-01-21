# Rocket.Chat

Deploy [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) to Linux that run on systemd (RedHat, Centos, Ubuntu, CoreOS and so on).

## Prerequisite

You need to have [docker](https://docs.docker.com/linux/started/) installed.

## How to run Rocket.Chat on systemd.

Create the docker-container for the mongo-init-replica. It will remain in an exited state. Do NOT remove this!

```
docker run \
      --name mongo-init-replica \
      --link mongo:mongo \
      --net=rocketchat_default \
      mongo:3.2 \
      mongo mongo/rocketchat --eval "rs.initiate({ _id: 'rs0', members: [ { _id: 0, host: 'localhost:27017' } ]})"
```
Then create two systemd files. One for the database and one for rocketchat.

If you restart the services come up automatically and in the right order.

mongo.service:
```
[Unit]
Description=mongo
Requires=docker.service
After=docker.service

[Service]
EnvironmentFile=/etc/environment
User=dockeruser
Restart=always
TimeoutStartSec=0
ExecStartPre=-/usr/bin/docker kill mongo
ExecStartPre=-/usr/bin/docker rm mongo
ExecStartPre=-/usr/bin/docker pull mongo:3.2


ExecStart=/usr/bin/docker run \
    --name #name for dockercontainer# \
    -v .../path/to/data/db:/data/db \
    -v .../path/to/data/dump:/data/dump \ <--optional
    --net=rocketchat_default \
    mongo:3.2 \
    mongod --smallfiles --oplogSize 128 --replSet rs0

ExecStop=-/usr/bin/docker kill mongo
ExecStop=-/usr/bin/docker rm mongo
```
and the rocketchat.service:
```
[Unit]
Description=rocketchat
Requires=docker.service
Requires=mongo.service
After=docker.service
After=mongo.service

[Service]
EnvironmentFile=/etc/environment
User=dockeruser
Restart=always
TimeoutStartSec=0
ExecStartPre=-/usr/bin/docker kill rocketchat
ExecStartPre=-/usr/bin/docker rm rocketchat
ExecStartPre=-/usr/bin/docker pull rocketchat/rocket.chat:latest

ExecStart=/usr/bin/docker run \
    --name rocketchat \
    -v .../path/to/uploads:/app/uploads \
    -e MONGO_OPLOG_URL=mongodb://mongo:27017/local \
    -e MONGO_URL=mongodb://mongo:27017/rocketchat \
    -e ROOT_URL=https://sub.domain.xx \
    --link mongo:mongo \
    --net=rocketchat_default \
    --expose 3000 \
    rocketchat/rocket.chat:latest

ExecStop=-/usr/bin/docker kill rocketchat
ExecStop=-/usr/bin/docker rm rocketchat
```

## Reverse Proxy

If you are running a reverse proxy make sure it is joining the rocketchat_default network.
Add `ExecStartPre=-/usr/bin/docker network connect rocketchat_default Nginx` to the rocketchat.service if you Proxy container is named `Nginx` and be sure to configure it correctly.

## Backup

All data will be hourly backuped to `/data/domains/example.org/data` folder. We advise to copy this folder to a remote location in case of hardware failure.

## Question?

If you have any questions, don't hesitate to open issues.

