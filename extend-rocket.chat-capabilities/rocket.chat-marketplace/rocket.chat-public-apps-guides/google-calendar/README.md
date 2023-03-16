# Google Calendar

{% hint style="danger" %}
**The Google Calendar app is currently in Beta and some features may not function as expected.**&#x20;
{% endhint %}

The Rocket.Chat Google Calendar App connects your Google Calendar with Rocket.Chat to stay organized and get a daily rundown of your events. It gives users the ability to do the following :

* Manage meeting invites.
* See a list of events you have scheduled for the day.
* Receive daily reminders on the events of the day.

## Setup Google Calendar App

### Prerequisites

Before setting up the Google Calendar App, here are some essential things to note.&#x20;

* Your workspace must be on a publicly available domain.
* A [Google Cloud project](https://console.cloud.google.com/) is required to obtain the [Oauth2 credentials](https://support.google.com/googleapi/answer/6158849?hl=en).

### Installing Google Calendar App

To install the Google Calendar Rocket.Chat App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Google Calendar** app and select it.
* Click **Install** and **Agree** to accept the required permissions.
* On the **Google Calendar App Info** screen, navigate to **Details > APIs** and copy the  `GET google-calendar-app-callback` URL. You need it to create the OAuth Client Id.
* After installing, you receive a direct message from the   `google-calendar .bot` with instructions on how to configure the app.&#x20;
* Run the slash command `/google-calendar setup` in the message box to view setup instructions.

{% hint style="info" %}
You can find the callback URL  for your workspace from the instructions.
{% endhint %}

### Getting Google Cloud Client Credentials

* Go to the [Google Cloud console](https://console.cloud.google.com/) and [create a new project](https://support.google.com/googleapi/answer/6158849?hl=en) or select an existing one.
* From the sidebar, Navigate to **API & Services** > **OAuth consent screen** and fill in the required fields to **Create** a consent screen.
* Navigate to **Credentials,** Click **New Credentials**, then select **OAuth client ID**.
* Select **Web application** as the application type, then fill in the required details. Add the  `redirect_uri` given by the `google-calendar.bot` . Click **Create.**
* Copy the `client secret` and `client id`. You need them to configure the app.

To enable Google Calendar API on your project,

* From the sidebar, Navigate to **Library.**
* Search for **Google Calendar API,** select and **Enable** it.

## Configure the Google Calendar App

* On the **Google Calendar App Info** screen, navigate to **Settings.**
* Paste the `client secret` and `client id`  from the Google Cloud console. Click **Save changes.**
*   Type the slash command `/google-calendar help` to give you a list of commands you can use with the google calendar app.

    * **/google-calendar help:** Shows the list of slash commands.
    * **/google-calendar setup:** Shows the steps to set up.
    * **/google-calendar connect:** Starts the process to link your Google Account.
    * **/google-calendar disconnect:** Removes your linked Google Account.
    * **/google-calendar settings:** Opens a contextual bar to manage your Google Calendar settings.
    * **/google-calendar events:** Returns all events in the calendar for today.



## Authorize and Connect with Google Calendar App

After the workspace administrator has [installed and configured](./#setup-google-calendar-app) the Google Calendar App, users can connect their Google accounts and access the Google Calendar app features. Users can request for the Google Calendar app at **Administration > Apps > Marketplace.**

To see if the Google Calendar App is installed on your workspace, type the slash command `/google-calendar`and watch out for any related information.

To connect your Google account:

* Type the slash command `/google-calendar auth.`
* You receive a message from the `google-calendar.bot`. Click **Authorize** to authorize your account.
* Select the Google account you want to authorize, and click **Allow** for all the account permission.
* After a successful connection, the `google-calendar.bot` message notifies you of a completed authentication.

With your account linked, you can now change the settings, list your events, and get notifications on meeting hours.

{% hint style="info" %}
You may be required to re-authenticate periodically whenever the authentication token expires.
{% endhint %}

