# Docker & Docker Compose

Deploying Rocket.Chat with Docker and Docker Compose is as easy as it can get.

### Installing Docker and Docker Compose

* If you don't have it already, make sure you have [Docker](https://docs.docker.com/install) and [Docker-compose](https://docs.docker.com/compose/install/) (v2 is required) installed and operational. To quickly do that you can use Docker's official helper script

```bash
curl -L https://get.docker.com | sh
```

### Fetching Compose file

* Navigate to any directory of your choice and create a `docker-compose.yml` based on [our example](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml). OR you can download it directly by executing the following command on your terminal.

```bash
curl -L https://raw.githubusercontent.com/RocketChat/Docker.Official.Image/master/compose.yml -O
```

#### **Editing Variables:**

If you are using MongoDB Atlas as the database provider, edit the value of the `MONGO_URL` variable in your compose file to be your connection string in this format

`MONGO_URL=mongodb://<user>:<pass>@host1:27017,host2:27017,host3:27017/<databaseName>?replicaSet=<replicaSet>&ssl=true&authSource=admin`

Environment variables are set using a `.env` file. See the example [here](https://github.com/RocketChat/Docker.Official.Image/blob/master/env.example). If you cloned the repo initially, you can just rename the example file by&#x20;

<pre class="language-bash"><code class="lang-bash"><a data-footnote-ref href="#user-content-fn-1">cp env.example .env</a>
</code></pre>

* Set the `RELEASE` variable in the `.env`to your desired Rocket.Chat version. See [releases here](https://github.com/RocketChat/Rocket.Chat/releases).\
  Keeping the default `latest` is **not recommended** (More at [Docker Images Available](docker-containers/available-images.md) )
* Edit `ROOT_URL` from the default `http://localhost:3000` to match your domain name or IP address as you wish
*   If you have a registration token to register the workspace automatically you can provide it with:

    ```
    REG_TOKEN={your token here} docker-compose up -d
    ```
* Next, start up the container by executing:

```shell
docker compose up -d
```

This is going to:

1. Start a MongoDB service named `mongodb`.
2. Start a service `rocketchat`, that will also wait for `mongodb` to be ready.

Mongo supports 24 x 7 operations and live backup. You should not need to restart it too frequently. See [MongoDB documentation](https://www.mongodb.com/docs/manual/) for proper operation and management of a Mongo server.

Optionally, if you want to manage your messages and configuration information, edit the file again to uncomment the volume mounts. Make sure you have a `data` subdirectory to mount and store the data.

### Updating Rocket.Chat Docker Image

To update the `rocketchat` docker image to the latest version, update the `RELEASE` value in your `.env` file, then simply run `docker compose up -d`. Your data should not be affected by this, since it's located in the `mongo` image.

{% content-ref url="../../../upgrading-rocket.chat.md" %}
[upgrading-rocket.chat.md](../../../upgrading-rocket.chat.md)
{% endcontent-ref %}

[^1]: 
