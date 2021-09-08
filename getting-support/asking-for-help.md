# Asking for help

If you are facing any issue with Rocket.Chat, please ensure you follow the following steps before asking for support. It will save you a lot of time and hassle.

First, you must ALWAYS test on the latest version of Rocket.Chat - you can also try [https://open.rocket.chat](https://open.rocket.chat/), which always runs development versions. A large number of issues are fixed with an update.

You will need some basic information to resolve your issue.

If you haven't got this information at hand, please get it first.

At a minimum, you will need this:

* Server Setup Information:

  * Server hardware: VPS/hypervisor/bare metal
  * Version of Rocket.Chat Server:
  * Operating System: Ubuntu/Redhat etc
  * Deployment Method: snap/docker/tar/etc
  * Number of Running Instances:
  * DB Replicaset Oplog:
  * NodeJS Version:
  * MongoDB Version:

* Client information:

  * Client type: Electron app/React-Native app/Browser and version

* A list of the steps requires to replicate the issue.

  * If we can't replicate it we can't debug it.

  \*\*\*\*

## **Contents**

* [How to ask for help](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#how-to-ask-for-help)
  * [To pay or not to pay](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#to-pay-or-not-to-pay)
  * [Don't open a bug yet](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#dont-open-a-bug-yet)
  * [Is it a feature request?](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#is-it-a-feature-request)
  * [RTFM](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#rtfm)
  * [Search](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#search)
  * [Still stuck?](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#still-stuck)
  * [Open an Issue](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#open-an-issue)
* [FAQ](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#faq)
  * [Slow connections. iOS connection error](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#slow-connections-ios-connection-error)
  * [Websockets](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#websockets)
  * [Notifications](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#notifications)
  * [General debugging](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#general-debugging)
  * [Upgrading Rocket.Chat](https://gist.github.com/reetp/a66149d5f060f260643a353ca7067a98#upgrading-rocketchat)

## **How to ask for help**

If you think your issue is urgent, then you have two choices:

### **Paid help**

Pay for support - [Pricing](https://rocket.chat/pricing)

Email: [support@rocket.chat](mailto:support@rocket.chat)

### **Seek free help**

Patiently wait for a volunteer to consider helping you. 

If you opt for community's help instead of paid support, please notice that:

* Most people in the chat are volunteers who will try and help for free
* Volunteers do this in their spare time and are not getting paid for this. Please respect them.
* Just because it is urgent for **you** does mean that it is urgent for **them**
* Please answer their questions patiently and help them try and understand your problem
* Being rude to them will not help you at all
* Please note that posting the same question in several channels will not help you
* Please do **not** DM anyone unless you know them, or they DM you first
* Please do **not** randomly use _@ people_ or _@all_  hoping to get attention
* Abuse of these things will **not** get any help but can get you muted, blocked, or banned.
* Don't open a bug yet. When you ask in the channels or forums then devs or other community helpers will tell you if you really need to open an issue. Frequently if there really is a problem you won't be the first one to experience it, so always check github carefully for duplicates. Use lots of different search terms and make sure you check closed Issues as well \(see below\).
* Do not ask the same question in multiple channels.  Use the channel \(from mentioned\) that you think is most relevant to your issues. [Support](https://open.rocket.chat/channel/support), [React-Native](https://open.rocket.chat/channel/react-native), [Ubuntu Snap](https://open.roocket.chat/channel/ubuntu-snap),[Raspberry Pi](https://open.rocket.chat/channel/raspberrypi), [Omnichannel](https://open.rocket.chat/channel/omnichannel), [Desktop](https://open.rocket.chat/channel/desktop), [Federation](https://open.rocket.chat/channel/federation)

## **Is it a feature request?**

If Rocket.Chat works but doesn't do something the way you want it to then this is a feature request **NOT** a bug. You can open a request in [Feature Requests](https://github.com/RocketChat/feature-requests). 

## **Go through the documentation** 

Please go through the relevant documentation at least twice. A lot of the answers can be found there. It is easy to miss the obvious because you _think_ you know the answer rather than reading to actually understand. 😃

## **Search bug reports**

Have you looked through the bug reports? At least 2 different searches? Opened AND Closed bugs?

A lot of answers can be found there. Please do check the various repos - Rocket.Chat itself, the mobile apps, electron etc.

[Rocket.Chat server](https://github.com/RocketChat/Rocket.Chat)

[Rocket.Chat server feature requests](https://github.com/RocketChat/feature-requests)

[React Native Mobile Client](https://github.com/RocketChat/Rocket.Chat.ReactNative)

[Electron desktop application](https://github.com/RocketChat/Rocket.Chat.Electron)

[Rocket.Chat documentation](https://github.com/RocketChat/docs)

When searching change the filter box to both open and closed issues like this:

`is:issue is open`

to

`is:issue my search word`

e.g.

`is: issue theme`

Try some variations - you won't hit the sweet spot the first time usually. The more often you do this the better you will get at learning what to search for and how. 

## Ask on the forums

**Still stuck?**

**Please don't open an Issue yet.**

The next step is to ask your **well-documented** question in the [forums](https://forums.rocket.chat/) or [Rocket.Chat](https://open.rocket.chat/channel/support)

## How to report a bug

It is impossible to diagnose something when you just say 'it's broken'. The helpers are not mind readers. They cannot see your screen or your set-up. They have not watched you set this up, and the mistakes you made along the way. They are effectively blind. So you have got to describe things clearly and concisely.

Your problem may appear complex but it is often the basics that catch you out. It is extremely common for people to miss steps in their set-up. It is hard to tell at first if a problem is simple or complex so please be patient if you get asked 'the stupid questions'. We are just trying to get a baseline and making sure you have done the basics and trying to understand how you got to this position. Remember, if you phoned the garage about your car and said 'it runs funny sometimes' what would they ask you? Make, model, age... etc.

This is no different.😊

Don't hide things away because you are embarrassed. They are most likely going to find out, so you might as well be honest. We have **ALL** made mistakes.

Tell us about the problem you were originally trying to solve, not the problem that you are experiencing right now. Frequently the one you are experiencing now is the result of not understanding or being able to fix the original issue.

[How to Report Bugs Effectively](https://www.chiark.greenend.org.uk/~sgtatham/bugs.html) is a great read on the subject. 😉

## Bug template

Use this as a template to ask your question. Get all the right information. It will help if you then have to submit a real Issue.

[Complete a bug template](https://github.com/RocketChat/Rocket.Chat/issues/new?template=bug_report.md)

Server Set-up Information:

* Version of Rocket.Chat Server:
* Operating System:
* Deployment Method:
* Number of Running Instances:
* DB Replicaset Oplog:
* NodeJS Version:
* MongoDB Version:

Some background will help, and will avoid XY issues. Is it a fresh install? Is it an upgraded install? Has it always been broken? When it did the issue start? Did you make any changes that could have caused it?

Make sure you post some BRIEF log snippets or use [https://pastebin.com/](https://pastebin.com/)

Don't block up the channel with ridiculously long messages.

If your problem relates to a connection to say a database, or LDAP, that might be on another server then check the logs for those as well.

Here is a great example of a good bug report:

[Good bug reporting example](https://github.com/RocketChat/Rocket.Chat/issues/13069)

Last, be patient. Answer the questions you are asked. They may appear odd, but they are probably for a good reason. Debugging is a logical process and you need to help establish the _facts_ first.

Remember, **you** are the one with the problem. They can just go back to work or their wife and kids and ignore you. 

## **Open an Issue**

Got this far with no solution? If you haven't already been told to do so then open an Issue with all the right information in the right repo.

Please use the templates provided. Add all the relevant information. And please stick to facts, not opinions, assumptions, or guesses.

