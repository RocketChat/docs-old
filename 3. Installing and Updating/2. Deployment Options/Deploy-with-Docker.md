Make sure you have docker and docker-compose installed and operational.

Note: as stated by Docker, docker-compose is [not yet recommended for production use](https://docs.docker.com/compose/production/) at this time.

Look for the [`docker-compose.yml`](https://raw.githubusercontent.com/RocketChat/Rocket.Chat/develop/docker-compose.yml) file at the top level of the [Rocket.Chat Git repo](https://github.com/RocketChat/Rocket.Chat).  This is the ONLY file you will need from the repo.  You can create this file on your own machine by copy and pasting the content.

Open it with an editor and modify:

*  `ROOT_URL` to match your domain name or IP address

Mongo supports 24 x 7 operations and live backup.  You should not need to restart it too frequently.  See  [mongodb documentations](https://docs.mongodb.org/manual/) for proper operation and management of a mongo server.

Start Rocket.Chat by single command:

````
docker-compose up -d rocketchat
````

The command starts all dependency containers too.

Optionally, if you want to manage your messages and configuration information, edit the file again to uncomment the volume mounts.   Make sure you have a `data` subdirectory to mount and store the data.

Optiionally, if you want a bot, so you don't have to talk to yourself, after you've created an admin user and also a bot user, edit the file `docker-compose.yml` again to change the variables `ROCKETCHAT_USER` and `ROCKETCHAT_PASSWORD` in the hubot section and then start up hubot:

````
docker-compose up -d hubot
````

## Updating the docker image

To update the `rocketchat` docker image to the latest (develop) version, you can use the following commands. Your data should not be affected by this, since it's located in the `mongo` image.

```
docker pull rocketchat/rocket.chat:develop
docker-compose stop rocketchat
docker-compose rm rocketchat
docker-compose up -d rocketchat
```