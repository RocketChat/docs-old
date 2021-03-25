# Authentication

{% page-ref page="oauth/" %}

{% page-ref page="open-id-connect/" %}

{% page-ref page="saml/" %}

{% page-ref page="cas.md" %}

{% page-ref page="single-sign-on-iframe.md" %}

## External Authentication

If you need to automatically login users from your own website you can look at [Iframe integration page]() or you can use the REST API [Login]() in combination with [deeplinking]() and the resumeToken.

```text
# get the resumeToken from your REST API login - it's the authToken field
https://yourown.rocket.chat/home?resumeToken=abcd123456789
```

