# Microservices Setup

{% hint style="info" %}
This feature is currently in the beta stage and can change without prior notice.
{% endhint %}

{% hint style="info" %}
The feature will be released for **General Availability** on the **Enterprise Edition v4.0.**
{% endhint %}

{% hint style="info" %}
New in version 3.8.
{% endhint %}

## Pre-requisites

* NATS
  * Please refer to [NATS Docker installation](https://docs.nats.io/nats-server/nats\_docker) on how to deploy NATS
* MongoDB
  * Storage Engine needs to be [WiredTiger](https://docs.mongodb.com/manual/core/wiredtiger/):
    * [Change Standalone to WiredTiger](https://docs.mongodb.com/manual/tutorial/change-standalone-wiredtiger/)
* Rocket.Chat
  * The setting **Use REST instead of WebSocket for Meteor calls** under _Admin > General > REST API_, _must_ be **enabled**.

The following environment variables should be set for Rocket.Chat services as well:

| Variable                   | Value              | Description                                                     |
| -------------------------- | ------------------ | --------------------------------------------------------------- |
| `TRANSPORTER`              | `nats://nats:4222` | NATS address                                                    |
| `DISABLE_DB_WATCH`         | `true`             | Disables internal DB watcher and rely on `mongodb-stream-hub`   |
| `DISABLE_PRESENCE_MONITOR` | `true`             | Disables presence monitoring and rely on the `presence-service` |
| `INTERNAL_SERVICES_ONLY`   | `true`             | Do not run external services on rocket.chat process             |

## Micro Services

Rocket.Chat microservices are composed of a few Docker containers:

![](<../../.gitbook/assets/Micro services deployment - v0.1@2x (1).png>)

### Accounts

Responsible for user authentications

```
docker run \
--name accounts-service \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
rocketchat/account-service:latest
```

### Authorization

Responsible for the validation of access to features

```
docker run \
--name authorization-service \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
rocketchat/authorization-service:latest
```

### DDP Streamer

Web socket interface between server and clients

```
docker run \
--name ddp-streamer \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
rocketchat/ddp-streamer-service:latest
```

{% hint style="info" %}
DDP Streamer should be scaled from the beginning. (One per 500 concurrent users should be good enough)
{% endhint %}

### MongoDB Stream Hub

{% hint style="danger" %}
Can not be scaled to multiple containers
{% endhint %}

Receives real-time data from MongoDB and emits that data to the system.

```
docker run \
--name mongodb-stream-hub \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
rocketchat/stream-hub-service:latest
```

### Presence (Optional)

Controls and update users' presence status.

{% hint style="success" %}
In a situation where you have a huge amount of data/users, you can get away with not running it to reduce the traffic of presence processing. If you are not running it, the user's online/offline status and notification will not work properly.
{% endhint %}

```
docker run \
--name presence-service \
-e MONGO_URL=mongodb://mongo/rocketchat?replicaSet=rs01 \
-e TRANSPORTER=nats://nats:4222 \
rocketchat/presence-service:latest
```

### Environment variables common to all services

Set the following environment variables to enable Prometheus metrics:

| Variable          | Default | Description                         |
| ----------------- | ------- | ----------------------------------- |
| `MS_METRICS`      | `false` | Enable Prometheus metrics endpoint  |
| `MS_METRICS_PORT` | `9458`  | Port of Prometheus metrics endpoint |

## Reverse proxy

Once all services are up and running the web socket connections should be targeted to `ddp-streamer` containers, the configuration depends on the reverse proxy you have set up, but you need to change the following routes:

* `/sockjs`
* `/websocket`

If using Kubernetes, an Ingress like the following can be used:

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ddp-streamer
spec:
  rules:
  - host: your-hostname.rocket.chat
    http:
      paths:
      - backend:
          serviceName: ddp-streamer
          servicePort: 3000
        path: /(sockjs|websocket)
```

## Summary:

To summarize it:

1. You just need to deploy the reverse proxy to split the communication.
2. Run all the above services pointing to the NATS and the MongoDB.
3. Deploy NATS.
4. Run Rocket.Chat according to the above-mentioned variables.
