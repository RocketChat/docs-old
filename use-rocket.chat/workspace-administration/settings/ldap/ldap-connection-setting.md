# LDAP Connection Setting

Set up **Authentication**, **Timeouts**, and **Encryption** for your LDAP connection. Go to the **Connection** tab of the **LDAP** settings and set the following parameters:&#x20;

* **Enable**: Turns LDAP Authentication ON or OFF.
* **Server Type**: Allows you to select the type of server you are connecting to.
* **Host**: The LDAP connection host or domain, e.g. `ldap.example.com` or `10.0.0.30.`
* **Port**: The LDAP connection Port, usually `389` or `636.`
* **Reconnect**: Enable to try reconnecting automatically when the connection is interrupted for some reason while executing operations.
* **Login Fallback**: Enable to allow regular password users to log in on Rocket.Chat. It will also let LDAP users continue using Rocket.Chat if the LDAP server is down.

## Authentication

* **Enable**: Enable or disables authentication to skip binding the user DN and password.
* **User DN**:  The administrative account login details or LDAP user with access to the active directory. This user can perform user lookups to authenticate other users when they sign in. This is typically a service account explicitly created for third-party integrations. Use a fully qualified name, such as `cn=Administrator,cn=Users,dc=Example,dc=com.` **DN** means **Distinguished Name**.
* **Password**: The password for the **User DN**.

## Encryption

* **Encryption**: The encryption method used to secure communications to the LDAP server. Examples include **No encryption**, **SSL/LDAPS** (encrypted from the start), and **StartTLS** (upgrade to encrypted communication once connected).&#x20;
* **CA Cert**: The CA certificate to use in signing.
* **Reject Unauthorized**: Disable this option to allow certificates that can not be verified. Usually, Self Signed Certificates will require this option disabled to work.

## Timeouts

* **Timeout (ms)**: Waiting time in milliseconds after a search is initiated before returning an error.
* **Connection Timeout (ms)**: Maximum time in milliseconds before connection timeout.
* **Idle Timeout (ms)**: Waiting time in milliseconds after the latest LDAP operation until closing the connection. Each operation opens a new connection.

{% hint style="success" %}
After completing the settings, be sure to **Save changes.**
{% endhint %}
