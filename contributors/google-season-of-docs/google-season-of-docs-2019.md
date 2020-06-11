---
permalink: /contributing/google-season-of-docs-2019/
redirect_from:
  - /contributing/google-season-of-docs/
---

# Google Season of Docs 2019

[![Google Season of Docs 2019](https://github.com/Sing-Li/bbug/raw/master/images/gsodlogo.png)](https://developers.google.com/season-of-docs/)

[Season of Docs](https://g.co/seasonofdocs) is Google's annual program that fosters collaboration between open source projects and technical writers. It's happening for the first time in 2019!

Season of Docs is a unique program that pairs technical writers with open source mentors to introduce the technical writer to an open source community and provide guidance while the writer works on a real-world open source project. The technical writer ,in turn, provides documentation expertise to the open source organization.

Projects can cover a wide range of fields including Cloud computing, operating systems, graphics, medicine, programming languages, robotics, science, security and many more. Season of Docs is not a recruiting program or an internship but it does provide invaluable experience and looks great on a resume!

This year's Season of Docs is a pilot that accepts only a limited number of applications, so don't wait to the last minute to prepare!

## How to apply

Application for technical writers is now closed for the 2019 season. See [Google Season of Docs 2019 timeline](https://developers.google.com/season-of-docs/docs/timeline) for more details.

Write and submit your proposal now! Check out our [list of ideas](https://docs.rocket.chat/contributing/google-season-of-docs-2019/#project-ideas) for some inspiration.

Meet the mentors and fellow writers for GSoD 2019 and get some real-time help on next steps, please visit our 24 x 7 community server channel:

[https://open.rocket.chat/channel/gsod2019](https://open.rocket.chat/channel/gsod2019)

For offline discussions, we have a discussion forum:

[https://forums.rocket.chat/c/gsod/gsod2019](https://forums.rocket.chat/c/gsod/gsod2019)

If you have questions and prefer email, please write us at: gsod+2019@rocket.chat

#### Update on July 10, 2019

Application for technical writers has closed. During the past month, technical writers have continued to approach us regarding project details. Several mentors have engaged with their prospective writer\(s\) in assisting with proposal; and several writers have already started to contribute \(typos and small fixes\) to our docs. We have received a total of TWENTY THREE proposals \(one was a submission to the wrong org\), and have started the evaluation process with the project mentors. Of the technical writers who have reached out to us, we continue to engage with them and explore project details and interim contributions. We plan to finalize our own selections by July 18th and submit them prior to the final selections deadline.

#### Update on May 28, 2019

Application for technical writers has opened. Please use this [form](https://forms.gle/Fxr2nW4TCiyESHbo8) to apply. Response during this exploration month has been generally positive. Several project teams are already engaging with interested writers to discuss open source work in general and details of their projects in particular. Some of the writers have already warmed up and started to contribute documentation fix PRs to our repositories. We have created a [call-to-action blog](https://rocket.chat/2019/05/21/rocket-chat-in-season-of-docs/) for our participation in the program. Mentors of projects with interested writers have started to assist them in creating their project proposals.

## Project Ideas

### Application Programming Interfaces \(APIs\) Documentation

* **Mentors**: @martin.schoeler, @marcos.defendi
* **Description**: When developing applications, developers can use a rich set of Application Programming Interfaces \(APIs\) offered by Rocket.Chat to control every aspect of Rocket.Chat's operation. The documentation for this set of APIs mixes automated generation with hand-crafted usage descriptions, application scenarios, and coding examples. By September 2019, Rocket.Chat should have a "playground" that makes this documentation comes alive. Developers will be able to visit the API page in the "playground" and actually interact with the API directly through the documentation page. We already have a hand-crafted set of API docs that is maintained by our community but they tend to become obsolete as API changes. This project will replace the legacy documentation. You will work with two mentors specialized in API coding and documentation generation for this project.
* In this project, we will **not** be creating the playground or the docs generation systems, that will be handled by the Google Summer of Code student \([See the GSoC Project](google-season-of-docs-2019.md)\). Our API docs were written without the idea of a playground to test it. The objective of this project is to improve the structure and wording of the API docs to reflect the new playground system.
* **Related Material**: [Our existing REST API documentation](https://docs.rocket.chat/developer-guides/rest-api/)

### Administration/Settings Documentation

* **Mentors**: @martin.schoeler, @marcos.defendi
* **Description**: Given the huge amount of features and customizability of Rocket.Chat we currently lack documentation for a great part of our admin section. This project aims at the completion of the administration documentation, and it can be broken down in two parts, the configuration, and the admin tools part:
* **Configuration**: We need to complete our settings, fortunately, we already have the skeleton for that documentation on [This Pull Request](https://github.com/RocketChat/docs/pull/1095) but will also like a professional opinion on this structure, or help to improve it. We can _cherry-pick_ each file, so no need to work on all articles at once.
* **Admin Tools**: In the administration section we have a set of tools to help admins manage their server, things like user management, permission control, mailer, etc...
* **Related Material**: [Our existing Admin documentation](https://docs.rocket.chat/administrator-guides/)

### Security documentation

* **Mentors**: @markus.kirsch @rodrigok
* **Description**: We at Rocket.Chat take pride in taking extra efforts in providing a true open source and secure messaging solution. Transparency and trust are key features of our products. This is an exciting opportunity to work with our team of experts to create a comprehensive documentation of the security features of Rocket.Chat and create implementation guides for configuring Rocket.Chat to follow compliance regimes such as GDPR, HIPAA and NIST. The focus is on creating a new set of documentation based on the existing material and new features that since have been deployed.
* **Related Material**: [Rocket.Chat Security Overview](https://docs.rocket.chat/contributing/security/), [Rocket.Chat GDPR features](https://rocket.chat/2018/05/20/gdpr/)

### Android Kotlin Software Development Kit \(Kotlin SDK\) documentation

* **Mentors**: @filipe.brito, @rafael.kellermann
* **Description**: Modern Android mobile developers typically use Kotlin to create their mobile apps. To make developing Rocket.Chat integrated and compatible Android apps simpler, Rocket.Chat has created a comprehensive Software Development Kit \(SDK\) in Kotlin - which can be used on Kotlin or Java applications due to its interoperability. This project will involve detailed documentation for the SDK features, application scenarios, and APIs. This documentation does not exist yet, you will be working from scratch on this. You will be working closely with Rocket.Chat mobile leads, the developers who actually coded the SDK, during your term.
* **Related Material**: [The Kotlin SDK](https://github.com/RocketChat/Rocket.Chat.Kotlin.SDK)

### The Bot Docs

* **Mentors**: @reetp @sing.li
* **Description**: Working with core developers and the best open source community advocates in the Rocket.Chat community this is your opportunity to join us and dive into the exciting world of Chatbots and Machine Learning \(ML\). Bots are tomorrows technology, today. Automating and simplifying life for both user and provider, the demand for this technology and how to develop and deploy is huge. Rocket.Chat has integrated support for bots created via different programming languages and deployment methods to leverage the power of Rocket.Chat. This includes leading services and frameworks such as Dialogflow, Botpress, RASA, Botkit, hubot, and bbot. Documenting this in a clear and precise manner, from bot development and usage through to more advanced deployments, is a huge task and vital to Rocket.Chat and its users.  We do already have scattered docs, in the form of developers READMEs, for the subprojects.  A major part of this project is to better organize, unify, and improve them for end-user consumption.
* **Related Material**:  BOT projects we have ongoing that needs to be unified in the new documentation. [alexa](https://github.com/RocketChat/alexa-rocketchat), [hubot](https://github.com/RocketChat/hubot-rocketchat), [chatops-gitsy](https://github.com/RocketChat/hubot-gitsy), [botpress](https://github.com/RocketChat/botpress-channel-rocketchat), [rasa](https://github.com/RocketChat/rasa-kick-starter), [bbot](http://bbot.chat/), [botkit](https://github.com/RocketChat/botkit-rocketchat-connector), [BOTswana](https://github.com/RocketChat/botswana-snap), and [Bot in Rocket.Chat overview plus roadmap](https://rocket.chat/bots)

### Project leadership directions and roadmaps

* **Mentors**: @gabriel.engel  @marcelo.schmidt
* **Description**: Transparency is a cornerstone value of many open source projects.  Rocket.Chat aims to support this value by offering a set of frequently updated project directional documents - including roadmaps, visionary, strategy and white papers.  These will incorporate input from the wider community through interactive feedback as well as regular reviews. This documentation currently exists in bits and pieces, but is not in an easy to digest/understand format.  A system will be implemented to present this content in various consumable formats. You will be working with Rocket.Chat's leadership team in formulating and authoring of these documents.
* **Related Material**:  [Project roadmap on our Github repository](https://github.com/RocketChat/Rocket.Chat/projects/30), [Livechat component roadmap](https://github.com/orgs/RocketChat/projects/20)

### Rocket.Chat Experimental \(React Native client\) documentation

* **Mentors**: @diego.mello @renato.becker
* **Description**: React Native is one of the hottest frameworks nowadays. It allows developers to write fully native mobile applications using only Javascript and inherits all the ease of development features from the ReactJS community. At Rocket.Chat we have our own client implemented using RN and it's available on App Store and Google Play as Rocket.Chat Experimental. This project aims to build user documentation for all the features we have implemented so far. This documentation does not exist today. You will be working with our lead React Native developer during this project.
* **Related Material**:  [Rocket.Chat Experimental](https://github.com/RocketChat/Rocket.Chat.ReactNative), [Rocket.Chat Experimental on App Store](https://itunes.apple.com/br/app/rocket-chat-experimental/id1272915472?mt=8), [Rocket.Chat Experimental on Google Play](https://play.google.com/store/apps/details?id=chat.rocket.reactnative)

### Apps-Engine guides

* **Mentors**: @d-gubert @rodrigok
* **Description**: The Apps-Engine is a framework that enables developers to integrate new functionality to Rocket.Chat without having to deep dive in the code base, and makes it possible to distribute your Rocket.Chat Apps to the wide community of users! And in order to improve the developer experience when making those apps, we need to improve our docs so they guide people smoothly through the available features. You will be working with Rocket.Chat Apps leads to extend the guides and docs that already exist, focusing on the DX of the community.
* **Related Material**: [Getting Started with Rocket.Chat Apps](https://docs.rocket.chat/developer-guides/developing-apps/getting-started/), [Rocket.Chat Apps-Engine API Reference](https://rocketchat.github.io/Rocket.Chat.Apps-engine/)

### JS SDK documentation

* **Mentors**: @rodrigok, @ggazzo
* **Description**: The JS SDK is a library of code written in JS that offers an easier interface to communicate with a Rocket.Chat server providing APIs to be called from a JS code that executes commands on the server, like send a message, or retrieve data, like get the list of rooms, abstracting all the logic necessary to handle the communication with the server side. You will be working with Rocket.Chat backend and frontend leads to improve the documentation of all JS SDK methods, from the initial setup of how to get the library and install it to the list of methods, how to use them and the expected returned data. Current documentation is under the SDK repository README.
* **Related Material**: [JS SDK repository](https://github.com/RocketChat/Rocket.Chat.js.SDK), [Mention in BOT's Docs](https://docs.rocket.chat/bots/bots-architecture/#rocketchat-js-sdk), [NPM Package](https://www.npmjs.com/package/@rocket.chat/sdk), [Documentation](https://github.com/RocketChat/Rocket.Chat.js.SDK/blob/master/README.md)

