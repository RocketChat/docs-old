---
order: 2
---

# Branches and Releases 

Rocket.Chat maintains two branches for release builds:

* develop
* master

The default branch is `develop`.

All contributors create PR against `develop` branch.   Core team (or owners/maintainers of the repository in the case of projects such as iOS and Android native clients) will merge these PRs after review down to `develop` branch.

Every few weeks, core team (or owners/maintainers) will:

* stop PR merges
* test features on `develop` branch for a few days
* optionally cut a beta release (tag it as beta) from `develop` for external testing
* after testing and bug fixes - merge down the feature set as a stable release onto `master`

All builds from master are considered `stable` (tested), and will be tagged with proper `major.minor` release info.

_For more information about specific releases and tags please visit the [releases page](https://github.com/RocketChat/Rocket.Chat/releases)_







