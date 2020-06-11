---
description: Deploying Rocket.Chat on Aliyun
---

# Aliyun

You can install Rocket.Chat to Ubuntu VPS on Aliyun.

The recommended VPS configuration is:

* 2 GB RAM
* 10 GB disk
* 2 or 4 cores

However, lower performance configuration has been tested on a VPS with:

* 1 GB RAM
* 10 GB disk
* 1 core

Follow these steps to install Rocket.Chat.

## Update Ubuntu repo lists and Install curl

After you ssh to the VPS:

![aliyun shell](https://raw.githubusercontent.com/Sing-Li/bbug/master/images/aliyun1.png)

Run the command:

```text
apt-get update
```

followed by:

```text
apt-get install curl
```

## Install docker

Run this command:

```text
curl -sSL https://get.docker.com/ | sh
```

Docker should be installed, verify it:

```text
docker ps
```

![aliyun docker verify](https://raw.githubusercontent.com/Sing-Li/bbug/master/images/aliyun2.png)

## Install docker-compose

Install docker-compose, follow the [latest release instructions](https://github.com/docker/compose/releases)

For release 1.5.0, you can use:

```text
curl -L https://github.com/docker/compose/releases/download/1.5.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```

_\(if or when this is blocked, you'll have to obtain Linux-x86\_64 docker-compose binary via other means\)_

Next, allow execution of docker-compose:

```text
chmod +x /usr/local/bin/docker-compose
```

## Create directories for Rocket.Chat

First,

```text
mkdir /home/rocketchat
```

Then,

```text
cd /home/rocketchat
```

Make two more directories for the mongodb database:

```text
mkdir data
mkdir dump
```

## Create customized docker-compose.yml

Create a `docker-compose.yml` file with the following content:

```text
version: '2'

services:
  rocketchat:
    image: rocket.chat:latest
    restart: unless-stopped
    volumes:
      - ./uploads:/app/uploads
    environment:
      - PORT=3000
      - ROOT_URL=http://chat.inumio.com
      - MONGO_URL=mongodb://mongo:27017/rocketchat
      - MONGO_OPLOG_URL=mongodb://mongo:27017/local
      - Accounts_UseDNSDomainCheck=True
    depends_on:
      - mongo
    ports:
      - 8818:3000

  mongo:
    image: mongo
    restart: unless-stopped
    volumes:
     - $PWD/data:/data/db
     - $PWD/dump:/dump
    command: mongod --smallfiles --oplogSize 128 --replSet rs0 --storageEngine=mmapv1

  # this container's job is just run the command to initialize the replica set.
  # it will run the command and remove himself (it will not stay running)
  mongo-init-replica:
    image: mongo
    command: 'bash -c "for i in `seq 1 30`; do mongo mongo/rocketchat --eval \"rs.initiate({ _id: ''rs0'', members: [ { _id: 0, host: ''localhost:27017'' } ]})\" && s=$$? && break || s=$$?; echo \"Tried $$i times. Waiting 5 secs...\"; sleep 5; done; (exit $$s)"'
    depends_on:
      - mongo
```

Make sure you customize the file with `your-ip-address` in the `MONGO_URL` env variable.

## Pull the required docker images

This will download the required docker images, and may take some time.

This is done only the first time, or when you want to update Rocket.Chat.

```text
docker pull mongo
docker pull rocketchat/rocket.chat
```

## Start the mongodb database

Run:

```text
docker-compose up -d mongo
```

Mongo supports 24 x 7 operations and live backup. You should not need to restart it too frequently. See [mongodb documentations](https://docs.mongodb.org/manual/) for proper operation and management of a mongo server.

Wait a couple of minute for mongo to start properly.

## Start the mongodb replica

Run:

```text
docker-compose up -d mongo-init-replica
```

This container's job is just to run the command to initialize the replica set. It will run the command and remove itself \(it will not stay running\)

## Start your Rocket.Chat server

Now start the Rocket.Chat server:

```text
docker-compose up -d rocketchat
```

Rocket.Chat should be ready in a minute or two.

## Access your Rocket.Chat on Aliyun

Your Rocket.Chat server can now be accessed over the Internet via:

```text
http://your-ip-address:8818/
```

