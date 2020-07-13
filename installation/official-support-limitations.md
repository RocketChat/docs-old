---
description: Limitations to get official support from the Rocket.Chat team
---

# Official support limitations

## Introduction

To provide official support from our team we need to ensure a minimum set of requirements in order to have access to the necessary information to be able to provide an SLA and answer the questions or provide a solution to the problem.

Only installations following those requirements are covered by our SLAs and our paid Support Policy, some requirements may vary depending on the installation size as described in the following sections.

## Environment

In order to isolate external issues of missing or outdated dependencies, specific operational system issues, or problems during the manual installations we limited our official support to only installations using our Docker Images that follows our [Getting Support](../getting-support.md) guide.

We may expand this support list in the future once we find other options suitable to the necessities of external factors isolation.

### Why Docker?

[Docker](https://www.docker.com/) is a widely used software to package applications in containers and distribute them as images providing abstraction and isolation layers from the OS \(operational system\). It allows the application to be shipped with a specific version of the OS compatibility layer and his own dependencies installed and configured.

Ensuring that the installation is running the Docker image provided by the Rocket.Chat team, makes it possible to put the external factors aside and ensure that the support request refers to our application and not to the following factors.

1. Problems during the compilation process
2. Problems during the installation process
3. Missing or outdated dependencies
4. ~~Problems on the OS level \(may remove\)~~
5. Installation of non-official versions

Rocket.Chat's hosted offering uses our official Docker images, which makes this installation method the most widely tested version ensuring quick fixes and a more efficient way to reproduce problems leading to the most efficient support flow.

{% page-ref page="docker-containers/" %}

### Scalability

The usage of Docker-based management software like Kubernetes, Rancher or OpenShift makes the scalability of the Rocket.Chat containerized instances easy and possible to distribute load among different physical or virtual machines.

Rocket.Chat's hosted offering makes usage of this approach to manage our cloud-hosted instances with a high level of reliability and flexibility, we use the same expertise to provide documentation on how to deal with the high scale installations.

To ensure the support for high **scale installations** or with more than **1 instance** or **2000 users** we limited the Official support to installations based on one of those managers:

1. Rancher
2. Openshift
3. Kubernetes \(Managed by a cloud platform such as AWS, Google Cloud, etc, or self-managed\)

Any other installation method is not covered by our Support team for issues we consider related to the scalability.

### Monitoring

We limited support for most of the issues to only the environments collection [Metrics](https://github.com/RocketChat/Rocket.Chat.Metrics) about the installation's instances and database. The Rocket.Chat provides integration with Prometheus in order to collect the relevant metrics, all the Grafana dashboards required are available in the [Metrics](https://github.com/RocketChat/Rocket.Chat.Metrics) repository.

### Hardware requirements

The minimum hardware requirements are described in the [Minimum Requirements](minimum-requirements.md) page, the support is limited to installations matching those requirements.

{% page-ref page="minimum-requirements.md" %}

## Data access

We do not require access to the servers, instances or databases to provide support, but we may require access to the logs if we consider them necessary to identify the problem.

Types of logs we may require:

1. Server logs
2. Web browser logs
3. Mobile logs

## Versions

Rocket.Chat release happens every month, please check the [Getting Support](../getting-support.md) for more information about the lifecycle of each release and ensure you have a supported version running.

{% page-ref page="../getting-support.md" %}



