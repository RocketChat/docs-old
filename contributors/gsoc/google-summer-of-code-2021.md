# Google Summer of Code 2021

[![Google Summer of Code 2020](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://summerofcode.withgoogle.com/)

## How to apply

Rocket.Chat is delighted to participate as a mentoring organization for the 2021 Google Summer of Code \(GSoC\) program.

Student application for GSoC 2021 will begin **March 29, 2021**.

In the meantime, any student interested in joining Rocket.Chat for the GSoC 2021 program is encouraged to visit our 24 x 7 GSoC 2021 community channel:

[https://open.rocket.chat/channel/gsoc2021](https://open.rocket.chat/channel/gsoc2021)

Please see [Official GSoC 2021 schedule ](https://developers.google.com/open-source/gsoc/timeline)for more timeline details.

## About GSoC 2021

For project ideas, check out our growing [list of ideas ](google-summer-of-code-2021.md#project-ideas)for some inspiration.

Come meet our global **community of 230+ mentors and students** for GSoC 2021 and get some real-time help on next steps, please visit our 24 x 7 community server channel:

[https://open.rocket.chat/channel/gsoc2021](https://open.rocket.chat/channel/gsoc2021)

For offline discussions, we have a discussion forum:

[https://forums.rocket.chat/t/about-the-gsoc2021-category/10335](https://forums.rocket.chat/t/about-the-gsoc2021-category/10335)

If you have ideas and proposals that are not on our ideas list, or if a mentor is not available, please email to:

gsoc@rocket.chat

Interested students are also encouraged to interact with our core team and contributor community on GitHub:

[https://github.com/RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)

[https://github.com/RocketChat/Rocket.Chat.ReactNative](https://github.com/RocketChat/Rocket.Chat.ReactNative)

[https://github.com/RocketChat/Rocket.Chat.Electron](https://github.com/RocketChat/Rocket.Chat.Electron)[ ](https://github.com/RocketChat/Rocket.Chat.ReactNative)

## Project Ideas

### Out of office settings with assigning deputy

* **Mentors:** [@amol.babu](https://open.rocket.chat/direct/amol.babu), [@asrar](https://open.rocket.chat/direct/asrar), [@weng.wei](https://open.rocket.chat/direct/weng.wei)
* **Description:** The focus of this project is to solve a very common but problem relating to Out of office functionality in Chat.

  The goal is : -

  * Any user can create out of office settings in Rocket.Chat by giving from and to date with the auto reply message.
  * User should be able to select the channels which would receieve the out of office notification.
  * The out of office notification should only be sent to once for the first incoming message.
  * User can also define his deputy from the list of eligible users.
  * At the tome of out of office, selected deputy will be automatically added to channel and can reply on behalf of main user.
  * After the out of office time ends, deputy should be auto removed from the channel.

* **Desirable Skills:** Familiarity with Rocket.Chat, nodeJS, Experience with ReactJS. Must have database skills, ideally MongoDB.

### Ephemeral messages

* **Mentors:** [@kevin.aleman](https://open.rocket.chat/direct/EeTm6vJYv9KSiNwq9)
* **Description:** This project aims to create a kind of channel in which the messages sent will vanish after a configured amount of time. This would be a room \(channel\) setting, in which you can define how long the messages are going to last. Messages from here cannot be retrieved after its deletion and the deletion cannot be deactivated, just postponed.
* **Desirable skills:** Familiarity with JS Full Stack webapp development. Experience with MongoDB and PM2 are ideal.

### Voice Channels

* **Mentors**: [@douglas.fabris](https://open.rocket.chat/direct/douglas.fabris), [@pierre.lehnen](https://open.rocket.chat/direct/pierre.lehnen)
* **Description**: The ability to create voice channels would allow users to quickly enter and leave pre-existing voice calls from Rocket.Chat's own UI, enabling a more practical usage of audio features for team collaboration. This project would add the UI elements and integrate them with an established audio platform to handle the calls.
* **Desirable Skills**: Familiarity with nodeJS fullstack webapp development.

### Decentralised Storage Integration

* **Mentors:** [@murtaza.patrawala](https://open.rocket.chat/direct/murtaza.patrawala) 
* **Description:** The goal of this project is to add new decentralised P2P based storage providers within [Rocket.Chat](http://rocket.Chat). Decentralised solutions not only provide more security, but they are also more cost effective. Some example of decentralised solutions include Filecoin, Saicoin, Storj, etc. Via this project, the files uploaded on Rocket.Chat should be stored on the decentralised network and the uploaded files should be accessible within Rocket.Chat.
* **Desirable Skills**: Familiarity with nodeJS fullstack webapp development. Experience with [Rocket.Chat](http://rocket.Chat) codebase and/or with any of the decentralised solution providers is ideal.

### Omnichannel: Help Center

* **Mentors:** [@murtaza.patrawala](https://open.rocket.chat/direct/murtaza.patrawala)
* **Description:** This project aims to add a Help Center within the Omnichannel Domain of Rocket.Chat. This will allow the creation of content that will answer people’s simple questions faster. The focus of this project would be to provide an interface to create content \(similar to how we can create an article on a Blogging platform like Medium\) and then make allow users/agents and customers to search within these contents which will quickly answer their questions. This project will add a self-serve support layer that will help with scaling by automatically resolving repetitive questions with the help of such articles and guides, leading to faster answers for the customers and fewer questions to users/agents.
* **Desirable Skills**: Familiarity with nodeJS fullstack webapp development. Experience with ReactJS is ideal.

### Apps-Engine E2E Testing

* **Mentors:** [@lolimay](https://open.rocket.chat/direct/shiqi.mei)
* **Description:** This project aims to improve Apps-Engine end-to-end testing by adding more testing cases. The Apps-Engine APIs should be covered as many as possible to ensure that APIs tested are working. This project requires you to work across multiple repos \([Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) and [Apps-Engine](https://github.com/RocketChat/Rocket.Chat.Apps-engine)\). Checkout these links for the context:
* * [Apps-Engine E2E Testing GitHub Workflow](https://github.com/RocketChat/Rocket.Chat.Apps-engine/pull/366)
* * [Apps-Engine E2E Testing Folder on Rocket.Chat side](https://github.com/RocketChat/Rocket.Chat/tree/develop/tests/end-to-end/apps)
* **Desirable Skills:** Familiarity with JavaScript. Experience with TypeScript and end-to-end testing are better.

### Poll App Mega Extensions

* **Mentors:**  [@ramkumar.kb](https://open.rocket.chat/direct/ramkumar.kb), [@diego.sampaio](https://open.rocket.chat/direct/diego.sampaio)
* **Description:**  The[ poll app](https://github.com/RocketChat/rocket.chat.app-poll) already allows anyone to instantly create engaging rich interaction polls within any chat room. This project aims to expand its scope and capabilities in a **huge** way: making it a tool for enhancing participant's engagement with interactive quizzes / trivias / live-polls. Some initial ideas include:
* * Better bar-graph visualisation for the responses \(with a switch for anonymous responses - so 3 types: Open / Confidential / Mixed\)
* * Ability to add user options in the poll response and show the response of those responses in a visual way \(e.g. word-cloud\)
* * Ability to create different types of polls \(e.g. 1-to-5, Agree/Disagree, Overrated/Underrated\)
* * Ability to add emoticons on the reponse options
* * Ability to create `/poll live` or `/live-poll` feature - it has 2 parts \(prepare a set of questions before hand and retrieve it just before the live poll starts. During the live-poll a countdown timer for each question is shown and upon completion, the responses are shown visually\) a.k.a. multi-question version of the single poll feature
* * \(Stretch Goal\) Ability to download the `live-poll` response, once the poll is over
* * Enhance[ UIKit](https://docs.rocket.chat/apps-development/uikit) if needed, to meet the above goals
* **Desirable Skills:** The sky is _not even the limit_ for this project. Will need a hot-shot all round challenge-loving student already familiar with JavaScript, TypeScript, React,[ current poll-app codebase](https://github.com/sampaiodiego/rocket.chat.app-poll) and [Rocket.Chat + Fuselage codebase](https://github.com/RocketChat/Rocket.Chat.Fuselage).

### **Use Lingohub on mobile apps**

* **Mentors:** [@diego.mello](https://open.rocket.chat/direct/diego.mello)
* **Description:** Share Lingohub translation strings with the web client, so the same contributor is able to translate both frontend and mobile apps.
* **Desirable Skills:** Familiarity with React Native and Rocket.Chat codebase

### **Language Power Tools**

* **Mentors:** [@rodrigo.nascimento](https://open.rocket.chat/direct/rodrigo.nascimento)
* **Project repository:** [https://github.com/RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)
* **Desirable Skills:** JavaScript / TypeScript
* **Description:** Create internal scripts to extract translation strings from the source code and give some options:
  * Check if all strings are translated in the target languages \(en by default\)
  * List strings present in the target language that are not in the code anymore
  * Option to render a completion chart for all languages
  * Option to remove strings from all languages based on a target one
  * Option to import missing strings into the target language to easily add translations
  * Integrate the script on CI to block PR from merge if there are new strings without translations

### Introduce Video and Audio calls to LiveChat

* **Mentors**: [@rafaelferreira](https://open.rocket.chat/direct/rafaelferreira), [@murtaza.patrawala](https://open.rocket.chat/direct/murtaza.patrawala)
* **Description:** The outcome expected from this project is to support Video and Audio calls in one of the native Omnichannel entry points called [LiveChat](https://github.com/RocketChat/Rocket.Chat.Livechat). LiveChat is a small and lightweight application designed to provide B2C communication between Agents and website visitors and is developed with [PreactJS](https://preactjs.com/), which means that any ReactJS developer will be able to implement the new features using [WebRTC](https://webrtc.org/) framework.
* **Desirable Skills**: Experience with JavaScript, ReactJS and WebRTC and WebSocket API.

### **App: Speech-to-Text**

* **Mentors:** [@marcelo.schmidt](https://open.rocket.chat/marceloschmidt)
* **Description:** This project aims to save a text version of an audio in the file metadata. This should be done server-side upon receiving the audio.
* **Desirable Skills**: Familiarity with JavaScript and TypeScript. Knowledge in how to build Rocket.Chat Apps is a plus.

### Channel Discovery

* **Mentors:** [@martin.schoeler](https://open.rocket.chat/direct/martin.schoeler)
* **Description:** The idea is to add a page where you can discover new channels. This will allow users to find channels based on: Total number of users, number of messages, search for specific topics, if the channel has been trending lately, and any more ideas we can think of. The whole idea of this project is to improve communities using Rocket.Chat and add a sprinkle of social aspect to Rocket.Chat.
* **Desirable Skills**: Familiarity with JavaScript, React and TypeScript. Knowledge in how to use Rocket.Chat fuselage is a plus

### Task Channels

* **Mentors**: [@pierre.lehnen](https://open.rocket.chat/direct/pierre.lehnen), [@guilherme.gazzo](https://open.rocket.chat/direct/guilherme.gazzo)
* **Description**: This project aims to create a new kind of channel where instead of sending messages, users would be able to create task cards with several custom fields. Those tasks would then work as a thread header, allowing comments in the format of a thread. The basic additional information for a task message would be an assigned user and a status. The channel header should also list options to filter the tasks by those fields.
* **Desirable Skills**: Familiarity with nodeJS fullstack webapp development. Experience with ReacJS is ideal.

### Image **Manipulation:** Editing/Cropping on Upload

* **Mentors:** [@gabriel.henriques](https://open.rocket.chat/direct/gabriel.henriques)
* **Description:** This project aims to improve the Image upload feature, allowing users to crop images before sending it to a channel. Adding text and the possibility to draw on images could be implemented too.
* **Desirable Skills:** Experience with Javascript and React + Hooks. TypeScript is a plus.

### App: Bad-Words Filter

* **Mentors:** [@marcelo.schmidt](https://open.rocket.chat/marceloschmidt) and [@douglas.gubert](https://open.rocket.chat/direct/douglas.gubert)
* **Description:** Rocket.Chat currently uses a third-party package to filter bad words. This poses a few problems, such as having to update the package every so often, having to check which words have been added or excluded in newer versions and deciding if we would like to keep blocking or allowing words. This project is for building an App that can be enabled in our Marketplace that will filter out a list of default bad words but will allow admins to add or delete words from that list. The app will need to cover the following requirements:
  * Create a UI for managing the App settings
  * Load a list of words from a URL
  * Add/Remove words from a list
  * Add/Remove channels where the bad words filtering is enabled \(with a toggle for "all channels"\)
  * Provide statistics on blocked words and offending users
  * Automatically deactivate users that go above a certain threshold
* **Desirable Skills**: Familiarity with JavaScript and TypeScript. Knowledge in how to build Rocket.Chat Apps is a plus.

### **Houston Improvements - Rocket.Chat release/changelog generator**

* **Mentors:** [@rodrigo.nascimento](https://open.rocket.chat/direct/rodrigo.nascimento)
* **Project repository:**[ \_\*\*\_https://github.com/RocketChat/Rocket.Chat.Houston](https://github.com/RocketChat/Rocket.Chat.Houston)
* **Desirable Skills:** TypeScript, Git, Shell
* **Description:** Houston is the CLI tooling we use to release new versions of Rocket.Chat and generate our changelogs from merged pull requests. We want to:
  * Rewrite the tooling in TypeScript
  * Accept a new format of PR titles \(conventional changelog\)
  * Add a validation system for PRs titles via GitHub Actions
  * Add tooling to preview the generated changelog for the PR
  * Add new top level of separation for product type \(like Enterprise and Community\) based on labels
  * Support dependent repositories to import their changelogs, for example, import the changelogs of apps engine

### Add a bundler to the Apps-Compiler

* **Mentors**: [@douglas.gubert ](https://open.rocket.chat/douglas.gubert)
* **Description**: Currently the Apps-Compiler package uses the bare TypeScript compiler to process apps' code and generate the JS version. This has some limitations, e.g. we can't "simply" bundle the whole app in a single file, we can't bundle npm packages, and so on. By changing this compiler into a proper bundler \(Webpack, Rollup, etc.\), we would have access to a richer ecosystem of tooling to handle the compilation process of Rocket.Chat Apps.
* **Desirable Skills**: JS/TS, familiarity with bundlers \(using them, not necessarily writing one\) would be interesting

### **Stop notifications and Notifications schedule**

* **Mentors:** [@rodrigo.nascimento](https://open.rocket.chat/direct/rodrigo.nascimento)
* **Project repository:** [https://github.com/RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)
* **Desirable Skills:** JavaScript/TypeScript, React, React Native,, Rocket.Chat codebase
* **Description:** This feature consists of two new options for the end-users:
  * **Stop Notifications:** A list of options to stop notifications for a certain time \(30min, 1h, 2h, 24h, custom date/hour\).
  * **Notifications Schedule:** Option to configure \(in user's settings\) the availability time where notifications will be sent:
    * With the option to configure for every day from X time to Y time
    * With the option to configure for weekdays from X time to Y time
    * With the option to configure X and Y times for each day of the week manually
    * The same settings should be available for the workspace admin to configure a default value for all users
    * The implementation should cover the web and mobile applications

### **Support share location on mobile apps**

* **Mentors:** [@diego.mello](https://open.rocket.chat/direct/diego.mello)
* **Description:** Add support for sharing a current location from mobile apps. Mobile apps are going to fetch the current location and add coordinates as a message. Mobile apps are also going to show the appropriate map image.
* **Desirable Skills:** Familiarity with React Native and Rocket.Chat codebase

### **New statuses for user actions/events \(Typing 2.0\)**

* **Mentors:** [@rodrigo.nascimento](https://open.rocket.chat/direct/rodrigo.nascimento), [@guilherme.gazzo](https://open.rocket.chat/direct/guilherme.gazzo)
* **Project repository:** [https://github.com/RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)
* **Desirable Skills:** JavaScript/TypeScript, React, React Native,, Rocket.Chat codebase
* **Description:** Improve the current \`Typing\` functionality to support, on web and mobile applications, two new things:
  * New properties to allow define new actions like \`recording\` or \`uploading\`, changing the current implementations to support and send those 2 new events and improve the end-user experience
  * Support specifies a context for the typing, allowing it to be shown inside a thread when users are typing in that context instead of in the main room.

### App: Global Translation

* **Mentors:** [@marcelo.schmidt](https://open.rocket.chat/marceloschmidt)
* **Description:** Rocket.Chat currently uses a package to provide message translations. This project aims to build that funcionality on an app, thus reducing the codebase of Rocket.Chat and allowing for easier configuration.
* **Desirable Skills**: Familiarity with JavaScript and TypeScript. Knowledge in how to build Rocket.Chat Apps is a plus.

### Community Collaboration Platform: Improvements

* **Mentors:**  [@sing.li](https://open.rocket.chat/direct/sing.li) [@murtaza.patrawala](https://open.rocket.chat/direct/murtaza.patrawala)
* **Description:** This is a chat and networking platform that helps to manage, grow and connect communities through messaging, content and discovery. The goal of this platform is to provide an easier way to collaborate over any Github, Gitlab and others repository hosting services. The focus will be to add new features like User Management, Administration Module, etc - also improve the current features which add more advantage and provide a friction-less experience to all the fellow developers.
* **Desirable Skills**: Familiarity with nodeJS fullstack webapp development. Experience with ReactJS and ExpressJS is ideal.

### Community Collaboration Platform: Mobile app

* **Mentors:**  [@sing.li](https://open.rocket.chat/direct/sing.li) [@murtaza.patrawala](https://open.rocket.chat/direct/murtaza.patrawala)
* **Description:** This is a chat and networking platform that helps to manage, grow and connect communities through messaging, content and discovery. The goal of this platform is to provide an easier way to collaborate over any Github, Gitlab and others repository hosting services. The focus here will be to create a cross-platform mobile app for this platform
* **Desirable Skills**: Familiarity with React Native, iOS and Android development.

### **UiKit Playground**

* **Mentors:** [@guilherme.gazzo](https://open.rocket.chat/direct/guilherme.gazzo), [@tasso.evangelista](https://open.rocket.chat/direct/tasso.evangelista)
* **Description:** Develop an application/playground that allows developers to test UiKit Blocks and Interactions. Should allow developers to generate code used by Rocket.Chat apps and edit the content to preview the result
* **Desirable Skills:** JavaScript/TypeScript

### **Omnichannel: Livechat Widget Accessible Mode**

* **Mentors:** [@rafaelferreira](https://open.rocket.chat/direct/rafaelferreira)
* **Project repository:** [https://github.com/RocketChat/Rocket.Chat.Livechat](https://github.com/RocketChat/Rocket.Chat.Livechat)
* **Desirable Skills:** Accessibility, React, SCSS
* **Description:** Omnichannel users, including users with visual disabilities, must be able to perceive content at the Livechat widget. The main idea here is to give some options to Livechat widget users to active "Accessible mode", which means:
  * High contrast colors.
  * Icons accompanying text.
  * Bigger highlight over selected text or cursor active/hover using "tab" key.
  * Show a better solution when an Agent is typing.
  * Etc

### **Matrix Interoperability : migrating to native support**

* **Mentors:**  [@sing.li](https://open.rocket.chat/direct/sing.li) [@gabriel.engel](https://open.rocket.chat/direct/gabriel.engel)
* **Desirable Skills:** Familiarity with matrix.org protocol; skilled in rust, golang, and TypeScript development 
* **Description:** Explore and improve existing Rocket.Chat to Matrix.org bridge\(s\)   Investigate current state of development in dendrite and hydrogen.  Start the work on migrating to  native support of the matrix protocols.

### **Big Blue Button : replace embedded chat with Rocket.Chat**

* **Mentors:**  [@sing.li](https://open.rocket.chat/direct/sing.li) [@gabriel.engel](https://open.rocket.chat/direct/gabriel.engel)
* **Desirable Skills:** Familiarity with Big Blue Button; skilled in JavaScript, nodeJS and Meteor development 
* **Description:**  The embedded chat in Big Blue Button is already a Meteor based chat with similar structure to Rocket.Chat.  However, other components in Big Blue Button also depends on the same Meteor stack working against the same MongoDB instance for proper operations. This project aims to create the ability to integrate an existing Rocket.Chat server into Big Blue Button, replacing the existing embedded chat component.

