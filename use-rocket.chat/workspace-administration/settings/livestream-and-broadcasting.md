---
description: Integration between Rocket.Chat and YouTube Live
---

# Livestream & Broadcasting

{% hint style="danger" %}
_The Livestream & Broadcasting_ _integration has been deprecated, may not work as expected, and will not receive updates._&#x20;
{% endhint %}

The integration between Rocket.Chat and YouTube Live allows channel owners to broadcast their live camera feed to Livestream inside a channel.

To access the broadcasting settings,&#x20;

* Navigate to **Administration** > **Workspace** > **Settings** > **Livestream & Broadcasting**.

{% hint style="info" %}
This feature is currently in beta! Kindly report any bugs [here](https://github.com/RocketChat/Rocket.Chat/issues).
{% endhint %}

## Configuration

The integration between Rocket and YouTube Live allows channel owners to broadcast their live camera feed to Livestream inside a channel. You can only use the Broadcasting feature with the Livestream feature.

Users can not create live broadcasts using their webcams if you switch the **Broadcasting Enable** to **false** in your broadcast settings, but they can still link to a live stream from YouTube.

To use YouTube Live integration, the workspace administrator needs a [Google Account](https://www.google.com/accounts/NewAccount) to access the [Google API Console](https://console.cloud.google.com/). With this, the administrator has access to a valid Client ID, API Key, and Secret, which is essential for broadcasting.

{% hint style="info" %}
To learn more about Youtube live integration, please read [YouTube Data API Overview](https://developers.google.com/youtube/v3/getting-started).
{% endhint %}

## Livestream

After a correct set-up, the Livestream tab allows you to Broadcast your camera when editing the source URL. While we prepare the broadcast and live stream for your session, opening the popout can take a little while. A blinking icon and "**Preparing**" status displays in the control bar. After that initial phase, the broadcast will be ready and available to start with your click.
