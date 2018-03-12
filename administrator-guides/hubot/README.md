# Hubot

We have a couple of ways for you to get up and started with the hubot:

- [Docker](#docker)
- [Manual](#manual)

## Docker

You can quickly spin up a docker image with:

    docker run -it -e ROCKETCHAT_URL=<your rocketchat instance>:<port> \
        -e ROCKETCHAT_ROOM='' \
        -e LISTEN_ON_ALL_PUBLIC=true \
        -e ROCKETCHAT_USER=bot \
        -e ROCKETCHAT_PASSWORD=bot \
        -e ROCKETCHAT_AUTH=password \
        -e BOT_NAME=bot \
        -e EXTERNAL_SCRIPTS=hubot-pugme,hubot-help \
        rocketchat/hubot-rocketchat

### Custom Scripts

If you want to include your own custom scripts you can by doing:

    docker run -it -e ROCKETCHAT_URL=<your rocketchat instance>:<port> \
        -e ROCKETCHAT_ROOM='' \
        -e LISTEN_ON_ALL_PUBLIC=true \
        -e ROCKETCHAT_USER=bot \
        -e ROCKETCHAT_PASSWORD=bot \
        -e ROCKETCHAT_AUTH=password \
        -e BOT_NAME=bot \
        -e EXTERNAL_SCRIPTS=hubot-pugme,hubot-help \
        -v $PWD/scripts:/home/hubot/scripts \
        rocketchat/hubot-rocketchat

### Docker-compose

If you want to use docker-compose for this task, add this for v0.1.4 adapter (this must be inserted in your docker-compose.yml):

    # hubot, the popular chatbot (add the bot user first and change the password before starting this image)
    hubot:
      image: rocketchat/hubot-rocketchat:v0.1.4
      environment:
        - ROCKETCHAT_URL=your-rocket-chat-instance-ip:3000 (e.g. 192.168.2.240:3000)
        - ROCKETCHAT_ROOM=
        - LISTEN_ON_ALL_PUBLIC=true
        - ROCKETCHAT_USER=username-of-your-bot
        - ROCKETCHAT_PASSWORD=yourpass
        - BOT_NAME=bot
        - GOOGLE_API_KEY=yourgoogleapikey
    # you can add more scripts as you'd like here, they need to be installable by npm
        - EXTERNAL_SCRIPTS=hubot-help,hubot-seen,hubot-links,hubot-diagnostics,hubot-google,hubot-reddit,hubot-bofh,hubot-bookmark,hubot-shipit,hubot-maps
      links:
        - rocketchat:rocketchat
    # this is used to expose the hubot port for notifications on the host on port 3001, e.g. for hubot-jenkins-notifier
      ports:
        - 3001:8080

 If you wish that your bot listen to all public rooms and all private rooms he is joined to let the env "ROCKETCHAT_ROOM" empty like in the example above and set the env "LISTEN_ON_ALL_PUBLIC" to true.

 Please take attention to some external scripts that are in the example above, some of them need your Google-API-Key in the docker compose file.

### Manual

First you need to install hubot

    npm install -g yo generator-hubot

Then you need to start the setup of the bot

    mkdir myhubot
    cd myhubot
    yo hubot --adapter="rocketchat@1"

It'll ask you a few questions.

Alternatively you can actually answer the questions in one command:

    yo hubot --owner="OWNER <owner@example.com>" --name="bot" --description="Bot" --adapter="rocketchat@0.1"

Also be sure to remember the name you specify.  This is what the bot will respond to in Rocket.Chat.

You will need to tell the adapter where your install is and what login information to use.

    export ROCKETCHAT_ROOM=''
    export LISTEN_ON_ALL_PUBLIC=true
    export ROCKETCHAT_USER=bot
    export ROCKETCHAT_PASSWORD=bot
    export ROCKETCHAT_AUTH=password

Then start with: `bin/hubot -a rocketchat`

[More Info Here](https://hubot.github.com/docs/)

## Configuration Options

Here are all of the options you can specify to configure the bot.

On Docker you use: `-e VAR=Value`

Regular hubot via: `export VAR=Value` or add to pm2 etc

| Environment Variable  | Description                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ROCKETCHAT_URL        | the URL where Rocket.Chat is running, can be specified as `host:port` or `http://host:port`  or `https://host:port`. If you are using `https://`, you **MUST** setup websocket pass-through on your reverse proxy (NGINX, and so on) with a valid certificate (not self-signed).  Directly accessing Rocket.Chat without a reverse proxy via `https://` is not possible.                                                         |
| ROCKETCHAT_USER       | the bot user's name. It must be a registered user on your Rocket.Chat server, and the user must be granted `bot` role via Rocket.Chat's administrator's panel  (note that this will also be the name that you can summon the bot with)                                                                                                                                                                                           |
| ROCKETCHAT_PASSWORD   | the bot user's password                                                                                                                                                                                                                                                                                                                                                                                                          |
| ROCKETCHAT_AUTH       | defaults to 'password' if undefinied, or set to 'ldap' if your use LDAP accounts for bots.                                                                                                                                                                                                                                                                                                                                       |
| ROCKETCHAT_ROOM       | the channel/channels names the bot should listen to message from.  This can be comma separated list.                                                                                                                                                                                                                                                                                                                             |
| LISTEN_ON_ALL_PUBLIC  | if 'true' then bot will listen and respond to messages from all public channels, as well as respond to direct messages. Default to 'false'. ROCKETCHAT_ROOM should be set to empty (with `ROCKETCHAT_ROOM=''` ) when using `LISTEN_ON_ALL_PUBLIC`. _IMPORTANT NOTE_:  This option also allows the bot to listen and respond to messages \_from all newly created private groups_ that the bot's user has been added as a member. |
| RESPOND_TO_DM         | if 'true' then bot will listen and respond to direct messages. When setting the option to 'true', be sure to also set ROCKETCHAT_ROOM. This option needs not be set if you are including LISTEN_ON_ALL_PUBLIC.    Default is 'false'.                                                                                                                                                                                            |
| RESPOND_TO_EDITED     | if 'true' then bot will respond to edited messages. Default is 'false'.                                                                                                                                                                                                                                                                                                                                                          |
| ROOM_ID_CACHE_SIZE    | The maximum number of room IDs to cache. You can increase this if your bot usually sends messages to a large number of different rooms. Default value: 10                                                                                                                                                                                                                                                                        |
| DM_ROOM_ID_CACHE_SIZE | The maximum number of Direct Message room IDs to cache. You can increase this if your bot usually sends a large number of Direct Messages. Default value: 100                                                                                                                                                                                                                                                                    |
| ROOM_ID_CACHE_MAX_AGE | Room IDs and DM Room IDS are cached for this number of seconds. You can increase this value to improve performance in certain scenarios. Default value: 300                                                                                                                                                                                                                                                                      |
| BOT_NAME              | \*\* Name of the bot.  This is what it responds to                                                                                                                                                                                                                                                                                                                                                                               |
| EXTERNAL_SCRIPTS      | \*\* These are the npm modules it will add to hubot. You can use name of npm modules from [this](https://www.npmjs.com/browse/keyword/hubot-scripts) site.                                                                                                                                                                                                                                                                       |

\*\* - Docker image only.

### FAQ

**How do I configure the bot to respond to direct messages?**

You will want to set the environment variable: `RESPOND_TO_DM` to true

**How do I make the bot listen on all public channels?**

You will want to set the environment variable: `LISTEN_ON_ALL_PUBLIC` to true
\*\* Note: This will also listen for commands in any private room that the bot has been added.  But will only be able to do so after its added.

### Verify your bot is working

Try:

    rocketbot ping

And:

    rocketbot help

The example bot under `scripts` directory responds to:

    rocketbot report status

## Developers

If you're interested in helping expand the adapter please check out the repo: <https://github.com/RocketChat/hubot-rocketchat>

### Additional details

Look under the `scripts` directory, you will find a very basic bot there.

Just add your own script in the directory to have it loaded.  If you are new to hubot script writing, find out more [here](https://hubot.github.com/docs/scripting/).

If you find a bug or compatibility problem, please open an issue.

If you have any enhancements or feature requests, create an issue.  If you like what you see, please star the repo.

Finally, if you have created a bot that other users may find useful, please contribute it.
