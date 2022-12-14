# Google Calendar App Setup

Here you'll find the guide on setting up and using the Google Calendar App for Rocket.Chat.

{% hint style="info" %}
Prerequisites:

* It is required to have your workspace on a publicly available domain.
* You need a [google cloud project](https://console.cloud.google.com/) where you will [get the Oauth2 credentials](https://support.google.com/googleapi/answer/6158849?hl=en).
{% endhint %}

We are going to:

1. [Install the Google Calendar App](google-calendar-app-setup.md#installing-google-calendar-app)
2. [Get Google cloud credentials](google-calendar-app-setup.md#getting-google-cloud-client-credentials)
3. [Configure the Google Calendar App in a Rocket.Chat workspace](google-calendar-app-setup.md#setting-up-google-calendar-app)

## Installing Google Calendar App

To install the Google Calendar Rocket.Chat App,

* Go to **Administration > Marketplace**
* Search for the **Google Calendar** app and click on the item
* Click **Install** and accept the needed permissions

<figure><img src="../../../.gitbook/assets/Google calendar app required permissions" alt=""><figcaption><p>Google calendar app required permissions</p></figcaption></figure>

You should see an interface with the app details showing after a successful install. Take note of the `callback url`, it will be needed when creating the Oauth client id and secret in the Google cloud console.

<figure><img src="../../../.gitbook/assets/Google calendar app page" alt=""><figcaption><p>Google calendar app page</p></figcaption></figure>

* After installing you get a message from `google-calendar.bot` with instructions on how to configure.

<figure><img src="../../../.gitbook/assets/Google calendar setup command" alt=""><figcaption><p>Google calendar setup command</p></figcaption></figure>

Now that you have the app installed on your server, it is time to configure the integration. Let us start with getting the OAuth credentials and then setting up.

* You can see the setup instructions by running the slash command `/google-calendar setup` in the chatbox with the calendar bot

<figure><img src="../../../.gitbook/assets/Google calendar setup instruction" alt=""><figcaption><p>Google calendar setup instruction</p></figcaption></figure>

## Getting Google Cloud Client Credentials

* Go over to your [Google cloud console](https://console.cloud.google.com/), then proceed with [this guide on how to set up the API credentials](https://support.google.com/googleapi/answer/6158849?hl=en) needed by the Google calendar app
* After creating your app, from the Google cloud dashboard navigate to **API & Services** > **OAuth consent screen** and fill in the required fields to **Create** a consent screen first

<figure><img src="../../../.gitbook/assets/Creating OAuth consent screen on Google Cloud" alt=""><figcaption><p>Creating OAuth consent screen on Google Cloud</p></figcaption></figure>

* Next, go to the **Credentials** tab and create a new OAuth credentials

<figure><img src="../../../.gitbook/assets/Creating a new Google OAuth credentials" alt=""><figcaption><p>Creating a new OAuth credentials</p></figcaption></figure>

* Select web client as the application type then fill in the `redirect_uri` given by the `google-drive.bot` and **Create**

<figure><img src="../../../.gitbook/assets/Setting redirect URI on Google Cloud" alt=""><figcaption><p>Setting redirect URI on Google Cloud</p></figcaption></figure>

* When done, copy the `client secret` and `client id` this will be used in configuring the app

<figure><img src="../../../.gitbook/assets/Google Cloud OAuth2 credentials" alt=""><figcaption><p>Google Cloud OAuth2 credentials</p></figcaption></figure>



* To be able to access Google Calendar, we need to enable Google Calendar API access on our project. To do this,
  * Navigate to the **Library** tab from your project's dashboard
  * Search for Google Calendar API from the list of APIs

<figure><img src="../../../.gitbook/assets/Add Google Calendar API to project" alt=""><figcaption><p> Add Google Calendar API to project</p></figcaption></figure>

* Then **Enable** it

<figure><img src="../../../.gitbook/assets/Enable Google Calendar API" alt=""><figcaption><p>Enable Google Calendar API</p></figcaption></figure>

## Setting up Google Calendar App

* Over on your Rocket.Chat workspace, navigate to the GoogleCcalendar app settings page
* Paste the credentials copied earlier from the Cloud Console and **Save changes**

<figure><img src="../../../.gitbook/assets/Google Calendar app settings page" alt=""><figcaption><p>Google Calendar app settings page</p></figcaption></figure>

* Typing the slash command `/google-calendar help` gives you a list of commands you can use with the google calendar app:
  * **help:** shows this list
  * **setup:** shows the steps to set up
  * **authorize:** starts the process to link your Google Account
  * **unauthorize:** removes your linked Google Account
  * **settings:** opens a contextual bar to manage your Google Calendar settings
  * **events:** returns all events in the calendar for today

