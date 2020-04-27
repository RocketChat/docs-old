# Zapier

So, you're interested in connecting Zapier to Rocket.Chat? I have great news for you, the Rocket.Chat Zapier App is now in public Beta!

Okay okay, before you get started there are a few things that you have to check.

1. Is your server publicly accessible from the web? If **no**, Zapier requires it to be accessible via the web.
2. Zapier needs a specific oAuth App running to work. By default this Zapier oAuth App should be already configured, to check this go to `Admin -> oAuth Apps -> Zapier`.

**Warning:** Make sure the `rocket.cat` user has *not* been removed from your Rocket.Chat instance otherwise you won't be able to enable the Zaps! If it has been removed, you'll probably see an error message that says something like `(400) Bad Request and said "Invalid user [error-invalid-user]`.
