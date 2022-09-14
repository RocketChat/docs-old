# LDAP Authentication Settings

## Enable

Disable Authentication to skip binding the user DN and password.

## User DN

The LDAP user that performs user lookups to authenticate other users when they sign in. This is typically a service account created specifically for third-party integrations. Use a fully qualified name, such as

```
cn=Administrator,cn=Users,dc=Example,dc=com
```

## Password

The password for the User DN above.
