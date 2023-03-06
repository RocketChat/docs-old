# Microservices Deployment

Rocket.Chat's microservices architecture allows for greater scalability, flexibility, resilience, and fault tolerance functioning of your workspace. This makes it possible for your workspace to manage large volumes of users and adapts to changing business needs.

This guide shows how to deploy Rocket.Chat and archive microservices using [Kubernetes](https://kubernetes.io/) and [Helm](https://helm.sh/), our officially supported method.

## Prerequisites:

* A Kubernetes cluster is set up and configured.
* A working installation of Helm 3.
* Basic understanding of Kubernetes and Helm.

## Steps

Follow these steps to deploy.

1. Add the RocketChat helm repository to your system by running this command:

```sh
helm repo add rocketchat https://rocketchat.github.io/helm-charts
```

2. Configure the Rocket.Chat deployment.&#x20;

By default, the Rocket.Chat Helm chart deploys a single monolith with a single instance. To enable microservices, edit your `Values.yaml` file and include

```yaml
microservices:
  enabled: true
```

Each component has its own section inside the `Values.yml` file.

```yaml
presence: {}
ddpStreamer: {}
account: {}
authorization: {}
streamHub: {}
```

The top level is for the monolith configuration.

To set the desired number of replicas for any of the services, set the `replicas` value for the respective service like below

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

See the list of other variables [here](../../deploy-rocket.chat/prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/helm.md#configuration).

3. Set up ingress

This architecture requires an ingress controller. All WebSocket connections need to be sent directly to the `ddp-streamer` service as mentioned in the [microservices overview](../../deploy-rocket.chat/scaling-rocket.chat/microservices-setup.md) page.

For example, you could install an nginx controller in your cluster following [this guide](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start), then edit the `values.yml` file and add

```yaml
host: # the host to access your rocket.chat instance from, omit the protocol
ingress:
  enabled: true
  ingressClassName: nginx
```

This adds the necessary ingress resource with all the expected paths and backends configured. The `ingressClassName` is important unless you have a default class set, depending on the type of controller you're using, refer to the respective documentation.

{% hint style="info" %}
Nginx controller is used as an example and not an official recommendation.

Any ingress controller can be used, with the `ingressClassName` property set correctly or the `IngressClass` resource set to the default one for the cluster or the controller watches for `Ingress` resources with no specific class defined. &#x20;
{% endhint %}

4. Apply the changes and install

Once you have made the necessary changes to the values file, run the following command to upgrade the deployment:

```bash
helm install rocketchat -f Values.yaml rocketchat/rocketchat
```

Once deployed, you should be able to access the Rocket.Chat using the configured host.&#x20;

* You can convert your existing monolith deployment to using microservices by making the same changes mentioned in this document and running `helm upgrade` with the values file and the existing deployment name instead of `helm install`.&#x20;

A complete guide on how to deploy with helm can be found here [helm.md](../../deploy-rocket.chat/prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/helm.md "mention").

{% hint style="info" %}
For multi-workspace deployment, [contact support](../../resources/get-support/).
{% endhint %}
