---
description: Deploy Rocket.Chat in an air-gapped environment using docker & docker compose
---

# Rocket.Chat Air-gapped Deployment

An air-gapped computer system is one that is not directly connected to any external network. It ensures that a secure computer network is physically isolated from unsecured networks, such as the public internet or an unsecured local area network.

{% hint style="info" %}
The recommended deployment method for Rocket.Chat is using [Docker and Docker Compose](../../quick-start/installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/).
{% endhint %}

## Deploying  a local Docker Registry with Images

To set up a local [Docker registry](https://docs.docker.com/registry/) on an air-gapped environment, consider building the registry's data volume on a host with internet connectivity so that you can use `docker pull` to fetch the required images or any remotely accessible images, then move the volume to the air-gapped network.

{% hint style="info" %}
See the complete list of considerations in the [Docker documentation](https://docs.docker.com/registry/deploying/#considerations-for-air-gapped-registries).
{% endhint %}

* Deploy a local registry following the[ official Docker guide](https://docs.docker.com/registry/deploying/).&#x20;
* Then, pull the [Rocket.Chat](https://hub.docker.com/\_/rocket-chat), [MongoDB](https://hub.docker.com/r/bitnami/mongodb), and Nginx images from the docker hub which are needed to run Rocket.Chat into your registry. More details on how to do that [here](https://docs.docker.com/registry/deploying/#copy-an-image-from-docker-hub-to-your-registry)

{% hint style="info" %}
For more details, see [copying an image from Docker Hub to your registry](https://docs.docker.com/registry/deploying/#copy-an-image-from-docker-hub-to-your-registry).
{% endhint %}

* After deploying the local registry, move the volume to the air-gapped environment and install Rocket.Chat.

## Installing Rocket.Chat in an Air-gapped environment through Docker & Docker Compose

With your local registry completely [deployed](https://docs.docker.com/registry/deploying/) and [configured](https://docs.docker.com/registry/configuration/),&#x20;

* Follow our guide on installing Rocket.Chat with [Docker & Docker Compose](../../quick-start/installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/#fetching-compose-file) using the example `compose.yml` file.

{% hint style="info" %}
Once your local registry is configured on an air-gapped system, Docker will pull and use images directly from there.
{% endhint %}
