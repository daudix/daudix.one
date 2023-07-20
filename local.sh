#!/usr/bin/env bash

# Script for building and serving site locally

set -e

case $1 in
    'build')

cat << "EOF"
 __           __ __     __ __                       
|  |--.--.--.|__|  |.--|  |__|.-----.-----.         
|  _  |  |  ||  |  ||  _  |  ||     |  _  |__ __ __ 
|_____|_____||__|__||_____|__||__|__|___  |__|__|__|
                                    |_____|         

EOF

        echo -e "\e[32mBuilding Podman image\e[0m"
        podman build --tag pages .

        echo -e "\e[32mBuilding Jekyll site\e[0m"    
        podman run \
            -it --rm --volume="$PWD:/srv/jekyll:Z" \
            -w /srv/jekyll -p 4000:4000 pages \
            bundle exec jekyll build
    ;;
    'serve')

cat << "EOF"
                         __                       
.-----.-----.----.--.--.|__|.-----.-----.         
|__ --|  -__|   _|  |  ||  ||     |  _  |__ __ __ 
|_____|_____|__|  \___/ |__||__|__|___  |__|__|__|
                                  |_____|         

EOF

        echo -e "\e[32mBuilding Podman image\e[0m"
        podman build --tag pages .

        echo -e "\e[32mBuilding Jekyll site\e[0m"    
        podman run \
            -it --rm --volume="$PWD:/srv/jekyll:Z" \
            -w /srv/jekyll -p 4000:4000 pages \
            bundle exec jekyll serve --livereload --host 0.0.0.0
    ;;
esac
