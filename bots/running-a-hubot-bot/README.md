# Running a Hubot bot

Developers should start with (or at least reference) our example Hubot
demonstrating usage of the Rocket.Chat adaptor:
[hubot-rocketchat-boilerplate](https://github.com/RocketChat/hubot-rocketchat-boilerplate)

See [GitHub's own documentation](https://hubot.github.com/) for examples on
building and scripting your bot.

There is also a [Yeoman generator](https://github.com/hubotio/generator-hubot)
for Hubot projects, that can generate a bot using the Rocket.Chat adapter,
however it does use the latest versions of Hubot or our adapter module, which
enable asynchronous processing in ES6 Javascript, along with various bug fixes.

In all cases you first need to[configure the environment](../configure-bot-environment)

Deployment examples below use either the boilerplate or a Docker instance.

Once the bot is running and is properly logged in and connected to your RC
server/configured channels, you can test by logging in as a regular user
(not the BOT user), go to a configured channel and start talking to your bot
(you'll find some pre-configured dialogs below).

## Using the Boilerplate

Please see our boilerplate bot [Getting Started docs here](https://github.com/RocketChat/hubot-rocketchat-boilerplate)!

The boilerplate is essentially just a simple Node.js package that requires
Hubot and the Rocket.Chat adapter. The bot can then be executed using a bin file
in production, [as seen here](https://github.com/RocketChat/hubot-rocketchat-boilerplate/tree/master/bin).
Or via the package scripts locally using `npm run local` or `yarn local`

Using the boilerplate example, to start the bot in production, use
`bin/hubot -a rocketchat` - will install dependencies and run the bot with
Rocket.Chat's Hubot adapter.

[More info in Hubot's own docs here](https://hubot.github.com/docs/)

### Quick Start

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
export ROCKETCHAT_USE_SSL=true
```

Adjust the content to fit your server and user credentials. Make sure `mybotuser`
has **BOT role** on the server, if you don't know what that means,
[click here](../creating-bot-users).

Then run the bot:

```
source .env
bin/hubot
```

On the server, login as a regular user (not the BOT user), go to GENERAL,
and try: `mybotuser what is the time` OR `mybotuser rc version`

You can examine the source code of these two interactions under the `/scripts`
directory, where you can add your own bot scripts written in Javascript.

## Using Docker

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
    -e ROCKETCHAT_USER=mybotuser \
    -e ROCKETCHAT_PASSWORD=mypassword \
    -e HUBOT_NAME=bot \
    -e EXTERNAL_SCRIPTS=hubot-help,hubot-diagnostic \
    -v $PWD:/home/hubot/node_modules/hubot-rocketchat rocketchat/hubot-rocketchat
```

On the server, login as a regular user (not the BOT user), go to GENERAL, and try:

```
mybotuser what is the time
```

### Important notes

- The first time you run the docker container, the image needs to be pulled from the public docker registry and it will take some time.  Subsequent runs are super fast.
- If you are not running Linux (i.e. if you are on a Mac or PC), you cannot use $PWD to mount the volumes. Instead, [read this note here](https://docs.docker.com/userguide/dockervolumes/) (the 2nd note on the page: *If you are using Boot2Docker...*) to determine the absolute path where you must place the git-cloned directory.
