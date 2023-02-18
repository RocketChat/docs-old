# Livechat Widget Installation

The Live Chat Widget is a chat interface that can be embedded into a webpage. Visitors on your website can click the widget to initiate a conversation. It can serve as an excellent tool for use cases like the following:

* Offering Live and real-time support to customers/users.
* Embedded to get information from people interacting with your website.

## Livechat Widget Installation

To install the Live Chat widget,

* Go to **Administration** > **Omnichannel** > **Live Chat Installation**.
* Copy the code snippet and paste it above the last `</body>` tag on your website.
* The **Live Chat** widget appears at the bottom right of your webpage.

## Deploying Live Chat Widget to a different domain

To run the Live Chat Widget on a domain different from your Rocket.Chat server, &#x20;

* After installing the widget, navigate to **Administration** > **Workspace** > **Settings** > **General.**
* Disable **Restrict access inside any iframe** on your Rocket.Chat server.

## Troubleshoot Livechat Widget Installation

If you have issues displaying the Live Chat Widget, check your browser developer console to examine the details of any errors you might be experiencing.

### Failed to read 'localStorage' properly from Window

![](<../../.gitbook/assets/Clipboard - May 12, 2022 4\_21 PM.png>)

An error like this is related to your browser settings for third-party cookies. Try with another browser or review your browser settings to confirm it's not blocking third-party cookies.

### Trying to access localhost:3000

![](<../../.gitbook/assets/Clipboard -2.png>)

Review the **Site URL** setting under **Administration** > **Workspace** > **Settings** > **General** and the server name setting on your reverse proxy (if you have one) to guarantee they are all aligned and correspond to the same URL used in your Live Chat Widget installed script.
