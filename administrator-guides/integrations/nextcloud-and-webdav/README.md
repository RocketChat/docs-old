# Nextcloud and WebDAV integrations

You can integrate Nextcloud with any application that uses the WebDAV protocol.

To do so, you will need a server admin to go into `Administration -> Webdav Integration` and set the `Webdav Integration Enabled` setting to `true`.

Users can then link their Nextcloud/WebDAV service to Rocket.Chat to access and share their stored files.

## Adding a new Nextcloud/WebDAV server

Once the integration has been enabled by the admin, any user will be able to link their servers to Rocket.Chat.

To do that, you should simply press the file-sharing button on the message box (the big "plus" at the end of the message box) and select `add server` under the `WebDav` category.

Then you will need your `WebDAV url`, your username and password for that server. You can find out how to get your WebDAV url on Nextcloud's docs [here](https://docs.nextcloud.com/server/14/user_manual/files/access_webdav.html).

Usually NextCloud WebDAV urls looks like this:

`https://example.com/nextcloud/remote.php/dav/files/USERNAME/`

You should then be ready to start sharing files to Rocket.Chat via WebDav Protocol!
