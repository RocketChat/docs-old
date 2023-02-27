---
description: CDN Setup instructions
---

# CDN

Rocket.Chat allows you to use a CDN to serve static assets such as JS, CSS and images to your workspace.

{% hint style="info" %}
If you provide a CDN prefix that is not live or incorrect, you may lose access to your Rocket.Chat instance as the required assets will not be found.
{% endhint %}

## Enabling CDN

To enable CDN in your workspace,

* Go to **Administration > Workspace > Settings > General.**
* **Update the** CDN Prefix.
* You can enable **Use CDN Prefix for all assets** or set a different&#x20;

### CDN Prefix

This string will generate different outcomes depending on the value provided.

| Value                                            | Example Url for Asset                                                              |
| ------------------------------------------------ | ---------------------------------------------------------------------------------- |
| cdn                                              | /cdn/example-asset.js                                                              |
| [http://cdn.domain.com](http://cdn.domain.com)   | [http://cdn.domain.com/example-asset.js](http://cdn.domain.com/example-asset.js)   |
| [https://cdn.domain.com](https://cdn.domain.com) | [https://cdn.domain.com/example-asset.js](https://cdn.domain.com/example-asset.js) |

### Use CDN Prefix for all assets

Enable this for serving all assets from the same CDN.

### CDN Prefix for JS/CSS

This option takes the same style input as CDN Prefix. The value provided will be applied only to JS and CSS assets.

## Troubleshooting

If the situation occurs where CDN stops working, or the provided values are incorrect, then there are a few work arounds to allow a fix to be implemented inside the Administration settings, which may be inaccessible.

### Database Fix

As the front end of Rocket.Chat may be inaccessible, the backend Mongo database can be updated to remove the CDN. The following Mongo commands should reset the value to the default state.

```
db.rocketchat_settings.update({_id:"CDN_PREFIX"},{$set:{"value":""}})
```

```
db.rocketchat_settings.update({_id:"CDN_JSCSS_PREFIX"},{$set:{"value":""}})
```

### Use a Browser Extension

A browser extension can be used to rewrite URLs from the CDN address to the same location as where Rocket.Chat is running. Please take care when selecting an appropriate extension for your browser.
