# LDAP

**Lightweight Directory Access Protocol (LDAP)** lets anyone locate data about your server or company. Rocket.Chat lets you connect with your Active Directory application or Identity Management System through **LDAP**. You can leverage advanced settings such as background sync, roles mapping from groups, auto-logout, and advanced user data sync.

To configure **LDAP** authentication,&#x20;

* Go to **Administration** > **Workspace** > **Settings** > **LDAP**
* Enable **LDAP**, and [add configurations](ldap-connection-setting.md) to connect with your **LDAP** server.&#x20;

[Rocket.Chat](http://rocket.chat) supports a variety of **LDAP** capabilities and associated identity management features. For example, you can import users from an active directory into your workspace.&#x20;

{% hint style="info" %}
The LDAP features supported by community and enterprise editions are detailed in [Identity Management](../../../../setup-and-administer-rocket.chat/advanced-workspace-management/identity-management-ee-vs-ce.md).
{% endhint %}

## LDAP Actions

These actions are found at the top of the LDAP settings screen.

* **Test Connection**: This will use your provided values and test for a connection. It will test the authentication and encryption but not the syncing settings.
* **Test LDAP Search**: Searches and notify if a user is found as configured in the user search page.
* **Sync Now**: Syncs your LDAP data based on the Data Sync configurations.
* **LDAP Documentation**: This will redirect you to the [Rocket.Chat LDAP Documentation](./).

{% hint style="info" %}
If you dont get a response alert for these actions, always check the logs **Administration > Workspace > View Logs** to confirm if they were succesful or there is an error.
{% endhint %}

{% content-ref url="ldap-connection-setting.md" %}
[ldap-connection-setting.md](ldap-connection-setting.md)
{% endcontent-ref %}

{% content-ref url="ldap-user-search.md" %}
[ldap-user-search.md](ldap-user-search.md)
{% endcontent-ref %}

{% content-ref url="ldap-data-sync-settings.md" %}
[ldap-data-sync-settings.md](ldap-data-sync-settings.md)
{% endcontent-ref %}

{% content-ref url="ldap-examples.md" %}
[ldap-examples.md](ldap-examples.md)
{% endcontent-ref %}
