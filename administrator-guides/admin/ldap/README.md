# LDAP

### Base DN

_FILL HERE_

> The fully qualified Distinguished Name (DN) of an LDAP subtree you want to search for users and groups. You can add as many as you like; however, each group must be defined in the same domain base as the users that belong to it. Example: `ou=Users+ou=Projects,dc=Example,dc=com`. If you specify restricted user groups, only users that belong to those groups will be in scope. We recommend that you specify the top level of your LDAP directory tree as your domain base and use search filter to control access.


### CA Cert

_FILL HERE_


### Enable

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Attempt to utilize LDAP for authentication.


### Encryption

- **No Encryption**: _FILL HERE_
- **StartTLS**: _FILL HERE_
- **SSL/LDAPS**: _FILL HERE_

> The encryption method used to secure communications to the LDAP server. Examples include `plain` (no encryption), `SSL/LDAPS` (encrypted from the start), and `StartTLS` (upgrade to encrypted communication once connected).


### Find user after login

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Will perform a search of the user's DN after bind to ensure the bind was successful preventing login with empty passwords when allowed by the AD configuration.


### Host

_FILL HERE_

> The LDAP host, e.g. `ldap.example.com` or `10.0.0.30`.


### Internal Log Level

- **Disabled**: _FILL HERE_
- **Error**: _FILL HERE_
- **Warn**: _FILL HERE_
- **Info**: _FILL HERE_
- **Debug**: _FILL HERE_
- **Trace**: _FILL HERE_


### Login Fallback

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> If the login on LDAP is not successful try to login in default/local account system. Helps when the LDAP is down for some reason.


### Port

_FILL HERE_

> Port to access LDAP. eg: `389` or `636` for LDAPS


### Reconnect

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Try to reconnect automatically when connection is interrupted by some reason while executing operations


### Reject Unauthorized

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Disable this option to allow certificates that can not be verified. Usually Self Signed Certificates will require this option disabled to work


### Test Connection

_FILL HERE_


## Authentication

### Enable

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Password

_FILL HERE_


### User DN

_FILL HERE_

> The LDAP user that performs user lookups to authenticate other users when they sign in. <br/>This is typically a service account created specifically for third-party integrations. Use a fully qualified name, such as `cn=Administrator,cn=Users,dc=Example,dc=com`.


## Sync / Import

### Background Sync

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Background Sync Import New Users

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Will import all users (based on your filter criteria) that exists in LDAP and does not exists in Rocket.Chat


### Background Sync Interval

_FILL HERE_

> The interval between synchronizations. Example `every 24 hours` or `on the first day of the week`, more examples at [Cron Text Parser](http://bunkat.github.io/later/parsers.html#text)


### Background Sync Update Existing Users

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Will sync the avatar, fields, username, etc (based on your configuration) of all users already imported from LDAP on every **Sync Interval**


### Default Domain

_FILL HERE_

> If provided the Default Domain will be used to create an unique email for users where email was not imported from LDAP. The email will be mounted as `username@default_domain` or `unique_id@default_domain`.<br/>Example: `rocket.chat`


### Merge Existing Users

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> *Caution!* When importing an user from LDAP and an user with same username already exists the LDAP info and password will be set into the existing user.


### Background Sync Now

_FILL HERE_

> Will execute the **Background Sync** now rather than wait the **Sync Interval** even if **Background Sync** is False.<br/>This Action is asynchronous, please see the logs for more information about the process


### Sync User Avatar

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Sync User Data

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Keep user data in sync with server on **login** or on **background sync** (eg: name, email).


### User Data Field Map

_FILL HERE_

> Configure how user account fields (like email) are populated from a record in LDAP (once found). <br/>As an example, `{"cn":"name", "mail":"email"}` will choose a person's human readable name from the cn attribute, and their email from the mail attribute. Additionally it is possible to use variables, for example: `{ "#{givenName} #{sn}": "name", "mail": "email" }` uses a combination of the user's first name and last name for the rocket chat `name` field.<br/>Available fields in Rocket.Chat: `name`, `email` and `customFields`.


### Unique Identifier Field

_FILL HERE_

> Which field will be used to link the LDAP user and the Rocket.Chat user. You can inform multiple values separated by comma to try to get the value from LDAP record.<br/>Default value is `objectGUID,ibm-entryUUID,GUID,dominoUNID,nsuniqueId,uidNumber`


### Username Field

_FILL HERE_

> Which field will be used as *username* for new users. Leave empty to use the username informed on login page.<br/>You can use template tags too, like `#{givenName}.#{sn}`.<br/>Default value is `sAMAccountName`.


## Timeouts

### Connection Timeout (ms)

_FILL HERE_


### Idle Timeout (ms)

_FILL HERE_

> How many milliseconds wait after the latest LDAP operation until close the connection. (Each operation will open a new connection)


### Timeout (ms)

_FILL HERE_

> How many mileseconds wait for a search result before return an error


## User Search

### Search Page Size

_FILL HERE_

> The maximum number of entries each result page will return to be processed


### Search Size Limit

_FILL HERE_

> The maximum number of entries to return.<br/>**Attention** This number should greater than **Search Page Size**


### Search Field

_FILL HERE_

> The LDAP attribute that identifies the LDAP user who attempts authentication. This field should be `sAMAccountName` for most Active Directory installations, but it may be `uid` for other LDAP solutions, such as OpenLDAP. You can use `mail` to identify users by email or whatever attribute you want.<br/>You can use multiple values separated by comma to allow users to login using multiple identifiers like username or email.


### Filter

_FILL HERE_

> If specified, only users that match this filter will be allowed to log in. If no filter is specified, all users within the scope of the specified domain base will be able to sign in.<br/>E.g. for Active Directory `memberOf=cn=ROCKET_CHAT,ou=General Groups`.<br/>E.g. for OpenLDAP (extensible match search) `ou:dn:=ROCKET_CHAT`.


### Scope

_FILL HERE_


## User Search (Group Validation)

### Enable LDAP User Group Filter

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Restrict access to users in a LDAP group<br/>Useful for OpenLDAP servers without overlays that not permit *memberOf* filter


### Group ID Attribute

_FILL HERE_

> E.g. *OpenLDAP:*cn


### Group Member Attribute

_FILL HERE_

> E.g. *OpenLDAP:*uniqueMember


### Group Member Format

_FILL HERE_

> E.g. *OpenLDAP:*uid=#{username},ou=users,o=Company,c=com


### Group name

_FILL HERE_

> Group name to which it belong the user


### Group ObjectClass

_FILL HERE_

> The *objectclass* that identify the groups.<br/> E.g. OpenLDAP:groupOfUniqueNames

