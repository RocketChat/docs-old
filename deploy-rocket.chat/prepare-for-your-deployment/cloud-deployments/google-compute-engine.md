---
description: Deploying Rocket.Chat on Google Compute Engine
---

# Google Compute Engine

{% hint style="info" %}
[**👉 Trouble installing or deploying Rocket.Chat?** Join our Weekly Technical Helpline to get real-time help from our team!](https://app.livestorm.co/rocket-chat/rocketchats-weekly-technical-helpline?type=detailed)
{% endhint %}

## 1. Create a Compute Instance

1. Click create VM instance in google cloud console.
2. Select a preferred Machine Type (Default : 1cpu, 3.75GB Memory).
3. Select a Linux image (Default Debian/ ubuntu).
4. Allow HTTP/S Traffic.

## 2. SSH to the Instance

Connect to the instance by SSH or connect via browser on port other than 80.

## 3. Run the following to install Docker

`sudo wget -qO- https://get.docker.com/ | sh`

## 4. Create a container network

`docker network create chatNetwork`

## 5. Install a docker image for MongoDB

```bash
sudo docker run --name mongo --network chatNetwork -d mongo \
--smallfiles --oplogSize 128 --replSet rs0 --storageEngine=mmapv1
```

## 6. Configure a MongoDB Replica set

`ssh` in to the `mongodb` docker container `sudo docker exec -it mongo mongo`

Execute this following script to create a replica set `rs.initiate({ _id: 'rs0', members: [ { _id: 0, host: 'localhost:27017' } ]})`

Exit docker container

## 7. Install a Docker Image for Rocket.Chat

`ROOT_URL` should be substituted for your own domain:

```bash
docker run --name rocketchat -d -p 80:3000 \
--network chatNetwork --env PORT=3000 \
--env ROOT_URL=https://www.test.com \
--env MONGO_URL=mongodb://mongo:27017/rocketchat \
--env MONGO_OPLOG_URL=mongodb://mongo:27017/local rocket.chat:latest
```

You are now running Rocket.Chat on compute engine. You can open a browser with the external IP of the instance.

If you want the containers to start each time the instance reboots configure the following to the instance.

* Click on the instance in the and hit **edit**.
* Under "Custom metadata" add an item with:

```
key: "startup-script"
value "sudo docker start mongo;
sudo docker start rocketchat"
```
