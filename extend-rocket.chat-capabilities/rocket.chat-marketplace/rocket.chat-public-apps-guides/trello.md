# Trello

Here you'll find the guide on setting up the Trello App for Rocket.Chat.

With this app, you will be able to receive notifications about your Trello activities which include

* Creating cards and comments
* Completing checklists items
* uploading attachments etc

## Installation

{% hint style="warning" %}
It is required you have the following to successfully setup the Trello app

* A publicly accessible Rocket.Chat server
* A Trello account with some boards to be watched.
{% endhint %}

To install the Trello Rocket.Chat App,

* Go to **Administration > Workspace > Marketplace**
* Search for the **Trello** app and click on the item
* Click **Install** and accept the needed permissions

![](<../../../.gitbook/assets/image (647).png>)

You should see an interface with the app details showing you have installed it.

A direct message is then received from the `trello.bot` to assist you with the setup of the app

![](<../../../.gitbook/assets/image (659).png>)

Now that you have the app installed on your server, it is time to configure the integration.

## Configuration

* Let's start the setup by running the slash command `/trello setup` in the chatbox

![](<../../../.gitbook/assets/image (660).png>)

* A set of instructions are given to follow

![](<../../../.gitbook/assets/image (682).png>)

* Head over to [https://trello.com](https://trello.com/app-key/) and login
* Visit [https://trello.com/app-key/](https://trello.com/app-key/) and accept the terms to see your Trello API key
* Copy the server's url given by the `trello.bot` and paste in the **New Allowed Origin** field on your Trello api page then **Submit**

![](<../../../.gitbook/assets/image (697).png>)

* Next copy the `API Key` and `OAuth Secret` from the Trello page. It is needed to complete the configuration on the Trello app's configuration page within Rocket.Chat
* With the credentials provided, hit Save changes to commit
* After the setup, all you have to do is authorize the user so it can connect and interact with the app. This is done by typing the slash command `/trello authorize` in the `trello.bot` chat and **Authenticate** the app to your Trello account.

![](<../../../.gitbook/assets/image (595).png>)

* A new window is opened click **Allow** in the prompt to grant all the permissions needed to run the Trello App integration smoothly.

![](<../../../.gitbook/assets/image (34) (2).png>)

* When successful, you get a confirmation message from the `trello.bot`

![](<../../../.gitbook/assets/image (48).png>)

When all that is done, your Trello app is ready to be used.

## Linking Trello Board to Rocket.Chat Channel

After configuring the Trello App it is time to link your Trello boards for monitoring in any Rocket.Chat channel of your choice.

{% hint style="warning" %}
Trello boards can only be linked to Channels. Teams, Discussions or Direct Messages are not supported.
{% endhint %}

{% hint style="info" %}
You can always run the slash command `/trello help` from anywhere to get help.
{% endhint %}

* Go ahead and [create a channel](../../../use-rocket.chat/user-guides/rooms/channels/create-a-new-channel.md) where you want to receive your Trello board notifications in. Skip this step if you already have one
* Open up your desired channel and type the slash command `/trello link` to link a Trello board
* A list of Trello boards linked to your account is shown. Select a board of your choice and **Link**

![](<../../../.gitbook/assets/image (588) (2) (1).png>)

* After linking, any activity performed on Trello, will be notified in the corresponding channel

![](<../../../.gitbook/assets/image (109).png>)

![](<../../../.gitbook/assets/image (236).png>)
