# Zoom

Here you will find information on how to install and use the Zoom App.

## Installation

You can install our Zoom Rocket.Chat App from your Rocket.Chat Administration area.

* Go to **Administration &gt; Marketplace**
* Search for the **Zoom** and click on the item
* Click on the **Install** button

Now that you have the app installed in your server, it is time to configure the integration with your Zoom account.

## Configuration

### Requirements

* First, you'll need to have at least a [Pro account](https://zoom.us/pricing) for users \(besides you\) to be able to create Zoom links. Those users will need to be added to your Zoom account.
* For other users to be able to use the Zoom App, their Rocket.Chat registered emails need to be the same as registered at Zoom.

### Step 1: JWT App at Zoom Marketplace

You'll need to create a new JWT app at [Zoom's Marketplace](https://marketplace.zoom.us/).

* Sign in at [marketplace.zoom.us](https://marketplace.zoom.us/)
* Go to "Develop" at the top of the screen and select "Build app" in the menu
* Choose the "JWT" type and hit "Create"
* Enter a name for the app and hit "Create"
* Enter the Company Name and Developer Contact Information for your app and then hit "Continue".
* At the App Credentials tab page, _get the app's API Key and API Secret_.

### Step 2: Configure the Slash command at Rocket.Chat

* Go to the settings of the Zoom App in **Administration &gt; Apps &gt; Zoom**
* Place the API Key and API Secret at their respective fields and save.

## Usage

At any room, type "/zoom start" to generate a Zoom link. You can also type "/zoom start _topic_" to add a topic to the room. The topic can be any word or sentence.

