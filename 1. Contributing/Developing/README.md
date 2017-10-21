# Developing

First of all, thank you for your interest in contributing to Rocket Chat.
If this is the first Open Source project you will contribute to,
we strongly suggest reading GitHub's excellent guide
["Contributing to Open Source"][contributing].


## Getting Started

You can find our projects [here](https://github.com/RocketChat).
Go to the Issues tab and when you find something you would like to work on
just comment on it and we will add an [In Progress label][progress_label].

**Installing on Linux:**

To run Rocket.Chat on Linux you must first have the following programs installed
  - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - [Meteor](https://www.meteor.com/install)
  
Once the above two prerequistes are installed opened the terminal and run the following:

- `git clone https://github.com/RocketChat/Rocket.Chat.git` (if you wish to clone your own 
fork then replace "/RocketChat/" with /YOUR REPOSITORY NAME HERE/)
- `cd Rocket.Chat` (Or the name of your repository)
- `meteor npm start` (Warning: It may take a while to build so please be patient)

When built, you will see a green box within the terminal with "Server Running" at the top.
This means that a Rocket.Chat server is running from your computer. To access the server navigate to `localhost:3000`

**Editing Rocket.Chat Files:**

Editing files is relatively simple. After you run git clone, the files from the repository are saved on
your computer. From the directory that it cloned to you can go here to edit or add to Rocket.Chat.
After you made any changes to Rocket.Chat files just use meteor npm start to attempt to rebuild your changes.

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
