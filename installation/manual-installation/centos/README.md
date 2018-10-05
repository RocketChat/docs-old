# Rocket.Chat in CentOS

This tutorial was tested using CentOS 7.5 and Rocket.Chat 0.70.0.

Rocket.Chat recommends MongoDB version 3.6 and NodeJS version is 8.11.3.

## Install necessary dependency packages

Configure yum to install the official MongoDB packages with the following yum repository file:

```
echo -e "[mongodb-org-3.6]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/7/mongodb-org/3.6/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc" | sudo tee /etc/yum.repos.d/mongodb-org-3.6.repo
```

Configure Node.js to be installed via package manager:

```
sudo yum install -y curl && curl -sL https://rpm.nodesource.com/setup_8.x | sudo bash -
```

Install build tools, MongoDB, nodejs and graphicsmagick:

```
sudo yum install -y gcc-c++ make mongodb-org nodejs graphicsmagick 
```

Using npm install inherits and n, and the node version requiered by Rocket.Chat:

```
sudo npm install -g inherits n && sudo n 8.11.3 
```

## Install Rocket.Chat

Download Rocket.Chat latest version:

```
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz 
```

```
tar -xzf /tmp/rocket.chat.tgz -C /tmp && mv /tmp/bundle /tmp/Rocket.Chat 
```

Install:

```
cd /tmp/Rocket.Chat/programs/server && npm install 
```

## Configure the Rocket.Chat service

Add the user rocketchat, set the right permissions on Rocket.Chat folder (this guide uses /opt but change it as convenience) and create the Rocket.Chat service file:

```
sudo useradd -M rocketchat && sudo usermod -L rocketchat
```

```
sudo mv /tmp/Rocket.Chat /opt/Rocket.Chat
```

```
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat 
```

```
echo -e "[Unit]\nDescription=The Rocket.Chat server\nAfter=network.target remote-fs.target nss-lookup.target nginx.target mongod.target\n[Service]\nExecStart=/usr/local/bin/node /opt/Rocket.Chat/main.js\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=rocketchat\nUser=rocketchat\nEnvironment=MONGO_URL=mongodb://localhost:27017/rocketchat ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000/ PORT=3000\n[Install]\nWantedBy=multi-user.target" | sudo tee /usr/lib/systemd/system/rocketchat.service
```

Open the Rocket.Chat service file just created (`/usr/lib/systemd/system/rocketchat.service`) using sudo and your favourite text editor, and change the ROOT_URL environmental variable to reflect the URL you want to use for accessing the server (optionally change MONGO_URL and PORT):

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

## Configure your Rocket.Chat server

Open a web browser and access the configured ROOT_URL (http://your-host-name.com-as-accessed-from-internet:3000), follow the configuration steps to set an admin account and your company profile.

## Optional configurations

If you are using firewalld, probably you will need to open port 3000:

```
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo systemctl reload firewalld
```

## Additional configurations

[Configure replicas for your MongoDB](https://rocket.chat/docs/installation/manual-installation/ubuntu/index.html#setup-mongodb-replica-set)

[Configure a HTTP reverse proxy for accessing Rocket.Chat server](https://rocket.chat/docs/installation/manual-installation/configuring-ssl-reverse-proxy/)
