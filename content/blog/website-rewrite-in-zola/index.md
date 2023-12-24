+++
title = "Website 2.0"
description = "The long-awaited website rewrite using the new static site generator - Zola."
date = 2023-12-14
[taxonomies]
tags = ["Devlog", "Website", "Duckquill"]
[extra]
toc = true
[extra.comments]
id = "111637048720507166"
+++

## Backstory

It's been about 4 months since the last post, all this time I've been procrastinating, doing some side projects, learning Blender, and... rewriting my website from scratch!

## The Rewrite

The first rewrite attempt happened pretty much right after I published the [previous devlog](@/blog/site-and-blog-devlog/index.md), I thought using Hugo was a good idea, but I was horribly wrong. I lost my mind on the third day without making any progress. I asked some people about using Hugo and their reaction was something like "Oh God, use anything but Hugo, you will regret using it", and it was true.

I then tried Zola, which at first seemed like a worse Jekyll with some features missing, but after trying it out it was actually Jekyll 2.0.

B-but why move from Jekyll in the first place?

Well... there were a few reasons for this, like speed, Ruby dependency hell, broken internal linking and the need for third-party plugins for basic functionality, but the last straw was...

### Jekyll Issues

One of the recent issues with Jekyll was that Dart Sass support didn't work due to outdated dependencies in the official Jekyll Docker image. On the other hand, Zola is modern, fast, has all the features I need, uses the Dart Sass compiler, has good support for creating and using themes (more on that later), and uses <abbr title="Rust">🦀</abbr>, which is the best lang on the planet (/s, sort of).

### New Codebase

The other major change is that the "Home", "Design Showcase", and "Info" pages have been moved away from using the separate repo and codebase to being part of the same website; it's confusing, so here's a table of how it used to be:

| Page  | Repo          |
| ----- | ------------- |
| Home  | `pages`       |
| Info  | `pages`       |
| Works | `pages`       |
| Blog  | `blog-source` |

Now everything is in the `website` repo, using the same stylesheet and templates:

| Page  | Repo      |
| ----- | --------- |
| Home  | `website` |
| Info  | `website` |
| Works | `website` |
| Blog  | `website` |

### Look and Feel

Almost every single style and template has been reworked, resulting in a much nicer look and feel, some that I can remember:

- Brand new navigation bar!
- Primary color is now used to tint the background (bye boring gray!)
- CRT style is now used for ASCII, replacing the old "opaque to transparent gradient".
- Header 1 style is now different from other headers; it's big and **bold**
- Quotations and horizontal rules now have slightly rounded corners
- Code blocks now use Solarized syntax highlighting theme instead of GitHub's; it changes from light to dark variant depending on current color scheme
- Source Code Pro font is now used for code blocks instead of system one
- New, animated 404 image
- Tags are now displayed next to the date, both in the post list and in the post itself. Check out this neat effect on hover!
- Posts can now can be filtered by a tag, e.g you can filter only posts containing the `Devlog` tag
- New post navigation (previous/next post links at the end of the post)
- And more! ([initial migration commit](https://codeberg.org/daudix/pages/commit/0323f9658345ec5f254e24b4385c31ebe9a69f15), ~2500 changes!)

### Reborn Duckquill

Now to the Duckquill, it's been transformed from a Jekyll template to a proper Zola theme, the good thing about themes is that you can easily update and non-destructively tweak them by overriding some configuration variables and files.

Duckquill powers this website, but can be used by anyone, although I use some additional styles unique to this website.

It's listed on the [Zola themes page](https://www.getzola.org/themes/duckquill/), of which I'm quite proud of ^^

## Conclusion

It's been an interesting journey for sure; trying to use Hugo, losing my mind, regretting life choices, learning new SSG, burning out, coming back, learning Sass, HTML, and Tera (a bit like Liquid), procrastinating, coming back, rewriting half of the styles, and finally submitting the theme to the Zola themes website (not exactly in that order). All this, in my opinion, was worth it.

My plan now is to write a few posts and focus less on the website, since it's a wormhole I can't leave.

Shout out to [Hari Rana](https://tesk.page) for helping to improve the accessibility of the site by pointing out contrast issues, as well as some style change suggestions!
