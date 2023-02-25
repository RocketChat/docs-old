---
description: >-
  Central Authentication Service allows members to use one set of credentials to
  sign in to multiple sites over multiple protocols.
---

# CAS

Central Authentication Service (CAS) allows users to use one set of credentials to sign in to many sites over many different protocols.

Rocket.Chat includes a CAS plugin that allows you to use your existing CAS server for user authentication.

{% hint style="info" %}
For more information on CAS, see [github.com/apereo/cas](https://github.com/apereo/cas).
{% endhint %}

To access this setting, navigate to **Administration** > **Workspace** > **Settings** > **CAS**.

{% hint style="info" %}
Remember to hit **Save Changes** in order to apply any changes made.
{% endhint %}

Your Rocket.Chat workspace is the _CAS client_. You must provide a compatible _CAS Server_.

Once you know your CAS server's URL, proceed with the settings below

* **Enabled**: Enable CAS on your workspace
* **SSO Base URL**: The base URL of your external SSO service e.g [`https://sso.example.undef/sso/`](https://sso.example.undef/sso/)\`\`
* **SSO Login URL**: The login URL of your external SSO service e.g [`https://<<CAS_server_url>>/cas/login`](https://sso.example.undef/sso/login)\`\`
* **CAS Version**: Only use a supported CAS version supported by your CAS SSO service e.g `(1.0|2.0)`

The `/cas` and `/cas/login` URLs are defaults but not mandatory. Check with your CAS server provider if the defaults do not work.

* **Trust CAS username**: When enabled, Rocket.Chat trusts that any username from CAS belongs to the same user on Rocket.Chat.\
  This may be needed if a user is renamed on CAS, but may also allow people to take over Rocket.Chat accounts by renaming their own CAS users.
* **Allow user creation**: Allows CAS User creation from data provided by the CAS ticket when enabled.

### Attribute Handling

* **Always Sync User Data**: When set to true, it synchronizes external CAS User data into available attributes upon login. Note: Attributes are always synced upon account creation anyway.
*   **Attribute Map**: Use this JSON input to build internal attributes (key) from external attributes (value). External attribute names enclosed with '%' are interpolated in value strings.

    Example, `{"email":"%email%", "name":"%firstname%, %lastname%"}`

    The attribute map is always interpolated. In CAS 1.0, only the `username` attribute is available. Available internal attributes are: username, name, email, and rooms; rooms is a comma-separated list of rooms to join upon user creation e.g: {"rooms": "%team%,%department%"} would join CAS users on creation to their team and department channel.

### CAS Login Layout

* **Login Popup Width**: Lets you set the width in `px` of the popup screen during login.
* **Login Popup Height**: This lets you set the popup height in `px`.
* **Login Button Label**: Set the button's label.
* **Login Button Text Color**: Sets the login button text color from the existing variable.
* **Login Button Background Color**: Sets the background color of the login button.
* **Autoclose Login Popup**: When enabled, the popups automatically close after authenticating.

After successful configuration, your registration and login screens have the CAS button available.

{% hint style="info" %}
* CAS by ja-sig requires `ssl/tls` all connections.
* Any Drupal 7 or 8 sites can serve as a compatible CAS Server. See [drupal.org/project/cas](https://www.drupal.org/project/cas).
{% endhint %}
