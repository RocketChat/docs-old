# Google Summer of Code 2023

## [![Google Summer of Code 2020](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://summerofcode.withgoogle.com)

## How to apply

Rocket.Chat intends to apply as a Google Summer of Code 2023 mentoring organization.  We are excited to participate in this 19 years-old program to usher in a new generation of open source contributors and enthusiasts.

Almost anyone in the world [over 18 years of age ](https://opensource.googleblog.com/2021/11/expanding-google-summer-of-code-in-2022.html)who loves coding and wants to explore the incredible world of open source can join us as a GSoC 2023 contributor.

For details and rules of Google Summer of Code 2023, please see the [GSoC 2023 Official Website](https://summerofcode.withgoogle.com/).     For timeline, see [Official Google Summer of Code 2023 Timeline](https://developers.google.com/open-source/gsoc/timeline) for more details.

#### **Contacting Rocket.Chat**

For general information, please visit our 24 x 7 community channel for Google Summer of Code 2023 : [https://open.rocket.chat/channel/gsoc2023](https://open.rocket.chat/channel/gsoc2023)

Join our [Google Summer of Code 2023 Team ](https://open.rocket.chat/channel/gsoc2023)today and interact with over 300 like-minded contributors and meet the mentors in the [11 team channels](https://open.rocket.chat/channel/gsoc2023/team-channels).

If you have ideas and proposals that are not on our idea list, or if a mentor is not available, you can also email to:

gsoc+2023@rocket.chat

Interested contributors are also encouraged to interact directly with our team and community on the team channels:\
\
[https://open.rocket.chat/channel/gsoc2023/team-channels](https://open.rocket.chat/channel/gsoc2023/team-channels)[\
\
](#user-content-fn-1)[^1]As well as on GitHub:\
\
[https://github.com/RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)

Those who prefers forums can post messages on our GSoC forum channel (although as the leading open source team chat project we prefer you use Rocket.Chat channels above to reach us instantly) :\


[https://forums.rocket.chat/c/gsoc/gsoc2023/76](https://forums.rocket.chat/c/gsoc/gsoc2023/76)

## Project Ideas

This list is being updated regularly, some project ideas are still subject to further refinement, and some projects without assigned mentors may be removed.

### Guided RC Code Walkthrough and Tutorial&#x20;

**Mentor(s):**   Kevin Aleman

**Description:** \
Most Rocket.Chat developers uses VSCode when studying our massive production code base, and when writing new code.   VSCode is the best environment for conducting interactive tutorial and code walkthroughs.  The CodeTour extension available in VSCode can be used to create such walkthrough and tutorials.  This project involves the development of a set of guided tutorials using CodeTour that will help new developers to understand how to perform multiple actions. Paths to be documented will go from this areas:

* How a message is sent
* How to create an endpoint
* How to add a new service
* How to create a DB model
* How to use DB models
* How services interact between them
* How to build a lib
* How to navigate monorepo (where is everything, how's imported, etc)

We welcome any additional ideas you may have.

**Desired Skills:** JNodeJS, MongoDB

**Goals/Deliverables:** A set of guided tours from the topics described above

**Project Duration:** 175 hours. (Medium)

### Moderation Console Mute User Action and Emoji Votes

**Mentors:**  Devanshu Sharma

**Description:**

Moderation console for Rocket.Chat enables moderators to examine reported messages and then take action against the individuals who post them.   A simple set of action is already included.   In this project you will add the action to allow muting of the user for a specific duration.&#x20;

Currently, the only way to submit messages for moderator's review is to report the message.   This project will add a mini-reputation system, through voting with special emojis, to assist the moderator in deciding what to do with the reported user.   A count of special emojis against a message can be used to determine the number of users that find a particular message offensive.

**Desired Skills:**

ReactJS, TypeScript, MeteorJS. A thorough understanding of Moderation Console operations.  Knowledge of how to expose additional core features to Apps.

**Goals/Deliverables:**

Mini-reputation system enabling users to mark messages using special emojis.  Additional action for moderation console allowing user to be muted by moderator for some durations (5min, 1 hour, or any custom minutes)

**Project Duration:** 175 hours (Medium)

### Jitsi Meet x Rocket.Chat

**Mentors:**  Sidharth Mohanty\
**Description:**\
****Jitsi meet has become one of the most popular and frequently used open source video conference platform in the world.   The chat that is included as part of the Jitsi system is rudimentary and chat history is lost as soon as the conference is over.   This project leverages our existing _**EmbeddedChat**_ project to integrate an embedded version of Rocket.Chat into Jitsi Meet - giving it a rich messaging experience with full history after conference.

**Desired Skills:**

**React Native,   in-depth knowledge of EmbeddedChat project,  familiarity with Jitsi Meet, understanding of prodigy.**\
****\
**Goal/Deliverable:** \
Jitsi Meet with Rocket.Chat embedded in place of existing chat.\
\
**Project Duration:** 350 hours. (Large)\


### Google Summer of Code Community Hub

**Mentors:** TBD\
**Description:**   \
****Every year, Rocket.Chat's GSoC new community of 100s gather around a desperate set of servers:

* in open.rocket.chat channels
* discussions in forums.rocket.chat topics
* listed on gsoc.rocket.chat leaderboard
* communicating over Github repositories
* gathered for meetings on Jitsi
* alumni summit
* demo day

This project leverages two existing projects - the _RC4Community_ platform and _RC4Conferences_ components to build a one-stop hub to engage our community, incorporating all the servers into a unified hub with an easy to use Ux via single logon.\
****\
******Desirable Skills:** Advanced Typescript, advanced React.  Deep knowledge of RC4Community and RC4Conferences projects.\
\
**Goal/Deliverable:**  A working Google Summer of Code Community  Hub that we will use to engage all community members starting in 2023.\
\
**Project Duration:** 350 hours. (Large)

### User Actions Audit Center

**Mentors:** TBD

**Description:** The goal of this project is to make a service (Back end) capable of tracking user actions (role change, permission change, setting change, critical endpoint calls, etc) and then list them to admins. This will serve as a way of auditability of actions, reducing support friction (since this will make changes to system easier to track) and improve quality. Ideally, an Admin section will be shown with the list of actions, which would be filtered by type/user/level. Setting should also be in place to see if actions should be tracked or not and which actions to track

**Desirable Skills:** Advanced Typescript and mid level React

**Goal/Deliverable:**  A working User Actions Audit Service.&#x20;

**Project Duration:** 175 hours. (Medium)



[^1]: 
