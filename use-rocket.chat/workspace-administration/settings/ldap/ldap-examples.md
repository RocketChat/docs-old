# LDAP Examples

Here are some examples of the LDAP settings and their values. The examples will be based on these environments:

* `Host = ldap.domain.com`
* `Group = CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com (Access Control Group)`
* `Proxy User = rocket.service@domain.com or CN=rocket service,CN=Users,DC=domain,DC=com (DN or userPrincipalName)`
* `Proxy User password = urpass (Proxy Users password)`

{% hint style="warning" %}
Replace the values above with your respective environment.
{% endhint %}

## Log on with a username

* `LDAP_Enable = True`
* `LDAP_Dn = dc=domain,dc=com`
* `LDAP_Url = ldap://ldapserver`
* `LDAP_Port = 389`
* `LDAP_Bind_Search =`

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

If you need to auth users from subgroups in LDAP use this filter:

`LDAP_Bind_search = {"filter": "(&(objectCategory=person)(objectclass=user)(memberOf:1.2.840.113556.1.4.1941:=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log on with an email address

* `LDAP_Enable = True`
* `LDAP_Dn = dc=domain,dc=com`
* `LDAP_Url = ldap://ldapserver`
* `LDAP_Port = 389`
* `LDAP_Bind_Search =`

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(mail=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log on with either an email address or username

* `LDAP_Enable = True`
* `LDAP_Dn = dc=domain,dc=com`
* `LDAP_Url = ldap://ldapserver`
* `LDAP_Port = 389`
* `LDAP_Bind_Search =`

`{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(|(mail=#{username})(sAMAccountName=#{username})))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log in

When you enable LDAP, the login form will log in users via LDAP instead the internal account system.

### LDAPS - SSL Connection

Use stunnel to create a secure connection to the LDAP server. Create a new configuration file _/etc/stunnel/ldaps.conf_ with the following content:

```
options = NO_SSLv2

[ldaps]
client = yes
accept = 389
connect = your_ldap_server.com:636
```

To enable Stunnel automatic startup, change the `ENABLED` variable in _/etc/default/stunnel4_ to `1`:

```bash
# Change to one to enable stunnel automatic startup
ENABLED=1
```

Finally, on the Rocket.Chat server under _/admin/LDAP_ set these values:

* `LDAP_Url = localhost`
* `LDAP_Port = 389`
