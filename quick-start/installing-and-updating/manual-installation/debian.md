# Rocket.Chat on Debian

This installation guide was tested in the following environment:

* Rocket.Chat 4.1.2
* OS: Debian 11
* Mongodb 4.4.10
* NodeJS 12.22.7

{% hint style="info" %}
As from Rocket.Chat 4.4.0, NodeJS version 14.0.0 is used.
{% endhint %}

## Install necessary dependencies

*   **MongoDB**

    Please refer to the official MongoDB documentation on [how to install MongoDB on Debian](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/). For the list of supported versions, see our documentation [here](https://docs.rocket.chat/getting-support#mongodb-versions).
*   **NodeJS**

    Read the [official guide](https://github.com/nodesource/distributions/blob/master/README.md#debinstall) to install NodeJS on a Debian system. As of the time of this writing Rocket.Chat supports NodeJS version 12, so make sure you're installing that. You can also use third party tools like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [n](https://www.npmjs.com/package/n).

## Install Rocket.Chat

To download the latest Rocket.Chat version run the following command:

```bash
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

You can also use `wget`.

```
wget https://releases.rocket.chat/latest/download -O /tmp/rocket.chat.tgz
```

You can also download a specific version by replacing `latest` by the version number. E.g.

```
wget https://releases.rocket.chat/4.1.2/download -O /tmp/rocket.chat.tgz
```

Extract the archive with `tar`:

```bash
tar xzf /tmp/rocket.chat.tgz -C /tmp
```

You should now see a new directory under `/tmp` named `bundle`.

Next, install all the node dependencies:

```bash
(cd /tmp/bundle/programs/server; npm i)
```

`/tmp` has been a temporary non-root user writable location to prepare the bundle. For this guide we're going to use `/opt` to be the final location but you can choose any other. Whatever may it be, if not `/opt`, make sure you change the location in all the other places it is specified.

```bash
sudo mv /tmp/bundle /opt/Rocket.Chat
```

## Configure the Rocket.Chat service

Add the rocketchat user, set the right permissions on the Rocket.Chat folder and create the Rocket.Chat service file:

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
Environment=MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01 
Environment=MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01 
Environment=ROOT_URL=http://localhost:3000/ 
Environment=PORT=3000
[Install]
WantedBy=multi-user.target
EOF
```

Open the Rocket.Chat service file just created (`/lib/systemd/system/rocketchat.service`) using sudo and your favourite text editor, and change the `ROOT_URL` environmental variable to reflect the URL you want to use for accessing the server (optionally change `MONGO_URL`, `MONGO_OPLOG_URL` and `PORT`):

```bash
MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01
MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01
ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000
PORT=3000
```

### MongoDB Configuration

Open the MongoDB config file (`/etc/mongod.conf`) in your favourite text editor. It is a simple YAML file.

Set the storage engine to `wiredTiger`.

```
storage:
  engine: wiredTiger
```

Enable replication, and name the replicaset `rs01`.&#x20;

```bash
replication:
  replSetName: rs01
```

MongoDB replicaset is mandatory for Rocket.Chat > 1.0.0.

Your MongoDB config file should look something like the following:

```
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
  engine: wiredTiger

systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

net:
  port: 27017
  bindIp: 127.0.0.1

processManagement:
  fork: true
  timeZoneInfo: /usr/share/zoneinfo

replication:
  replSetName: rs01
```

For a full list of available MongoDB config options read their [official documentation](https://docs.mongodb.org/manual/reference/configuration-options/).

Start MongoDB with the following command:

```bash
sudo systemctl enable --now mongod
```

Create the replicaset:

```bash
mongo --eval "printjson(rs.initiate())"
```

You can start Rocket.Chat now.

```bash
sudo systemctl enable --now rocketchat
```

## Optional configurations

* [Configure firewall rule](optional-configurations.md)&#x20;
* [Configure a HTTP reverse proxy to access Rocket.Chat server](configuring-ssl-reverse-proxy.md)&#x20;
* \[Configure mongo access control]&#x20;
* \[Configure production values for mongodb]

## Configure your Rocket.Chat server

Open a web browser and access the configured ROOT\_URL (`http://your-host-name.com-as-accessed-from-internet:3000`), follow the configuration steps to set an admin account and your organization and server info.
