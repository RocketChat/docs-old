# Google Summer of Code 2022

## [![Google Summer of Code 2020](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://summerofcode.withgoogle.com)

## How to apply

Rocket.Chat will apply as a participating open source organization for the Google Summer of Code 2022 program.

For contributors,  application for Google Summer of Code 2022 will open on April 4th 2022. &#x20;

Accepted projects and contributors will be announced on May 20th 2022.

Please see [Official Google Summer of Code 2022  Timeline ](https://developers.google.com/open-source/gsoc/timeline)for more details.

#### **Contacting Rocket.Chat**

For general information, please visit our 24 x 7  community channel for Google Summer of Code 2022 :  [ https://open.rocket.chat/channel/gsoc2022](https://open.rocket.chat/channel/gsoc2022)

Join our [Google Summer of Code 2022 Team](https://open.rocket.chat/channel/google-summer-of-code) today and interact with over 100 like-minded contributors and meet the mentors in the team channels.&#x20;

If you have ideas and proposals that are not on our idea list, or if a mentor is not available, you can also email to:

gsoc+2022@rocket.chat

Interested contributors are also encouraged to interact directly with our team and community on GitHub:\
\
[https://github.com/RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)

Those who prefers forums can post messages on our GSoC forum channel (although as the leading open source team chat project we prefer you use Rocket.Chat channels above to reach us instantly) :\
\
[https://forums.rocket.chat/t/google-summer-of-code-gsoc/118](https://forums.rocket.chat/t/google-summer-of-code-gsoc/118)\


#### **Shout out to our early contributors**

We are very thankful for the enthusiastic participation of our early contributors.   The learning curve for Rocket.Chat's huge production code base is known to be very steep and they are getting a head-start even before the announcement of the GSoC 2022 program.  Check out our [GSoC 2022 Leaderboard](https://gsoc.rocket.chat),  to see their amazing  contributions:  31 Merged PRs, 69 Open PRs, and 83 issues. as of Feb 20, 2022.\


## Project Ideas

### Tasks and workflow automation App with n8n

**Mentor(s):** Chris Skelly

**Description:** Tasks automation systems that compose workflow out of a   chain of multiple on-line services is becoming very common and popular.   Services such as [Zapier](https://zapier.com) and [n8n](https://n8n.io) are used by millions daily.   n8n is one of the most popular open source alternatives available. \
\
This project involves the creation of a Rocket.Chat app that connects to n8n, enabling Rocket.Chat to participate richly in the n8n ecosystem. \
\
There is already an [n8n node ](https://n8n.io/integrations/n8n-nodes-base.rocketchat)available.  We want to extend this, with the help of a Rocket.Chat app,  to support the rich feature set offered by Rocket.Chat.

**Desirable Skills:** Familiarity with Typescript  and Rocket.Chat App development.

**Goal/Deliverable:**  Rocket.Chat node in n8n and associated Rocket.Chat App

**Project Duration:** 175 hours.

### Rocket.Chat In-App Chat ReactJS SDK

**Mentor(s):**  Rohan Lekhwani

**Description:**  Create a ready-to-go  easy to embed mini-chat React component.    This component should be configurable to use any public channel  on a Rocket.Chat server.   Authentication should be flexibly configurable to existing Rocket.Chat server token, or via an independent IDM or auth service. \
**Desired Skills:** ReactJS component creation experience, understanding of Rocket.Chat server internals

**Goals/Deliverables:**  Standlone mini-chat React component that can be easily installed into any ReactJS based web app

**Project Duration:** 175 hours.

### Chatbot SDK:   Botpress

**Mentor(s):**   Frank Dase,  Duda Nogueira

**Description:**  Botpress is a popular open source framework for creation and execution of chatbots.   This project creates an SDK (based on the current JS SDK)  that will ease the Rocket.Chat  deployment of  Botpress chatbots and omnichannel bots.     \
**Desired Skills:** Javascript and Typescript development.   Keen interest in Bots and Chatbots.

**Goals/Deliverables:**  SDK for deploying Botpress bots on Rocket.Chat.  Possibly a Rocket.Chat App connector.  A couple of example chatbots (running in a channel, and running in omnichannel) plus documentation.

**Project Duration:** 175 hours.

### Rocket.Chat Golang SDK

**Mentor(s):** Cauê Felchar, Felipe Menelau

**Description:** Golang module to enable any Go packge to talk to a Rocket.Chat server with ease, making it possible to create from custom clients to bots.

**Goals/Deliverables:**&#x20;

* Create new models and update existing as needed
* Add receivers for top level endpoints for rest api according to [https://developer.rocket.chat/reference/api/rest-api](https://developer.rocket.chat/reference/api/rest-api/endpoints)
* Improve realtime module as needed and complete any missing receivers according to [https://developer.rocket.chat/reference/api/realtime-api](https://developer.rocket.chat/reference/api/realtime-api)
* Follow a test driven approach, add tests to each method to verify its robustness and evade regressions across releases

**Project Duration:** 350 hours.

### **Rocket.Chat for Virtual Conferences - Eventyay integration**

**Mentors:** Sing Li&#x20;

**Description:**  Create a totally open source end-to-end solution for planning, management and running of online virtual events.    Investigate integration with FOSSASIA's Eventyay platform for even planning and management.   Day of event conference handling should be done by integrating RC4Community's virtual conference NextJS component with open-event-next - or create an even tighter integration with RC4Community. &#x20;

**Desired Skills:**  ReactJS and NextJS development experience.   Fluent with Python development.   Good understanding of video conference technology (such as Jitsi) and realtime chat platforms (such as Rocket.Chat).  \
\
**Goals/Deliverables:**   Open source virtual conference system integrating Rocket.Chat and Eventyay.  &#x20;

**Project Duration: 350** hours.

### Standalone Desktop Messaging cross-platforms Applet

**Mentor(s):** Jean Brito

**Description:** Create a simpler desktop application similar to the old Google Talk (see [2005 GoogleTalk UI ](https://en.wikipedia.org/wiki/Google\_Talk#/media/File:Google\_Talk\_Labs\_Edition\_\(screenshot\).png)here), is a simple channels list on a little window and each chat will open in another separated window, making it possible to talk with people without opening a big window. Making the usage of [Rocket.chat](http://rocket.chat) more seamless.  This project will make extensive use of Rocket.Chat's In-App Chat APIs (REST APIs).

**Desired Skills:** Familiarity with ElectronJS and TypeScript.

**Goal/Deliverable:** Standalone app that is deployable on all platforms supported by Electron - Windows, Mac, Linux, and more.   The App will display a listing window for the channels and open each chat on another window, making the chat more popup-like.

**Project Duration:** 350 hours.

### Omnichannel users identity verification&#x20;

**Mentor(s):** Kevin Aleman

**Description:**  This project investigates and implements a new and "native" identity verification mechanism for Omnichannel end-users, such as Live Chat visitors who, depending on the use case, have to provide personal data like email addresses, etc. [Rocket.Chat](http://rocket.chat) already has in place a similar confirmation mechanism for user verification, such as 2FA, email, etc. The contributor will have the freedom to propose ideas and design the best solution for the problem described.

**Desired Skills:** Familiarity with JavaScript development.   Good understanding of the architecture of Rocket.Chat's omnichannel implementation.

**Project Duration:** 175 hours.

### **IRC Bridge :   improve ease of deployment and stability**&#x20;

**Mentors:** TBD

**Description:**  Rocket.Chat has long featured the ability to bridge directly witn IRC.   IRC is still in use by many hard core technical open source communities all over the world, and this bridge is very important to many of our community users.  However,  since we started evolving our architecture to be more scalable,  the IRC bridge has not been updated to match .  As a result, it has become unstable in some edge cases and also  difficult to deploy in scaled Rocket.Chat configuration.   This project aims to improve the situation.  The IRC bridge should be updated to be compatible with our scaled configuration.   Extracting from core code base and repackaging as Rocket.Chat App or npm module should be investigated.  Additional configuration/provisioning options and DevOps images will need to be created to improve the administrator's experience.

**Goals/Deliverables:**  Familiarity with Typescript development.   User of IRC and an understanding of how it works.   An understanding of how Rocket.Chat scales.

**Project Duration:** 175 hours.

### **Sidebar UI revamp and UX improvements**

**Mentors:** Ivan Netto

**Description:** Converstions in [Rocket.Chat](http://rocket.chat) can be done in multiple ways but at this stage, we need a scalable interface which would help users to maximaze their daily tasks within the software. The following improviments would speed up users' workflow:

* Ability to collapse sidebar section;
* Add rooms straight from the its section header;
* Reduce the types of badge notifications, having to sizes will make the user interface more consistent and therefore, cleaner;
* Changes in the margins/paddings, which will bring a more robust visual hirarchy and scanning/reading experience;
* Changes in the colors to improve the readability.

**Goals/Deliverables:** Improve UX of daily basis tasks on a central touch point of the software.

**Project Duration:** 350 hours.

### Message forwarding

**Mentor(s):** Milton Rucks

**Description:** Implement the ability to forward messages to another channel,  thread, or discussion.   This is a high demand capability that is currently missing in Rocket.Chat.  It can significantly improve the user's experience and her/his productivity. The scope of this project will be limited to the web application (not for mobile apps).

**Desirable Skills:** Familiarity with JavaScript and TypeScript development

**Goal/Deliverable:**&#x20;

* Being able to forward messages and files to multiple users and channels
* Being able to add additional messages on the top of forwarded content

**Project Duration:** 350 hours.

### Figma Integration (Rocket.Chat App)

**Mentor(s):** Douglas Gubert & Alvaro Mello

**Description:** This project brings Figma's life right into Rocket.Chat.

**Desirable Skills:** Familiarity with TypeScript development.

**Goals/Deliverables:**

* being notified on
  * new comment on a file
  * being invitated
  * being tagged in a file
* replying and commenting in files right from Rocket.Chat

**Project Duration:** 350 hours.

### Slack Bridge:  rich interop and better deployment

**Mentor(s):** TBD

**Description:**   Slack is a very popular closed source team chat solution.   Rocket.Chat has built-in support for a primitive bridging solution with Slack.   This project aims to improve the capabilities of this bridge, extending it to  cover the rich features that both Rocket.Chat and Slack have.   The project should also make the bridge easier to deploy, this may involve the extraction of the bridge's code and refactor into either a Rocket.Chat App or an npm module.   New code/architecture should ensure stability of the bridge when deployed in the new scaled Rocket.Chat deployment configurations.

**Desired Skills:** Familiarity with Typescript and Javascript development.  Familiarity with Slack's REST APIs.  An interest in crafting  bridges between communications platforms.

**Project Duration:** 350 hours.

### Improve Navigation in Mobile Client

**Mentor(s):** Daniel Silva, Diego Mello

**Description:** Navigation is one of the most important parts of a mobile application. We've been using [React Navigation](https://reactnavigation.org) as our navigation library and we need to update it from v5 to v6, which contains a few nice new features. The same applies to [react-native-screens](https://github.com/software-mansion/react-native-screens), which released support to Fabric recently. After these updates, we're planning to evaluate native-stack.

**Desirable Skills:** Experience with React Native and React Navigation.

**Goals/Deliverables:** Update react-navigation and react-native-screens to latest and apply native-stack

**Project Duration:** 350 hours.

### Improve Mobile Client Animations

**Mentor(s):** Gerzon Canario, Diego Mello

**Description:** [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) is the de facto animation library for React Native and they recently released their v2, changing the whole API to a more straight forward way. You're going to make use of this library to rewrite our animations from scratch. You're also going to apply Layout Animation on Android, a long-awaited feature.\
Desirable skills: Experience with React Native and react-native-reanimated v2. Preferred, but optional: the student needs a Macbook to test animations on iOS.

**Desirable Skills:** Knowledge of React Native and react-native-animated is preferred

**Goals/Deliverables:** Apply reanimated v2 to dropdown, RoomItem swipe and ImageViewer and apply LayoutAnimations from v2

**Project Duration:** 350 hours.

### Mobile Client: Redesigned MessageBox

**Mentor(s):** Diego Mello

**Description:** We redesigned our Messagebox, also know as message composer, from scratch to make it easier to use, composable and following a more modern UX. You're going to implement gesture animations to record audio messages from the start. This is one of the most important components from our app.

**Desirable Skills:** Experience with React Native and [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated). Required: Macbook to test iOS.

**Project Duration:** 350 hours.

### New Emoji Picker for Mobile Client

**Mentor(s):** Daniel Silva, Diego Mello

**Description:** Actions sheets are a very common UX pattern used for users to interact with quick actions on a fast and easy way. [react-native-bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet) has growth a lot recently and it's been receiving love from the community. That's why we want to migrate to it. While doing this migration, we want to make dynamic, so we can render the emoji picker inside of it. You're going to be designing the new emoji picker from scratch.

**Desirable skills:** Experience with React Native.

**Goals/Deliverables:** Switch to [https://github.com/gorhom/react-native-bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet), make it dynamic enough so it can render emojis picker. Apply the new design.

**Project Duration:** 350 hours.

### Team Bridge:  interop with Microsoft Team

**Mentor(s):** TBD

**Description:**   Microsoft team is unquestionably the most popular and frequently used closed source team chat system in the world.   Many administrators and users of open source Rocket.Chat team chat will have needs to bridge between their open source users and legacy users still on team.  This project will create a Rocket.Chat App or an npm module that will act as a bridge  between Rocket.Chat and Microsoft Team.    Users on one system should be able to chat with the other through shared channels.   Support for rich interactions including DM, emoji's, embedded graphics, shared youtube links and so on should also be supported.   The exact scope for this project will be determined between the contributor and the mentors.

**Desired Skills:** Familiarity with Typescript and Javascript development.  Familiarity with Microsoft Team's available APIs.  An interest in crafting  bridges between communications platforms.

**Project Duration:** 350 hours.

### Rocket.Chat Text Terminal Client (TUI)

**Mentor(s):** Aaron Ogle, Debdut Chakraborty

**Description:** Rocket.Chat has desktop, web and mobile clients, time for a fourth, a TUI client. This project brings Rocket.Chat right into your terminal. By design this is to be extremely lightweight and blazing fast for basic functions, with the only noticeable latency source being the SDK calls.

**Desired Skills:**&#x20;

* Golang knowledge is required
* Any modern TUI package knowledge is preferred ([https://charm.sh](https://charm.sh), [https://github.com/charmbracelet/bubbles](https://github.com/charmbracelet/bubbles))
* Knowledge of termios and/or VTE is a bonus

**Goals/Deliverables:**

* Authenticate against a Rocket.Chat server via TUI
* List rooms and update real time
* Being able to send and receive messages real time
* Threaded conversations
* Ability to create room resources like channels, private groups, discussions, direct messages
* User mentions (including @all, @here)
* No-UI slashcommand implementations (/create, /invite, /invite-all-from, /invite-to-from, /join)

**Project Duration:** 350 hours.

### weekly video  meeting and  archive App - Big Blue Button + Rocket.Chat

**Mentors:** Debdut Chakraborty, Felipe Cecagno, Sing Li

**Description:** Big Blue Button is one of the most popular open source virtual classroom  and conferencing tool available today. This project is a very simple integration with Rocket.Chat for conducting a weekly meeting and maintaining the recording video archive. Mentors will include both Rocket.Chat and Big Blue Button experts.

**Desirable Skills:**   Familiarity with TypeScript development. Experience with AVideo.&#x20;

**Goals/Deliverables:**  A Rocket.Chat App that will enable users in a channel to join an existing weekly meeting if it is in progress. Or query for recorded meeting videos and view them.

**Project Duration:** 175 hours.

### Open Source Project Rewrite

**Mentors:** Jorge Leite

**Description:** Migrating from one technology, coding language or framework is something quite common on an industry that is constantly evolving. Having people with knowledge on performing this during early stages of their career and understanding the steps to do so is not quite as common. On this project the participant will be performing features and repos re-writes and builds while getting mentoring on clean code, unit testing, quality standards and best practices on agile software development.

**Desirable Skills:** Familiarity with JavaScript and TypeScript development.

**Goal/Deliverable:** Proof of concept on repos and actual features migration to new standards.

**Project Duration:** 175 hours.

### Chatbot to improve agile workflow

**Mentors:** Leonardo Ostjen, Tiago Evangelista & Gabriel Casals

**Description:** Agile adoption is increasing year to year on the different industries. There is an opportunity to add agile package bots to help squad with reminders, links and facilitate attendance to meeting based on simple calendar inputs and emoji reactions. Candidate will be working with Agile excperts and Engineers to build some solutions for this space and help pump squads productivity.

**Desirable Skills:** Familiarity with TypeScript development. Demonstrated interest and/or passion in Agile and squad productivity tools.

**Goal/Deliverable:** Code and test chatbots to improve agile team productivity

**Project Duration:** 175 hours.

### Zoho Employee App

**Mentors:** Jorge leite & Marcelo Schmidt

**Description:** Zoho Employee is the revamp of the existing Zoho App. This integrates Zoho People with [Rocket.Chat](http://rocket.chat), and lets the users view and modify resources according to their accounts. Zoho People is a very capable employee management system, but opening Zoho for every little thing can get tedious in a busy schedule. This app will make this interfacing much easier, right from [Rocket.Chat](http://rocket.chat).

**Desirable Skills:**

* Familiarity with TypeScript development

**Goals/Deliverables:**

* being able to look up colleague details
* being able to see upcoming PTOs
* being able to apply for PTOs
* being able to apply for reimbursements

**Project Duration:** 350 hours.

### Bot for extracting company information

**Mentors:** Kevin Aleman

**Description:** Finding company information is sometimes troubled and not practical enough. You have to go to different places and links. There is an opportunity to add a “truffle sniffer” bot that helps check if an item you are looking for is on intranet/handbook for the company + learn if replies were good or bad based on emoji reactions. Participant will be working with expert engineers to build an user friendly solution to get all the “good truffles”

**Desirable Skills:** Familiarity with TypeScript development. Demonstrated interest and/or passion for AI and search engines.

**Goal/Deliverable:** Code and test chatbots to improve agile team productivity

**Project Duration:** 350 hours.

### GitHub Integration (Rocket.Chat App)

**Mentor(s):** actively seeking mentors

**Description:** GitHub is the largest centralized location for hosting open source projects. This app will enable the users to perform many GitHub activities right from Rocket.Chat.

Goals/Deliverables:

**Desired Skills:**

* Familiarity with TypeScript development
* GitHub API

_Project Duration:_

### Time Management App

Mentor(s): actively seeking mentors

Description:&#x20;

### ClickUp Integration (Rocket.Chat App)

Mentor(s): actively seeking mentors

Description: ClickUp is an extremely feature rich collaboration and project management tool, used by many organizations. When used on a daily basis, going back and forth for the simple things like checking a task's status or changing that task's status can get tedious pretty quick. This app will make it easier for Rocket.Chat users to perform simple clickup tasks without having to leave the platform, making team communications more efficient, and team members more productive.

Goals/Deliverables:

Desired Skills:

* Familiarity with TypeScript development
* ClickUp API

Project Duration:

### Kopano Integration (Rocket.Chat App)

Mentor(s): actively seeking mentors

Description: Kopano is an open-source groupware application suite. The goal of this project is to integrate Kopano with Rocket.Chat via an app, that enables the users to use various Kopano features from within Rocket.Chat.

Goals/Deliverables:

Desired Skills:

* Familiarity with TypeScript development
* Knowledge of Kopano integrations and APIs is a plus ([https://kopano.com/products/groupware/integrations-apis/](https://kopano.com/products/groupware/integrations-apis/))

**Project Duration:**

### OnlyOffice Integration (Rocket.Chat App)

Mentor(s): actively seeking mentors

Description: OnlyOffice is a free and open source office and productivity suite. You will work on integrating both OnlyOffice with Rocket.Chat, making it easy to interact with an OnlyOffice server right from Rocket.Chat.

Goals/Deliverables:

Desired Skills:&#x20;

* Familiarity with TypeScript development
* OnlyOffice API

Project Duration:

### Outlook Calendar Integration (Rocket.Chat App)

Mentor(s): actively seeking mentors

Description: You will build an app, that will enable Rocket.Chat users to manage their outlook calendar events without having to switch between multiple platforms. You will get help from top class mentors from the open source community throughout the project duration.

Goals/Deliverables:

Desired Skills:

* Familiarity with TypeScript development
* Outlook calendar API

Project Duration:

### Microsoft OneDrive Integration (Rocket.Chat App)

Mentor(s): actively seeking mentors

Description: Microsoft OneDrive is a file hosting service. In this project, you will create an app that will help the users manage their onedrive files right from Rocket.Chat.

Goals/Deliverables:

Desired Skills:

* Familiarity with TypeScript development
* OneDrive API

Project Duration:

### DropBox Integration (Rocket.Chat App)

Mentor(s): actively seeking mentors

Description: Dropbox is a file hosting service. You will create an app that will help the users manage their dropbox files easily directly from Rocket.Chat.

Goals/Deliverables:

Desired Goals:

* Familiarity with TypeScript development
* DropBox API

Project Duration:

### Asana Integration (Rocket.Chat App)

Mentor(s): actively seeking mentors

Description: Asana is a web and mobile work management platform designed to help teams organize, track, and manage their work. In this project you will create a Rocket.Chat app that will make it possible for the users to manage their Asana projects without having to leave the platform, consequently making the teams more efficient and productive.&#x20;

Goals/Deliverables:

Desired Skills:

* Familiarity with TypeScript development
* Asana API

Project Duration:
