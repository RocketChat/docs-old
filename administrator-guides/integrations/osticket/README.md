# Osticket

Add osTicket notifications via a new WebHook in Rocket.Chat

1. In Rocket.Chat go to "Administration"->"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc.
4. Press Save change and copy the *Webhook URL*.
5. Go to your osTicket project, ie. `http://your.ip.address/osticket/scp` It's in the project "admin" panel, and "manage > plugins".
6. Download plugin in [https://github.com/tuudik/osticket-rocketchat](https://github.com/tuudik/osticket-rocketchat) and click in "add a new plugin", install plugin in directory include/plugins.
7. With plugin Rocket.Chat notifier installed, config it. Paste Rocket.Chat webhook url in form webhook, set a bot username, emoji icon, alert color and save changes.
8. Test the webhook by creating a new ticket.
