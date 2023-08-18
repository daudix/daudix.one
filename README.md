# daudix-ufo.codeberg.page/blog

[![status-badge](https://ci.codeberg.org/api/badges/12428/status.svg)](https://ci.codeberg.org/repos/12428)

> **Note**
> This blog is based on [OS Component Website](https://jimmac.github.io/os-component-website)

## Usage

### 🧪️ Test pages

- [Demo page](https://daudix-ufo.codeberg.page/blog/demo/)
- [Cake Party!](https://daudix-ufo.codeberg.page/blog/demo-page/)
- [ActivityPub/​Fediverse comments demo](https://daudix-ufo.codeberg.page/blog/comments/)

### 🏗️ Build static files

```shell
./local.sh build
```

### ⏱️ Watch static files and serve

```shell
./local.sh serve
```

_Building guide were shamelessly taken from [here](https://talk.jekyllrb.com/t/local-testing-of-existing-github-jekyll-site/7459/4)_

_Initial script (`local.sh`) were taken from [here](https://kuros.in/docker/docker-jekyll-container-to-serve-locally)_

### 🏷️ Rename posts to web-friendly format

```shell
./rename.sh posts
```

## ❤️ Special thanks

- Jakub Steiner for an awesome [OS Component Website](https://jimmac.github.io/os-component-website) that are used as a base
- Cassidy James for and awesome [Mastodon-powered comments](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon)
- dwb, ejm and jgs for ASCII art
