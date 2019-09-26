# Getting Support

Setting up and running a software is not always an easy thing. We get that. That's why we try to help everybody as good as possible with their instance of Rocket.Chat. And while we do like to help everybody, it just isn't feasible in any case. That is why we have to limit the support by the core team to some extent.

The following paragraphs will tell you about limits of the support the core team can give as well as where to find the community to help you and how you yourself can contribute by reporting bugs to us on GitHub.

## Supported versions of Rocket.Chat

> In case of security-relevant bugs we might decide to backport patches to older releases on a case-by-case basis. Please understand though, that those will be rare exceptions. If you want to play it safe, upgrade to latest stable.

Rocket.Chat provides Support for, at least, 3 months for each release. Rocket.Chat provides Support for 6 months to latest releases of each major version, e.g. 1.3 is the latest release of major version 1.x before major version 2.0. Rocket.Chat may provide a longer period of support depending on the necessity, check the table below to verify the final support date of each release version.

By "Support" we mean that Rocket.Chat will provide only security fixes and answer support tickets related to configuration and usage for the versions listed below. Bugs not related to security issues will be fixed only in new versions.

> Rocket.Chat only provides support for version 1.x or later.

| Release             | Release Date   | End of Life Date |
|---------------------|----------------|------------------|
| Rocket.Chat 1.0     | April 2019     | July 2019        |
| Rocket.Chat 1.1     | May 2019       | August 2019      |
| Rocket.Chat 1.2     | June 2019      | September 2019   |
| **Rocket.Chat 1.3** | **July 2019**  | **January 2020** |
| Rocket.Chat 2.0     | August 2019    | November 2019    |
| Rocket.Chat 2.1     | September 2019 | TBD              |

> Always update to latest stable version before reporting any bugs or before ask for help from community.

### Cloud users

Rocket.Chat manages upgrades and provides support to Rocket.Chat Cloud users regardless of the release version. If a Rocket.Chat Cloud user with an outdated server version sends in a support request, his server might be upgraded to the latest stable version without acknowledgement to ensure best performance.

## Supported versions of MongoDB

Each Rocket.Chat release supports different versions of MongoDB, the table below presents the support of MongoDB versions for each major Rocket.Chat release in addition of the deprecated version that will be removed on next or nexts versions.

> Rocket.Chat only adds or removes support of MongoDB versions on major releases so the minor versions are ommited on table below.

| Release         | MongoDB Supported Versions | MongoDB Deprecated Version |
|-----------------|----------------------------|----------------------------|
| Rocket.Chat 1.x | 3.2, 3.4, 3.6, 4.0         | 3.2                        |
| Rocket.Chat 2.x | 3.4, 3.6, 4.0              | 3.4                        |

The upgrade guides avaiable from the official MongoDB documentation are listed bellow. Bare in mind that it's not possible to skip a version when upgrading, e.g. to upgrade from 3.2 to 3.6 it's necessary to upgrade from 3.2 to 3.4 first and than to 3.6.

- [Upgrade Replicat Set to 3.4](https://docs.mongodb.com/manual/release-notes/3.4-upgrade-replica-set/)
- [Upgrade Replicat Set to 3.6](https://docs.mongodb.com/manual/release-notes/3.6-upgrade-replica-set/)
- [Upgrade Replicat Set to 4.0](https://docs.mongodb.com/manual/release-notes/4.0-upgrade-replica-set/)

> It's possible to bypass the MongoDB version check by using the environment variable `BYPASS_MONGO_VALIDATION=true`. Bare in mind that this work around should be used only when extrictly necessary and may prevent some functionalities to work propertly or even prevent the server to start.

## Supported browser versions

The ecosystem of browsers has been, and still is, an ever evolving field of change. Since the rate of change is tremendous, we also have to limit the support to recent browsers. We're usually quite good with that but some older browsers just don't support some features that we build upon. That is why we limit or support for browsers in the following way:

We support the following desktop browsers and versions:

| Browser                     | Supported Versions  |
|-----------------------------|---------------------|
| Google Chrome               | Latest 3 versions   |
| Mozilla Firefox             | Latest 3 versions   |
| Apple Safari                | Latest 2 versions   |
| Microsoft Edge              | Latest 2 versions   |
| Microsoft Internet Explorer | Latest version only |

> There may be small exceptions in rare cases.

That being said, here's how you can find out if **your** browser version is still supported (all lists include an indication if a specific browser version is still supported or not):

- [Version history of Mozilla Firefox](https://en.wikipedia.org/wiki/Firefox_version_history)
- [Version history of Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome_version_history)
- [Version history of Apple Safari](https://en.wikipedia.org/wiki/Safari_version_history)
- [Version history of Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft_Edge#Release_history)
- [Version history of Microsoft Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer_version_history)

## Community support

We have a great community that likes to give back.

Some great places to ask your questions:

- [Rocket.Chat forums](https://forums.rocket.chat/)
- Stack Overflow [Rocket.Chat Tag](https://stackoverflow.com/questions/tagged/rocket.chat)
- [Server Fault](https://serverfault.com/search?q=Rocket.Chat)

Our community also often hangs out on our [community server](https://open.rocket.chat).

Some of the channels to get help:

- [#support](https://open.rocket.chat/channel/support) channel for help with general Rocket.Chat
- [#ubuntu-snap](https://open.rocket.chat/channel/ubuntu-snap) channel for help with snap installs
- [#desktop](https://open.rocket.chat/channel/desktop) channel for help with the desktop client
- [#bots](https://open.rocket.chat/channel/bots) channel for help with chatbot scripting
- [#dev](https://open.rocket.chat/channel/dev) channel for developers needing help developing new features

While the de facto language amongst the Rocket.Chat community is english it may be easier for some to discuss their issues in their native language. Have a look at the following channels to see whether there is a user group for your language:

- [#ug_german](https://open.rocket.chat/channel/ug_german) German Rocket.Chat User Group

Remember to have a little patience. Support is provided by other members of the community like you in their free time.

## Reporting bugs

If you think you have found a bug.  Please see [Reporting Issues](../contributing/reporting-issues/)
