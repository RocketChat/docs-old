# Google Calendar App Setup

Here you'll find the guide on setting up and using the Google Calendar App for your Rocket.Chat workspace.

{% hint style="info" %}
Prerequisites:

* It is required to have your workspace on a publicly available domain.
* You need a [google cloud project](https://console.cloud.google.com/) where you will [get the Oauth2 credentials](https://support.google.com/googleapi/answer/6158849?hl=en).
{% endhint %}

This guide shows you how to:

1. [Install the Google Calendar App](google-calendar-app-setup.md#installing-google-calendar-app)
2. [Get Google cloud credentials](google-calendar-app-setup.md#getting-google-cloud-client-credentials)
3. [Configure the Google Calendar App in a Rocket.Chat workspace](google-calendar-app-setup.md#setting-up-google-calendar-app)

## Installing Google Calendar App

To install the Google Calendar Rocket.Chat App,

* Go to **Administration > Marketplace**
* Search for the **Google Calendar** app and click on the item
* Click **Install** and accept the needed permissions to install

After a successful installation, take note of the `callback url` on the Google Calendar App details tab, it is needed when creating the Oauth _client id_ and _secret_ in the Google cloud console.

<figure><img src="../../../../.gitbook/assets/Google calendar app details screen.png" alt=""><figcaption><p>Google calendar app details screen</p></figcaption></figure>

* You get a message from `google-calendar.bot` with instructions on how to configure the app.

<figure><img src="../../../../.gitbook/assets/Google calendar setup command" alt=""><figcaption><p>Google calendar setup command</p></figcaption></figure>

Now that you have the app installed on your server, it is time to configure the integration. Let us start with getting the OAuth credentials and then setting up.

You can see the setup instructions by running the slash command `/google-calendar setup` in the message box.

<figure><img src="../../../../.gitbook/assets/Google calendar setup instruction" alt=""><figcaption><p>Google calendar setup instruction</p></figcaption></figure>

## Getting Google Cloud Client Credentials

* Go to the [Google cloud console](https://console.cloud.google.com/) and [create a new project](https://support.google.com/googleapi/answer/6158849?hl=en) or select an existing one
* From the Google cloud dashboard navigate to **API & Services** > **OAuth consent screen** and fill in the required fields to **Create** a consent screen&#x20;

<figure><img src="../../../../.gitbook/assets/Google OAuth consent screen Calendar.png" alt=""><figcaption><p>Creating OAuth consent screen on Google Cloud</p></figcaption></figure>

* Next, go to the **Credentials** tab and create a new OAuth credentials

<figure><img src="../../../../.gitbook/assets/Creating a new Google OAuth credentials" alt=""><figcaption><p>Creating a new OAuth credentials</p></figcaption></figure>

* Select web client as the application type then fill in the `redirect_uri` given by the `google-calendar.bot` and **Create**

<figure><img src="../../../../.gitbook/assets/Setting redirect URI on Google Cloud" alt=""><figcaption><p>Setting redirect URI on Google Cloud</p></figcaption></figure>

* When done, copy the `client secret` and `client id` this will be used in configuring the app

<figure><img src="../../../../.gitbook/assets/Google Cloud OAuth2 credentials" alt=""><figcaption><p>Google Cloud OAuth2 credentials</p></figcaption></figure>

{% hint style="info" %}
To be able to access a user's Google Calendar, you need to enable the Google Calendar API access on our project. See the steps below
{% endhint %}

* Navigate to the **Library** tab from your project's dashboard
* Search for Google Calendar API from the list of APIs and **Enable**

<figure><img src="../../../../.gitbook/assets/Add Google Calendar API to project" alt=""><figcaption><p> Add Google Calendar API to project</p></figcaption></figure>

## Setting up Google Calendar App

* Go over to the Google Calendar app settings tab on your Rocket.Chat server **Administration** > **Workspace** > **Apps** > **Installed** > **Google Calendar** > **Settings**
* &#x20;Paste the credentials from Google Cloud above and **Save changes**

<figure><img src="../../../../.gitbook/assets/Google Calendar app settings page" alt=""><figcaption><p>Google Calendar app settings page</p></figcaption></figure>

* Typing the slash command `/google-calendar help` gives you a list of commands you can use with the google calendar app:
  * **/google-calendar help:** Shows the list of slash commands
  * **/google-calendar setup:** Shows the steps to set up
  * **/google-calendar connect:** Starts the process to link your Google Account
  * **/google-calendar disconnect:** Removes your linked Google Account
  * **/google-calendar settings:** Opens a contextual bar to manage your Google Calendar settings
  * **/google-calendar events:** Returns all events in the calendar for today

