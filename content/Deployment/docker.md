# Docker
Rocket.Chat is a rapidly-moving FOSS project. We maintain THREE Docker images for the diverse needs of our global users community. To use these images you will need to have [Docker] (https://docs.docker.com/engine/installation/) installed and operational.
  
For a description of our current branching strategy, see: https://github.com/RocketChat/Rocket.Chat/wiki/Branches-and-Releases  

#### Official image (stable and tested)
The [Official Docker Images Repository] (https://docs.docker.com/docker-hub/official_repos/) is where Rocket.Chat's Official, stable image is maintained and controlled by Docker, and reviewed by the Docker committee.  
    
`docker pull rocket.chat`  
  
#### Latest master build image (stable and tested)
This is an image that is maintained at Rocket.Chat's own docker repository. It is updated from our master (stable) branch.
  
`docker pull rocketchat/rocket.chat:latest`  
  
#### Bleeding-edge development build image (untested)  
This is an image that is the absolute latest, untested, for those who needs to work with latest code. It's maintained at Rocket.Chat's own docker repository. It is updated from our develop (untested) branch.

`docker pull rocketchat/rocket.chat:develop`

## Deploying with Docker Compose
Instead of using the standard Docker commands, you may wish for a bit more automated management of the deployment. This is where the use of Docker-compose may come in handy.  
  
* Make sure you have [Docker] (https://docs.docker.com/engine/installation/) and [Docker-compose] (https://docs.docker.com/compose/install/) installed and operational. Note: as stated by Docker, docker-compose is [not yet recommended for production use](https://docs.docker.com/compose/production/) at this time.
* Create `docker-compose.yml` based on [our example] (https://raw.githubusercontent.com/RocketChat/Rocket.Chat/develop/docker-compose.yml).  This is the ONLY file you will need.  You can create this file on your own machine by copy and pasting the content.
* Edit `image: rocketchat/rocket.chat:develop` to specify which image you wish to use (see section above titled Docker)
* Edit `ROOT_URL` to match your domain name or IP address

Start the mongodb server by:

````
docker-compose up -d mongo
````

Mongo supports 24 x 7 operations and live backup.  You should not need to restart it too frequently.  See  [mongodb documentations](https://docs.mongodb.org/manual/) for proper operation and management of a mongo server.

Once you're sure that mongodb is up and running:

````
docker-compose up -d rocketchat
````

Optionally, if you want to manage your messages and configuration information, edit the file again to uncomment the volume mounts.   Make sure you have a `data` subdirectory to mount and store the data.

Optiionally, if you want a bot, so you don't have to talk to yourself, after you've created an admin user and also a bot user, edit the file `docker-compose.yml` again to change the variables `ROCKETCHAT_USER` and `ROCKETCHAT_PASSWORD` in the hubot section and then start up hubot:

````
docker-compose up -d hubot
````

## Updating the docker image

To update the `rocketchat` docker image to the latest version, you can use the following commands. Your data should not be affected by this, since it's located in the `mongo` image.

```
docker pull rocketchat/rocket.chat:develop
docker-compose stop rocketchat
docker-compose rm rocketchat
docker-compose up -d rocketchat
```
