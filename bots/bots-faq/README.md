# Bots FAQ

## How do bots work with Rocket.Chat?

Bots (aka Chatbots) are pieces of software that provide automated messaging in a
chat platform. They are useful for running scripted interactions to provide
support, conversational workflow or on-boarding and can be integrated with
external services. In Rocket.Chat, each bot has a user account that it logs in
with just like a human. We give these users a `bot` role so that its nature is
obvious to other users and it can have specific permissions.

## What kinds of bots work with Rocket.Chat?

We are building out support for multiple bot frameworks and platforms, starting
with other open source projects. We currently have adapters for bBot, Hubot,
Botkit and Botpress.

We refer to these as **external** bots, because their hosting and logic is
separate to your Rocket.Chat instance and defined by their provider. External
bots are suited to messaging-heavy  interactions and/or where maintenance or
processes are independent of Rocket.Chat.

We are also working on a model for **internal** bots, that run as an app
attached to the instance and are tightly coupled with the architecture of
Rocket.Chat. These (at least currently) have limited features for conversational
UI, but might provide deeper integration with the messaging platform. These are
best used to provide simple command driven interfaces for your Rocket.Chat
users.

## How are bots hosted?

The hosting for external bots depends on the platform. Hubot for instance, runs
on any Node.js environment, but you have to set it up yourself (services like
Heroku or Glitch are popular for that use case). Bot platforms like Botkit
provide their own services for hosting and provisioning bots, they just need
configuration to connect to your Rocket.Chat instance.

Internal bots are hosted as part of the Rocket.Chat instance (either on-premise
or in the same cloud container). Their provisioning and operation is dependent
on the Rocket.Chat server.

## How do bots send and receive messages?

Rocket.Chat is built on Meteor, which provides utilities for streaming updates
to data collections. Every user in Rocket.Chat has such a collection for their
messages and bots subscribe to the collection of messages for their user
account, creating a stream that is updated every time a message is sent either
directly to them or any room they are joined in.

For more details, see the [Bots Architecture section](../bots-architecture)
