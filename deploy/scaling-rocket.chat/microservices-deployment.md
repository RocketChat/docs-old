# Microservices Deployment

Rocket.Chat's microservices architecture allows for greater scalability, flexibility, resilience, and fault tolerance functioning of your workspace. This makes it possible for your workspace to manage large volumes of users and adapts to changing business needs.

This guide shows how to deploy Rocket.Chat and archive microservices using [Kubernetes](https://kubernetes.io/) and [Helm](https://helm.sh/), two popular container orchestration tools.

## Prerequisites:

* A Kubernetes cluster is set up and configured.
* A working installation of at least Helm 3.
* Basic understanding of Kubernetes and Helm.

## Steps

Follow these steps to deploy.

1. Add the RocketChat helm repository to your system by running this command:

```
helm repo add rocketchat https://rocketchat.github.io/helm-charts
```

Check out the [installation steps](../../deploy-rocket.chat/prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/helm.md#installing-the-chart).

2. Configure the Rocket.Chat deployment.&#x20;

By default, the Rocket.Chat Helm chart deploys a single instance of the application. To scale the application and increase its availability, you can modify the deployment configuration file to create multiple replicas of the application.

Update the `values.yml` file to enable and set the following variables:

* Set the number of replicas

```
replicaCount: <desired number of replicas>
```

* Enable microservices

```
microservices:
  enabled: true
```

* Setup and enable an ingress controller for the right service redirection (to ddp streamer). So Rocket.Chat can be accessed outside the Kubernetes cluster.

```
ingress:
  enabled: true
  ingressClassName: <your ingress in use>
```

See the list of variables [here](../../deploy-rocket.chat/prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/helm.md#configuration).

3. Apply the changes and install

Once you have made the necessary changes to the configuration file, run the following command to upgrade the deployment:

```bash
helm upgrade rocket-chat rocketchat/rocketchat -f values.yaml
```

Install the chart by running:

```
helm install rocketchat -f Values.yaml rocketchat/rocketchat
```

Once deployed, you should be able to access the Rocket.Chat using the configured host and path.

A complete guide on how to deploy with helm can be found here [helm.md](../../deploy-rocket.chat/prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/helm.md "mention").

{% hint style="info" %}
For multi-workspace deployment, [contact support](../../resources/get-support/).
{% endhint %}
