# Deploying Rocket.Chat Server Binaries on a FreeBSD system

__Note: This deployment method is not officially supported by Rocket.Chat, you might need to build your own or find a community version of the tar file.__

This is the recommended production deployment method on and is based on the excellent [Meteor Universal fork](http://meteor-universal.tumblr.com/) by Tom Freudenberg.

As `root`:

```
# pkg install bash git GraphicsMagick mongodb python scons gmake
# sysrc mongod_enable=YES
# service mongod start
# pw groupadd rocketchat
# pw useradd rocketchat -g rocketchat -s /usr/local/bin/bash -m
# su -l rocketchat
```

As user running Rocket.Chat:

```
$ git clone --depth 1 -b release-1.2.1-universal https://github.com/4commerce-technologies-AG/meteor
$ cd meteor
$ ./meteor --version
$ cd $HOME
$ tar xf rocket.chat-freebsd-develop.tgz
$ cd $HOME/bundle/programs/server
$ $HOME/meteor/dev_bundle/bin/npm install
$ cd $HOME/bundle
$ export MONGO_URL=mongodb://localhost:27017/rocketchat
$ export Accounts_UseDNSDomainCheck=false
$ export ROOT_URL=http://your.host:3000
$ export PORT=3000
$ export ADMIN_PASS=supersecret
$ export ADMIN_USER=admin
$ $HOME/meteor/dev_bundle/bin/node $HOME/bundle/main.js
```

A very crude startup file for the server, (very ugly, does not fork, don't set rocketchat_enable=YES):

```
#!/bin/sh

# PROVIDE: rocketchat
# REQUIRE: LOGIN mongod
# KEYWORD: shutdown
#
# Add the following lines to /etc/rc.conf.local or /etc/rc.conf
# to enable this service:
#
# rocketchat_enable (bool): Set to "NO" by default.
# rocketchat_env (str): List of environment variables passed to rocketchat
#

. /etc/rc.subr

name="rocketchat"
rcvar=rocketchat_enable

load_rc_config $name

: ${rocketchat_enable="NO"}
: ${rocketchat_env="MONGO_URL=mongodb://localhost:27017/rocketchat PORT=3000"}
: ${rocketchat_user="rocketchat"}
: ${rocketchat_group="rocketchat"}

command=/home/rocketchat/meteor/dev_bundle/bin/node
command_args="/home/rocketchat/Rocket.Chat/.meteor/local/build/main.js"

run_rc_command "$1"
```
