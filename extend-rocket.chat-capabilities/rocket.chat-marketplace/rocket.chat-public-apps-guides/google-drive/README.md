# Google Drive

{% hint style="danger" %}
**The Google Drive app is currently in Beta, and some features may not function as expected.**&#x20;
{% endhint %}

The Rocket.Chat Google Drive App brings a seamless Google Drive experience into your Rocket.Chat workspace. It gives users the ability to:

* Open and view your Google Drive files and their details.
* Share files and manage sharing permissions.
* Create new files directly from Rocket.Chat.

## Setup the Google Drive App

### Prerequisites

Before setting up the Google Drive App, here are some essential things to note.&#x20;

* Your workspace must be on a publicly available domain.
* A [Google Cloud project](https://console.cloud.google.com/) is required to obtain the [Oauth2 credentials](https://support.google.com/googleapi/answer/6158849?hl=en).

### Installing Google Drive App

To install the Google Drive Rocket.Chat App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Google Drive** app and select it.
* Click **Install** and **Agree** to accept the required permissions.
* On the **Google Drive App Info** screen, navigate to **Details > APIs** and copy the  `GET google-drive-app-callback` URL.&#x20;
* After installing, you receive a direct message from the   `google-drive.bot` with instructions on how to get started. Click **Setup** to view the instructions.

{% hint style="info" %}
You can find the callback URL  for your workspace from the instructions.
{% endhint %}

### Getting Google Cloud Client Credentials

* Go to the [Google Cloud console](https://console.cloud.google.com/) and [create a new project](https://support.google.com/googleapi/answer/6158849?hl=en) or select an existing one.
* From the sidebar, Navigate to **API & Services** > **OAuth consent screen** and fill in the required fields to **Create** a consent screen.
* Navigate to **Credentials,** Click **New Credentials**, then select **OAuth client ID**.
* Select **Web application** as the application type, then fill in the required details. Add the  `redirect_uri` given by the `google-drive.bot` . Click **Create.**
* Copy the `client secret` and `client id`. You need them to configure the app.

To enable Google DriveAPI on your project,

* From the sidebar, Navigate to **Library.**
* Search for **Google Drive API,** select and **Enable** it.

### Configure Rocket.Chat Google Drive App

* On the **Google Drive App Info** screen, navigate to **Settings.**
* Paste the `client secret` and `client id`  from the Google Cloud console. Click **Save changes.**
* Go to a [room](../../../../use-rocket.chat/user-guides/rooms/) on your workspace, and type the slash command `/google-drive help` to return a list of commands you can use with the Google Drive app.
  * **/google-drive help:** shows the help list.
  * **/google-drive connect:** starts the process to link your Google Account.
  * **/google-drive disconnect:** remove your linked Google Account.
  * **/google-drive create:** creates a new Google File and saves it on your Google Drive.
  * **/google-drive files:** opens the contextual bar with your Google Drive files list.
* After installation, users can access the Google Drive app using the slash command. They can click the **Kebab menu** in the room header and select **Google Drive**.

{% hint style="warning" %}
Your Rocket.Chat workspace must be running from at least version `5.1.0` for users to access the Google Drive app from the room header. For workspaces below this version, only admins have access.
{% endhint %}

## Authorize and Connect with Google Drive App

After the workspace administrator has [installed and configured](./#setup-the-google-drive-app) the Google Drive App, users can connect their Google accounts and access the files in their Drive. Users can request for the Google Drive app at **Administration > Apps > Marketplace.**

To see if the Google Drive App is installed on your workspace, type the slash command `/google-drive` and watch out for any related information.

To connect your Google account,

* Type the slash command `/google-drive connect.`
* You receive a message from the `google-drive.bot`.Click **Authorize** to authorize your account.
* Select the Google account you want to authorize, and click **Allow** for all the account permissions.
* After a successful connection, the `google-drive.bot` message notifies you of a completed authentication.

With your account linked, you can now [view](google-drive-app-file-actions.md#list-google-drive-files), [create](google-drive-app-file-actions.md#create-a-new-google-drive-file) and [share files](google-drive-app-file-actions.md#share-google-drive-file) directly from Rocket.Chat.

{% hint style="info" %}
You may be required to re-authenticate periodically whenever the authentication token expires.
{% endhint %}
