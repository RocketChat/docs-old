# GitHub App

The Rocket.Chat GitHub App enhances the collaboration between developers by seamlessly integrating GitHub and Rocket.Chat. This app enables users to perform various tasks, such as searching and sharing Issues and Pull **** Requests, subscribing to Repository events, creating new Issues, reviewing and merging Pull Requests, and more, directly from the Rocket.Chat workspace.

## Install Github App

To install the GitHub App,

* Navigate to **Administration > Workspace > Apps.**
* Search for the **GitHub** app.
* Click **Install**
* **Agree** to the permissions to confirm the installation.
* On the **GitHub App Info** screen, navigate to **Details > API and** copy the `GET github-app-callback`  URL.

## Create the GitHub OAuth App

GitHub OAuth Apps allow users of the Rocket.Chat GitHub app to easily authenticate with their GitHub accounts. The OAuth app provides access to GitHub data, such as user profiles and repository information, and helps integrate GitHub functionalities.

To create a GitHub OAuth app,

* Log in to your GitHub account.
* Click your avatar from the menu bar.
* Select **Settings** and navigate to **Developer settings** > **OAuth Apps.**
* Click **New OAuth App** to create a new app.
* Fill in the required information.
  * **Application name**: Set the application name.
  * **Homepage URL**: Fill in the URL of your workspace.
  * **Application description**: Add a description of the app.
  * **Authorization callback URL**: Paste the  `GET github-app-callback`  URL you copied from the GitHub App.
* Click **Register Application**.
* After registering the app, click **Generate a new client secret** to create a new client secret for the app.
* Copy the **Client ID** and the newly created **Client secret.** You'll need them to configure the Rocket.Chat GitHub app.

## Configure GitHub App

To configure the GitHub App,

* On the **GitHub App Info** screen, navigate to **Settings.**
* Fill in the `github-app-oauth-client-id` and `github-app-oauth-client-secret` with values, you copied from the GitHub OAuth app.
* Click **Save changes.**
