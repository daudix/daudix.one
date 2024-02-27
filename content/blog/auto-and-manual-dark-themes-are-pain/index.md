+++
title = "Auto and manual dark mode switching is a pain"
description = "One of the thigns why I hate JS"
date = 2024-02-06
[taxonomies]
tags = ["Devlog", "Website", "Duckquill", "JavaScript"]
[extra.comments]
id = "111881385228724178"
+++

> ~~This is a post in a new format called "microblog", not quite a Mastodon post nor a full-blown blog post, you got the idea :)~~
> Changed my mind, blog (even small) is here, microblog is on Fediverse, no in between.

I was just working on adding a manual dark mode toggle to Duckquill as [some people wanted to see it](https://codeberg.org/daudix/duckquill/issues/5), and it turned out to be a huge pain (who might've though), it needs either:

- Having two separate stylesheets for dark/light
- Having variables duplicated somewhere else
- Letting the JS manage the theme toggling instead of the browser, which of course will break if user has JS disabled.

The cleanest solution I've found is adding a checkbox that overrides the color variables to dark when checked, and adding JS that will save its state. This works, even with JS disabled, but it breaks the automatic theme switching based on OS style, ughhh.
