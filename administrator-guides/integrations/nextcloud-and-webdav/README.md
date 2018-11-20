# NextCloud and WevDAV integrations

You can integrate NextCloud and any application that uses the WebDAV protocol.

To do that you will need a server admin to go in `Administration -> Webdav Integration` and set the setting `Webdav Integration Enabled` to `true`.

After that users can link their Nextcloud/WebDAV service to Rocket.Chat to access and share their stored files.

## Adding a new NextCloud/WebDAV server

Having the integration enabled by the admin, any user can link their servers to Rocket.Chat.

To do that, you should simply press the file sharing button on the message box (the big "plus" at the end of the message box) and select `add server` under the `WebDav` category.

Then you will need your `WebDAV url`, your username and password for that server. You can find here a [how to get your WebDAV url](https://docs.nextcloud.com/server/14/user_manual/files/access_webdav.html) from NextCloud.

Usually NextCloud WebDAV urls looks like this:

`https://example.com/nextcloud/remote.php/dav/files/USERNAME/`

After that you should be ready to start sharing files to Rocket.Chat via WebDav Protocol.
