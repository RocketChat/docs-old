## Background
If you've downloaded our android app on Google Play, you noticed it only connects to [our demo server](http://demo.rocket.chat).

In this document we explain how to build your own version that can connect to your own server.


#### Benefits

This is NOT the official way to build Android client for Rocket.Chat. See [official android build](https://github.com/RocketChat/Rocket.Chat/wiki/How-to-Build-Rocket.Chat-for-Android). However, it does have the following benefits:

* you can connect the app to your own server(s)
* the app is compatible, today, with Android version as old as 4.0 - allowing [over 95% of all Android devices in circulation](https://developer.android.com/about/dashboards/index.html)  to run Rocket.Chat

#### Caveats

There are also disadvantages:

* you MUST side-load the resulting app to your device (not through Google Play)
* push notification is not supported
* performance may not be up-to-par with the app store version - due to lack of initial local cache
* oauth via Facebook, Twitter, Github, and so on does not currently work because an external browser session is triggered (this will likely be fixed soon)

#### Download and Run

If you do not want to build your own, or learn about the technical details, just download this APK and install it on your Android device:

[Download and Install Now](https://rocket.chat/dists/android/rc.apk)

You must first enable developer mode, and allow non-Google Play APK installation on your device.

If you have the Google Play version installed already, you must uninstall it first.

(please add instructions to change package id)

#### How does it work?

This app is a shim.  It presents a screen to collect the server URL of your choice, and then loads Rocket.Chat into a webview using that URL.  It can also save and manage a list of such server URLs.

In addition, this app replaces your Android device's webview with an up-to-date webview from the crosswalk-project.  This enables devices with old Android versions, as far back as 4.0, to run Rocket.Chat.
 

## Requirements 

Since this app is built with Cordova, the same requirements apply:

- __Node.js__
- __Android SDK__: 
    - This tool will not work unless you have the absolute latest updates for all Android SDK components. 
    - Also you will need the SDK's tools and platform-tools directories on your system path otherwise Android support will fail.

## Install Cordova 

    $ sudo npm install -g cordova
    
Additional information here: https://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html
    
## Get the App

Clone the `Rocket.Chat.Cordova` repo: 

    $ git clone https://github.com/RocketChat/Rocket.Chat.Cordova
    $ cd Rocket.Chat.Cordova

## Build the Android App

In theory this is as simple as: 

    $ cordova build android

But if you get some errors (which seems kinda normal), make sure you have installed the SDK or tools in the Requirements section. Even though meteor may install it's own version of the SDK or tools, you still need the standalone version installed and the environment variables set for the Cordova build to succeed. 

__NOTE__: for android build, this Cordova build only supports android-22 target which is Android 5.1.1.  NO OTHER target is supported at this time.  Please make sure you have SDK Platform, SDK build tools for API 22 installed.

If there are a lot of `cannot find module` build problems, try adding and removing the cordova android platform:

    $ cordova platform remove android
    $ cordova platform add android

## Test the App on an Emulator or Device

SDKs for mobile platforms often come bundled with emulators that execute a device image, so that you can launch the app from the home screen and see how it interacts with many platform features. This command rebuild the app and view it within android's emulator:

    $ cordova emulate android
    
You may need to first associate a device with an emulator.

## Publish to your devices

Alternately, you can plug the handset into your computer and test the app directly:

    $ cordova run android

You would have to enable a USB debugging option on the device, and perhaps add a USB driver depending on your development environmnent.

## Run the app

And you'll see an UI that allows you to connect to a custom server instance. 

Have fun! ;)
