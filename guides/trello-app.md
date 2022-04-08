# Trello App

Here you'll find the guide on setting up the Trello App for Rocket.Chat.

With this app, you will be able to receive notifications about your Trello activities which include

* Creating cards and comments
* Completing checklists items
* uploading attachments etc

## Installation

{% hint style="warning" %}
It is required you have the following to successfully setup the Trello app

* A publicly accesible Rocket.Chat server
* A Trello account with some boards to be watched.
{% endhint %}

To install the Trello  Rocket.Chat App,

* Go to **Administration > Marketplace**
* Search for the **Tello** app and click on the item
* Click **Install** and accept the needed permisions

![](<../.gitbook/assets/image (647).png>)

You should see an interface with the app details showing you have installed it.

![](<../.gitbook/assets/image (677).png>)

A direct message is then recieved from the `trello.bot` to assist you with the setup of the app

![](<../.gitbook/assets/image (659).png>)

Now that you have the app installed on your server, it is time to configure the integration.

## Configuration

* Let's start the setup by running the slash command `/trello setup` in the chat box

![](<../.gitbook/assets/image (660).png>)

* A set of instructions are given to follow

![](<../.gitbook/assets/image (682).png>)

* Head over to [https://trello.com/app-key/](https://trello.com/app-key/). Login if needed and accept the terms to see your Trello API key
* Copy the server's url given by the `trello.bot` and paste in the **New Allowed Origin** field on your Trello api page then **Submit**

![](<../.gitbook/assets/image (697).png>)

* Next copy the `API Key` and `OAuth Secret` from the Trello page. It is needed to complete the configuration on the Trello app's page within Rocket.Chat
* With the credentials provided, hit Save changes to commit

![](<../.gitbook/assets/image (646).png>)

* After the setup, all you have to do is authorize the user so it can connect and interact with the app. This is don by typing the slash command `/trello authorize` in the `trello.bot` chat and **Authorize** the app to your Trello account.

When all that is done, your Trello app is ready to be used.
