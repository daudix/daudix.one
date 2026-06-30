+++
title = "A Bit Here, a Bit There"
description = "Some changes to this site since the New Era blog post."
draft = true
[taxonomies]
tags = ["Devlog", "Website"]
+++

Hi, welcome to the second half of a new episode of [#devlog](/tags/devlog), my web development changelog with additional ramblings disguised as a blog series. This time we're gonna talk all about this very site, yay.

## we need to kill this guy

### New Splash

[A while ago](@/blog/2024-11-12-winter-cleanup/index.md)[^1] I added a splash screen inspired by one [melankorin.net had](https://web.archive.org/web/20250721093910/https://melankorin.net/). It was great for multiple reasons; visitors got a rough idea of what they'll see, the page was super lightweight, and it looked cool! But reality is that we have to constantly make compromises. I was let know that various 88x31 crawlers---such as [eightyeightthirty.one](https://eightyeightthirty.one)---only crawl them from site root, which means `daudix.one/home` with all the badges was left behind. Unfortunate but solveable, after some consideration I have killed splash page and moved homepage back to site root, except I didn't kill splash screen, just made it a screen that's overlaid on top of homepage.

It's not perfect however, to remember the "skip splash next time" setting it uses JavaScript, without it splash is shown on all visits to homepage. Besides that it's just overall very fragile and relies on my beloved [anchor :target hack](@/blog/2026-04-06-year-of-ametrine/index.md#immersive-loading-animations).

Despite how cool it looks, or well, what [remained](https://old.daudix.one) of its coolness, I think its current form needs to be killed for real.

**TODO: Mention sugarforbrainz as inspiration.**

### Meet Beeper

## Refreshed Simplification 

### SVG Filters all the way

Animated David Lapshin title now uses subsetted Pacifico font and an SVG filter, shaves off 1kB of data

### Kick pixels around

Pixel icons were redrawn with a consistent base

### More alive now playing

Animated Now Playing background

### Simpler Now Playing blurnail

Simplify and improve Now Playing blurnail styling (with this one simple trick (background-size: some-huge-value))

### Dynamic Gayming

### Fake masonry because of webkit

## nanolog

### titless

### bridged'nt

~~Nanolog is now bridged to Pediverse and Slopsky~~

## Dynamic To-Do on colophon

## my mom is kinda homeless

## r/selfhosting

## 01

Updated branding

[^1]: > I also plan to get rid of the homepage… Just kidding, I will just move it to home and the site root will be a welcome screen inspired by what [melankorin](https://melankorin.net) does.
