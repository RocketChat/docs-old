# Bug Reporting

## Is it a bug?

**GitHub Issues are for bugs only.**

Examples of things that aren't considered bugs:

* Can't figure out how to do something
* Having issues accessing your server
* Can't get the server installed
* I want a new widget in Rocket.Chat

If your issue falls into one of these categories, please see [Getting Support](../../getting-support.md)

New feature requests should be posted in the [forums](https://forums.rocket.chat)

## It is a bug!

### Before reporting a new issue

1. [Read the Documentation](https://docs.rocket.chat/) carefully all the way through.
2. Make sure you are running the latest version of Rocket.Chat. It's very likely simply updating will resolve your issue.
3. Try to narrow it down to reproducible steps. If we can reproduce it, we will be able to fix the issue a lot quicker.
4. Look at all of your logs for errors. See below for how to gather logs.
5. [Search the Forums](https://forums.rocket.chat) using a few different search terms.
6. [Search the Issues](https://github.com/RocketChat/Rocket.Chat/issues) for your bug. If you find it carefully check that it is identical and give it a thumbs up, or add some additional information to the ticket if it differs. This will help give us a fuller picture.
7. If you got this far then report an issue

### Reporting a new issue

Giving clear background information will help save a lot of time

Please include the following information in order to promote effective fixing.

* Operating System / Version / Architecture \(64 bit?\)
* Browser type and version, including any add-ons. \(e.g. AdBlocker, NoScript, etc.\)
* Rocket.Chat version
* Expected behavior
* Actual behavior
* Can the bug consistently be reproduced? If so, how?
* Relevant errors and other log output
* Screen shots as necessary

Here are some links to help you register your bug in the right place:

[Rocket.Chat Server](https://github.com/RocketChat/Rocket.Chat/issues/new/choose)

[Rocket.Chat Mobile Apps](https://github.com/RocketChat/Rocket.Chat.ReactNative/issues/new)

[Rocket.Chat Electron desktop app](https://github.com/RocketChat/Rocket.Chat.Electron)

#### Determining Rocket.Chat Version

Can be done in two ways:

1. `Administration` -&gt; `Info`
2. Your Rocket.Chat URL followed by `/api/info`

#### Gathering Logs

**Browser**

To collect logs from your browser press Ctrl/Cmd + Shift + j. Errors appear in red.

**Server**

To collect logs from your browser as an Admin log into your Rocket.Chat. From there click the arrow by your avatar and go to Administration. Once there you will see: `View Logs`.

Often its useful to open this in another browser and reproduce the problem again and you will see an exception pop up in the logs.

Also consider your web server logs and general system logs.

