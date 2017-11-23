# Push Notifications

Mobile Notifications Gateway Configuration

The following description, from community member @lvh1 and updated by @lunitic, describes how to configure mobile notification gateways using the latest edition of Rocket.Chat.

## Android

To configure mobile notifications using the rocket.chat gateway:

- Go to <https://console.developers.google.com/> and create a project there.
- Go to API Manager, and enable "Google Cloud Messaging for Android"
- In API Manager, open the "Credentials" tab, click "New credentials", then "API key". In the window that pops up, choose "Server key"
- Fill in the correct IP address from your server and click "Create"
- Fill in the obtained API key in your Rocket.Chat administrator panel (GCM API Key)
- The GCM Project Number which you also have to fill in on Rocket.Chat can be found "Project Settings" of your Google developers project, Settings are located by clicking the three dot drop down in the top right corner . (<https://console.developers.google.com/home/dashboard>, <http://i.imgur.com/Zfp2SsV.jpg>)

## Rocket.Chat Cordova

Fill in GCM Project Number in the file www/shared/js/android_sender_id.js, replace "YOUR-ANDROID-ID-HERE" with your GCM Project Number

## iOS

For iOS you need an apple developer account that costs US$99 per year. Follow instructions here: <https://github.com/raix/push/blob/v3.x/docs/IOS.md>

## Rocket.Chat

- Go to "Administration", then "Push"
- Set the Enable Gateway to False, then you will use your own Rocket.Chat as gateway instead of the <https://rocket.chat> server
- Restart server

Now you should be able to Send a test message. Make sure that you have logged in to the server once, and then closed the app.
You should see a test notification after you pressed the send button.
