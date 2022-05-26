# Authentication

{% content-ref url="open-id-connect/" %}
[open-id-connect](open-id-connect/)
{% endcontent-ref %}

{% content-ref url="single-sign-on-iframe.md" %}
[single-sign-on-iframe.md](single-sign-on-iframe.md)
{% endcontent-ref %}

## External Authentication

If you need to automatically login users from your own website you can look at [Iframe integration page](../../misc.-admin-guides/authentication/broken-reference/) or you can use the REST API [Login](../../misc.-admin-guides/authentication/broken-reference/) in combination with [deeplinking](../../misc.-admin-guides/authentication/broken-reference/) and the resumeToken.

```
# get the resumeToken from your REST API login - it's the authToken field
https://yourown.rocket.chat/home?resumeToken=abcd123456789
```
