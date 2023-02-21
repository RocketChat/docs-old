# Google Summer of Code 2023

## [![Google Summer of Code 2020](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://summerofcode.withgoogle.com)

## How to apply

Rocket.Chat has applied to become a Google Summer of Code 2023 mentoring organization.  We are looking forward to participating in this 19 years-old program to usher in a new generation of open source contributors and enthusiasts.

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

**Difficulty:**  Easy/Medium\


### Moderation Console Mute User Action and Emoji Votes

**Mentors:**  Devanshu Sharma

**Description:**\
****Moderation console for Rocket.Chat enables moderators to examine reported messages and then take action against the individuals who post them.   A simple set of action is already included.   In this project you will add the action to allow muting of the user for a specific duration.&#x20;

Currently, the only way to submit messages for moderator's review is to report the message.   This project will add a mini-reputation system, through voting with special emojis, to assist the moderator in deciding what to do with the reported user.   A count of special emojis against a message can be used to determine the number of users that find a particular message offensive.

**Desired Skills:**\
****ReactJS, TypeScript, MeteorJS. A thorough understanding of Moderation Console operations.  Knowledge of how to expose additional core features to Apps.

**Goals/Deliverables:**\
****Mini-reputation system enabling users to mark messages using special emojis.  Additional action for moderation console allowing user to be muted by moderator for some durations (5min, 1 hour, or any custom minutes)

**Project Duration:** 175 hours (Medium)\
\
**Difficulty:**  Easy/Medium\


### Embedded Chat 2023

**Mentors:**  Sidharth Mohanty\
\
**Description:**\
****\
****A Rocket.Chat channel can be embedded into some existing web application via the  [Embedded Chat component](https://github.com/RocketChat/EmbeddedChat).      Currently, the available integration surface and features of Embedded Chat is rather limited.  This project aims to significantly expand the applicability of Embedded Chat for a wider range of web applications - including the most popular frameworks such as Vue, Angular, Svelte, React Native;  and hosting platforms such as WordPress and Ghost; web application developed in Java, PHP and Python.   Embeddability via [HTML](https://github.com/arnav-t/riot-embedded) .   Customizability needs to be improved with theme kit,  as well as a way to enable users to supply custom CSS.   Features we still need includes the support of all authentication methods that the hosting server has activated,  file/media attachments,  sending audio messages, autocomplete mention search, and in-chat RC-App slash-command access.  Realtime messages transport needs to be improved to avoid 429.  Last but not least, we need to greatly improve the first-time developer experience by supplying better server startup,  testing, and e2e testing devops and via gitpod-ization. &#x20;

**Desired Skills:**  React and NextJS.   Absolute in-depth knowledge of Embedded Chat project.  Thorough understand of modern web application development platform and technologies.\
****\
**Goal/Deliverable:**  Embedded Chat working with most current web application building technologies, and updated with missing essential features.  Ideally also improved realtime transport as well as first-time developer experience. \
\
**Project Duration:** 350 hours. (Large)\
\
**Difficulty:** Medium\


### Media Carousel Component

Mentors:  Diego Mello\
\
**Description:**\
****Implement a new Rocket.Chat UI media carousel component that can:

* open any media (image, video, audio, doc, etc)
* swipe horizontally to navigate to previous/next
* support [async delayed video playback](https://docs.expo.dev/versions/v47.0.0/sdk/av/#playback) semantics

Component must follow all current Rocket.Chat ui-kit component design and coding conventions,.

**Desirable Skills:**    Advanced Typescript, advanced React, React Native.  Rocket.Chat ui-kit component development.\
\
**Goal/Deliverable:**  A media carousel component for our ui-kit that fits into the ui-kit playground,  and be flexibly adapted across all supported devices (browser, mobile, tablets, and so on).

**Project Duration:** 175 hours. (Medium)\
\
**Difficulty:** Medium/Advanced



### GitHub Pull request reminders app

**Mentors:** Murtaza Patrawala, Samad Khan

**Description:** \
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

**Desirable Skills:**  Advanced Typescript;  Knowledge about Github API's;  Rocket.Chat app-engine Framework;  Familiarity with existing [Github App](https://github.com/RocketChat/Apps.Github22)

**Goal/Deliverable:**  A working Rocket.Chat app which sends pulls request reminders to Rocket.Chat users.

**Project Duration:** 175 hours. (Medium) \
\
**Difficulty:** Easy/Medium



### Introduce Captcha to Livechat Widget

**Mentors:** Murtaza Patrawala, Kevin Aleman

**Description:** \
RocketChat is a popular open-source communication platform, but it is not uncommon for spammers to take advantage of its live chat widget to send unwanted messages. To mitigate this issue, a CAPTCHA solution should be implemented in the live chat widget. This project aims to integrate a CAPTCHA mechanism in RocketChat's live chat widget to prevent spam messages from being sent.

The solution should allow users to prove that they are human by completing a simple CAPTCHA task before sending a message. This will help to reduce the number of spam messages and improve the overall user experience.

Key Deliverables:

* Integration of a CAPTCHA solution in RocketChat's live chat widget
* A comprehensive testing suite to ensure that the CAPTCHA is working as expected
* A user guide to help users understand how to use the new CAPTCHA feature in the live chat widget

Note: The CAPTCHA solution should be accessible to all users, including those with disabilities, and should not negatively impact the user experience.

**Desirable Skills:**  React (Mid-level);  Familiar with [Rocket.Chat Livechat](https://github.com/RocketChat/Rocket.Chat/tree/develop/packages/livechat)

**Goal/Deliverable:** Captcha integrated within Livechat widget

**Project Duration:** 175 hours. (Medium)\
\
**Difficulty:** Easy/Medium



### Live Preview Message Composer  <a href="#docs-internal-guid-e14dd554-7fff-7875-973a-38a13f969474" id="docs-internal-guid-e14dd554-7fff-7875-973a-38a13f969474"></a>

**Mentors**: Hugo Costa

**Description:**  \
****Make the message composer live preview feature instead of just adding markdown tokens that styles/parse the message in the Message List.

E.g: If the user press Bold button in the message composer actions that has the message "Test Message" or wrap the message in asterisk nowadays it shows:

Current output: \*Test Message\*

![](https://lh6.googleusercontent.com/CNoHypIy18Z1yYBUnc-yCa7-hiO3GSXucx0MBQi2JNFL6GL2zYBHM\_A9QNkuyB3UcWYljMw\_XGbZqeTros0Byf\_W-lyc-w71l01FXMM2VNrDxjM3HPC9C-TSR5WFPRwBHox9YLfsw\_jjStE4y5IXGgU)

Desired output: Test Message

![](https://lh4.googleusercontent.com/NkAv5dheflqArH3ZHb-zW7iL9EPwNSk3WSDjm9DG8wvycsBHWdx1LgZX2wgnpWCcmmgGNTNKgyeOHsF3L9Aw9Rln00ve1kkg7Klor\_nGL8p89262wPUfdMYdBd3O6mggeQN2CbHXKKrHkDLZVChERpU)

**Desirable Skills**: Typescript (mid) and React (mid)\
\
**Goal/Deliverable:**    Live preview in message composer

**Project Duration:**   175  hours (Medium)\
\
**Difficulty:** Easy/Medium\


### Agile BOT

**Mentors:**     Gabriel Casals & Tiago Evangelista\
\
**Description:** \
Agile adoption is increasing year to year on the different industries. There is an opportunity to add agile package bots to help squad with reminders, links and facilitate attendance to meeting based on simple calendar inputs and emoji reactions. Candidate will be working with Agile experts and Engineers to build some solutions for this space and help improve team/squads productivity. Successful contributor will propose and implement a Chatbot that solves a problem in agile. Candidate have a free choice of technology to implement the chatbot - RASA, Botpress, Dialogflow, and so on.\
\
**Desirable Skills:**     Familiarity with TypeScript development. Demonstrated interest and/or passion in Agile and squad productivity tools.\
\
**Goal/Deliverable:**   A working chatbot that can improve agile team productivity\
\
**Project Duration:**    175 hours. (Medium)\
\
**Difficulty:** Easy/Medium\


### AI Moderation APP <a href="#docs-internal-guid-6a938870-7fff-9486-6ec9-cd0950cf4057" id="docs-internal-guid-6a938870-7fff-9486-6ec9-cd0950cf4057"></a>

**Mentors**: Rafael Tapia

**Description:** \
\
Offensive/sensitive content detection by AI.  Ideally both images/text will be processed.   Proposals that extend the existing work on the [AI Moderation project](https://github.com/RocketChat/Apps.Moderation), as well as brand new approaches will be welcomed.   Proposal should also address scaling and cost of the solution.

**Desirable Skills:** TypeScript(mid), TensorFlow(mid)

**Goal/Deliverable:** An app that uses TensorFlow AI to verify images/texts and flag them when has harmful, toxic, or offensive content and block.

**Project Duration:** 175 hours  (Medium)\
\
**Difficulty:** Medium/Advanced



### **UiKit Playground 2.0**

**Mentors:** Guilherme Gazzo, Tasso Evangelista Pinto, Diego Sampaio

**Description:** \
Rocket.chat UiKit is the protocol/tool that allows rocket.chat apps to add new (both web and mobile) elements to the current UI.

People often do not imagine what is possible to do with the protocol. That's why the playground idea.

Nowadays we already have a version of the [playground](https://rocketchat.github.io/fuselage/uikit-playground/develop/), so it is already possible to visualize the main functionalities, but it is still not the full experience desired.

**Desirable Skills:** TypeScript, React

**Goal/Deliverable:** The objective is to add other functionalities that improve and encourage the development of apps. Features such as templates, workflows simulation, connecting to a workspace and also sending/sharing the prototypes through rocket.chat are the main goals of the project

**Project Duration:** 350 hours (Large)

**Difficulty:** Medium/Advanced\


### Integrate Notion via RC App <a href="#docs-internal-guid-1a00b1ee-7fff-e115-48e0-272ddd46db45" id="docs-internal-guid-1a00b1ee-7fff-e115-48e0-272ddd46db45"></a>

**Mentors:**  Bárbara Zanella

**Description:**   Create pages and receive notifications inside Rocket.Chat

**Desirable Skills:**    JavaScript/TypeScript, ReactJS

**Goal/Deliverable:**   Work as if you were creating documents in notion without leaving Rocket.Chat

**Project Duration:**  175 (Medium)\
\
**Difficulty:** Easy/Medium\


### Summarizing Live Chat Conversations using OpenAI's ChatGPT

**Mentors:** Lester Coyoy,  Murtaza Patrawala

**Description:** \
The goal of this project is to develop a solution that utilizes OpenAI's ChatGPT to generate a concise summary of live chat conversations within Rocket.Chat. This will provide managers with a quick and efficient way to stay up-to-date with live chat conversations, allowing them to make informed decisions without having to spend time reading through lengthy conversations.

**Desirable Skill :**  Strong programming skills in Typescript.   Familiarity with natural language processing and machine learning.  Familiarity with Rocket.Chat and its Apps-engine.  Knowledge about OpenAI's ChatGPT API is a must.

**Goal/Deliverable:**   A Rocket.Chat app that retrieves live chat conversations from the Rocket.Chat apps-engine.   Use of the OpenAI ChatGPT API to generate a summary of the conversation.  Storing the generated summaries in a database for later retrieval and analysis.

**Project Duration:** 175 hours. (Medium)\
\
**Difficulty:** Easy/Medium



### Flutter SDK for Rocket.Chat&#x20;

**Mentors:**  TBD

**Description:**\
****In recent years, [Flutter ](https://flutter.dev/)has became the de-facto standard for high performance open source multi-platforms apps development.   Thanks to its[ huge global developers community](https://flutter.dev/community) and the ever-growing ecosystem of [open source flutter components](https://pub.dev/packages).  &#x20;

This project aims to create an easy to integrate flutter component to embed Rocket.Chat into any existing and new flutter applications  (similar to our existing [EmbeddedChat](https://github.com/RocketChat/EmbeddedChat) project).   In addition, a layer of Dart friendly API/stub needs to be created for application that needs in-depth modification of chat behavior or needing to use the chat engine as a messaging fabric.   \
\
We invite and welcome original proposals at varying level.&#x20;

**Desired Skills:**

Flutter,  Flutter components construction, Dart, JavaScript. A thorough understanding of how Rocket.Chat core works.  Knowledge of Flutter multi-platform development (Android, iOS, Linux, Windows and MacOS). &#x20;

**Goals/Deliverables:**\
****An SDK that enable easy embedding of RC instances into any flutter app plus Dart APIs to access RC collaboration engine internals.

**Project Duration:** 350 hours (Large)\
\
**Difficulty:** Advanced\


### Open source Metaverse integration (mozilla hubs / third room)

**Mentors:**  TBD

**Description:**\
****One very popular interpretation of the "Metaverse" is group interactions within a real-time rendered 3D Virtual Reality world.   [Mozilla Hubs](https://hubs.mozilla.com/) has been the leading open source project in this space for the **last decade**.   Due to the limitation (and cost) of today's technology, however, hub has always had limited scalability.   Rooms can contain 20 to 30 attendees.  Another similar technology proof of concept has emerged recently in [Third Room](https://github.com/matrix-org/thirdroom).  While Rocket.Chat as a  collaboration platform has re-architectured to handle millions of users - and through federation, the world;  we have also implemented Team Channels to deal with very large communities wanting autonomous control over their membership.  This project is to create a rational integration between Mozilla Hubs (and/or Third Room) and Rocket.Chat team channel - enabling a pragmatic version of "the metaverse" to be built organically.\
\
We welcome original proposals at different levels of integration.   It can be a direct extension of core, an external bridge, a link preview-extension, or even a Rocket.Chat App.\
&#x20;

**Desired Skills:**

ReactJS, TypeScript, MeteorJS. A thorough understanding of how Rocket.Chat core works.  Knowledge of Rocket.Chat Apps development.  Passion for improving human communications and collaboration.&#x20;

**Goals/Deliverables:**\
****Working integration of Mozilla Hubs rooms within Rocket.Chat Team Channels in a rational and usable context.

**Project Duration:** 350 hours (Large)\
\
**Difficulty:** Advanced\


### Jitsi Meet x Rocket.Chat

**Mentors:**  TBD\
\
**Description:**\
****Jitsi meet has become one of the most popular and frequently used open source video conference platform in the world.   The chat that is included as part of the Jitsi system is rudimentary and chat history is lost as soon as the conference is over.   This project leverages our existing _**EmbeddedChat**_ project to integrate an embedded version of Rocket.Chat into Jitsi Meet - giving it a rich messaging experience with full history after conference.\
\
Ideally we would like an integration at the [Jitsi Meet React SDK](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-react-sdk/) level.  Perhaps extending the _\<JitsiMeeting/>_ tag with a _useRCForChat_ attribute.   The integration should maintain prosody as the single source of truth for channel membership.  A variety of server authentication scenarios must be catered for (including SSO and Oauth).

**Desired Skills:**  React Native,   in-depth knowledge of EmbeddedChat project,  familiarity with Jitsi Meet, understanding of prodigy.\
****\
**Goal/Deliverable:**  Jitsi Meet with Rocket.Chat embedded in place of existing chat.\
\
**Project Duration:** 350 hours. (Large)\
\
**Difficulty:** Medium/Advanced\


### QuickAnswer Bot

**Mentors:** TBD

**Description:**\
****The goal is to develop a bot that can help reduce repetitive questions asked in Rocket.Chat channels by providing relevant answers from its knowledge base (Similar to [this Slack app](https://slack.com/apps/ASAFS8C2D-truffle?tab=more\_info))

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

**Desirable Skills:**   Advanced knowledge of Natural Language Processing (NLP);  [Rocket.Chat](http://rocket.chat) apps-engine;  Experience using chosen indexing framework like ElasticSearch

**Goal/Deliverable:**  A Rocket.Chat app that suggests relevant answers to new messages in a channel, based on past messages. Plus an additional service is used for indexing messages.

**Project Duration:** 350 hours. (Large)\
\
**Difficulty:** Medium/Advanced



### Full-stack Components Framework for Community Builders

**Mentors:** TBD

**Description:**\
****Full-stack component is the holy grail of software componentization.  Imagine building a fully functional customized web portal in minutes by dragging and dropping full-stack components.   Each component not only contains interactive UI, but also associated mid-tier and server-side/severless behaviours as well as parameterizations.  Unfortunately the state of our current software art is not quite there yet.   The next best thing is actually [Next.js](https://github.com/vercel/next.js/) which solves the same problem but at a page level and not at the component-within-the-page level.\
\
RC4Community is a specialized componentized framework for community builders to rapidly create fully functional community portal.  It was designed to work with a full-stack component framework since day one - but had to use Next.js instead. &#x20;

This project involves the introduction of the missing architectural, build workflow, and packaging technology to enable full-stack components within the RC4Community context.

**Desirable Skills:**  ReactJS, JavaScript, Next.js, server-side technology, serverless technology, microservices.  A thorough understanding of how current component framework works.  In-depth understanding of modern devops technology.   In-depth understanding of JavaScript packaging technology and workflow. A passion for pushing the limits of modern componentized software development tools.

**Goal/Deliverable:**  A set of full stack components for community builders.  A framework that allows new components to be hosted on their own  independent repositories and be packaged into modules that can be installed over the network as needed (similar to npm model today).

**Project Duration:** 350 hours. (Large)\
\
**Difficulty:** Advanced\
\


### Token Economy for Team Channels

**Mentors:** TBD

**Description:** \
Rocket.Chat has Team Channels to handle sub-communities wanting autonomous control over their membership within a scaled server (possibly servicing tens of thousands of users). &#x20;

This project aims to provide such sub-communities /  teams with a mean to:

* mint their own erc-20 token, unique to the team
* distribute the tokens to the members of the team
* enable tokens to be securely exchanged between members within the team channels

The implementation can also work optionally with blockchains and tokens from other providers - but this is not mandatory.   Integration with a wallet is implied but novel alternative solution will also be accepted.   It can be implemented as a Rocket.Chat App or extension to core, or both. &#x20;

**Desirable Skills:**    Thorough understanding of Rocket.Chat core.  Working experience with modern Web3 / blockchain technologies.  Rocket.Chat App development experience.  Advanced Typescript

**Goal/Deliverable:**  Ability to mint, distribute, and exchange unique erc-20 tokend within a "team".

**Project Duration:** 350 hours. (Large)\
\
**Difficulty:** Medium/Advanced



### Template messages Rocket.Chat app

**Mentors:** TBD

**Description:** \
This project aims to develop a [Rocket.Chat](http://rocket.chat) app that allows users to create, store, and send common messages with ease (Similar to [this Slack app](https://slack.com/apps/AJGJWCYPQ-templates?tab=more\_info)). The app will have a simple interface that enables users to create templates with customized names. These templates can be triggered using a slash command (e.g., /template \<template-name>) and inserted into the chat window with just one click. Users can also edit and delete their templates as needed.

The app will be built using [the Apps-Engine framework](https://developer.rocket.chat/apps-engine/rocket.chat-apps-engine) as a Rocket.Chat app. This app will improve productivity and streamline communication in Rocket.Chat, provides a convenient way for users to send common messages and save time in their daily work routine.

Examples of use cases include a customer support agent responding to frequently asked questions, a project manager sending a weekly status update message to the team, or a sales representative following up with potential clients.

**Desirable Skills:**  Rocket.Chat app-engine Framework. Rocket.Chat UiKit. Advanced Typescript

**Goal/Deliverable:**  A working Rocket.Chat app to send and manage template messages.

**Project Duration:** 175 hours. (Medium)\
\
**Difficulty:** Easy/Medium



### User Actions Audit Center

**Mentors:** TBD

**Description:** The goal of this project is to make a service (Back end) capable of tracking user actions (role change, permission change, setting change, critical endpoint calls, etc) and then list them to admins. This will serve as a way of auditability of actions, reducing support friction (since this will make changes to system easier to track) and improve quality. Ideally, an Admin section will be shown with the list of actions, which would be filtered by type/user/level. Setting should also be in place to see if actions should be tracked or not and which actions to track

**Desirable Skills:** Advanced Typescript and mid level React

**Goal/Deliverable:**  A working User Actions Audit Service.&#x20;

**Project Duration:** 175 hours. (Medium)\
\
**Difficulty:** Easy/Medium



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
**Project Duration:** 350 hours. (Large)\
\
**Difficulty:** Easy/Medium\


### Big Blue Button x Rocket.Chat

**Mentors:**  TBD\
\
**Description:**\
****Big Blue Button has become one of the more popular open source virtual classroom platform in the world.   The chat that is included is based on meteorjs (just like Rocket.Chat)  but is rudimentary and chat history is lost as soon as the class session is over.   This project leverages our existing _**EmbeddedChat**_ project to integrate an embedded version of Rocket.Chat into Big Blue Button - giving it a rich messaging experience with full history after class.

**Desired Skills:**\
****React Native,  MeteorJS,  in-depth knowledge of EmbeddedChat project,  familiarity with Big Blue Button and  good understanding of Rocket.Chat core.\
\
**Goal/Deliverable:** \
Big Blue Button with Rocket.Chat embedded in place of existing chat.\
\
**Project Duration:** 350 hours. (Large)\
\
**Difficulty:** Advanced\


### Integrate Miro via RC App <a href="#docs-internal-guid-aa4629ae-7fff-b43a-c2f6-c3bf23748a55" id="docs-internal-guid-aa4629ae-7fff-b43a-c2f6-c3bf23748a55"></a>

**Mentors:** TBD

**Description:** Create and share boards with coworkers inside Rocket.Chat

**Desirable Skills:**  JavaScript/TypeScript, ReactJS

**Goal/Deliverable:**  The goal of this project is to create collaborative boards that work within Rocket.Chat

**Project Duration:** 175 (Medium) \
\
**Difficulty:** Easy/Medium



### Integrate Toggl via RC App <a href="#docs-internal-guid-0cfe617d-7fff-0cd2-09ef-3c8dc80bf2e3" id="docs-internal-guid-0cfe617d-7fff-0cd2-09ef-3c8dc80bf2e3"></a>

**Mentors:** TBD

**Description:** Track your time on daily basics tasks

**Desirable Skills:**  JavaScript/TypeScript, ReactJS

**Goal/Deliverable:** Start counting time inside Rocket-Chat, without having to enter the Toggl website or download the application on your computer

**Project Duration:**  175 (Medium) \
\
**Difficulty:** Easy/Medium



### Integrate Asana via RC App <a href="#docs-internal-guid-44c30cad-7fff-38fe-1143-8fe33a4d0b81" id="docs-internal-guid-44c30cad-7fff-38fe-1143-8fe33a4d0b81"></a>

**Mentors:** TBD

**Description:** Create and assign tasks without leaving Rocket.Chat

**Desirable Skills:** JavaScript/TypeScript, ReactJS

**Goal/Deliverable:** The objective of this project is to be able to manage tasks without having to enter the Asana UI

**Project Duration**: 175 (Medium) \
\
**Difficulty:** Easy/Medium





[^1]: 
