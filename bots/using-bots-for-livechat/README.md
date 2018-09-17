# Using Bots for Livechat

Bot users can serve as livechat agents in a Rocket.Chat instance, allowing you
to respond quickly to basic enquiries and perform handover to a human agent
when they're required and available.

Before continuing, you should read [Creating Bot Users](../creating-bot-users)
and [Configure Bot Environment](../configure-bot-environment), because you'll
need to do both to prepare the account and bot configuration to be used for
livechat.

Also ensure livechat is enabled, following the instructions in the
[Administrator guide to Livechat](../../administrator-guides/livechat/) to
enable Livechat, create a department and assign your bot account/s as agents.

The only additional setup required is that the bot is given the additional role
of `livechat-agent` and the environment variable `RESPOND_TO_LIVECHAT=true`.

## Contribute to the Docs

If you've developed bot solutions for livechat support and have more details to
add, please submit a PR with the instructions using the link below.
