# LDAP FAQ / Troubleshooting

## What's the "Bind successful but user was not found via search" error?

This error means that the login attempt was successful, but a subsequent search for the user on the LDAP Server returned no results. If you want to disable this search, you can turn off the "Find user after login" setting.

## How do I stop disabled LDAP users from logging in on Rocket.Chat?

You need to use the "Sync User Active State" setting under Advanced Sync, but it is not yet compatible with all LDAP Servers.


### I cannot login even everything looks good

If you cannot login without getting any error messages \(the last thing in log you see is `Attempt to bind <correct dn of user>`\), make sure the username of your ldap account does not match any username of a local account. For example if you created a local user with username `joe`, then enable ldap and try to login with username `joe` \(who exists on your ldap server\), it will silently fail without any error message in your log simply saying username or password do not match. You cannot login with `joe` by your ldap password nor by your local password any more.

### No users are created even if everything looks good

Every rocket.chat-user has to have an email. So either the LDAP users need to have an email or you have to set a default domain using the setting "default domain".

## References

MS LDAP Info: [https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475\(v=vs.85\).aspx](https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475%28v=vs.85%29.aspx)

