### How can I help?

### Contributing
First of all, thanks! It's really awesome that you're interested in contributing to Rocket Chat. If this is the first Open Source project you will contribute to, it'd be cool if you read GitHub's excellent guide ["Contributing to Open Source"](https://guides.github.com/activities/contributing-to-open-source/).  

#### Getting Started 
You can find Rocket.Chat repositories [here] (https://github.com/RocketChat). If you see some issue you are willing to work on, just comment on it. We will add an [In Progress label](https://github.com/RocketChat/Rocket.Chat/labels/stat%3A%20in%20progress), and that's it! Want a simple task to get you started? [We maintain a list of those](https://github.com/RocketChat/Rocket.Chat/labels/contrib%3A%20easy)!

**You don't have to write code to contribute!**  
We are always looking for help with creating or updating documentation, testing our apps (web, desktop and mobile) and reporting bugs. 

**Submitting Pull Requests**  
For contributions to code or documentation, you can fork the material, apply your contribution, and submit a [Pull Request] (https://help.github.com/articles/using-pull-requests/).

**Submitting Bug Reports**  
We appreciate any & all bug reports! Did you find a bug? Reporting is easy! Simply open an [Issue] (https://github.com/RocketChat/Rocket.Chat/issues) in the applicable repository.  
  
Here are some suggested things to include, when applicable, which may help us troubleshoot a problem:

* Operating System / Version / Architecture (64 bit?)
* Browser type & Version (if web app), any browser add-ons which may be involved (e.g. AdBlocker, NoScript, etc.)
* Desktop Environment (if desktop app) / Version    
* Rocket.Chat edition / Version or [build number] (/3.%20Support%2Frelease_version_info.md)
* Expected behavior vs. Actual behavior (In other words, the "bug")
* Can it be reproduced? If yes, how?
* Relevant snippets from your error logs
* Screen shots if helpful to communicate the problem

#### Rocket.Chat At-A-Glance
* [issues](https://github.com/RocketChat/Rocket.Chat/issues) categorize bug reports. 
* [labels](https://github.com/RocketChat/Rocket.Chat/labels) organize what we're doing. 
* [milestones](https://github.com/RocketChat/Rocket.Chat/milestones) control priority.

#### Need Priority Features or Bug fixes?   
You can place a bounty on an issue you care about: https://www.bountysource.com/teams/rocketchat

### Promoting Rocket.Chat
If you are not a developer (or even if you are), you can still contribute to the project, a lot, by helping us promote it. As we are a free open source project, the community is our most important asset, so here are some ways that you can help the project continue to grow.

**Please use this as a to-do list, as they are important**  

#### Follow us 

Please follow us on as many social networks as you can:

* Facebook - https://www.facebook.com/RocketChatApp
* Twitter - https://twitter.com/RocketChatApp
* Google+ - https://plus.google.com/+RocketChatApp
* CrunchBase - https://www.crunchbase.com/organization/rocket-chat
* Angel.co - https://angel.co/rocket-chat
* LinkedIn - https://www.linkedin.com/company/rocket-chat

#### Vote, recommend, favorite and star us

And vote for us on all these various polls and contests:

* GitHub - https://github.com/RocketChat/Rocket.Chat
* ProductHunt - http://www.producthunt.com/tech/rocket-chat
* Bitnami - https://bitnami.com/contest/applications/13576/vote/now
* Slant - http://www.slant.co/topics/3346/~what-are-the-best-on-site-alternatives-to-slack
* StackShare - http://stackshare.io/stackups/lets-chat-vs-rocketchat-vs-mattermost
* Reddit - https://redd.it/3hbdrc
* StackExchange - http://softwarerecs.stackexchange.com/questions/18754/
* DockerHub - https://hub.docker.com/_/rocket.chat/
* AlternativeTo - https://alternativeto.net/software/rocket-chat/

#### Blog about us

Here are some nice blog posts about our project for you to get some inspiration:

* http://www.thehacktoday.com/how-to-install-rocket-chat-make-your-own-chatting-website
* https://sameroom.io/blog/self-hosted-team-chat-options-and-alternatives
* http://blog.geekgonecrazy.com/2015/09/19/osx-setup/#rocketchat
* https://snowulf.com/2015/09/25/why-slack-when-you-can-rocket-chat/
* http://liminality.xyz/self-hosting/

#### Presentations

* http://slides.com/gabrielengel/meteordevshop#/

#### Deployed in Websites:
* Investment and Trading Chat Room http://seekingoptions.com

### Reporting Security Issues
First of all, thanks in advance for taking the time and effort help us improve the security of Rocket.Chat! We are committed to delivering an awesome and secure chat solution for, and aided by, our community.

Given the nature of Chat, we understand each person using Rocket.Chat has some expectation about their data being secure and private. It's clear how important this is to everyone, and we work to the best of our abilities to ensure your expectations are met.

#### If you find a Security Issue
> __Please email the details to Rocket.Chat's security team at security@rocket.chat__

Our security team will respond to confirm receipt of your message, review and plan the mitigation of the issue appropriately, as well as set a timeline for a new release or patch. 

We follow responsible disclosure and will credit researchers when a security issue has been identified and mitigated while adhering to the following specifics: 

- You may not use automated tools in your research without our explicit consent. Use of automated tools may result in investigative action or your IP(s) being blocked.
- You make a good faith effort to avoid privacy violations, destruction of data and interruption or degradation of our service during your research.
- You give us reasonable time to respond to your report and carry out remediation.
- We credit the first researcher to report an issue. Additionally, we reserve the right to only acknowledge researchers who discover issues in Rocket.Chat projects or related services, if we determine the issue to be of a high or critical severity, or if there has been continued research or contributions made by the reporter.
- We will credit you with your name and a "no-follow" link to the address of your choosing (e.g. Twitter or personal website).
- We will not bring any lawsuit or begin law enforcement investigation into you if you follow these parameters.

#### What details should you include when reporting a Security Issue
Please provide as many relevant details as you can. In particular:

- What versions of software are involved
- What steps someone can follow to go from an initial installation of that software to a point where they see the vulnerability
- Any patches or steps to mitigate the problem

#### WhiteHat Hall-of-Fame
Rocket.Chat is very grateful for the following people who have responsibly disclosed vulnerabilities to us:

- [Matt Austin](http://m-austin.com), October/2015.
- [Kamran Saifullah](https://pk.linkedin.com/in/kamransaifullah786), November/2015.
- [Sabri Haddouche](https://github.com/pwnsdx), November/2015.

Thank you all very much!

### Getting Support
Every new build now includes version information.

For now, it can be accessed directly via :   `http://<your server name>/api/info`

A sample output of the version information:

```
{
  "version": "0.8.0",
  "compile": {
    "date": "2015-12-11T23:57:49.792Z",
    "nodeVersion": "v0.10.40",
    "arch": "x64",
    "platform": "linux",
    "osRelease": "3.13.0-52-generic",
    "totalMemmory": 8373084160,
    "freeMemmory": 241037312,
    "cpus": 4
  },
  "commit": {
    "hash": "b023db6f9321194dcb3db5128b62abbc3bafdc2f",
    "date": "Fri Dec 11 21:52:55 2015 -0200",
    "author": "Gabriel Engel",
    "subject": "Merge pull request #1627 from jgerle/develop"
  },
  "tag": "v0.8.0",
  "branch": "develop"
}
```
