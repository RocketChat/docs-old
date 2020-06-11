# Contribution Guidelines

First of all, thank you for your interest in contributing to Rocket.Chat Docs. If this is the first Open Source project you will contribute to, we strongly suggest reading GitHub's excellent guide ["Contributing to Open Source"](https://guides.github.com/activities/contributing-to-open-source/).

## Finding something to work on

You can find a list of issues [here](https://github.com/RocketChat/Rocket.Chat.Docs/issues). When you find something you would like to work on just comment on it and we will add an **In Progress** label.

## Creating a new Pull Request

### Requirements

When you create a new pull request, we expect some requirements to be met.

* Follow this naming convention for Pull Requests:
  * When adding new documentation, add `New Documentation:` before the title. E.g. `New Documentation: Authentication Guide`.
  * When fixing documentation, add `Fix Documentation:` before the title. E.g. `Fix Documentation: Authentication Guide`.
  * When updating documentation, add `Update Documentation:` before the title. E.g. `Update Documentation: Authentication Guide`.
* If your Pull Request closes an issue you need to write `Closes #ISSUE_NUMBER` where the `ISSUE_NUMBER` is the number in the end of the link url that will link your pull request to the issue, when merged will close that issue.
* For each pull request made, we run tests to check if there are any broken links. You can find how to run these tests locally [here](https://docs.rocket.chat/developer-guides/testing/#testing)

### Testing Changes

To test your changes you have 2 options:

#### Fork and use GitBook Github integration

Simply fork our docs repository, [create a space](https://docs.gitbook.com/getting-started/quick-start) and activate the [GitHub integration](https://docs.gitbook.com/integrations/github) on your fork

#### Run it locally

{% hint style="info" %}
We do not recommend this method since GitBook Cli is deprecated and it takes a long time to build.
{% endhint %}

When making small changes like typos and such, there is no problem to edit the file directly on GitHub, but if you are making bigger changes or adding new files to the docs, we recommend following this workflow

Install GitBook's client package using npm

`npm install -g gitbook-cli`

After that you need to build the documentation, from the root of the docs folder do:

`gitbook build .`

This will generate a folder called "\_book" with the builded docs.

Then serve the builded book using:

`gitbook serve .`

This will serve the book to the url `http://localhost:4000/`

Find out more on [GitBook Cli's repository](https://github.com/GitbookIO/gitbook-cli)

