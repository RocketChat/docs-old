#!/usr/bin/env bash
set -e # halt script on error

bundle exec "jekyll build --incremental --safe" && bundle exec "htmlproofer ./_site"

