# Add Jira notifications via WebHook

_notify on issue creation, deletion and status, resolution, comment or priority changes._

1. In Rocket.Chat go to "Administration"->"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Set "Enable Script" to true and enter content of *[this script](https://github.com/malko/rocketchat-jira-hook/blob/master/jira-rocketchat-hook.js)* in the "Script" box
4. Press Save changes and copy the *Webhook URL* (added just below the script box)
5. Go to your jira as administrator and follow instructions on adding outgoing webhook [here](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-configureConfiguringawebhook)

You can tweak the content of the script to better suit your needs

## Add Jira integration via Outgoing WebHook

_Integration for Rocket.Chat that summarizes any JIRA issues mentioned._

1. Go to <https://github.com/gustavkarlsson/rocketchat-jira-trigger> and follow the instructions.

Example of Jira integration:

![image](Jira-webhook.png)
