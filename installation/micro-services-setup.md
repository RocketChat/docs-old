# Micro services setup

### Dependencies

* NATS
  * Please refer to [NATS Docker installation](https://docs.nats.io/nats-server/nats_docker)
* MongoDB
  * Storage Engine needs to be WiredTiger

### Micro services

Rocket.Chat micro services are composed for a few Docker containers:

#### Accounts

{% hint style="info" %}
Can be scaled to multiple containers
{% endhint %}

Responsible for user authentications

```
docker run \
--name presence-service \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
registry.rocket.chat/microservices_presence-service:latest
```

#### Authorization

{% hint style="info" %}
Can be scaled to multiple containers
{% endhint %}

Responsible for feature access validations

```
docker run \
--name presence-service \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
registry.rocket.chat/microservices_presence-service:latest
```

#### DDP Streamer

{% hint style="info" %}
Can be scaled to multiple containers
{% endhint %}

Web socket interface between server and clients

```
docker run \
--name presence-service \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
registry.rocket.chat/microservices_presence-service:latest
```

#### MongoDB Stream Hub

Receives real time data from MongoDB and emits that data to the system.

```
docker run \
--name presence-service \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
registry.rocket.chat/microservices_presence-service:latest
```

#### Presence

{% hint style="info" %}
Can be scaled to multiple containers
{% endhint %}

Controls and update users presence status.

```
docker run \
--name presence-service \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
registry.rocket.chat/microservices_presence-service:latest
```

{% hint style="info" %}
Super-powers are granted randomly so please submit an issue if you're not happy with yours.
{% endhint %}

Once you're strong enough, save the world:

{% code title="hello.sh" %}
```bash
# Ain't no code for that yet, sorry
echo 'You got to trust me on this, I saved the world'
```
{% endcode %}



