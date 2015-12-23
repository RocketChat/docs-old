# Users
*Note: This works also works on Firefox for Android and the desktop browser.*

Point the browser on the Firefox OS device to your Rocket.Chat URL (e.g. https://demo.rocket.chat), then add ````/fxos```` (e.g. https://demo.rocket.chat/fxos) and press OK/enter. You will be prompted to install the app.

***

# Developers
 1. Make sure you have ````adb```` (android debug bridge) installed on your PC
 2. Enable developer mode on the mobile device
 3. Start your Firefox browser on the PC and connect your device
 4. Enter the Firefox WebIDE (Shift + F8 or go to Extras -> Web Developer -> WebIDE)
 5. "Project" -> "Open hosted app"
 6. Enter the path to the Rocket.Chat manifest.webapp **on your server**, e.g. https://demo.rocket.chat/manifest.webapp - then press OK
 7. You should now see the icon and description inside WebIDE. Press the play button on top to install it on your device

***

# Admins
You want to use a custom URL to your Rocket.Chat, or maybe a custom icon and description?
Just edit the **manifest.webapp** file in the **/public** folder of the meteor project.
For more info, have a look at the [Firefox OS documentation](https://developer.mozilla.org/en-US/Apps/Build/Manifest).
