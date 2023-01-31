# MS Office 365 OAuth Setup

This guide shows how you can set up OAuth integration between Microsoft accounts and Rocket.Chat.

This is achieved with the use of [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/) which is an identity service by Microsoft that provides single sign-on and other authentication methods.

Follow these steps to enable Office 365 OAuth on your Rocket.Chat instance.

## Create Custom O365 OAuth

To create a custom authentication method for your Rocket.Chat instance:

* Navigate to **Administration** > **Workspace** > **Settings** > **OAuth** and click on **Custom OAuth** and set the new OAuth integration name

![Create new custom OAuth](<../../../../.gitbook/assets/Creating custom OAuth>)

* After creating the new integration, you are given the `callback URL` followed by other fields to configure

![365OAuth integration details page](<../../../../.gitbook/assets/0365 OAuth RC details>)

## Creating an Azure Active Directory App

* Log in to your [Azure portal](https://portal.azure.com/) then navigate to the **Azure Active Directory** tab

![Azure Portal](<../../../../.gitbook/assets/Azure Portal>)

* Create a new **App Registration**

![Azure Active Directory new App Registration](<../../../../.gitbook/assets/Azure Active Directory new App Registration>)

* Fill in the name and other fields including the redirect URI provided by Rocket.Chat when [creating the new OAuth integration](ms-office-365-oauth-setup.md#create-custom-365-oauth)

![Azure AD app details](<../../../../.gitbook/assets/Azure AD App details>)

After registering your new app, take note of `Application (client) ID` it will be needed to configure the integration later.

* On your new app's page, navigate to **Certificates and Secret** tab to create a **New client secret**

![AD create new app secret](<../../../../.gitbook/assets/new clent secret>)

* After creating, take note of the `client secret` immediately. It is only displayed once and is needed in configuring the integration back in Rocket.Chat

![AD client secret](<../../../../.gitbook/assets/Azure AD App secret page>)

## Configuring O365 OAuth

After creating the Azure Active Directory App with its secret, head over back to your Rocket.Chat O365 custom OAuth integration page and set the various fields

* **Enable**: Set to true to enable this OAuth integration
* **URL**: `https://login.microsoftonline.com/consumers`
* **Token Path**: `/oauth2/v2.0/token`
* **Token Sent Via**: Payload
* **Identity Token Sent Via**: Header
* **Identity Path**: `/openid/userinfo`
* **Authorize Path**: `/oauth2/v2.0/authorize`
* **Scope**: openid
* **Param Name for access token**: `access_token`
* **Id**: `<Your Azure AD Application (client) ID>`
* **Secret**: `<Your Azure AD client secret>`

Do the configurations and **Save changes**

![OAuth 365 integration settings page](<../../../../.gitbook/assets/OAuth 365 integration settings page>)

* After saving, you will find the O365 Oauth button on the login and signup page. Clicking on them brings up a popup to authenticate your Microsoft account

![O365 Button on login and sign in pages](<../../../../.gitbook/assets/O365 Button on login and sign in pages>)

* Simply sign in to your Office account to authenticate

![Microsoft account sign in](<../../../../.gitbook/assets/Microsoft account sign in>)

* Accept the permission required to proceed

![Microsoft login grant permision](<../../../../.gitbook/assets/Microsoft login grant permision>)
