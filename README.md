Guides for developing and modifying Rocket.Chat's code
---
layout: home
permalink: /index.html
---

# Rocket.Chat Docs

This is the official repository for Rocket.Chat Documentation.

## How to run Rocket.Chat Docs locally:

This is a quick guide on how to run the docs site locally, for a more in depth guide please look [here]( contributing/documentation).

- install ruby (version 2.5 or higher recommended, if using any version prior to 2.5 you will need to install bundler with `gem install bundler`).
If above fails, run `gem install bundler -v 1.16.2` as per the configuration in **Gemfile.lock [BUNDLED WITH 1.16.2]**
- This step is for only macOS users:
  - You will need to have either `xcode` or the `xcode command line tools` installed. To install the command tools use `xcode-select --install`. Don't forget to accept the `sudo xcodebuild -license` command.
  - Depending on your setup you might need to install [nokogiri](http://www.nokogiri.org/tutorials/installing_nokogiri.html) and its dependencies manually.
- Fork the [repository](https://github.com/RocketChat/docs).
- Clone your fork to your local machine.
- Run `cd docs/`
- Run `bundle install` .
- Start the server with `bundle exec "jekyll serve --incremental --safe"`.
