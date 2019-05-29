# Bots Architecture

![Bots Architecture Diagram](./diagram.png){:style="width='100%' height='auto'"}

The above diagram illustrates the general concepts of how a Rocket.Chat server
communicates with a chatbot framework or platform. These concepts are applicable
to [**external**](../) bots.

Bots architecture consists of two main parts: Rocket.Chat host and [bot host](#bots-host).
These two parts are connected with each other via [Rocket Chat SDK](#rocketchat-sdk) methods.
Bot host runs external to the Rocket.Chat host and consists of SDK, [adapter](#framework-adapter), 
[framework](#bot-framework) and, typically, external [services](#external-services).

A bot, being subscribed to room's messages (all or specific ones) handles these
messages and responds back to the user. Typical bot carries out interactive conversations
with users. The conversational model can be designed and managed by tooling
and framworks on the bot host.

A bot host can manage and run many different bots, as well as many instances of any bot.

## Users and Bots

Bots in Rocket.Chat require user accounts with the `bot` role. Other than having
a specific set of permissions, bot accounts are treated like regular user accounts
within the Rocket.Chat instance. However, to prevent possible user confusion, messages
from online bots are marked with a default "Bot" label.

## Bot Admin

Admins (and only admins) can create the bot account and configure role
permissions. This includes setting the credentials a bot uses to connect
as well as which user fields the bots have access to for privacy and security.
Rocket.Chat team works on improving management views for bots and enhancing
the future potential of user-activated bots.

## Bots Host

A bot host is a machine where bots run.  It can be a baremetal
machine, a network cluster, virtualized environments or cloud based.

The bot host typically manages connections to #external_services to
extend a bots' ability to access and manipulate external data and
systems.

A bot host can manage and run many different bots, as well as many 
instances of any bot.

Bot are typically created using bot framework or platforms in popular
programming language such as NodeJS and Python.

## Message Streams

Every user in Rocket.Chat has a collection for their messages that can be
emitted by the server's streamer. Bots subscribe to the collection of messages
for their own user account, creating a stream that is updated every time a
message is sent either directly to them or any room they are joined in.

## Rocket.Chat SDK

The SDK is a low-level software module that offers an interface for external
code to subscribe to message streams, send messages and call methods on the
Rocket.Chat server (via WebSockets / DDP).

Bot framework adapter are written using the SDK.

## Framework Adapter

Adapter (also referred as **connector** or **middleware**) is a software component
written to a bot's framework's specification to link the framework with Rocket.Chat.

An adapter allows bot creators to design and build bot interactions in the 
framework's terms and according to its model, without detailed knowledge and consideration 
for the low level programming details of communicating with Rocket.Chat.

Adapter always communicate with Rocket.Chat via Rocket.Chat SDK.

## Bot Framework

Bot framework (such as Hubot, Botkit, Rasa or Botpress) provides unique
approaches to compose conversational interfaces. They allow developer
to focus on the design and management of complex bot logic.

Some frameworks are SaaS (Software as a Service) and run in the cloud. Most
framworks you can run on your own bot host.

Rocket.Chat's community has created adapters for most of the popular bot frameworks.

## Bot Scaling

In production, hundreds or thousands of users can be carrying out conversations with a bot
at the same time. The ability to scale a bot from one conversation to many concurrent ones
is essential.  Otherwise, it fails. 

Bot frameworks/platforms support varying degree of scalability.  To ensure
that growing amount of users will not cause architectural and performance problems, you
should choose your bot's framework wisely. You should consider potential scalability issues even
before you start implementing your bot's logic

## External Services

The value of most production bot relies on its ability to access and manipulate external
data and systems.  A bot calls external services (databases, scheduling systems, CRM, NLP, and so on)
to provide data or conversational processing.

A good bot framework typically ease the linkage and facilitate bot access to these systems in a manner consistent
with the framework's design, through the bot host.

