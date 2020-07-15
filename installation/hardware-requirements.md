---
description: Minimum Requirements for Server Deployment
---

# Hardware Requirements

The actual requirement varies greatly with:

* Number of concurrently active users
* Number of actually connected devices per user
* Activities of the users - solely text-based messaging takes minimal resources; while file sharing and jpg uploads will consume more resources
* Bot or integration activity level; different bot and/or integrations have different requirements

The following are sized for the minimal cost deployment unit available for bare-metal server and cloud VPS.

## Bare-metal Server

* Intel Xeon E5-2603 v4 \(or equivalent\) \[1.7 GHz, 6 cores, $213 USD\]
* 4 GB RAM
* 500 GB hard disk or larger
* Ubuntu 18.04 LTS \(with or without docker\)

The above minimal hardware configuration is ideal for corporate or group with up to 1,000 users, up to 300 concurrently active and moderate levels of mixed uploads, sharing, and bot activities.

## VPS \(minimal\)

* Single core \(2 GHz\)
* 1 GB RAM
* 30 GB of SSD

The above minimal virtual configuration, when not over-provisioned by the provider, is ideal for small deployments of up to 200 users, up to 50 concurrently active and minimal level of mixed uploads, sharing, and bot activities.

## VPS \(recommended\)

* Dual-core \(2 GHz\)
* 2 GB RAM
* 40 GB of SSD

The above virtual configuration, when not over-provisioned by the provider, can accommodate small deployments of up to 500 users, up to 100 concurrently active and moderate levels of mixed uploads, sharing, and bot activities.

## Really Small office Server 

#### \(Under $100 on-premise server for small group\)

* Raspberry Pi 3 or Pi 2 \($35 all-in-one system\)
* 4 cores 1 GB memory
* 32 GB SD card \($15\)

The above minimal configuration can accommodate a small office or group of up to 50 users and up to 25 concurrently active and moderate levels of mixed uploads, sharing, and bot activities. This is based on a managed MongoDB service \(such as [mlab.com](https://mlab.com)\). Running mongo local to a Pi is not recommended at this time.

