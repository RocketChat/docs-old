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

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### First Channel After Login

_FILL HERE_


### Force Disable OpLog for Cache

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Will not use OpLog to sync cache even when it's available


### Force SSL

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> *Caution!* _Force SSL_ should never be used with reverse proxy. If you have a reverse proxy, you should do the redirect THERE. This option exists for deployments like Heroku, that does not allow the redirect configuration at the reverse proxy.


### Google Tag Manager Id

_FILL HERE_


### Language

_FILL HERE_


### Restart

_FILL HERE_


### Robots.txt File Contents

_FILL HERE_


### Show Setup Wizard

- **Pending**: _FILL HERE_
- **In_progress**: _FILL HERE_
- **Completed**: _FILL HERE_


### Site Name

_FILL HERE_


### Site URL

_FILL HERE_

> Example: https://chat.domain.com/


### Store Last Message

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Store last message sent on each room.


### Unread Count

- **All messages**: _FILL HERE_
- **User mentions only**: _FILL HERE_
- **Group mentions only**: _FILL HERE_
- **User and group mentions only**: _FILL HERE_


### Unread Count for Direct Messages

- **All messages**: _FILL HERE_
- **Mentions only**: _FILL HERE_


## Apps


### Enable the App Framework

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


## GraphQL API


### GraphQL CORS

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### GraphQL Enabled

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### GraphQL Subscription Port

_FILL HERE_


## Iframe Integration


### Enable Receive

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Allow parent window to send commands to Rocket.Chat.


### Receive Origins

_FILL HERE_

> Origins with protocol prefix, separated by commas, which are allowed to receive commands e.g. 'https://localhost, http://localhost', or * to allow receiving from anywhere.


### Enable Send

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Send events to parent window


### Send Target Origin

_FILL HERE_

> Origin with protocol prefix, which commands are sent to e.g. 'https://localhost', or * to allow sending to anywhere.


## Notifications


### Always notify mobile

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Choose to always notify mobile device regardless of presence status.


### Max Room Members Before Disabling All Message Notifications

_FILL HERE_

> Max number of members in room when notifications for all messages gets disabled. Users can still change per room setting to receive all notifications on an individual basis. (0 to disable)


## REST API


### Allow Getting Everything

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Should calls to the REST API be allowed to return everything in one call?


### CORS Origin

_FILL HERE_


### Default Count

_FILL HERE_

> The default count for REST API results if the consumer did not provided any.


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

_FILL HERE_

> What is the maximum number of records the REST API should return (when not unlimited)?


### User Limit for Adding All Users to Channel

_FILL HERE_

> User Limit for Adding All Users to Channel


## Reporting


### Send Statistics to Rocket.Chat

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> By sending your statistics, you'll help us identify how many instances of Rocket.Chat are deployed, as well as how good the system is behaving, so we can further improve it. Don't worry, as no user information is sent and all the information we receive is kept confidential.


## Stream Cast


### Stream Cast Address

_FILL HERE_

> IP or Host of your Rocket.Chat central Stream Cast. E.g. `192.168.1.1:3000` or `localhost:4000`


## Translations


### Custom Translations

_FILL HERE_

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

_FILL HERE_

> RegExp that will be used to validate usernames and channel names


## Update


### Update Latest Available Version

_FILL HERE_

