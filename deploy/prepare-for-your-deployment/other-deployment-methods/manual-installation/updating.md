---
description: Updating Manual Installation
---

# Updating

To update the Rocket.Chat server deployed via manual installation,&#x20;

* Stop Rocket.Chat service:

```
sudo systemctl stop rocketchat
```

* Remove the installation folder, usually in _/opt_

```
sudo rm -rf /opt/Rocket.Chat
```

* Ensure you have the needed build packages for Debian

```
sudo apt-get install -y build-essential graphicsmagick
```

* Update the node version required by Rocket.Chat. Check the supported engine versions for MongoDB and NodeJs, and install as recommended.&#x20;

```
sudo n install 14.0.0
```

* Download Rocket.Chat latest version:

```
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

* Install it and set the proper permissions to Rocket.Chat folder.

```
cd /tmp/bundle/programs/server && npm install
```

```
sudo mv /tmp/bundle /opt/Rocket.Chat
```

```
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

* Start the service.

```
sudo systemctl start rocketchat
```

{% hint style="info" %}
Always look out for the [release notes](https://github.com/RocketChat/Rocket.Chat/releases) and [tags](https://github.com/RocketChat/Rocket.Chat/tags) to see updates and versions you can update.
{% endhint %}

## Caveats on upgrading your standalone Rocket.Chat database

### Replica sets

Any version after `1.0.x` requires `replicasets/oplogging` enabled on Mongo. To learn more, see [mongo replicas](https://rocket.chat/docs/installation/manual-installation/mongo-replicas).

### Upgrading the database

It is advised to upgrade your database version one at a time to avoid database problems due to the MongoDB schema changes between releases.&#x20;

Never attempt to restore the database from a backup of one version to another. For example, if you have Rocket.Chat `0.65.x`, don't back up the database and restore directly to another  Rocket.Chat version `1.2.x`. However, follow these steps to upgrade your database:

* Backup DB -> \~/Rocket/Backup/v0.65
* Upgrade Rocket.Chat by one version, e.g., 0.65.x -> 0.66.x
* Check for errors.
* Backup DB -> \~/Rocket/Backup/v0.66
* Upgrade Rocket one version, e.g., 0.66.x -> 0.67.x
* Look out for errors. If you discover any, stop and fix them, or return to the previous version and start again.
* Repeat

## Updating from 0.x.x to 0.40.0

Rocket.Chat is switching from requiring Node.js v`0.10.44` to Node.js `v4.8.4 LTS` with the release of the version `0.40.0`. You don't have to do anything if you use Docker or any other cloud installation technique.

To update the server,

* Firstly, stop Rocket.Chat
* Using `n` to manage the Node.js version, update the node version.

```
sudo n 4.8.4
```

## Updating to 1.0

Rocket.Chat 1.0 requires `oplog` to be enabled. Attempting to start Rocket.Chat without `oplog` will result in an error.

To enable `oplog`,&#x20;

* Connect to mongo, and type `rs.initiate()`.
* Then,  provide the `MONGO_OPLOG_URL` environment URL. If mongo is on the same host, the environment variable will look like this:

```
MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01
```

{% hint style="info" %}
To learn more,  [see configure a replica set with MongoDB](https://docs.rocket.chat/installation/manual-installation/mongo-replicas/).
{% endhint %}

#### &#x20;Mongo Authentication

You might also need to give your user the cluster monitor role if using mongo authentication.

```
admin = db.getSiblingDB("admin");
admin.grantRolesToUser('OPLOGUSER',[{ role: "clusterMonitor", db: "admin" }])
admin.grantRolesToUser('ROCKETUSER',[{ role: "clusterMonitor", db: "admin" }])
```

{% hint style="info" %}
Replace the users with the names you have chosen for your users.
{% endhint %}
