# LDAP Data Sync Settings

In this section, you will find settings for LDAP Sync.

* **Unique Identifier Field**: Which field will be used to link the LDAP user and the Rocket.Chat user. You can inform multiple values separated by a comma to try to get the value from the LDAP record.
* **Merge Existing Users**: Whether or not to merge existing users.

{% hint style="info" %}
**Caution!** When importing a user from LDAP and a user with the same username already exists the LDAP info and password will be set into the existing user. This will let LDAP users take over password accounts with the same username.
{% endhint %}

* **Update User Data on Login**: Enable to update user data on login
* **Default Domain**: If provided the Default Domain will be used to create a unique email for users where email was not imported from LDAP. The email will be mounted as `username@default_domain` or `unique_id@default_domain`.

## Avatar

* **Sync User Avatar**: Enable to sync the user's avatar
* **User Avatar Field**: The field to be used as an avatar for users. Leave empty to use `thumbnailPhoto` first and `jpegPhoto` as a fallback.

## Mapping

* **Username Field**: Usually, the `sAMAccountName`or `uid` field will be used as username for new users. Leave empty to let the user pick their own Rocket.Chat username. You can use template tags too, for example:

```
#{givenName}.#{sn}
```

* **Email Field**: The LDAP field to bind the user's email
* **Name Field**: LDAP name filed for binding
