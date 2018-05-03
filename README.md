---
layout: home
permalink: /index.html
---

# Rocket.Chat Docs

This is the official repository for Rocket.Chat Documentation.

## How to run Rocket.Chat Docs locally: 

This is a quick guide on how to run the docs site locally, for a more in depth guide please look [here](contributing/documentation)

- install ruby (version 2.5 or higher recommended, if using any version prior to 2.5 you will need to install bundler with `gem install bundler`).
- Fork the appropriate repository to your account.
- This is usually [here](https://github.com/RocketChat/docs).
- Clone your fork.
- Run `bundle install` inside of the cloned docs folder.
- Start the server with `bundle exec "jekyll serve --incremental --safe"`.