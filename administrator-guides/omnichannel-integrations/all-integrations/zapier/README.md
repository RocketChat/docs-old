# Zapier

This integration allows you to connect Zapier with Rocket.Chat.

Before you get started, there are a few things to check:

1. Is your server publicly accessible from the web? If **no**, Zapier requires it to be accessible via the web.
2. Zapier needs a specific oAuth App running to work. By default this Zapier oAuth App should be already configured, to check this go to **Admin > oAuth Apps > Zapier**.

**Warning:** Make sure the `rocket.cat` user has *not* been removed from your Rocket.Chat instance, otherwise you cannot  enable the Zaps. If the user is removed, you probably see an error message that says something like `(400) Bad Request and said "Invalid user [error-invalid-user]`.
