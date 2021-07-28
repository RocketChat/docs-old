# CAS

Central Authentication Service \(CAS\) allows users to use one set of credentials to sign into many sites over many different protocols.

Rocket.Chat includes a CAS plugin that allows you to use your existing CAS server for user authentication.

For more information on CAS, see [github.com/apereo/cas](https://github.com/apereo/cas).

### Rocket.Chat CAS Administration

These settings are in the `CAS` settings page under `Administration`:

1. Visit [https://my.rocket.chat.url/admin/CAS](https://my.rocket.chat.url/admin/CAS)

or

1. Log into your Rocket.Chat instance as a user with administrator privileges.
2. Click the "Options" button \(3 dots at the top left of the screen\).
3. Click the "Administration" link that drops down. \(If you do not see one of these links, you are not logged in as a user with enough privileges. Log out and back in with an admin user\).
4. Click the "CAS" link on the left side of the administration section.

Your Rocket.Chat instance is the _CAS client_. You must provide a compatible _CAS Server_.

Once you know your CAS server's URL, enter it into the Rocket.Chat CAS Administration page:

* **SSO Base URL**: `https://<<CAS_server_url>>/cas`
* **SSO Login URL**: `https://<<CAS_server_url>>/cas/login`
* **CAS Version**: `(1.0|2.0)`

The `/cas` and `/cas/login` URLs are the standard, but not required. Check with your CAS server provider if the defaults do not work.

The **CAS Version** must be matched to the _CAS Server_ provider. Most modern providers will use `CAS 2.0`.

## Notes

1. CAS by ja-sig requires ssl/tls for all connections.
2. Any Drupal 7 or 8 site can serve as a compatible CAS Server. See [drupal.org/project/cas](https://www.drupal.org/project/cas).

