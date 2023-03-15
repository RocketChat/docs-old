# Microservices

![](<../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (17).jpg>)

## Components Overview

This deployment architecture consists of several "_micro_" services or smaller components, each focusing on one feature of Rocket.Chat. Imagine that each component provides a _service_, and they are all combined to form your fully operational Rocket.Chat workspace.

The components include the following:

* **authorization** (`rocketchat/authorization-service):` This provides authorization capabilities like role/permission validation. It differs from authentication, which primarily deals with login systems.
* **nats** (`docker.io/nats):` A messaging system that provides a scalable and highly available message bus for microservices communication. It acts as a message distributor, i.e., you point to the distributor instead of pointing to each component in the deployment resource. This determines the service to forward the requests.

{% hint style="info" %}
To learn more about NAT, see [the official documentation](https://docs.nats.io/nats-concepts/overview).
{% endhint %}

* **stream-hub** (`rocketchat/stream-hub-service)`: A message broker that provides a scalable and fault-tolerant message stream for Rocket.Chat. It receives real-time changes or data from MongoDB and sends it to all the services. The services can act on that change at their discretion.
* **accounts** (`rocketchat/accounts-service`): The accounts component is responsible for managing user accounts and authentication -&#x20;
* **ddp-streamer** (`rocketchat/ddp-streamer-service`): It deals with all web socket connections. All web socket connections must be forwarded directly to this service. It uses the Distributed Data **Protocol** (DDP).&#x20;
* **presence** (`rocketchat/presence-service`): The presence component is responsible for managing [user presence status](../../use-rocket.chat/workspace-administration/user-status.md).
*   **The central Rocket.Chat monolith** (`rocketchat/rocket.chat)`:  Each component is disabled from this monolith, so each "service" can take over its respective functionalities.

    ``

Rocket.Chat microservices deployment looks like the diagram below. Each component is comprised of one container from a bare metal perspective.

![Rocket.Chat deployment with multiple microservices](<../../.gitbook/assets/Micro services deployment - v0.1@2x (1).png>)

Since each component is a container, you can pull them the same way as any docker image. Consequently, you can also deploy Rocket.Chat with all these components via docker directly or with docker-compose; however, it is not officially supported. To deploy using docker directly, you are required to set up nats. Ensure that you're using a custom network to connect each related container.

{% hint style="info" %}
See [the official documentation](https://docs.nats.io/) to learn how to start NATS on your server.
{% endhint %}

Bare minimum, each container must be started with `MONGO_URL` and `TRANSPORTER` environment variables set, pointing to the MongoDB database (using full connection string) and the nats gateway address, respectively. At the very least, each container must be started with `MONGO_URL` and `TRANSPORTER` environment variables set, pointing to the MongoDB database (using full connection string) and the NATS gateway address, respectively. All `/sockjs` and `/websocket` connections must be routed through a reverse proxy or load balancer (LB), with the remainder going to the monolith.

{% hint style="warning" %}
Again, it is essential to note that we do not support direct docker/compose microservices deployment. The only supported method currently is using [Kubernetes with our official helm chart](../prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/helm.md).
{% endhint %}

## Microservices Deployment

Rocket.Chat's microservices architecture allows for greater scalability, flexibility, resilience, and fault tolerance in the functioning of your workspace. This makes it possible for your workspace to manage large user volumes and adapt to changing business needs. This guide shows how to deploy Rocket.Chat and archive microservices using [Kubernetes](https://kubernetes.io/) and [Helm](https://helm.sh/), our officially supported method.

### Prerequisites

To use Helm for deploying microservices, here are certain prerequisites that need to be met:

* A Kubernetes cluster is set up and configured.
* A working installation of Helm 3.
* Basic understanding of Kubernetes and Helm.

To deploy Rocket.Chat and archive microservices using [Kubernetes](https://kubernetes.io/) and [Helm](https://helm.sh/),

* Add the RocketChat helm repository to your system by running the following command:

```sh
helm repo add rocketchat https://rocketchat.github.io/helm-charts
```

* Configure the Rocket.Chat deployment. By default, the Rocket.Chat Helm chart deploys a single monolith with a single instance. To enable microservices, edit your `Values.yaml` file and include these commands:

```yaml
microservices:
  enabled: true
```

Each component has its section inside the `Values.yml` file. The top level is for the monolith configuration.

```yaml
presence: {}
ddpStreamer: {}
account: {}
authorization: {}
streamHub: {}
```

To set the desired number of replicas for any of the services, set the `replicas` value for the respective service.

```yaml
ddpStreamer:
  replicas: 2
```

{% hint style="info" %}
`ddp-streamer` should be scaled from the beginning. Aim for one pod for every 500 concurrent users.
{% endhint %}

For monolith replicas, set the top-level `replicaCount` value.

```yaml
replicaCount: 2
```

{% hint style="warning" %}
`stream-hub` is the only service/component that can not be scaled and is limited to one pod for each deployment.
{% endhint %}

{% hint style="info" %}
You can find other deployment variables in [helm.md](../prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/helm.md "mention").
{% endhint %}

* Set up ingress. This architecture requires an ingress controller. All WebSocket connections needs to be sent directly to the `ddp-streamer`service as mentioned earlier. For example,  install an nginx controller in your cluster following [this guide](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start), then edit the `values.yml` file and add the following values:

```yaml
host: # the host to access your rocket.chat instance from, omit the protocol
ingress:
  enabled: true
  ingressClassName: nginx
```

This adds the necessary ingress resource with all the expected paths and backends configured. The `ingressClassName` is essential unless you have a default class set; depending on the type of controller you're using, refer to the respective documentation.

{% hint style="info" %}
Nginx controller is used as an example and not an official recommendation. Any ingress controller can be used, with the `ingressClassName` property set correctly or the `IngressClass` resource set to the default one for the cluster or the controller watches for `Ingress` resources with no specific class defined. &#x20;
{% endhint %}

* Apply the changes and install. Once you have made the necessary changes to the values file, run the following command to upgrade the deployment:

```bash
helm install rocketchat -f Values.yaml rocketchat/rocketchat
```

* Once deployed, you should be able to access the Rocket.Chat using the configured host. You can convert your existing monolith deployment to using microservices by making the same changes mentioned in this document and running `helm upgrade` with the values file and the current deployment name instead of `helm install`.&#x20;

{% hint style="info" %}
A complete guide on how to deploy with helm can be found in [helm.md](../prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/helm.md "mention"). For multi-workspace deployment, please [contact support](../../resources/get-support/).
{% endhint %}
