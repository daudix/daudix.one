#!/usr/bin/env bash

set -e

case $1 in
    'build')
        echo "Building podman image"
        podman build --tag pages .

        echo "Building Jekyll site"    
        podman run \
            -it --rm --volume="$PWD:/srv/jekyll:Z" \
            -w /srv/jekyll -p 4000:4000 pages \
            bundle exec jekyll build
    ;;
    'serve')
        podman run \
            -it --rm --volume="$PWD:/srv/jekyll:Z" \
            -w /srv/jekyll -p 4000:4000 pages \
            bundle exec jekyll serve --livereload --host 0.0.0.0
    ;;
esac
