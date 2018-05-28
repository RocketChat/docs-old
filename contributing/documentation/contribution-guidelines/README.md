# Documentation Contribution Guidelines

First of all, thank you for your interest in contributing to Rocket.Chat Docs.
If this is the first Open Source project you will contribute to,
we strongly suggest reading GitHub's excellent guide
["Contributing to Open Source"](https://guides.github.com/activities/contributing-to-open-source/).

## Finding something to work on

When looking for something to work on, you have two options:

### 1. The Documentation Map

You can find a map of all the files on the documentation [here](../documentation-map). There you can find what articles are missing or incomplete. This page was created so is easier for the Rocket.Chat team and the community to know the status of the documentation and what they can do to improve it.

Missing articles will be marked as <span style="color:red"> red </span>

Incomplete articles will be marked as <span style="color:orange"> orange </span>

All missing/incomplete articles are links to a list with the description of each article marked on the documentation map (you can find this list [here](../missing-and-outdated-list))

### 2. Issues

You can find a list of issues [here](https://github.com/RocketChat/Rocket.Chat.Docs/issues).
When you find something you would like to work on just comment on it and we will add an __In Progress__ label.

- - -

## Creating a new Pull Request

### Requirements

When you create a new pull request, we expect some requirements to be met.

- Whenever you add a new article or complete a incomplete article, please update the [Documentation Map](../documentation-map) and remove the topic from the [Missing/Incomplete Article List](../missing-and-outdated-list) (if necessary).
- If a file is created or moved, you need to update the Table of Contents (You can find the file [here](https://github.com/RocketChat/docs/blob/master/_data/toc.yml)).
- Follow this naming convention for Pull Requests:
    - When adding new documentation, add `New Documentation:` before the title. E.g. `New Documentation: Authentication Guide`.
    - When fixing documentation, add `Fix Documentation:` before the title. E.g. `Fix Documentation: Authentication Guide`.
    - When updating documentation, add `Update Documentation:` before the title. E.g. `Update Documentation: Authentication Guide`.
- If your Pull Request closes an issue you need to write `Closes #ISSUE_NUMBER` where the `ISSUE_NUMBER` is the number in the end of the link url that will link your pull request to the issue, when merged will close that issue.
- For each pull request made, we run tests to check if there are any broken links. You can find how to run these tests locally [here]().
- We also use a linter tool to check if the style of the markdown matches our [styleguide](../markdown-styleguide). Here is a link to the [Markdown Linter Tool](https://github.com/markdownlint/markdownlint).

### Recommended Workflow

When making small changes like typos and such, there is no problem to edit the file directly on GitHub, but if you are making bigger changes or adding new files to the docs, we recommend following this workflow

- install ruby (version 2.5 or higher recommended, if using any version prior to 2.5 you will need to install bundler with `gem install bundler`).
- Install the [Markdown Linter Tool](https://github.com/markdownlint/markdownlint) with `gem install mdl`.
- This step is for only macOS users:
    - You will need to have either `xcode` or the `xcode command line tools` installed. To install the command tools use `xcode-select --install`. Don't forget to accept the `sudo xcodebuild -license` command.
    - Depending on your setup you might need to install [nokogiri](http://www.nokogiri.org/tutorials/installing_nokogiri.html) and its dependencies manually.
- Fork the appropriate repository to your account.
- This is usually [here](https://github.com/RocketChat/docs).
- Clone your fork.
- Run `bundle install` inside of the cloned docs folder.
- Start the server with `bundle exec "jekyll serve --incremental --safe"`.
- Before starting read our [Markdown Style Guide](../markdown-styleguide).
- Make your changes locally.
- Run the markdown linter tool with `mdl .` on the root directory of the project.
- Run `bundle exec "rake check_links"` with the server running to check for broken links.
- Commit your changes to a new branch.
- Push that branch to your repository.
- Open a PR.
- Make sure you include a description of why you're making the changes.

### Table of Contents

Every time you add a new file to the documentation, you will have to add it to the table of contents.

The table of contents is the left navigation sidebar, and it is the way others will find your new article.

You can find the table of contents `.yml` file [here](https://github.com/RocketChat/docs/blob/master/_data/toc.yml).

You have to note that the name you put on the table of content will be _slugfied_, and these names will be used to search for that file.

E.g.

If you add a page called `Testing Rocket.Chat Apps`, it will be converted to `testing-rocketchat-apps`, so you will have to name your file `testing-rocketchat-apps.md`

All words will be lowercased, spaces will be replaced with a `-` and any special character will be removed (like the `.` on `Rocket.Chat`)

- - -

## Reporting Issues and Missing Articles

When you find a problem on the documentation and want to report it to us you have some alternatives:

### Documentation Map

If you find that a document either is missing from the docs or is incomplete or outdated, we would recommend that you create a Pull Request adding the missing/incomplete document to the [Documentation Map](../documentation-map).

To add a document to the documentation map you can simply add a new item to the tree map in [here](../documentation-map).

For a missing document you should add

```HTML
<span class="missing">[NAME OF YOUR DOCUMENTATION](../missing-and-outdated-list/#TITLE ON THE MISSING LIST)</span>
```

For a incomplete document you should add

```HTML
<span class="incomplete">[NAME OF YOUR DOCUMENTATION](../missing-and-outdated-list/#TITLE ON THE MISSING LIST)</span>
```

After that you will have to write an explanation of how this document should be, or what is the problem with it on the [Missing our Outdated Docs](../missing-and-outdated-list) and link this topic after the `#` on the link you just added to the Documentation Map.

_Incomplete articles are the ones that are missing a big part of information in them, so if an article is missing a little bit of information, it shouldn't be added to the incomplete list_

_Bugs, typos, markdown syntax and such should not be listed on this map_

We understand that not everyone has the time to create Pull Requests so feel free to create regular issues too.
