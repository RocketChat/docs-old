---
permalink: /contributing/google-summer-of-code-2019/

redirect_from:
  - /contributing/google-summer-of-code/
---

[![Google Summer of Code 2019](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://summerofcode.withgoogle.com/)

# Google Summer of Code 2019

## How to apply

GSoC 2019 students application opens March 25th, 2019.  See [GSoC timeline](https://rocket.chat/docs/contributing/google-summer-of-code-2019/#timeline) for more details.

Start planning your proposal now! Check out our [list of ideas](https://rocket.chat/docs/contributing/google-summer-of-code-2019/#project-ideas) for some inspiration.

Meet the mentors and students for GSoC 2019 and get some real-time help on next steps, please visit our 24 x 7 community server channel:

<https://open.rocket.chat/channel/gsoc2019>

For offline discussions, we have a discussion forum:

<https://forums.rocket.chat/c/gsoc/gsoc2019>

If you have ideas and proposals that are not on our idea list, or if a mentor is not available, please email to:

   gsoc@rocket.chat

Interested students are also encouraged to interact with our contributor community on GitHub:

<https://github.com/RocketChat/Rocket.Chat>

Enthusiasm and interest are extremely high this year; candidate students have already started to interact with our community and contributing to the projects!   We are maintaining a real-time updated leaderboard for at-a-glance student (candidates) contribution here:

<https://gsoc.rocket.chat/>

The leaderboard project **itself** is open source, created and maintained by our student (candidates).  All potential GSoC organizations are welcome to use and deploy it (the project has a super friendly MIT license - just like Rocket.Chat).

<https://github.com/shubhsherl/GSoC-Contribution-Leaderboard>

## Project Ideas

### Apple Watch & Siri Support

- **Mentors**: @thiago.sanchez
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.iOS>
- **Description**: Create an Apple Watch application that replicates the most basic features we have in our iOS mobile client, such as viewing the chat rooms and reading the messages. Let the user ask Siri to read the latest messages, send messages or respond to a message.
- **Desirable Skills**: Familiarity with WatchKit development on WatchOS & SiriKit. Ability to work in large multi-disciplinary teams.

### Themes support for Rocket.Chat Android app

- **Mentors**: @filipe.brito
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.Android>
- **Description**: Themes are very popular and they are part of what makes Android stand out from the rest. But the current Rocket.Chat Android app lacks the feature of applying different themes. This project aims to bring different themes support like dark mode and black mode into the existing Android client. It should enable any developer to create a theme for the Rocket.Chat Android app without the need to work with our core codebase.
- **Desirable Skills:** Familiarity with Android development, Kotlin, and design patterns.

### Google Calendar Rocket.Chat App

- **Mentors**: @d-gubert, @rodrigok
- **Description**: The [Rocket.Chat Apps Engine](https://github.com/RocketChat/Rocket.Chat.Apps-engine) is here to make it easier to extend Rocket.Chat's functionality without having to deep dive into the code base. The goal of this project is to leverage the Apps Engine capabilities to create an integration with Google Calendar, using Slash commands, custom API endpoints, custom Settings, etc.
- **Desirable Skills**: Familiarity with TypeScript.

### Implement iOS and Android share extension for React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: Share extensions enables iOS or Android OS to share content between apps. This project aims to implement a share extension for React Native client to let users share data into Rocket.Chat from other apps. For example, a user should be able to send photos from the camera roll to a Rocket.Chat channel without opening the RC client.
- **Desirable Skills:**  Familiarity with React Native, iOS and Android development and Rocket.Chat.ReactNative code base.

### Improve Rocket.Chat Auto-Translate feature

- **Mentors**: @marceloschmidt
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat/tree/develop/packages/rocketchat-autotranslate>
- **Description**: One of the most popular features in Rocket.Chat is auto-translate, where users can set their language preference to have all messages translated.  This feature works by translating every incoming message into the user language of choice. We would like the student to make it possible for the package also to translate every message the user sends into another language. As a plus, if the student can implement a channel language setting, it would be superb.
- **Desirable Skills:**  Familiarity with Rocket.Chat development and meteor packages.

### Livechat: Real-Time Visitor Monitoring

- **Mentors**: @renatobecker
- **Description**: The goal of Real-Time Visitor Monitoring is to provide an important feature for the Live chat team by displaying a list of visitors who are browsing the website where the Livechat widget is installed. Having this feature, it will be possible to track important information related to visitors, such as the current page, location, time on site, local time, and so on, even though the visitor has not yet started a conversation with an agent. In addition, an agent will be able to start a conversation with a specific visitor directly from the list, improving the proactivity of the Live chat team.
- **Desirable Skills**: Familiarity with Rocket.Chat/Livechat development.

### Interactive APIs documentation

- **Mentors**: @martin.schoeler
- **Project repository**: <https://github.com/RocketChat/docs>
- **Description**: Create an easy-to-use interface to let the user explore, test and get info about the existing endpoints of the Rocket.Chat's APIs. The user will be able to connect and make requests directly from the UI, also being able to change the arguments of the requests and testing different flows of the APIs.
- **Desirable Skills**: Familiarity with Jekyll and Rocket.Chat Rest API.

### SNAP improvements

- **Mentors**: TBD
- **Description**: The most popular Rocket.Chat deployment method in the world is via snaps.  Snaps are containerized software packages that are simple to create and install. The aim of this project is to improve our snap installation process and expand our configuration options to set up Rocket.Chat in more diverse layouts adding support for load balancing between instances where Rocket.Chat will only be bound to the loopback interface, regular backups for our database configured as a replica set and possible firewall configuration. Improvements in our ARM architecture support is also desirable.
- **Desirable Skills:**  Familiarity with Linux. Good shell scripting skills. Aware of DevOps and containers based deployment technology.

### Service Accounts in Rocket.Chat

- **Mentors:** @karan.bedi, @bizzbyster
- **Description:** Adding the functionality of Service accounts to Rocket.Chat. A service account is an account owned by a User (owner), having a basic profile (username, avatar, description, etc.). If any other User (initiating user) creates a direct messages(DM) session with this service account, this chat session is carried to the owner of the service account. The owner can then reply to this chat session, but to the initiating user, it would seem that the reply is coming from the service account. An authorized user should be able to create service accounts, transfer the ownership of the service account. Service accounts should be searchable; there should be a directory of service accounts. Also, users should be able to subscribe to service accounts, and a service account owner should be able to send broadcast messages to its subscribers. Automated tests should be written to cover the added functionality.
- **Desirable Skills:**  Familiarity with JavaScript development & Rocket.Chat code base

### Newsfeed

- **Mentors:** @bizzbyster, @karan.bedi
- **Description:** Adding the functionality of newsfeed, which is similar to a customized read-only channel for every user. Every user (follower) can follow other users (followed user). Posts from the followed user appear in the newsfeed of their followers. Posts are threaded discussions, started by the followed user in any public channel (origin channel), their follower can or cannot be a part of the origin channel, but this post comes up in their wall with a permalink to the original post in the origin channel. This helps in discovering new conversations. Interns are encouraged to propose extensions to this like wall, where a user can post threads that show up in their follower's feed, status updates, etc. Automated tests should be written to cover the added functionality.
- **Desirable Skills:**  Familiarity with JavaScript development & Rocket.Chat code base

### Rocket.chat Articles

- **Mentors:** @bizzbyster, @karan.bedi
- **Description:** For every deployment of Rocket.chat, there is a team or community that generates a lot of content. Rocket.chat itself is the repository for much of that content but the rest typically resides in other applications such as github or jira or google docs, many of which are third party services and so the content is not owned by the community that hosts the Rocket.chat server. In one particular scenario, a user may want to write an article and "publish" it to groups or contacts within Rocket.chat. Today that would have to be done typically using a third party service. What if instead article creation, searching, and storage were integrated with Rocket.chat such that each user could maintain his or her own library of articles and contacts of that user could subscribe to see new articles posted by that user and to discuss those articles using something like Rocket.chat Threads. By default, each Rocket.chat user would essentially hav their own "blog" which could be accessed via a permalink including links to each "article." In general, the purpose of this project is to develop a minimum integration with another open source publishing platform (such as <https://github.com/TryGhost/Ghost>) that allows users (or bots or service accounts) to write and publish articles that get stored on a location configured by the Rocket.chat administrator so that the community maintains ownership of more of the content it generates.
- **Desirable Skills:**  Familiarity with JavaScript development & Rocket.Chat code base & interest in exploring integrations with publishing open source projects.

### Improved Test Automation in Rocket.Chat Repos

- **Mentors** @TBD
- **Description:** The goal of this project is to enhance the current test infrastructure in the RocketChat repos and pipelines.  Currently, there is some very minimal unit testing that needs to be expanded, and no integration or system level tests or infrastructure to support them.  This project could focus on one of the repos, possibly the Android code base, or all.  Once a test infrastructure and best practice is established, the goal is that no new code gets merged unless it has new tests that will be run at build time, and it passes all of the previous tests.

### Custom Notifications in Android

- **Mentors:** @TBD
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.Android>
- **Description:** The web client currently has the flexibility of customizing the notifications per channel, but the Android client lacks this feature. This project aims to bring this feature into the Android client. Users would be able to mute specific channels and configure if they want to receive notifications when they are mentioned or for every notification, etc. Snooze functionality can also be implemented as an extension of this project.
- **Desirable Skills:**  Familiarity with Android development, specifically the Rocket.Chat.Android code base.

### iOS Voice Over Accessibility

- **Mentors:** @bruno.quadros
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.iOS>
- **Description:** VoiceOver is a gesture-based screen reader that lets you enjoy using iPhone even if you don’t see the screen. This is especially important for those with low or no vision. We want to make Rocket.Chat for everyone. A blind user should be able to easily add servers, change servers, read messages and send messages, as well as other additional functions such as editing profile and creating channels. A minimum acceptable scope is to be determined.
- **Desirable Skills:** We are looking for an undergraduate student who is familiar with team work, developing iOS Apps using UIKit and Swift, as well as writing maintainable code with Unit Tests and having some familiarity with Voice Over and Accessibility.

### Ability to Rebrand Android and iOS Apps

- **Mentors:** @TBD
- **Description:** Implement a way for administrators to rebrand their instances of rocketchat - product name, icons, colors, etc. - for the android and ios apps, which currently do not support this. Besides adding this capability, another goal would be to make this branding across all the OS’s easy for an administrator that may not be too tech savvy. Ideally, this would only be a few easy steps. Besides this ease-of-use improvement, this would also make it less likely that people will fork rocket to put in their own branding.
- **Desirable Skills:**  Familiarity with Android and/or iOS development, specifically the Rocket.Chat.Android/Rocket.Chat.iOS code bases.

### Data Doctor: A database sanitizer tool for Rocket.Chat

- **Mentors:** @diego.sampaio,  @sing.li
- **Description:**  Rocket.Chat's data backend is MongoDB, a NoSQL database. NoSQL databases enable application developers to quickly add and change data schemas for new features without imposing rigid integrity constraints.   While effective for small projects,  this can create varied data inconsistency in long-lasting production server projects such as Rocket.Chat.   Causes such as buggy code versions, crashes during migrations and/or schema updates, core customizations, and inadvertent DB admin modifications can all lead to a non-deterministic data schema. Some corrupted schema may break code, while others can go years without being detected.  The goal of this project is to create a tool to help sanitize in production Rocket.Chat databases.  Depending on the ingenuity of the tool design, the same code can one day be integrated into Rocket.Chat as a data integrity layer.
- **Desirable Skills:**  Familiarity with database concepts and administration.  Fluent with NodeJS and Javascript. Love hacking.

### Asana Rocket.Chat App

- **Mentors**: @d-gubert, @rodrigok
- **Description**: The [Rocket.Chat Apps Engine](https://github.com/RocketChat/Rocket.Chat.Apps-engine) is here to make it easier to extend Rocket.Chat's functionality without having to deep dive into the code base. The goal of this project is to leverage the Apps Engine capabilities to create an integration with Asana, using Slash commands, custom API endpoints, custom Settings, etc.

### Admin webview page integration on React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: The goal of this project is integration with Rocket.Chat's admin webview page when the user has access. This helps administrators to change their servers behavior without the need to open Rocket.Chat on the web or the mobile version on their devices.
- **Desirable Skills:**  Familiarity with React Native development and Rocket.Chat.ReactNative code base.

### Improve notifications on React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: For better user experience, we need to group notifications by channel and allow the user to reply directly from the notification. Also, we should show notifications from other channels when the user is using the app.
- **Desirable Skills:**  Familiarity with React Native, iOS and Android development and Rocket.Chat.ReactNative code base.

### Implement theming on React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: Themes, like dark mode, are very popular and everywhere right now, but the Rocket.Chat React Native app lacks the feature of applying different themes. This project aims to bring different themes like dark mode and black mode into the existing React Native client.

### Implement slash commands on React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: In mobile apps, users must be able to do what they want in fewer taps as possible. Slash commands are faster ways to trigger trivial actions, like invite a user or archive a channel, and it should be available on React Native client.
- **Desirable Skills:**  Familiarity with React Native development, specifically the Rocket.Chat.ReactNative code base.

### Allow Rocket.Chat Apps to use their own NPM modules

- **Mentors**: @d-gubert, @rodrigok
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.Apps-engine>
- **Description**: Currently the Rocket.Chat Apps Engine does not support that apps include their own `node_modules` dependencies, which can be very limiting in some use cases. The goal of this project is to modify our engine so that it can properly install and manage an app's dependencies, enabling app developers to unleash their full potential.
- **Desirable Skills**: Solid understanding of JavaScript and some familiarity with TypeScript. Familiarity with TypeScript's compiler is definitely a plus.

### BOTs Suite: starter Chatbots for Rocket.Chat

- **Mentors**: TBD
- **Project repositories**: [hubot](https://github.com/RocketChat/hubot-rocketchat), [chatops-gitsy](https://github.com/RocketChat/hubot-gitsy), [botpress](https://github.com/RocketChat/botpress-channel-rocketchat), [rasa](https://github.com/RocketChat/rasa-kick-starter), [bbot](http://bbot.chat/), [botkit](https://github.com/RocketChat/botkit-rocketchat-connector), [BOTswana](https://github.com/RocketChat/botswana-snap)
- **Description**: Develop a suite (5+) of BOTs across our Chatbot support portfolio/platforms; integrating current ML, AI, NLP, CMS, CRM and big data access stacks. BOTs need to be contemporarily interesting, simple to construct, yet substantially functional.   They also need to be adaptable across the bot frameworks that Rocket.Chat supports.  They will be used as starter learning resources across our BOT repositories.
- **Desirable Skills**: Deep interest in ML, AI, and modern BOT technologies. Experience in developing BOTs using NodeJS or Python.  Clear methodical mind plus the ability to simplify and explain complex problems in simple terms.  Technologically fearless.

### BOTs UX: Improve the User Experience with bots by adding support for persistent menus, webviews, and rich messaging features

- **Mentors**: @bizzbyster
- **Description**: Rocket.chat trails both team and consumer chat platforms like Slack and Facebook Messenger/WeChat in terms of the richness of user interface components supported by bots. The goal of this project would be to add rich messages, persistent menus, welcome pages, webviews and other components to the Android, iOS, and web clients to allow chatbots to become comparable to web apps in terms of usability and UX.
- **Desirable Skills**: Interest UI/UX and chatbots. Experience in iOS, Android, or web client front ends development.  Excited to participate in the full life cycle development process in an open source community context.

### Integration of Rocket.Chat with Existing Phone/Voice Networks

- **Mentors**: TBD
- **Description**: Deep VoIP integration of Rocket.Chat with modern software and hardware SIP switches and VoIP SaaS. Intelligently add access to phone networks and SMS channels to the Rocket.Chat workflow.  Enable multi-channel conferences with chat + phone calls + video.  Empower Live chat with voice calls in workflow.
- **Desirable Skills**: Familiar with SIP development. Fluent in VoIP concepts and practices. Ability to rapidly code in JavaScript and Linux shell.  Wide open mind for new ideas.

### Open Source Office Suite Integration

- **Mentors**: TBD
- **Description**: Add deep integration with open source word processing, spreadsheet, presentation, email and content management suite(s).  Create a full chat-centric office team collaboration environment.
- **Desirable Skills**: Familiarity with development and extension/integration points for existing open source office suites.  Ability to code and script in multiple programming languages. Preference to work with a team.

### Users Directory integration plus custom fields editor and search

- **Mentors**: @marceloschmidt
- **Description**: Rocket.Chat already allows for users to add custom fields through a setting that accepts a JSON. We would like to create an interface to manage these custom fields. Each custom field must be composed of label, type (one of predefined: string, number, picklist, money, etc.), and an option to determine if this field must be displayed on registration or not. On Users Directory, users must be able to select multiple records from the results and do one of the possible actions: add to existing channel or group and create new channel or group; if only one record is selected, it should also be possible to start a direct message with the selected user.
- **Desirable Skills**: Familiarity with Rocket.Chat development.

### Mattermost Data Importer

- **Mentors**: TBD
- **Description**: Rocket.Chat is currently capable of importing data exported from Slack and HipChat, but there's no importer for Mattermost data. This is a valuable feature that the application is still missing.

### iOS contacts sync, invites & dynamic links

- **Mentors**: @TBD
- **Description**: In the Rocket.Chat native iOS application, add the functionality of listing all the contacts of a user, syncing in background these contacts with the server using existing APIs and displaying the intersection with public accounts on server. Integrating the APIs to invite users that do not have an account (via email/phone) or inviting via other applications on the phone. Support dynamic links in iOS app, allow the creation of links such that when invited through one, after installation of the app it opens a DM with the inviter, etc. `These functionalities are already implemented for Android in a fork.`
- **Desirable Skills**: Familiarity with iOS development.

### Deeper Nextcloud Integration

- **Mentors**: @karlitschek or someone else from Nextcloud
- **Description**: It's already possible to share a file from Nextcloud into Rocket.Chat. But the authentication is a bit clumsy. It would be great to have a single real sign in. So you only need to sign into Rocket.Chat and are automatically signed in Nextcloud of both talks to the same directory of course.
- **Desirable Skills**: Familiarity with Rocket.Chat and Nextcloud development.

### Livechat: Voice and Video Calls

- **Mentors**: @renatobecker
- **Description**: We've been working on our new Livechat solution and it's time to add two great new features that will make Livechat even more powerful: voice and video calls! The idea is to integrate Livechat with the providers already supported in Rocket.Chat, such as Jitsi, WebRTC, BigBlueButton and so on. With these two new features, Livechat users will be able to initiate video and audio calls between them and Livechat agents.
- **Desirable Skills**: Familiarity with Rocket.Chat/Livechat development, ReactJS/PreactJS, Voice and Video communication

## Timeline

[GSoC 2019 Timeline](https://developers.google.com/open-source/gsoc/timeline) next due dates:

**February 26 - March 25**
Potential student participants discuss application ideas with mentoring organizations

**March 25 18:00 UTC**
Student application period begins - _[How to write a Proposal](https://google.github.io/gsocguides/student/writing-a-proposal.html)_

**April 9 18:00 UTC**
Student application deadline

**May 6 18:00 UTC**
Accepted student proposals announced

...
