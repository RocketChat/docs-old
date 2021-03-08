# Keycloak SAML Client

In order to properly configure the SAML connection between Keycloak and Rocketchat, we need the following parameters:

* The `rocketchat-url` where your rocketchat service (i.e. the Service Provider or SP) is being served. We will assume `https://rocketchat.your.server/chat`.
* The `keycloak-url` where your keycloak service (i.e. the Identity Provider or IdP) is being served
* The `keycloak-realm` you are creating your client in
* A `custom-issuer` (Service Provider EntityID), that is a name for your rocketchat-service. We will assume `rocketchat-saml`.

## Configuring Keycloak Identity Provider

Create a new client in your `<keycloak-realm>`.

1. Set the *Client ID*: `<custom-issuer>`
2. Select the *Client protocol*: `saml`
3. Set *Client SAML Endpoint*: `<rocketchat-url>/_saml/metadata/<custom-issuer>`
4. Deactivate the option *Client Signature Required*
5. Set a *Valid Redirect URIs* value like `<rocketchat-url>/*`

The following image shows this basic configuration (nevermind the different option settings):

![Keycloak SAML Configuration Basic][Keycloak SAML Configuration Basic]

## Configuring Rocketchat SAML

Login to Rocket.Chat with an administrator account and navigate to SAML page.

1. Set *Custom Provider* to `<custom-issuer>`
2. Set *Custom Entry Point* to `<keycloak-url>/auth/realms/ElexisEnvironment/protocol/saml`
3. Set *IDP SLO Redirect URL* to `<keycloak-url>/auth/realms/ElexisEnvironment/protocol/saml`
4. Set *Custom Issuer* to `<custom-issuer>`

### Optional (recommended)

To validate that the correct IdP signed the SAML, set *Custom Certificate (IDP Signing Certificate)* to the `<keycloak-realm>` RS256 certificate. The respective certificate can be found here: ![Keycloak SAML Realm RS256 Certificate]

## Caveat

* End SAML session setup currently does not seem to work correctly, see https://github.com/RocketChat/Rocket.Chat/issues/14881

## Open Topics

* Mapping of Attributes
* Certs (?) - what about them??

[Keycloak SAML Configuration Basic]: keycloak-saml-configuration-basic.png
[Keycloak SAML Realm RS256 Certificate]: keycloak-saml-realm-256-certificate.png

