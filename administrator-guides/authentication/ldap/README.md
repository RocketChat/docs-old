# LDAP

To configure LDAP authentication, go to LDAP section of administration settings, enable LDAP and add configurations to connect with your LDAP server.

## Examples:

- Domain = domain.com (Active Directory Domain)
- Group = CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com (Access Control Group)
- Proxy User = rocket.service@domain.com or CN=rocket service,CN=Users,DC=domain,DC=com (DN or userPrincipalName)
- Proxy User password = urpass (Proxy Users password

For now (until we add more input fields to LDAP) set it like this: (This is based on the above assumptions, replace with your environment)

## Logon with username:

- LDAP_Enable = True
- LDAP_Dn = dc=domain,dc=com
- LDAP_Url = ldap://ldapserver
- LDAP_Port = 389
- LDAP_Bind_Search =

{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}

If you need to auth users from subgroups in LDAP use this filter:

- LDAP_Bind_search = {"filter": "(&(objectCategory=person)(objectclass=user)(memberOf:1.2.840.113556.1.4.1941:=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}

## Logon with email address:

- LDAP_Enable = True
- LDAP_Dn = dc=domain,dc=com
- LDAP_Url = ldap://ldapserver
- LDAP_Port = 389
- LDAP_Bind_Search =

{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(mail=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}

## Logon with either email address or username:

- LDAP_Enable = True
- LDAP_Dn = dc=domain,dc=com
- LDAP_Url = ldap://ldapserver
- LDAP_Port = 389
- LDAP_Bind_Search =

{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(|(mail=#{username})(sAMAccountName=#{username})))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}

## Logging in

When you enable LDAP the login form will login users via LDAP instead the internal account system.

### LDAPS - SSL Connection

Use stunnel to create a secure connection to the LDAP server. Create a new configuration file /etc/stunnel/ldaps.conf with following content:

```.ini
options = NO_SSLv2

[ldaps]
client = yes
accept = 389
connect = your_ldap_server.com:636
```

To enable Stunnel automatic startup change the ``ENABLED`` variable in /etc/default/stunnel4 to ``1``:

```.sh
# Change to one to enable stunnel automatic startup
ENABLED=1
```

Finally on the Rocket.Chat server under /admin/LDAP set

- LDAP_Url = localhost
- LDAP_Port = 389

## Work in Progress

We're not experts on LDAP, so there might be lots of features we don't know about and we'd love to have your comments and feedback of what we can do to improve it.

## Troubleshooting

### I cannot login even everything looks good

If you cannot login without getting any error messages (the last thing in log you see is `Attempt to bind <correct dn of user>`), make sure the username of your ldap account does not match any username of a local account. For example if you created a local user with username `joe`, then enable ldap and try to login with username `joe` (who exists on your ldap server), it will silently fail without any error message in your log simply saying username or password do not match. You cannot login with `joe` by your ldap password nor by your local password any more.

### No users are created even everything looks good

Every rocket.chat-user has to have an email. So either the LDAP users have an email or you have to set a default domain using the field "default domain".

## References

MS LDAP Info: <https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475(v=vs.85).aspx>
