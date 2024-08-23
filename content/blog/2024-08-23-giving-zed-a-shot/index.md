+++
title = "Giving Zed Code Editor a Shot"
description = "Trying out a new, shiny, and fast code editor (sorry, VSCodium)."
[taxonomies]
tags = ["100DaysToOffload", "Zed"]
[extra.comments]
id = "113012054245789117"
+++

Guh? What's Zed?

[Zed](https://zed.dev) is a new and shiny free and open source code editor written in Rust, which automatically means he's a fast boi. I saw [Gabs](https://www.gxbs.me) [using it](https://www.gxbs.me/blog/posts/zed---my-new-code-editor) and [really liking it](https://www.gxbs.me/blog/posts/zed---after-one-month), so I thought "after all...why not? why shouldn't I try it?"

In fact, I "tried" it once after Gabs' first post was published, but I didn't bother to understand and configure it, so I ended up not using it (classic me huh).

This time, however, I decided that it would be fair to actually try it before judging it. I already had it installed, so I went straight to the configuration. Turns out not much needed to be changed, in fact this is my entire `settings.json`:

```json
{
  "theme": "One Dark",
  "hard_tabs": true
}
```

*Yes, I prefer real tabs to spaces. Go cancel me.*

So why didn't I use it the first time? I don't know, maybe the lack of exact extension alternatives to VSCodium put me off.

So far I like it, it's indeed super fast and minimalistic (in a good way).

I do like VSCodium's font and rendering a bit more, but that's probably because I just got used to it. No wonder, I have been using VSCodium continuously for over a year.

The built-in formatter is surprisingly good, better than the one in VSCodium; it wraps long CSS properties perfectly, formats automatically on save (VSCodium can do this too, but not as smoothly), and supports modern selectors like `.element-1 + .element-2`.

What I also like, surprisingly, is the lack of one particular feature: Git integration. In VSCodium it was just annoying and not useful, since it just didn't work (GPG commit signing, SSH keys, and such) because of Flatpak, and I use lazygit for Git anyway, so I don't need it at all.

I don't exactly like the AI crap integration, but it's optional, so I don't mind.

Will see how it goes, but so far I like it.
