# CAS

Central Authentication Service (CAS) allows users to use one set of credentials to sign into many sites. Rocket.Chat comes preloaded with an easy-to-use method of integration with an existing CAS server.

## Set up

These settings are in the `CAS` setting page under `Administration`.

**NOTE**: CAS by ja-sig requires SSL/TLS for all connections.

- SSO Base URL: `https://<<CAS_website_url>>/cas`

The SSO Base URL should point towards the URL of the CAS service. When in doubt, navigate to the CAS service and remove 'login' (if existing) from the end of the URL.

- SSO Login URL: `https://<<CAS_website_url>>/cas/login`

The SSO Login URL should point towards the CAS service login page. This is usually the SSO base URL with the suffix `/login`

- CAS Version: `(1.0|2.0)`

Select the CAS version used by your CAS provider. Most modern providers use `CAS 2.0`

**NOTE**: You may have to allow your Rocket.Chat site to connect to your CAS, so the best approach is to use the CAS Management Service.
