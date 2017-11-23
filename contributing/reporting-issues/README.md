# Bug Reporting

## Is it a bug?

GitHub Issues are for bugs and feature requests only.

Examples of things that aren't considered bugs or feature requests:

* Can't figure out how to do something
* Having issues accessing your server
* Can't get the server installed

If your issue falls into one of these categories, please see [Getting Support](/2. Getting%20Support)

## It is a bug!

### Before reporting a new issue

1. [Search the Issues](https://github.com/RocketChat/Rocket.Chat/issues) for your bug.  If you find it, give it a thumbsup and add some additional information to the ticket if differing.  This will help give us a fuller picture.
2. Make sure you are running the latest version of Rocket.Chat. Its very likely simply updating will resolve your issue.
3. Try to narrow it down to reproducible steps.  If we can reproduce it, we will be able to fix the issue a lot quicker.
4. Look at logs for errors. See below for how to gather logs.
5. If you got this far then: [Open an issue](https://github.com/RocketChat/Rocket.Chat/issues/new)

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
2. Your Rocket.Chat URL followed by `/api/info`

#### Gathering Logs

##### Browser

To collect logs from your browser press <kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>j</kbd>. Errors appear in red.

##### Server

To collect logs from your browser as an Admin log into your Rocket.Chat.  From there click the arrow by your avatar and goto Administration.  Once there you will see: `View Logs`.

Often its useful to open this in another browser and reproduce the problem again and you will see an exception pop up in the logs.
