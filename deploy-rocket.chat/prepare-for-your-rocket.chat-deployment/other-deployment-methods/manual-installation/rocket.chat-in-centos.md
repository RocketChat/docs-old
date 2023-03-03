# Rocket.Chat in CentOS

### Requirements

Depending on the version of [Rocket.Chat](https://rocket.chat/) you want to install, check the [release notes](https://github.com/RocketChat/Rocket.Chat/releases) to see the supported engine versions for MongoDB and NodeJs, and install as recommended.&#x20;

*   **MongoDB**

    Please refer to the official MongoDB documentation on [installing MongoDB on CentOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-red-hat/).&#x20;
*   **NodeJS**

    Follow the [official guide](https://nodejs.org/en/download/package-manager/#centos-fedora-and-red-hat-enterprise-linux) to install NodeJS on CentOS. You can also use third-party tools like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [n](https://www.npmjs.com/package/n).

### Install Rocket.Chat

* Install the required dependency packages.

```bash
sudo yum install -y GraphicsMagick
```

* Download and extract the [latest release ](https://github.com/RocketChat/Rocket.Chat/releases/latest)of Rocket.Chat.

```bash
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

* Extract the Rocket.Chat server files.

```bash
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

```bash
cd /tmp/bundle/programs/server && npm install
```

* Move the extracted files to the _/opt_ directory.

```bash
sudo mv /tmp/bundle /opt/Rocket.Chat
```

{% hint style="info" %}
This guide uses the _/opt directory_. However, you can choose your preferred directory.
{% endhint %}

## Configure the Rocket.Chat service

* Add the Rocket.Chat user and set the proper permissions on the Rocket.Chat folder.

```bash
sudo useradd -M rocketchat && sudo usermod -L rocketchat
```

```bash
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

* Create the Rocket.Chat service file.

```
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

* &#x20;Using `sudo` and your preferred text editor, open the Rocket.Chat service file just created (`/usr/lib/systemd/system/rocketchat.service`). Change the `ROOT_URL` environmental variable to reflect the URL you want to access the server with.  Optionally, you can change the `MONGO_URL`, `MONGO_OPLOG_URL` and `PORT` variables.

```
MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01
MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01
ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000
PORT=3000
```

* Set up the storage engine and replication for MongoDB.

```
sudo sed -i "s/^#  engine:/  engine: mmapv1/"  /etc/mongod.conf
```

```
sudo sed -i "s/^#replication:/replication:\n  replSetName: rs01/" /etc/mongod.conf
```

{% hint style="warning" %}
The MongoDB replica set is mandatory for Rocket.Chat > 1.0.0.
{% endhint %}

* Enable and start MongoDB.

```
sudo systemctl enable mongod && sudo systemctl start mongod
```

```
mongo --eval "printjson(rs.initiate())"
```

* Enable and start Rocket.Chat

```
sudo systemctl enable rocketchat && sudo systemctl start rocketchat
```

## Configure your Rocket.Chat server

Open a web browser, and go to the configured ROOT URL (http://your-host-name.com-as-accessed-from-internet:3000). Follow the configuration prompts to [set up an admin account, your server info, and your organization info.](https://docs.rocket.chat/setup-and-configure/accessing-your-workspace/rocket.chat-setup-wizard#setup-wizard)

## Troubleshooting

### **502 Bad Gateway**

When installing Rocket.Chat on CentOS or RHEL, you may encounter a `502 Bad Gateway` error after setting up a reverse proxy with Nginx. To fix this, enable loopback for your upstream in SELinux.

```
setsebool -P httpd_can_network_connect 1
```

### ZLIB version problem

Some users had experienced problems starting Rocket.Chat server in CentOS because their zlib version is not compatible with Rocket.Chat.

If you find an error message similar to the following in the logs:

```bash
Exception in callback of async function: Error: /lib64/libz.so.1: version `ZLIB_1.2.9' not found
```

Add this environmental variable to the Rocket.Chat service file `(/usr/lib/systemd/system/rocketchat.service)`:

```
Environment=LD_PRELOAD=/opt/Rocket.Chat/programs/server/npm/node_modules/sharp/vendor/lib/libz.so
```
