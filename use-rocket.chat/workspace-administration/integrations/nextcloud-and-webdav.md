# Nextcloud and WebDAV integrations

You can integrate Nextcloud with any application that uses the WebDAV protocol. Rocket.Chat offers seamless integration between Nextcloud and the Rocket.Chat workspace.

With this integration, you can access, browse, navigate your Nextcloud directories and share files from your Nextcloud server all within Rocket.Chat.

{% hint style="info" %}
For the following integration to work on your Rocket.Chat workspace, contact your administrator, or follow the [webdav-integration.md](../settings/webdav-integration.md "mention") administrator guide to enable Webdav&#x20;
{% endhint %}

## Adding a new Nextcloud/WebDAV server

Once the integration has been enabled by the admin, any user will be able to link their servers to Rocket.Chat.

Adding a new Nextcloud server requires you to have available the;

* **WebDAV URL**: The WebDAV URL used for the connection
* **Username**: Your Nextcloud username
* **Password**: Your Nextcloud password

To get your Nextcloud WebDAV URL:

* navigate to the **Files** section of your Nextcloud server,&#x20;
* Click **Settings** at the bottom left, and you will see a WebDAV field with the URL that looks like this `https://EXAMPLE.COM/remote.php/dav/files/USERNAME/`&#x20;
* Copy the URL and proceed
* Back on your Rocket.Chat workspace, navigate to the :heavy\_plus\_sign:  button on the right side of your message composer inside any chat or room
* Click :heavy\_plus\_sign: **Add Server**
* Fill in the information on the dialogue that appears, including the Nextcloud WebDAV URL you copied earlier, Nextcloud username, and Nextcloud password
* Click **Add new WebDAV Account**
* Refresh your server
* Click the :heavy\_plus\_sign: button on the right side of your message composer inside any chat or room again, and this time, you will see the server you just added

From here, you have the ability to access and share your Nextcloud files on Rocket.Chat
