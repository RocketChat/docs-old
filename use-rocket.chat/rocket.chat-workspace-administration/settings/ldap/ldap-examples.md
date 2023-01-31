# LDAP Examples

* `Host = ldap.domain.com`
* `Group = CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com (Access Control Group)`
* `Proxy User = rocket.service@domain.com or CN=rocket service,CN=Users,DC=domain,DC=com (DN or userPrincipalName)`
* `Proxy User password = urpass (Proxy Users password)`

For now (until we add more input fields to LDAP) set it like this: (This is based on the above assumptions, replace with your environment)

## Log on with a username

* `LDAP_Enable = True`
* `LDAP_Dn = dc=domain,dc=com`
* `LDAP_Url = ldap://ldapserver`
* `LDAP_Port = 389`
* `LDAP_Bind_Search =`

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

If you need to auth users from subgroups in LDAP use this filter:

`LDAP_Bind_search = {"filter": "(&(objectCategory=person)(objectclass=user)(memberOf:1.2.840.113556.1.4.1941:=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log on with email address

* `LDAP_Enable = True`
* `LDAP_Dn = dc=domain,dc=com`
* `LDAP_Url = ldap://ldapserver`
* `LDAP_Port = 389`
* `LDAP_Bind_Search =`

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(mail=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log on with either email address or username

* `LDAP_Enable = True`
* `LDAP_Dn = dc=domain,dc=com`
* `LDAP_Url = ldap://ldapserver`
* `LDAP_Port = 389`
* `LDAP_Bind_Search =`

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(|(mail=#{username})(sAMAccountName=#{username})))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log in

When you enable LDAP the login form will login users via LDAP instead the internal account system.

### LDAPS - SSL Connection

Use stunnel to create a secure connection to the LDAP server. Create a new configuration file /etc/stunnel/ldaps.conf with following content:

```
options = NO_SSLv2

[ldaps]
client = yes
accept = 389
connect = your_ldap_server.com:636
```

To enable Stunnel automatic startup change the `ENABLED` variable in /etc/default/stunnel4 to `1`:

```bash
# Change to one to enable stunnel automatic startup
ENABLED=1
```

Finally on the Rocket.Chat server under /admin/LDAP set

* `LDAP_Url = localhost`
* `LDAP_Port = 389`
