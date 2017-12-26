# Deploying Rocket.Chat on Aliyun

You can install Rocket.Chat to Ubuntu VPS on Aliyun.

The recommended VPS configuration is:

- 2 GB RAM
- 10 GB disk
- 2 or 4 cores

However, lower performance configuration has been tested on a VPS with:

- 1 GB RAM
- 10 GB disk
- 1 core

Follow these steps to install Rocket.Chat.

## Update Ubuntu repo lists and Install curl

After you ssh to the VPS:

![aliyun shell](https://raw.githubusercontent.com/Sing-Li/bbug/master/images/aliyun1.png)

Run the command:

```
apt-get update
```

followed by:

```
apt-get install curl
```

## Install docker

Run this command:

```
curl -sSL https://get.docker.com/ | sh
```

Docker should be installed, verify it:

```
docker ps
```

![aliyun docker verify](https://raw.githubusercontent.com/Sing-Li/bbug/master/images/aliyun2.png)

## Install docker-compose

Install docker-compose, follow the [latest release instructions](https://github.com/docker/compose/releases)

For release 1.5.0, you can use:

```
curl -L https://github.com/docker/compose/releases/download/1.5.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```

*(if or when this is blocked, you'll have to obtain Linux-x86_64 docker-compose binary via other means)*

Next, allow execution of docker-compose:

```
chmod +x /usr/local/bin/docker-compose
```

## Create directories for Rocket.Chat

First,

```
mkdir /home/rocketchat
```

Then,

```
cd /home/rocketchat
```

Make two more directories for the mongodb database:

```
mkdir data
mkdir dump
```

## Create customized docker-compose.yml

Create a `docker-compose.yml` file with the following content:

```
db:
  image: mongo
  volumes:
    - $PWD/data:/data/db
    - $PWD/dump:/dump
  command: mongod --smallfiles
web:
  image: rocketchat/rocket.chat
  environment:
    - MONGO_URL=mongodb://db:27017/rocketchat
    - ROOT_URL=http://your-ip-address:8818
  links:
    - db:db
  ports:
    - 8818:3000
```

Make sure you customize the file with `your-ip-address` in the `MONGO_URL` env variable.

## Pull the required docker images

This will download the required docker images, and may take some time.

This is done only the first time, or when you want to update Rocket.Chat.

```
docker pull mongo
docker pull rocketchat/rocket.chat
```

## Start the mongodb database

Run:

```
docker-compose up -d db
```

Mongo supports 24 x 7 operations and live backup.  You should not need to restart it too frequently.  See  [mongodb documentations](https://docs.mongodb.org/manual/) for proper operation and management of a mongo server.

Wait a couple of minute for mongo to start properly.

## Start your Rocket.Chat server

Now start the Rocket.Chat server:

```
docker-compose up -d web
```

Rocket.Chat should be ready in a minute or two.

## Access your Rocket.Chat on Aliyun

Your Rocket.Chat server can now be accessed over the Internet via:

```
http://your-ip-address:8818/
```
