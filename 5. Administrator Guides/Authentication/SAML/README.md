# SAML

## Rocket.Chat Settings Page

### Custom Provider

This is the unique name for your application as a Service Provider (SP) for SAML. Whatever you enter here will produce a metadata XML file you will need in order to populate the metadata your IdP (Identity Provider) requires. For example, if you put 'my-app', then your metadata will be at:

https://my-rocketchat-domain.tld/_saml/metadata/my-app

### Custom Entry Point

This is the URL provided by your IdP for logging in.

### IDP SLO Redirect URL

This is the URL provided by your IdP for logging out.

### Custom Issuer

URL of your metadata, again, where you set Custom Provider to 'my-app' this will be:

https://my-rocketchat-domain.tld/_saml/metadata/my-app

### Custom Certificate

This is the idp providers public certificate that is used to verify the SAML requests. Format for this is without BEGIN CERTIFICATE and END CERTIFICATE


### Public Cert Contents

The public part of the self-signed certificate you created for encrypting your SAML transactions. [Example of self-signed certificate on the SimpleSAMLphp website here.](https://simplesamlphp.org/docs/stable/simplesamlphp-sp#section_1_1) 

### Private Key Contents

The private key matching the self-signed certificate you created.

### SAML assertion

You will have to send email field in your assertion or it will not work. If the email matches existing user it will overwrite the users username with username value if that is in your assertion. 

## SimpleSAMLphp IdP Configuration

As a popular open source IdP, SimpleSAMLphp can be used to provide an authentication endpoint for Rocket.Chat and the built in SAML support. Assuming you have a SimpleSAMLphp IdP up and running - [quickstart intructions here](https://simplesamlphp.org/docs/stable/simplesamlphp-idp) - you can find the metadata for the Rocket.Chat SAML Service Provider (SP) here, where 'my-app' is whatever you put in the 'Custom Provider' box in the Rocket.Chat SAML admin page:

https://my-rocketchat-domain.tld/_saml/metadata/my-app

Copy the XML on this page, open the metadata converter page in your SimpleSAMLphp admin UI (which you'll find at `/admin/metadata-converter.php`), paste the XML and submit.

Copy the resulting PHP output to the file in your SimpleSAMLphp installation under metadata: `/metadata/saml20-sp-remote.php`

You should now see your SP on the SimpleSAMLphp Federation page, listed as a trusted SAML 2.0 SP at: `module.php/core/frontpage_federation.php`

## IdP Attribute Mapping
The following attribute are required when returning the user information to Rocket Chat:

| Idp Returned Attribute Name | Usage |
| ------ | ------ |
| cn | User's Full Name |
| email | User's Email Address |
| username | User's username |
