# Search Messages in a Channel

Rocket.Chat search supports basic search commands, including the use of [regular expressions](https://en.wikipedia.org/wiki/Regular\_expression). Regular expressions provide flexibility to search chat entries in any language, even those traditionally challenging, like "CJK" languages (Chinese, Japanese, Korean).

## Basic Search Commands

You can use the following commands before or after entering search terms in a channel:

* `from:me` - To search for messages only created by the current user.
* `from:user.name` - To search for messages created by a specific user. The username entered must be without spaces (i.e., "john.doe" and not "John Doe.").  Search for any mentions of a user by searching for their username.
* `has:star` - Returns messages that the current user has starred.
* `is:pinned` or `has:pin` - Returns messages that have been pinned.
* `has:url` or `has:link` - Returns messages that contain a link.
* `has:location` or `has:map` - Returns messages that have a location attached.
* `before:dd/mm/yyyy`, `after:dd/mm/yyyy` and `on:dd/mm/yyyy` - Return message created before, after, or on the provided date. Dashes `dd-mm-yyyy` or dots `dd.mm.yyyy` can be used instead of slashes.&#x20;
* `order:asc`, `order:ascend`, or `order:ascending` -Sorts messages by ascending timestamp.
* `order:desc`, `order:descend`, or `order:descending` - Sorts messages by descending timestamp.

Select the **Options** icon for a message in the search result and click **Jump to message** to take you directly to the message.

{% hint style="warning" %}
Refer to these resources to learn more about regex(regular expressions).

* [Wikipedia ](https://en.wikipedia.org/wiki/Regular\_expression)
* [Regex 101](https://regex101.com/#javascript)&#x20;
* [Regexr ](http://regexr.com/)
* [Regex Info](http://www.regular-expressions.info/javascriptexample.html)&#x20;
{% endhint %}

