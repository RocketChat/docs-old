#!/usr/bin/env bash
set -e # halt script on error

bundle exec "jekyll build --incremental --safe" && bundle exec "rake check_links"

