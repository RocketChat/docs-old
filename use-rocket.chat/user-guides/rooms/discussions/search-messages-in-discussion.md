# Search Messages in Discussion

Rocket.Chat search supports basic search commands, including the use of [regular expressions](https://en.wikipedia.org/wiki/Regular\_expression). Regular expressions provide flexibility to search chat entries in any language, even those traditionally challenging, like "CJK" languages (Chinese, Japanese, Korean).

## Basic Search Commands

You can use the following commands before or after entering search terms in a discussion:

* `from:me` - To search for messages only created by the current user.
* `from:user.name -` To search for messages created by a specific user. The username entered must be the format without spaces (i.e., "john.doe" and not "John Doe.") Search for any mentions of a user by searching for their username.
* `has:star` - Returns messages that the current user stars.
* `is:pinned` or `has:pin`- Returns messages that pin in the current discussion.
* `has:url` or `has:link` - Returns messages that contain a link.
* `has:location` or `has:map` -Returns messages that have a location attached.
* `before:dd/mm/yyyy`, `after:dd/mm/yyyy` and `on:dd/mm/yyyy` - Return message created before, after, or on the provided date. Dashes `dd-mm-yyyy` or dots `dd.mm.yyyy` can be used instead of slashes.&#x20;
*   `order:desc`, `order:descend`, or `order:descending` - Sorts messages by descending timestamp.

    You can also jump to where a message is located by hovering the mouse over the search result and selecting `jump to message.`
