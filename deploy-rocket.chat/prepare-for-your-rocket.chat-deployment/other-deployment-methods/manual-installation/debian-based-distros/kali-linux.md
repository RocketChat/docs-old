# Rocket.Chat on Kali Linux

Since Kali is a [Debian ](debian.md)distribution, the installation process is quite similar.

## Requirements

Depending on the version of [Rocket.Chat](https://rocket.chat/) you want to install, check the [release notes](https://github.com/RocketChat/Rocket.Chat/releases) to see the supported engine versions for MongoDB and NodeJs, and install as recommended.&#x20;

*   **MongoDB**

    Please refer to the official MongoDB documentation on installing [MongoDB on Debian](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/).&#x20;
*   **NodeJS**

    Follow the [official guide](https://github.com/nodesource/distributions/blob/master/README.md#debinstall) to install NodeJS on Debian. You can also use third-party tools like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [n](https://www.npmjs.com/package/n).

This installation guide was tested in the following environment:

* Rocket.Chat 3.9.0
* OS: Kali Rolling 2020.2
* Mongodb 4.0.19
* NodeJS 12.18.4

## Install necessary dependency packages

* Update the package list and configure apt to install the official MongoDB packages with the following repository file:

```bash
sudo apt-get -y update
```

```bash
sudo apt-get install -y dirmngr gnupg && sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
```

```bash
echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

* Configure Node.js to be installed via the package manager.

```bash
sudo apt-get -y update && sudo apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
```

* Install build tools, MongoDB and dependencies (libcurl3 and MongoDB server), NodeJS, and graphicsmagick.

```bash
sudo apt-get install -y build-essential libcurl3 mongodb-org-server mongodb-org nodejs graphicsmagick
```

* Using npm install inherits and n, and the node version required by Rocket.Chat.

```bash
sudo npm install -g inherits n && sudo n 12.18.4
```

## Install Rocket.Chat

* Download the latest Rocket.Chat version.

```bash
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```bash
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

* Install NPM.

{% hint style="info" %}
This guide uses /opt but feel free to choose a different directory.
{% endhint %}

```bash
cd /tmp/bundle/programs/server && npm install
```

```bash
sudo mv /tmp/bundle /opt/Rocket.Chat
```

## Configure the Rocket.Chat service

* Add the rocketchat user and set the right permissions on the Rocket.Chat folder.

```bash
sudo useradd -M rocketchat && sudo usermod -L rocketchat
```

```bash
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

* Create the Rocket.Chat service file.

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
EOF
```

* Open the service file  (`/lib/systemd/system/rocketchat.service`) using sudo and update the `ROOT_URL` environmental variable to reflect the URL you are using to access the server. Optionally, you can change `MONGO_URL`, `MONGO_OPLOG_URL` and `PORT`.

```bash
MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01
MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01
ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000
PORT=3000
```

* Set up storage engine and replication for MongoDB.&#x20;

```bash
sudo sed -i "s/^#  engine:/  engine: wiredTiger/"  /etc/mongod.conf
```

```bash
sudo sed -i "s/^#replication:/replication:\n  replSetName: rs01/" /etc/mongod.conf
```

Then, enable and start MongoDB and Rocket.Chat.

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

You might also want to add the following optional configurations:

* [Configure firewall rule](../../../../rocket.chat-environment-configuration/optional-configurations.md)&#x20;
* [Configure a HTTP reverse proxy to access Rocket.Chat server](../../../../rocket.chat-environment-configuration/configuring-ssl-reverse-proxy.md)&#x20;

## Configure your Rocket.Chat server

Open a web browser and access the configured ROOT\_URL (`http://your-host-name.com-as-accessed-from-internet:3000`). Follow the configuration steps to [set up an admin account and your organization and server info](../../../../../setup-and-administer-rocket.chat/accessing-your-workspace/rocket.chat-setup-wizard.md#setup-wizard).
