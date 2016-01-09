#Mobile Notifications Gateway Configuration
The following description, from community member @lvh1, describes how to configure mobile notification gateways using the latest edition of Rocket.Chat.

###Android

To configure mobile notifications using the rocket.chat gateway:

* Go to https://console.developers.google.com/ and create a project there.
* Go to API Manager, and enable "Google Cloud Messaging for Android"
* In API Manager, open the "Credentials" tab, click 'New credentials -> API key. In the window that pops up, choose "Server key"
* Fill in the correct IP address from your server and Click "Create"
* Fill in the obtained API key in your rocketchat administrator panel (GCM API Key)
* The GCM Project Number which you also have to fill in on rocketchat can be found on the dashboard of your Google developers project, first block that shows up . (https://console.developers.google.com/home/dashboard, http://i.imgur.com/3DXHEKy.png)

###iOS

For iOS you need an apple developer account that costs 99$ per year. Follow instructions here: https://github.com/raix/push/blob/v3.x/docs/IOS.md 
