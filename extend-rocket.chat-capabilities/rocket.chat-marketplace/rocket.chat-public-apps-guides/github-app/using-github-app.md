# Using GitHub App

After installing the GitHub app, users in your workspace can begin using it. Interaction with the GitHub app is achieved using Slash commands.

{% hint style="success" %}
The `/github` slash command is used to initiate actions with the GitHub app.
{% endhint %}

A list of possible commands can be seen below:

* `/github` : Shows the GitHub App help
* `/github login`: Log in to the GitHub app using GitHub OAuth
* `/github logout:` Logs a user out
* `/github me`: Shows the user's GitHub profile and issues
* `/github search`: Searches for an issue and a pull request
* `/github issue:` Adds a new issue to a GitHub repository&#x20;
* `/github issues`: Assign and share issues
* `/github subscribe`: View/Add/Delete/Update repository subscriptions
* `/github <username>/<repository name>`: Shows an interactive interface to fetch repository data
* `/github <username>/<repository name> repo`: Get the details of a repository
* `/github <username>/<repository name> issues`: List out the issues in a repository
* `/github <username>/<repository name> contributors`: Get a list of contributors a repository has
* `/github <username>/<repository name> pulls`: Get Recent Pull Requests of a Repository
* `/github <username>/<repository name> pulls <pull number>`: Review a pull request
* `/github <username>/<repository name> subscribe`: Subscribe to all events of a repository
* `/github <username>/<repository name> unsubscribe`: Unsubscribe from all events of a repository

{% hint style="info" %}
To use any other GitHub slash command, a user is required to authenticate first, using `/github login`.
{% endhint %}

## GitHub App Authentication

### Login

When the slash command `/github login` is sent,

* You receive a message from the `github.bot` with a **GitHub login** button
* Click on the button and authenticate with your GitHub account
* A message is received on successful authentication

### Logout

To log out,

* Type the slash command `/github logout`
* This removes the current unauthenticated user

## GitHub App Functions

### `/github me`

A modal is seen with your profile details

* Click on **Issues** to see a list of issues belonging to you
* Click on **Share Profile** to select and share your profile details within a chat

### `/github search`

Lets you search for issues or pull requests in a specified repository.

* Specify the search parameters and **Search**

### `/github issue`

Create a new issue in a GitHub repository

* Enter the **Full Repository Name** you wish to create the issue in, and **Next**
* Fill in the issue details and **Create Issue**
* The issue gets created and a link to it provided

### `/github issues`

### `/github subscribe`

Manage subscriptions on repositories.

When you subscribe to a repository event, you receive a message within the Rocket.Chat room from which each the event gets triggered

* Click **Add Subscriptions** to add a new subscription
  * Specify the repository, the events to subscribe to, and **Subscribe**
  * You get a message confirming the subscription
* Click **Delete Subscriptions** to delete existing subscriptions
  * Select the subscription and **Unsubscribe**
  * You receive a message about the unsubscription
* Click **Refresh** to refresh the list of subscriptions

### `/github <username>/<repository name>`

Get information about a repository

* Click on **Overview** to see the repository overview
* Click on **Issues** to get all the repository issues
* Click on **Contributors** to get a list of all the top contributors
* Click on **Pull Requests** to see the open pull requests

## GitHub App Repository Actions

### `/github <username>/<repository name> repo`

Get a detailed overview of a repository

### `/github <username>/<repository name> issues`

Gives you a list of issues open on a current repository.

Click on any to open the issue in a new tab.

### `/github <username>/<repository name> contributors`

Get a list of contributors under a repository.

Click on a user to open their GitHub profile on a new tab.

### `/github <username>/<repository name> pulls`

Get a list of open pull requests on a repository.

Click on a PR to open it in a new tab.

### `/github <username>/<repository name> pulls <pull number>`

Review a specific pull request using its PR number.

* Click on **View Changes** to see the changes made by that pull request
* **View File** lets you see the file(s) that have been affected by the pull request
* Click on **Comments** to view the comments under the PR where you **Add Comment**
* Click on **Merge** to specify the merge request detail and **Merge** the PR

### `/github <username>/<repository name> subscribe`

Subscribe to all the events of a repository and receive messages in that channel when the event gets triggered.

### `/github <username>/<repository name> unsubscribe`

Unsubscribe from all events of a repository.
