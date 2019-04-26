# Rocket.Chat in CentOS

This tutorial was tested using CentOS 7.5 and Rocket.Chat 0.70.0.

Rocket.Chat recommends MongoDB version 3.6 and NodeJS version 8.11.3.

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
sudo yum install -y gcc-c++ make mongodb-org nodejs
```

```
sudo yum install -y epel-release && sudo yum install -y GraphicsMagick
```

Using npm install inherits and n, and the node version required by Rocket.Chat:

```
sudo npm install -g inherits n && sudo n 8.11.3
```

## Install Rocket.Chat

Download the latest Rocket.Chat version:

```
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

Install (this tutorial uses /opt but feel free to choose a different directory):

```
cd /tmp/bundle/programs/server && npm install
```

```
sudo mv /tmp/bundle /opt/Rocket.Chat
```

## Configure the Rocket.Chat service

Add the rocketchat user, set the right permissions on the Rocket.Chat folder and create the Rocket.Chat service file:

```
sudo useradd -M rocketchat && sudo usermod -L rocketchat
```

```
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

```bash
echo -e "[Unit]\nDescription=The Rocket.Chat server\nAfter=network.target remote-fs.target nss-lookup.target nginx.target mongod.target\n[Service]\nExecStart=/usr/local/bin/node /opt/Rocket.Chat/main.js\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=rocketchat\nUser=rocketchat\nEnvironment=LD_PRELOAD=/opt/Rocket.Chat/programs/server/npm/node_modules/sharp/vendor/lib/libz.so NODE_ENV=production MONGO_URL=mongodb://localhost:27017/rocketchat ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000/ PORT=3000\n[Install]\nWantedBy=multi-user.target" | sudo tee /usr/lib/systemd/system/rocketchat.service
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

## Optional configurations

If you are using firewalld and not using a reverse proxy, you probably have to open Port 3000:

```
sudo firewall-cmd --permanent --add-port=3000/tcp
```

```
sudo systemctl reload firewalld
```

## Additional configurations

[Configure replicas for your MongoDB (recommended for production environments)](../mongo-replicas/)

[Configure a HTTP reverse proxy to access Rocket.Chat server](../configuring-ssl-reverse-proxy/)

## Configure your Rocket.Chat server

Once decided if going for a standalone instance or a replica set in MongoDB, open a web browser and access the configured ROOT_URL (`http://your-host-name.com-as-accessed-from-internet:3000`), follow the configuration steps to set an admin account and your organization and server info.
