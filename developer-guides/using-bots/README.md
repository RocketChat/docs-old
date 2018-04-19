# Using Bots

## Configuring a bot to work with RocketChat
1. A bot user must first be [configured by an admin](creating-bot-users/) on the RC server.
2. The bot is run as a seperate process, on any machine that can reach your RC server. Before running your bot, the environment must be pre-configured by [setting environment variables](configure-bot-environment/). 
3.  Running the bot requires an ```adapter``` package and the adapter requires the [Rocket.Chat.js.SDK](https://github.com/RocketChat/Rocket.Chat.js.SDK).
4. Currently RC supports only a hubot bot, with the [hubot-rocketchat adapter](https://github.com/RocketChat/hubot-rocketchat/tree/develop/), but new bot adapters are currently under development including ```botkit```, ```??```, ```??```.... 
    -  The ```hubot-rocketchat adapter``` can be run using either npm, yeoman generator, or docker. It requires the [Rocket.Chat.js.SDK](https://github.com/RocketChat/Rocket.Chat.js.SDK) and you will also need to provide scripts to your adapter which will describe the bots behavior.
    -  Newer bot adapters under development may also run more like managed services, hosted by third parties including botkit studio for example.  They will connect/subscribe to RC server by using a rocketchat-connector module in conjunction with the ```Rocket.Chat.js.SDK``` which will be run on the bot host.
5. [Running a Hubot bot](running-hubot-bot/)

### Quick Links

- [Creating Bot Users](creating-bot-users/)
- [Configuring the Bot environment](configure-bot-environment/)
- [Running a Hubot bot](running-hubot-bot/)

### References, configuration and implementation details

- [Rocket.Chat.js.SDK](https://github.com/RocketChat/Rocket.Chat.js.SDK/)
- [hubot-rocketchat-boilerplate](https://github.com/RocketChat/hubot-rocketchat-boilerplate/)
- [hubot-rocketchat](https://github.com/RocketChat/hubot-rocketchat/tree/develop/)
- [hubot](https://github.com/hubotio/hubot)