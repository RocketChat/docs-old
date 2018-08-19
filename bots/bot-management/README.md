# Bot Management

The **Administration** menu has a section called **Bots**, in which you can monitor and manage all bot accounts currently registered on your server.

Some features might be unavailable for a few bots, because the software they are running on might be outdated or not support them at all.

## Features

### Editing an account

When you open the details page (more below), you can edit the account's username, name and password by simply typing the new value on the fields.

If you want to add or remove roles, click on the X button on each role to remove them and select the name of the roles you want to add, then click on Add Role.

Note: You have to click on Save changes for your changes to be saved.

### Pausing or resuming the bot

Some bots can have the ability to be paused, this is useful for whenever an admin needs to stop a bot but does not have direct access to it. To do so you only have to open the list page and click on the bot account, the tab on the right will display a `PAUSE` button to be clicked, if the bot supports this action.

Whenever the bot is paused, it does not listen to new messages until it is resumed or it is restarted (losing its paused state).

### Connection status

It is possible to see the IP address the bot is connecting from and the time it takes for the bot to reply to a simple request.

You can also see for how long the bot has been both online and active (not paused).

### View Logs

If the bot supports this operation, by clicking on the `VIEW LOGS` button you will be taken to a new page containing a certain quantity of the last entries of the bot logger. Useful when needing to debug or simply know why a bot behaved a certain way.

### Client Stack

You might be able to know the exact clients or adapters, and their versions, used by the bot account to log in to the server.

## Pages

### List page

The list view is the first view when you click on **Bots**, it is a list of all the existing bot accounts. It is accessible from the admin sidenav and shows the following information about an account:

- Status (online/away/busy/offline)
- Name
- Username
- Framework used by the account

### Visualizing general info about an account

In the list view, you can click on any listed account and a tab will be opened on the right side, displaying some information about the clicked account:

- Roles of the account
- Last login time
- Framework used by the account
- (Optional) Button to pause or resume the bot

If the admin clicks on the 'More Details' button, it will be taken to the Details page.

### Details page

The main management page of a bot is its details page. It displays:

- Status (offline/online/pauseOrResume) - Pause of Resume is displayed when the bot is online and can be paused
- Editable field displaying the account name
- Editable field displaying the account username
- Editable field to be filled with a new password, if it is to bechanged
- Framework used by the bot
- Client stack used by the bot
- Connection status displaying the bot's IP address and its response time (ping)
- Uptime of how long the bot has been online and another for how long the bot has been active (not paused)
- Roles and the possibility to add or remove them

You can also delete the account and convert the account to the user type. Converting it to the user type will simply edit the `type` attribute and ask for an e-mail if the account does not have one.

Regarding the statistics view, it is displayed when the admin clicks on 'Load' and currently shows:

- Total number of messages sent by the bot
- Total number of messages in which the bot is mentioned
- Total number of rooms that bot has joined
- [L] - How many times the bot had to reconnect to the server
- [L] - How many messages the bot has read
- [L] - Time when the last message was read
- [L] - How many users are stored in the Hubot brain (Hubot only).

Items starting with [L] are retrieved live from the bot client. Note that different adapters can display different information.

