# WebRTC - Using video and voice calls

## What you need

A modern machine with camera and mic.  Expensive old Windows machines are not so good, and tricky to configure.  Cheap new Chromebooks (less than US$200) work perfectly.  Macs work out of the box.

The latest version of Chrome or Firefox.  Safari and IE may work one day in the future - but FaceTime (owned by Apple) and Skype (owned by Microsoft) are business reasons why that future may not be too soon.

Newer Android mobile phones and tablets (some less than US$50) will also work.

### Test your device for compatibility

Use this [online device compatibility verification tool](https://test.webrtc.org/) to determine if your machine and browser combination is ready for video conference.  Everything should pass except for IPv6 support.

## Step by step

1. Get into a Rocket.Chat private room with the person you want to video conference with.
2. Click on the "User Info" button, on the right side buttons panel.
3. Click on the `video` or `call` (voice-only) button.
4. When the share camera and mic popup appears, allow sharing.
   (at this time, the person you call will see an incoming call dialog and she/he must allow sharing of camera/mic)
5. Your video conference session is now live!

### Bonus modes for HD conferencing

1. Once your video session is working, click on the video of the person you're calling to see two bigger video without losing chat space - this is the up-and-down mode.
2. From the up-and-down mode, click on the video of the person you're calling to see a side-by-side mode with even bigger video.  In this mode, you lose some chat space.
3. From the side-by-side mode, click on the video of the person you're calling to enter HD mode with his/her video in full definition.
4. From the HD mode, click on your own video to enter Full Screen mode and use the best possible resolution.  [ESC will get you back to Rocket.Chat from full screen video]

### Mobile Video Conferencing ?

Glad you asked! The answer is *yes* - as long as you have the bandwidth (WiFi or LTE4G) and devices that support video conferencing.

* if you're on iPad or iPhone, you'll have to use Apple's FaceTime - sorry
* code has been tested with Chrome browser running on Android tablets (and even phones) and they work quite well, especially in full screen mode with device in landscape orientation

### Stability issues

If it works for you only sometimes, and you know your PC/devices are capable, try this:

* in the Rocket.Chat directory, with the server stopped, run `meteor remove rocketchat:webrtc`
* then run `meteor add rocketchat:webrtc-ib`.   This replaces the standard driver with a
slower but more stable one.
