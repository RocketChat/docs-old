---
permalink: /contributing/google-summer-of-code-2019/

redirect_from:
  - /contributing/google-summer-of-code/
---

[![Google Summer of Code 2019](https://github.com/Sing-Li/bbug/raw/master/images/gsoclogo.jpg)](https://summerofcode.withgoogle.com/)

# Google Summer of Code 2019

## How to apply

For current information on the 2019 program and general discussions, please see GSoC 2019 category on our discussion forums:

<https://forums.rocket.chat/c/gsoc/gsoc2019>

Meet the mentors and students for 2019, get some real-time help on next steps, please visit our community server Google Summer of Code 2018 discussion channel:

<https://open.rocket.chat/channel/gsoc2019>

If you have ideas and proposals that are not on our idea list, or if a mentor is not available, please email to:

   gsoc@rocket.chat

Interested students are also encouraged to interact with our contributor community on GitHub:

<https://github.com/RocketChat/Rocket.Chat>

## Project Ideas

### Improved Test Automation in Rocket.Chat Repos

- **Mentors** @TBD
- **Description:** The goal of this project is to enhance the current test infrastructure in the RocketChat repos and pipelines.  Currently there is some very minimal junit testing that needs to be expanded, and no integration or system level tests, or infrastructure to support them.  This project could focus on one of the repos, possibly the Android code base, or all.  Once a test infrastructure and best practice is established, the goal is that no new code gets merged unless it has new tests that will be run at build time, and it passes all of the previous tests.


### Service Accounts in Rocket.Chat

- **Mentors:** @karan.bedi, @bizzbyster
- **Description:** Adding the functionality of Service accounts to Rocket.Chat. A service account is an account owned by a User (owner), having basic profile (username, avatar, description etc.). If any other User (initiating user) creates a direct messages(DM) session with this service account, this chat session is carried to the owner of the service account. The owner can then reply to this chat session, but to the initiating user it would seem that the reply is coming from the service account. An authorised user should be able to create service accounts, transfer the ownership of the service account. Service accounts should be searchable, there should be a directory of service accounts. Also, users should be able to subscribe to service accounts, and a service account owner should be able to send broadcast messages to its subscribers. Automated tests should be written to cover the added functionality.
- **Desirable Skills:**  Familiarity with JavaScript development & Rocket.Chat code base

### iOS Voice Over Accessibility

- **Mentors:** @TBD
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.iOS>
- **Description:** VoiceOver is a gesture-based screen reader that lets you enjoy using iPhone even if you don’t see the screen. This is especially important for those with low or no vision. We want to make Rocket.Chat for everyone. A blind user should be able to easily add servers, change servers, read messages and send messages, as well as other additional functions such as editing profile and creating channels. Minimum acceptable scope is to be determined.
- **Desirable Skills:** We are looking for an undergraduate student who is familiar with team work, developing iOS Apps using UIKit and Swift, as well as writing maintainable code with Unit Tests and having some familiarity with Voice Over and Accessibility.

### Apple Watch & Siri Support

- **Mentors**: @TBD
- **Project repository**: <https://github.com/RocketChat/Rocket.Chat.iOS>
- **Description**: Create an Apple Watch application that replicates the most basic features we have in our iOS mobile client, such like viewing the chat rooms and reading the messages. Let user ask Siri to read latest messages, send messages or respond to a message.
- **Desirable Skills**: Familiarity with WatchKit development on WatchOS & SiriKit. Ability to work in large multi-disciplinary teams.

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
