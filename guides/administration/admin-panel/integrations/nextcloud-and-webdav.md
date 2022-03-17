# Nextcloud and WebDAV integrations

You can integrate Nextcloud with any application that uses the WebDAV protocol. Rocket.Chat offers seamless integration between Nexcloud and the Rocket.Chat server.

With this integration, you can access, browse, navigate your Nextcloud directories and share files from your Nextcloud server all within Rocket.Chat.

To do this,  `WebDAV Integration` needs to be enabled on your Rocket.Chat server.&#x20;

You will need a server admin to go into **Administration** -> **Settings** -> **Webdav Integration** and set the value to `true`.

![](<../../../../.gitbook/assets/administration >)

![](<../../../../.gitbook/assets/image (678).png>)

## Adding a new Nextcloud/WebDAV server

Once the integration has been enabled by the admin, any user will be able to link their servers to Rocket.Chat.

Adding a new Nexcloud server requires you to have available the;

* **WebDAV url**: The WebDAV url used for the connection
* **Username**: Your Nexcloud username
* **Password**: Your Nextcloud password

To get your Nexcloud WebDAV url, **Files** section of your Nextcloud server then **Settings** at the bottom left

![](<../../../../.gitbook/assets/image (673).png>)

![](<../../../../.gitbook/assets/image (674).png>)

You will see a WebDAV field with the url that looks like this `https://EXAMPLE.COM/remote.php/dav/files/USERNAME/` Copy the url and proceed

* Back on your Rocket.Chat interface, **click on the big plus icon** by the right of the message box

![](<../../../../.gitbook/assets/image (690).png>)

* Then select **Add Server** on the popup that shows to add a new WebDAV server

![](<../../../../.gitbook/assets/image (647).png>)

* Fill in the information on the dailogue that appears including the Nextcloud WebDAV url we copied earlier, Nextcloud username and Nextcloud password then **Add new WebDAV Account**

![](<../../../../.gitbook/assets/image (670).png>)

* When that is successful, refresh your server
* To access Nexcloud file in RocketChat, click on the plus icon :heavy\_plus\_sign: again and this time, you will see the server you just added.&#x20;

![](<../../../../.gitbook/assets/image (677) (1).png>)

From here, you have the ability to access and share your Nextcloud files on Rocket.Chat

![](<../../../../.gitbook/assets/image (672).png>)

