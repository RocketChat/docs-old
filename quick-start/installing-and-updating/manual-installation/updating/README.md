---
description: Updating Manual Installation
---

# Updating

Usually you can update Rocket.Chat server pretty easily.

Stop Rocket.Chat service:

```
sudo systemctl stop rocketchat
```

Remove the installation folder, usually in /opt:

```
sudo rm -rf /opt/Rocket.Chat
```

Make sure you have the needed build packages Debian

```
sudo apt-get install -y build-essential graphicsmagick
```

Centos

```
sudo yum install -y gcc-c++ make
```

Update the node version required by Rocket.Chat:

{% hint style="info" %}
As from Rocket.Chat `V4`, node version migrated from `12.x.x` to `14.x.x`
{% endhint %}

```
sudo n install 14.0.0
```

Download Rocket.Chat latest version:

```
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

Install it and set right permissions to Rocket.Chat folder:

```
cd /tmp/bundle/programs/server && npm install
```

```
sudo mv /tmp/bundle /opt/Rocket.Chat
```

```
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

Start the service:

```
sudo systemctl start rocketchat
```

Please also have a look at the installation documentation for your method of deployment to check for paragraphs that refer to the process of updating.

There might be some major changes when we introduce big new features or modifications, you can always take a look on the [releases page](https://github.com/RocketChat/Rocket.Chat/releases) to see what has been changed, broken or added to Rocket.Chat.

You can see older major changes here:

* [0.x.x to 0.40.0](from-0-x-x-to-0-40-0.md)

## Caveats on upgrading your standalone Rocket.Chat database

### Replicasets

Any version after v1.0.x requires replicasets/oplogging enabled on Mongo.

eg. [https://rocket.chat/docs/installation/manual-installation/mongo-replicas](https://rocket.chat/docs/installation/manual-installation/mongo-replicas)

### Upgrading the database

Due to Mongo DB schema changes between versions it is recommended to upgrade your database one Rocket.Chat version at a time to avoid database issues.

Do _not_ backup from one version and try to restore to another eg:

You have Rocket.Chat 0.65.x

Do not try to backup the database and restore to direct to another version e.g. Rocket.Chat 1.2.x

Follow this procedure:

* Backup DB -> \~/Rocket/Backup/v0.65
* Upgrade Rocket one version eg 0.65.x -> 0.66.x
* Check for errors
* Backup DB -> \~/Rocket/Backup/v0.66
* Upgrade Rocket one version eg 0.66.x -> 0.67.x
* Check for errors - if you discover any, stop and fix them or go back to the previous version and start again
* Repeat

(this is a very good reason to keep reasonably up to date with Rocket.Chat versions)

Please check the [Tags](https://github.com/RocketChat/Rocket.Chat/tags) or Releases as above for the required version infomation.
