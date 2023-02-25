# LDAP Data Sync Settings

With LDAP, you can sync your data. Here are some basic data sync settings in Rocket.Chat.

* **Unique Identifier Field**: The field that will link the LDAP user and the Rocket.Chat user. You can include multiple values separated by a comma to get the value from the LDAP record.
* **Merge Existing Users**: Whether or not to merge existing users. When importing a user from LDAP and a user with the same username already exists, the new user data (including info and password) will merge into the existing data.
* **Update User Data on Login**: Enable to update user data on login.
* **Default Domain**: If provided, the default domain generates a unique email for users whose emails were not imported from LDAP. The mounting of the email will be `username@default domain` or `unique id@default domain`.

## Avatar

* **Sync User Avatar**: Enable syncing the user's avatar.
* **User Avatar Field**: The field used as an avatar for users. Leave blank to use `thumbnailPhoto` first and `jpegPhoto` as a fallback.

## Mapping

* **Username Field**: Usually, the `sAMAccountName` is used as a username for new users. Leave empty to let the user pick their Rocket.Chat username. You can use template tags too, for example:

```
#{givenName}.#{sn}
```

* **Email Field**: The LDAP field binds the user's email.
* **Name Field**: LDAP name filed for binding.
