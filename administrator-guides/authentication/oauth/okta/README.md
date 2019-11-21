# Okta Identity Cloud Service

Okta Identity Cloud Service can be integrated as an OAuth OpenID Identity Provider for Rocket.Chat.

## Rocket.Chat Settings

On the Rocket.Chat OAuth settings page **add a custom auth**.

Give the custom OAuth a unqiue name. For this example we will use *okta*.

Set the following:

- **Enabled**: *True*
- **URL**: The URL to your okta domain on okta.com with a suffix of */oauth2/v1*. For example: *`https://mycompany.okta.com/oauth2/v1`*
- **Token**: */token*
- **Token Sent Via**: *Header*
- **Identity Token Sent Via**: *Same as Token Sent Via*
- **Identity Path**: */userinfo*
- **Authorize Path**: */authorize*
- **Scope**: *openid email profile groups offline_access*
- **Param Name for access token**: *access_token*
- **id**: Set to the **Client ID** in the Okta app **Client Credentials** below.
- **Secret**: Set to the **Client secret** in the Okta app **Client Credentials** below.
- **Login Style**: Either setting works. Popup with pop up the Okta check/login in another window. Redirect will redirect the current page.
- **Button Text**: Set to personal preference.
- **Button Text Color**: Set to personal preference.
- **Button Color**: Set to personal preference.
- **Username field**: *preferred_username*
- **Avatar field**: Was not used on our Okta instance. Further research will be required to use this.
- **Roles/Groups field name**: roles
- **Merge Roles from SSO**: Our server syncs from ldap so we left this *false*.
- **Merge users**: Our server syncs from ldap so we left this *false*.

## Configuring the Identity Provider

### Adding a new Application in Okta

On your Okta Applications Dashboard, find the button to create a new app. It should open the following pop-up:

![Add App Popup][AddApp]

Select **OpenID Connect** and select **Create** to open the window to create the new integration.

### Create Integration

![Create Integration][CreateIntegration]

The only information needed on this page is the **application name** and **redirect URI**. The URI you need to use here is the same one that is shown on the **callback URL** listed at the top of the page after creating the custom OAuth section in the Rocket.Chat settings. In this example the custom oauth will be called *okta*. This will result in a **redirect URI** of *`https://my-rocketchat-server.org/_oauth/okta`*.

Select **Save** to be taken to the **General Settings** for the new app.

### Client Credentials

Copy the **Client ID** to the Rocket.Chat **id** field on the oauth settings page.

Copy the **Client secret** to the Rocket.Chat **secret** field on the oauth settings page.

### Testing

Everything should be properly configured now. You can now assign users or groups users to your Integration app on the Okta Dashboard and then test the login on your Rocket.Chat instance.

[AddApp]: AddApp.png
[CreateIntegration]: CreateIntegration.png