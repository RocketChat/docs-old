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

## Environment Setup

Rocket.Chat uses [GitBook ](https://www.gitbook.com/)for documentation.

You can contribute to the docs by being invited into the GitBook online workspace or directly from your local environment. Follow this guide for a simple local environment setup

* Install any code editor of your choice, [VSCode ](https://code.visualstudio.com/)is the recommended
* Launch VSCode and install the [Auto-Open Markdown Preview](https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview) and [markdownlint ](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)extensions. This will help with automatically formatting your changes and prompts for any errors
* Fork and clone the [user docs](https://github.com/RocketChat/docs) or [developers docs](https://github.com/RocketChat/developer-docs) repository
* Open the project in VSCode and start making your changes

## Creating a new Pull Request

### Requirements

When you create a new pull request, we expect some requirements to be met.

* Follow this naming convention for Pull Requests:
  * When adding new documentation, add _**New Documentation:**_ before the title. E.g. `New Documentation: Authentication Guide`
  * When fixing documentation, add _**Fix Documentation:**_ before the title. E.g. `Fix Documentation: Authentication Guide`
  * When updating documentation, add _**Update Documentation:**_ before the title. E.g. `Update Documentation: Authentication Guide`
* If your Pull Request closes an issue you need to write `Closes #ISSUE_NUMBER` where the `ISSUE_NUMBER` is the number at the end of the link URL that will link your pull request to the issue, when merged will close that issue.
* For each pull request made, we run tests to check if there are any broken links. You can find how to run these tests locally [here](https://docs.rocket.chat/developer-guides/testing/#testing).

### Creating Drafts

When you create a new feature but for some reason can't create a full-fledged documentation pull request, you can create a `draft` which is a single file pull request with critical information needed to create the desired documentation, after creating the draft, the documentation team will edit the pull request to suit the documentation standards.

* [New Feature Template](new-feature-draft.md)
* [Feature Change Template](feature-change-draft.md)

### Testing Changes

To test your changes you have 2 options:

#### Using Live Preview Locally

The [Auto-Open Markdown Preview](https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview) installed on VSCode can help automatically preview directly in your editor.

#### Using GitBook

Simply fork our docs repository, [create a space](https://docs.gitbook.com/getting-started/content-structure/what-is-a-space#create-a-spacehttps://docs.gitbook.com/getting-started/content-structure/what-is-a-space#create-a-space) on GitBook, and activate the [GitHub Integration](https://docs.gitbook.com/integrations/git-sync) on your fork. This gives you a means of previewing your changes before submitting a PR.

## Community Maintainers

We are looking for community maintainers for the Rocket.Chat documentation. Maintainers will be added to a special team with write permissions. These permissions consist of opening, closing, tagging, and editing issues and pull requests, creating and deleting non-protected branches on the docs repository.

The responsibilities of a maintainer are:

### Issue Triage

* **Labeling issues:** Label issues accordingly.
* **Finding Duplicates:** finding and closing duplicate issues.
* **Closing irrelevant/inappropriate issues:** Closing issues that are no longer needed, that are not relevant to the project, and/or don't follow the issues guidelines.
* **Doing first-level contact:** Getting more information on the issues (like version number or asking for clarification) and closing them if they aren't relevant or if a question made by the maintainer wasn't answered in 2 days.

### Help with Contribution

* **Help Manage Pull Requests:** help the author of the pull request with any problems (like tests failing due to markdown problems on the pull request)
* **Contributing!** Create pull requests to help maintain the documentation
