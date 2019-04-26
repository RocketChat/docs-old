# Building Rocket.Chat for mobile apps

## Android

### Background

If you've downloaded our android app on Google Play, you noticed it connects to any server Rocket.Chat server.

In this document we explain how to build your own version that can be restricted to connect to your own server only and have your own branding.

> This is NOT the Meteor official way to build Android client for Rocket.Chat.

#### Download and Run

If you do not want to build your own, or learn about the technical details, just download this APK and install it on your Android device:

[Download and Install Now](https://github.com/RocketChat/Rocket.Chat.Cordova/releases/)

You must first enable developer mode, and allow non-Google Play APK installation on your device.

If you have the Google Play version installed already, you must uninstall it first.

(please add instructions to change package id)

#### How does it work?

This app is a shim.  It presents a screen to collect the server URL of your choice, and then loads Rocket.Chat into a webview using that URL.  It can also save and manage a list of such server URLs.

In addition, this app replaces your Android device's webview with an up-to-date webview from the crosswalk-project.  This enables devices with old Android versions, as far back as 4.0, to run Rocket.Chat.

### Requirements

Since this app is built with Cordova, the same requirements apply:

- **Node.js**
- **Android SDK**:
    - This tool will not work unless you have the absolute latest updates for all Android SDK components.
    - Also you will need the SDK's tools and platform-tools directories on your system path otherwise Android support will fail.

### Install Cordova

```bash
$ sudo npm install -g cordova
```

Additional information here: <https://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html>

### Install dependencies

```bash
$ sudo npm install -g underscore
$ sudo npm install -g coffee
```

### Get the App

Clone the `Rocket.Chat.Cordova` repo:

```bash
$ git clone https://github.com/RocketChat/Rocket.Chat.Cordova
$ cd Rocket.Chat.Cordova
```

### Create/Edit conf files

```bash
$ echo 'Bugsnag.apiKey = "YOUR-API-KEY-HERE";' > www/js/bugsnag_apikey.js
$ echo 'window.ANDROID_SENDER_ID = "YOUR-ANDROID-ID-HERE";' > www/shared/js/android_sender_id.js
```

### Install app dependencies

```bash
$ sudo npm install
```

### Build the Android App

In theory this is as simple as:

```bash
$ cordova build android
```

But if you get some errors (which seems kinda normal), make sure you have installed the SDK or tools in the Requirements section. Even though meteor may install it's own version of the SDK or tools, you still need the standalone version installed and the environment variables set for the Cordova build to succeed.

**NOTE**: for android build, this Cordova build only supports android-22 target which is Android 5.1.1.  NO OTHER target is supported at this time.  Please make sure you have SDK Platform, SDK build tools for API 22 installed.

If there are a lot of `cannot find module` build problems, try adding and removing the cordova android platform:

```bash
$ cordova platform remove android
$ cordova platform add android
```

### Test the App on an Emulator or Device

SDKs for mobile platforms often come bundled with emulators that execute a device image, so that you can launch the app from the home screen and see how it interacts with many platform features. This command rebuilds the app and views it within android's emulator:

```bash
$ cordova emulate android
```

You may need to first associate a device with an emulator.

### Publish to your devices

Alternately, you can plug the handset into your computer and test the app directly:

```bash
$ cordova run android
```

You would have to enable a USB debugging option on the device, and perhaps add a USB driver depending on your development environment.

### Run the app

And you'll see an UI that allows you to connect to a custom server instance.

Have fun! ;)

## Build for Android with Docker

In order to build Rocket.Chat for Android, you must have docker installed on your Linux (or OS/X) system.

You must have at least 4GB of RAM (16 GB recommended) and 10 GB of disk space available.

Then:

```shell
$ docker pull rocketchat/meteor12androidbuilder
```

Follow the instructions [of the docker image](https://hub.docker.com/r/rocketchat/meteor12androidbuilder/).

### Additional Information

Check out the [How to submit your Android app to the Play Store](https://github.com/meteor/meteor/wiki/How-to-submit-your-Android-app-to-Play-Store) guide on the Meteor Wiki for additional information.
