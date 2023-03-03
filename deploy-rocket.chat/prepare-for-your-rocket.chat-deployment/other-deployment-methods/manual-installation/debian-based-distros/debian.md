# Rocket.Chat on Debian

This installation guide was tested in the following environment:

* Rocket.Chat 4.6.0
* OS: Debian 11, 10, 9
* Mongodb 5.0
* NodeJS 14.18.3

## Requirements

* **Install MongoDB:** Please refer to the official MongoDB documentation on [how to install MongoDB on Debian](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/). For the list of supported versions, see our documentation [here](../../../../../resources/get-support/#mongodb-versions).
* **Install NodeJS:** Follow the [official guide](https://github.com/nodesource/distributions/blob/master/README.md#debinstall) to install NodeJS on a Debian system. Check out our page on [supported node versions](../../../../rocket.chat-environment-configuration/node-configuration/supported-nodejs-version.md) for your specific version. You can also use third-party tools like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [n](https://www.npmjs.com/package/n).

## Install Rocket.Chat

* Update your system by running

```bash
sudo apt -y update
sudo apt -y upgrade
```

* Install required packages/dependencies

```bash
sudo apt install -y curl build-essential graphicsmagick
```

* To download the latest Rocket.Chat version run the following command:

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

* Extract the archive with `tar`:

```bash
tar xzf /tmp/rocket.chat.tgz -C /tmp
```

You should now see a new directory under `/tmp` named `bundle`.

* Next, install all the node dependencies:

```bash
(cd /tmp/bundle/programs/server; npm i)
```

If you're doing all this under the `root` user, which is not recommended, you'll need to pass the `--unsafe-perm` flag to npm along with `sudo`.

`/tmp` has been a temporary non-root user-writable location to prepare the bundle. For this guide, we're going to use `/opt` to be the final location but you can choose any other. Whatever may it be, if not`/opt`, make sure you change the location in all the other places it is specified.

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

Depending on how you install NodeJs, the path to the binary can be different. Save the current path in a variable

```bash
NODE_PATH=$(which node)
```

Now create the systemd service file

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

Next you need to pass some environment variables to the running process. For more information of configuring via environment variables read [this article](../../../../rocket.chat-environment-configuration/environment-variables.md).

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

* [Configure firewall rule](../../../../rocket.chat-environment-configuration/optional-configurations.md)
* [Configure a HTTP reverse proxy to access Rocket.Chat server](../../../../rocket.chat-environment-configuration/configuring-ssl-reverse-proxy.md)
* [Configure mongo access control](../../../../rocket.chat-environment-configuration/mongodb-configuration/mongodb-uri-authentication.md)
* [Configure production values for mongodb](../../../../rocket.chat-environment-configuration/mongodb-configuration/mongo-options.md)

## Configure your Rocket.Chat server

Open a web browser and access the configured ROOT\_URL (`http://your-host-name.com-as-accessed-from-internet:3000`), follow the configuration steps to set up an admin account and your organization and server info.
