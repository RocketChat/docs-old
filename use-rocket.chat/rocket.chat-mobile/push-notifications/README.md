# Push Notifications

There are two ways to set up push notifications with Rocket.Chat:

* Push Gateway
* Self Configured

## Push Gateway

Select this option if you and your users intend to use the official Rocket.Chat mobile applications. option. To enable push alerts to be received on our official mobile application by any server, we set up a push gateway holding our keys. By doing this, we safeguard the secret keys required to transmit notifications to you and your users via Apple(APN) and Google (FCM) systems.

## Self Configured

When you choose to self-configure the push notifications, things become a bit more complicated. First, you need to get keys from both Apple and Google and compile/release your mobile applications to the app stores so your public keys will be distributed to your users. You will also need to add your keys to Rocket.Chat.

Then, compile them for iOS and Android and submit them to the appropriate app stores for review. Finally, direct your users to download your custom version of the Rocket.Chat mobile applications.

### Configuring for Android

The Rocket.Chat native application for Android supports the FCM system. You can configure it with the following steps:

* Create a Firebase project in the Firebase console if you don't already have one. Click Add project. If you already have an existing Google project associated with your mobile app, select it from the Project name drop-down menu. Otherwise, enter a project name to create a new project.
* _**(Optional)**_ Edit your Project ID. Your project is given a unique ID automatically, and it's used in publicly visible Firebase features such as database URLs and your Firebase Hosting subdomain. You can change it now if you want to use a specific subdomain.
* Follow the remaining setup steps and click Create a project (or Add Firebase if you're using an existing project) to begin provisioning resources for your project. This typically takes a few minutes. When the process completes, you'll be taken to the project overview.
* Now that you have a project, you can add your Android app. Click Add Firebase to your Android app and follow the setup steps. If you're importing an existing Google project, this may happen automatically, and you can [download the config file](http://support.google.com/firebase/answer/7015592).
* When prompted, enter your app's package name. It's important to enter the package name your app uses; this can only be set when you add an app to your Firebase project.
* During the process, you'll download a `google-services.json` file. You can [download this file](http://support.google.com/firebase/answer/7015592) again at any time.
* After you add the initialization code, run your app to send verification to the Firebase console that you've successfully installed Firebase

### Configuring for iOS

For iOS, you need a paid apple developer account. Then, follow the steps outlined in the [iOS setup guide](https://github.com/raix/push/blob/v3.x/docs/IOS.md).

{% hint style="info" %}
You can find more information on push notifications configuration [here](https://developer.rocket.chat/mobile-app/mobile-app-white-labelling/configuring-push-notifications).
{% endhint %}

### Configuring Rocket.Chat

* Go to **Administration.** Then click **Push.**
* Set the **Enable Gateway** to **False**, and plug the information from Apple and Google.
* Restart the server.

Now you should be able to send a text message. Ensure you have logged in to the server once and then closed the app. You should see a test notification after you press the send button.

{% hint style="info" %}
Here are some important points to consider when configuring mobile push notifications

* If you don't want notifications, you can disable the gateway and not provide keys.
* You cannot compile your applications and use the Rocket.Chat push gateway.
* For iOS, you need to [convert](https://github.com/raix/push/blob/master/docs/IOS.md) both the `.cer` and `.p12` files into `.pem` files.
* Once everything is configured on the admin settings, the server must be restarted.
{% endhint %}

## FAQ

<details>

<summary>I am getting, "Server notifications are misconfigured!"</summary>

If you are getting this message and are using our push gateway, please make sure:

* Your server version is greater or equal to 0.74.3.
* Your server is registered. (you can check this by going to `http://yourserver/admin/cloud`)

</details>
