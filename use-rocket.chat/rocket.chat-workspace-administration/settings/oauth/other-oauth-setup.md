# Other OAuth Setup

Rocket.Chat offers other OAuth methods. Below are a few listed

## LinkedIn OAuth

To enable LinkedIn OAuth you need an OAuth app ID and secret.&#x20;

To create a new OAuth app, go to [creating a new application](https://www.linkedin.com/developers/) on the Developer Portal or visit the [My apps](https://www.linkedin.com/developers/apps) section to get the credentials from an existing app.

* **LinkedIn Login**: Lets you enable LinkedIn OAuth for login&#x20;
* **LinkedIn Id**: The OAuth Id of your LinkedIn OAuth app
* **LinkedIn Secret**: Your LinkedIn OAuth app secret
* **Linkedin Callback URL**: Set default to point to `<server_url>/_oauth/linkedin`

## Meteor OAuth

To enable Meteor OAuth you need a Meteor developers app ID and secret.

To get this, create a meteor cloud account at [https://cloud.meteor.com/](https://cloud.meteor.com) then create a new app in the [developers setting section](https://cloud.meteor.com/settings). This will provide you with all the credentials needed

* **Meteor Login**: Lets you enable Meteor OAuth for login&#x20;
* **Meteor Id**: The OAuth Id of your Meteor OAuth app
* **Meteor Secret**: Your Meteor OAuth app secret
* **Meteor Callback URL**: Set default to point to `<server_url>/_oauth/meteor`

## Twitter OAuth

To set up Twitter OAuth, you need a Twitter OAuth app Id and secret

Go to the Twitter [developer portal’s App page](https://developer.twitter.com/en/portal/projects-and-apps) to create or view your existing apps. This will give you the credentials you need.

* **Twitter Login**: Lets you enable Twitter OAuth for login&#x20;
* **Twitter Id**: The OAuth Id of your Twitter OAuth app
* **Twitter Secret**: Your Twitter OAuth app secret
* **Twitter Callback URL**: Set default to point to `<server_url>/_oauth/twitter`

## TokenPass OAuth

Tokenpass OAuth requires you to have a Tokenpass server URL, Id and secret.

These can be gotten from [Tokenpass developers portal](https://tokenpass.tokenly.com/auth/apps) by creating an application for OAuth integration

* **Tokenpass Login**: Enables Tokenpass login
* **Tokenpass Server URL**: Your server URL. Example `https://domain.com` (excluding trailing slash)
* **Tokenpass Id**: Tokenpass app Id
* **Tokenpass Secret**: Your Tokenpass app Id
* **Tokenpass Callback URL**: Set default to point to `<server_url>/_oauth/tokenpassv`

## Drupal OAuth

Using Drupal OAuth requires you to provide a Drupal client ID and Secret.

Drupal OAuth is made possible with the  [OAuth2 Client](https://www.drupal.org/project/oauth2\_client) module. Follow [this guide](https://www.drupal.org/docs/contributed-modules/oauth2-client/oauth2-client-8x-3x) on creating client credentials.

* **Drupal Login Enabled**: Lets you enable Drupal OAuth for login&#x20;
* **Drupal Server URL**: Your server URL. Example `https://domain.com` (excluding trailing slash)
* **Drupal OAuth2 Client ID**: The OAuth Id from Drupal configuration
* **Drupal oAuth2 Client Secret**: Your Drupal OAuth secret
* **Drupal Callback URL**: Set default to point to `<server_url>/_oauth/drupal`

## GitHub Enterprise OAuth

To enable GitHub Enterprise OAuth you need an OAuth client ID and secret.

Visit the[ GitHub guide on creating a new OAuth app](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) then fetch the needed credentials from there.

* **OAuth Enable**: Lets you enable GitHub Enterprise OAuth for login&#x20;
* **Server URL**: Your server URL. Example `https://domain.com` (excluding trailing slash)
* **Client Id**: App client Id
* **Client Secret**: App client secret
* **GitHub Enterprise Callback URL**: Set default to point to `<server_url>/_oauth/github_enterprise`

## Dolphin OAuth

Setting up Dolphin OAuth requires a Dolphin connect URL, Id, and secret

Visit this [configuration page](https://github.com/boonex/dolphin.pro/wiki/Dolphin-Connect-Setup-for-ChatPlus) on how to get these

* **URL**: Enter the URL under the Information section of the OAuth2 module
* **Enable**: Lets you enable Dolphin OAuth
* **Id**: Dolphin connect Id
* **Secret**: Dolphin connect secret
* **Login Style**: A dropdown to select the login style
* **Button Text**: Text to be displayed on the OAuth button
* **Button Text Color**: Text color of OAuth button
* **Button Color**: Color of the button

## Okta OAuth

To be able to use Okta OAuth, you need to go to the OAuth section of your Rocket.Chat settings and create a custom OAuth.

Then head over to your [Okta developers panel](https://developer.okta.com) and create a new Sign in OAuth app for a web application. fill in all the required information and save.

Your new app is created with all the credentials needed for configuration.
