---
description: Authenticating Rocket.Chat and Microsoft ADFS via SAML
---

# Active Directory Federation Services

It is possible to set up the authentication between Rocket.Chat and Active Directory Federation Services by setting up SAML authentication scenario.

Microsoft ADFS provides an IdP service that can be consumed by Rocket.Chat for authentication. Important: If you are using Active Directory _without_ Federation Services, you should perform the user synchronization via LDAP only.

This document takes into consideration that your ADFS environment is deployed and running. For further info, please refer to [this guide](https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2016/deployment-administrators-guide/gg188612\(v=crm.8\)).

The Rocket.Chat configuration should be done as follows:

1. Go to Administration -> SAML and configure the entry points and the IdP path.

![](../../../../.gitbook/assets/adfs\_1.png)

1. Add the private key certificate related to the ADFS server.

Important: ADFS uses .pfx certificate extensions (widely used on Windows landscapes) and Rocket.Chat uses .pem files. So, before setting the certificate here, it must be converted.

![](../../../../.gitbook/assets/adfs\_2.png)

1. Set the _Custom Authn Context_ and _User Data Field Map_ according to the scenario you have on your Active Directory Federation Services

![](<../../../../.gitbook/assets/image (248).png>)

**Important:** The Custom Authorization context fields must match the authentication methods selected on ADFS. Microsoft Federation Services provides two authentication methods: Forms authentication and Windows Authentication.

![](<../../../../.gitbook/assets/adfs\_1 (1).png>)

* Forms authentication: If this option is selected as 'primary', a login form provided by ADFS will be called by the SAML assertion to perform the login operation. For this method, the recommended "Custom Authn Context" in Rocket.Chat should be _**urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport**_
* Windows authentication: if this option is selected as **'primary', ADFS will expect the login assertions on the Windows Domain level. To set a full SSO scenario between Rocket.Chat and ADFS, the recommended "Custom Authn Context" should be \_urn:federation:authentication:windows**\_
