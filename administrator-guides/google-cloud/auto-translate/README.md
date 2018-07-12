# Google Auto Translate

You can use Google's translation engine to translate every message received on a channel.

For that you will need a Google Translation API key, you can find how to get one and pricing for it's usage from the [Official Google API documentation](https://cloud.google.com/translate/pricing).

> Please note, that the Translation API is a paid feature from Google Cloud. If you decide to aquire this service, you will be paying Google and not Rocket.Chat

## Getting the key

Assuming that you already have a Google account logged, Follow these steps

1. Go to <http://cloud.google.com/console/>
2. Create a Project and select it.
3. On the left side bar, Go to “APIs & auth” Tab => APIs Tab
4. Enable “Translate API”
5. Go to “Credentials” Tab
6. Click on “CREATE NEW KEY”
7. Create “Browser Key”.

You can find more info on the [Official Google API documentation](https://cloud.google.com/translate).

## Configuration

Now that you have your API key, it's time to set up the auto translate feature in Rocket.Chat.

To do that you can simply go to `Auto-Translate` under `Administration -> Message`, enable the setting and add your API key on the `Google API Key` field. After that save your settings and you're ready to go!

Only users with the `auto-translate` permission will be able to use this feature. See [Permissions](../../permissions/)

## Enabling AutoTranslate on a Channel

With the Auto Translate activated you can select a channel to use it, when using it, all messages written in any of the supported languages, will be translated to your selected language.

> Note: only you will see these translations, for other users that dont have the Auto Translate, they will see the messages in the language they were written.

To activate Auto Translate on a channel you must open the channel contextual menu (the three dots on the top right of the screen) and select Auto Translate, there you will be able to select your desired language.

After that you will note a new symbol on the header of the channel, that indicates the Auto Translate feature is active in this channel.

You can also see the original message by opening the message action menu (the three dots on the message hover) and selecting `View Original Message`.

