---
description: Configure general settings of your workspace.
---

# General

To access the general settings of your workspace, navigate to **Administration > Workspace > Settings > General**

{% hint style="success" %}
Remember always to hit **Save Changes** to apply any changes made.
{% endhint %}

## General Settings

* **Show Setup Wizard**: This setting **SHOULD NOT** be altered. It is been set automatically from `Pending` -> `In Progress` -> `Completed` depending on whether your workspace's general setup procedure has been completed. Changing this manually can lock your workspace. Please refer to this [issue](https://github.com/RocketChat/Rocket.Chat/issues/13840)
* **Site URL**: This sets the URL of the workspace. Example: `https://chat.domain.com/`
* **Site Name**: This sets the name of the workspace. Example `My Rocket.Chat Server`
* **Document Domain**: Lets you set the document domain.
* **Language**: This sets the default language for the workspace. This setting is overridden if the user has changed his language preference.
* **Allow Invalid Self-Signed Certs**: Enable to allow invalid and self-signed SSL certificates for link validation and previews.
* **Enable Content-Security-Policy**: Do not disable this option unless you have a custom build and are having problems due to inline-scripts
* **Restrict access inside any Iframe**: Lets you set restrictions to load the Rocket.Chat inside any iframe
* **Options to X-Frame-Options**: Options to X-Frame-Options. [You can see all the options here.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options#Syntax)
* **Enable Favorite Rooms**: Lets you set if users can mark a room as favorite
* **First Channel After Login**: Insert here the name of the channel that the user enters after logging in. Setting this field to empty or setting invalid name results in the user being directed to the workspace's home page. Example: `#welcome`
* **Unread Count**: This setting changes the behavior of the unread counter
  * **All messages**: All messages are counted on the counter, regardless if they are mentioned or not.
  * **User mentions only**: Only mentions using `@yourUsername` are counted on the counter.
  * **Group mentions only**: Only group mentions using `@all` or `@here` are counted on the counter.
  * **User and group mentions only**: All mentions are counted, this includes `@all`, `@here` and `@yourUsername`
* **Unread Count for Direct Messages**: This setting changes the behavior of the unread counter on Direct Messages
  * **All messages**: All messages sent by another user are counted on the counter.
  * **Mentions only**: Only mentions using `@yourUsername` are counted on the counter.
* **DeepLink\_Url**: Lets you set the DeepLink URL
* **CDN Prefix**: If you want to use a CDN to load the assets of your workspace, insert here your CDN Prefix.
* **Use CDN Prefix for all assets**: This defines if all assets from the workspace come from a CDN.
* **CDN Prefix for JS/CSS**: Insert here the prefix for the CDN that should load the JS/CSS assets.
* **Force SSL**: You can use this setting to force SSL on your workspace. We strongly discourage the usage of this setting, this should be done at the reverse proxy level by redirecting to HTTPS.

{% hint style="warning" %}
_Force SSL_ should never be used with reverse proxy. If you have a reverse proxy, you should do the redirect there. This option exists for deployments like Heroku, which does not allow the redirect configuration at the reverse proxy.
{% endhint %}

* **Google Tag Manager Id**: You can use Google Tag Manager on Rocket.Chat by setting your Id on this setting.
* **Bugsnag API Key**: If you are integrating Bugsnag with Rocket.Chat, you should put your Bugsnag API Key here.
* **Store Last Message**: Store the last message sent in each room. This enables the viewing of the last message on the left sidebar (should be on by default)
* **Robots.txt File Contents**: This sets the content of the Robots.txt file, used to help index your workspace on different search engines and crawlers
* **Default Referrer Policy**: This controls the 'referrer' header that's sent when requesting embedded media from other workspaces. For more information, refer to [MDN. ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy'%3Ethis)Remember, a full page refresh is required for this to take effect
* **Enable second-layer encryption for data transport**: Lets you enable second-layer encryption.

{% hint style="info" %}
This feature is currently in alpha
{% endhint %}

* **Reset Section to Default**: Click to reset the general settings to default.

## Apps

* **Number of days to keep logs from apps stored**: Lets you set how long in days to keep logs from Rocket.Chat Apps.
* **Enable the App Framework**: Use this setting to enable the Rocket.Chat Apps Framework. This allows you to add Rocket.Chat Apps from our Marketplace to your workspace.
* **Enable development mode**: Development mode allows the installation of apps that are not from the Rocket.Chat's Marketplace.
* **Apps' Source Package Storage type**: Choose where all the apps' source code should be stored. Apps can have multiple megabytes in size each.
* **Directory for storing apps source package**: Absolute path in the filesystem for storing the apps' source code (in zip file format)

## REST API

* **Max Record Amount**: This sets the maximum number of records the REST API should return when not set to unlimited.
* **Default Count**: The default count for REST API results if the consumer did not provide any.
* **Allow Getting Everything:** This setting affects the `count` query parameter. See more at [Offset and Count Information](https://developer.rocket.chat/api/rest-api/offset-and-count-and-sort-info)
  * **Yes**: Allows the usage of the number `0` as `count` parameter. Setting `count` to `0`  returns **ALL** the data from that endpoint
  * **No**: Setting the number `0` on `count`, returns `0` results.
* **Enable Direct Message History Endpoint**: This enables the `/api/v1/im.history.others` which allows the viewing of direct messages sent by other users that the caller is not part of.
* **Enable Shields**: Enables the usage of [Shields](https://developer.rocket.chat/api/rest-api/methods/miscellaneous/shield-svg) via API. Shields are available at `/api/v1/shield.svg`
* **Shield Types**: Types of shields to enable as a comma-separated list, choose from `online`, `channel` or `*` for all
* **Require authentication for users shields**: Let you set if user authentication is required for shields.
* **Enable CORS**: Use this setting to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for the REST API. Enabling CORS makes the workspace only accept API Calls from specific origins.&#x20;

{% hint style="info" %}
Setting this to false makes your workspace only accept requests from the same domain of the said workspace. E.g. Rocket.Chat workspace will only accept requests from the Rocket.Chat domain.
{% endhint %}

* **CORS Origin**: Here, you can set what origins are allowed to make requests to your workspace. You can use `*` to accept from all origins. For multiple Origins, use a comma-separated list. E.g `https://domain1.com, https://domain2.com, https://domain3.com`
* **Use REST instead of WebSocket for Meteor calls**: Set if Rest is used instead of WebSocket for Meteor calls.
* **User Limit for Adding All Users to Channel**: This limits the number of users that can be added to a Channel at the same time.

## Update

* **Update Latest Available Version**: Updates to the specific versions available
* **Enable the Update Checker**: Checks automatically for new updates / important messages from the Rocket.Chat developers and receives notifications when available. The notification appears once per new version as a clickable banner and as a message from the Rocket.Cat bot, both visible only for administrators.

## Notifications

* **Always notify mobile**: Choose always to notify mobile devices regardless of presence status.
* **Max Room Members Before Disabling All Message Notifications**: Max number of members in the room when notifications for all messages get disabled. Users can still change per room setting to receive all notifications on an individual basis. (0 to disable)

## Iframe Integration

{% hint style="info" %}
To be able to use the microphone, camera, and geolocation in an iframe, be sure to allow [the iframe features policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature\_Policy/Using\_Feature\_Policy). Example

```html
<iframe src="https://open.rocket.chat/" allow="geolocation; microphone; camera"></iframe>
```
{% endhint %}

* **Enable Send**: This setting defines if Rocket.Chat can send events to the parent window.
* **Send Target Origin**: Origin with protocol prefix, which commands are sent to e.g. `https://localhost`, or \* to allow sending to anywhere.
* **Enable Receive**: This setting defines if a parent window can send commands to Rocket.Chat.
* **Receive Origins**: Origins with protocol prefix, separated by commas, which are allowed to receive commands e.g. `https://localhost`, `http://localhost`, or \* to allow receiving from anywhere.

## NPS

See this section for NPS

{% content-ref url="net-promoter-score-nps-survey.md" %}
[net-promoter-score-nps-survey.md](net-promoter-score-nps-survey.md)
{% endcontent-ref %}

## Stream Cast

* **Stream Cast Address**: IP or Host of your Rocket.Chat central Stream Cast. E.g. `192.168.1.1:3000` or `localhost:4000`

## Timezone

* **Default timezone for reporting**: Sets the default timezone that is used when showing dashboards or sending emails.
* **Custom timezone**: Let you set custom timezones

## Translations

* **Custom Translations**: With this setting, you can configure custom translations for your workspace. Should be a valid JSON where keys are languages containing a dictionary of keys and translations. Example:

```json
{
 "en": {
  "Channels": "Rooms"
 },
 "pt": {
  "Channels": "Salas"
 }
}
```

## UTF8

* **UTF8 Names Validation**: RegExp used to validate usernames and channel names
* **UTF8 Channel Names Validation**: RegExp used to validate channel names

{% hint style="info" %}
If you are having problems with names when creating channels (e.g., when using non-English characters), changing these values will probably fix it. For example, using `[\w_-]+` should allow any non-space character to be part of a name.
{% endhint %}
