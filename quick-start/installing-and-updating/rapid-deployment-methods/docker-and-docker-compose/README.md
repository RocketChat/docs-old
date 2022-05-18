# Docker & Docker Compose

Deploying Rocket.Chat with Docker and Docker Compose is as easy as it can get.

### Installing Docker and Docker Compose

* If you don't have already, make sure you have [Docker](https://docs.docker.com/install) and [Docker-compose](https://docs.docker.com/compose/install/) installed and operational.
* Navigate to any directory of your choice create a `docker-compose.yml` based on[ our example](https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/docker-compose.yml). OR you can download directly by executing the following command on your terminal.

```bash
curl -L https://go.rocket.chat/i/docker-compose.yml -O
```

**Editing Variables:**

* Edit `image: registry.rocket.chat/rocketchat/rocket.chat:latest` to specify, which image you wish to use (see section [Docker Images Available](docker-containers/available-images.md) )
* Edit `ROOT_URL` from the default `http://localhost:3000` to match your domain name or IP address as you wish
*   If you have a registration token to automatically register the workspace you can provide with:

    ```
    REG_TOKEN={your token here} docker-compose up -d
    ```
* Next, start up the container by executing:

```
docker-compose up -d
```

This is going to:

* Start a MongoDB service named `mongo`.
* Start a service named `mongo-init-replica` that will wait for `mongo` to be ready, connect to it, initialize it and terminate itself (`mongo` will keep running).
* Start a service `rocketchat`, that will also wait for `mongo` to be ready, the `mongo-init-replica` to initialize, and then run Rocket.Chat.

Mongo supports 24 x 7 operations and live backup. You should not need to restart it too frequently. See [mongodb documentation](https://docs.mongodb.org/manual/) for proper operation and management of a mongo server.

Optionally, if you want to manage your messages and configuration information, edit the file again to uncomment the volume mounts. Make sure you have a `data` subdirectory to mount and store the data.

### Updating Rocket.Chat Docker Image

To update the `rocketchat` docker image to the latest version, you can use the following commands. Your data should not be affected by this, since it's located in the `mongo` image.

```
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest
docker-compose stop rocketchat
docker-compose rm rocketchat
docker-compose up -d rocketchat
```
