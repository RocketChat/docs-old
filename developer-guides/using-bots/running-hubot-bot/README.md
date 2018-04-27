# Running a hubot bot

The rocketchat-hubot bot can be run using either npm or docker. 

In all cases you will first need to configure the environment.  [Click here for info](../configure-bot-environment)

Once the bot is running and is properly logged in and connected to your RC server/configured channels, you can test by logging in as a regular user (not the BOT user), go to a configured channel and start talking to your bot (you'll find some pre-configured dialogs below)

## NPM and the boilerplate

Please see our boilerplate bot [Getting Started docs here](https://github.com/RocketChat/hubot-rocketchat-boilerplate)!

The boilerplate is essentially just a simple node package that requires Hubot,
the Rocket.Chat adapter and Coffeescript for its execution...

```
"dependencies": {
    "coffeescript": "^2.2.2",
    "hubot": "3",
    "hubot-rocketchat": "^2.0.0"
}
```

The bot can then be executed using a bin file in production, [as seen here](https://github.com/RocketChat/hubot-rocketchat-boilerplate/tree/master/bin).
Or via the package scripts locally using `npm run local` or `yarn local`

Using the boilerplate example, to start the bot in production, use
`bin/hubot -a rocketchat` - will install dependencies and run the bot with rocketchat's hubot-adaper.

[More info in Hubot's own docs here](https://hubot.github.com/docs/)

#### Quick Start

Create and run a Rocket.Chat bot in under two minutes.

```
git clone https://github.com/RocketChat/hubot-rocketchat-boilerplate
cd hubot-rocketchat-boilerplate
npm install
```
Create a _.env_ file with content:

```
export ROCKETCHAT_URL=myserver.com
export ROCKETCHAT_USER=mybotuser
export ROCKETCHAT_PASSWORD=mypassword
export ROCKETCHAT_ROOM=general
export ROCKETCHAT_USESSL=true
```

Adjust the content to fit your server and user credentials. Make sure `myuser` has **BOT role** on the server, if you don't know what that means, [click here](../creating-bot-users).

Then run the bot:

```
source .env
bin/hubot
```

On the server, login as a regular user (not the BOT user), go to GENERAL, and try:

```
mybotuser what is the time
```

OR

```
mybotuser rc version
```

You can examine the source code of these two bots under the `/scripts` directory, where you can add your own bot scripts written in Javascript.


## v2.x.x Development using Docker

First clone the source and then move into the directory.

```
git clone git@github.com:RocketChat/hubot-rocketchat.git
cd hubot-rocketchat
```

Now we start the docker container.

```
docker run -it -e ROCKETCHAT_URL=<your rocketchat instance>:<port> \
    -e ROCKETCHAT_ROOM='' \
    -e LISTEN_ON_ALL_PUBLIC=true \
    -e ROCKETCHAT_USER=bot \
    -e ROCKETCHAT_PASSWORD=bot \
    -e HUBOT_NAME=bot \
    -e EXTERNAL_SCRIPTS=hubot-help,hubot-diagnostic \
    -v $PWD:/home/hubot/node_modules/hubot-rocketchat rocketchat/hubot-rocketchat
```

On the server, login as a regular user (not the BOT user), go to GENERAL, and try:

```
mybotuser what is the time
```

#### Standard

In a Hubot instance once `hubot-rocketchat` is added by npm or yarn, you can
replace the package with a development version directly:

- `cd node_modules` from the bot's project root
- `rm -rf hubot-rocketchat` to delete the published version
- `git clone git@github.com:RocketChat/hubot-rocketchat.git` to add dev version
- `cd hubot-rocketchat` move to dev path
- `npm install` install dependencies

#### Linked

Setting up a locally linked package is easier for continued development and/or
using the same development version of the adapter in multiple bots.

- Change directory to your development adapter path
- `npm link` or `yarn link` to set the origin of the link
- Change directory to your bot's project root
- `npm link hubot-rocketchat` or `yarn link hubot-rocketchat` to create the link

#### Important notes

* The first time you run the docker container, the image needs to be pulled from
the public docker registry and it will take some time.  Subsequent runs are
super fast.
* If you are not running Linux (i.e. if you are on a Mac or PC), you cannot use
$PWD to mount the volumes. Instead, [read this note here](https://docs.docker.com/userguide/dockervolumes/)
(the 2nd note on the page: *If you are using Boot2Docker...*) to determine the
absolute path where you must place the git-cloned directory.
