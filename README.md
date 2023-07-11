# daudix-ufo.codeberg.page/blog

[![status-badge](https://ci.codeberg.org/api/badges/12428/status.svg)](https://ci.codeberg.org/12428)

This is my blog based on [os-component-website](https://github.com/jimmac/os-component-website)

## Preview locally

Build the image:

```shell
podman build --tag pages .
```

Run the image:

```shell
podman run -it --rm --volume="$PWD:/srv/jekyll:Z" -w /srv/jekyll -p 4000:4000 pages /bin/sh
```

Within the container, run:

```shell
bundle exec jekyll serve --livereload --host 0.0.0.0
```

_Building guide were shamelessly taken from [here](https://talk.jekyllrb.com/t/local-testing-of-existing-github-jekyll-site/7459/4)_
