# Review Board

Add ReviewBoard notifications via a new WebHook in Rocket.Chat

1. In Rocket.Chat go to "Administration"->"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Set "Enable Script" to true and enter contents of [this script](https://github.com/almonteb/rocketchat-hook-reviewboard/blob/master/src/plugin.js)
4. Press Save changes and copy the *WebHook URL* (added just below the script box)
5. In ReviewBoard, configure a new WebHook per [these instructions](https://www.reviewboard.org/docs/manual/dev/admin/configuration/webhooks/)
