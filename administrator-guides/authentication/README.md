# Authentication

- [CAS](https://rocket.chat/docs/administrator-guides/authentication/cas/)
- [LDAP](https://rocket.chat/docs/administrator-guides/authentication/ldap/)
- [Oauth](https://rocket.chat/docs/administrator-guides/authentication/oauth/)
- [SAML](https://rocket.chat/docs/administrator-guides/authentication/saml/)
- [Wordpress](https://rocket.chat/docs/administrator-guides/authentication/wordpress/)

If you need to automatic login users from your own website you can look at [Iframe integration page](../../developer-guides/iframe-integration) or you can use the REST API [Login](../../developer-guides/rest-api/authentication/login/) in combination with deeplinking [](../../developer-guides/deeplink) and the resumeToken.


```
# get the resumeToken from your REST API login - it's the authToken field
https://yourown.rocket.chat/home?resumeToken=abcd123456789
```
