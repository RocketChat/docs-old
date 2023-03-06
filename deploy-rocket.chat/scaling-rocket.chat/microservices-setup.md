# Microservices Overview

![](<../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (26).jpg>)

{% hint style="info" %}
The feature is released for **General Availability** on the **Enterprise Edition v4.0.**
{% endhint %}

{% hint style="info" %}
New in version 3.8.
{% endhint %}

## Components

This deployment architecture consists of several "_micro_" services or several smaller components, each focusing on one single feature of Rocket.Chat. Think of it like each component provides a "_service_", all of which combine to become your whole functional Rocket.Chat workspace.

The components at the moment are

* **`authorization`**:`This` provides authorization capabilities like role/permission validation (not to be confused with authentication, which primitively deals with log in systems) - `rocketchat/authorization-service`
* **`nats`**: A messaging system that provides a scalable and highly available message bus for microservices communication. This acts as a distributor of messages, i.e. instead of pointing to each component in the deployment resource, you point to the distributor, and that takes care of which service to forward the request to (read more [here](https://docs.nats.io/nats-concepts/overview)) - `docker.io/nats`
* **`stream-hub`**: This is a message broker that provides a scalable and fault-tolerant message stream for Rocket.Chat. It receives real-time changes/data from MongoDB, and sends it to all the services, the services can act on that change on their discretion - `rocketchat/stream-hub-service`
* **`accounts`**: The accounts component is responsible for managing user accounts and authentication - `rocketchat/accounts-service`
* **`ddp-streamer`**: Deals with all websocket connections, all websocket connections must be forwarded to this service directly. It uses the DDP (Distributed Data Protocol) - `rocketchat/ddp-streamer-service`
* **`presence`**: The presence component is responsible for managing user [presence](../../use-rocket.chat/workspace-administration/user-status.md#presence-service) status - `rocketchat/presence-service`
* **The central Rocket.Chat monolith:** Each of the above components are disabled from this monolith so that each "service" can take over the respective functionality - `rocketchat/rocket.chat`

Rocket.Chat microservices deployment looks like the following from a bird's eye view (each component is comprised of one container from a bare metal perspective):

![Rocket.Chat deployment with multiple microservices](../../.gitbook/assets/micro-services-deployment-v0.1-2x-1-.png)

## Note

As mentioned above each component is a container, thus each component can be pulled the same way as any docker image.

Consequently, it would also be possible to deploy Rocket.Chat like this with all these components via docker directly (or with docker compose), but it is not officially supported.

To deploy using docker directly, you'd need to first set up nats, check nats documentation for how to start up nats in your server.

> Make sure you're using a custom network to connect each related containers.

Bare minimum, each container must be started with `MONGO_URL` and `TRANSPORTER` environment variables set, pointing to the MongoDB database (using full connection string) and the nats gateway address respectively.

A reverse proxy or LB will be needed to redirect all `/sockjs` and `/websocket` connections to the `ddp-streamer` container, and rest to the monolith.

{% hint style="warning" %}
It is important to emphasize again that we do not support deployment in microservices mode in direct docker/compose. The only supported method at the moment is using Kubernetes with our official helm chart. See [microservices-deployment.md](../../deploy/scaling-rocket.chat/microservices-deployment.md "mention").
{% endhint %}
