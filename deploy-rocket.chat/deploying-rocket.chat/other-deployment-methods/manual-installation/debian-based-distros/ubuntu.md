# Rocket.Chat on Ubuntu

## Recommended Fastest Server Install

We recommend installing using our[ Docker and Docker Compose guide](../../../rapid-deployment-methods/docker-and-docker-compose/) or using [Snaps](../../../rapid-deployment-methods/snaps/) as they are the easiest way for you to get your server up and running on all supported Linux distributions (Ubuntu, etc).

If you would like to enable TLS on your site like this `https://yoursite.com` when using the snap, please [this guide](../../../rapid-deployment-methods/snaps/auto-ssl-with-snaps.md)

## Manual install

Follow this guide to manually install Rocket.Chat.

### Requirements

{% hint style="info" %}
We recommend installing on any Ubuntu version with LTS.
{% endhint %}

*   **MongoDB**

    Please refer to the official MongoDB documentation on [how to install MongoDB on Ubuntu](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/). For the list of supported versions, see our documentation [here](../../../../../resources/getting-support/#mongodb-versions).
*   **NodeJS**

    Follow the [official guide](https://github.com/nodesource/distributions/blob/master/README.md#debinstall) to install NodeJS on a Debian system. Check out our page on [supported node version](../../../../environment-configuration/node-configuration/supported-nodejs-version.md) for your specific version. You can also use third-party tools like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [n](https://www.npmjs.com/package/n).

## Install Rocket.Chat

Install required packages/dependencies

```bash
sudo apt install -y curl build-essential graphicsmagick
```

Download the latest Rocket.Chat version:

```bash
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```bash
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

Install (this guide uses /opt but feel free to choose a different directory):

```bash
cd /tmp/bundle/programs/server && npm install --production
```

If you're using the `root` account (not recommended), you'll have to use `sudo npm install --unsafe-perm --production` instead of the above.

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

Depending on how you install node, the binary path may be different. Save it to a variable.

```bash
NODE_PATH=$(which node)
```

Now save the systemd service file,

```bash
cat << EOF |sudo tee -a /lib/systemd/system/rocketchat.service
[Unit]
Description=The Rocket.Chat server
After=network.target remote-fs.target nss-lookup.target nginx.service mongod.service
[Service]
ExecStart=$NODE_PATH /opt/Rocket.Chat/main.js
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=rocketchat
User=rocketchat
[Install]
WantedBy=multi-user.target
EOF
```

The command above will create a barebone service file, this service file is what systemd will use to start your Rocket.Chat daemon/process.

### Passing environment variables

Next you need to pass some environment variables to the running process. For more information of configuring via environment variables read [this article](../../../../environment-configuration/environment-variables.md).

Run:

```
sudo systemctl edit rocketchat
```

It should open up a text editor. Now write down the following,

```
[Service]
Environment=ROOT_URL=http://localhost:3000
Environment=PORT=3000
Environment=MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01
Environment=MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01
```

Change the values as you need. Save and exit.

### MongoDB Configuration

Open the MongoDB config file (`/etc/mongod.conf`) in your favorite text editor. It is a simple YAML file.

Set the storage engine to `wiredTiger`.

```yaml
storage:
  engine: wiredTiger
```

Enable replication, and name the replicaset `rs01`.

```yaml
replication:
  replSetName: rs01
```

MongoDB replicaset is mandatory for Rocket.Chat > 1.0.0.

Your MongoDB config file should look something like the following:

```yaml
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

[Configure firewall rule](../../../../environment-configuration/optional-configurations.md) [Configure a HTTP reverse proxy to access Rocket.Chat server](../../../../environment-configuration/configuring-ssl-reverse-proxy.md) \[Configure mongo access control] \[Configure production values for mongodb]

## Configure your Rocket.Chat server

Open a web browser and access the configured ROOT\_URL (`http://your-host-name.com-as-accessed-from-internet:3000`), follow the configuration steps to set up an admin account and your organization and server info.
