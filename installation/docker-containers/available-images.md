# Available Images

Rocket.Chat is a rapidly-moving FOSS project. We maintain 3 Docker images for the diverse needs of our global user community. To use these images you will need to have [Docker](https://docs.docker.com/install/) installed and operational.

Discovering existing releases: You can select the release you need from our [GitHub Release Page](https://github.com/RocketChat/Rocket.Chat/releases). Here's a description of our [current branching strategy](../../guides/developer/branches-and-releases.md).

## Official image \(stable and tested\)

The [Official Docker Images Repository](https://docs.docker.com/docker-hub/official_images/) is where Rocket.Chat's Official, stable image is maintained and controlled by Docker, and reviewed by the Docker committee.

```bash
docker pull rocket.chat
```

## Latest Release Image

This is an image that is maintained at Rocket.Chat's own docker repository. The release may be from the develop or master branch.

```bash
docker pull rocketchat/rocket.chat:latest
```

## Specific Release Image

This is an image that is maintained at Rocket.Chat's own docker repository. It is associated with a release build.

```bash
docker pull rocketchat/rocket.chat:X.X.X
```

### Discovering existing releases

You can select the release you need from our [DockerHub Tags](https://hub.docker.com/r/rocketchat/rocket.chat/tags/).

#### Bleeding-edge untested develop build image

This is an image that is maintained at Rocket.Chat's own docker repository. It is updated from our `develop` \(untested\) branch, that is, absolute latest, for those who needs to work with latest code.

```bash
docker pull rocketchat/rocket.chat:develop
```

