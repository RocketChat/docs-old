# Google Auto Translate

You can use Google's translation engine to translate every message received on a channel.

For that you will need a Google Translation API key, you can find how to get one and pricing for its usage from the [Official Google API documentation](https://cloud.google.com/translate/pricing).

## Getting the key

Follow these steps:

1. Go to [http://cloud.google.com/console/](http://cloud.google.com/console/)
2. Create a Project and select it.
3. On the navigation menu, go to "APIs & Services" =&gt; Dashboard Tab
4. Click on ENABLE APIS AND SERVICES and search for Cloud Translation API.
5. Go to “Credentials” Tab
6. Click on "Create credentials"
7. Choose "API key"

You can find more info on the [Official Google API documentation](https://cloud.google.com/translate).

## Configuration

Now that you have your API key, it's time to set up the auto translate feature in Rocket.Chat.

To do that you can simply go to `Auto-Translate` under `Administration -> Message`, enable the setting and add your API key on the `Google API Key` field. After that save your settings and you're ready to go!

Only users with the `auto-translate` permission will be able to use this feature. See [Permissions](../permissions.md)

## Enabling AutoTranslate on a Channel

When you enable Auto Translate on a channel all messages written in a Google Translate supported language will be translated to your selected language.

> Note: only you will see the translated messages. Users who have not enabled Auto Translate will see the original, untranslated messages.

To activate Auto Translate on a channel you must open the channel contextual menu \(the three dots on the top right of the screen\) and select Auto Translate, there you will be able to select your desired language.

After that you will note a new symbol on the header of the channel, that indicates the Auto Translate feature is active in this channel.

You can also see the original message by opening the message action menu \(the three dots on the message hover\) and selecting `View Original Message`.

