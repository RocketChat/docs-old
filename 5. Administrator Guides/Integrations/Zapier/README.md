# Zapier
So, you're interested in connecting Zapier to Rocket.Chat? I have great news for you, the Rocket.Chat Zapier App is now in Beta via an invite! And guess what? You're invited!

Okay okay, before you get too excited there are a few things that we have to do before you accept the invite.

1. Check your Rocket.Chat version and then come back to me....
2. Now that you've got that, are you on `v0.49.3`? If **no**, then update is required before we proceed.
3. Is your server publicly accessible from the web? If **no**, Zapier requires it to be accessible via the web.
4. Log into your server, go to `Admin -> oAuth Apps -> Zapier`.
5. Change `Active` to be `True`
6. Change `Redirect URI` to be `https://zapier.com/dashboard/auth/oauth/return/RocketChatDevAPI/`
7. Click `Save Changes` then verify the save was successful.

Did you complete everything? Yes? Good! [Here is your invite (hint: click me)](https://zapier.com/developer/invite/32270/7c3feadc825db6ae9023ea2983e88875/)!

**Warning:** Make sure the `rocket.cat` user has *not* been removed from your Rocket.Chat instance otherwise you won't be able to enable the Zaps! If it has been removed, you'll probably see an error message that says something like `(400) Bad Request and said "Invalid user [error-invalid-user]`.
