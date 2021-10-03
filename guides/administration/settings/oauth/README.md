---
description: >-
  Rocket.Chat supports several different ways to authenticate, beyond the basic
  username/password authentication. Most authentication providers require a
  clientID and a secret.
---

# OAuth

To set up your desired provider:

1. Go to **Administration.**

![](../../../../.gitbook/assets/image%20%2830%29.png)

2. Search '**OAuth'** in **Settings** and open it.

![](../../../../.gitbook/assets/image%20%28153%29.png)

## Facebook

* Callback URL: `<<website_url>>/_oauth/facebook?close`

## GitHub

* Callback URL: `<<website_url>>/_oauth/github?close`

### GitHub Set up

1. Go to your [Application Settings](https://github.com/settings/applications)
2. Under the `Developer applications` tab, click the **Register new application** button
3. Fill in the form, and make sure you use the correct callback URL.

**Note**: If your callback URL is wrong, GitHub does not display any error. Instead of logging in, you receive an error message saying, "No matching login attempt found."

## Google

* Callback URL: `<<website_url>>/_oauth/google?close`

### Google Set up

1. Go to the [Google Developer Console](https://console.developers.google.com), and create a new project
2. Set up your project by creating an "OAuth 2.0 client ID" \(under `APIs & Auth` and `Credentials`\)
3. After that, make sure you define a **Product Name** in the OAuth consent screen, and select **Web App** as the application type. Otherwise, you won't be able to provide a callback URL

## Apple

To use Apple account for authentication:

1. Turn on **Sign in with Apple**.

![](../../../../.gitbook/assets/image%20%28152%29.png)

## LinkedIn

* Callback URL: `<<website_url>>/_oauth/linkedin`

### LinkedIn Set up

1. Go to the [Developers Linkedin](https://www.linkedin.com/developers/) and create a new app
2. Go to Auth tab.
3. Set up your project by creating an OAuth client ID and Client Secret.

## Twitter

* Callback URL: `<<website_url>>/_oauth/twitter`

## WordPress

Please follow the instructions [here](https://docs.rocket.chat/guides/administrator-guides/authentication/oauth/wordpress).

## Add Custom OAuth

To add custom OAuth:

1. Click **Add custom oAuth**

![](../../../../.gitbook/assets/image%20%28151%29.png)

2.  Give a unique name for the custom oauth

![](../../../../.gitbook/assets/image%20%28150%29.png)

## Refresh OAuth Services

Click Refresh OAuth Services to refresh the options that are displayed on the login screen based on the settings you saved, as shown below:



