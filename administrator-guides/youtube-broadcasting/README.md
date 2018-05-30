# Youtube Broadcasting

> Please note that this feature will only be available from versions 0.66 and forward.

This feature adds an integration between Rocket.Chat and Youtube Live, when enabled and set up, your channel owners will be able to broadcast their camera feed live to the Livestream feature which allows all users on the channel to watch a common stream.

## Configuration

The Broadcasting feature can only be used with the Livestream Tab feature.

You can find the settings for this feature on `Livestream & Broadcasting` in the admin panel.

If you set the `Broadcasting Enable` setting to false, users wont be able to create live streams using their webcams, but will still be able to link a live stream from youtube.

_Currently the admin needs a valid Google app with access to the Youtube API to use youtube live integration (More details on the [Google Developer page](https://developers.google.com/youtube/v3/)), this will allow the administrator to have a valid API Key, Client ID & Secret which are used on the Broadcasting feature._

## Livestream tab

After a correct set up, the Livestream tab will now allow you to Broadcast your camera when editing the source url.
When opening the popout, it might take a moment while we prepare the broadcast and livestream for your session, this will be indicated by the blinking icon and "Preparing" status displayed in the control bar. After that initial phase, the broadcast will be Ready and available to start with your click.
