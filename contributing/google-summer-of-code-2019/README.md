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

## Project Ideas

### Apple Watch & Siri Support

- **Mentors**: @thiago.sanchez
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.iOS>
- **Description**: Create an Apple Watch application that replicates the most basic features we have in our iOS mobile client, such like viewing the chat rooms and reading the messages. Let user ask Siri to read latest messages, send messages or respond to a message.
- **Desirable Skills**: Familiarity with WatchKit development on WatchOS & SiriKit. Ability to work in large multi-disciplinary teams.

### Implement Dark theme for Android app

- **Mentors**: @TBD
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.Android>
- **Description**: Themes are very popular and they’re part of what makes Android stand out from the rest. But the current Rocket Chat Android app lacks the feature of applying different themes.This project aims to bring different themes like dark mode and black mode into the existing Android Client.
- **Desirable Skills:**  Familiarity with Android development, specifically the Rocket.Chat.Android code base.

### Google Calendar Rocket.Chat App

- **Mentors**: @d-gubert, @rodrigok
- **Description**: The [Rocket.Chat Apps Engine](https://github.com/RocketChat/Rocket.Chat.Apps-engine) is here to make it easier to extend Rocket.Chat's functionality without having to deep dive into the code base. The goal of this project is to leverage the Apps Engine capabilities to create an integration with Google Calendar, using Slashcommands, custom API endpoints, custom Settings, etc.
- **Desirable Skills**: Familiarity with TypeScript.

### Service Accounts in Rocket.Chat

- **Mentors:** @karan.bedi, @bizzbyster
- **Description:** Adding the functionality of Service accounts to Rocket.Chat. A service account is an account owned by a User (owner), having basic profile (username, avatar, description etc.). If any other User (initiating user) creates a direct messages(DM) session with this service account, this chat session is carried to the owner of the service account. The owner can then reply to this chat session, but to the initiating user it would seem that the reply is coming from the service account. An authorised user should be able to create service accounts, transfer the ownership of the service account. Service accounts should be searchable, there should be a directory of service accounts. Also, users should be able to subscribe to service accounts, and a service account owner should be able to send broadcast messages to its subscribers. Automated tests should be written to cover the added functionality.
- **Desirable Skills:**  Familiarity with JavaScript development & Rocket.Chat code base

### Newsfeed

- **Mentors:** @bizzbyster, @karan.bedi
- **Description:** Adding the functionality of newsfeed, which is similar to a customised read-only channel for every user. Every user (follower) can follow other users (followed user). Posts from the followed user appears in the newsfeed of their followers. Posts are threaded discussions, started by the followed user in any public channel (origin channel), their follower can or cannot be a part of the origin channel but this post comes up in thier wall with a permalink to the orignal post in the origin channel. This helps in discovering new conversations. Interns are encouraged to propose entensions to this like wall, where a user can post threads that show up in thier follower's feed, status updates, etc. Automated tests should be written to cover the added functionality.
- **Desirable Skills:**  Familiarity with JavaScript development & Rocket.Chat code base

### Improved Test Automation in Rocket.Chat Repos

- **Mentors** @TBD
- **Description:** The goal of this project is to enhance the current test infrastructure in the RocketChat repos and pipelines.  Currently there is some very minimal junit testing that needs to be expanded, and no integration or system level tests, or infrastructure to support them.  This project could focus on one of the repos, possibly the Android code base, or all.  Once a test infrastructure and best practice is established, the goal is that no new code gets merged unless it has new tests that will be run at build time, and it passes all of the previous tests.

### Custom Notifications in Android

- **Mentors:** @TBD
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.Android>
- **Description:** The web client currently has the flexibility of customizing the notifications per channel but the Android client lacks this feature. This project aims to bring this feature into the Android client. Users would be able to mute specific channels and configure if they want to receive notifications when they are mentioned or for every notification, etc. Snooze functionality can also be implemented as an extension of this project.
- **Desirable Skills:**  Familiarity with Android development, specifically the Rocket.Chat.Android code base.

### iOS Voice Over Accessibility

- **Mentors:** @bruno.quadros
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.iOS>
- **Description:** VoiceOver is a gesture-based screen reader that lets you enjoy using iPhone even if you don’t see the screen. This is especially important for those with low or no vision. We want to make Rocket.Chat for everyone. A blind user should be able to easily add servers, change servers, read messages and send messages, as well as other additional functions such as editing profile and creating channels. Minimum acceptable scope is to be determined.
- **Desirable Skills:** We are looking for an undergraduate student who is familiar with team work, developing iOS Apps using UIKit and Swift, as well as writing maintainable code with Unit Tests and having some familiarity with Voice Over and Accessibility.

### Ability to Rebrand Android and iOS Apps

- **Mentors:** @TBD
- **Description:** Implement a way for administrators to rebrand their instances of rocketchat - product name, icons, colors, etc - for the android and ios apps, which currently do not support this. Besides adding this capability, another goal would be to make this branding across all the OS’s easy for an administrator that may not be too tech savvy. Ideally this would only be a few easy steps. Besides this ease-of-use improvement, this would also make it less likely that people will fork rocket in order to put in their own branding.
- **Desirable Skills:**  Familiarity with Android and/or iOS development, specifically the Rocket.Chat.Android/Rocket.Chat.iOS code bases.

### Ability to Rebrand Android and iOS Apps

- **Mentors:** @TBD
- **Description:** Implement a way for administrators to rebrand their instances of rocketchat - product name, icons, colors, etc - for the android and ios apps, which currently do not support this. Besides adding this capability, another goal would be to make this branding across all the OS’s easy for an administrator that may not be too tech savvy. Ideally this would only be a few easy steps. Besides this ease-of-use improvement, this would also make it less likely that people will fork rocket in order to put in their own branding.
- **Desirable Skills:**  Familiarity with Android and/or iOS development, specifically the Rocket.Chat.Android/Rocket.Chat.iOS code bases.

### Asana Rocket.Chat App

- **Mentors**: @d-gubert, @rodrigok
- **Description**: The [Rocket.Chat Apps Engine](https://github.com/RocketChat/Rocket.Chat.Apps-engine) is here to make it easier to extend Rocket.Chat's functionality without having to deep dive into the code base. The goal of this project is to leverage the Apps Engine capabilities to create an integration with Asana, using Slashcommands, custom API endpoints, custom Settings, etc.

### Admin webview page integration on React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: The goal of this project is an integration with Rocket.Chat's admin webview page when the user has access. This helps administrators to change their servers behaviour without the need to open Rocket.Chat on web or the mobile version on their devices.
- **Desirable Skills:**  Familiarity with React Native development and Rocket.Chat.ReactNative code base.

### Improve notifications on React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: For a better user experience, we need to group notifications by channel and allow the user to reply directly from the notification. Also, we should show notifications from other channels when the user is using the app.
- **Desirable Skills:**  Familiarity with React Native, iOS and Android development and Rocket.Chat.ReactNative code base.

### Implement theming on React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: Themes, like dark mode, are very popular and everywhere right now, but the Rocket.Chat React Native app lacks the feature of applying different themes. This project aims to bring different themes like dark mode and black mode into the existing React Native client.

### Implement iOS and Android share extension for React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: Share extensions enables iOS or Android OS to share content between apps. This project aims to implement a share extension for React Native client in order to let users to share data into Rocket.Chat from other apps. For example, an user should be able to send photos from camera roll to a Rocket.Chat channel without opening the RC client.
- **Desirable Skills:**  Familiarity with React Native, iOS and Android development and Rocket.Chat.ReactNative code base.

### Implement slash commands on React Native app (Rocket.Chat Experimental)

- **Mentors**: @diegolmello
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.ReactNative>
- **Description**: In mobile apps, users must be able to do what they want in fewer taps as possible. Slash commands are faster ways to trigger trivial actions, like invite an user or archive a channel, and it should be available on React Native client.
- **Desirable Skills:**  Familiarity with React Native development, specifically the Rocket.Chat.ReactNative code base.

### Allow Rocket.Chat Apps to use their own NPM modules

- **Mentors**: @d-gubert, @rodrigok
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.Apps-engine>
- **Description**: Currently the Rocket.Chat Apps Engine does not support that apps include their own `node_modules` dependencies, which can be very limiting in some use cases. The goal of this project is to modify our engine so that it can properly install and manage an app's dependencies, enabling app developers to unleash their full potential.
- **Desirable Skills**: Solid understanding of JavaScript and some familiarity with TypeScript. Familiarity with TypeScript's compiler is definitely a plus.

### Improve Rocket.Chat Auto-Translate feature

- **Mentors**: @marceloschmidt
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat/tree/develop/packages/rocketchat-autotranslate>
- **Description**: Rocket.Chat Auto-Translate features work by translating every incoming message into the user language of choice. We would like the student to make it possible for the package to also translate every message the user sends into another language. As a plus, if the student can implement a channel language setting, it would be superb.
- **Desirable Skills:**  Familiarity with Rocket.Chat development and meteor packages.

### Users Directory integration plus custom fields editor and search

- **Mentors**: @marceloschmidt
- **Description**: Rocket.Chat already allows for users to add custom fields through a setting that accepts a JSON. We would like to create an interface to manage these custom fields. Each custom field must be composed of label, type (one of predefined: string, number, picklist, money, etc.), and an option to determine if this field must be displayed on registration or not. On Users Directory, users must be able to select multiple records from the results and do one of the possible actions: add to existing channel or group and create new channel or group; if only one record is selected, it should also be possible to start a direct message with the selected user.
- **Desirable Skills**: Familiarity with Rocket.Chat development.

### Mattermost Data Importer ### 

- **Mentors**: TBD
- **Description**: Rocket.Chat is currently capable of importing data exported from Slack and HipChat, but there's no importer for Mattermost data. This is a valuable feature that the application is still missing. 

### iOS contacts sync, invites & dynamic links ### 

- **Mentors**: @TBD
- **Description**: In the Rocket.Chat iOS native application, addition the functionality of listing all the contacts of a user, syncing in background these contacts with the server using existing APIs and displaying the intersection with public accounts on server. Integrating the APIs to invite users not having an account (via email / phone) or inviting via others applications on phone. Supporting dynamic links in iOS app, allowing the creation of links such that when invited through one, after installation of the app it opens a DM with the inviter, etc. `These functionalities are already implemented for Android in a fork.`
- **Desirable Skills**: Familiarity with iOS development.

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
