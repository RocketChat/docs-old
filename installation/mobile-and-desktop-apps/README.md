# Mobile and Desktop Apps

## Windows, macOS and Linux Software

You can download the Windows, macOS and Linux client software here:

### Windows

Can be found [here](https://github.com/RocketChat/Rocket.Chat.Electron/releases/download/2.7.0/rocketchat-desktop-setup-2.7.0.exe)

### macOS

Can be found in the App Store [here](https://itunes.apple.com/app/rocket.chat/id1086818840)

It can also be downloaded [here](https://github.com/RocketChat/Rocket.Chat.Electron/releases/download/2.7.0/rocketchat-desktop-2.7.0.dmg)

### Linux

If you are on Ubuntu we recommend you install our snap via:

```
sudo snap install rocketchat-desktop
```

Snaps auto update so you no longer need to worry about manually keeping the client up to date.

Snaps are also available on other platforms. More information available [here](https://snapcraft.io/docs/core/install)

Alternatively you can download and manually install:

[Debian amd64](https://github.com/RocketChat/Rocket.Chat.Electron/releases/download/2.7.0/rocketchat-desktop_2.7.0_amd64.deb)

[Debian i386](https://github.com/RocketChat/Rocket.Chat.Electron/releases/download/2.7.0/rocketchat-desktop_2.7.0_i386.deb)

[Fedora amd64](https://github.com/RocketChat/Rocket.Chat.Electron/releases/download/2.7.0/rocketchat-desktop-2.7.0.rpm)

## iOS App

The app for iOS (iPhone, iPad, iPod touch) can be found on the App Store. Just search for `Rocket.Chat`

[![Rocket.Chat on App Store](http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg)](https://itunes.apple.com/us/app/rocket.chat/id1028869439?mt=8)

## Android App

The app for Android can be found on Google Play. Just search for `Rocket.Chat`

[![Rocket.Chat on Google Play](https://play.google.com/store/apps/details?id=chat.rocket.android&hl=en)](https://play.google.com/store/apps/details?id=com.konecty.rocket.chat)

### Android and iOS Mobile users

Enter the URL to your Rocket.Chat server (e.g. <https://open.rocket.chat>) to initialize the app. This needs to be done the first time you run the app after installation.

Use two-fingers swipe up gesture to add more servers if you need to access multiple servers from one client.

### Android and iOS Mobile Users running Rocket.Chat server on a Sandstorm Grain

1. On your phone in a browser open Sandstorm and open the Rocket.Chat grain.
2. Open the hamburger menu (upper-left) and choose "Get Webkey". (On the desktop view, you would click the key icon in the topbar.)
3. Optionally enter a label (e.g. "phone") and then click "create".
4. You'll be presented with a URL, aka a "webkey". Long-press on this URL, then choose "copy link address".
5. Open the rocket.chat app.
6. Paste in the copied URL (the whole thing!) as your Rocket.Chat server address.
7. That's it! No password is needed, since an authorization token is encoded into the URL.

## Native Firefox OS App

![Rocket.Chat on Firefox OS](https://raw.githubusercontent.com/Sing-Li/bbug/master/images/firefoxos.png)

### Users

*Note: This works also works on Firefox for Android and the desktop browser.*

Point the browser on the Firefox OS device to your Rocket.Chat URL (e.g. <https://open.rocket.chat> ), then add ```/fxos``` (e.g. <https://open.rocket.chat/fxos>) and press OK/enter. You will be prompted to install the app.

### Developers

1. Make sure you have ```adb``` (android debug bridge) installed on your PC
2. Enable developer mode on the mobile device
3. Start your Firefox browser on the PC and connect your device
4. Enter the Firefox WebIDE (Shift + F8 or go to Extras -> Web Developer -> WebIDE)
5. "Project" -> "Open hosted app"
6. Enter the path to the Rocket.Chat manifest.webapp **on your server**, e.g. <https://open.rocket.chat/manifest.webapp> - then press OK
7. You should now see the icon and description inside WebIDE. Press the play button on top to install it on your device

### Admins

Do you want to use a custom URL to your Rocket.Chat, or maybe a custom icon and description?
Just edit the **manifest.webapp** file in the **/public** folder of the meteor project.
For more info, have a look at the [Firefox OS documentation](https://developer.mozilla.org/en-US/Apps/Build/Manifest).
