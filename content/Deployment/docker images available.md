# Docker Images Available
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
