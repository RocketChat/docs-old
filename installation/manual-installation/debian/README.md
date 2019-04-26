# Rocket.Chat on Debian

This tutorial was tested on Debian 9 using Rocket.Chat 0.70.0

Rocket.Chat recommends MongoDB version 3.6 and NodeJS version is 8.11.3.

## Install necessary dependency packages

Import the public key used by apt to install the official MongoDB packages and create the following list file:

```
sudo apt-get install dirmngr && sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
```

```bash
echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/3.6 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
```

Configure Node.js to be installed via package manager:

```
sudo apt-get update && sudo apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
```

Install build tools, MongoDB, nodejs and graphicsmagick:

```
sudo apt-get install -y build-essential mongodb-org nodejs graphicsmagick
```

Using npm install inherits and n, and the node version requiere by Rocket.Chat:

```
sudo npm install -g inherits n && sudo n 8.11.3
```

## Install Rocket.Chat

Download Rocket.Chat latest version:

```
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

Install (this tutorial uses /opt but change it as convenience):

```
cd /tmp/bundle/programs/server && npm install
```

```
sudo mv /tmp/bundle /opt/Rocket.Chat
```

## Configure the Rocket.Chat service

Add the user rocketchat, set the right permissions on Rocket.Chat folder and create the Rocket.Chat service file:

```
sudo useradd -M rocketchat && sudo usermod -L rocketchat
```

```
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

```bash
echo -e "[Unit]\nDescription=The Rocket.Chat server\nAfter=network.target remote-fs.target nss-lookup.target nginx.target mongod.target\n[Service]\nExecStart=/usr/local/bin/node /opt/Rocket.Chat/main.js\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=rocketchat\nUser=rocketchat\nEnvironment=MONGO_URL=mongodb://localhost:27017/rocketchat ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000/ PORT=3000\n[Install]\nWantedBy=multi-user.target" | sudo tee /lib/systemd/system/rocketchat.service
```

Open the Rocket.Chat service file just created (`/lib/systemd/system/rocketchat.service`) using sudo and your favourite text editor, and change the ROOT_URL environmental variable to reflect the URL you want to use for accessing the server (optionally change MONGO_URL and PORT):

```
MONGO_URL=mongodb://localhost:27017/rocketchat
ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000
PORT=3000
```

Enable and start MongoDB and Rocket.Chat:

```
sudo systemctl enable mongod && sudo systemctl start mongod
```

```
sudo systemctl enable rocketchat && sudo systemctl start rocketchat
```

## Additional configurations

[Configure replicas for your MongoDB (recommended for production environments)](../mongo-replicas/)

[Configure a HTTP reverse proxy to access Rocket.Chat server](../configuring-ssl-reverse-proxy/)

## Configure your Rocket.Chat server

Once decided if going for a standalone instance or a replica set in MongoDB, open a web browser and access the configured ROOT_URL (`http://your-host-name.com-as-accessed-from-internet:3000`), follow the configuration steps to set an admin account and your organization and server info.

