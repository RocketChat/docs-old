# Authentication

{% content-ref url="open-id-connect/" %}
[open-id-connect](open-id-connect/)
{% endcontent-ref %}

{% content-ref url="single-sign-on-iframe.md" %}
[single-sign-on-iframe.md](single-sign-on-iframe.md)
{% endcontent-ref %}

## External Authentication

If you need to automatically login users from your own website you can look at the [iframe integration page ](../../../use-rocket.chat/workspace-administration/settings/account-settings/#iframe)or you can use the [REST API Login](https://developer.rocket.chat/reference/api/rest-api/endpoints/other-important-endpoints/authentication-endpoints/login) in combination with [deeplinking](https://developer.rocket.chat/rocket.chat/deeplink) and the resumeToken.

```
# get the resumeToken from your REST API login - it's the authToken field
https://yourown.rocket.chat/home?resumeToken=abcd123456789
```
