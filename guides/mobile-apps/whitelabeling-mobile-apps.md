# Whitelabeling mobile apps



In this guide we will cover how to rebrand Rocket.Chat Mobile Apps to suit your styling.

Here we will show you how to customize:

* The App Icons
* Splash Screens
* App Name
* Some colors

Before starting, keep in mind that you will need an intermediate knowledge of Android/iOS development and basic Javascript knowledge.

## 

## Repo

* Make sure you have both iOS and Google developer accounts and the respective development environments working
  * You can follow this guide: [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)
* Clone [https://github.com/RocketChat/Rocket.Chat.ReactNative](https://github.com/RocketChat/Rocket.Chat.ReactNative)
* Checkout \`single-server\` branch

## General

* Create an account on [https://www.bugsnag.com/](https://www.bugsnag.com/)
* Set \`BUGSNAG\_API\_KEY\` on [config.js](https://github.com/RocketChat/Rocket.Chat.ReactNative/blob/single-server/config.js#L2)
* Set \`server\`, \`appGroup\` and \`appStoreId\` on [app.json](https://github.com/RocketChat/Rocket.Chat.ReactNative/blob/single-server/app.json#L5)
  * \`appGroup\` must be the same App Group created for the iOS app
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

### Generating iOS app on Firebase

### Running the app

* Execute the following on project terminal
  * yarn
  * cd ios
  * pod install
  * cd ..
  * react-native run-ios

## Android

### General setup

### Generate upload key

* This step will generate the keystore that is going to verify your app on Google Play
  * You can use this guide as reference: [https://reactnative.dev/docs/signed-apk-android\#generating-an-upload-key](https://reactnative.dev/docs/signed-apk-android#generating-an-upload-key)
* Execute the following on terminal
  * cd android/app
  * keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
* Credentials will be prompted
  * ![](../../.gitbook/assets/15.png)
* Set \`KEYSTORE\_PASSWORD\` and \`KEY\_PASSWORD\` on [./android/gradle.properties](https://github.com/RocketChat/Rocket.Chat.ReactNative/blob/single-server/android/gradle.properties) with the passwords you were prompted

### Generating Android app on Firebase

### Running the app

* Execute the following on project terminal
  * yarn
  * react-native run-android
* The app will build on the simulator or device, but it won’t start automatically

### Optional: Start the app automatically after build

* Android starts the app based on package’s Activity, but we changed the application id, so it won’t work
* For it to work, you have to change all references to \`chat.rocket.reactnative\` on .java files and on manifest
* Change all references as on this commit: [https://github.com/RocketChat/Rocket.Chat.ReactNative/commit/518e56379d88937d7f9a572c7bd61716a4d0b7fe](https://github.com/RocketChat/Rocket.Chat.ReactNative/commit/518e56379d88937d7f9a572c7bd61716a4d0b7fe)

## Push notification

### Configuring gateway

* Go to your Rocket.Chat admin page &gt; Push
* Disable “Gateway” and press “Save changes”
  * ![](../../.gitbook/assets/21.png)
* Also disable “Production”, if you’re trying in debug mode
* Expand “Credentials and Keys” section

### Configuring Android

* Go to Cloud Messaging on Firebase settings
* Copy “Server Key” token from Firebase into “GCM API Key”
* Copy “Sender ID” into “GCM Project Number”
* ![](../../.gitbook/assets/22.png)

### Configuring iOS

* Make sure you’ve done “Creating Push Notifications certificates” first
* In your terminal, go to the folder which contains your push files \(CSR, .cer, .p12\).

#### Generating PEM files \(Development\)

* Execute
  * openssl x509 -in aps\_development.cer -inform der -out DevPushCert.pem
  * openssl pkcs12 -nocerts -out DevPushKey.pem -in yourP12File.p12
* You **must** set a password for your PEM file

#### Generating PEM files \(Production\)

* Execute
  * openssl x509 -in aps.cer -inform der -out PushCert.pem
  * openssl pkcs12 -nocerts -out PushKey.pem -in yourP12File.p12
* You **must** set a password for your PEM file

#### Copying PEM files to Rocket.Chat

* Copy the contents of your development PEM files and password into APN Dev Key, APN Dev Cert and APN Dev Passphrase
* Copy the contents of your production PEM files and password into APN Key, APN Cert and APN Passphrase
* You can use \`cat\` on terminal to get the content of your PEM files
  * cat PushKey.pem
* Save and restart your server
* Log into the server as the same user on your mobile device and close it \(it won’t receive push notification, if it’s open\)
* Open Push settings on admin from desktop and click “Send a test push to my user”

## Developer Apple

### Login to Apple Developer

* Visit [https://developer.apple.com/account](https://developer.apple.com/account/resources/certificates/list)
* Enter your credentials
* Click on Certificates, Identifiers & Profiles
  * ![](../../.gitbook/assets/23.png)

### Creating an App Identifier

### Creating an App Identifier for our Share Extension

### Creating an App Group

### Applying App Group

* Visit [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list)
* Click on the first identifier you created
* On “App Groups”, click “Configure”
* Select the App Group you created and click “Continue”
* Click “Save”
* Repeat these steps for the second identifier you created for the Share Extension

### Creating Push Notifications certificates

* Visit [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list)
* Click on the first identifier you created
* On “Push Notifications”, click “Configure”
* ![](../../.gitbook/assets/30.png)

#### 

#### Development SSL Certificate

* 
#### Production SSL Certificate

* 
