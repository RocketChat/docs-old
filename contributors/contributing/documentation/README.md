---
description: >-
  Here you will find all that you need to know to start contributing to
  Rocket.Chat documentation.
---

# Documenting

First of all, thank you for your interest in contributing to Rocket.Chat Docs. If this is the first Open Source project you will contribute to, we strongly suggest reading GitHub's excellent guide:

{% embed url="https://opensource.guide/how-to-contribute/" %}

## Finding something to work on

You can find a list of issues [here](https://github.com/RocketChat/Rocket.Chat.Docs/issues). When you find something you would like to work on just comment on it and we will add an **In Progress** label.

## Creating a new Pull Request

### Requirements

When you create a new pull request, we expect some requirements to be met.

* Follow this naming convention for Pull Requests:
  * When adding new documentation, add _**New Documentation:**_ before the title. E.g. `New Documentation: Authentication Guide`
  * When fixing documentation, add _**Fix Documentation:**_ before the title. E.g. `Fix Documentation: Authentication Guide`
  * When updating documentation, add _**Update Documentation:**_ before the title. E.g. `Update Documentation: Authentication Guide`
* If your Pull Request closes an issue you need to write `Closes #ISSUE_NUMBER` where the `ISSUE_NUMBER` is the number in the end of the link url that will link your pull request to the issue, when merged will close that issue.
* For each pull request made, we run tests to check if there are any broken links. You can find how to run these tests locally [here](https://docs.rocket.chat/developer-guides/testing/#testing).

### Creating Drafts

When you create a new feature but for some reason can't create a full fledged documentation pull request, you can create a `draft` with is a single file pull request with critical information needed to create the desired documentation, after creating the draft, the documentation team will edit the pull request to suit the documentation standards.

* [New Feature Template](new-feature-draft.md)
* [Feature Change Template](feature-change-draft.md)

### Testing Changes

To test your changes you have 2 options:

#### OPTION 1: Fork and use GitBook

Simply fork our docs repository, [create a space](https://docs.gitbook.com/getting-started/quick-start) and activate the [GitHub Integration](https://docs.gitbook.com/integrations/github) on your fork.

#### OPTION 2: Run it locally

{% hint style="info" %}
We do not recommend this method since GitBook Cli is deprecated and it takes a long time to build.
{% endhint %}

When making small changes like typos and such, there is no problem to edit the file directly on GitHub, but if you are making bigger changes or adding new files to the docs, we recommend following this workflow

Install GitBook's client package using NPM.

```
npm install -g gitbook-cli
```

After that you need to build the documentation, from the root of the docs folder do:

```
gitbook build .
```

This will generate a folder called "\_book" with the builded docs.

Then serve the builded book using:

```text
gitbook serve .
```

This will serve the book to the url `http://localhost:4000/`

Find out more on [GitBook Cli's repository](https://github.com/GitbookIO/gitbook-cli)

## Community Maintainers

We are looking for community maintainers for the Rocket.Chat documentation. Maintainers will be added to a special team with write permissions. These permissions consist of opening, closing, tagging and editing issues and pull requests, create and delete non protected branches on the docs repository.

The responsibilities of a maintainer are:

### Issue Triage

* **Labeling issues:** Label issues accordingly.
* **Finding Duplicates:** finding and closing duplicate issues.
* **Closing irrelevant/inappropriate issues:** Closing issues that are no longer needed, that are not relevant to the project and/or doesn't follow the issues guidelines.
* **Doing first level contact:** Getting more information on the issues \(like version number or asking for clarification\) and closing them if they aren't relevant or if a question made by the maintainer wasn't answered in 2 days.

### Help with Contribution

* **Help Manage Pull Requests:** help the author of the pull request with any problems \(like tests failing due markdown problems on the pull request\)
* **Contributing!** Create pull requests to help maintain the documentation

