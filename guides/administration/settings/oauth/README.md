---
description: >-
  Rocket.Chat supports several different ways to authenticate, beyond the basic
  username/password authentication. Most authentication providers require a
  clientID and a secret.
---

# OAuth

To set up your desired provider:

1. Go to **Administration.**

![](<../../../../.gitbook/assets/image (27).png>)

1. Search '**OAuth'** in **Settings** and open it.

![](<../../../../.gitbook/assets/image (132).png>)

## Apple

To use Apple account for authentication:

1. Turn on **Sign in with Apple**.

![](<../../../../.gitbook/assets/image (133).png>)

## Facebook

* Callback URL: `<<website_url>>/_oauth/facebook?close`

## GitHub

* **OAuth Enable**: Lets you enable GitHub OAuth
* **Client Id**: The Client Id gotten from your GitHub application setting section
* **Client Secret**: The Client secrete gotten from your GitHub application setting section
* **Github Callback URL**: `<<website_url>>/_oauth/github`

{% content-ref url="github-oauth-setup.md" %}
[github-oauth-setup.md](github-oauth-setup.md)
{% endcontent-ref %}

## GitLab

* **OAuth Enable**: Lets you enable GitHub OAuth
* **GitLab URL**: GitLab URL
* **GitLab Id**: The GitLabId gotten from your GitLab app
* **Client Secret**: The Client secrete gotten from your GitLab application setting section
* **Identity Path**: Set default to `/api/v4/user`
* **Merge Users**: Whether or not to merge users
* **Github Callback URL**: `<<website_url>>/_oauth/gitlab`

{% content-ref url="gitlab-oauth-setup.md" %}
[gitlab-oauth-setup.md](gitlab-oauth-setup.md)
{% endcontent-ref %}

## Google

* Callback URL: `<<website_url>>/_oauth/google?close`

### Google Set up

1. Go to the [Google Developer Console](https://console.developers.google.com), and create a new project
2. Set up your project by creating an "OAuth 2.0 client ID" (under `APIs & Auth` and `Credentials`)
3. After that, make sure you define a **Product Name** in the OAuth consent screen, and select **Web App** as the application type. Otherwise, you won't be able to provide a callback URL

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

![](<../../../../.gitbook/assets/image (134).png>)

1. Give a unique name for the custom oauth

![](<../../../../.gitbook/assets/image (135).png>)

## Refresh OAuth Services

Click Refresh OAuth Services to refresh the options that are displayed on the login screen based on the settings you saved, as shown below:
