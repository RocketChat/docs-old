# OAuth Provider Configuration

Rocket.Chat supports several different ways to authenticate, beyond the basic username/password authentication. Most of these authentication providers require a `clientID` and a `secret`. Below are brief descriptions of how to set up each provider.

These settings are in the `Accounts` setting page under `Administration`.

## Facebook

- Callback url: `<<website_url>>/_oauth/facebook?close`

## GitHub

- Callback url: `<<website_url>>/_oauth/github?close`

### GitHub Setup

Go to your [Application Settings](https://github.com/settings/applications), and under the "Developer applications" tab, click the "Register new application" button. Fill in the form, taking care to make sure you use the correct callback url. _**Note: If your callback url is wrong, GitHub will not display an error, instead you will fail to log in with a "No matching login attempt found." error.**_

## GitLab

## Google

- Callback url: `<<website_url>>/_oauth/google?close`

### Google Setup

Go to the [Google Developer Console](https://console.developers.google.com) and create a new project. Setup your project by creating an "OAuth 2.0 client ID" (under "APIs & auth" and "Credentials"). After that, make sure you setup a "Product name" in the OAuth consent screen. Make sure to select Web App as application type. Otherwise you won't be able to provide a callback URL

## LinkedIn

- Callback url: `<<website_url>>/_oauth/linkedin`

## Meteor

TBD.

## Twitter

- Callback url: `<<website_url>>/_oauth/twitter`
