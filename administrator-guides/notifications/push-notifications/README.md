# Push Notifications

There are two ways to setup push notifications with Rocket.Chat:

* Push Gateway
* Self Configured

## Push Gateway

If you and your users intend to use the official Rocket.Chat mobile applications you need to choose this option.

To allow push notifications to be received on our official mobile application by any server, we had to establish a push gateway containing our keys.  In doing so, we protect our secret keys required to send through Apple(APN) and Google(FCM) to send you and your users notifications.

## Self Configured

When you choose to self configure the push notifications, things become a bit more complicated.  First, you need to get keys from both Apple and Google, and compile/release your own mobile applications to the app stores so your public keys will be distributed to your users.

Then also you will need to add your keys to Rocket.Chat.

Then you will have to compile for iOS and Android and submit them to the appropriate app stores for review.

Finally you would direct your users to download your custom version of the Rocket.Chat mobile applications.

### Configuring for Android

The Rocket.Chat native application for Android supports FCM system. Here's how you configure it:

1. Create a Firebase project in the Firebase console, if you don't already have one. Click Add project. If you already have an existing Google project associated with your mobile app, select it from the Project name drop down menu. Otherwise, enter a project name to create a new project.

2. *Optional:* Edit your Project ID. Your project is given a unique ID automatically, and it's used in publicly visible Firebase features such as database URLs and your Firebase Hosting subdomain. You can change it now if you want to use a specific subdomain.

3. Follow the remaining setup steps and click Create project (or Add Firebase if you're using an existing project) to begin provisioning resources for your project. This typically takes a few minutes. When the process completes, you'll be taken to the project overview.

Now that you have a project, you can add your Android app to it:

1. Click Add Firebase to your Android app and follow the setup steps. If you're importing an existing Google project, this may happen automatically and you can just [download the config file](http://support.google.com/firebase/answer/7015592).

2. When prompted, enter your app's package name. It's important to enter the package name your app is using; this can only be set when you add an app to your Firebase project.

3. During the process, you'll download a `google-services.json` file. You can [download this file](http://support.google.com/firebase/answer/7015592) again at any time.

4. After you add the initialization code, run your app to send verification to the Firebase console that you've successfully installed Firebase.

### Configuring for iOS

For iOS you need an apple developer account that costs US$99 per year. Follow instructions here: <https://github.com/raix/push/blob/v3.x/docs/IOS.md>

### Configuring Rocket.Chat

- Go to "Administration", then "Push"
- Set the Enable Gateway to False, then plug the information obtained from Apple and Google
- Restart server (with out this it will not work)

Now you should be able to Send a test message. Make sure that you have logged in to the server once, and then closed the app.
You should see a test notification after you pressed the send button.

## General Observations

- If you don't want notifications you can just disable gateway and not provide keys.
- You cannot compile your own applications and use the Rocket.Chat push gateway.
- For iOS, you need to [convert](https://github.com/raix/push/blob/master/docs/IOS.md) both the .cer and .p12 files into .pem files
- Once everything is configured on the admin settings, the server must be restarted

## FAQ

### I am getting "Server notifications are misconfigured!"

If you are getting this message and are using our push gateway please make sure:

1. Your server version is greater or equal to 0.74.3
2. Registered (you can check this by going to `http://yourserver/admin/cloud`)

_Thanks to @lvh1 and @lunitic for starting this doc_
