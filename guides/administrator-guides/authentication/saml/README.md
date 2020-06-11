# SAML

## Rocket.Chat Settings Page

### Custom Provider \(Suffix to SP entityID\)

This is the unique name for your application as a Service Provider \(SP\) for SAML. Whatever you enter here produces a metadata XML file you need in order to populate the metadata your IdP \(Identity Provider\) requires. For example, if you put 'my-app', then your metadata will be at:

`https://my-rocketchat-domain.tld/_saml/metadata/my-app`

### Custom Entry Point \(IDP SSO Redirect URL\)

This is the URL provided by your IdP for logging in. In SAML-terminology, it refers to the location \(URL\) of the SingleSignOnService with the Redirect binding \(urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\).

### IDP SLO Redirect URL

This is the URL provided by your IdP for logging out. In SAML-terminology, it refers to the location \(URL\) of the SingleLogoutService with the Redirect binding \(urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\).

### Custom Issuer \(SP entityID\)

The URI that is the unique identifier of your service. By convention, this is also the URL of your \(unedited\) metadata. Again, where you set Custom Provider to 'my-app', this will be:

`https://my-rocketchat-domain.tld/_saml/metadata/my-app`

### Custom Certificate \(IDP Signing Certificate\)

This is the public certificate for IdP providers used to verify SAML requests. Format for this is PEM without `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.

### Public Cert Contents \(SP Signing Certificate\)

The public part of the self-signed certificate you created for encrypting your SAML transactions. [Example of self-signed certificate on the SimpleSAMLphp website here.](https://simplesamlphp.org/docs/stable/simplesamlphp-sp#section_1_1)

Format for this is PEM WITH `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.

### Private Key Contents \(SP Signing Private Key\)

The private key matching the self-signed certificate you created as PKCS\#1 PEM. Format for this is PEM WITH `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`.

### SAML Assertion

You must to send the **Email** field in your assertion, or it doesn't work. When the email matches the existing user, it overwrites the user's username with the username value, if that is in your assertion.

### SAML Encryption

SAML Assertions encryption on **either** site might not work and cause signature validation to fail. See [\#10556](https://github.com/RocketChat/Rocket.Chat/issues/10556) for a more up to date information to this issue.

## SimpleSAMLphp IdP Configuration

As a popular open source IdP, SimpleSAMLphp can be used to provide an authentication endpoint for Rocket.Chat and the build in SAML support. Assuming that you have a SimpleSAMLphp IdP up and running - [quickstart instructions here](https://simplesamlphp.org/docs/stable/simplesamlphp-idp), you can find the metadata for the Rocket.Chat SAML Service Provider \(SP\) here, where 'my-app' is whatever you put in the **Custom Provider** box in the Rocket.Chat SAML admin page:

`https://my-rocketchat-domain.tld/_saml/metadata/my-app`

1. Copy the XML on this page
2. Open the metadata converter page in your SimpleSAMLphp admin UI found at: `/admin/metadata-converter.php`
3. Paste the XML, and submit it
4. Copy the resulting PHP output to the file in your SimpleSAMLphp installation under metadata: `/metadata/saml20-sp-remote.php`
5. You should now see your SP on the SimpleSAMLphp Federation page, listed as a trusted SAML 2.0 SP at: `module.php/core/frontpage_federation.php`

## IdP Attribute Mapping

Use the following attributes required to return user information to Rocket.Chat:

| Idp Returned Attribute Name | Usage |
| :--- | :--- |
| cn | User's Full Name |
| email | User's Email Address |
| username | User's username |

