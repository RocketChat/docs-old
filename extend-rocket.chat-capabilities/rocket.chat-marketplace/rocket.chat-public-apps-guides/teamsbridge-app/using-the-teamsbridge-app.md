# Using the TeamsBridge App

You must have your organization's **Teams** account or **Guest Accoun**t before using the TeamsBridge App. Without your authorization, no one can access your Teams data or send/receive messages for you.

Log in to your Microsoft Teams account to allow the TeamsBridge App to synchronize your messages.&#x20;

To use TeamsBridge in a channel or DM,

* Using the slash command, type `/teamsbridge-login-teams` to log in to your Teams account and **Send**.&#x20;
* Click the **Login Teams** button from the message returned. It redirects you to log in to your Teams account. You can also log out by typing `/teamsbridge-logout-teams`.

{% hint style="info" %}
A bot is created for all team users in the workspace. Communication with users in TeamsBridge is via bots.&#x20;
{% endhint %}

* After a successful login, type `/teamsbridge-provision-teams-bot-user`  and click **Send** to create a bot user in the workspace for all users in your Teams organization.

## Add users to a room using TeamsBridge.

To add a user from your Teams organization to a [room ](../../../../use-rocket.chat/user-guides/rooms/)on your workspace,

{% hint style="warning" %}
Adding a Teams Bot user is only supported for private channels, private teams, and private discussions.
{% endhint %}

* Using the slash command, type `/teamsbridge-add-user` and  **Send**.
* An **Add Teams users** screen is shown. Select all the users in your Teams organization you want to add to the room.&#x20;
* Click **Add users.**

## Send a Direct Meesgae (DM) using TeamsBridge

Since communication on Rocket.Chat with TeamsBridge uses bots, click the bot of the user from the room, and send a message. They will receive the messages in their Teams account as direct messages.

To create a direct message from the menu bar,

* Click the **Create New** icon in the Rocket.Chat menu bar, then select **Direct Message**.&#x20;
* Select the bot of user you want to start a DM with. Then, click **Create** and send a message.
