# Search Messages in a Channel

Rocket.Chat search supports basic search commands which work like Gmail search.

Rocket.Chat also supports the use of "[regular expressions](https://en.wikipedia.org/wiki/Regular_expression)." Regular expressions provide flexibility to search chat entries in any language, even the ones traditionally a challenge like "CJK" languages \(Chinese, Japanese, Korean\).

## Basic Search Commands

You can use these commands before or after entering search terms:

* `from:me` to search for messages only created by the current user.
* `from:user.name` to search for messages created by a specific user. The username entered must be the format without spaces \(i.e., "john.doe" and not "John Doe."\) Search for any mentions of a user by searching for their username.
* `has:star` returns messages that are starred by the current user.
* `is:pinned` or `has:pin` returns messages that pin in the current channel.
* `has:url` or `has:link` returns messages that contain a link.
* `has:location` or `has:map` returns messages that have a location attached.
* `before:dd/mm/yyyy`, `after:dd/mm/yyyy` and `on:dd/mm/yyyy` return message that was created before, after, or on the provided date.

  Dashes `dd-mm-yyyy` or dots `dd.mm.yyyy` can be used instead of slashes. `order:asc`, `order:ascend`, or `order:ascending` sorts messages by ascending timestamp.

* `order:desc`, `order:descend`, or `order:descending` sorts messages by descending timestamp.

  You can also jump to where a message is located by hovering the mouse over the search result and selecting `jump to message.`

## Regex

These references tell more about the powerful world of regex:

* Wikipedia - [https://en.wikipedia.org/wiki/Regular\_expression](https://en.wikipedia.org/wiki/Regular_expression)
* Regex 101 - [https://regex101.com/\#javascript](https://regex101.com/#javascript)
* Regexr - [http://regexr.com/](http://regexr.com/)
* Regex Info - [http://www.regular-expressions.info/javascriptexample.html](http://www.regular-expressions.info/javascriptexample.html)

