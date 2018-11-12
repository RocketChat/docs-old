# Analytics & Data Usage

## Crashlytics

Both iOS and Android applications are using Crashlytics to send crash information and usage data (anonymously). There's no users, channels, groups or message information being transmitted on this events. They're being used explicitly to inform us about crash information that happens on the device.

This reports can be disabled on both iOS and Android if the user goes to the Settings screen and disable crash reports.

## Fabric and Firebase

We're currently experimenting using Fabric and Firebase to report events of usage in the app for some actions, such as sending messages, reacting, changing the theme of the app, etc. This is also anonymous information and does not contain any private information from the user. This is only being used with the purpose of understanding what features are being used more and how they're being used.

This reports can be disabled on both iOS and Android if the user goes to the Settings screen and disable crash reports.

## Mixpanel

In iOS, the database being used from the application is Realm and in debug mode they have trackings with Mixpanel. This is not used on end-user's devices and can be disabled in your own builds by using the environment variable called `REALM_DISABLE_ANALYTICS`.

More information [here](https://github.com/realm/realm-cocoa/blob/dbd9284440827f085108d5e12c03fdca1db4fd56/Realm/RLMAnalytics.hpp#L23-L25).