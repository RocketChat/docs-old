# Google Summer of Code 2021

[![Google Summer of Code 2020](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://summerofcode.withgoogle.com/)

## How to apply

Rocket.Chat intends to apply and become a mentoring organization once again for the 2021 program.

Student application for GSoC 2021 will begin March 29, 2021.

In the meantime, any student interested in joining Rocket.Chat for the GSoC 2021 program is encouraged to visit our 24 x 7 GSoC 2021 community channel:

[https://open.rocket.chat/channel/gsoc2021](https://open.rocket.chat/channel/gsoc2021)

Please see [Official GSoC 2021 schedule ](https://developers.google.com/open-source/gsoc/timeline)for more timeline details.

## About GSoC 2021

For project ideas, check out our growing [list of ideas ](google-summer-of-code-2021.md#project-ideas)for some inspiration.

Come meet our global community of potential mentors and students for GSoC 2021 and get some real-time help on next steps, please visit our 24 x 7 community server channel:

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

### Voice Channels

* **Mentors**: [@douglas.fabris](https://open.rocket.chat/direct/douglas.fabris), [@pierre.lehnen](https://open.rocket.chat/direct/pierre.lehnen)
* **Description**: The ability to create voice channels would allow users to quickly enter and leave pre-existing voice calls from Rocket.Chat's own UI, enabling a more practical usage of audio features for team collaboration. This project would add the UI elements and integrate them with an established audio platform to handle the calls.
* **Desirable Skills**: Familiarity with nodeJS fullstack webapp development.

### Task Channels

* **Mentors**: [@pierre.lehnen](https://open.rocket.chat/direct/pierre.lehnen), [@guilherme.gazzo](https://open.rocket.chat/direct/guilherme.gazzo)
* **Description**: This project aims to create a new kind of channel where instead of sending messages, users would be able to create task cards with several custom fields. Those tasks would then work as a thread header, allowing comments in the format of a thread. The basic additional information for a task message would be an assigned user and a status. The channel header should also list options to filter the tasks by those fields.
* **Desirable Skills**: Familiarity with nodeJS fullstack webapp development. Experience with ReacJS is ideal.

### Ephemeral messages

* **Mentors:** [**@kevin.aleman**](https://open.rocket.chat/direct/EeTm6vJYv9KSiNwq9)
* **Description:** This project aims to create a kind of channel in which the messages sent will vanish after a configured amount of time. This would be a room \(channel\) setting, in which you can define how long the messages are going to last. Messages from here cannot be retrieved after its deletion and the deletion cannot be deactivated, just postponed.
* **Desirable skills:** Familiarity with JS Full Stack webapp development. Experience with MongoDB and PM2 are ideal.

### Image Editing/Cropping on Upload

* **Mentors:** [@gabriel.henriques](https://open.rocket.chat/direct/gabriel.henriques)
* **Description:** This project aims to improve the Image upload feature, allowing users to crop images before sending it to a channel. Adding text and the possibility to draw on images could be implemented too.
* **Desirable Skills:** Experience with Javascript and React + Hooks. TypeScript is a plus.

### Apps-Engine E2E Testing

* **Mentors:** [@lolimay](https://open.rocket.chat/direct/shiqi.mei)
* **Description:** This project aims to improve Apps-Engine end-to-end testing by adding more testing cases. The Apps-Engine APIs should be covered as many as possible to ensure that APIs tested are working. This project requires you to work across multiple repos \([Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) and [Apps-Engine](https://github.com/RocketChat/Rocket.Chat.Apps-engine)\). Checkout these links for the context:
* * [Apps-Engine E2E Testing GitHub Workflow](https://github.com/RocketChat/Rocket.Chat.Apps-engine/pull/366)
* * [Apps-Engine E2E Testing Folder on Rocket.Chat side](https://github.com/RocketChat/Rocket.Chat/tree/develop/tests/end-to-end/apps)
* **Desirable Skills:** Familiarity with JavaScript. Experience with TypeScript and end-to-end testing are better.

### App: Bad-Words Filter

* **Mentors:** [@marcelo.schmidt](https://open.rocket.chat/marceloschmidt)\*\*\*\*
* **Description:** Rocket.Chat currently uses a third-party package to filter bad words. This poses a few problems, such as having to update the package every so often, having to check which words have been added or excluded in newer versions and deciding if we would like to keep blocking or allowing words. This project is for building an App that can be enabled in our Marketplace that will filter out a list of default bad words but will allow admins to add or delete words from that list.  _\*\*_
* **Desirable Skills**: Familiarity with JavaScript and TypeScript. Knowledge in how to build Rocket.Chat Apps is a plus.

### **App: Speech-to-Text**

* **Mentors:** [@marcelo.schmidt](https://open.rocket.chat/marceloschmidt)\*\*\*\*
* **Description:** This project aims to save a text version of an audio in the file metadata. This should be done server-side upon receiving the audio.
* **Desirable Skills**: Familiarity with JavaScript and TypeScript. Knowledge in how to build Rocket.Chat Apps is a plus.

### App: Global Translation

* **Mentors:** [@marcelo.schmidt](https://open.rocket.chat/marceloschmidt)\*\*\*\*
* **Description:** Rocket.Chat currently uses a package to provide message translations. This project aims to build that funcionality on an app, thus reducing the codebase of Rocket.Chat and allowing for easier configuration.
* **Desirable Skills**: Familiarity with JavaScript and TypeScript. Knowledge in how to build Rocket.Chat Apps is a plus.

### Channel Discovery

* **Mentors:** [**@martin.schoeler**](https://open.rocket.chat/direct/martin.schoeler)\*\*\*\*
* **Description:** The idea is to add a page where you can discover new channels. This will allow users to find channels based on: Total number of users, number of messages, search for specific topics, if the channel has been trending lately, and any more ideas we can think of. The whole idea of this project is to improve communities using Rocket.Chat and add a sprinkle of social aspect to Rocket.Chat.
* **Desirable Skills**: Familiarity with JavaScript, React and TypeScript. Knowledge in how to use Rocket.Chat fuselage is a plus

### Introduce Video and Audio calls to LiveChat

* **Mentors**: [@rafaelferreira](https://open.rocket.chat/direct/rafaelferreira), [@murtaza.patrawala](https://open.rocket.chat/direct/murtaza.patrawala)
* **Description:** The outcome expected from this project is to support Video and Audio calls in one of the native Omnichannel entry points called [LiveChat](https://github.com/RocketChat/Rocket.Chat.Livechat). LiveChat is a small and lightweight application designed to provide B2C communication between Agents and website visitors and is developed with [PreactJS](https://preactjs.com/), which means that any ReactJS developer will be able to implement the new features using [WebRTC](https://webrtc.org/) framework.
* **Desirable Skills**: Experience with JavaScript, ReactJS and WebRTC and WebSocket API.

### **Houston Improvements - Rocket.Chat release/changelog generator**

* **Mentors:** [@rodrigo.nascimento](https://open.rocket.chat/direct/rodrigo.nascimento)
* **Project repository:**[ ****https://github.com/RocketChat/Rocket.Chat.Houston](https://github.com/RocketChat/Rocket.Chat.Houston)
* **Desirable Skills:** TypeScript, Git, Shell
* **Description:** Huston is the CLI tooling we use to release new versions of Rocket.Chat and generate our changelogs from merged pull requests. We want to:
  * Rewrite the tooling in TypeScript;
  * Accept a new format of PR titles \(conventional changelog\);
  * Add a validation system for PRs titles via GitHub Actions;
  * Add tooling to preview the generated changelog for the PR
  * Add new top level of separation for product type \(like Enterprise and Community\) based on labels
  * Support dependent repositories to import their changelogs, for example, import the changelogs of apps engine

### **Language tools**

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

