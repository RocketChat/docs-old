# Google Drive App Setup

In this guide, you will learn how to install and set up the Google Drive App for Rocket.Chat.

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

* Go to **Administration > Marketplace**
* Search for the **Google Drive** app and click on the item
* Click **Install** and **Agree** to accept the needed permissions

You should see an interface with the app details showing after a successful install. Take note of the `callback url`, it is needed when creating the Oauth _client id_ and _secret_ in the Google cloud console.

<figure><img src="../../../../.gitbook/assets/Google Drive App details page" alt=""><figcaption><p>Google Drive App details page</p></figcaption></figure>

* After installing you get a message from `google-drive.bot` with instructions on how to get started.

<figure><img src="../../../../.gitbook/assets/Google Drive bot first message" alt=""><figcaption><p>Google Drive bot first message</p></figcaption></figure>

* Click on **Setup** for instructions on how to set up the app.

## Getting Google Cloud Client Credentials

* Go to the [Google cloud console](https://console.cloud.google.com/) and [create a new project](https://support.google.com/googleapi/answer/6158849?hl=en) or select an existing one
* From the Google cloud dashboard navigate to **API & Services** > **OAuth consent screen** and fill in the required fields to **Create** a consent screen first

<figure><img src="../../../../.gitbook/assets/Google Drive create consent screen" alt=""><figcaption><p>Google Drive create consent screen</p></figcaption></figure>

* Go to the **Credentials** tab on the cloud console and create a new OAuth client ID credential

<figure><img src="../../../../.gitbook/assets/Creating a new Google OAuth credentials" alt=""><figcaption><p>Creating a new OAuth credentials</p></figcaption></figure>

* Select web client as the application type then fill in the `redirect_uri` given by the `google-drive.bot` and **Create**

<figure><img src="../../../../.gitbook/assets/Setting redirect URI on Google Cloud" alt=""><figcaption><p>Setting redirect URI on Google Cloud</p></figcaption></figure>

* Copy the `client secret` and `client id,` this will be used in configuring the app

<figure><img src="../../../../.gitbook/assets/Google Cloud OAuth2 credentials" alt=""><figcaption><p>Google Cloud OAuth2 credentials</p></figcaption></figure>

{% hint style="info" %}
To be able to access a user's Google Drive, we need to enable the Google Drive API access on our project. See the steps below
{% endhint %}

* Navigate to the **Library** tab from your project's dashboard
* Search for Google Drive API from the list of APIs and **Enable**

<figure><img src="../../../../.gitbook/assets/Add Google Drive API to project" alt=""><figcaption><p>Add Google Drive API to project</p></figcaption></figure>

## Configure Rocket.Chat Google Drive App

* Go over to the Google Drive app settings tab on your Rocket.Chat server **Administration** > **Workspace** > **Apps** > **Installed**
* &#x20;Paste the credentials from Google Cloud above and **Save changes**

<figure><img src="../../../../.gitbook/assets/Rocket.Chat Google Drive setting" alt=""><figcaption><p>Rocket.Chat Google Drive setting</p></figcaption></figure>

* Back in the chat room, typing the slash command `/google-drive help` gives you a list of commands you can use with the Google Drive app.
  * **/google-drive help:** shows the help list
  * **/google-drive connect:** starts the process to link your Google Account
  * **/google-drive disconnect:** remove your linked Google Account
  * **/google-drive create:** creates a new Google File and save it on your Google Drive
  * **/google-drive files:** opens the contextual bar with your Google Drive files list

With a complete installation, users can access the Google Drive app from the room contextual bar as one of the tabs or using the `google-drive` slash command

<figure><img src="../../../../.gitbook/assets/Google Drive app access means" alt=""><figcaption><p>Google Drive app access means</p></figcaption></figure>

{% hint style="warning" %}
For users to be able to use the Google Drive app from the contextual bar, your Rocket.Chat workspace must be operating from at least version `5.1.0.`

For workspaces below this, only admins can.
{% endhint %}
