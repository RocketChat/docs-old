# User Search Settings

## User Search

### Filter

If specified, only users that match this filter will be allowed to log in. If no filter is specified, all users within the scope of the specified domain base will be able to sign in.

E.g. for Active Directory

```text
memberOf=cn=ROCKET_CHAT,ou=General Groups
```

E.g. for OpenLDAP \(extensible match search\)

```text
ou:dn:=ROCKET_CHAT
```

### Scope

### Search Field

The LDAP attribute that identifies the LDAP user who attempts authentication. This field should be `sAMAccountName` for most Active Directory installations, but it may be `uid` for other LDAP solutions, such as OpenLDAP. You can use `mail` to identify users by email or whatever attribute you want.

You can use multiple values separated by comma to allow users to login using multiple identifiers like username or email.

### Search Page Size

The maximum number of entries each result page will return to be processed.

### Search Size Limit

The maximum number of entries to return. **Attention**, this number must be larger than the one on **Search Page Size**.

## User Search \(Group Validation\)

### Enable LDAP User Group Filter

Restrict access to users in a LDAP group Useful for allowing OpenLDAP servers without a **memberOf** filter to restrict access by groups.

### Group ObjectClass

The **objectclass** that identify the groups. E.g. **OpenLDAP**:groupOfUniqueNames

### Group ID Attribute

E.g. OpenLDAP:cn

### Group Member Attribute

E.g. **OpenLDAP**:uniqueMember

### Group Member Format

E.g. **OpenLDAP**:uid=\#{username},ou=users,o=Company,c=com

### Group name

Group name to which the user should belong.

