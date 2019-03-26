#!/bin/sh
set -e
set -o errexit
bundle exec "mdl ./ -r ~MD004 -i -g"
bundle exec "rake test"
