---
description: >-
  Info menu gives you a consolidated view of basic information about your
  server.
---

# Info

Visit the info section to get insight, statistics and info on the various aspects of your server. This can help you to better evaluate and monitor the various activities.

To access this menu, go to **Administration** > **Info**.

as shown below:

![](<../../../.gitbook/assets/2021-11-20\_23-29-48 (1).png>)

![](<../../../.gitbook/assets/image (662) (1) (1) (1) (1).png>)

## Deployment Info

The deployment info card shows information related to your server deployment.

* **Version**: The current version of your RocketChat server. This can be different from the latest version if not updated.
* **Deployment ID**: Your server's deployment ID.
* **Apps Engine Version**: The version of Apps engine. Can be different from the latest if not updated.
* **Node Version**: The Node.js version your server is running on.
* **Database Migration**: The date of database migration.
* **MongoDB**: The MongoDB version
* **Commit Details**: Details on the recent commit of your server.
* **PID**

## License Info

This shows the information patenting to the license of your server.

* **License**: **This** hows the tags of the license you have active on your server.
* **Features**: The various features supported by the license on your server. Like `Omnichannel` `Auditing`, `Canned Responses`, `Engagement Dashboard`.

### Apply Offline License

To apply your offline license from the **License** card of the **Info** dashboard,

Click on the **Apply Offline License** at the bottom right of the card.

![](<../../../.gitbook/assets/image (663) (1) (1) (1) (1) (1) (1).png>)

A modal is presented prompting you to paste the licence you got from the[ RocketChat Cloud Console](https://cloud.rocket.chat/home).

Paste the license code and hit the **Apply license** button.

![](<../../../.gitbook/assets/image (641) (1) (1) (1) (1) (1) (1) (1).png>)

### Change Offline License

To change your offline license from the **License** card of the **Info** dashboard,

Click on the **Change Offline License** at the bottom right of the card.

![](<../../../.gitbook/assets/image (654) (1) (2).png>)

A modal is presented prompting you to paste the new licence you got from the[ RocketChat Cloud Console](https://cloud.rocket.chat/home).

Clear the old license code and paste the new license code then hit the **Apply license** button.

## Usage Info

* **Users**
  * **Total**: The total number of users on the server.
  * **Online**: The number of users that are currently `online`.
  * **Busy**: The number of users that are in `Busy` mode.
  * **Offline**: The number of users that are offline.
* **Types and Distribution**
  * **Connected**
  * **Activated Users**: The number of activated users on your server.
  * **Activated Guests**: The number of guests that have been activated.
  * **Deactivated Users**: Number of inactive users.
  * **Rocket.Chat App Users**: The number of RocketChat users. Example `bot users`, `app users`.
* **Uploads**
  * **Total Uploads**: The number of total uploads that have been made on the server.
  * **Total Uploads Size**: The total size of all uploads.
* **Rooms**
  * **Total Rooms**: The total number of rooms on the server.
  * **Total Channels**: Total number of channels on your server.
  * **Total Private Groups**: Total number of private groups on the server
  * **Total Direct Message Rooms**: Total number of Direct Messages created on the server.
  * **Total Discussions**: Total number of discussions
  * **Total Omnichannel Rooms**: Total number of omnichannel rooms.
* **Messages**
  * **Total Messages**: Total messages sent and received on the server.
  * **Total Threads**: The total number of threads on the server.
  * **Total Messages in Channels**: Total messages in all channels only
  * **Total Messages in Private Groups**: Total number of messages in private groups only
  * **Total Messages in Direct Messages**: Total number of messages that have been sent in all direct messages
  * **Total Messages in Omnichannel**: The total number of messages in omnichannel

More details on usage info can be seen on the [engagement-dashboard.md](engagement-dashboard.md "mention")

## Federation Info

[RocketChat's Federation](../settings/federation.md#introduction) lets you set up communication between RocketChat servers.

**Enabled**: Enables federation on your server.

When enabled, it shows a green checkmark :white\_check\_mark: across the features well configured. And a red cross :x:across those that aren't.

### Federation Settings

To see more on federation settings, click on **Settings** at the bottom right of the federation card.

![](<../../../.gitbook/assets/image (666) (1) (1) (1) (1) (1).png>)

A modal is seen, fill the needed information and hit **Next**

![](<../../../.gitbook/assets/image (653) (1) (1).png>)

* **Domain**: Add the domain name that your server should be linked to.
* **Discovery Method**: A dropdown to select which discoverability mode to use e.g `DNS` or `HUB`

{% hint style="info" %}
We recommend using **DNS**.
{% endhint %}

Next, continue by adding the given DNS records on your server then follow the given instructions.

More on federa**t**ion setup can be seen in [this section](../settings/federation.md).

We also have a guide on [talking-to-users-from-another-server.md](../../user-guides/talking-to-users-from-another-server.md "mention").

## Download Info

To download info about your server, click the **Download Info** button by the top right of your info panel.

![](<../../../.gitbook/assets/2021-11-20\_23-38-23 (1).png>)

A download is prompted with a file named `statistics.json`.

## Refresh Info

Refreshing info on your RocketChat server will prompt for the latest stats to be pulled.

To refresh info, click the **Refresh** button by the top right of your info panel.

![](../../../.gitbook/assets/2021-11-20\_23-42-35.png)
