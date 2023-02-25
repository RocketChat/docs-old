# LDAP User Search

Perform an **LDAP** user search. Go to the **User Search** tab and configure these settings:

## **Find user after login**&#x20;

When enabled, a search to find the user's DN is performed after binding to ensure it successfully prevents login with empty passwords when allowed by the AD configuration.

## Search Filter

* **Base DN**: The fully qualified Distinguished Name (DN) of an LDAP subtree you want to search for users and groups. There is no limit to the number of groups you can add, but they must be defined in the same domain base as the users who belong to them. Example: `ou=Users+ou=Projects,dc=Example,dc=com`.

{% hint style="info" %}
If you specify restricted user groups, only users that belong to those groups will be in scope. We recommend setting the top level of your LDAP directory tree as your domain base and using a search filter to control access.
{% endhint %}

*   **Filter**: If specified, only users that match this filter will be allowed to log in. If no filter is selected, all users within the scope of the defined domain base can sign in.&#x20;

    E.g., for Active Directory

    ```
    memberOf=cn=ROCKET_CHAT,ou=General Groups
    ```

    E.g., for OpenLDAP (extensible match search)

    ```
    ou:dn:=ROCKET_CHAT
    ```
* **Scope**: The search scope.
* **Search Field**: The LDAP attribute that identifies the LDAP user who attempts authentication. This field should be `sAMAccountName` for most Active Directory installations, but it may be uid for other LDAP solutions, such as OpenLDAP. You can use mail to identify users by email or whatever attribute you want. You can use multiple values separated by a comma to allow users to log in using multiple identifiers like username or email.
* **Search Page Size**: The maximum number of entries each result page will return to be processed.
* **Search Size Limit**: The maximum number of entries to return. It must be greater than the Search Size.

## Group Filter

The group filter is for OpenLDAP as it doesnt have a _memberOf_ filter.

* **Enable LDAP User Group Filter**: Enable to restrict users access in a LDAP group. It is useful for allowing OpenLDAP servers without a _memberOf_ filter to limit group access.
* **Group ObjectClass**: The _**objectclass** _ that identifies the groups. E.g. `OpenLDAP:groupOfUniqueNames`.
* **Group ID Attribute**: E.g. `*OpenLDAP:*cn`.
* **Group Member Attribute**: E.g. `*OpenLDAP:*uniqueMember`.
* **Group Member Format**: E.g. `*OpenLDAP:*uid=#{username},ou=users,o=Company,c=com`.
* **Group name**: Group name to which the user should belong.
