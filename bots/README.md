# Bots Overview

![Rocket.Chat Bots Banner](./banner.png){:style="width='100%' height='auto'"}

## What are bots in Rocket.Chat?

Bots (or Chatbots) are pieces of software that provide automated messaging in a
chat platform. They are useful for running pre-defined (scripted) interactions to provide
support, conversational workflow or on-boarding with multi-channel, multi-user, public and
private interactions. Bots can also be integrated with external services.

In Rocket.Chat, a bot is a special user account with the `bot` role and a specific set
of permissions.

## How do bots send and receive messages?

Rocket.Chat's framework (Meteor) has built-in utilities for streaming updates to data collections.
Every user in Rocket.Chat has such a collection for their messages. Bots subscribe to
the collection of messages for their user account, creating a stream that is updated every time a message is sent either directly to them or any room they are joined in.

For more details, see the [Bots Architecture section](bots-architecture/).

## How are bots hosted?

Rocket.Chat supports bots that are hosted outside of your Rocket.Chat instance. Their working logic is defined by their provider.

Rocket.Chat supports for multiple bot frameworks and platforms, including:
[bBot](http://bbot.chat/), [Hubot](https://hubot.github.com/), [Botkit](https://botkit.ai/), [Botpress](https://botpress.io/).

The hosting for bots depends on the platform. For example, Hubot can be
launched on any Node.js environment, but you have to set it up yourself (using Heroku or
Glitch services). Another bot platforms like Botkit provide their own services for hosting and provisioning bots. They just need a configuration to connect to your Rocket.Chat instance.

## Getting Started

These are the basic steps for using bots with Rocket.Chat:

1. A bot user is [created by an admin](creating-bot-users/) on the server;
2. The bot is running as [a separate process](bots-architecture/) using your chosen framework or platform;
3. The bot environment is pre-configured with [environment variables](configure-bot-environment/);
4. The bot's behaviour is defined via scripts according to the requirements of your framework. For example, check the details on how to [run a bBot bot](running-a-bbot-bot/).

## Next steps

Get yourself familiar with [Bots Architecture](bots-architecture/).

## Quick Links

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

## Contribute

To contribute to features under development see our
[Bots Project issues](https://github.com/RocketChat/Rocket.Chat/projects/16).
