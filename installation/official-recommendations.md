---
description: Official Production Deployment Recommendations
---

# Official Recommendations

## Introduction

In order to obtain official support from our team, we have a minimum set of requirements. These requirements are necessary for us to access essential system information, to provide an SLA, to answer questions, or to provide a solution for the problem.

Only installations matching these minimum requirements can be covered by our SLAs and our paid Support Policy, some requirements may vary depending on the installation size as described in the following sections.

## Environment

#### Docker Container

In order to eliminate environment issues of missing, outdated, or mismatching dependencies, specific operating system issues, or problems during manual installations, we strongly recommend using our official Docker images.

{% hint style="info" %}
Rocket.Chat's own cloud uses our official Docker images, which makes this installation method the most tested.
{% endhint %}

[Docker](https://www.docker.com/) is widely used to package applications in containers and distribute them as images, providing abstraction and isolation layers from the OS \(operational system\). It allows the application to be shipped with a specific version of the OS compatibility layer and his own dependencies already installed and configured.

{% page-ref page="docker-containers/" %}

## Scalability

### Multiple processes

We recommend running multiple application processes to maximize the usage of all available cores. Although you can use either Virtual Machines or containers to do so, we recommend and only support the usage of Docker containers.

Virtual machines and containers differ in several ways, but the primary difference is that containers provide a way to virtualize an OS so that multiple workloads can run on a single OS instance. With VMs, the hardware is being virtualized to run multiple OS instances. Containers’ speed, agility, and portability make them offer definite performance advantages for our use case.

{% hint style="info" %}
In some cases, it is acceptable to run containers inside a VM, as most PaaS only offer Virtual Private Servers.
{% endhint %}

#### Performance benefits of containers

**Faster startup time**

A containerized application usually starts in a couple of seconds. Virtual machines could take a couple of minutes.

**Better resource distribution**

Containers use up only as many system resources as they need at a given time. Virtual machines usually require some resources to be permanently allocated before the virtual machine starts. For this reason, virtual machines tie up resources on the host, even if they are not actually using them. Containers allow host resources to be distributed in an optimal way.

**Direct hardware access**

Applications running inside virtual machines generally cannot access hardware like graphics cards on the host in order to speed processing. containerized applications can.

**Less redundancy**

With virtual machines, you have to install an entire guest operating system, which duplicates a lot of the components already running on your host server. Containers don't require this.

{% embed url="https://www.backblaze.com/blog/vm-vs-containers/" %}

### Containers orchestration

The usage of Docker-compatible containers orchestration/management systems such as Kubernetes, Rancher, or OpenShift can facilitate the scaling of containerized Rocket.Chat instances making it possible to distribute load among different physical bare-metal servers or virtual machines.

Rocket.Chat's own cloud uses this approach to manage cloud-hosted instances with a high level of reliability and flexibility, we leverage the same expertise to provide documentation on how to configure and deploy scaled installations.

We require, for **scaled installations** \(with more than **one instance** or more than **2000 users**\), to be orchestrated and/or managed with one of the following:

1. SUSE Rancher
2. Red Hat Openshift
3. Kubernetes and Helm _\(Managed by a cloud platform such as AWS, Google Cloud, etc, or self-managed\)_
4. docker-compose

At this time, no other containers orchestration/management technologies will be supported by our Support team for any issues related to **scaled installations**.

## Hardware

The minimum hardware requirements are described on the page below. 

{% page-ref page="hardware-requirements.md" %}

## Monitoring

Production deployments should continually collect metrics regarding the installation's instances and database. Rocket.Chat supports and recommends the industry-standard Prometheus + Grafana monitoring stack. Grafana dashboards are available in the [Metrics](https://github.com/RocketChat/Rocket.Chat.Metrics) repository.

{% embed url="https://github.com/RocketChat/Rocket.Chat.Metrics" %}

## Versions

Rocket.Chat cuts a new release every month, please check the link below for more information about the release cycles and make sure you are running a supported version.

{% page-ref page="../getting-support.md" %}



