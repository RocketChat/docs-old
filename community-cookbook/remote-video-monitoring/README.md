---
redirect_from: /user-guides/remote-video-monitoring/
permalink: /community-cookbook/remote-video-monitoring/
---

# Remote Video Monitoring

You can use Rocket.Chat to remotely monitor one or more (10s, 100s, or even 1000s) geographically dispersed locations.

Applications:

- home monitoring while on vacations (from cell phone or Internet Cafe)
- baby monitoring
- building surveillance
- assembly line quality assurance
- industrial control monitoring
- global/regional crisis/emergency center or medical monitoring
- ... many more

## What you need

The monitoring PC does not need to have camera or mic.  However, it must be running a recent copy of Chrome or Firefox that supports webrtc.

At each location:  a PC, Mac, Android tablet, embedded computer, or Chromebook running Rocket.Chat with a webrtc supported camera.

## Scalability

The design is massively scalable.   With the current edition of Rocket.Chat, you can already monitor hundreds of locations.   The server is not loaded by the sessions.

This application really shows off the telecom lineage of webrtc -- Rocket.Chat acts as the 'switch' or 'signaling fabric' and gets out of the way once a monitoring session starts.

## Getting started

You should be relatively familiar with Rocket.Chat's video chat capabilities before attempting to try this feature.

### Install in-band driver

This feature is implemented within the webrtc in-band signaling driver.

The driver is not installed by default.  To install the driver, and the feature, you need to first remove the production webrtc driver:

`meteor remove rocketchat:webrtc`

Then install the in-band driver:

`meteor add rocketchat:webrtc-ib`

### Create location 'users'

Create a new user for each location being monitored, for example - living room, dining room, baby's crib, assembly line A, Queen Mary Hospital IC station 1, and so on.

Login as the monitoring user, and create a directed room to each of the locations.

### Setting up locations

At each location, on a machine with supported camera, logon as the location user and go to the directed room.

Click on the top right arrow to open the flex window.   You will see THREE buttons:

1. VIDEO CHAT
2. REMOTE
3. SETUP

Click on the `SETUP` button. Your browser will ask for permission to share camera and mic, allow it. This starts live video in the smaller window.

You are all set!

_Note: Make sure the machine will not go into power-save or auto shutoff._

### Remote Monitoring

From your monitoring PC, logon to Rocket.Chat as the monitoring user.  Enter any of the 'locations' room and click the `REMOTE` button to view the location.   Like video chat, you can switch between up-and-down, side-by-side, full definition, and full screen HD mode once the monitoring starts.

### Early Access

You are working with _early access_ code.  The code is working, but it has bugs.  You find them, we fix them!   If you encounter any bugs, please [create an issue](https://github.com/RocketChat/Rocket.Chat/issues/new).

### Integration and customization

Most frequently asked questions are:

_I have this great app for Rocket.Chat remote monitoring, can I create a monitoring front-end that does not look like a 'Chat'?_

_Can I monitor multiple locations at the same time, and select any one for zoomed-in detailed inspection?_

The answer to both questions is _YES_.   Contact any member of the Rocket.Chat team, or specialists in our community if you need professional help.
