# CAS

Central Authentication Service (CAS) allows users to use one set of credentials to sign into many sites. Rocket.Chat comes preloaded with an easy to use method of integrating with an existing CAS server.

## Setup

These settings are in the `CAS` setting page under `Administration`.

NOTE: CAS by ja-sig requires ssl/tls for all connections.

- SSO Base URL: `https://<<CAS_website_url>>/cas`

The SSO base URL should point to the url of the CAS service, if in doubt navigate to the CAS service and remove 'login' (if present) from the end of the url.

- SSO Login URL: `https://<<CAS_website_url>>/cas/login`

The SSO login URL should point towards the cas service login page. This will usually be the SSO base URL with the suffix `/login`

- CAS Version: `(1.0|2.0)`

Select the CAS version used by you CAS provider, most modern providers will use `CAS 2.0`

NOTE: You may have to allow your Rocket.Chat site to connect to your CAS - CAS Management Service is an easy to use approach to this problem.
