+++
title = "Repurposing My Gemini Capsule"
description = "My Gemini capsule has been collecting dust. It's time to change that."
draft = true
[taxonomies]
tags = ["100DaysToOffload", "Gemini"]
[extra]
banner = "banner.png#pixels"
[extra.comments]
id = ""
+++

Today I decided to do what drewdevault and "the amfora guy" did - retire my gemini capsule.

As you might know, I have a Gemini capsule on [flounder](https://flounder.online), I have it for pretty much as long as this blog, but all this time I wasn't sure how to use it. I could keep a gemtext copies of all my posts there, but that's a lot of work and it's not really worth it; you can browse my website using w3m perfectly well.

It's simply been collecting dust. It had some out-of-date gemtext versions of blog posts but that's pretty much it; no about page, contact, or anything else.

When [I got my domain](@/blog/2024-06-25-my-first-domain/index.md) I remembered about it, and decided to try resurrecting it. Yesterday I finally sat down, run `gemgen` on all posts (manually `cd`'ing in every folder, running it, `alt+<-` to go back to previous directory, repeat), and after 2 hours of fixing broken links, images, videos, tables and weird text after stripping away all the *sweet* **formatting**, I was left with a very cheap port of a healthy blog...

I've been thinking that day what I should do with it; should I delete my flounder account? should I move to a different hosting? should I simply keep it as is and write about something more interesting than tinkering with dead capsule made with an obscure piece of tech?

I'm still not entirely sure, but current plan is the following: I get rid of all the gemtext ports of posts from here that took me 2 hours to convert, and use it for writing small plain-text notes. Yes, it's exactly what gemini is about, but then... I have a Mastodon and Akkoma accounts, which are exactly for that!

I don't know, I really don't want to just kill it, but also I don't want to spend my time rewriting my posts for it, only for them to become more boring and tasteless.

Maybe I will move it to envs, they have finger and HTTP proxy as well, but they don't have that strict storage limits (flounder is limited to 10mb), but again, why?
