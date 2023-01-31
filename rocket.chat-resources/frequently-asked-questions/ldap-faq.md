# Identity Management EE FAQ

<details>

<summary>What exactly will be implemented on Enterprise Edition (EE) only? When will this be effective?</summary>

Rocket.Chat has launched a re-factored set of advanced LDAP features on September 28, 2021. The ability to connect to your LDAP server to sync user names and unique identifiers will remain in the Community Edition together with existing social login features. Selected advanced LDAP features including extended user attribute sync, group/team management, background sync, and SAML integration will be implemented only in the Enterprise edition. This change will enable Rocket.Chat to support ongoing improvements to our suite of identity management solutions while continuing to make our basic LDAP directory synchronization codebase available for use and extension by the Rocket.Chat community.

</details>

<details>

<summary>What LDAP, Active Directory, OAuth, and SAML mean, and how do these things work together?</summary>

These resources mean:

* **Directory service**\
  Directory service is a shared information infrastructure for locating, managing, administering, and organizing everyday items and network resources, which can include volumes, folders, files, printers, users, groups, devices, telephone numbers, and other objects.\
  Eg. Microsoft AD, NetIQ eDirectory, Apache Directory.
* **LDAP**\
  Lightweight Directory Access Protocol is an open, vendor-neutral, industry-standard application protocol for accessing and maintaining distributed directory information services, that allows the sharing of information about users, systems, networks, services, and applications.
* **SAML**\
  Security Assertion Markup Language is an open standard for exchanging authentication and authorization data between parties, in particular, between an identity provider and a service provider.
*   **OAuth**\
    Open Authorization is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.

    Eg. Google, Facebook, LinkedIn, Twitter.
* **SSO**\
  Single sign-on is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems.

</details>

<details>

<summary>Why is Identity Management (and authentication/authorization services) important?</summary>

The ability to integrate with your organization’s user directory service is important for keeping your users’ access up to date at all times. For example, when someone joins your organization their Rocket user can be created automatically, and when they leave their user can be promptly deactivated. This becomes more important with scale, the greater the count of users.

</details>

<details>

<summary>What will community users not be able to do anymore? Examples.</summary>

Community users will be able to connect an LDAP service used by their organization to and sync user email, name, and username; use the fallback option and encrypted settings. Basic SAML sync options, and Oauth for all providers (Apple, Dolphin, Drupal, Facebook, GitHub, GitHub, Enterprise, GitLab, Google, Linkedin, Meteor, Nextcloud, Tokenpass, Twitter, WordPress) will continue available in Community Edition.\
\
[View full functionalities](../../setup-and-administer-rocket.chat/advanced-workspace-management/identity-management-ee-vs-ce.md)

</details>

<details>

<summary>Will the new implementation affect Single Sign-On capabilities? Please explain single sign-on.</summary>

Single Sign-On (SSO) is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems. True single sign-on allows the user to log in once and access services without re-entering authentication factors. Workspaces that use social login capabilities (users sign-on via Google, Linked In, etc.) will not be impacted by this change.

</details>

<details>

<summary>I've contributed to building LDAP/SAML/Custom Oauth and now I can't use my code. What should I do?</summary>

We are rewriting the LDAP feature to TypeScript and making improvements on top of it. It's natural that over time parts of the code will be changed. We recognize all portions of our platform had contributions from our community. For those who contributed to LDAP/SAML/Custom Oauth, we will make sure it will not have a negative impact on their operation. Please contact @duda.nogueira on the open server.

</details>

<details>

<summary>How will this affect my air-gapped (no internet connection) environment? Can’t we just pull from our intranet easily anyway?</summary>

If the Rocket.Chat server is air-gapped but integrated with an internal LDAP server, then there is a need to apply for an enterprise edition license to access the complete suite of advanced LDAP/SAML/Oauth features when you upgrade.

</details>

<details>

<summary>The reason a division of our team/company uses RC is for security, and/or it is air-gapped. This LDAP change doesn’t seem to affect us for our purposes – but will this have some sort of unanticipated effect on our security processes/ability to maintain data privacy? If so, please explain so we can consider it further.</summary>

No there will not be ancillary effects.

</details>

<details>

<summary>What's the "Bind successful but user was not found via search" error?</summary>

This error means that the login attempt was successful, but a subsequent search for the user on the LDAP Server returned no results. If you want to disable this search, you can turn off the "Find user after login" setting.

</details>

<details>

<summary>How do I stop disabled LDAP users from logging in on Rocket.Chat?</summary>

You need to use the "Sync User Active State" setting under Advanced Sync, but it is not yet compatible with all LDAP Servers.

</details>

<details>

<summary>I cannot log in even though everything looks good</summary>

If you cannot log in without getting any error messages (the last thing in the log you see is `Attempt to bind <correct dn of user>`), make sure the username of your LDAP account does not match any username of a local account. For example, if you created a local user with a username`joe`, then enable LDAP and try to log in with a username `joe` (who exists on your LDAP server), it will silently fail without any error message in your log simply saying username or password does not match. You cannot log in by`joe,`your LDAP password nor by your local password anymore.

</details>

<details>

<summary>No users are created even if everything looks good</summary>

Every Rocket.Chat user has to have an email. So either the LDAP users need to have an email or you have to set a default domain using the setting "default domain".

</details>

## References

MS LDAP Info: [https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475(v=vs.85).aspx](https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475\(v=vs.85\).aspx)
