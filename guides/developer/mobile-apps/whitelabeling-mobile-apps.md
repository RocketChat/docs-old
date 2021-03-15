# Whitelabeling mobile apps

In this guide we will cover how to rebrand Rocket.Chat Mobile Apps to suit your styling.

Here we will show you how to customize:

* The App Icons
* Splash Screens
* App Name
* Colors

## Important

* This document is updated after every release, so we can guarantee it's stable for production
  * `develop` branch might be different from this
* Keep in mind that you will need an **intermediate** knowledge of Android/iOS development and basic Javascript knowledge
* Our repo contains targets/build flavors to build both our Experimental and Official apps
  * Both apps are equal, but released at different pace on the stores
  * If you see an Experimental folder, don't be scared of breaking anything. It's just a folder containing the assets for the non-official app

## Repo

* Make sure you have both iOS and Google developer accounts and the respective development environments working
  * You can follow this guide: [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)
* Clone [https://github.com/RocketChat/Rocket.Chat.ReactNative](https://github.com/RocketChat/Rocket.Chat.ReactNative)
* Checkout `single-server` branch \(git clone -b single-server [https://github.com/RocketChat/Rocket.Chat.ReactNative](https://github.com/RocketChat/Rocket.Chat.ReactNative)\)

## General

* Create an account on [https://www.bugsnag.com/](https://www.bugsnag.com/)
* Set `BUGSNAG_API_KEY` on [config.js](https://github.com/RocketChat/Rocket.Chat.ReactNative/blob/single-server/config.js#L2)
* Set `server`, `appGroup` and `appStoreId` on [app.json](https://github.com/RocketChat/Rocket.Chat.ReactNative/blob/single-server/app.json#L5)
  * `appGroup` must be the same App Group created for the iOS app
* Change app colors on [colors.js](https://github.com/RocketChat/Rocket.Chat.ReactNative/blob/single-server/app/constants/colors.js)

## Firebase

### Creating a new project on Google Cloud Platform

* Visit [https://console.cloud.google.com/home/dashboard](https://console.cloud.google.com/home/dashboard)
* By the text Google Cloud Platform there is a dropdown, open and then “Create project”
* In the dialog give an project name then “Create”
* Wait the creating process, you can follow in notifications by your avatar
* You will be redirected to the project page after creation

### Creating new Firebase project

* Visit [https://console.firebase.google.com/](https://console.firebase.google.com/)
* Click on “Add Project”
* Enter the project name you created on previous step
* Follow the wizard until Firebase project is created
* We’re going to create the apps later on the tutorial

## iOS

### General setup

* Open [RocketChatRN.xcworkspace](https://github.com/RocketChat/Rocket.Chat.ReactNative/tree/single-server/ios/RocketChatRN.xcworkspace) on Xcode \(11.7 or newer\)
* On General tab, select “RocketChatRN” and change Display Name, Bundle Identifier, Version and Build
  * Note: as explained on Important section, we have two targets and we're going to cover the default one on this doc, which is the Experimental app.

![](../../../.gitbook/assets/screen-shot-2020-10-05-at-16.42.41.png)

* Select “ShareRocketChatRN” and change the same properties
  * `Display Name` and `Bundle Identifier` are different from the previous target
  * `Version` and `Build` must be the same on all targets

![](../../../.gitbook/assets/screen-shot-2020-10-05-at-16.42.50.png)

* Select “NotificationService” and change the same properties
  * `Display Name` and `Bundle Identifier` are different from the previous target
  * `Version` and `Build` must be the same on all targets

![](../../../.gitbook/assets/screen-shot-2020-10-05-at-16.42.59.png)

* On Signing and Capabilities, check “Automatically manage signing”, select your app group and add a keychain group

![](../../../.gitbook/assets/screen-shot-2020-10-05-at-16.39.48.png)

* Select “ShareRocketChatRN”, check “Automatically manage signing”, select your app group and add the same keychain group

![](../../../.gitbook/assets/screen-shot-2020-10-05-at-16.39.33.png)

* Select “NotificationService”, check “Automatically manage signing”, select your app group and add the same keychain group

![](../../../.gitbook/assets/screen-shot-2020-10-05-at-16.39.58.png)

* Set the same app group on `RocketChatRN/Info.plist`, `ShareRocketChatRN/Info.plist` and `NotificationService/Info.plist`

![](https://lh5.googleusercontent.com/BEV_JFzqUS3OX5mStoT1ParmsmQtRhtnHTGrBhzkHq-Lrf3rabjg1pnDlUqmEDaHXySmHzE-Iqtn07gL7FN6wGrbTAiLu3JFC5yN6qW1C3u3HnSqDQWZQ08hmp0jXhjplLeKmcyr)

![](https://lh3.googleusercontent.com/o3iotTRPf5V7C6PZiZ9SYwWR_suvnW8mflVSABFaRaRzRuKm4SBRrbLiAVceStFpj7WWGs3xNJO_2cqT7EeRxet9fQoX7MYuUWjLfOBhScEXt5HZVB1XEQxtYrH5Oh8juv1Iz0hu)

![](../../../.gitbook/assets/image%20%2835%29%20%281%29%20%283%29%20%283%29%20%283%29%20%283%29%20%282%29.png)

* Set the same keychain group on `RocketChatRN/Info.plist`, `ShareRocketChatRN/Info.plist` and `NotificationService/Info.plist`

![](../../../.gitbook/assets/image%20%2836%29.png)

![](../../../.gitbook/assets/image%20%2834%29.png)

![](../../../.gitbook/assets/image%20%2837%29.png)

* It needs to be the same on all entitlements

![](../../../.gitbook/assets/image%20%2839%29.png)

![](../../../.gitbook/assets/image%20%2844%29.png)

![](../../../.gitbook/assets/image%20%2842%29.png)

* Change the app icon on `Experimental.xcassets/App Icon`

![](../../../.gitbook/assets/image%20%28178%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%281%29.png)

* Change the app splash screen on `Experimental.xcassets/Launch Screen Icon`

![](../../../.gitbook/assets/image%20%28175%29.png)

* Change the splash background colors on `Experimental.xcassets/splashBackgroundColor`

![](../../../.gitbook/assets/image%20%28179%29.png)

* Set your Bugsnag API key on `RocketChatRN/Info.plist`

![](https://lh4.googleusercontent.com/vuLbbqHeK_lJC7y5zHt2Y_XNI_VRkhKu3Ee8CduE1TSGIQuvbc7EEKwvgXBD7CwvOa_QPIJFRnnDL-2j2wTwRe0neey8bP3wvuchTAQXgUBARrPh44ajgDScJXneKDw412aoQZ8e)

### Generating iOS app on Firebase

* Visit the project overview on [https://console.firebase.google.com](https://console.firebase.google.com)
* Click on the gear icon and then “Project settings”

![](https://lh6.googleusercontent.com/W9wKhlYZOFc_f9G7CEpOM_87qw_8dvxE08nscN_QIskcTW9ImOSqVckJewhp2j-f5wnClxkE8EaAszD7Z1rLFDbtfc56dXH-S_aEou6HLwcEA_rEDDIQTyEy4d1dtPwxXVxVu-JO)

* On “General” tab, click on “iOS” button under “Your apps” section

![](https://lh3.googleusercontent.com/yWR4dImy-l6-B79Xtw1VR1bOOeKFFS05h9yh3dsulbv6pbr1dLljd0KgxNn3MpzInUZF6xtw_KAOfYVZKXuqzVf-ybavOTtJ92tX-N_h7QhHi6X0AA3qZuqsenUnDHNvnqwmTvpX)

* Enter your bundle ID and then “Register app”

![](https://lh6.googleusercontent.com/64SZsPUtnHS1xw3UPvG0Pxd4ljeJ4r42KQWqhrOn-aYQQMvqaH7hXH07T9aaWv_ImTRnDMm0QQdst0hVnIFtAz6cd-I8Tr8K9YDpld6mcNYc6Q6-5nsRlXqQibdnJSBVrHjtXrzE)

* Download config file and move it as instructed

![](https://lh6.googleusercontent.com/aOiSAtt1YF-nsaZIHhKesYjdTzlsEN3T-mqZ2fvBvZJV95jl6LfBBjT0hS8ufaAyHytAdn-0yhjjkJ8kGLJ1RIZJvGYIpNtUon6_WPaSA7GZ-yyDslpCKSDUtnYaK8E0l4Z4mR1O)

* Add it to all targets

![](../../../.gitbook/assets/image%20%2843%29.png)

### Running the app

* Execute the following on project terminal
  * `yarn`
  * `npx pod-install`
  * `yarn ios`

## Android

### General setup

* Similarly to iOS, we have build flavours to generate our Official, Experimental and F-Droid versions of the app
  * `experimental` and `official` folders contain app icons and splash screens
  * `play` and `foss` folders contain necessary code to run the app with or without Google Play services, respectively
    * `foss` build doesn't contain push notifications implemented
  * `main` folder contains core implementations
  * `debug` folder contains code to run the app in debug mode
  * This doc is going to focus on building the Experimental app, so we're going to use `experimental`, `play` `debug`, and `main` folders

![](../../../.gitbook/assets/image%20%28177%29.png)

* Set `APPLICATION_ID`, `VERSIONCODE` and `BugsnagAPIKey` on `./android/gradle.properties`
* Generate a [new image asset](https://developer.android.com/studio/write/image-asset-studio) for `ic_notification` and target `main`
* Generate a [new image asset](https://developer.android.com/studio/write/image-asset-studio) for `ic_launcher` and target `experimental`
* Change splash screen background and notification text color on `./android/app/src/experimental/res/values/colors.xml`

![](../../../.gitbook/assets/image%20%28180%29.png)

* Change splash screen logo on `./android/app/src/experimental/res/drawable-xxhdpi/splash.png`
* Change app name and share extension name on `./android/app/src/main/res/values/strings.xml`

![](../../../.gitbook/assets/image%20%28174%29.png)

### Generate upload key

* This step will generate the keystore that is going to verify your app on Google Play
  * You can use this guide as reference: [https://reactnative.dev/docs/signed-apk-android\#generating-an-upload-key](https://reactnative.dev/docs/signed-apk-android#generating-an-upload-key)
* Execute the following on terminal
  * `cd android/app`
  * `keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
* Credentials will be prompted

![](../../../.gitbook/assets/15.png)

* Set `KEYSTORE_PASSWORD` and `KEY_PASSWORD` on ./android/gradle.properties with the passwords you were prompted

### Generating Android app on Firebase

* Visit the project overview on [https://console.firebase.google.com](https://console.firebase.google.com)
* Click on the gear icon and then “Project settings”

![](https://lh6.googleusercontent.com/W9wKhlYZOFc_f9G7CEpOM_87qw_8dvxE08nscN_QIskcTW9ImOSqVckJewhp2j-f5wnClxkE8EaAszD7Z1rLFDbtfc56dXH-S_aEou6HLwcEA_rEDDIQTyEy4d1dtPwxXVxVu-JO)

* On “General” tab, click on “Add app” button under “Your apps” section and then “Android”

![](https://lh3.googleusercontent.com/SjEalr1zhiPne9Wm43vGiWQ1VtOXGownd0YYDWlEYa5hRpY69Z0L7BY7H07HZ4Q3o9KEAbJpCHi6fO_qH1k0WyHqr4lfC3VL-eCH-as_lN85UmEIL4iQ6RTcljHMqbJf1ElGsTB8)

![](https://lh5.googleusercontent.com/2DQKam8jGt20nIF1KbKZGU2UMJBwdVKOiLo0hIn3S3upZJytt3aHt6fzPT2sezotlYTKoqflRNRUdONQtXeAxC2Dbi00Dpf80aomGRQxjGmkOq62ubLoNTzxWoF9DWb4M3rlXWi-)

* Enter your bundle ID and then “Register app”

![](https://lh6.googleusercontent.com/t4_xn2ud8KnPKDfQ4r2Hk7jo4bYs85ZQ8LmYFeFwD6tB3qt3a8U1l3x1HsFcDE0yRKe1PI8AXDD-4J-8QoQMarD7riUwO3hjF4YURBKOe8hlJZHRCvt1E49TxVVZSkPSAfKg7OFB)

* Download config file and move it as instructed

![](https://lh5.googleusercontent.com/k7CjPaIbiBvkd3wY1Exl6FGZsmC5blK8pNW3fycI9NAVZ9rWwdVNHtSTV6EWHQFasep9tOf0k0nEE36khTIxgtTr4se2_NM6lJmgeM20M5lhMPupoc0BjhouH7B7X3jnP5CvgMg6)

![](../../../.gitbook/assets/image%20%2833%29.png)

### Running the app

* Execute the following on project terminal
  * `yarn`
  * `yarn android-whitelabel <YOURAPPID>`
  * For example, the app created on this document would use `yarn android-whitelabel chat.rocket.whitelabel`
* Note: this script uses `experimentalPlayDebug` build flavor. When you build your app on release mode, use `experimentalPlayRelease`
  * Refer to [https://developer.android.com/studio/build/build-variants](https://developer.android.com/studio/build/build-variants) for more info about how it works

## Push notification

### Configuring gateway

* Go to your Rocket.Chat admin page &gt; Push
* Disable “Gateway” and press “Save changes”

![](../../../.gitbook/assets/21.png)

* Also disable “Production”, if you’re trying in debug mode
* Expand “Credentials and Keys” section

### Configuring Android

* Go to Cloud Messaging on Firebase settings
* Copy “Server Key” token from Firebase into “GCM API Key”
* Copy “Sender ID” into “GCM Project Number”

![](../../../.gitbook/assets/22.png)

### Configuring iOS

* Make sure you’ve done “Creating Push Notifications certificates” first
* In your terminal, go to the folder which contains your push files \(CSR, .cer, .p12\).

#### Generating PEM files \(Development\)

* Execute
  * `openssl x509 -in aps_development.cer -inform der -out DevPushCert.pem`
  * `openssl pkcs12 -nocerts -out DevPushKey.pem -in yourP12File.p12`
* You **must** set a password for your PEM file

#### Generating PEM files \(Production\)

* Execute
  * `openssl x509 -in aps.cer -inform der -out PushCert.pem`
  * `openssl pkcs12 -nocerts -out PushKey.pem -in yourP12File.p12`
* You **must** set a password for your PEM file

#### Copying PEM files to Rocket.Chat

* Copy the contents of your development PEM files and password into APN Dev Key, APN Dev Cert and APN Dev Passphrase
* Copy the contents of your production PEM files and password into APN Key, APN Cert and APN Passphrase
* You can use `cat` on terminal to get the content of your PEM files
  * `cat PushKey.pem`
* Save and restart your server
* Log into the server as the same user on your mobile device and close it \(it won’t receive push notification, if it’s open\)
* Open Push settings on admin from desktop and click “Send a test push to my user”

## Developer Apple

### Login to Apple Developer

* Visit [https://developer.apple.com/account](https://developer.apple.com/account/resources/certificates/list)
* Enter your credentials
* Click on Certificates, Identifiers & Profiles

![](../../../.gitbook/assets/23.png)

### Creating an App Identifier

* Visit [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list)
* Click to add Identifier
* Select App IDs and Continue

![](https://lh5.googleusercontent.com/fBgW0bm87EUIxW6yJwWIA3qE96RRXXvesYyrGuzQ63OuXpJmPsEtYgnFFaVsuR0_ho3xorv1rE_UuxNlhHj9ewYyk57fENVQykRtn-Zpm8rKmHIBi9r9lmAsNH6Fhxx8wCZfOq4b)

* Add description and Bundle ID

![](https://lh4.googleusercontent.com/JhzGmNHMLFB8k16GjrAFa0z5kP7R2gMr0qvs_k9hxK4g3JRwz7jpEkFuN3yzQ4mwd380zguniK1pGvfbsah0i2voB1xpFSxTZzJ3_Ap16L0z8QCI3PYSxPHXfiY4PVfQnUaxVENG)

* On Capabilities, select App Groups and Push notifications
* Click “Continue” and then “Register”

### Creating an App Identifier for our Share Extension

* Share Extension is a version of the app that opens when you share data from another app to Rocket.Chat. For example, share a photo from the gallery.
* Visit [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list)
* Click to add Identifier
* Select App IDs and Continue

![](https://lh5.googleusercontent.com/fBgW0bm87EUIxW6yJwWIA3qE96RRXXvesYyrGuzQ63OuXpJmPsEtYgnFFaVsuR0_ho3xorv1rE_UuxNlhHj9ewYyk57fENVQykRtn-Zpm8rKmHIBi9r9lmAsNH6Fhxx8wCZfOq4b)

* Add description and Bundle ID

![](https://lh5.googleusercontent.com/KJWk8QgL8lVOczT4DMaTrPvZrLsqwyJSguCuH9__NPDLOx_s0CojrUE5COtAU_frKHVHbDmoyRIrUmzMB9m28g9g4v7E87365bPZuCULfyHgGLCnLJryhbfXJA9XzLoQ0TXIFCSP)

* This time, select only App Groups under Capabilities
* Click “Continue” and then “Register”

### Create an App Identifier for our Notification Service

![](../../../.gitbook/assets/image%20%2838%29.png)

### Creating an App Group

* Visit [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list)
* Click to add Identifier
* Select App Groups and Continue

![](https://lh6.googleusercontent.com/9HIEqXPESh2ovfCnnGsq40A9cvrUYdrRZGMnP9j71Ssxoz5xBfdkoaD-D7Gpds6RJz3psb-eze8kaKUfrM6IZdK1e_9Zx8jKAI02_mD74JGhCEA4exVI6Dp9IJImI5pdFQvfn4Kh)

* Enter a description and an Identifier

![](https://lh6.googleusercontent.com/0xhE6ekIILrExeeIAd8logt77SDiGX26zZ7yGKI8yZCjcDRTTjtPVBO2tBAklCJvX03PqcB71eTCPytIwtDVx7TGCDX81eTc1Vy9QdQNKkDDTG4sGStQw52GDbZr5zpr9TF_7Mbh)

* Click “Continue” and then “Register”

### Applying App Group

* Visit [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list)
* Click on the first identifier you created
* On “App Groups”, click “Configure”
* Select the App Group you created and click “Continue”
* Click “Save”
* Repeat these steps for the second identifier you created for the Share Extension and NotificationService

### Creating Push Notifications certificates

* Visit [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list)
* Click on the first identifier you created
* On “Push Notifications”, click “Configure”

![](../../../.gitbook/assets/30.png)

#### Development SSL Certificate

* On “Development SSL Certificate”, click “Create Certificate”
* Follow Apple’s tutorial to generate a Certificate Signing Request: [https://help.apple.com/developer-account/\#/devbfa00fef7](https://help.apple.com/developer-account/#/devbfa00fef7)
* Select the certificate you created an click “Continue”

![](https://lh4.googleusercontent.com/pv8BFR0k34C4G72y1-KxqgHmKbTMN59gCI2p2NbxevJNG7TtW2G3fpPhYjds-tSnbLCEdB9xj6N5P4XCxtJwaKAJSP2diMoP8jp3AN-pdIWlYfcaIDsVabzq1qvQ8aUBcAzOWPxn)

* Download the certificate and install it on your machine \(follow instructions on the screen\)

![](https://lh6.googleusercontent.com/bxWWaArRsUZ3XrQ3s5ldGTwuLjwc9BhqvEOODJWTe8ep5rKdfqCVMWeZF0ZBg0oWS69Uwr_0WBApU9oLMZdqiG8G_DX7UEqqsjE_OAsjPyIxXKSNMpjFGJgVf6H7GUUzArkmCBAP)

* After installing it, “Keychain Access” should have opened automatically on your Mac
* Export the certificate to generate a .p12 file

![](https://lh4.googleusercontent.com/QXJ01OEmH9V67hw_pphtNyuVL25iLu3H1335ZBt6L8yvQQZU4NkllRYcBFSushRZk1IzY1kC0J62POYWg0XoeSmdolQ2d-g4NnD2Y4JlEdoVQXF6RRoRNoBZuRZBWAfsqZy334LN)

* For simplicity, save it in the same folder of your CSR and .cer. You’ll need it later.

#### Production SSL Certificate

* On “Production SSL Certificate”, click “Create Certificate”
* Follow Apple’s tutorial to generate a Certificate Signing Request: [https://help.apple.com/developer-account/\#/devbfa00fef7](https://help.apple.com/developer-account/#/devbfa00fef7)
* Select the certificate you created an click “Continue”

![](https://lh5.googleusercontent.com/bdlcvworJPKW1iUzy3G_wAASYOILEpCWDkI7BRdl7uk_JD0FqK7n-_M7rOY-Nd194IkU0KbaGjRRR2Zxf93xYyxUqW129t7lDaZErzqQzhYriYVxYn2qPPFjA3mcnN6YCM6zOqcu)

* Download the certificate and install it on your machine \(follow instructions on the screen\)

![](https://lh3.googleusercontent.com/qEWMSoSAlC8ETDC3sVKOsbNo5bM34ZbSrKRavq_XP_b2KdsUaC1H8NCUfE-cAF3k-JAxEk4pyWk6S-NEoPCKcTA56IwcETJiMgQK2sRvpuF_kzaWBrDTEF1y0Lz6ewzUDbgfj6I1)

* After installing it, “Keychain Access” should have opened automatically on your Mac
* Export the certificate to generate a .p12 file

![](https://lh3.googleusercontent.com/WCLBhK5CneauBC7xQH3atoiHS3HE9YvJ7IaC5hCdGQVh3sx8CtF2u4vjcBc1e-LVl0zWXTwhrXzct8HcGLAk6D3A7eZHYiVHTzsAGdMNZ2jGADKi0jwXFiYoVhOyytvfiRqm4HuV)

* For simplicity, save it in the same folder of your CSR and .cer. You’ll need it later.

