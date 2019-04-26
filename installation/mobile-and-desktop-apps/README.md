# Mobile and Desktop Apps

You can find a variety of client apps to use with a Rocket.Chat server, apart from using a browser.

## Desktop Apps

Here you can find the Electron based Desktop Apps:

### Windows

Can be found [here](https://rocket.chat/download)

### macOS

Can be found in the App Store [here](https://itunes.apple.com/app/rocket.chat/id1086818840)

It can also be downloaded [here](https://github.com/RocketChat/Rocket.Chat.Electron)

### Linux

If you are on Ubuntu we recommend you install our snap via:

```
sudo snap install rocketchat-desktop
```

Snaps auto update so you no longer need to worry about manually keeping the client up to date.

Snaps are also available on other platforms. More information available [here](https://snapcraft.io/docs/core/install)

There is also a Flatpak [package available on Flathub](https://flathub.org/apps/details/chat.rocket.RocketChat).

Alternatively you can download and manually install:

You can find the download for the latest releases [here](https://github.com/RocketChat/Rocket.Chat.Electron/releases)

## Mobile Apps

You can find 3 kinds of mobile apps:

- **Native apps:** The Native apps of their respective platform. They are faster than the hybrid apps.

- **React Native:** Experimental apps using the _React Native_ technology. They are faster than the hybrid apps.

- **Hybrid (cordova) Apps:** These are slower hybrid apps, they are basically a wrapper for the webpage with some extra features.

- - -

### Native iOS App (Rocket.Chat+)

The app for iOS (iPhone, iPad, iPod touch) can be found on the App Store. Just search for `Rocket.Chat+`

[Rocket.Chat+ on App Store](https://itunes.apple.com/us/app/rocket-chat/id1148741252?mt=8)

### Native Android App (Rocket.Chat Beta)

The app for Android can be found on Google Play. Just search for `Rocket.Chat Beta`

[Rocket.Chat Beta on Google Play](https://play.google.com/store/apps/details?id=chat.rocket.android)

- - -

### React Native Android App

The experimental app for Android can be found on Google Play. Just search for `Rocket.Chat Experimental`

[![Rocket.Chat Experimental on Google Play](https://play.google.com/store/apps/details?id=chat.rocket.reactnative)](https://play.google.com/store/apps/details?id=chat.rocket.reactnative)

### React Native iOS App

Currently you can only access the react native app in Apple's [TestFlight](https://developer.apple.com/testflight/). If you are interested in testing this app please send an email to `testflight@rocket.chat` with your email to be used on TestFilght.

- - -

### Adding servers to Android and iOS mobile clients

When using most of the apps, you will be prompted to add the server to be used on the app. Enter the URL to your Rocket.Chat server (e.g. <https://open.rocket.chat>) to initialize the app.

### Android and iOS Legacy Users running Rocket.Chat server on a Sandstorm Grain

_Note: this guide is for the legacy (cordova) app. It might not be up to date._

1. On your phone in a browser open Sandstorm and open the Rocket.Chat grain.
2. Open the hamburger menu (upper-left) and choose "Get Webkey". (On the desktop view, you would click the key icon in the topbar.)
3. Optionally enter a label (e.g. "phone") and then click "create".
4. You'll be presented with a URL, aka a "webkey". Long-press on this URL, then choose "copy link address".
5. Open the Rocket.Chat app.
6. Paste in the copied URL (the whole thing!) as your Rocket.Chat server address.
7. That's it! No password is needed, since an authorization token is encoded into the URL.
