# FAQ

## What's the "Bind successful but user was not found via search" error?

This error means that the login attempt was successful, but a subsequent search for the user on the LDAP Server returned no results. If you want to disable this search, you can turn off the "Find user after login" setting.

## How do I stop disabled LDAP users from logging in on Rocket.Chat?

You need to use the "Sync User Active State" setting under Advanced Sync, but it is not yet compatible with all LDAP Servers.

### I cannot log in even everything looks good

If you cannot log in without getting any error messages \(the last thing in the log you see is `Attempt to bind <correct dn of user>`\), make sure the username of your LDAP account does not match any username of a local account. For example if you created a local user with a username`joe`, then enable LDAP and try to login with a username `joe` \(who exists on your LDAP server\), it will silently fail without any error message in your log simply saying username or password does not match. You cannot log in by`joe,`your LDAP password nor by your local password anymore.

### No users are created even if everything looks good

Every rocket.chat-user has to have an email. So either the LDAP users need to have an email or you have to set a default domain using the setting "default domain".

## References

MS LDAP Info: [https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475\(v=vs.85\).aspx](https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475%28v=vs.85%29.aspx)

