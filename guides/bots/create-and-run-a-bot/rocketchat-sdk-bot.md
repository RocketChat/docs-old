# Run a Rocket.Chat SDK Bot

This bot is a simple example of how you can use [Rocket.Chat JS SDK](https://github.com/RocketChat/Rocket.Chat.js.SDK) methods directly. It is extremely basic and does not handle errors, different message types, server resets and other production situations.

## Quick start guide

Rocket.Chat Bot is a Node.js package and works with Node and npm.

Navigate to the folder where you want to work with the bot and proceed with the following steps:

**1. install Rocket.Chat SDK package**

```text
npm init -y
npm install @rocket.chat/sdk
```

**2. create bot files**

To proceed with the simplest setup, you need to create two files: the first one will be responsible for the working logic of the bot. Another one will contain a map with the responses.

1. create a `server.js` file with the following content:

```javascript
const { driver } = require('@rocket.chat/sdk');
const respmap  = require('./reply');

// Environment Setup
const HOST = '<ROCKETCHAT HOST>';
const USER = '<BOT USER NAME>';
const PASS = '<BOT USER PASS>';
const BOTNAME = '<ROCKET CHAT BOT ALIAS>';
const SSL = '<SSL USAGE>';
const ROOMS = ['<ROCKETCHAT CHANNEL>'];
var myUserId;

// Bot configuration
const runbot = async () => {
    const conn = await driver.connect({ host: HOST, useSsl: SSL })
    myUserId = await driver.login({ username: USER, password: PASS });
    const roomsJoined = await driver.joinRooms( ROOMS );
    console.log('joined rooms');

    const subscribed = await driver.subscribeToMessages();
    console.log('subscribed');

    const msgloop = await driver.reactToMessages( processMessages );
    console.log('connected and waiting for messages');

    const sent = await driver.sendToRoom( BOTNAME + ' is listening ...', ROOMS[0]);
    console.log('Greeting message sent');
}

// Process messages
const processMessages = async(err, message, messageOptions) => {
if (!err) {
    if (message.u._id === myUserId) return;
    const roomname = await driver.getRoomName(message.rid);

    console.log('got message ' + message.msg)
    var response;
    if (message.msg in respmap) {
        response = respmap[message.msg];
    }
    const sentmsg = await driver.sendToRoomId(response, message.rid)
    }
}

runbot()
```

**NOTE:** Adjust the `Environment Setup` section content to fit your server and user credentials.

Make sure `<BOT USER NAME>` has a `BOT` role on the server. For more information on how to create a bot user please refer to [this page](./#1-create-a-bot-user).

1. create a `reply.js` file with the following content:

```javascript
const respmap = {
    "hi" : "hey",
    "u da bot" : "no, YOU da bot",
    "no u da bot" : "Come'on - YOU DA BOT!!",
    "I give up" : "ok. silly human :rolleyes:"
};

module.exports = respmap;
```

**3. run the bot**

```text
node server.js
```

After executing the last command, Rocket.Chat SDK bot will try to connect to the Rocket.Chat instance and then will listen to messages in `general` room:

```text
$ node server.js
[connect] Connecting { username: 'username',
  password: 'pass',
  ldap: false,
  host: 'rocket.chat.host',
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
[connect] Connected
[login] Logging in botUser
[getRoomIdByNameOrId] Calling (caching): general
[getRoomIdByNameOrId] Success: "GENERAL"
[joinRoom] Calling (async): ["GENERAL"]
[joinRoom] Success
joined rooms
[subscribe] Preparing subscription: stream-room-messages: __my_messages__
[subscribe] Stream ready: 4
subscribed
[reactive] Listening for change events in collection stream-room-messages
connected and waiting for messages
[getRoomIdByNameOrId] Calling (cached): general
[getRoomIdByNameOrId] Success: "GENERAL"
[sendMessage] Calling (async): [{"msg":"Rocket.Chat BOT is listening ...","bot":{"i":"js.SDK"},"rid":"GENERAL"}]
[sendMessage] Success: {"msg":"Rocket.Chat BOT is listening ...","bot":{"i":"js.SDK"},"rid":"GENERAL","ts":{"$date":1573598821912},"u":{"_id":"GDJn6Exf9LpK2Pp5n","username":"botUser"},"mentions":[],"channels":[],"_updatedAt":{"$date":1573598821920},"_id":"6yTcbcNKuMDBdPsFc"}
Greeting message sent
[received] Message in room GENERAL
```

**4. talk to your bot**

On the server, login as a regular user \(not the BOT user\), go to `general` room, and talk to your newly created bot:

![Rocket.Chat SDK bot responses to user messages](../../../.gitbook/assets/rocket-chat-sdk-bot-responses.png)

