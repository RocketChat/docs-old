# LDAP User Search

This section holds the configuration for performing an LDAP user search

* **Find user after login**: When enabled, a search to find the user's DN is performed after bind to ensure the bind was successful preventing login with empty passwords when allowed by the AD configuration.

## Search Filter

* **Base DN**: The fully qualified Distinguished Name (DN) of an LDAP subtree you want to search for users and groups. You can add as many as you like; however, each group must be defined in the same domain base as the users that belong to it. Example: `ou=Users+ou=Projects,dc=Example,dc=com`

{% hint style="info" %}
If you specify restricted user groups, only users that belong to those groups will be in scope. We recommend that you set the top level of your LDAP directory tree as your domain base and use a search filter to control access.
{% endhint %}

*   **Filter**: If specified, only users that match this filter will be allowed to log in. If no filter is specified, all users within the scope of the specified domain base will be able to sign in.

    E.g. for Active Directory

    ```
    memberOf=cn=ROCKET_CHAT,ou=General Groups
    ```

    E.g. for OpenLDAP (extensible match search)

    ```
    ou:dn:=ROCKET_CHAT
    ```
* **Scope**: The search scope
* **Search Field**: The LDAP attribute that identifies the LDAP user who attempts authentication. This field should be `sAMAccountName` for most Active Directory installations, but it may be `uid` for other LDAP solutions, such as OpenLDAP. You can use `mail` to identify users by email or whatever attribute you want. You can use multiple values separated by a comma to allow users to log in using multiple identifiers like username or email.
* **Search Page Size**: The maximum number of entries each result page will return to be processed
* **Search Size Limit**: The maximum number of entries to return.

{% hint style="info" %}
This number should be greater than the **Search Page Size**
{% endhint %}

## Group Filter

* **Enable LDAP User Group Filter**: Enable to Restrict access to users in an LDAP group. This is useful for allowing OpenLDAP servers without a _`memberOf`_`filter` to restrict access by groups
* **Group ObjectClass**: The **objectclass** that identifies the groups. E.g. `OpenLDAP:groupOfUniqueNames`
* **Group ID Attribute**: E.g. `OpenLDAP:cn`
* **Group Member Attribute**: E.g. **`OpenLDAP`**`:uniqueMember`
* **Group Member Format**: E.g. **`OpenLDAP`**`:uid=#{username},ou=users,o=Company,c=com`
* **Group name**: Group name to which the user should belong.
