# Embedded Layout

If you are embedding Rocket.Chat in your site, you can change Rocket.Chat's layout by adding `?layout=embedded` after your server url.

Example <https://open.rocket.chat/channel/general?layout=embedded>

Adding this to the url will change the layout of Rocket.Chat to a more "simplistic" view, hiding the left side bar with the channel lists and account management buttons.

Setting a url to embedded mode will "lock" that view in a single channel (since the user will not have access to the channel lists).

Embedded layout works wonders when using with [Iframe integration](../iframe-integration) since you can already login the user using iframe and only show a desired channel embedded to a page.

You can test this feature by going to <https://open.rocket.chat> entering a channel and adding `?layout=embedded` to the url.

_Note: If you want to stop users from accessing other channels, embedded layout alone will not work, since the user could change the url of the embedded view via browser tools. For that you should edit the user permissions so he cant see other channels_
