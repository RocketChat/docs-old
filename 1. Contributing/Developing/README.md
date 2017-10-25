# Developing

First of all, thank you for your interest in contributing to Rocket Chat.
If this is the first Open Source project you will contribute to,
we strongly suggest reading GitHub's excellent guide
["Contributing to Open Source"][contributing].

## Getting Started

You can find our projects [here](https://github.com/RocketChat).
Go to the Issues tab and when you find something you would like to work on
just comment on it and we will add an [In Progress label][progress_label].

**Developing on Windows:**

To install on Windows please follow [this](https://docs.rocket.chat/installation/manual-installation/windows-server/) guide.

**Developing on Linux/Mac:**

To run Rocket.Chat for development on a Linux or a Mac you must first have the following programs installed:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Meteor](https://www.meteor.com/install)

Once the above two pre-requisites are installed opened the terminal and run the following:

- `git clone https://github.com/RocketChat/Rocket.Chat.git` (if you wish to clone your own fork, replace "/RocketChat/" with /YOUR REPOSITORY NAME HERE/)
- `cd Rocket.Chat` (or the name of your repository)
- `meteor npm start` (Warning: It may take a while to build so please be patient)

When the server is ready, you will see a green box within the terminal with "Server Running" at the top.

This means that a Rocket.Chat server is running from your computer. To access the server navigate to `localhost:3000`

**Editing Rocket.Chat Files:**

Editing files is relatively simple. After you run `git clone`, the files from the repository are saved on
your computer. You can go to the cloned repository folder and edit or add files to Rocket.Chat.
When you make changes to Rocket.Chat the server will automatically rebuild.

Sometimes changes can shut down the server, if that happens just run `meteor npm start` again.

**Where to Find Tasks:**

Want a simple task to get you started?
[We maintain a list of those][easy_label]!

Check our [developer guides](/6.%20Developer%20Guides/)
for more detailed information about pull requests, workflow and API docs.

## Priority Features and/or Bug fixes

If you want a feature or bug fix to be developed with a certain priority:

- [Contact us directly](https://rocket.chat/contact) to sponsor development
- [Add a bounty](https://www.bountysource.com/teams/rocketchat) to it

[contributing]: https://guides.github.com/activities/contributing-to-open-source/
[progress_label]: https://github.com/RocketChat/Rocket.Chat/labels/stat%3A%20in%20progress
[easy_label]: https://github.com/RocketChat/Rocket.Chat/labels/contrib%3A%20easy
