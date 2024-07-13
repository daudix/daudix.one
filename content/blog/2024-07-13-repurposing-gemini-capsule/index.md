+++
title = "Repurposing My Gemini Capsule"
description = "My Gemini capsule has been collecting dust. It's time to change that."
[taxonomies]
tags = ["100DaysToOffload", "Gemini"]
[extra]
banner = "banner.png#pixels"
[extra.comments]
id = "112781226301037872"
+++

<small>[Banner](https://pixeljoint.com/pixelart/62622.htm) by [Wedmak2](https://pixeljoint.com/p/18694.htm)</small>

Today, I decided to do what [Drew DeVault](https://drewdevault.com) and [makeworld](https://www.makeworld.space/2023/08/bye_gemini.html) did - retire my Gemini capsule.

Well, not quite retire, but pretty close.

As you might know, I have a [Gemini capsule](https://gmi.daudix.one) on [flounder](https://flounder.online). I have it for as long as this blog, but all this time I wasn't sure how to use it. I could keep a [gemtext](https://geminiprotocol.net/docs/gemtext.gmi) version of all my posts there, but that's a lot of work, and it's not really worth it, as you can browse my website using `w3m` perfectly well.

It's simply been collecting dust. It had some out-of-date gemtext versions of blog posts, but that's pretty much it.

When [I got my domain](@/blog/2024-06-25-my-first-domain/index.md) I remembered about it and decided to try resurrecting it.

On the 10th of July, I finally sat down, setup custom domain for it (gmi.daudix.one, how original...) converted all posts to gemtext using [gemgen](https://sr.ht/~kota/gemgen/) by manually `cd`'ing in every post folder, running `gemgen index.md`, renaming the file to `<directory name>.gmi`, <kbd>Alt</kbd> + <kbd>←</kbd> to go back to previous directory, and repeating this for all posts.

After 2 hours of fixing broken links, images, videos, tables and weird text after stripping away all the *sweet* **formatting**, I was left with a very bland version of a rich text blog...

I've been thinking that day. What should I do with it?  
Should I delete my flounder account?  
Should I move to a different hosting?  
Should I simply keep it as is and write about something more interesting than tinkering with a dead capsule made with an obscure piece of tech?

I wasn't sure, so I kept this spinning in my head for a few days.

Today I have finally decided: I'll keep the capsule, but will get rid of all the gemtext versions of this blog's posts (that took me 2 hours to convert), and will use it to jot down some notes and quick thoughts that don't fit here, and, most importantly, it's easier to edit a file through flounder's web interface than to: 

- Open file manager.
- Navigate to the website source folder.
- Create a new post folder with a `date -I` timestamp.
- Inside it, create an `index.md` file.
- Fill in the front matter.
- Type the actual note.
- Open terminal.
- `git add` said note, commit, and push.
- Wait for the <abbr title="Continuous integration">CI</abbr> to complete.
