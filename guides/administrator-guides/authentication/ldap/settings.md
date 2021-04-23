# Settings

## Basic Settings

#### Enable

Turns LDAP Authentication ON or OFF.

#### Login Fallback

Enable this option to also allow regular password users to log in on Rocket.Chat. It will also let LDAP users continue using Rocket.Chat if the LDAP server is down.

#### Find user after login

After a successful login, Rocket.Chat will search for the user on the LDAP server and reject the login if it is not found. Use this to prevent anonymous logins to Rocket.Chat when the LDAP Server allows anonymous logins.

#### Host

The LDAP connection host, e.g. ldap.example.com or 10.0.0.30

### Port

The LDAP connection Port, usually 389 or 636.

#### Reconnect

Try to reconnect automatically when the connection is interrupted by some reason while executing operations.

#### Encryption

The encryption method used to secure communications to the LDAP server.

| Value | Usage |
| :--- | :--- |
| No Encryption |  |
| StartTLS | Upgrade to encrypted communication once connected |
| SSL/LDAPS | Encrypted from the start |

#### CA Cert

#### Reject Unauthorized

Disable this option to allow certificates that can not be verified. Usually, Self Signed Certificates will require this option disabled to work.

#### Base DN

The fully qualified Distinguished Name \(DN\) of an LDAP subtree you want to search for users and groups. You can add as many as you like; however, each group must be defined in the same domain base as the users that belong to it. Example:

```text
 ou=Users+ou=Projects,dc=Example,dc=com
```

If you specify restricted user groups, only users that belong to those groups will be in scope. We recommend that you specify the top level of your LDAP directory tree as your domain base and use search filter to control access.

#### Internal Log Level

What log level should be used for the internal LDAP communication logs.

#### Test Connection

Use this button to test if the connection settings are valid. This will test the authentication and encryption, but not the syncing settings.

## Authentication

#### Enable

Disable Authentication to skip binding the user DN and password.

#### User DN

The LDAP user that performs user lookups to authenticate other users when they sign in. This is typically a service account created specifically for third-party integrations. Use a fully qualified name, such as:

```text
cn=Administrator,cn=Users,dc=Example,dc=com
```

#### Password

The password for the User DN above.

## Enhanced Sync \(Enterprise only\)

#### Sync User Active State

Determine if users should be enabled or disabled on Rocket.Chat, based on the LDAP status. The 'pwdAccountLockedTime' attribute will be used to determine if the user is disabled. This setting is not yet compatible with all LDAP Servers, so if you don't use the 'pwdAccountLockedTime' attribute, you may want to disable it completely.

## Role Mapping

#### Role mapping from LDAP to Rocket.Chat.

Use this setting to map LDAP groups into Rocket.Chat roles.

You need to use an object format where the object key must be the LDAP group and the object value must be an array of RC roles. Example:

```text
{
    'ldapRole': [
        'rcRole',
        'anotherRCRole'
    ]
}
```

#### Validate mapping for each login

If the validation should occur for each login.

Be careful with this setting because it will overwrite the user roles in each login, otherwise, this will be validated only at the moment of user creation.

#### Default role to the user

The default RC role to be applied to the user if the user has some LDAP group that is not mapped.

#### LDAP query to get user groups

LDAP query to get the LDAP groups that the user is part of.

## Sync / Import

#### Username Field

Which field will be used as a username for new users. Usually `sAMAccountName` or `uid`. Leave empty to let the user pick their own Rocket.Chat username. You can use template tags too, for example:

```text
#{givenName}.#{sn}
```

#### Unique Identifier Field

Which field will be used to link the LDAP user and the Rocket.Chat user. You can inform multiple values separated by a comma to try to get the value from the LDAP record.

#### Default Domain

If provided the Default Domain will be used to create a unique email for users where email was not imported from LDAP. The email will be mounted as `username@default_domain` or `unique_id@default_domain`.

#### Merge Existing Users

**Caution!** When importing a user from LDAP and a user with the same username already exists the LDAP info and password will be set into the existing user. This will let LDAP users take over password accounts with the same username.

#### Sync User Data

Keep user data in sync with a server on **login** or on **background sync** \(eg: name, email, and custom fields\).

#### User Data Field Map

Configure how user account fields \(like email\) are populated from a record in LDAP \(once found\).

As an example, `{"cn":"name", "mail":"email"}` will choose a person's human-readable name from the cn attribute, and their email from the mail attribute.

Additionally, it is possible to use variables, for example, the following objectives will use a combination of the user's first name and last name for the rocket chat.

```text
{
    "#{givenName} #{sn}": "name",
    "mail": "email"
}
```

#### Sync LDAP Groups

Enable this setting to activate role mapping from user groups on the community edition of Rocket.Chat.

#### Auto Remove User Roles

Enable this setting to automatically remove roles from LDAP users that don't have the corresponding group. This will only remove roles automatically that are set under the user data group map below.

#### User Group Filter

The LDAP search filter used to check if a user is in a group.

#### LDAP Group BaseDN

The LDAP BaseDN used to lookup if users are in a group.

#### User Data Group Map

The mapping of LDAP groups to Rocket.Chat roles, in JSON format.

As an example, the following object will map the rocket-admin LDAP group to Rocket.Chat's "admin" role and the "tech-support" group to the "support" role.

```text
{
    "rocket-admin":"admin",
    "tech-support":"support"
}
```

#### Auto Sync LDAP Groups to Channels

Enable this feature to automatically add users to a channel based on their LDAP group.

#### Channel Admin

When the above setting causes a channel to be created automatically during user sync, this setting will determine what user will become the admin of the channel.

#### LDAP Group Channel Map

The map of LDAP groups to Rocket.Chat channels, in JSON format. As an example, the following objective will add any user in the LDAP group "employee" to the general channel on Rocket.Chat.

```text
{
    "employee":"general"
}
```

#### Auto Remove Users from Channels

Enabling this will remove any users in a channel that does not have the corresponding LDAP group! This will happen in every login and background sync, so removing a group on LDAP will not instantly remove access to channels on Rocket.Chat.

#### Sync User Avatar

Toggle avatar syncing on or off.

#### User avatar field

What LDAP field will be used as **avatar** for users. Leave empty to use `thumbnailPhoto` first and `jpegPhoto` as fallback.

#### Background Sync

Enable periodic background sync.

#### Background Sync interval

The interval between synchronizations, using the [Cron Text](https://bunkat.github.io/later/parsers.html#text) format.

#### Background Sync Import New Users

Will import all users \(based on your filter criteria\) that exist in LDAP and do not exist in Rocket.Chat.

#### Background Sync Update Existing Users

Will sync the avatar, fields, username, etc \(based on your configuration\) of all users already imported from LDAP on every **Sync Interval**.

#### Execute Synchronization Now

Will execute the Background Sync now rather than wait for the Sync Interval even if Background Sync is False. This Action is asynchronous, please see the logs for more information about the process.

## Timeouts

#### Timeout \(ms\)

How many milliseconds to wait for a search result before returning an error.

#### Connection Timeout \(ms\)

#### Idle Timeout \(ms\)

How many milliseconds to wait after the latest LDAP operation before closing the connection. \(Each operation will open a new connection\)

## User Search

#### Filter

If specified, only users that match this filter will be allowed to log in. If no filter is specified, all users within the scope of the specified domain base will be able to sign in.

E.g. for Active Directory

```text
memberOf=cn=ROCKET_CHAT,ou=General Groups
```

E.g. for OpenLDAP \(extensible match search\)

```text
ou:dn:=ROCKET_CHAT
```

#### Scope

#### Search Field

The LDAP attribute that identifies the LDAP user who attempts authentication. This field should be`sAMAccountName`for most Active Directory installations, but it may be`uid`for other LDAP solutions, such as OpenLDAP. You can use`mail`to identify users by email or whatever attribute you want.

You can use multiple values separated by a comma to allow users to login using multiple identifiers like username or email.

#### Search Page Size

The maximum number of entries each result page will return to be processed.

#### Search Size Limit

The maximum number of entries to return. **Attention** This number must be larger than the one on **Search Page Size**.

## User Search \(Group Validation\)

#### Enable LDAP User Group Filter

Restrict access to users in an LDAP group Useful for allowing OpenLDAP servers without a **memberOf** filter to restrict access by groups.

#### Group ObjectClass

The **objectclass** that identify the groups. E.g. **OpenLDAP**:groupOfUniqueNames

#### Group ID Attribute

E.g. OpenLDAP:cn

#### Group Member Attribute

E.g. **OpenLDAP**:uniqueMember

#### Group Member Format

E.g. **OpenLDAP**:uid=\#{username},ou=users,o=Company,c=com

#### Group name

Group name to which the user should belong.

