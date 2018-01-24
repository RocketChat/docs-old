#!/usr/bin/env bash
set -e # halt script on error

bundle exec "jekyll serve --incremental --safe"
bundle exec "rake check_links"
