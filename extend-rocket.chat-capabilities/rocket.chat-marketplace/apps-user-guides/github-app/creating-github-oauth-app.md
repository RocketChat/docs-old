# Creating GitHub OAuth App

GitHub OAuth Apps allow users of the Rocket.Chat GitHub app to easily authenticate with their GitHub accounts. The OAuth app provides access to GitHub data, such as user profiles, repository information, and helps integrate GitHub functionalities.

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
  * **Register application,** and your GitHub Oauth app is created.

Copy the `Client ID` and the newly created `Client secrets`. These are needed to configure the Rocket.Chat GitHub app.
