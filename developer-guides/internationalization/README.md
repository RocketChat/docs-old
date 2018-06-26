# Internationalization

When developing in Rocket.Chat, you have the ablilty to add strings to our tranlations files in wich later will be tranlsated to other languages by our community translators.

## Tools Used

For selecting strings for the correct language we use the [TAP:i18n](https://github.com/TAPevents/tap-i18n) meteor package.

For managing contributions from the translators community we use [lingohub](https://lingohub.com/). If you are interested in contributing to Rocket.Chat translations please see [Translating](../../contributing/translating/)

## Adding Strings to the Translation Files

To have a string translated you will firstly need a `key` that would be the identifier of the string you want translated, for example the string `This room is read only`should have the key as `room_is_read_only`.Plese have in mind when naming a key that spaces should be replaced with underscores (`_`) and it should be named in english, as is the language selected for Rocket.Chat's code. Finally you will have the `key/value` pair will look like this: `"room_is_read_only": "This room is read only"`

After that you will need to add this key to its respective `i18n.json` file under the [i18n](https://github.com/RocketChat/Rocket.Chat/tree/develop/packages/rocketchat-i18n/i18n) folder.

When your pull request is merged, our contributors at `LingoHub` will be notified of the new string and start translating it.

## Using Translated Strings on the code

Now that you have your string on the translation files, is time to use them on the code!

When writing on a `.js` file you can use the global method `TAPi18n.__('YOUR_KEY_HERE')`, that will translate the selected string to the user's current selected language. If that string is not present in the respective `.i18n.json` file it will default it to english, if no key is found it will display the key inserted in the method as a string. Alternatively you can use the shorten version of this method `t('YOUR_KEY_HERE')`.

Now if you are in a `.html` file, you can simply surround the string with `{_ }` for example `{{_ "YOUR_KEY_HERE"}}`. It will work the same as the method mentioned above, only with the convenience of adding it directly to the `.html` file.

Sometimes you can find some methods that requires an object with a `i18nLabel` or `i18nDescription`. In these cases you only need to insert the key of the string, the method will do the rest.
