# Rocket.Chat in CentOS

This installation guide was tested in the following environment:

* Rocket.Chat 3.9.0
* OS: CentOS 7.6
* MongoDB 4.0.9
* NodeJS 12.18.4

{% hint style="info" %}
As from Rocket.Chat 4.4.0, NodeJS version 14.x.x is used.
{% endhint %}

## Install necessary dependency packages

Update package list and configure yum to install the official MongoDB packages with the following yum repository file:

```bash
sudo yum -y check-update
```

```bash
cat << EOF | sudo tee -a /etc/yum.repos.d/mongodb-org-4.0.repo
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/7/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
EOF
```

Configure Node.js to be installed via package manager:

```bash
sudo yum install -y curl && curl -sL https://rpm.nodesource.com/setup_12.x | sudo bash -
```

Install build tools, MongoDB, nodejs and graphicsmagick:

```bash
sudo yum install -y gcc-c++ make mongodb-org nodejs
```

```bash
sudo yum install -y epel-release && sudo yum install -y GraphicsMagick
```

Using npm install inherits and n, and the node version required by Rocket.Chat:

```bash
sudo npm install -g inherits n && sudo n 12.18.4
```

## Install Rocket.Chat

Download the latest Rocket.Chat version:

```bash
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```bash
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

Install (this guide uses /opt but feel free to choose a different directory):

```bash
cd /tmp/bundle/programs/server && npm installs
```

```bash
sudo mv /tmp/bundle /opt/Rocket.Chath
```

## Configure the Rocket.Chat service

Add the Rocket.Chat user, set the right permissions on the Rocket.Chat folder and create the Rocket.Chat service file:

```bash
sudo useradd -M rocketchat && sudo usermod -L rocketchat
```

```bash
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

```bash
cat << EOF |sudo tee -a /lib/systemd/system/rocketchat.service
[Unit]
Description=The Rocket.Chat server
After=network.target remote-fs.target nss-lookup.target nginx.service mongod.service
[Service]
ExecStart=/usr/local/bin/node /opt/Rocket.Chat/main.js
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=rocketchat
User=rocketchat
Environment=MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01 MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01 ROOT_URL=http://localhost:3000/ PORT=3000
[Install]
WantedBy=multi-user.target
EOFash
```

Open the Rocket.Chat service file just created (`/usr/lib/systemd/system/rocketchat.service`) using sudo and your favorite text editor, and change the ROOT\_URL environmental variable to reflect the URL you want to use for accessing the server (optionally change MONGO\_URL, MONGO\_OPLOG\_URL and PORT):

```bash
MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01
MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01
ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000
PORT=3000
```

Setup storage engine and replication for MongoDB (mandatory for versions > 1), and enable and start MongoDB and Rocket.Chat:

```bash
sudo sed -i "s/^#  engine:/  engine: mmapv1/"  /etc/mongod.conf
```

```bash
sudo sed -i "s/^#replication:/replication:\n  replSetName: rs01/" /etc/mongod.conf
```

```bash
sudo systemctl enable mongod && sudo systemctl start mongod
```

```bash
mongo --eval "printjson(rs.initiate())"
```

```bash
sudo systemctl enable rocketchat && sudo systemctl start rocketchat
```

## Optional configurations

[Configure firewall rule](../../../installing-and-updating/other-deployment-methods/manual-installation/extras/optional-configurations.md) [Configure a HTTP reverse proxy to access Rocket.Chat server](../../../installing-and-updating/other-deployment-methods/manual-installation/extras/configuring-ssl-reverse-proxy.md) \[Configure mongo access control] \[Configure production values for mongodb]

## Configure your Rocket.Chat server

Open a web browser and access the configured ROOT\_URL (`http://your-host-name.com-as-accessed-from-internet:3000`), follow the configuration steps to set an admin account and your organization and server info.

## ZLIB version problem

Some users had experienced problems starting Rocket.Chat server in CentOS because their zlib version is not compatible with Rocket.Chat.

If you find an error message similar to the following in the logs:

```bash
Exception in callback of async function: Error: /lib64/libz.so.1: version `ZLIB_1.2.9' not found
```

Add this environmental variable in the Rocket.Chat service file (/usr/lib/systemd/system/rocketchat.service):

Environment=LD\_PRELOAD=/opt/Rocket.Chat/programs/server/npm/node\_modules/sharp/vendor/lib/libz.so

## Troubleshooting

**502 Bad Gateway**

If you are installing Rocket.Chat on CentOS or RHEL you may encounter a 502 Bad Gateway error after setting up set up a reverse proxy with Nginx. To fix this you need to enable loopback for your upstream in SELinux.

```
setsebool -P httpd_can_network_connect 1
```
