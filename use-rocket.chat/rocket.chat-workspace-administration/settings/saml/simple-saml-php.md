# Simple SAML php

As a popular open-source IdP, SimpleSAMLphp can be used to provide an authentication endpoint for Rocket.Chat and the built-in SAML support. Assuming that you have a SimpleSAMLphp IdP up and running - [QuickStart instructions here](https://simplesamlphp.org/docs/latest/simplesamlphp-sp.html), you can find the metadata for the Rocket.Chat SAML Service Provider (SP) here, where 'my-app' is whatever you put in the **Custom Provider** box in the Rocket.Chat SAML admin page:

`https://my-rocketchat-domain.tld/_saml/metadata/my-app`

1. Copy the XML on this page
2. Open the metadata converter page in your SimpleSAMLphp admin UI found at: `/admin/metadata-converter.php`
3. Paste the XML, and submit it
4. Copy the resulting PHP output to the file in your SimpleSAMLphp installation under metadata: `/metadata/saml20-sp-remote.php`
5. You should now see your SP on the SimpleSAMLphp Federation page, listed as a trusted SAML 2.0 SP at: `module.php/core/frontpage_federation.php`

## IdP Attribute Mapping

Use the following attributes required to return user information to Rocket.Chat:

| Idp Returned Attribute Name | Usage                |
| --------------------------- | -------------------- |
| cn                          | User's Full Name     |
| email                       | User's Email Address |
| username                    | User's username      |
