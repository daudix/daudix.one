+++
title = "Website 2.0"
description = "The long-awaited website rewrite using the new static site generator - Zola."
date = 2023-11-09
draft = true
[taxonomies]
tags = ["Devlog", "Website", "Duckquill"]
[extra]
toc = true
+++

## Backstory

It's been around 3 months since the last post, all this time I was procrastinating, doing some side-projects, learning Blender, and... rewriting my website from scratch!

## The Rewrite

The first rewrite attempt happend pretty much immediately after publishing the [previous devlog](@/blog/site-and-blog-devlog/index.md), I thought using Hugo was a good idea, but I was horribly wrong. I lost my sanity on the day 3, while having no progress made. I asked some people about using Hugo and their reaction were something like "Oh God, use anything but Hugo, you will regret using it", and it was true.

I then tried Zola which at first seemed like a worse Jekyll, but actually it were Jekyll 2.0.

B-but why move from Jekyll in the first place?

Well... there were a few reasons for this, like speed, ruby-dependency hell, broken internal linking and the need of third-party plugins for basic functionality, but the last straw was...

### Jekyll Issues

One of the most recent issues with Jekyll were Dart Sass support that wasn't working because of outdated dependencies in the official Jekyll Docker image. On the other hand Zola is modern, fast, has all the needed features, uses up-to-date Sass compiler, has a good support of creating and using themes (will get to that later) and uses 🦀 which is the best lang on the planet (/s, kinda).

### New Code Base

The other major change is that the "Home", "Design Showcase", and "Info" pages were moved away from using the separate repo and codebase to be part of the same website; it's confusing so here's a table of how it were:

| Page  | Repo          |
|-------|---------------|
| Home  | `pages`       |
| Info  | `pages`       |
| Works | `pages`       |
| Blog  | `blog-source` |

Now everything is in the `website` repo, uses the same stylesheet and templates:

| Page  | Repo      |
|-------|-----------|
| Home  | `website` |
| Info  | `website` |
| Works | `website` |
| Blog  | `website` |

### Look and Feel

Almost every single style and template were redone, resulting in a much nicer look and feel, some notable ones are:

- New floating navigation bar, with icons!
- Primary color is now used to tint the background (bye boring gray!)
- CRT style is now used for ASCII, replacing the old "gradient from opaque to transparent"
- Header 1 style is now different from other headers; it's big, **bold**, and has purple dot at the end
- Code blocks now use Solarized syntax highlighting theme instead of GitHub one, it changes from light to dark variant depending on current color scheme
- Source Code Pro font is now used for code blocks instead of system one
- New, animated 404 image
- Tags are now displayed alongside the date, both in the post list and in the post itself
- Posts now can be filtered by a tag, so e.g you can only filter posts containing the `Devlog` tag
- And more! ([initial migration commit](https://git.exozy.me/daudix/website/commit/0323f9658345ec5f254e24b4385c31ebe9a69f15), ~2500 changes!)

### Reborn Duckquill

About Duckquill, it transformed from a Jekyll template to a proper Zola theme, what's good about themes is that you can easily update and non-destructively tweak them by overriding some configs and files.

Duckquill powers this website and can be used by anyone, although I use some additional styles specific to this website.

Duckquill is listed on [Zola themes page](https://www.getzola.org/themes/duckquill/), of which I'm quite proud of ^^

## Conclusion

It's been an interesting journey for sure; trying using Hugo, losing sanity, regretting life choices, learning new SSG, burning out, coming back, learning Sass, HTML and Tera (a bit like Liquid), Procrastinating, coming back, rewriting half of the styles, and finally submitting the theme to Zola themes website (not exactly in this order). All this, in my opinion, were worth it.

My plan now is to write a few shorter posts and not focus on the website much anymore, since it's a wormhole I can't leave.