# NextCloud OAuth Setup

To use Nextcloud OAuth on your server, you need the `URL` of your Nexcloud server, Nextcloud `id` and `secret`

Follow these steps to set up Nextcloud OAuth on your server.&#x20;

* Login to your Nextcloud server as admin
* &#x20;Go to **Settings** > **Administration** > **Security**

![](<../../../../.gitbook/assets/image (643) (1) (1) (1).png>)

* Locate the OAuth 2.0 clients section
* Fill out the client name and redirection url `<server-url>/_oauth/nextcloud` and click **add**

![](<../../../../.gitbook/assets/image (638).png>)

* A new OAuth app is created and the details shown

![](<../../../../.gitbook/assets/image (637) (1) (1).png>)

* Copy these credentials and fill them in the Nextcloud section of the OAuth configuration on your RocketChat server then hit **Save changes**

![](<../../../../.gitbook/assets/image (673) (1) (1).png>)

* The Nextcloud OAuth button is now active on the register and login page

![](<../../../../.gitbook/assets/image (657) (1) (1) (1).png>)

You now get the prompt to confirm when logging in with Nextcloud

![](<../../../../.gitbook/assets/image (677) (1) (1) (1).png>)
