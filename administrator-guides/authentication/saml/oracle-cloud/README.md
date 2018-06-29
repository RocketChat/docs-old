# Oracle Identity Cloud Service

## Configuring the Identity Provider

Oracle Identity Cloud Service is integrated as a SAML Identity Provider. For detailed explanation on the SAML options on Rocket.Chat, check the [SAML Documentation](../README.md).

## Step by Step configuration of Oracle Identity Cloud Service

### Adding a new Application

On your Oracle Cloud Applications Dashboard, find a button to add a new application. It should open the following pop-up:

![Add Application Popup][AddApplication]

Select **SAML Application** to open the configuration wizard.

### App Details

![App Details][AppDetails]

The only information needed on this page is the application name and URL. The URL you need to use here is the same one that is set on the *Custom Issuer* SAML configuration field on the Rocket.Chat settings.

### SSO Configuration

![SSO Configuration][SSOConfiguration]

To get the values for those new settings, you need to access the same *Custom Issuer* URL that you used on the previous page. It should show a XML file similar to the one below:

![Sample XML Configuration][SampleXMLConfiguration]

On the **AssertionConsumerService** tag, you need to copy the value of the *Location* attribute. Then paste this value on the *Assertion Consumer URL* field on the Oracle Settings.
On the **SingleLogoutService** tag, you need to copy the value of the *Location* attribute, then paste it in the *Single Logout URL* param of the Advanced Settings.
On the same **SingleLogoutService** tag, you need to copy the value of the *ResponseLocation* attribute, then paste it in the *Logout Response URL* param of the Advanced Settings.

Finally, the *Entity Id* param receices the URL of the XML file itself (same URL you used as the application URL).

Before clicking on **Finish**, click the **Download Identity Provider Metadata** button to download another XML file.

### Rocket.Chat Settings

![Rocket.Chat Settings][RocketChatSettings]

There are two Rocket.Chat settings that need to be copied from the IDP Metadata you just downloaded: *Custom Entry Point* and *IDP SLO Redirect URL*.
For the first one, locate the tag **SingleLogoutService** and copy the value of the *Location* attribute.
For the second param, locate the tag **md:SingleLogoutService** and copy the value of the *Location* attribute.

There may be multiple occurences of those tags in the XML file, so make sure that the copied URLS end with `/idp/sso` and `/idp/slo` and not `/sp/sso` and `/sp/slo`.

### Testing

Everything should be properly configured now. You can now add users to your SAML Integration app on the Oracle Dashboard and then test the login on your Rocket.Chat instance.

[AddApplication]: AddApplication.png
[AppDetails]: AppDetails.png
[RocketChatSettings]: RocketChatSettings.png
[SSOConfiguration]: SSOConfiguration.png
[SampleXMLConfiguration]: SampleXMLConfiguration.png
