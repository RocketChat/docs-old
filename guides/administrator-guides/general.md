# General

## General Settings

### Allow Invalid Self-Signed Certs

Allow invalid and self-signed SSL certificates for link validation and previews.

### Bugsnag API Key

If you are integrating Bugsnag with Rocket.Chat, you should put your Bugsnag API Key here.

### CDN Prefix for JS/CSS

Insert here the prefix for the CDN that should load the JS/CSS assets

### CDN Prefix

If you want to use a CDN to load the assets of your server, insert here your CDN Prefix.

### Use CDN Prefix for all assets

This will define if all assets from the server will come from a CDN.

### Enable Favorite Rooms

* **Yes**: Users will be able to favorite public, private and direct channels.
* **No**: Users won't be able to favorite channels.

### First Channel After Login

Insert here the name of the channel that the user will enter after logging in. Setting this field to empty or setting a invalid name will result in the user being directed to the server's home page.

### Force Disable OpLog for Cache

Will not use OpLog to sync cache even when it's available

### Force SSL

You can use this setting to force SSL on your server. We **Strongly Discourage** the usage of this setting, this should be done at the reverse proxy level by redirecting to https.

> _Caution!_ _Force SSL_ should never be used with reverse proxy. If you have a reverse proxy, you should do the redirect THERE. This option exists for deployments like Heroku, that does not allow the redirect configuration at the reverse proxy.

### Google Tag Manager Id

You can use Google Tag Manager on Rocket.Chat by setting your Id on this setting.

### Language

This sets the default language for the server. This setting will be overridden if the user has changed his language preference.

### Restart

This button restarts the server.

### Robots.txt File Contents

This sets the content of the Robots.txt file, used to help indexing your server on different search engines and crawlers.

### Show Setup Wizard

For now this setting **SHOULD NOT** be changed. Setting this to `pending` and logging out can basically lock down your server. Please refer to this [issue](https://github.com/RocketChat/Rocket.Chat/issues/13840).

### Site Name

This sets the name of the server.

### Site URL

This sets the URL of the server.

> Example: `https://chat.domain.com/`

### Store Last Message

Store last message sent on each room. This will enable the viewing of the last message on the left sidebar \(should be on by default\)

### Unread Count

This setting changes the behavior of the unread counter

* **All messages**: All messages will be counted on the counter, regardless if they are a mention or not.
* **User mentions only**: Only mentions using `@yourUsername` will be counted on the counter.
* **Group mentions only**: Only group mentions using `@all` or `@here` will be counted on the counter.
* **User and group mentions only**: All mentions will be counted, this includes `@all`, `@here` and `@yourUsername`

### Unread Count for Direct Messages

This setting changes the behavior of the unread counter on Direct Messages

* **All messages**: All messages sent by another user will be counted on the counter.
* **Mentions only**: Only mentions using `@yourUsername` will be counted on the counter.

## Apps

### Enable the App Framework

Use this setting to enable the Rocket.Chat Apps Framework. This allows you to add Rocket.Chat Apps from our Marketplace to your server.

## GraphQL API

Settings related to our GraphQL API. You can find more info on our GraphQL API [here](https://github.com/RocketChat/docs/tree/25edcde0b00af8d5f89889dbb0d911ccfe76a1d1/developer-guides/graphql-api/README.md)

### GraphQL CORS

Use this setting to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for the GraphQL API. Enabling CORS will make the server only accept API Calls from specific origins.

> **Note:** Currently our GraphQL CORS accepts all domains. Setting this to false, will make your server only accept requests from the same domain of said server. E.g. `rocket.chat` server will only accept requests from the `rocket.chat` domain.

### GraphQL Enabled

This setting enables the GraphQL API on your server.

### GraphQL Subscription Port

Here you can choose what port will be used for subscriptions on the API. More info on subscriptions [here](https://github.com/RocketChat/docs/tree/25edcde0b00af8d5f89889dbb0d911ccfe76a1d1/developer-guides/graphql-api/subscription/README.md)

> **Note**: Cannot currently use the same port that Rocket.Chat is running on.

## Iframe Integration

### Enable Receive

This setting defines if a parent window can send commands to Rocket.Chat.

### Receive Origins

Origins with protocol prefix, separated by commas, which are allowed to receive commands e.g. `https://localhost`, `http://localhost`, or \* to allow receiving from anywhere.

### Enable Send

This setting defines if Rocket.Chat can send events to the parent window.

### Send Target Origin

Origin with protocol prefix, which commands are sent to e.g. `https://localhost`, or \* to allow sending to anywhere.

## Notifications

### Always notify mobile

Choose to always notify mobile device regardless of presence status.

### Max Room Members Before Disabling All Message Notifications

Max number of members in room when notifications for all messages gets disabled. Users can still change per room setting to receive all notifications on an individual basis. \(0 to disable\)

## REST API

### Allow Getting Everything

This setting affects the `count` query parameter. See more at [Offset and Count Information](https://rocket.chat/docs/developer-guides/rest-api/offset-and-count-and-sort-info/#offset-and-count-information)

* **Yes**: Allows the usage of the number `0` as `count` parameter. Setting `count` to `0` will return **ALL** the data from that endpoint
* **No**: Setting the number `0` on `count`, will return `0` results.

> Should calls to the REST API be allowed to return everything in one call?

### CORS Origin

Here you can set what origins are allowed to make requests to your server.

> You can use `*` to accept from all origins. For multiple Origins use a comma separated list. E.g `domain1.com, domain2.com, domain3.com`

### Default Count

The default count for REST API results if the consumer did not provided any.

### Enable CORS

Use this setting to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for the REST API. Enabling CORS will make the server only accept API Calls from specific origins.

> **Note**: Setting this to false, will make your server only accept requests from the same domain of said server. E.g. `rocket.chat` server will only accept requests from the `rocket.chat` domain.

### Enable Direct Message History Endpoint

This enables the `/api/v1/im.history.others` which allows the viewing of direct messages sent by other users that the caller is not part of.

### Enable Shields

Enables the usage of [Shields](https://rocket.chat/docs/developer-guides/rest-api/miscellaneous/shield-svg/#shield-svg) via API

> Enabled shields are available at `/api/v1/shield.svg`

### Shield Types

Types of shields to enable as a comma separated list, choose from `online`, `channel` or `*` for all

### Max Record Amount

This sets the maximum number of records the REST API should return when not set to unlimited

### User Limit for Adding All Users to Channel

This limits the amount of users that can be added to a Channel at the same time.

## Reporting

### Send Statistics to Rocket.Chat

By sending your statistics, you'll help us identify how many instances of Rocket.Chat are deployed, as well as how good the system is behaving, so we can further improve it. Don't worry, as no user information is sent and all the information we receive is kept confidential.

## Stream Cast

### Stream Cast Address

IP or Host of your Rocket.Chat central Stream Cast. E.g. `192.168.1.1:3000` or `localhost:4000`

## Translations

### Custom Translations

With this setting you can configure custom translations for your server.

Should be a valid JSON where keys are languages containing a dictionary of key and translations. Example:

```javascript
{
 "en": {
  "Channels": "Rooms"
 },
 "pt": {
  "Channels": "Salas"
 }
}
```

## UTF8

### UTF8 Names Validation

RegExp that will be used to validate usernames and channel names

> **Note**: If you are having problems with names when creating channels \(when using non-english characters for example\) changing these values will probably fix it.

## Update

### Update Latest Available Version

Whenever we have a new version available, it will show up on this field.

