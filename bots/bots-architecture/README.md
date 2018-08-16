# Bots Architecture

![Bots Architecture Diagram](./diagram.png){:style="width='100%' height='auto'"}

The above diagram illustrates the relationship between a Rocket.Chat server
and a chatbot framework or platform. Not all bot frameworks operate the same
way, but the general concepts apply. See below for more detailed definitions.

This would apply to **external** bots. For a definition of external vs internal
bots, see the [Bots FAQ](../bots-faq).

## Users and Bots

Bots in Rocket.Chat require a normal account created via the Administratiom menu, in the Bots section.

These accounts have a different type from the normal user accounts,
therefore bot accounts can have any set of roles according to their
responsibilities on the server.

## Bot Admin

Admins (or other roles with certain permissions) can create and
configure bot accounts and their roles. Each account can have any set
of roles, which allows for more flexibility to deal with different
accounts.

The admins can edit bot accounts and manage them from the administration.We are working with a future potential of user-activated bots.

## Hosting Bots

External bots are either hosted by the chatbot platform or a custom host set up
by their creator (e.g. using Heroku, Glitch or Docker). Node.js is a popular
language in the space, so we provide utilities catered for Node development, but
not all bots run on Node.js.

## Message Streams

Every user in Rocket.Chat has a collection for their messages that can be
emitted by the server's streamer. Bots subscribe to the collection of messages
for their own user account, creating a stream that is updated every time a
message is sent either directly to them or any room they are joined in.

## Rocket.Chat JS SDK

The SDK is a Node.js module that provides an interface for external applications
to subscribe to message streams, send messages and call methods on the
Rocket.Chat server (via WebSockets / DDP). It would be a dependency of most bots
built on Node.js and we're working on a Python translation as well.

## Framework Adapters

Adapters, sometimes referred to as **connectors** or **middleware**, provide the
parsing of message schemas and methods between the chatbot framework and the
Rocket.Chat SDK. Once loaded into a project, they allow bot creators to compose
interactions in the framework's terms, ignoring the specific requirements of
Rocket.Chat.

They, along with the SDK, also reply to administration actions that come
from the server, such as a request for data from the bot.

## Bot Frameworks

Bot frameworks such as Hubot, Botkit, Rasa and Botpress each provide unique
approaches to composing conversational interfaces. Some run their own hosting
for bots, some just provide the code for you to run yourself. Due to the magic
of adapters, our architecture is mostly independent to your choice of framework.

## External Services

Bots often call external services to provide data or conversational processing.
This is conducted from scripts implementing the bot's framework utilities,
whether it's the bot's own platform provider or NLP service, or some other API,
like a weather service or your own business logic provider.