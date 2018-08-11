# Push Notifications

Mobile Notifications Gateway Configuration

The following description, from community member @lvh1 and updated by @lunitic, describes how to configure mobile notification gateways using the latest edition of Rocket.Chat.

## Android

The Rocket.Chat native application for Android supports FCM system. Here's how you configure it:

1. Create a Firebase project in the Firebase console, if you don't already have one. Click Add project. If you already have an existing Google project associated with your mobile app, select it from the Project name drop down menu. Otherwise, enter a project name to create a new project.

2. *Optional:* Edit your Project ID. Your project is given a unique ID automatically, and it's used in publicly visible Firebase features such as database URLs and your Firebase Hosting subdomain. You can change it now if you want to use a specific subdomain.

3. Follow the remaining setup steps and click Create project (or Add Firebase if you're using an existing project) to begin provisioning resources for your project. This typically takes a few minutes. When the process completes, you'll be taken to the project overview.

Now that you have a project, you can add your Android app to it:

1. Click Add Firebase to your Android app and follow the setup steps. If you're importing an existing Google project, this may happen automatically and you can just [download the config file](http://support.google.com/firebase/answer/7015592).

2. When prompted, enter your app's package name. It's important to enter the package name your app is using; this can only be set when you add an app to your Firebase project.

3. During the process, you'll download a `google-services.json` file. You can [download this file](http://support.google.com/firebase/answer/7015592) again at any time.

4. After you add the initialization code, run your app to send verification to the Firebase console that you've successfully installed Firebase.

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
