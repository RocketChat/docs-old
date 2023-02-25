# Other OAuth Setup

Here are some other  OAuth methods supported by Rocket.Chat.&#x20;

## Apple OAuth

Apple OAuth requires you to fill in  **Accounts\_OAuth\_Apple\_id** and **Accounts\_OAuth\_Apple\_secretKey**.

To enable **Apple OAuth** on your workspace,

* Navigate to **OAuth** settings (**Administration > Workspace > Settings> OAuth)** in your workspace.
* In the **Apple** tab, toggle on **Sign In with Apple.**

{% hint style="info" %}
If you want Apple login enabled only on mobile, you can leave all other fields empty.
{% endhint %}

## Twitter OAuth

Twitter OAuth requires you to fill in a Twitter **Client Id** and **Secret**.

To enable **Apple OAuth** on your workspace,&#x20;

Go to the Twitter [Developer Portal](https://developer.twitter.com/en/portal/projects-and-apps). Navigate to the **Apps** page to create or view your existing apps.   Copy the following credentials:

* **Twitter Id**: The OAuth Id of your Twitter OAuth app
* **Twitter Secret**: Your Twitter OAuth app secret
* **Twitter Callback URL**: Set default to point to `<server_url>/_oauth/twitter`

## TokenPass OAuth

Tokenpass OAuth requires you to have a **Tokenpass server URL**, **Id**, and **secret**.

These can be gotten from the [Tokenpass developers portal](https://tokenpass.tokenly.com/auth/apps) by creating an application for OAuth integration.

* **Tokenpass Login**: Enables Tokenpass login
* **Tokenpass Server URL**: Your server URL. Example `https://domain.com` (excluding trailing slash)
* **Tokenpass Id**: Tokenpass app Id
* **Tokenpass Secret**: Your Tokenpass app Id
* **Tokenpass Callback URL**: Set default to point to `<server_url>/_oauth/tokenpassv`

## Drupal OAuth

Using Drupal OAuth requires you to provide a Drupal client ID and Secret.

Drupal OAuth is made possible with the [OAuth2 Client](https://www.drupal.org/project/oauth2\_client) module. Follow [this guide](https://www.drupal.org/docs/contributed-modules/oauth2-client/oauth2-client-8x-3x) to create client credentials.

* **Drupal Login Enabled**: This lets you enable Drupal OAuth for login
* **Drupal Server URL**: Your server URL. Example `https://domain.com` (excluding trailing slash)
* **Drupal OAuth2 Client ID**: The OAuth Id from the Drupal configuration
* **Drupal oAuth2 Client Secret**: Your Drupal OAuth secret
* **Drupal Callback URL**: Set default to point to `<server_url>/_oauth/drupal`

## Dolphin OAuth

Setting up Dolphin OAuth requires a Dolphin connect URL, Id, and secret

Visit this [configuration page](https://github.com/boonex/dolphin.pro/wiki/Dolphin-Connect-Setup-for-ChatPlus) to see how to get these values:

* **URL**: Enter the URL under the Information section of the OAuth2 module
* **Enable**: This lets you enable Dolphin OAuth
* **Id**: Dolphin connect Id
* **Secret**: Dolphin connect secret
* **Login Style**: A dropdown to select the login style
* **Button Text**: Text to be displayed on the OAuth button
* **Button Text Color**: Text color of OAuth button
* **Button Color**: Color of the button

## Okta OAuth

To use Okta OAuth, you need to go to the OAuth section of your Rocket.Chat settings and create a custom OAuth.

* Navigate to **OAuth** settings (**Administration > Workspace > Settings> OAuth)** in your workspace. Create a custom OAuth.
* Go to your [Okta developers panel](https://developer.okta.com) and create a new Sign in OAuth app for a web application.&#x20;
* Fill in all the required information and save.
* Your new app is created with all the credentials needed for configuration.
