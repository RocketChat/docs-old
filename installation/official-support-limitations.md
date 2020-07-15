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

[Docker](https://www.docker.com/) is widely used to package applications in containers and distribute them as images, providing abstraction and isolation layers from the OS \(operational system\). It allows the application to be shipped with a specific version of the OS compatibility layer and his own dependencies already installed and configured.

{% hint style="info" %}
Rocket.Chat's own cloud uses our official Docker images, which makes this installation method the most widely tested version. 
{% endhint %}

{% page-ref page="docker-containers/" %}

## Scalability

#### Containers Orchestration

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

Rocket.Chat cuts a new release every single month, please check the Getting Support for more information about the release cycles and make sure you are running a supported version.

{% page-ref page="../getting-support.md" %}



