# Google OAuth Setup

Google OAuth requires you to fill in the `Google Id` and `Google Secret` of your Google OAuth app.

To enable **Google OAuth** on your workspace,

* Go to the [Google Developer Console](https://console.developers.google.com), and click **Create Project.**
* Fill in the **Project name**, **Location,** and **Organization**, then click **Create**.
* Navigate to **APIs and services**, then select **OAuth consent screen.**
* On the OAuth consent screen, set the required fields, fill in the **App name,** then click **Save and Continue.**
* After creating the new app, proceed to the **Dashboard** where the app info is displayed.
* Select the **Credentials** tab and click the **CREATE CREDENTIALS** to create the **OAuth client ID**. From the dropdown, select **OAuth client ID.**
* Set the application type to **Web Application**, then click **CREATE**.&#x20;

{% hint style="info" %}
The **Web Application** setting offers the **callback URL** option, which is necessary for configuration.
{% endhint %}

* Your OAuth Client is created, and your Client ID and Secret are displayed in a modal box. Copy or download these credentials.
* Navigate to **OAuth** settings (**Administration > Workspace > Settings> OAuth)** in your workspace.
* In the Google tab, fill in the OAuth credentials you copied earlier and toggle on **Google Login**.
* Click **Save Changes**. A **Sign in with Google** button appears on your workspace's login page. Users can now **sign in with google** by clicking that button.
