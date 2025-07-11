+++
title = "Geist Font"
date = 2024-11-13T23:52:00Z
+++

Switched this whole thing to a custom webfont instead of using whatever user's system provides. I mean system fonts are neat and all, but it's hard to maintain a consistent design considering that every OS and distro and user configuration uses different fonts. My choice was initially one of my favorite fonts, Inter, but it was too wide to my taste and I wanted something more condensed and *cute*. [Cantarell](https://cantarell.gnome.org) fits this bill but it's unmaintained; even GNOME [plans to switch away from it](https://gitlab.gnome.org/Teams/Design/initiatives/-/issues/152). I then remembered about Vercel's [Geist](https://vercel.com/font) family and thought why not give it a shot. And oh boy, it fits perfectly; it looks like something in between Cantarell and Inter, plus they provide both sans and mono variants which means they perfectly fit together. It's also pretty compact; Geist Sans weights only `64kB`, while Inter is `345kB`. So yeah, I'm happy, although I have to toss away some more 88x31 buttons and stamps to fit the [512kb limit](https://512kb.club) again...
