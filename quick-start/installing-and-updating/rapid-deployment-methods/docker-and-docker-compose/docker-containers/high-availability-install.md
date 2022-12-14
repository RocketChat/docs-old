---
description: Install Rocket.Chat as HA with mongodb replicaset as backend
---

# High Availability

## Install MongoDB Replicaset

* Use [this blog](https://medium.com/@gargar454/deploy-a-mongodb-cluster-in-steps-9-using-docker-49205e231319#.8dfln7n8c) on how to set up the mongodb replicaset.
*   Create a user called oploguser with rights on local oplog database:

    `db.createUser({user: "oploguser", pwd: "password", roles: [{role: "read", db: "local"}, {role: "clusterMonitor", db: "admin"}]}).`
*   Create rocket user to authenticate with rocketchat database:

    `db.createUser({user: "rocket", pwd: "password", roles: [{role: "readWrite", db: "rocketchat"}, {role: "clusterMonitor", db: "admin"}]}).`

## Create Rocket.Chat Docker Container

* Use example `docker-compose.yaml` in the [repo](https://github.com/RocketChat/Docker.Official.Image).
* Fill the `INSTANCE_IP` env with the local IP of the docker-host (in a 3 node setup this is unique on every host).
* Fill in the passwords from rocket and oplogger.
* Change the IP of every host in the example docker-compose.yaml -> extra\_hosts inserts host entries so each rocketchat-container could resolve the others by the name.
* Be sure that the instances could communicate on port 3000 with each other, this is important to see messages on other hosts directly.

{% code title="docker-compose.yml" %}
```yaml
rocketchat:
    image: registry.rocket.chat/rocketchat/rocket.chat:latest
    environment:
        - PORT=3000
        - ROOT_URL=https://chat.domain.de
        - MONGO_URL=mongodb://rocket:password@rocket-1:27017,rocket-2:27017,rocket-3:27017/rocketchat?authSource=admin&replicaSet=rs0&w=majority
        - MONGO_OPLOG_URL=mongodb://oploguser:password@rocket-1:27017,rocket-2:27017,rocket-3:27017/local?authSource=admin&replicaSet=rs0
        - INSTANCE_IP=<ip of the local instance>
    ports:
        - 3000:3000
    extra_hosts:
        - "rocket-1:10.250.250.13"
        - "rocket-2:10.250.250.14"
        - "rocket-3:10.250.250.17"
```
{% endcode %}

### Create a Load Balancer

* Now, setup up a [reverse proxy](../../../other-deployment-methods/manual-installation/extras/configuring-ssl-reverse-proxy.md) on each host to terminate SSL on each rocket.chat node or terminate SSL on the load balancer, this is up to you.
* See [Nginx multi-instance reverse proxy example](https://docs.rocket.chat/installation/manual-installation/multiple-instances-to-improve-performance#update-your-nginx-proxy-config).
* Set up a load balancer to reach each instance on `443` or `3000` (depends on the choice above).
