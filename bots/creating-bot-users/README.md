# Creating Bot Users

In order to talk to your chatbot there must be a bot user pre-configured on the Rocket.Chat server.

## Creating a User on the Server

An admin user is required to create the account for the bot to login to.

1. From **Administration** > **Bots** menu
2. Select `+` to make a new account
3. Enter *Name*, *Username*, and *Password*
4. Add or remove the roles you want for your bot
5. Disable *Join default channels* recommended, to avoid accidental listening
6. *Save*

Your bot will be configured to login to Rocket.Chat server with the designated bot username and password by using these credentials in the bot's environment `ROCKETCHAT_USER` and `ROCKETCHAT_PASSWORD`

## Talk to your bot

Your bot will *usually* respond to all messages addressed directly to the bot user (depending on the particular bot framework).
i.e. Messages prepended with `BOT_NAME` or a preconfigured `BOT_ALIAS`.

If the bot is configured to listen on Direct Messages (`RESPOND_TO_DM=true`), the prepend is not necessary (it's automatically added internally) so the bot should respond to all messages in the DM channel.
