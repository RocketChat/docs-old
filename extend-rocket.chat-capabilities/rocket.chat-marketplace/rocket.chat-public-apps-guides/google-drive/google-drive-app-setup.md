# Google Drive App Setup

In this guide, you will see how to install and set up the Google Drive App for Rocket.Chat.

{% hint style="info" %}
Prerequisites:

* It is required to have your workspace on a publicly available domain.
* You need a [google cloud project](https://console.cloud.google.com/) where you will [get the Oauth2 credentials](https://support.google.com/googleapi/answer/6158849?hl=en).
{% endhint %}

We are going to:

1. [Install the Google Drive App](google-drive-app-setup.md#installing-google-drive-app)
2. [Get Google cloud credentials](google-drive-app-setup.md#getting-google-cloud-client-credentials)
3. [Configure the Google Drive App in a Rocket.Chat workspace](google-drive-app-setup.md#configure-rocket.chat-google-drive-app)

## Installing Google Drive App

To install the Google Drive Rocket.Chat App,

* Go to **Administration > Workspace > Marketplace**
* Search for the **Google Drive** app and click on the item
* Click **Install** and **Agree** to accept the needed permissions

You should see an interface with the app details showing after a successful install. Take note of the `callback url`, it will be needed when creating the Oauth client id and secret in the Google cloud console.

<figure><img src="../../../../.gitbook/assets/Google Drive App details page" alt=""><figcaption><p>Google Drive App details page</p></figcaption></figure>

* After installing you get a message from `google-drive.bot` with instructions on how to get started.

<figure><img src="../../../../.gitbook/assets/Google Drive bot first message" alt=""><figcaption><p>Google Drive bot first message</p></figcaption></figure>

* Click on **Setup** for instructions on how to set up the app.

## Getting Google Cloud Client Credentials

* Head over to the [Google cloud console](https://console.cloud.google.com/), then proceed with this guide on [how to create a project and get OAuth credentials](https://support.google.com/googleapi/answer/6158849?hl=en) needed by the Google Drive app
* After creating your app, from the Google cloud dashboard navigate to **API & Services** > **OAuth consent screen** and fill in the required fields to **Create** a consent screen first

<figure><img src="../../../../.gitbook/assets/Google Drive create consent screen" alt=""><figcaption><p>Google Drive create consent screen</p></figcaption></figure>

* Next, go to the **Credentials** tab and create a new OAuth credential

<figure><img src="../../../../.gitbook/assets/Creating a new Google OAuth credentials" alt=""><figcaption><p>Creating a new OAuth credentials</p></figcaption></figure>

* Select web client as the application type then fill in the `redirect_uri` given by the `google-drive.bot` and **Create**

<figure><img src="../../../../.gitbook/assets/Setting redirect URI on Google Cloud" alt=""><figcaption><p>Setting redirect URI on Google Cloud</p></figcaption></figure>

* When done, copy the `client secret` and `client id` This will be used in configuring the app

<figure><img src="../../../../.gitbook/assets/Google Cloud OAuth2 credentials" alt=""><figcaption><p>Google Cloud OAuth2 credentials</p></figcaption></figure>

To be able to access Google Drive, we need to enable the Google Drive API access on our project. To do this,

* Navigate to the **Library** tab from your project's dashboard
* Search for Google Drive API from the list of APIs

<figure><img src="../../../../.gitbook/assets/Add Google Drive API to project" alt=""><figcaption><p>Add Google Drive API to project</p></figcaption></figure>

* Then **Enable** it

<figure><img src="../../../../.gitbook/assets/Enable Google Drive API" alt=""><figcaption><p>Enable Google Drive API</p></figcaption></figure>

## Configure Rocket.Chat Google Drive App

* Go over to the Google Drive app settings page on your Rocket.Chat server and paste the credentials you copied above and **Save changes**

<figure><img src="../../../../.gitbook/assets/Rocket.Chat Google Drive setting" alt=""><figcaption><p>Rocket.Chat Google Drive setting</p></figcaption></figure>

* Back in the chat, typing the slash command `/google-drive help` gives you a list of commands you can use with the Google Drive app.
  * **help:** shows the help list
  * **connect:** starts the process to link your Google Account
  * **unauthorize:** remove your linked Google Account
  * **create:** creates a new Google File and save it on your Google Drive
  * **files:** opens the contextual bar with your Google Drive files list

With a complete installation, users can access the Google Drive app from the room contextual bar as one of the tabs or using the `google-drive` slash command

<figure><img src="../../../../.gitbook/assets/Google Drive app access means" alt=""><figcaption><p>Google Drive app access means</p></figcaption></figure>

{% hint style="warning" %}
For users to be able to use the Google Drive app from the contextual bar, your Rocket.Chat workspace must be operating from at least version `5.1.0.`

For workspaces below this, only admins can.
{% endhint %}
