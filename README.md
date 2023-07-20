# daudix-ufo.codeberg.page/blog

[![status-badge](https://ci.codeberg.org/api/badges/12428/status.svg)](https://ci.codeberg.org/repos/12428)

> **Note**
> This blog is based on [os-component-website](https://github.com/jimmac/os-component-website)

## Usage

### Markdown test page: [here](https://daudix-ufo.codeberg.page/blog/markdown)

### Build static files:

```shell
./local.sh build
```

### Watch static files and serve:

```shell
./local.sh serve
```

_Building guide were shamelessly taken from [here](https://talk.jekyllrb.com/t/local-testing-of-existing-github-jekyll-site/7459/4)_

_Initial script (`local.sh`) were taken from [here](https://kuros.in/docker/docker-jekyll-container-to-serve-locally)_

### Rename posts to kebab-case

```shell
./rename.sh posts
```