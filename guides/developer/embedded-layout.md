# Embedded Layout

If you are embedding Rocket.Chat in your site, you can change Rocket.Chat's layout by adding `?layout=embedded` after your server URL.

Example [https://open.rocket.chat/channel/general?layout=embedded](https://open.rocket.chat/channel/general?layout=embedded)

Adding this to the URL will change the layout of Rocket.Chat to a more "simplistic" view, hiding the left side bar with the channel lists and account management buttons. Adittionaly, you can enable the top navbar in the embedded layout by going to "Administration -&gt; Layout -&gt; Interface -&gt; Show top navbar in embedded layout".

Setting a URL to embedded mode will "lock" that view in a single channel \(since the user will not have access to the channel lists\).

Embedded layout works wonders when using with [Iframe integration](iframe-integration/) since you can already login the user using iframe and only show a desired channel embedded to a page.

You can test this feature by going to [https://open.rocket.chat](https://open.rocket.chat) entering a channel and adding `?layout=embedded` to the URL.

_Note: If you want to stop users from accessing other channels, embedded layout alone will not work, since the user could change the URL of the embedded view via browser tools. For that you should edit the user permissions so they can't see other channels_

