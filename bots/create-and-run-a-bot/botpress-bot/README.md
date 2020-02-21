# Run a Botpress Bot

Botpress is an on-prem, open-source chatbot building platform for businesses.

## Quick start guide

Botpress is a Node.js package and works with Node and npm.

The fastest way to start with Botpress is using [botpress-kick-starter](https://github.com/RocketChat/botpress-kick-starter) repository that is already integrated with Rocket.Chat
via [botpress-channel connector](https://github.com/RocketChat/botpress-channel-rocketchat).

Navigate to the folder where you want to work with the bot and proceed with the following steps:

**1. install botpress package**

```
npm init -y
npm install botpress@10.40.0
```

**1. create a bot**

```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```

`botpress init` command launches a wizard that will help you create the initial configuration.
You should see something as follows:

```
$ ../node_modules/.bin/botpress init

---------------
Hey there 👋, thanks for using Botpress!
We'll walk you through the creation of your new bot.
For more information or help, please visit https://botpress.io/docs
---------------
name: (bot) botpress-bot
botpress version: (10.40.0)
description: Test bot for docs
author: Anton Zolotukhin

=============================
Template: Basic (default)
Author: Botpress, Inc.
Description: A basic bot for your website
Channels: web
=============================

-> Copying .welcome
-> Copying botfile.js
-> Copying config/channel-web.json
-> Copying config/nlu.json
-> Copying generated/content/builtin_text.json
-> Copying generated/flows/main.flow.json
-> Copying generated/flows/main.ui.json
-> Copying generated/intents/forget.json
-> Copying generated/intents/forget.utterances.txt
-> Copying generated/intents/hello.json
-> Copying generated/intents/hello.utterances.txt
-> Copying generated/intents/none.json
-> Copying generated/intents/none.utterances.txt
-> Copying index.js
-> Copying package.json
-> Copying README.md
-> Copying src/actions.js
-> Copying src/content/.empty
-> Copying src/custom.js
-> Copying src/index.js
-> Copying src/renderers.js
-> Copying .gitignore

🎉  Your bot was initialized succesfully!

Next steps:
1) Install bot dependencies by running npm install (or yarn install)
2) Start the bot by running npm start (or yarn start)

Enjoy Botpress!
```

**1. install botpress connector and bot dependencies**

```
npm install
npm install botpress-channel-rocketchat
```

**2. configure the bot**

Open `config` folder and create `channel-rocketchat.json` file with the following content:

```
{
    "ROCKETCHAT_USER": <BOTPRESS USER NAME>,
    "ROCKETCHAT_PASSWORD": <BOTPRESS USER PASS>,
    "ROCKETCHAT_URL": <ROCKETCHAT HOST>,
    "ROCKETCHAT_USE_SSL": <SSL USAGE>,
    "ROCKETCHAT_ROOM": <ROCKETCHAT CHANNEL>,
    "scope": ""
}
```

Adjust the content to fit your server and user credentials.
Make sure `mybotuser` has a `BOT` role on the server.
For more information on how to create a bot user please refer to [this page](../#1-create-a-bot-user).

**3. run the bot**

```
npm start
```

After executing the command, botpress will try to do the following actions:

* launch botpress instance;
* launch dedicated Admin Dashboard;
* launch dedicated Webchat window;
* connect to the Rocket.Chat instance;
* listen to messages in `general` room.

```
$ npm start

> botpress-bot@1.0.0 start /botpress-bot/bot
> node index.js

19:27:44 - debug: [DB Janitor] Added table "logs"
19:27:44 - info: Starting botpress version 10.40.0
19:27:44 - info: [DB Janitor] Started
19:27:44 - info: [Ghost Content Manager] (transparent) Initialized
19:27:44 - debug: [Ghost Content Manager] (transparent) Added root folder generated/media, doing nothing.
19:27:44 - debug: [Ghost Content Manager] (transparent) Added root folder generated/flows, doing nothing.
19:27:44 - info: [Skills] Initiated
19:27:44 - info: Loaded @botpress/audience, version 10.40.0
19:27:44 - verbose: [Renderers] Enabled for webchat.
19:27:44 - info: Loaded @botpress/channel-web, version 10.40.0
19:27:44 - info: Loaded @botpress/hitl, version 10.40.0
19:27:44 - debug: [Ghost Content Manager] (transparent) Added root folder generated/intents, doing nothing.
19:27:44 - debug: [Ghost Content Manager] (transparent) Added root folder generated/entities, doing nothing.
19:27:44 - info: Loaded @botpress/nlu, version 10.40.0
19:27:44 - info: Loaded @botpress/skill-choice, version 10.40.0
19:27:44 - warn: DEPRECATION NOTICE – bp.umm is deprecated and will be removed – Please see bp.renderers instead.
19:27:44 - warn: DEPRECATION NOTICE – bp.umm is deprecated and will be removed – Please see bp.renderers instead.
19:27:44 - verbose: [Renderers] Enabled for rocketchat.
19:27:44 - info: Loaded botpress-channel-rocketchat, version 0.0.14
19:27:44 - info: Loaded 6 modules
19:27:44 - info: [Skills] Loaded 1 skills
19:27:44 - debug: [Ghost Content Manager] (transparent) Added root folder generated/content, doing nothing.
19:27:44 - debug: Loading middleware: rendering.instrumentation
19:27:44 - debug: Loading middleware: hitl.captureInMessages
19:27:44 - debug: Loading middleware: nlu.incoming
19:27:44 - debug: Loading middleware: hear
19:27:44 - debug: Loading middleware: hitl.captureOutMessages
19:27:44 - debug: Loading middleware: webchat.sendMessages
19:27:44 - debug: Loading middleware: rocketchat.sendMessages
19:27:44 - debug: Loading middleware: fallback
19:27:44 - debug: Loading data for builtin_text from builtin_text.json
19:27:44 - info: Read 7 item(s) from builtin_text.json
19:27:44 - info: Bot launched. Visit: http://localhost:3000
[connect] Connecting { username: 'bot',
password: 'pass',
ldap: false,
host: 'bots.rocket.chat',
useSsl: true,
timeout: 20000,
rooms: [],
allPublic: false,
dm: false,
livechat: false,
edited: false,
integrationId: 'js.SDK',
roomCacheMaxSize: 10,
roomCacheMaxAge: 300000,
dmCacheMaxSize: 10,
dmCacheMaxAge: 100000 }
19:27:44 - debug: Loading data for builtin_image from builtin_image.json
19:27:44 - debug: Loading data for builtin_single-choice from builtin_single-choice.json
19:27:44 - debug: Loading data for builtin_card from builtin_card.json
19:27:44 - debug: Loading data for builtin_action-button from builtin_action-button.json
19:27:44 - debug: Loading data for builtin_carousel from builtin_carousel.json
19:27:44 - debug: Loading data for builtin_raw from builtin_raw.json
19:27:45 - debug: [NLU::Native] Model is up to date
19:27:45 - info: ------------
19:27:45 - info: Webchat available at http://localhost:3000/s/chat
19:27:45 - info: ------------
[connect] Connected
[login] Logging in DocsBot
[getRoomIdByNameOrId] Calling (caching): general
[getRoomIdByNameOrId] Success: "GENERAL"
[joinRoom] Calling (async): ["GENERAL"]
[joinRoom] Success
[subscribe] Preparing subscription: stream-room-messages: __my_messages__
[subscribe] Stream ready: 4
LISTEN TRIGGERED
[reactive] Listening for change events in collection stream-room-messages
```

**4. talk to your bot**

On the server, login as a regular user (not the BOT user), go to `general` room, and talk to your
newly created bot:

![Botpress bot responses to user messages](./images/botpress-bot-responses.png)