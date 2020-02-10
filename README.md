# Rocket.Chat Docs

This is the official repository for Rocket.Chat Documentation.

## Requirements

- Ruby >= 2.3 (Recommended >= 2.5)
- [bundler](https://bundler.io/) gem installed (>= 1.17.3)

## Contributing

This is a quick guide on how to run the docs site locally, for a more in depth guide please look [here](contributing/documentation).

## Installation

Install `bundler` using your terminal, run:

```bash
$ gem install bundler --version 1.17.3
```

And install the dependencies (also on terminal):

```bash
$ bundle install
```

## Running locally

Start the server using your terminal:

```bash
$ jekyll serve --incremental --safe
```

The application will be available on browser at `http://localhost:4000`.

## Linting your changes locally:

You should always lint your changes to find errors locally before pushing your changes. This only takes seconds, from the `docs` directory you can run on terminal:

```bash
$ mdl ./ -r ~MD004 -i -g
```
