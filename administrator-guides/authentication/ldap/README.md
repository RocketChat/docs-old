# LDAP

To configure LDAP authentication, go to LDAP section of *Administration Settings*, enable LDAP and add configurations to connect with your LDAP server.

## Examples

- Domain = domain.com (Active Directory Domain)
- Group = CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com (Access Control Group)
- Proxy User = rocket.service@domain.com or CN=rocket service,CN=Users,DC=domain,DC=com (DN or userPrincipalName)
- Proxy User password = urpass (Proxy Users password)

Use the following configurations until more input fields are added to LDAP. These configurations are based on the assumptions above, replace them to reflect your environment.

## Log on with username

- LDAP_Enable = True
- LDAP_Dn = dc=domain,dc=com
- LDAP_Url = ldap://ldapserver
- LDAP_Port = 389
- LDAP_Bind_Search =

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

If you need to auth users from subgroups in LDAP use this filter:

- LDAP_Bind_search =

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf:1.2.840.113556.1.4.1941:=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log on with email address

- LDAP_Enable = True
- LDAP_Dn = dc=domain,dc=com
- LDAP_Url = ldap://ldapserver
- LDAP_Port = 389
- LDAP_Bind_Search =

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(mail=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log on with either email address or username:

- LDAP_Enable = True
- LDAP_Dn = dc=domain,dc=com
- LDAP_Url = ldap://ldapserver
- LDAP_Port = 389
- LDAP_Bind_Search =

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(|(mail=#{username})(sAMAccountName=#{username})))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log in

When you enable LDAP, the login form uses LDAP instead, instead of the internal account system, to log the user in.

### LDAPS - SSL Connection

Use stunnel to create a secure connection to the LDAP server. Create a new configuration file `/etc/stunnel/ldaps.conf` with following content:

```.ini
options = NO_SSLv2

[ldaps]
client = yes
accept = 389
connect = your_ldap_server.com:636
```

To enable Stunnel automatic startup, change the ``ENABLED`` variable in `/etc/default/stunnel4` to ``1``:

```.sh
# Change to one to enable stunnel automatic startup
ENABLED=1
```

Finally, on the Rocket.Chat server under `/admin/LDAP` set:

- LDAP_Url = localhost
- LDAP_Port = 389

## Work in Progress

There might be lots of features we don't know about LDAP yet, so we'd love to hear your comments and feedback on what we can do to improve.

## Troubleshooting

### I cannot log in even though everything looks good

If you cannot login and receive no error messages, so the last thing you see in log is `Attempt to bind <correct dn of user>`, make sure your LDAP account username does not match any username of a local account. For example, if you create a local user with username `joe`, then enable LDAP, and try to login with username `joe`, which exists on your LDAP server, the operation fails silently, without any error message in your log, simply saying username or password do not match. You cannot login with `joe` using your LDAP password or local password anymore.

### No users are created even though everything looks good

Every Rocket.Chat user must have an email. So, either LDAP users have an email, or you must set a default domain using the field "default domain" to do so.

## References

MS LDAP Info: <https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475(v=vs.85).aspx>
