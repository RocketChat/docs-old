# Configuring bot environments

## Bot adapter configurations

Some configurations are needed by the Rocket.Chat.js.SDK and are independent of bot type (i.e. hubot, botkit, etc..)
NOTE: At the time of this writing only a hubot adapter has been written for Rocket Chat.

In local development, the following can be set in an `.env` file. In production they would need to be set on server startup.

Environment Variable | Description
:---- | :----
ROCKETCHAT_URL* | the URL where Rocket.Chat is running, can be specified as `host:port` or `http://host:port`  or `https://host:port`. If you are using `https://`, you **MUST** setup websocket pass-through on your reverse proxy (NGINX, and so on) with a valid certificate (not self-signed).  Directly accessing Rocket.Chat without a reverse proxy via `https://` is not possible.
ROCKETCHAT_USER* | the bot user's name. It must be a registered user on your Rocket.Chat server, and the user must be granted `bot` role via Rocket.Chat's administrator's panel  (note that this will also be the name that you can summon the bot with)
ROCKETCHAT_PASSWORD* | the bot user's password
ROCKETCHAT_AUTH | defaults to 'password' if undefined, or set to 'ldap' if your use LDAP accounts for bots.
ROCKETCHAT_ROOM | the channel/channels names the bot should listen to message from.  This can be comma separated list.
LISTEN_ON_ALL_PUBLIC | if 'true' then bot will listen and respond to messages from all public channels, as well as respond to direct messages. Default to 'false'. ROCKETCHAT_ROOM should be set to empty (with `ROCKETCHAT_ROOM=''` ) when using `LISTEN_ON_ALL_PUBLIC`. *IMPORTANT NOTE*:  This option also allows the bot to listen and respond to messages _from all newly created private groups_ that the bot's user has been added as a member.
RESPOND_TO_DM | if 'true' then bot will respond to direct messages. When setting the option to 'true', be sure to also set ROCKETCHAT_ROOM or LISTEN_ON_ALL_PUBLIC.  Default is 'false'.
RESPOND_TO_EDITED | if 'true' then bot will respond to edited messages. Default is 'false'.
ROOM_ID_CACHE_SIZE | The maximum number of room IDs to cache. You can increase this if your bot usually sends messages to a large number of different rooms. Default value: 10
DM_ROOM_ID_CACHE_SIZE | The maximum number of Direct Message room IDs to cache. You can increase this if your bot usually sends a large number of Direct Messages. Default value: 100
ROOM_ID_CACHE_MAX_AGE | Room IDs and DM Room IDS are cached for this number of seconds. You can increase this value to improve performance in certain scenarios. Default value: 300
BOT_NAME | ** Name of the bot.  This is what it responds to
EXTERNAL_SCRIPTS | ** These are the npm modules it will add to hubot.
HUBOT_LOG_LEVEL | hubot log level, string [debug|info|warning|error], default: info

`*` Required settings
`**` Docker image only

### Common configuration

It is common to set up a bot to listen and respond to direct messages and all new public channels and private groups. Use the following options:

- `LISTEN_ON_ALL_PUBLIC=true`
- `ROCKETCHAT_ROOM=''`
- `RESPOND_TO_DM=true`

Be aware you *must* add the bot's user as a member of the new private group(s) before it will respond.