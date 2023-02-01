# LDAP Connection Setting

* **Enable**: Turns LDAP Authentication ON or OFF.
* **Server Type**: Lets you select the type of server you are connecting to
* **Host**: The LDAP connection host, e.g. `ldap.example.com` or `10.0.0.30`
* **Port**: The LDAP connection Port, usually `389` or `636`
* **Reconnect**: Enable to try reconnecting automatically when the connection is interrupted by some reason while executing operations
* **Login Fallback**: Enable this option to also allow regular password users to log in on Rocket.Chat. It will also let LDAP users continue using Rocket.Chat if the LDAP server is down.

## Authentication

* **Enable**: Enable or disables authentication to skip binding the user DN and password.
* **User DN**: The LDAP user that performs user lookups to authenticate other users when they sign in. This is typically a service account created specifically for third-party integrations. Use a fully qualified name, such as `cn=Administrator,cn=Users,dc=Example,dc=com`
* **Password**: The password for the User DN above

## Encryption

* **Encryption**: The encryption method used to secure communications to the LDAP server.

| Value             | Usage                                             |
| ----------------- | ------------------------------------------------- |
| **No Encryption** |                                                   |
| **StartTLS**      | Upgrade to encrypted communication once connected |
| **SSL/LDAPS**     | Encrypted from the start                          |

* **CA Cert**: The CA certificate to use in signing
* **Reject Unauthorized**: Disable this option to allow certificates that can not be verified. Usually, Self Signed Certificates will require this option disabled to work

## Timeouts

* **Timeout (ms)**: How long to wait in miliseconds after a search is initiated before returning an error
* **Connection Timeout (ms)**: Maximum time in milliseconds before connection time out
* **Idle Timeout (ms)**: How many milliseconds wait after the latest LDAP operation until closing the connection. (Each operation will open a new connection)

{% hint style="success" %}
When done with the settings, be sure to **Save changes**
{% endhint %}

<figure><img src="../../../../../.gitbook/assets/LDAP connection settings.png" alt=""><figcaption><p>LDAP connection settings</p></figcaption></figure>

At the top of this page, you can**:**

1. **Test Connection**: This will use the values you just provided and test for a connection. This will test the authentication and encryption, but not the syncing settings.
2. **Test LDAP Search**: Searches and notify if a user is found as configured in the user search page.
3. **Sync Now**: To sync your LDAP data based on the Data Sync configurations.
4. **LDAP Documentation**: You are directed to the Rocket.Chat documentation on LDAP.

### Internal Log Level

What log level should be used for the internal LDAP communication logs.

### Test Connection

Use this button to test if the connection settings are valid. This will test the authentication and encryption, but not the syncing settings.
