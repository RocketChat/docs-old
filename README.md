Guides for developing and modifying Rocket.Chat's code
---
layout: home
permalink: /index.html
---

# Rocket.Chat Docs

This is the official repository for Rocket.Chat Documentation.

## How to run Rocket.Chat Docs locally:

This is a quick guide on how to run the docs site locally, for a more in depth guide please look [here]( contributing/documentation)

- Install ruby (version 2.5 or higher recommended, if using any version prior to 2.5 you will need to install bundler with `gem install bundler`). If the above fails, try specifing the version by runnning `gem install bundler -v [VERSION]` as per the `BUNDLED WITH [VERSION]` definition in Gemfile.lock file.
- This step is for only macOS users:
    - You will need to have either `xcode` or the `xcode command line tools` installed. To install the command tools use `xcode-select --install`. Don't forget to accept the `sudo xcodebuild -license` command.
    - Depending on your setup you might need to install [nokogiri](http://www.nokogiri.org/tutorials/installing_nokogiri.html) and its dependencies manually.
- Fork the [https://github.com/RocketChat/docs](https://github.com/RocketChat/docs) repository.
- Clone your forked repository to your local enviroment.
- Run `cd docs/`to enter the cloned docs folder.
- Run `bundle install`.
- Start the server with `bundle exec "jekyll serve --incremental --safe"`.

## Linting your changes locally:

A travis build cycle takes over 5 minutes, you should always lint your changes to find errors locally before pushing your changes.   This only takes seconds, from the `docs` directory:

```
bundle exec "mdl ./ -r ~MD004 -i -g"
```
