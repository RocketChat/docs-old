# General

Configure general settings of your workspace.

To access analytics, go to **Administration > Settings > General.**

You have access to various configurations that can be done.

{% hint style="success" %}
Remember to always hit **Save changes** to apply any changes made.
{% endhint %}

## General Settings

* **Show Setup Wizard**: This setting **SHOULD NOT** be altered. It is been set automatically from `Pending` -> `In Progress` -> `Completed` depending on weither your server's general setup procedure has been completed. Changing this manually can lock your server Please refer to this [issue](https://github.com/RocketChat/Rocket.Chat/issues/13840)
* **Site URL**: This sets the URL of the server. Example: `https://chat.domain.com/`
* **Site Name**: This sets the name of the server. Example `My Rocket.Chat Server`
* **Document Domain**: Lets you set the document domain
* **Language**: This sets the default language for the server. This setting will be overridden if the user has changed his language preference.
* **Allow Invalid Self-Signed Certs**: Enable to allow invalid and self-signed SSL certificates for link validation and previews.
* **Enable Content-Security-Policy**: Do not disable this option unless you have a custom build and are having problems due to inline-scripts
* **Restrict access inside any Iframe**: Lets you set restrictions to load the Rocket.Chat inside any iframe
* **Options to X-Frame-Options**: Options to X-Frame-Options. [You can see all the options here.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options#Syntax)
* **Enable Favorite Rooms**: Lets you set if users can mark a room as favorite
* **First Channel After Login**: Insert here the name of the channel that the user will enter after logging in. Setting this field to empty or setting an invalid name will result in the user being directed to the server's home page. Example: `#welcome`
* **Unread Count**: This setting changes the behavior of the unread counter
  * **All messages**: All messages will be counted on the counter, regardless if they are a mentioned or not.
  * **User mentions only**: Only mentions using `@yourUsername` will be counted on the counter.
  * **Group mentions only**: Only group mentions using `@all` or `@here` will be counted on the counter.
  * **User and group mentions only**: All mentions will be counted, this includes `@all`, `@here` and `@yourUsername`
* **Unread Count for Direct Messages**: This setting changes the behavior of the unread counter on Direct Messages
  * **All messages**: All messages sent by another user will be counted on the counter.
  * **Mentions only**: Only mentions using `@yourUsername` will be counted on the counter.
* **DeepLink\_Url**: Lets you set the DeepLink url
* **CDN Prefix**: If you want to use a CDN to load the assets of your server, insert here your CDN Prefix.
* **Use CDN Prefix for all assets**: This will define if all assets from the server will come from a CDN.
* **CDN Prefix for JS/CSS**: Insert here the prefix for the CDN that should load the JS/CSS assets.
* **Force SSL**: You can use this setting to force SSL on your server. We **Strongly Discourage** the usage of this setting, this should be done at the reverse proxy level by redirecting to HTTPS.

{% hint style="warning" %}
_Caution!_ _Force SSL_ should never be used with reverse proxy. If you have a reverse proxy, you should do the redirect THERE. This option exists for deployments like Heroku, that does not allow the redirect configuration at the reverse proxy.
{% endhint %}

* **Google Tag Manager Id**: You can use Google Tag Manager on Rocket.Chat by setting your Id on this setting.
* **Bugsnag API Key**: If you are integrating Bugsnag with Rocket.Chat, you should put your Bugsnag API Key here.
* **Store Last Message**: Store the last message sent in each room. This will enable the viewing of the last message on the left sidebar (should be on by default)
* **Robots.txt File Contents**: This sets the content of the Robots.txt file, used to help indexing your server on different search engines and crawlers
* **Default Referrer Policy**: This controls the 'referrer' header that's sent when requesting embedded media from other servers. For more information, refer to [MDN. ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy'%3Ethis)Remember, a full page refresh is required for this to take effect
* **Enable second layer encryption for data transport**: Lets you enable second layer encryption.

{% hint style="info" %}
This feature is currently in alpha
{% endhint %}

* **Reset Section to Default**: Click to reset the general settings to default.

## Apps

* **Number of days to keep logs from apps stored**: Lets you set how long in days to keep logs from  Rocket.Chat Apps.
* **Enable the App Framework**: Use this setting to enable the Rocket.Chat Apps Framework. This allows you to add Rocket.Chat Apps from our Marketplace to your server.
* **Enable development mode**: Development mode allows the installation of apps that are not from the Rocket.Chat's Marketplace.
* **Apps' Source Package Storage type**: Choose where all the apps' source code will be stored. Apps can have multiple megabytes in size each.
* **Directory for storing apps source package**: Absolute path in the filesystem for storing the apps' source code (in zip file format)

## REST API

* **Max Record Amount**: This sets the maximum number of records the REST API should return when not set to unlimited.
* **Default Count**: The default count for REST API results if the consumer did not provide any.
* **Allow Getting Everything:** This setting affects the `count` query parameter. See more at [Offset and Count Information](https://developer.rocket.chat/api/rest-api/offset-and-count-and-sort-info)
  * **Yes**: Allows the usage of the number `0` as `count` parameter. Setting `count` to `0` will return **ALL** the data from that endpoint
  * **No**: Setting the number `0` on `count`, will return `0` results.
* **Enable Direct Message History Endpoint**: This enables the `/api/v1/im.history.others` which allows the viewing of direct messages sent by other users that the caller is not part of.
* **Enable Shields**: Enables the usage of [Shields](https://developer.rocket.chat/api/rest-api/methods/miscellaneous/shield-svg) via API. Shields are available at `/api/v1/shield.svg`
* **Shield Types**: Types of shields to enable as a comma-separated list, choose from `online`, `channel` or `*` for all
* **Require authentication for users shields**: Let you set if user authentication is required for shields.
* **Enable CORS**: Use this setting to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for the REST API. Enabling CORS will make the server only accept API Calls from specific origins. **Note**: `Setting this to false, will make your server only accept requests from the same domain of said server. E.g. rocket.chat server will only accept requests from the rocket.chat domain.`
* **CORS Origin**: Here you can set what origins are allowed to make requests to your server. You can use `*` to accept from all origins. For multiple Origins use a comma-separated list. E.g `https://domain1.com, https://domain2.com, https://domain3.com`
* **Use REST instead of WebSocket for Meteor calls**: Set if Rest is used instead of websocket for Meteor calls.
* **User Limit for Adding All Users to Channel**: This limits the amount of users that can be added to a Channel at the same time.

## Update

* **Update Latest Available Version**: Updates to specific version available
* **Enable the Update Checker**: Checks automatically for new updates / important messages from the Rocket.Chat developers and receives notifications when available. The notification appears once per new version as a clickable banner and as a message from the Rocket.Cat bot, both visible only for administrators.

## Notifications

* **Always notify mobile**: Choose to always notify mobile device regardless of presence status.
* **Max Room Members Before Disabling All Message Notifications**: Max number of members in room when notifications for all messages gets disabled. Users can still change per room setting to receive all notifications on an individual basis. (0 to disable)

## Iframe Integration

{% hint style="info" %}
To be able to use the microphone, camera, and geolocation in an iframe, be sure to allow [the iframe features policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature\_Policy/Using\_Feature\_Policy). Example&#x20;

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

* **Default timezone for reporting**: Sets the default timezone that will be used when showing dashboards or sending emails.
* **Custom timezone**: Let you set custom timezones

## Translations

* **Custom Translations**: With this setting you can configure custom translations for your server. Should be a valid JSON where keys are languages containing a dictionary of key and translations. Example:

```json
{
ÃÂ¢ÃÂÃÂ"en": {
ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ"Channels": "Rooms"
ÃÂ¢ÃÂÃÂ},
ÃÂ¢ÃÂÃÂ"pt": {
ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ"Channels": "Salas"
ÃÂ¢ÃÂÃÂ}
}
```

## UTF8

* **UTF8 Names Validation**: RegExp that will be used to validate usernames and channel names
* **UTF8 Channel Names Validation**: RegExp that will be used to validate channel names

{% hint style="info" %}
**Note**: If you are having problems with names when creating channels (when using non-english characters for example) changing these values will probably fix it. For example using `[\w_-]+` should allow any non-space character to be part of a name.
{% endhint %}
