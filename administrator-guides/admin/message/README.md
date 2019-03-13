# Message

### Embed Link Previews

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Whether embedded link previews are enabled or not when a user posts a link to a website.


### Embed Cache Expiration Days

_FILL HERE_


### Disable Embed for Users

_FILL HERE_

> Comma-separated list of usernames to disable the embedded link previews.


### Embed Ignored Hosts

_FILL HERE_

> Comma-separated list of hosts or CIDR addresses, eg. localhost, 127.0.0.1, 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16


### Safe Ports

_FILL HERE_

> Comma-separated list of ports allowed for previewing.


### Embed Request User Agent

_FILL HERE_


### Clear Cache Now

_FILL HERE_


### Allow Message bad words filtering

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Message Deleting

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Block Message Deleting After (n) Minutes

_FILL HERE_

> Block Message Deleting After (n) Minutes


### Allow user direct messages to yourself

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Message Editing

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Block Message Editing After (n) Minutes

_FILL HERE_

> Enter 0 to disable blocking.


### Allow Message Pinning

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Allow messages to be pinned to any of the channels.


### Allow Message Snippeting

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Message Starring

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Allow Unrecognized Slash Commands

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Always Search Using RegExp

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> We recommend to set `True` if your language is not supported on <a target="_blank" href="https://docs.mongodb.org/manual/reference/text-search-languages/#text-search-languages">MongoDB text search</a>.


### Add Bad Words to the Blacklist

_FILL HERE_


### Date Format

_FILL HERE_

> See also: <a href="http://momentjs.com/docs/#/displaying/format/" target="momemt">Moment.js</a>


### Message Erasure Type

- **Keep Messages and User Name**: _FILL HERE_
- **Delete All Messages**: _FILL HERE_
- **Remove Link Between User and Messages**: _FILL HERE_

> Determine what to do with messages of users who remove their account.


### Grouping Period (in seconds)

_FILL HERE_

> Messages will be grouped with previous message if both are from the same user and the elapsed time was less than the informed time in seconds.


### Hide "User Added" messages

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Hide "User Muted / Unmuted" messages

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Hide "User Removed" messages

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Hide "User Join" messages

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Hide "User Leave" messages

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Keep Per Message Editing History

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Maximum Channel Size for ALL Message

_FILL HERE_


### Maximum Allowed Characters Per Message

_FILL HERE_


### Maximum Number of Chained Quotes

_FILL HERE_


### Show Read Receipts

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Detailed Read Receipts

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Shows each user's read receipts


### Set a User Name to Alias in Message

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Only if not already set alias. The old messages alias not changed if user has changed the name.


### Show Deleted Status

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Show Edited Status

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Show Formatting Tips

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Time and Date Format

_FILL HERE_

> See also: <a href="http://momentjs.com/docs/#/displaying/format/" target="momemt">Moment.js</a>


### Time Format

_FILL HERE_

> See also: <a href="http://momentjs.com/docs/#/displaying/format/" target="momemt">Moment.js</a>


### Video Recorder Enabled

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Requires 'video/webm' files to be an accepted media type within 'File Upload' settings.


## AutoLinker

### Enabled

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### AutoLinker Email

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### AutoLinker Phone

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Automatically linked for Phone numbers. e.g. `(123)456-7890`


### AutoLinker Strip Prefix

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Short display. e.g. https://rocket.chat => rocket.chat


### AutoLinker URL Regular Expression

_FILL HERE_


### AutoLinker Scheme:// URLs

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### AutoLinker TLD URLs

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### AutoLinker 'www' URLs

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


## Auto-Translate

### Enable Auto-Translate

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Enabling auto-translation will allow people with the <code class="inline">auto-translate</code> permission to have all messages automatically translated into their selected language. Fees may apply, see <a target="_blank" href="https://cloud.google.com/translate/pricing">Google's Documentation</a>


### Google API Key

_FILL HERE_


## Google Maps

### Enable Mapview

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Enabling mapview will display a location share button on the left of the chat input field.


### Google Static Maps API Key

_FILL HERE_

> This can be obtained from the Google Developers Console for free.


## Hex Color Preview

### Enabled

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


## Issue tracker links

### Enabled

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Warning: do not enable this and the 'Hex Color Preview' at the same time.


### Template for issue links

_FILL HERE_

> Template for issue links; %s will be replaced by the issue number.


## Katex

### Allow Dollar Syntax

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Allow using $$katex block$$ and $inline katex$ syntaxes


### Katex Enabled

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Allow using <a target="_blank" href="http://khan.github.io/KaTeX/">katex</a> for math typesetting in messages


### Allow Parenthesis Syntax

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Allow using \[katex block\] and \(inline katex\) syntaxes


## Markdown

### Allow Markdown headers in messages

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Enable Marked Breaks

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Enable Marked GFM

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Enable Marked Pedantic

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Enable Marked Smart Lists

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Enable Marked Smartypants

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Enable Marked Tables

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Markdown Parser

- **Disabled**: _FILL HERE_
- **Original**: _FILL HERE_
- **Marked**: _FILL HERE_


### Markdown Support Schemes for Link

_FILL HERE_

> Comma-separated list of allowed schemes


## Message Attachments

### Group Attachment Buttons

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> This groups the icons under an expandable menu. Takes up less screen space.


## Audio Message

### Audio Recorder Enabled

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Audio Message Bit Rate

_FILL HERE_

