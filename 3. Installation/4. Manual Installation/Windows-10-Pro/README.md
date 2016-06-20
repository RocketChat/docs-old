## Installing on Windows 10 Pro 64bit with Docker for Window

Please make sure:

* you have at least 4 GB of mmeory on your Windows 10 Pro machine
* you are running 64 bit edition of Windows 10 Pro 
* you have the latest updates installed, and no updates pending
* you have enabled Hyper-V (requires a reboot, go to Control Panel -> Add Windows Components -> Hyper-V)
* you have at least 20 GB of disk space, preferrably SSD

#### Steps:

* Download and install [Docker for Windows](https://docs.docker.com/docker-for-windows/)
* Create a file named `docker-compose.yml` that contains:
```
mongo:
  image: mongo:3.0
  command: mongod --smallfiles --oplogSize 128

rocketchat:
  image: rocketchat/rocket.chat:latest
  environment:
    - PORT=3000
    - ROOT_URL=http://docker:3000
    - MONGO_URL=mongodb://mongo:27017/rocketchat
  links:
    - mongo:mongo
  ports:
    - 3000:3000
```
* In the same directory as the above file, enter command `docker-compose up`
* Wait for the server to fully start, takes a couple of minutes
* Access your Rocket.Chat server at `http://docker:3000`
