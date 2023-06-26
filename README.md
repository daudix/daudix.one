# daudix.undo.it/blog

This is my blog based on [os-component-website](https://github.com/jimmac/os-component-website)

## Preview locally

Build the image:

```
podman build --tag gh-pages .
```

Run the image:

```
podman run -it --rm --volume="$PWD:/srv/jekyll:Z" -w /srv/jekyll -p 4000:4000 gh-pages /bin/sh
```

Within the container, run:

```
bundle exec jekyll serve --livereload --host 0.0.0.0
```

_Building guide were shamelessly taken from [here](https://talk.jekyllrb.com/t/local-testing-of-existing-github-jekyll-site/7459/4)_