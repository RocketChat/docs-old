# Configuring bot environments

Some configurations are needed by the SDK and are independent of bot type (i.e.
Hubot, Botkit, Rasa etc).

At the time of this writing only the Hubot adapter is production ready, but more
are in development.

In local development, the following can be set in an `.env` file. In production
they would need to be set on server startup.

`*` Required settings

Environment Variable | Description
:---- | :----
`ROCKETCHAT_URL` *     | URL of the Rocket.Chat instance to connect to. Can be specified as `host:port`, `http://host:port` or `https://host:port`.
`ROCKETCHAT_USE_SSL`   | Force bot to connect with SSL. If unset, it will try and detect from URL protocol.
`ROCKETCHAT_AUTH`      | Default is `password`. Set to 'ldap' to enable LDAP login for bot users.
`ROCKETCHAT_USER` *    | The bot's username (account name users will summon the bot with). Must be registered on your Rocket.Chat server and granted `bot` role.
`ROCKETCHAT_PASSWORD` *| The bot user's password.
`LISTEN_ON_ALL_PUBLIC` | Stream callbacks receive messages from all public channels (true/false). Defaults to `false` (only rooms the bot has joined).
`ROCKETCHAT_ROOM`      | Stream callbacks receive messages from these channel name/s. Defaults to `GENERAL`. Accepts comma separated list.
`RESPOND_TO_LIVECHAT`  | Stream callbacks receive messages from Livechat (true/false). Defaults to `false`.
`RESPOND_TO_DM`        | Stream callbacks receive DMs with bot (true/false). Defaults to `false`.
`RESPOND_TO_EDITED`    | Stream callbacks receive edited messages (true/false). Defaults to `false`.
**SDK Development**    |
`ROOM_CACHE_SIZE`      | Size of cache (LRU) for room (ID or name) lookups.
`ROOM_CACHE_MAX_AGE`   | Max age of cache for room lookups.
`DM_ROOM_CACHE_SIZE`   | Size of cache for Direct Message room lookups.
`DM_ROOM_CACHE_MAX_AGE`| Max age of cache for DM lookups.
`INTEGRATION_ID`       | ID applied to message object to integration source. Defaults to `js.SDK`
`ADMIN_USERNAME`       | Admin user password for API calls used in SDK tests.
`ADMIN_PASS`           | Admin user password for API calls used in SDK tests.
**Hubot Specific**     |
`HUBOT_NAME`           | Name of the bot. Hubot listeners can respond to this.
`HUBOT_ALIAS`          | Another name to respond to. If unset, the adapter sets the `ROCKETCHAT_USER` as an alias, to ensure bots respond when addressed using their username.
`EXTERNAL_SCRIPTS`     | Hubot scripts to require as NPM modules. Used only in some Docker instances.
`HUBOT_LOG_LEVEL`      | `debug`, `info`, `warning` or `error`. Default `info`.

## Common configuration

It is common to set up a bot to listen and respond to direct messages and all
new public channels and private groups. Use the following options:

- `LISTEN_ON_ALL_PUBLIC=true`
- `ROCKETCHAT_ROOM=''`
- `RESPOND_TO_DM=true`

Be aware you *must* add the bot's user as a member of the new private group(s)
before it will respond.

## Important notes

- `ROCKETCHAT_ROOM` should be set to empty (with `ROCKETCHAT_ROOM=''`) when using
  `LISTEN_ON_ALL_PUBLIC`. This option also allows the bot to listen and respond to
  messages _from all newly created private groups_ where the bot's user has been
  added as a member.
