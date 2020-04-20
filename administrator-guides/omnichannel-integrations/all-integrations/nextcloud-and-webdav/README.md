# Nextcloud and WebDAV Integrations

You can integrate Nextcloud with any application that uses the WebDAV protocol.

To do so, you need a server admin to go into **Administration > Webdav Integration** and set the **Webdav Integration Enabled** setting to `true`.

Users can then link their Nextcloud/WebDAV service to Rocket.Chat to access and share their stored files.

## Add New Nextcloud/WebDAV Server

Once the admin enables the integration, any user can link their servers to Rocket.Chat.

To do that, simply press the file-sharing button on the message box (the big "plus" at the end of the message box) and select **Add Server** under the **WebDav** category.

Then, you need your _WebDAV URL_, username, and password for that server.

Read [NextCloud documentation]((https://docs.nextcloud.com/server/14/user_manual/files/access_webdav.html)) and learn how to get your WebDAV URL.

Once configured, this is how NextCloud WebDAV URLs usually look like:

`https://example.com/nextcloud/remote.php/dav/files/USERNAME/`
