# Create a Bot User

In order to talk to your chatbot there must be a bot user pre-configured on the Rocket.Chat server.

## Create a User on the Server

An admin user is required to create a special user account which the bot will use to login and listen for messages or send messages.

You must login to your Rocket.Chat server as an Admin user and then create a new user:

1. From **Administration** &gt; **Users** menu
2. Select `+` to make a new user
3. Enter _Name_, _Username_, _Email_ \(tick verified\) and _Password_
4. Disable _Require password change_
5. Select `bot` from role selection and click _Add Role_
6. Disable _Join default channels_ recommended, to avoid accidental listening
7. Disable _Send welcome email_
8. _Save_

Your bot will be configured to login to Rocket.Chat server with the designated bot username and password by using these credentials in the bot's environment `ROCKETCHAT_USER` and `ROCKETCHAT_PASSWORD`

Note that for bots email, a common workaround to avoid creating multiple accounts is to use Gmail +addresses, e.g. `youremail+botnam@gmail.com`. [See this issue for more](https://github.com/RocketChat/Rocket.Chat/issues/7125)

## Talk to your bot

Your bot will _usually_ respond to all messages addressed directly to the bot user \(depending on the particular bot framework\). i.e. Messages prepended with `BOT_NAME` or a preconfigured `BOT_ALIAS`.

If the bot is configured to listen on Direct Messages \(`RESPOND_TO_DM=true`\), the prepend is not necessary \(it's automatically added internally\) so the bot should respond to all messages in the DM channel.

