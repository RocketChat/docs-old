# Review Board

This integration allows you to add ReviewBoard notifications via a new Webhook in Rocket.Chat.

1. In Rocket.Chat go to **Administration > Integrations** and create a **New Integration**.
2. Choose **Incoming Webhook**.
3. Follow the steps, enable it, give it a name, add link to channel etc. Set **Enable Script** to `true` and enter [this javascript](https://github.com/almonteb/rocketchat-hook-reviewboard/blob/master/src/plugin.js) in the **Script** box.
4. Press **Save Changes** and copy the *Webhook URL* (added just below the script box).
5. In **ReviewBoard**, follow the [instructions to configure a new webhook](https://www.reviewboard.org/docs/manual/dev/admin/configuration/webhooks/).
