# OAuth Provider Configuration

Rocket.Chat supports several different ways to authenticate, beyond the basic username/password authentication. Most authentication providers require a `clientID` and a `secret`. Below are brief descriptions of how to set up each provider.

These settings are in the `Accounts` setting page under `Administration`.

## Facebook

- Callback URL: `<<website_url>>/_oauth/facebook?close`

## GitHub

- Callback URL: `<<website_url>>/_oauth/github?close`

### GitHub Set up

1. Go to your [Application Settings](https://github.com/settings/applications)
2. Under the `Developer applications` tab, click the **Register new application** button
3. Fill in the form, and make sure you use the correct callback URL.

**Note**: If your callback URL is wrong, GitHub does not display any error. Instead of logging in, you receive an error message saying "No matching login attempt found."

## GitLab

## Google

- Callback URL: `<<website_url>>/_oauth/google?close`

### Google Set up

1. Go to the [Google Developer Console](https://console.developers.google.com), and create a new project
2. Set up your project by creating an "OAuth 2.0 client ID" (under `APIs & Auth` and `Credentials`)
3. After that, make sure you define a **Product Name** in the OAuth consent screen, and select **Web App** as application type. Otherwise, you won't be able to provide a callback URL

## LinkedIn

- Callback URL: `<<website_url>>/_oauth/linkedin`

## Meteor

TBD.

## Twitter

- Callback URL: `<<website_url>>/_oauth/twitter`
