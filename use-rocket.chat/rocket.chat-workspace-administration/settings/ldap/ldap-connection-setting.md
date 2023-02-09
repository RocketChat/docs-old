# LDAP Connection Setting

Set up **Authentication**, **Timeouts**, and **Encryption** for your LDAP connection. Go to the **Connection** tab of the **LDAP** settings and set the following parameters:&#x20;

* **Enable**: Turns LDAP Authentication ON or OFF.
* **Server Type**: Allows you to select the type of server you are connecting to.
* **Host**: The LDAP connection host, e.g. `ldap.example.com` or `10.0.0.30.`
* **Port**: The LDAP connection Port, usually `389` or `636.`
* **Reconnect**: Enable to try reconnecting automatically when the connection is interrupted by some reason while executing operations.
* **Login Fallback**: Enable to allow regular password users to log in on Rocket.Chat. It will also let LDAP users continue using Rocket.Chat if the LDAP server is down.

## Authentication

* **Enable**: Enable or disables authentication to skip binding the user DN and password.
* **User DN**:  The administrative account login details or LDAP user with access to the active directory. This user can perform user lookups to authenticate other users when they sign in. This is typically a service account explicitly created for third-party integrations. Use a fully qualified name, such as `cn=Administrator,cn=Users,dc=Example,dc=com.` **DN** means **Distinguished Name**.
* **Password**: The password for the **User DN**.

## Encryption

* **Encryption**: The encryption method used to secure communications to the LDAP server. Examples include **No encryption**, **SSL/LDAPS** (encrypted from the start), and **StartTLS** (upgrade to encrypted communication once connected).&#x20;
* **CA Cert**: The CA certificate to use in signing.
* **Reject Unauthorized**: Disable this option to allow certificates that can not be verified. Usually, Self Signed Certificates will require this option disabled to work

## Timeouts

* **Timeout (ms)**: Waiting time in milliseconds after a search is initiated before returning an error.
* **Connection Timeout (ms)**: Maximum time in milliseconds before connection timeout.
* **Idle Timeout (ms)**: Waiting time in milliseconds after the latest LDAP operation until closing the connection. Each operation opens a new connection

{% hint style="success" %}
After completing the settings, be sure to **Save changes.**
{% endhint %}

At the top of this page, you can**:**

1. **Test Connection**: This will use the values you just provided and test for a connection. This will test the authentication and encryption but not the syncing settings. Use this button to test if the connection settings are valid. This will test the authentication and encryption, but not the syncing settings.
2. **Test LDAP Search**: Searches and notify if a user is found as configured in the user search page.
3. **Sync Now**: To sync your LDAP data based on the Data Sync configurations.
4. **LDAP Documentation**: You are directed to the Rocket.Chat documentation on LDAP.
