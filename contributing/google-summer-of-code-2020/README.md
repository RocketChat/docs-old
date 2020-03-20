---
permalink: /contributing/google-summer-of-code-2020/

redirect_from:
  - /contributing/google-summer-of-code/
---

[![Google Summer of Code 2020](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://summerofcode.withgoogle.com/)

# Google Summer of Code 2020

## How to apply

Rocket.Chat is proud to be an official mentor organization for Google Summer of Code 2020!

Students interested in joining us this summer shoud check out our [list of project ideas](#project-ideas) and start discussion with mentors about their project immediately.  See the section [About GSoC 2020](#about-gsoc-2020) for more information.

Application is **now open**.  Students should register and submit their proposals via their [GSoC Dashboard](https://summerofcode.withgoogle.com/dashboard/).   All proposals must be finalized by March 31st.   Please see [GSoC timeline](#timeline) for more details.

### About GSoC 2020

For ideas, check out our growing [list of ideas](#project-ideas) for some inspiration.

Come meet our global community of potential mentors and students for GSoC 2020 and get some real-time help on next steps, please visit our 24 x 7 community server channel:

<https://open.rocket.chat/channel/gsoc2020>

For offline discussions, we have a discussion forum:

<https://forums.rocket.chat/c/gsoc/gsoc2020/70>

If you have ideas and proposals that are not on our ideas list, or if a mentor is not available, please email to:

   gsoc@rocket.chat

Interested students are also encouraged to interact with our contributor community on GitHub:

<https://github.com/RocketChat/Rocket.Chat>

Enthusiasm and interest are extremely high this year; over 25 candidate students have already started to interact with our community and contributing to the repositories!  Together, they have already contributed over 100 issues and over 18 merged PRs to our various projects.  We are maintaining a real-time updated leaderboard for at-a-glance student (candidates) contribution here:

<https://gsoc.rocket.chat/>

The leaderboard project **itself** is open source, created and maintained by our student (candidates).  All potential GSoC organizations are welcome to use and deploy it (the project has a super friendly MIT license - just like Rocket.Chat).

<https://github.com/lolimay/GSoC-Contribution-Leaderboard-Node>

## Project Ideas

### Advanced Rocket.Chat administrators and operations toolkit

- **Mentors**: [@diego.sampaio](https://open.rocket.chat/direct/diego.sampaio), [@sing.li](https://open.rocket.chat/direct/sing.li)
- **Description**: Administration and management of a Rocket.Chat server is a very complex task, especially for servers that are utilized by thousdands of users on a daily basis.  There exists many administrative and operational activities that require access to the system in ways that are not currently supported by our Administrative dashboard.  This project creates small, standalone tools, to address this need. These tools will be immediately useful for anyone operating one-or-more large Rocket.Chat server(s) worldwide.
- **Desirable Skills**: Familiarity with nodeJS fullstack webapp development. Experience with ReactJS or Vue.js ideal.  Must have database skills, ideally MongoDB.

### Improve Documentation Framework (Versioning)

- **Mentors**: [@martin.scholeler](https://open.rocket.chat/direct/martin.schoeler), [@guilherme.cruz](https://open.rocket.chat/direct/guilherme.cruz)
- **Description**: The main objective of this project is to add a versioning capacity to the documentation, while maintaining a relatively simple file structure and ease of use. In addition, add support for multi-lingual documentation and increase the ease of use of the documentation generation and hosting framework to ease the barrier of entry for contributors trying to run the environment on their own machines, making it more contributor friendly.
- **Desirable Skills**: Familiarity with Javascript development. Working knowledge of Jekyll and documentation generation framework highly useful.

### Google Action Improvement

- **Mentors**: @ashish.jha @prajval.raval1
- **Project repository**: <https://github.com/RocketChat/google-action-rocketchat>
- **Description**: Bring access of Rocket.Chat into the world of 1 Billion+ Google Assistant enabled devices. The project should aim beyond the obvious TTS <-> STT "Rocket.Chat bridging" of intelligent VUI terminal devices and create innovative, high valued user experiences to the Google Assistant ecosystem - powered by open source Rocket.Chat. The project will aim towards making current action compaitable with Multisever proxy and publishing of Google Action of on its store, of course while adding more features to it such as Interactive Canvas, App Actions etc.  This project will also focus on making current documentation more streamlined and "easy to refer" for newcomers.
- **Desirable Skills**: Familiarity with Google Actions development, Dialogflow, NodeJS Server Development and Rocket.Chat source code. Experience with interfacing external sources and systems into Google Action. Passion for global converstational interaction enablement.

### Omnichannel:  Chatbot support for RASA and Dialogflow

- **Mentors**: @renatobecker
- **Description**: The goal of this project would be to create new integrations to interact with popular BOT frameworks - RASA and Dialogflow. Also, support and adapt rich messages to the formats of these platforms, as well as the formats supported by Rocket.Chat.
- **Desirable Skills**: Experience in working with Chatbots communication. Familiarity with Typescript and, ideally, experience with Javascript.

### Omnichannel: Live Agent and Chatbot Handoff App

- **Mentors**: @steve.stetak, @dlassalle, @renatobecker
- **Description**: Enhance Omnichannel Rocket.Chat to support the use of Chatbots, powered by NLP such as Dialogflow, in front of a larger existing infrastructure of Care Live Agents.  Enabling customers to use the Rocket.Chat client embedded in a website that directs them to a Chatbot.  If the Chatbot is unable to solve their issue, Rocket.Chat will seamlessly route them to a Live Agent through a third-party queue system such as Salesforce using an Rocket.Chat App. At the end of the conversation the customer will be reconnected to the chatbot for additional support or survey purposes, all within the same chat client window.
- **Desirable Skills**: Familiarity with Rocket.Chat development, Salesforce, and NLP or Chatbot experience

### Omnichannel: Add screen sharing feature in the Livechat widget

- **Mentors**: @renatobecker
- **Description**: Add a new interface between Rocket.Chat and the Omnichannel Livechat widget, allowing Agents to get real-time screenshare on customer's devices. For this initial version, we will also create an integration with the Cobrowse.io, which will be the first screen sharing supplier supported.
- **Desirable Skills**: Experience with Javascript and React.JS.

### Omnichannel: Create integration with Zoho Desk CRM

- **Mentors**: @renatobecker
- **Description**: In order to have a complete customer service experience, it is essential to have quick access to customer data, create service tickets, etc. The aim of this project is to provide that experience by creating an integration between Rocket.Chat and Zoho CRM, a complete CRM platform that will bring an even richer experience to the Omnichannel Customer Service.
- **Desirable Skills**: REST, Experience with Javascript and familiarity with Typescript.

### Omnichannel: Support for Voice and Video Calls

- **Mentors**: @gazzo, @tazzo
- **Description**: We've been working on our new Omnichannel solution and it's time to add two great new features that will make Omnichannel even more powerful: voice and video calls! The idea is to integrate Omnichannel with the providers already supported in Rocket.Chat, such as Jitsi, WebRTC, BigBlueButton and so on. With these two new features, Omnichannel users will be able to initiate video and audio calls between them and Omnichannel agents.
- **Desirable Skills**: Familiarity with Rocket.Chat/Omnichannel development, ReactJS/PreactJS, Voice and Video communication

### Houston Improvements - Rocket.Chat release/changelog generator

- **Mentors**: [@diego.sampaio](https://open.rocket.chat/direct/diego.sampaio) and [@rodrigo.nascimento](https://open.rocket.chat/direct/rodrigo.nascimento)
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.Houston>
- **Description**: Huston is the CLI tooling we use to release new versions of Rocket.Chat and to generate our change logs from merged pull requests. We want to:
    * Rewrite the tooling in TypeScript;
    * Improve the changelog generation getting more information from the PRs like description, images, etc;
    * Accept a new format of PR titles;
    * Add a validation system for PRs titles via GitHub Actions;

### Alexa Skill(s) Improvement

- **Mentors**: @ashish.jha @prajval.raval1
- **Project repository**: <https://github.com/RocketChat/alexa-rocketchat>
- **Description**: Bring access of Rocket.Chat into the world of 100 million+ Alexa enabled devices. The project should aim beyond the obvious TTS <-> STT "Rocket.Chat bridging" of intelligent VUI terminal devices and create innovative, high valued user experiences to the Alexa ecosystem - powered by open source Rocket.Chat. Google Home/Assistant devices support, if possible, should also be considered concurrently. The focus will be on devoting more time to improve the features which add more advantage and serve a frictionless experience when used via voice compared to features which have a limited use and are better performed using a GUI.
- **Desirable Skills**: Familiarity with Alexa skills development and conversational design. NodeJS Server Development and Rocket.Chat source code. Experience with interfacing external sources and systems into Alexa skills. Passion for global conversational interaction enablement. Familiarity with Google Action development ideal.

### Add Support for Bixby

- **Mentors**: @ashish.jha @prajval.raval1
- **Project repository**: <https://github.com/RocketChat/alexa-rc-multiserver-client>
- **Description**: Last year we explored the possibilities of having a Rocket.Chat Amazon Alexa Skill and a Rocket.Chat Action on Google. This project should aim to explore adding a Samsung Bixby Capsule for Rocket.Chat. Bixby is a next-generation, conversational assistant platform that was created to help users get things done in a more efficient, personalized and natural way. The way Bixby focuses on a multimodal approach from the very start could help eliminate the nuances involved in building an intricate voice-only experience.
- **Desirable Skills**: Familiarity with VUI/Bixby development. Experience with interfacing external sources and systems into Alexa skills. Passion for global conversational interaction enablement. Familiarity with Javascript ideal.

### Apps-CLI: Generate boilerplate components

- **Mentors**: @douglas.gubert @shiqi.mei
- **Description**: Add commands to the Rocket.Chat Apps-CLI that generate the boilerplate needed to add new components to the app being developed, such as Slash commands, API endpoints, etc.
- **Desirable Skills**: Experience with Javascript and familiarity with Typescript.

### Apps-CLI: Hot reload apps during development

- **Mentors**: @douglas.gubert @shiqi.mei
- **Description**: Add the option to the Rocket.Chat Apps-CLI to support apps development by hot-reloading the app in the development server on file saving.
- **Desirable Skills**: Experience with Javascript and familiarity with Typescript.

### Nextcloud Video Management

- **Mentors**: @guilherme.gazzo
- **Description**: Add the ability to manage and access recorded and previously live streamed video within the Rocket.Chat integrated Nextcloud environment. Similar to Youtube but with a chat-centric access interface.
- **Desirable Skills**: Familiarity with Rocket.Chat and Nextcloud development.  Deep understanding of current digital streaming and recorded media standards a big plus.

### Apple Watch App

- **Mentors**: @djorkaeff.alexandre @diego.mello
- **Description**: Create an Apple Watch application that replicates the most basic features we have in our iOS mobile client, such as viewing the chat rooms and reading the messages. Let the user ask Siri to read the latest messages, send messages or respond to a message.
- **Desirable Skills**: Familiarity with WatchKit development on WatchOS & SiriKit, Familiarity with React Native.

### Target official/experimental Mobile apps using GitHub Actions (CI)

- **Mentors**: @djorkaeff.alexandre @diego.mello
- **Description**: Create build of our 4 apps on GitHubCI, 2 Android Apps and 2 iOS Apps (Official and Experimental).
- **Desirable Skills**: Familiarity with React Native, FastLane, Android & iOS build apps.

### Add Analytics to Mobile Apps

- **Mentors**: @djorkaeff.alexandre @diego.mello
- **Description**: We use Firebase to track some analytics, now we want to know data like 'how many people clicked on login?'. You need to add firebase analytics to our app and add track analytics of the most important features and events.
- **Desirable Skills**: Familiarity with React Native and Firebase Analytics.

### Share Location on Mobile Apps

- **Mentors**: @djorkaeff.alexandre @diego.mello
- **Description**: We have this feature on our web client, server has an implementation about this, you only need to implement this feature on our Mobile Client and ability to select and share a location (based or not on user's location), custom message to show the location shared and need to be able to open this location on maps apps.
- **Desirable Skills**: Familiarity with React Native and Rocket.Chat codebase.

### Mobile Apps Accessibility

- **Mentors:**  [@matheus.cardoso](https://open.rocket.chat/direct/matheus.cardoso)
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description:** Android and iOS both support gesture-based screen readers that let you enjoy using the phone even if you don’t see the screen. This is especially important for those with low or no vision. We want to make Rocket.Chat for everyone. A blind user should be able to easily add servers, change servers, read messages and send messages, as well as other additional functions such as editing profile and creating channels. The proposal should contain a per-screen study of the current App's state of accessibility (what is missing and what needs to be improved), and a roadmap to take it to a delightful state.
- **Desirable Skills:** We are looking for a student who is familiar with team work, developing mobile Apps using React Native and JavaScript, as well as writing maintainable code with Unit Tests and having some familiarity with Voice Over (iOS), TalkBack (Android) and Accessibility. Knowledge of Swift/Objective-C and Kotlin/Java may be needed for some of the trickier tasks.

### Audio improvements on mobile apps

- **Mentors**: @djorkaeff.alexandre @diego.mello
- **Description**: A new UI component to be rendered outside the room view allowing users to listen to the room’s audios when navigating to other rooms. Additions like listening speed are welcome.
- **Desirable Skills**: Familiarity with React Native and Rocket.Chat codebase.

### Full-screen composer option to send/edit long messages on mobile apps

- **Mentors**: @djorkaeff.alexandre @diego.mello
- **Description**: A full-screen composer that could be opened from the current composer to provide a larger area for text input or edition, good to send or edit large texts.
- **Desirable Skills**: Familiarity with React Native and Rocket.Chat codebase.

### Create F-Droid build

- **Mentors**: @djorkaeff.alexandre @diego.mello
- **Description**: Create a build for the other store for Android apps: <https://f-droid.org/>
- **Desirable Skills**: Familiarity with Android development, React Native and Rocket.Chat codebase.

### Use Lingohub on mobile apps

- **Mentors**: @djorkaeff.alexandre @diego.mello
- **Description**: Share Lingohub keys with the web client.
- **Desirable Skills**: Familiarity with React Native and Rocket.Chat codebase.

### Uber Rocket.Chat App

- **Mentors**: [@marcos.defendi](https://open.rocket.chat/direct/marcos.defendi)
- **Description**: The goal of this project is allow users to call their Uber rides directly from Rocket.Chat.
- **Desirable Skills**: Familiarity with Typescript and OOP concepts.

### Vocabulary Booster Rocket.Chat App

- **Mentors**: [@marcos.defendi](https://open.rocket.chat/direct/marcos.defendi)
- **Description**: The goal of this project is to provide the user a way to improve his vocabulary in a certain language (English, for now), by sending him a message with a "new" word in certain periods of time (configurable). After that, the app should validate if the user has learned the meaning of the word, sending the definition and some word options, or some sentence with the word and a gap to fill. Also the app would show the user's performance. There are some API's to get the words and the meanings. e.g ([WordsAPI](https://www.wordsapi.com/), [Datamuse](https://www.datamuse.com/api/), [Oxford](https://developer.oxforddictionaries.com/), etc) (needs to be evaluated deeply)
- **Desirable Skills**: Familiarity with Typescript and OOP concepts.

### Salesforce Rocket.Chat App

- **Mentors**: @steve.stetak, @dlassalle, @renatobecker
- **Description**: Create a Rocket.Chat app that will allow customers and Chatbots to interact through Rocket.Chat with CRM tools, primarily Salesforce.  This will allow organizations to provide access to the information and tools they already are using in Salesforce through a chat interface.
- **Desirable Skills**: Familiarity with Rocket.Chat development, knowledge of Salesforce or other CRM tools.

### Rocket.Chat Mobile site

- **Mentors**: @kb0304
- **Description**: A client build for mobile-web, lite in size and functionality to bring down the site load time, with a better UI/UX customized for mobile screens.
- **Desirable Skills**: Familiarity with Rocket.Chat and Responsive Design

### OAuth/Account integration

- **Mentors**: [@shiqi.mei](https://open.rocket.chat/direct/shiqi.mei) and [@douglas.gubert](https://open.rocket.chat/direct/douglas.gubert)
- **Description**: Enable Apps to provide custom OAuth providers for Rocket.Chat

### Assets installation (emoji and sounds)

- **Mentor**: [@rodrigo.nascimento](https://open.rocket.chat/direct/rodrigo.nascimento) and [@douglas.gubert](https://open.rocket.chat/direct/douglas.gubert)
- **Description**: Enable Apps to provide custom assets as emojis and sounds for use on the various related features on Rocket.Chat

### Federation Whitelisting

- **Mentor**: [@alan.sikora](https://open.rocket.chat/direct/alan.sikora)
- **Description**: Enable Federation-enabled servers to whitelist other servers, avoiding unwanted chat requests and improving security

### Permissions system - Feature Manifest

- **Mentors**: [@douglas.gubert](https://open.rocket.chat/direct/douglas.gubert) and [@rodrigo.nascimento](https://open.rocket.chat/direct/rodrigo.nascimento)
- **Description**: Currently there is no way for an admin to know during the installation of an App which Apps-Engine features are going to be used and what kind of access the app will have to the workspace's data. The idea is for the App to provide a manifest with the features and access it is going to require, and the Apps-Engine will only allow the defined features to be used by the App.

### Download Manager on Desktop App

- **Mentors**: [@tasso.evangelista](https://open.rocket.chat/direct/tasso.evangelista) and [@guilherme.gazzo](https://open.rocket.chat/direct/guilherme.gazzo)
- **Description**: With the React/Redux/Redux-Saga stack coming to the Electron-based app, a richer user experience is achievable through [Rocket.Chat's Fuselage components](https://github.com/RocketChat/Rocket.Chat.Fuselage). A long-awaited feature is the management of file downloads with some tracking of download progress and ability to cancel/restart.
- **Desirable Skills**: Some knowledge about the concept of CSS-in-JS and popular implementations for React (e.g. [Styled Components](https://styled-components.com/), [Emotion](https://emotion.sh/docs/introduction)) as well basic understanding about the [Electron framework](https://www.electronjs.org/).

### Improve test coverage and enable visual regression tests

- **Mentors**:[@guilherme.gazzo](https://open.rocket.chat/direct/guilherme.gazzo) and [@tasso.pinto](https://open.rocket.chat/direct/tasso.evangelista)
- **Description**: Re-enable all current skipped tests, start a visual regression test for each relevant UI part using the same tooling (Cypress) and add tests to features without tests.

### Lightweight UI for single room access (embedded UI)

- **Mentors**:[@guilherme.gazzo](https://open.rocket.chat/direct/guilherme.gazzo) and [@tasso.pinto](https://open.rocket.chat/direct/tasso.evangelista)
- **Description**: Rocket.Chat already has an option to load the UI as embedded layout, although it still loads a lot of unnecessary data, the objective here is to find the most efficient way to render a single room UI with the minimum data possible in a way that the UI can be embedded in a website using an iframe and be performatic when reloading within the site navigation

### UI to see videos outside the room,  using popouts

- **Mentors**: [@guilherme.gazzo](https://open.rocket.chat/direct/guilherme.gazzo) and [@tasso.pinto](https://open.rocket.chat/direct/tasso.evangelista)
- **Description**: A new UI component to be rendered outside the room view allowing users to listen to the room’s videos when navigating to other rooms.

### UI to listen to audio files outside the room (like telegram) + "user is recording audio" indicator (as the typing one)

- **Mentors**: [@tasso.pinto](https://open.rocket.chat/direct/tasso.evangelista) and [@guilherme.gazzo](https://open.rocket.chat/direct/guilherme.gazzo)
- **Description**: A new UI component to be rendered outside the room view allowing users to listen to the room’s audios when navigating to other rooms. Additions like listening speed are welcome.

### Pre-installed apps

- **Mentors**: [@douglas.gubert](https://open.rocket.chat/direct/douglas.gubert) and [@shiqi.mei](https://open.rocket.chat/direct/shiqi.mei)
- **Description**: Make Rocket.Chat have a list of default apps that are going to be installed during the first run of the server.

## Timeline

[GSoC 2020 Timeline](https://developers.google.com/open-source/gsoc/timeline) next due dates:

**Feb 20**
List of accepted mentoring organizations published.

**February 20 - March 16**
Potential student participants discuss application ideas with mentoring organizations

**March 16 18:00 UTC**
Student application period begins - _[How to write a Proposal](https://google.github.io/gsocguides/student/writing-a-proposal.html)_

**March 31st 18:00 UTC**
Student application deadline

**April 27th 18:00 UTC**
Accepted student proposals announced

...
