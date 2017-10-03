# Bug Reporting

## Is it a bug?

GitHub Issues are for bugs and feature requests only.

Examples of things that aren't considered bugs or feature requests:

* Can't figure out how to do something
* Having issues accessing your server
* Can't get the server installed

If your issue falls into one of these categories, please see [Getting Support](/2. Getting%20Support)

## It is a bug!

### Search the archive

1. Make sure you are running the latest version of Rocket.Chat.
It's quite possible that your bug has been resolved in a newer version.

### Report a new issue

Go [here](https://github.com/RocketChat/Rocket.Chat/issues/new) to open a new issue.

Please include the following information in order to promote effective fixing.

* Operating System / Version / Architecture (64 bit?)
* Browser type and version, including any add-ons. (e.g. AdBlocker, NoScript, etc.)
* Rocket.Chat version
* Expected behavior
* Actual behavior
* Can the bug consistently be reproduced? If so, how?
* Relevant errors and other log output
* Screen shots as necessary

#### Determining Rocket.Chat Version

Can be done in two ways:

1. `Administration` -> `Info`
1. Your Rocket.Chat URL followed by `/api/info`

#### Gathering Logs

##### Browser

To collect logs from your browser press `Command+Option+J` (Mac) or `Control+Shift+J` (Windows / Linux).  Errors appear in red.

##### Server

To collect logs from your browser as an Admin log into your Rocket.Chat.  From there click the arrow by your avatar and goto Administration.  Once there you will see: `View Logs`.

Often its useful to open this in another browser and reproduce the problem again and you will see an exception pop up in the logs.
