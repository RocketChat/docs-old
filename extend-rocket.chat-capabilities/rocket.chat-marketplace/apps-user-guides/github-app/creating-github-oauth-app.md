# Creating GitHub OAuth App

GitHub OAuth Apps allowtheir users of the Rocket.Chat GitHub app to easily authenticate with thier GitHub accounts.

The OAuth app provides access to GitHub data, such as user profiles and repository information, and also helps in integrating GitHub functionalities.

To create a GitHub Oauth app, follow these steps.

* Log in to your GitHub account
* Click on your profile photo by the top right
* Click **Settings** from the dropdown
* Navigate to **Developer settings** > **OAuth Apps**
* Click on **New OAuth App** to create a new app
* Fill in the information required
  * Application name: Set the application name
  * Homepage URL: Fill in the URL of your workspace
  * Application description: Enter a description for the app
  * Authorization callback URL: Fill in the `github-app-callback` from the details page of the installed GitHub app
  * **Register application**

The GitHub Oauth app gets created.

Copy the `Client ID` and the newly created `Client secrets`. This is needed to configure the Rocket.Chat GitHub app.
