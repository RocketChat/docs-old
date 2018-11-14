# Analytics & Data Usage

## Crashlytics

Both iOS and Android applications are using Crashlytics to send crash information. Crashlytics collects crash information from mobile apps , then transmits and stores them securely on their servers for developer diagnosis. This transmitted data contains no users, channels, or groups information; it does not contain any message content. The collected content contains only anonymous application and system state information during the crash that can be helfpul for diagnosis.  For full disclosure - up until version 3.1.1  we DID collect the user's id, server URL and contact email. Since 3.2.0 we have stopped this practice.

_This reports can be disabled on both iOS and Android if the user goes to the Settings screen and disable crash reports._

## Fabric and Firebase

We're currently experimenting using Fabric and Firebase to report events of usage in the app for some actions, such as sending messages, reacting, changing the theme of the app, etc. This is also anonymous information and does not contain any private information from the user. This is only being used with the purpose of understanding what features are being used more and how they're being used.

See code related to the iOS app [here](https://github.com/RocketChat/Rocket.Chat.iOS/blob/develop/Rocket.Chat/Managers/AnalyticsManager.swift).

See code related to the Android app [here](https://github.com/RocketChat/Rocket.Chat.Android/blob/develop/app/src/main/java/chat/rocket/android/analytics/AnalyticsManager.kt).

_This reports can be disabled on both iOS and Android if the user goes to the Settings screen and disable crash reports._

## Mixpanel

In iOS, the database being used from the application is Realm and in debug mode they have trackings with Mixpanel. This is not used on end-user's devices and can be disabled in your own builds by using the environment variable called `REALM_DISABLE_ANALYTICS`.

More information [here](https://github.com/realm/realm-cocoa/blob/dbd9284440827f085108d5e12c03fdca1db4fd56/Realm/RLMAnalytics.hpp#L23-L25).
