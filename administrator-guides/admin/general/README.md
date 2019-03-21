# General

### Allow Invalid Self-Signed Certs

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Allow invalid and self-signed SSL certificate's for link validation and previews.


### Bugsnag API Key

_FILL HERE_


### CDN Prefix for JS/CSS

_FILL HERE_

### CDN Prefix

_FILL HERE_

### Use CDN Prefix for all assets

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Document Domain

_FILL HERE_

### Enable Favorite Rooms

- **Yes**: Users will be able to favorite public, private and direct channels.
- **No**: Users won't be able to favorite channels.

### First Channel After Login

Insert here the name of the channel that the user will enter after logging in. Setting this field to empty or setting a invalid name will result in the user being directed to the server's home page.

### Force Disable OpLog for Cache

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Will not use OpLog to sync cache even when it's available

### Force SSL

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> *Caution!* _Force SSL_ should never be used with reverse proxy. If you have a reverse proxy, you should do the redirect THERE. This option exists for deployments like Heroku, that does not allow the redirect configuration at the reverse proxy.

### Google Tag Manager Id

You can use Google Tag Manager on Rocket.Chat by setting your Id on this setting.

### Language

This sets the default language for the server. This setting will be overridden if the user has changed his language preference.

### Restart

This button restarts the server.

### Robots.txt File Contents

This sets the content of the Robots.txt file, used to help indexing your server on different search engines and crawlers.

### Show Setup Wizard

- **Pending**: _FILL HERE_
- **In_progress**: _FILL HERE_
- **Completed**: _FILL HERE_

### Site Name

This sets the name of the server.

### Site URL

This sets the URL of the server.

> Example: `https://chat.domain.com/`

### Store Last Message

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Store last message sent on each room.

### Unread Count

This setting changes the behavior of the unread counter

- **All messages**: All messages will be counted on the counter, regardless if they are a mention or not.
- **User mentions only**: Only mentions using `@yourUsername` will be counted on the counter.
- **Group mentions only**: Only group mentions using `@all` or `@here` will be counted on the counter.
- **User and group mentions only**: All mentions will be counted, this includes `@all`, `@here` and `@yourUsername`

### Unread Count for Direct Messages

This setting changes the behavior of the unread counter on Direct Messages

- **All messages**: All messages sent by another user will be counted on the counter.
- **Mentions only**: Only mentions using `@yourUsername` will be counted on the counter.

## Apps

### Enable the App Framework

Use this setting to enable the Rocket.Chat Apps Framework. This allows you to add Rocket.Chat Apps from our Marketplace to your server.

## GraphQL API

Settings related to our GraphQL API. You can find more info on our GraphQL API [here](/developer-guides/graphql-api/)

### GraphQL CORS

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

### GraphQL Enabled

This setting enables the GraphQL API on your server.

### GraphQL Subscription Port

Here you can choose what port will be used for subscriptions on the API. More info on subscriptions [here](/developer-guides/graphql-api/subscription/)

## Iframe Integration

### Enable Receive

This setting defines if a parent window can send commands to Rocket.Chat.

### Receive Origins

Origins with protocol prefix, separated by commas, which are allowed to receive commands e.g. `https://localhost`, `http://localhost`, or * to allow receiving from anywhere.

### Enable Send

This setting defines if Rocket.Chat can send events to the parent window.

### Send Target Origin

Origin with protocol prefix, which commands are sent to e.g. `https://localhost`, or * to allow sending to anywhere.

## Notifications

### Always notify mobile

Choose to always notify mobile device regardless of presence status.

### Max Room Members Before Disabling All Message Notifications

Max number of members in room when notifications for all messages gets disabled. Users can still change per room setting to receive all notifications on an individual basis. (0 to disable)

## REST API

### Allow Getting Everything

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Should calls to the REST API be allowed to return everything in one call?

### CORS Origin

_FILL HERE_

### Default Count

The default count for REST API results if the consumer did not provided any.

### Enable CORS

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Enable Direct Message History Endpoint

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> This enables the `/api/v1/im.history.others` which allows the viewing of direct messages sent by other users that the caller is not part of.

### Enable Shields

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Enable shields available at `/api/v1/shield.svg`

### Shield Types

_FILL HERE_

> Types of shields to enable as a comma separated list, choose from `online`, `channel` or `*` for all

### Max Record Amount

This sets the maximum number of records the REST API should return when not set to unlimited

### User Limit for Adding All Users to Channel

User Limit for Adding All Users to Channel

## Reporting

### Send Statistics to Rocket.Chat

By sending your statistics, you'll help us identify how many instances of Rocket.Chat are deployed, as well as how good the system is behaving, so we can further improve it. Don't worry, as no user information is sent and all the information we receive is kept confidential.

## Stream Cast

### Stream Cast Address

> IP or Host of your Rocket.Chat central Stream Cast. E.g. `192.168.1.1:3000` or `localhost:4000`

## Translations

### Custom Translations

With this setting you can configure custom translations for your server.

> Should be a valid JSON where keys are languages containing a dictionary of key and translations. Example:<br/><code>{

 "en": {
  "Channels": "Rooms"
 },
 "pt": {
  "Channels": "Salas"
 }
}</code>

## UTF8

### UTF8 Names Slugify

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### UTF8 Names Validation

RegExp that will be used to validate usernames and channel names

>**Note**: If you are having problems with names when creating channels (when using non-english characters for example) changing these values will probably fix it.

## Update

### Update Latest Available Version

Whenever we have a new version available, it will show up on this field.
