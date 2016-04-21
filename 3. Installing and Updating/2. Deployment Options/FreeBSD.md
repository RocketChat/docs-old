# Deploying Rocket.Chat on FreeBSD

## Prerequisites
Valid for:

* FreeBSD 10.2-RELEASE

*Please use a fresh system without traces of node or npm. Most of my initial problems came from old and/or special versions of node/npm/meteor*


## Packages

You need to install the following packages:

`$ sudo pkg install git scons python gcc48 gmake npm bash wget`

## Building the dev_bundle

### Setting up the environment

Switch to bash - as some tools will require bash.

`$ bash`

Set some environment Variables to make the build work under FreeBSD:

```
$ export MAKE_CMD=gmake
$ export CXX=clang++
$ export CC=clang
```

`MAKE_CMD=gmake` is important, because meteor requires GNU make to build. The fork we will be building lets us set `MAKE_CMD` so we don't have to do nasty stuff to our BSD make.

### Installing pm2
We need pm2 later to deamonize or Rocket.Chat build.

Now, install pm2:

```
$ sudo npm install pm2 -g
$ sudo pm2 startup freebsd
```

### Building meteor

We need a fork of meteor which allows us to set `MAKE_CMD` as mentioned before:

```
$ git clone -b freebsd https://github.com/williambr/meteor
$ cd meteor
```

Meteor comes with scripts to build it:

```
$ ./scripts/build-mongo-for-dev-bundle.sh
$ ./scripts/build-node-for-dev-bundle.sh
$ ./scripts/generate-dev-bundle.sh
```

#### Troubleshooting

That should run without problems. If you run into issues check the following:

* is the Environment setup right?
* Are the scripts running in bash?
* do I have `gmake` installed?

## Running Rocket.Chat

First, we need the `meteor` binary in our `$PATH`

```
$ export PATH=$PATH:$HOME/meteor
```

Next, we need to download Rocket.chat:

```
$ git clone https://github.com/RocketChat/Rocket.Chat.git
$ cd Rocket.Chat
```

We need to install bcrypt seperatly.

```
$ npm install --clang=1 bcrypt
```

After that: Go ahead and and start rocket.chat!

```
$ meteor
```

### Troubleshooting

If you run into any troubles with bcrypt, try this: `cp -R ~/meteor/packages/non-core/npm-bcrypt ~/Rocket.Chat/packages/*`

If you run into problems with `fibers` check your `node` and `npm` version. Then try to build it again.

## Thanks

* Filias Heidt
* Matt Olander
* William Grzybowski
* Cory Smelosky
* Sing Li
