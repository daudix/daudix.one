# daudix-ufo.github.io/blog

[![Build status](https://ci.codeberg.org/api/badges/12428/status.svg "Build status")](https://ci.codeberg.org/repos/12428)

This is my blog based on [os-component-website](https://github.com/jimmac/os-component-website)

## Preview locally

Build the image:

```shell
podman build --tag gh-pages .
```

Run the image:

```shell
podman run -it --rm --volume="$PWD:/srv/jekyll:Z" -w /srv/jekyll -p 4000:4000 gh-pages /bin/sh
```

Within the container, run:

```shell
bundle exec jekyll serve --livereload --host 0.0.0.0
```

_Building guide were shamelessly taken from [here](https://talk.jekyllrb.com/t/local-testing-of-existing-github-jekyll-site/7459/4)_
