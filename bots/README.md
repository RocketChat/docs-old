# Using Bots

![Rocket.Chat Bots Banner](./banner.png){:style="width='100%' height='auto'"}

Rocket.Chat supports chatbot and messaging automation integrations, enabling
chat-ops workflows with multi-channel, multi-user, public and private
interactions.

We are building out support for multiple frameworks, including:

- [bBot](http://bbot.chat/) - complete
- [Hubot](https://hubot.github.com/) - complete
- [Botkit](https://botkit.ai/) - in development
- [Rasa](https://rasa.com/) - in development
- [Botpress](https://botpress.io/) - development

Some Rocket.Chat server packages implement **internal** bots (e.g.
[SlackBridge](../administrator-guides/import/slack/slackbridge/)). That type
of integration is not documented here. See the [Bots FAQ](bots-faq/) for more on
that distinction.

To contribute to features under development see our
[Bots Project issues](https://github.com/RocketChat/Rocket.Chat/projects/16).

## Getting Started

These are the basic steps for using bots with Rocket.Chat.

1. A bot user must be [created by an admin](creating-bot-users/) on the server
2. The bot is run as [a separate process](bots-architecture/) using your chosen framework or platform
3. The bot environment must be pre-configured by [setting environment variables](configure-bot-environment/)
4. You provide scripts to define the bot's behaviour according to the requirements of your framework
    - e.g. See [Running a bBot bot](running-a-bbot-bot/)

## Quick Links

- [Bots FAQ](bots-faq/)
- [Bots Architecture](bots-architecture/)
- [Creating Bot Users](creating-bot-users/)
- [Configuring the Bot Environment](configure-bot-environment/)
- [Running a bBot Bot](running-a-bbot-bot/)
- [Running a Hubot Bot](running-a-hubot-bot/)
- [Running a Botkit Bot](running-a-botkit-bot/)
- [Running a Rasa Bot](running-a-rasa-bot/)
- [Running a Botpress Bot](running-a-botpress-bot/)

## References

Configuration and implementation details for components of the
[Bots Architecture](bots-architecture/) can be found in their project READMEs:

- [Rocket.Chat JS SDK](https://github.com/RocketChat/Rocket.Chat.js.SDK/)
- [bBot Rocket.Chat boilerplate](https://github.com/Amazebot/bbot-rocketchat-boilerplate)
- [Hubot Rocket.Chat boilerplate](https://github.com/RocketChat/hubot-rocketchat-boilerplate/)
- [Hubot Rocket.Chat adapter](https://github.com/RocketChat/hubot-rocketchat/tree/develop/)