# Reporting Issues

You don't have to write code to contribute! We are always looking for help with creating or updating documentation, testing our apps (web, desktop and mobile) and reporting bugs.

## Be sure its a bug
We are striving to make our issues a list of actionable items for the team.  So we want to keep it a list of issues and feature requests.

Examples of things that aren't considered bugs or feature requests:
* Can't figure out how to do something
* Having issues accessing your server
* Can't get the server installed

If your issue isn't a bug please see [Getting Support](/2. Getting%20Support)

## Reporting a bug

Did you find a bug? Reporting is easy!

1. [Search the Issues](https://github.com/RocketChat/Rocket.Chat/issues) for your bug.  If you find it, give it a thumbsup and add some additional information to the ticket if differing.  This will help give us a fuller picture.
2. Make sure you are running the latest version of Rocket.Chat. Its very likely simply updating will resolve your issue.
3. Try to narrow it down to reproducible steps.  If we can reproduce it, we will be able to fix the issue a lot quicker.
4. Look at logs for errors. See below for how to gather logs.
5. If you got this far then: [Open an issue](https://github.com/RocketChat/Rocket.Chat/issues/new)

### Things to Include in Bug Report

Here are some things to include, when applicable, which may help us troubleshoot a problem:

* Operating System / Version / Architecture (64 bit?)
* Browser type & Version (if web app), any browser add-ons which may be involved (e.g. AdBlocker, NoScript, etc.)
* Rocket.Chat Version
* Expected behavior vs. Actual behavior (In other words, the "bug")
* Can it consistently be reproduced? If yes, how?  Its important to try and narrow this down as much as possible, so we can encounter your error and fix it.
* Relevant snippets from your error logs
* Screen shots if helpful to communicate the problem

### Determining Rocket.Chat Version
Determining the version of Rocket.Chat running can be done one of two ways.

1. Administration->Info
2. Open your browser and goto: http://<your server here>/api/info

### Gathering Logs

Collecting and including logs often helps us get to the root of the issue quicker.

#### Browser logs
To collect logs from your browser press <kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>i</kbd> and switch to the console tab.  Errors should appear in red

#### Server logs
To collect logs from your browser as an Admin log into your Rocket.Chat.  From there click the arrow by your avatar and goto Administration.  Once there you will see: `View Logs`

Often its useful to open this in another browser and reproduce the problem again and you will see an exception pop up in the logs.

## Priority Features or Bug fixes?

Please consider [donating](/1.%20Contributing/Donating/).
