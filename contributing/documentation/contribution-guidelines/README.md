# Documentation Contribution Guidelines

First of all, thank you for your interest in contributing to Rocket.Chat Docs.
If this is the first Open Source project you will contribute to,
we strongly suggest reading GitHub's excellent guide
["Contributing to Open Source"](https://guides.github.com/activities/contributing-to-open-source/).

## Finding something to work on

When looking for something to work on, you have two options:

### Documentation Map

You can find a map of all the files on the documentation [here](../documentation-map). There you can find what articles are missing or incomplete.

Missing articles will be marked as <span style="color:red"> red </span>

Incomplete articles will be marked as <span style="color:orange"> orange </span>

All missing/incomplete articles are links to a list with the description of each article marked on the documentation map (you can find this list [here](../missing-and-outdated-list))

### Issues

You can find a list of issues [here](https://github.com/RocketChat/Rocket.Chat.Docs/issues).
When you find something you would like to work on just comment on it and we will add an __In Progress__ label.

## Creating a new Pull Request

### Requirements

When you create a new pull request, we expect some requirements to be met.

- Whenever you add a new article or complete a incomplete article, please update the [Documentation Map](../documentation-map) and remove the topic from the [Missing/Incomplete Article List](../missing-and-outdated-list) (if necessary).
- If a file is created or moved, you need to update the Table of Contents (You can find the file [here](https://github.com/RocketChat/docs/blob/master/_data/toc.yml)).
- Follow this naming convention for Pull Requests:
    - When adding new documentation, add `New Documentation:` before the title. E.g. `New Documentation: Authentication Guide`.
    - When fixing documentation, add `Fix Documentation:` before the title. E.g. `Fix Documentation: Authentication Guide`.
    - When updating documentation, add `Update Documentation:` before the title. E.g. `Update Documentation: Authentication Guide`.
- For each Pull Request made, we run tests to check if there are any broken links. You can find how to run these tests locally [here](#test).
- We also use a linter tool to check if the style of the markdown matches our [guidelines](../markdown-guidelines). Here is a link to the [Markdown Linter Tool](https://github.com/markdownlint/markdownlint).
-

### Recommended Workflow

When making small changes like typos and such, there is no problem to edit the file directly on GitHub, but if you are making bigger changes or adding new files to the docs, we recommend following this workflow

- install ruby (version 2.5 or higher recommended, if using any version prior to 2.5 you will need to install bundler with `gem install bundler`).
- Install the [Markdown Linter Tool](https://github.com/markdownlint/markdownlint) with `gem install mdl`.
- Fork the appropriate repository to your account.
- This is usually [here](https://github.com/RocketChat/docs).
- Clone your fork.
- Run `bundle install`.
- Start the server with `bundle exec "jekyll serve --incremental --safe"`.
- Before starting read our [Markdown Style Guide](markdown-styleGuide.md).
- Make your changes locally.
- Run the markdown linter tool with `mdl .` on the root directory of the project.
- Run `bundle exec "rake check_links"` with the server running to check for broken links.
- Commit your changes to a new branch.
- Push that branch to your repository.
- Open a PR.
- Make sure you include a description of why you're making the changes.



<!--

TODO: Un-document this section after the docs structure change

## Adding new files and folders

Before adding new files to the docs, be sure to mind the structure of the docs. Also avoid creating complex folder structures, please do not add more than 2 subfolders.

Here is a short map of the current structure:

- Contributing: All instructions about how to contribute to Rocket.Chat goes here;
- Getting support: Here you can find how to get support;
- Deployment: This section is dedicated to automated deployments;
- Installation: In this section you can find guides for manual installation;
- Server Configuration and Maintenance: Here you can find how to configure and maintain your server, this is where things like proxy configuration and multiple instance handling guides goes;
- User Guides: This section is dedicated to teach end users how to use rocket chat as a user. There should __not__ be any administration guides here;
- Administration: This section is dedicated to the admin screen. This section is divided into three categories:
    - Administration Tools: In this section we have tools like Mailer and User managing;
    - Administration Settings: All the settings that alter how Rocket.Chat behaves;
    - Administration Integrations: Things like webhooks,bots, Oauth ...
- Developer guides: Here you can find documentation on how to develop in Rocket.Chat. This section is divided into different categories:
    - Basic Developer Guides: Here you can find how to star developing in Rocket.Chat, like how to start the server, and basic information on our structure;
    - UI Documentation: Here you can find documentation on our UI components and how to use them;
    - Back End Documentation: Here you can find documentation on our back end methods and how to use them;
    - Rest API: Here you can find documentation on our REST API and how to use it;
    - RealTime API: Here you can find documentation on our RealTime API and how to use it;
    - LiveChat API: Here you can find documentation on our LiveChat API and how to use it;
- Community CookBook: Here you can find integrations, guides and Rocket.Chat usages created by the community that stray away from Rocket.Chat main idea.
-->
