# Available Images

Rocket.Chat is a rapidly-moving FOSS project. We maintain 3 Docker images for the diverse needs of our global user community. To use these images you will need to have [Docker](https://docs.docker.com/install/) installed and operational.

Discovering existing releases: You can select the release you need from our [GitHub Release Page](https://github.com/RocketChat/Rocket.Chat/releases). Here's a description of our [current branching strategy](https://developer.rocket.chat/rocket.chat/contribute-to-rocket.chat/development-workflow).

## Official image (stable and tested)

The [Official Docker Images Repository](https://docs.docker.com/docker-hub/official\_images/) is where Rocket.Chat's Official, stable image is maintained and controlled by Docker, and reviewed by the Docker committee.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat
```

## Latest Release Image

This is an image that is maintained at Rocket.Chat's own docker repository. The release may be from the develop or master branch.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest
```

## Preview Image

The Rocket.Chat preview image deploys a container with a database inside, it's useful for quickly trying or running tests, not requiring a dedicated database installation

{% embed url="https://hub.docker.com/r/rocketchat/rocket.chat.preview" %}

## Specific Release Image

This is an image that is maintained at Rocket.Chat's own docker repository. It is associated with a release build.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat:X.X.X
```

### Discovering existing releases

You can select the release you need from our [DockerHub Tags](https://hub.docker.com/r/rocketchat/rocket.chat/tags/).

#### Bleeding-edge untested develop build image

This is an image that is maintained at Rocket.Chat's own docker repository. It is updated from our `develop` (untested) branch which is the absolute latest, for those who need to work with the newest code.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat:develop
```
