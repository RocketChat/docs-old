# LDAP Basic Settings

### Enable

Turns LDAP Authentication ON or OFF.

### Login Fallback

Enable this option to also allow regular password users to log in on Rocket.Chat. It will also let LDAP users continue using Rocket.Chat if the LDAP server is down.

### Find user after login

After a successful login, Rocket.Chat will search for the user on the LDAP server and reject the login if it is not found. Use this to prevent anonymous logins to Rocket.Chat when the LDAP Server allows anonymous logins.

### Host

The LDAP connection host, e.g. ldap.example.com or 10.0.0.30

## Port

The LDAP connection Port, usually 389 or 636.

### Reconnect

Try to reconnect automatically when the connection is interrupted by some reason while executing operations

### Encryption

The encryption method used to secure communications to the LDAP server.

| Value         | Usage                                             |
| ------------- | ------------------------------------------------- |
| No Encryption |                                                   |
| StartTLS      | Upgrade to encrypted communication once connected |
| SSL/LDAPS     | Encrypted from the start                          |

### CA Cert

### Reject Unauthorized

Disable this option to allow certificates that can not be verified. Usually, Self Signed Certificates will require this option disabled to work

### Base DN

The fully qualified Distinguished Name (DN) of an LDAP subtree you want to search for users and groups. You can add as many as you like; however, each group must be defined in the same domain base as the users that belong to it. Example:

```
 ou=Users+ou=Projects,dc=Example,dc=com
```

If you specify restricted user groups, only users that belong to those groups will be in scope. We recommend that you specify the top level of your LDAP directory tree as your domain base and use a search filter to control access.

### Internal Log Level

What log level should be used for the internal LDAP communication logs.

### Test Connection

Use this button to test if the connection settings are valid. This will test the authentication and encryption, but not the syncing settings.
