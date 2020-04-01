# Add Jira Notifications via WebHook

This integration allows you to notify on issue creation, deletion and status, resolution, comment or priority changes.

1. In Rocket.Chat go to **Administration > Integrations** and create a **New Integration**.
2. Choose **Incoming Webhook**.
3. Follow the steps, enable it, give it a name, add link to channel etc. Set **Enable Script** to `true` and enter the enter content of[this javascript](https://github.com/malko/rocketchat-jira-hook/blob/master/jira-rocketchat-hook.js) in the **Script** box.
4. Press **Save Changes** and copy the *Webhook URL* (added just below the script box).
5. Go to your Jira as administrator and follow the [instructions to add outgoing webhook](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-configureConfiguringawebhook).

You can tweak the content of the script to better suit your needs

## Add Jira Integration via Outgoing WebHook

This is an integration with Rocket.Chat that summarizes any JIRA issues mentioned.

Read more about the [installation guide](<https://github.com/gustavkarlsson/rocketchat-jira-trigger>) for detailed instructions.

Once configured, this is how the integration looks like:

![image](Jira-webhook.png)
