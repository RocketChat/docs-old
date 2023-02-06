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

**Project Duration:** 175 hours. (Medium)\


### Moderation Console Mute User Action and Emoji Votes

**Mentors:**  Devanshu Sharma

**Description:**

Moderation console for Rocket.Chat enables moderators to examine reported messages and then take action against the individuals who post them.   A simple set of action is already included.   In this project you will add the action to allow muting of the user for a specific duration.&#x20;

Currently, the only way to submit messages for moderator's review is to report the message.   This project will add a mini-reputation system, through voting with special emojis, to assist the moderator in deciding what to do with the reported user.   A count of special emojis against a message can be used to determine the number of users that find a particular message offensive.

**Desired Skills:**

ReactJS, TypeScript, MeteorJS. A thorough understanding of Moderation Console operations.  Knowledge of how to expose additional core features to Apps.

**Goals/Deliverables:**

Mini-reputation system enabling users to mark messages using special emojis.  Additional action for moderation console allowing user to be muted by moderator for some durations (5min, 1 hour, or any custom minutes)

**Project Duration:** 175 hours (Medium)\


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


### Media Carousel Component

Mentors:  Diego Mello\
\
**Description:**\
****\
****Implement a new Rocket.Chat UI media carousel component that can:

* open any media (image, video, audio, doc, etc)
* swipe horizontally to navigate to previous/next
* support [async delayed video playback](https://docs.expo.dev/versions/v47.0.0/sdk/av/#playback) semantics

Component must follow all current Rocket.Chat ui-kit component design and coding conventions,.

**Desirable Skills:**    Advanced Typescript, advanced React, React Native.  Rocket.Chat ui-kit component development.\
\
**Goal/Deliverable:**  A media carousel component for our ui-kit that fits into the ui-kit playground,  and be flexibly adapted across all supported devices (browser, mobile, tablets, and so on).

**Project Duration:** 175 hours. (Medium)



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

### Big Blue Button x Rocket.Chat

**Mentors:**  TBD\
\
**Description:**\
****Big Blue Button has become one of the more popular open source virtual classroom platform in the world.   The chat that is included is based on meteorjs (just like Rocket.Chat)  but is rudimentary and chat history is lost as soon as the class session is over.   This project leverages our existing _**EmbeddedChat**_ project to integrate an embedded version of Rocket.Chat into Big Blue Button - giving it a rich messaging experience with full history after class.

**Desired Skills:**

React Native,  MeteorJS,  in-depth knowledge of EmbeddedChat project,  familiarity with Big Blue Button and  good understanding of Rocket.Chat core.\
\
**Goal/Deliverable:** \
Big Blue Button with Rocket.Chat embedded in place of existing chat.\
\
**Project Duration:** 350 hours. (Large)



### User Actions Audit Center

**Mentors:** TBD

**Description:** The goal of this project is to make a service (Back end) capable of tracking user actions (role change, permission change, setting change, critical endpoint calls, etc) and then list them to admins. This will serve as a way of auditability of actions, reducing support friction (since this will make changes to system easier to track) and improve quality. Ideally, an Admin section will be shown with the list of actions, which would be filtered by type/user/level. Setting should also be in place to see if actions should be tracked or not and which actions to track

**Desirable Skills:** Advanced Typescript and mid level React

**Goal/Deliverable:**  A working User Actions Audit Service.&#x20;

**Project Duration:** 175 hours. (Medium)



### GitHub Pull request reminders app

**Mentors:** Murtaza Patrawala

**Description:**&#x20;

Have you ever faced challenges keeping track of your pull request reviews as a student? This is a common problem faced by many development teams. That's why we propose developing a pull request reminder app for [Rocket.Chat](http://rocket.chat) as a part of the Google Summer of Code program. For now, we’re isolating the scope of this project to GitHub.

The app's goal will be to provide regular reminders and updates to keep the review process moving and help ensure that pull requests are being reviewed and discussed in a timely manner. This project will be built on top of [this existing GitHub App](https://github.com/RocketChat/Apps.Github22) which already has a bunch of boilerplate code to deal with authentications and GitHub APIs.

One approach to solving the issue of pending pull requests is to create a separate Rocket.Chat channels for each pull request (This is a proven strategy organizations already use on Slack. Check [here](https://axolo.co/blog/p/utlimate-slack-pull-request-reminder-bot) for more info). This way, all relevant stakeholders can be added to the channel, including the author of the pull request, the reviewers, and any other team members who need to be informed about the status of the review.

The Rocket.Chat channels can serve as a dedicated space for discussion and collaboration around each pull request. Users can receive notifications about updates to the pull request, such as new comments or changes to the code. This helps keep everyone informed and ensures the review process stays on track.

Example text message for Rocket.Chat channel:

* "🔔 Attention reviewers! This pull request has been pending for \[number] days now. Let's make sure to give it the attention it deserves and keep the review process moving forward 🚀"

In addition, the users can also opt-in to receive a direct message from the bot at the start of their workday, with a comprehensive list of all the reviews that need his/her attention.

Example DM text messages:

1. "👀 Time to give those pull requests some love! You've got \[number] pending review(s) waiting for you. Don't keep your fellow developers waiting 😊"
2. "🔔 Don't let those pull requests get forgotten! You've got \[number] waiting for your review. Let's get to work 💻"
3. "🚀 It's time to move those pull requests forward! You've got \[number] waiting for your review. Give them the green light 💚"

By using Rocket.Chat channels to manage the review process, teams can improve the visibility of their pull requests and ensure that they are being reviewed and discussed in a timely manner.

PS: For more inspiration on how to solve this issue, please refer to some of these solutions on other platforms.

* [Pull Remind](https://www.producthunt.com/products/pull-remind)
* [Axolo](https://axolo.co/blog/p/utlimate-slack-pull-request-reminder-bot)

**Desirable Skills:**&#x20;

* Advanced Typescript
* Knowledge about Github API's
* Rocket.Chat app-engine Framework
* Familiarity with existing [Github App](https://github.com/RocketChat/Apps.Github22)

**Goal/Deliverable:**  A working Rocket.Chat app which sends pulls request reminders to Rocket.Chat users.

**Project Duration:** 175 hours. (Medium) (Note: Based on the complexity of the proposal, we may increase the project duration)



### Template messages Rocket.Chat app

**Mentors:** Murtaza Patrawala

**Description:**&#x20;

This project aims to develop a [Rocket.Chat](http://rocket.chat) app that allows users to create, store, and send common messages with ease (Similar to [this Slack app](https://slack.com/apps/AJGJWCYPQ-templates?tab=more\_info)). The app will have a simple interface that enables users to create templates with customized names. These templates can be triggered using a slash command (e.g., /template \<template-name>) and inserted into the chat window with just one click. Users can also edit and delete their templates as needed.

The app will be built using [the Apps-Engine framework](https://developer.rocket.chat/apps-engine/rocket.chat-apps-engine) as a Rocket.Chat app. This app will improve productivity and streamline communication in Rocket.Chat, provides a convenient way for users to send common messages and save time in their daily work routine.

Examples of use cases include a customer support agent responding to frequently asked questions, a project manager sending a weekly status update message to the team, or a sales representative following up with potential clients.

**Desirable Skills:**&#x20;

* Rocket.Chat app-engine Framework
* Rocket.Chat UiKit
* Advanced Typescript

**Goal/Deliverable:**  A working Rocket.Chat app to send and manage template messages.

**Project Duration:** 175 hours. (Medium)



### Introduce Captcha to Livechat Widget

**Mentors:** Murtaza Patrawala, Kevin Aleman

**Description:**&#x20;

RocketChat is a popular open-source communication platform, but it is not uncommon for spammers to take advantage of its live chat widget to send unwanted messages. To mitigate this issue, a CAPTCHA solution should be implemented in the live chat widget. This project aims to integrate a CAPTCHA mechanism in RocketChat's live chat widget to prevent spam messages from being sent.

The solution should allow users to prove that they are human by completing a simple CAPTCHA task before sending a message. This will help to reduce the number of spam messages and improve the overall user experience.

Key Deliverables:

* Integration of a CAPTCHA solution in RocketChat's live chat widget
* A comprehensive testing suite to ensure that the CAPTCHA is working as expected
* A user guide to help users understand how to use the new CAPTCHA feature in the live chat widget

Note: The CAPTCHA solution should be accessible to all users, including those with disabilities, and should not negatively impact the user experience.

**Desirable Skills:**&#x20;

* React (Mid-level)
* Familiar with [Rocket.Chat Livechat](https://github.com/RocketChat/Rocket.Chat/tree/develop/packages/livechat)

**Goal/Deliverable:** Captcha integrated within Livechat widget

**Project Duration:** 175 hours. (Easy)



### QuickAnswer Bot

**Mentors:** Murtaza Patrawala

**Description:**

The goal is to develop a bot that can help reduce repetitive questions asked in Rocket.Chat channels by providing relevant answers from its knowledge base (Similar to [this Slack app](https://slack.com/apps/ASAFS8C2D-truffle?tab=more\_info))

Features:

1. Knowledge base: The bot will have a knowledge base of all previously answered questions and their answers.
2. Real-time scanning: The bot will scan the Rocket.Chat channels in real-time for new questions and check if it has a relevant answer in its knowledge base.
3. Private response: If the bot finds a relevant answer, it will send the answer privately to the person who asked the question, without interrupting the public conversation.
4. Analytics (optional): The bot will keep track of the number of repetitive questions answered and provide analytics to the administrator.

Technologies to be used:

* [Rocket.Chat](http://rocket.chat) apps-engine
* Natural Language Processing (NLP)
* Elasticsearch (a suggestion, but I’m open to any other good alternatives)

With Elasticsearch integrated into the tech stack, the bot can leverage the powerful search and analysis capabilities of Elasticsearch to efficiently search through the knowledge base and provide accurate answers to the user's questions. [Here’s](https://rebeccabilbro.github.io/intro-doc-similarity-with-elasticsearch/) a good blog to get started.

**Desirable Skills:**&#x20;

* Advanced knowledge of Natural Language Processing (NLP)
* [Rocket.Chat](http://rocket.chat) apps-engine
* Experience using chosen indexing framework like ElasticSearch

**Goal/Deliverable:**  A Rocket.Chat app that suggests relevant answers to new messages in a channel, based on past messages. Plus an additional service is used for indexing messages.

**Project Duration:** 350 hours. (Large)





### Summarizing Live Chat Conversations using OpenAI's ChatGPT

**Mentors:** Murtaza Patrawala

**Description:**&#x20;

The goal of this project is to develop a solution that utilizes OpenAI's ChatGPT to generate a concise summary of live chat conversations within Rocket.Chat. This will provide managers with a quick and efficient way to stay up-to-date with live chat conversations, allowing them to make informed decisions without having to spend time reading through lengthy conversations.

**Desirable Skill**

* Strong programming skills in Typescript.
* Familiarity with natural language processing and machine learning.
* Familiarity with Rocket.Chat and its Apps-engine.
* Knowledge about OpenAI's ChatGPT API is a must.

**Goal/Deliverable:** &#x20;

* A Rocket.Chat app that retrieves live chat conversations from the Rocket.Chat apps-engine.
* Use of the OpenAI ChatGPT API to generate a summary of the conversation.
* Storing the generated summaries in a database for later retrieval and analysis.

**Project Duration:** 175 hours. (Medium)

[^1]: 
