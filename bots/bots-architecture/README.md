# Bots Architecture

![Bots Architecture Diagram](./diagram.png){:style="width='100%' height='auto'"}

The above diagram illustrates the general concepts of how a Rocket.Chat server
communicates with a chatbot framework or platform. These concepts are applicable
to [**external**](../) bots.

Bots architecture consists of two main parts: Rocket.Chat host and [bot host](#bots-host).
These two parts are connected with each other via [Rocket Chat SDK](#rocketchat-sdk) methods.
Bot host consists of SDK, [adapter](#framework-adapter), [framework](#bot-framework) and,
optionally, external [services](#external-services).

A bot, being subscribed to room's messages (all or specific ones) handles these
messages and responds back to the user. The conversational model is based on message
streams and can be described as: `if bot hears <this>, then say <that>`.

## Users and Bots

Bots in Rocket.Chat require user accounts with the `bot` role. Other than having
a specific set of permissions, bot accounts are treated like regular user accounts
within the Rocket.Chat instance. However, to prevent possible confusion, bots also
have a "Bot" label to outline their specific functions.

## Bot Admin

Admins (and only admins) can create the bot account and configure role
permissions. This includes setting the credentials a bot uses to connect
as well as which user fields the bots have access to for privacy and security.
Rocket.Chat team works on improving management views for bots and enhancing
the future potential of user-activated bots.

## Bots Host

External bots can be hosted on either the chatbot platform or a custom host
(e.g. Heroku, Glitch, Docker) and use any programming language of your choice.
The most popular one is Node.JS: Rocket.Chat provides utilities catered for
Node.JS to simplify and streamline the development process.

## Message Streams

Every user in Rocket.Chat has a collection for their messages that can be
emitted by the server's streamer. Bots subscribe to the collection of messages
for their own user account, creating a stream that is updated every time a
message is sent either directly to them or any room they are joined in.

## Rocket.Chat SDK

The SDK is a module that provides an interface for external applications
to subscribe to message streams, send messages and call methods on the
Rocket.Chat server (via WebSockets / DDP). SDK would be a dependency of
most bots. Currently, Rocket.Chat provides SDK for JS/Node.JS, Java, Go,
and Kotlin. Python SDK is in progress. The full list of SDKs is available
[here](https://github.com/search?q=topic%3Arocketchat-sdk+org%3ARocketChat&type=Repositories).

## Framework Adapter

Adapter (also referred as **connector** or **middleware**) provides the
parsing of message schemas and methods between the chatbot framework and the
Rocket.Chat SDK. Once loaded into a project, the adapter allows bot creators to
build interactions in the framework's terms, ignoring the specific requirements of
Rocket.Chat.

## Bot Framework

Bot framework (such as Hubot, Botkit, Rasa or Botpress) provides unique
approaches to composing conversational interfaces. Some frameworks run their own
hosting for bots, others provide the code for you to run hosting on your own.
Due to the magic of adapters, our architecture is mostly independent to your
choice of framework.

## Bot Scaling

Users interact with your bot via requests. The more users, the more concurrent requests
your bot must handle. Otherwise, it fails. The degree of bot's scalability mostly depends
on the chosen [framework](#bot-framework) and technologies it uses under the hood. To ensure
that growing amount of users will not cause architectural and performance problems, you
should choose your bot's framework wisely and think on potential scalability issues even
before you start implementing your bot's logic

## External Services

Bots often call external services to provide data or conversational processing.
This is conducted from scripts implementing the bot's framework utilities. For
example, the bot's own platform provider, CRM, NLP (Natural Language Processing) service,
any external API (e.g. a weather service), or your own business logic provider.