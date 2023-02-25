# Prepare for your Deployment

{% hint style="info" %}
[ **👉 Trouble installing or deploying Rocket.Chat?** Join our Weekly Technical Helpline to get real-time help from our team!](https://app.livestorm.co/rocket-chat/rocketchats-weekly-technical-helpline?type=detailed)
{% endhint %}

Rocket.Chat can be hosted on our Cloud, installed from a variety of marketplaces, or manually installed on your own server.&#x20;

## Prerequisites

Regardless of the platform you wish to deploy on or the method of deployment, you may want to make the best choices in either case. See in this section our official recommendations, the necessary requirements to run a Rocket.Chat instance and the various properties we judge on to choose a deployment method better.

## Official Recommendation

{% hint style="success" %}
We offer a variety of Deployment methods, and we recommend you set up using our [Docker & Docker Compose](../../quick-start/installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/) guide for several reasons mentioned below.
{% endhint %}

In order to obtain official support from our team, we have a minimum set of requirements. These requirements are necessary for us to access essential system information, provide an SLA, answer questions, or provide a solution for the problem.

Only installations matching these minimum requirements can be covered by our SLAs and our paid Support Policy. Some requirements may vary depending on the installation size, as described in the following sections.

### Environment

#### Docker Container

In order to eliminate environmental issues of missing, outdated, or mismatching dependencies, specific operating system issues, or problems during manual installations, we strongly recommend using our official Docker images.

{% hint style="info" %}
Rocket.Chat's own cloud uses our official Docker images, which makes this installation method the most tested.
{% endhint %}

[Docker](https://www.docker.com) is widely used for packaging applications in containers and distributing them as images, providing abstraction and isolation layers from the OS (operational system). It allows the application to be shipped with a specific version of the OS compatibility layer and its own dependencies already installed and configured.

{% content-ref url="../prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/docker-and-docker-compose/docker-containers/" %}
[docker-containers](../prepare-for-your-rocket.chat-deployment/rapid-deployment-methods/docker-and-docker-compose/docker-containers/)
{% endcontent-ref %}

### Why Docker?

#### Considerations

**Scalability**

Scaling your Rocket.Chat deployment using Docker with Docker Compose is quite easy as editing the compose file.

#### Ease of Deployment

An instance of Rocket.Chat can be up and running easily by using our images or making use of the compose `yml` file.

#### **Ease of Maintenance and Support**

Maintaining a docker instance is pretty straightforward. Rocket.Chat offers both official and community support for all Docker-related issues.

### Multiple processes

We recommend running multiple application processes to maximize the usage of all available cores. Although you can use either Virtual Machines or containers, we recommend and only support the usage of Docker containers.

Virtual machines and containers differ in several ways, but the primary difference is that containers provide a way to virtualize an OS so that multiple workloads can run on a single OS instance. With VMs, the hardware is virtualized to run multiple OS instances. The containers’ speed, agility, and portability make them offer definite performance advantages for our use case.

{% hint style="info" %}
In some cases, it is acceptable to run containers inside a VM, as most PaaS only offer Virtual Private Servers.
{% endhint %}

### Performance benefits of containers

#### **Faster startup time**

A containerized application usually starts in a couple of seconds. Virtual machines could take a couple of minutes.

#### **Better resource distribution**

Containers use up only as many system resources as they need at a given time. Virtual machines usually require some resources to be permanently allocated before the virtual machine starts. For this reason, virtual machines tie up resources on the host, even if they are not actually using them. Containers allow host resources to be distributed in an optimal way.

#### **Direct hardware access**

Applications running inside virtual machines generally cannot access hardware like graphics cards on the host in order to speed processing. containerized applications can.

#### **Less redundancy**

With virtual machines, you have to install an entire guest operating system, which duplicates a lot of the components already running on your host server. Containers don't require this.

{% embed url="https://www.backblaze.com/blog/vm-vs-containers/" %}

### Containers orchestration

The usage of Docker-compatible containers orchestration/management systems such as Kubernetes, Rancher, or OpenShift can facilitate the scaling of containerized Rocket.Chat instances make it possible to distribute load among different physical bare-metal servers or virtual machines.

Rocket.Chat's own cloud uses this approach to manage cloud-hosted instances with a high level of reliability and flexibility, we leverage the same expertise to provide documentation on how to configure and deploy scaled installations.

We require, **scaled installations** (with more than **one instance** or more than **2000 users**), to be orchestrated and/or managed with one of the following:

1. SUSE Rancher
2. Red Hat Openshift
3. Kubernetes and Helm _(Managed by a cloud platform such as AWS, Google Cloud, etc, or self-managed)_
4. docker-compose

At this time, no other container orchestration/management technologies will be supported by our Support team for any issues related to **scaled installations**.

## Hardware

The minimum hardware requirements are described on the page below.

{% content-ref url="../prepare-for-your-rocket.chat-deployment/hardware-requirements.md" %}
[hardware-requirements.md](../prepare-for-your-rocket.chat-deployment/hardware-requirements.md)
{% endcontent-ref %}

## Monitoring

Production deployments should continually collect metrics regarding the installation's instances and database. Rocket.Chat supports and recommends the industry-standard Prometheus + Grafana monitoring stack. Grafana dashboards are available in the [Metrics](https://github.com/RocketChat/Rocket.Chat.Metrics) repository.

{% embed url="https://github.com/RocketChat/Rocket.Chat.Metrics" %}

## Versions

Rocket.Chat cuts a new release every month. Please check the link below for more information about the release cycles and make sure you are running a supported version.

{% content-ref url="../../resources/get-support/" %}
[get-support](../../resources/get-support/)
{% endcontent-ref %}
