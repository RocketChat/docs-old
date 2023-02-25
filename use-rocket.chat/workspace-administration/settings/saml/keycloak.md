# Keycloak

[https://www.keycloak.org/ ](https://www.keycloak.org/)is another popular open-source IdP that you can use in connection with Rocket.Chat.

## Prerequisites

* Rocket.Chat server accessible like e.g., 'https://r.example.com'
* Keycloak server accessible like e.g., 'https://sso.example.com'

Keycloak:

* Decide/set up a realm you want to use, e.g. `master`. The realm will be referenced by the placeholder `<realm>`.

## Setting up Rocket.Chat

Go to the SAML settings in Rocket.Chat administration:

* Decide the keycloak server "nickname" - e.g. `keycloak`.
* For the custom entry point and IDP SLO Redirect URL, go for `https://sso.example.com/auth/realms/<realm>/protocol/saml`
* Note the Custom Certificate - this is the Keycloak's realm certificate. Check out the realm settings, examine the Keys tab, get the RSA Certificate and paste it into the field. Don't include the `-----BEGIN/END CERTIFICATE-----` headers/footers.
* Generate the Public Certificate and Private Key if needed, or leave them as they are if they are present.

## Setting up Keycloak

Go to `https://r.example.com/_saml/metadata/keycloak` - you should get an XML file. Save the raw file to your disk. Go to keycloak and open the "Add Client" dialogue. Select the SAML protocol, and import the XML file from the previous step. You will be redirected to a partially pre-filled client setting page. The client ID referenced by Keycloak should be the same as the metadata URL.

Create client, and now revisit its settings:

* Check out Valid Redirect URIs - make sure that it is set to `https://r.example.com/_saml/validate/keycloak`.
* Set the `Name ID Format` to `email`.
* Go to the `SAML Keys` tab, and make sure that the public key (certificate) is the same as the Rocket.Chat's public key. Note that the `-----BEGIN/END CERTIFICATE-----` header/footer is not supposed to be part of the Keycloak's public key view, but the rest should be the same. If they are not the same, save the Rocket.Chat public key one into a text file, and import it from Keycloak - use the import PEM functionality.
*   Go to the Mappers tab, and create mappers for the required data that Rocket.Chat expects. You shouldn't need `email` or `username`, but you probably need `cn`.

    Click Create, and choose the type `User Property` and set the `SAML Attribute NameFormat` to `basic`. For the first name, set `Name` and `Property` to `firstName`, and `SAML Attribute name` to `cn`.

## Troubleshooting

You should be done by now. However, you may run into some problems for various reasons:

* Q: I keep getting the `Unable to validate response url: Error: Status is: urn:oasis:names:tc:SAML:2.0:status:Responder` error.
* A: Make sure that the respective Keycloak user has an e-mail address. This may not be the case e.g., for Keycloak admin.
* Q: How do I generate a certificate pair?
* A: Try `openssl req -newkey rsa:3072 -new -x509 -days 3652 -nodes -out saml.crt -keyout saml.pem`. Then, just copy the file contents to the respective fields.
