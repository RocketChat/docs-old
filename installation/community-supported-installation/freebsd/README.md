---
description: Deploying Rocket.Chat on FreeBSD
---

# FreeBSD

_Note: This is a community supported installation method. You can discuss about this in the_ [_forum thread_](https://forums.rocket.chat/t/freebsd-installation-guide/651)_._

## Prerequisites

Valid for:

* FreeBSD 10.3-RELEASE

\(64bit, meteor's development scripts will not compile under 32bit\)

_Please use a fresh system without traces of node or npm. Most of my initial problems came from old and/or special versions of node/npm/meteor_

## Packages

You need to install the following packages either as root or via sudo:

```text
$ sudo pkg install git scons python gcc48 gmake npm bash wget
```

Also install mongodb if you will be running the database setup on this server as well.

If you get the following output:

```text
The package management tool is not yet installed on your system.
Do you want to fetch and install it now? [y/N]:
```

It's just because the pkg-ng binary package system have not been setup / bootstraped yet. Simply choose yes \(y\) here. And press enter.

### Installing pm2

We need pm2 later to daemonize or Rocket.Chat build.

Now, install pm2:

```text
$ sudo npm install pm2 -g
$ sudo pm2 startup freebsd
```

## Add user for Rocket.Chat

This user will be the one used for running Rocket.Chat server.

```text
$ adduser
Username: rocketchat
Full name: User used for running rocket chat
Uid (Leave empty for default): *press enter*
Login group [rocketchat]: *press enter*
Login group is rocketchat. Invite rocketchat into other groups? []: *press enter*
Login class [default]: *press enter*
Shell (sh csh tcsh git-shell bash rbash nologin) [sh]: bash
Home directory [/home/rocketchat]: *press enter, or pick where you want your Rocket.Chat installation to be*
Home directory permissions (Leave empty for default): *press enter*
Use password-based authentication? [yes]: *press enter*
Use an empty password? (yes/no) [no]: *press enter*
Use a random password? (yes/no) [no]: yes
Lock out the account after creation? [no]: *press enter*
Username   : rocketchat
Password   : <random>
Full Name  : User used for running Rocket.Chat
Uid        : 1001
Class      :
Groups     : rocketchat
Home       : /home/rocketchat
Home Mode  :
Shell      : /usr/local/bin/bash
Locked     : no
OK? (yes/no): yes
adduser: INFO: Successfully added (rocketchat) to the user database.
adduser: INFO: Password for (rocketchat) is: qGn&j9nXBx&j*C#u
Add another user? (yes/no): no
```

Be sure to save the password somewhere safe if you will need to login as the Rocket.Chat user in the future.

### Switch to the newly created user

```text
$ su -l rocketchat
```

\(Or what ever username you picked\).

## Building the dev\_bundle

### Setting up the environment

Set some environment Variables to make the build work under FreeBSD:

```text
$ export MAKE_CMD=gmake
$ export CXX=clang++
$ export CC=clang
```

`MAKE_CMD=gmake` is important, because meteor requires GNU make to build. The fork we will be building lets us set `MAKE_CMD` so we don't have to do nasty stuff to our BSD make.

### Building meteor

We need a fork of meteor which allows us to set `MAKE_CMD` as mentioned before:

```text
$ cd $HOME
$ git clone -b freebsd https://github.com/williambr/meteor
```

Meteor comes with scripts to build it:

```text
$ cd meteor
$ ./scripts/build-mongo-for-dev-bundle.sh
$ ./scripts/build-node-for-dev-bundle.sh
$ ./scripts/generate-dev-bundle.sh
```

\(These commands might take a long time to run depending on your hardware\)

After compiling the development bundles above test out the meteor setup

```text
$ ./meteor --version
```

This should give you output:

```text
It's the first time you've run Meteor from a git checkout.
I will download a kit containing all of Meteor's dependencies.
Skipping download and installing kit from /usr/home/rocketchat/meteor2/dev_bundle_FreeBSD_amd64_0.5.16.tar.gz
*** SNIPPED HERE ***
Unreleased, running from a checkout at 9719021 (HEAD -> freebsd, origin/freebsd)
```

This should output no errors \(Also version numbers might change\).

#### Troubleshooting

That should run without problems. If you run into issues check the following:

* is the Environment setup right?
* Are the scripts running in bash?
* do I have `gmake` installed?

## Running Rocket.Chat

First, we need the `meteor` binary in our `$PATH`

```text
$ export PATH=$PATH:$HOME/meteor
```

Next, we need to download Rocket.Chat:

```text
$ cd $HOME
$ git clone https://github.com/RocketChat/Rocket.Chat.git
$ cd Rocket.Chat
```

We need to install bcrypt separately.

```text
$ npm install --clang=1 bcrypt
```

After that: Go ahead and start Rocket.Chat!

```text
$ meteor
```

The first launch of Rocket.Chat might take some time as its installing dependencies. If all goes well you would see output like this:

```text
=> App running at: http://localhost:3000/
I20160422-21:52:50.733(2)? ➔ System ➔ startup
I20160422-21:52:50.734(2)? ➔ +----------------------------------------+
I20160422-21:52:50.735(2)? ➔ |             SERVER RUNNING             |
I20160422-21:52:50.735(2)? ➔ +----------------------------------------+
I20160422-21:52:50.736(2)? ➔ |                                        |
I20160422-21:52:50.737(2)? ➔ |       Version: 0.27.0                  |
I20160422-21:52:50.737(2)? ➔ |  Process Port: 21690                   |
I20160422-21:52:50.738(2)? ➔ |      Site URL: http://localhost:3000/  |
I20160422-21:52:50.739(2)? ➔ |                                        |
I20160422-21:52:50.739(2)? ➔ +----------------------------------------+
```

If you would like to have the Rocket.Chat daemon running while signed out. You could use tmux to keep it running.

### Install tmux \(optional\)

```text
$ sudo pkg install tmux
```

Start a tmux session and run Rocket.Chat

```text
$ tmux (when tmux is running)
$ meteor
```

This will run Rocket.Chat inside a tmux session allowing you to disconnect from the terminal and let the daemon running.

* Press `ctrl+b d` to exit the tmux session.
* And use `tmux a` to access the session again.

To read more about using tmux see this page:

[http://man.openbsd.org/OpenBSD-current/man1/tmux.1](http://man.openbsd.org/OpenBSD-current/man1/tmux.1)

Or look up one of the many tmux guides online.

### Troubleshooting tmux

If you run into any troubles with bcrypt, try this: `cp -R ~/meteor/packages/non-core/npm-bcrypt ~/Rocket.Chat/packages/*`

If you run into problems with `fibers` check your `node` and `npm` version. Then try to build it again.

### Notes

* This guide is tested in a FreeBSD 10.3-RELEASE jail.
* Ensure you don't expose the mongoDB instance to the internet without setting up security for it!

## Thanks

* Filias Heidt
* Matt Olander
* William Grzybowski
* Cory Smelosky
* Sing Li

