# Rocket.Chat Air-gapped Deployment

An air-gapped computer system is one that is not directly connected to any external network. This can be for several reasons including and not limited to carrying out sensitive processes, isolation, and prevention from external connectivity to prevent attacks.

{% hint style="info" %}
The recommended deployment method for Rocket.Chat is using [Docker and Docker Compose](../../deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose/).
{% endhint %}

In this section, we are going to see how a Rocket.Chat workspace can be deployed in an air-gapped environment through Docker & Docker Compose.

These instructions cover:

1. Setting up a local docker registry and importing required images
2. Installing Rocket.Chat with Docker Compose

## Deploying a local Docker Registry with Images

To set up a local [Docker registry](https://docs.docker.com/registry/) on an air-gapped environment, you need to consider

{% hint style="info" %}
Building the registry's data volume on a host with internet connectivity so that you can use `docker pull` to fetch the required images or any remotely accessible images, and then move the volume to the air-gapped network.

See the full list of considerations on the [Docker documentation](https://docs.docker.com/registry/deploying/#considerations-for-air-gapped-registries).
{% endhint %}

* Deploy a local registry following this guide from [Docker official docs](https://docs.docker.com/registry/deploying/)
* And then pull the following images from docker hub which are needed to run Rocket.Chat into your registry. More details on how to do that [here](https://docs.docker.com/registry/deploying/#copy-an-image-from-docker-hub-to-your-registry)
  * [x] Rocket.Chat: [https://hub.docker.com/\_/rocket-chat](https://hub.docker.com/\_/rocket-chat)
  * [x] MongoDB: [https://hub.docker.com/r/bitnami/mongodb](https://hub.docker.com/r/bitnami/mongodb)
  * [x] Ngnix and any other

After deploying the local registry, you can move the volume to the air-gapped environment and proceed with installing Rocket.Chat.

## Installing Rocket.Chat in Air-gapped

With your local registry completely [deployed](https://docs.docker.com/registry/deploying/) and [configured](https://docs.docker.com/registry/configuration/),&#x20;

* Follow our guide on installing Rocket.Chat with [Docker & Docker Compose](../../deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose/#fetching-compose-file) using the example `compose.yml` file.

{% hint style="info" %}
Once your local registry is configured on an air-gapped system, Docker will pull and use images directly from there.
{% endhint %}
