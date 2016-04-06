Rocket.Chat is a rapidly-moving FOSS project. We maintain THREE Docker images for the diverse needs of our global users community:

### Official Image

In the *Official Docker Images Repository*, we have Rocket.Chat's Official image.  This repository is maintained and controlled by Docker:
 
https://docs.docker.com/docker-hub/official_repos/

Official image - stable, reviewed by Docker committee

`docker pull rocket.chat`

### Latest release image

This is an image that is maintained at Rocket.Chat's own docker repository.  It is updated with our latest release build.  The release may be from the develop or master branch.

`docker pull rocketchat/rocket.chat:latest`

For a description of our current branching strategy, see:

https://github.com/RocketChat/Rocket.Chat/wiki/Branches-and-Releases

### Specific release image

This is an image that is maintained at Rocket.Chat's own docker repository.  It is associated with a release build.

`docker pull rocketchat/rocket.chat:X.X.X`

#### Discovering existing releases

You can select the release you need from our [DockerHub Tags](https://hub.docker.com/r/rocketchat/rocket.chat/tags/).

#### Bleeding-edge untested develop build image

This is an image that is maintained at Rocket.Chat's own docker repository. It is updated from our `develop` (untested) branch, that is, absolute latest, for those who needs to work with latest code.

`docker pull rocketchat/rocket.chat:develop`