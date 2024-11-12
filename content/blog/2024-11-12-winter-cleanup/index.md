+++
title = "Rewrite Again?"
description = "Yet another rewrite is pretty much over."
[taxonomies]
tags = ["100DaysToOffload", "Website", "Devlog"]
[extra]
accent_color = "#e14775"
accent_color_dark = "#ff6188"
banner = "banner.webp"
[extra.comments]
id = ""
+++

So... [again?](@/blog/2023-12-14-website-rewrite-in-zola/index.md)

Yeaaah... Kind of. More like major update.

I said in my [previous post](@/blog/2024-11-02-decoupling-from-duckquill/index.md) that I'm moving on from [Duckquill](https://duckquill.daudix.one) theme (my own theme LMAO) to a hard fork of it with all the bloat removed and stuff I need added. So yeah, I'm almost done.

What have I changed? Here's a *brief* changelog with a lot of stuff missing:

- **New Structure**  
Now all styles are neatly sorted, components are in a folder of the same name, page-specific styles are in folders named after the page URL, and more things have been moved to partials for better maintainability. This improved structure now allows for "page bundles on steroids", so that page-specific styles are built into the page's folder rather than the site root. This doesn't really change anything, but makes the site build look cleaner and more logical. Assets have also been moved around.

```
nanolog
├── atom.xml
├── broken-feed
│   └── index.html
├── bye-skeuo
│   └── index.html
├── first-post
│   └── index.html
├── index.html
├── material-you
│   └── index.html
└── nanolog.css
```

- **Brand-New Color Palette**  
I bet you already noticed; purple is gone! Okay, not forever, just until I get over the fact that Monokai Pro's purple looks more like indigo than purple. GNOME's palette is also gone now, replaced by Monokai Pro now that it has a light variant (I am so happy about that). I also changed the internal palette, it used to be black and white with different opacities, now it uses accent color. Makes things more saturated. I also got rid of a bunch of intermediate variables; before there were 5 levels of `--fg-muted`, now there are only 2. `--accent-color-alpha` has been replaced by `--bg-muted` with two levels of opacity for normal and hovered state, since that was the only thing it was used for.
- **Bouncier Everything**  
All transitions (that's 99 `transition' properties, mind you) have been changed to use cubic bezier transitions where appropriate; for transformations and such, however, color transitions still use simple ease transitions, since cubic bezier doesn't work well for that. So what does all this mean? Well, everything is bouncy now, try hovering over some images, pressing buttons, reloading the page, see how it goes on and then take a little step back? Yeah.
- **New Headings**  
That's right, no more serif headings. I liked them, but I got bored, so here we are, with bold colorful headings.
- **Loads of Load Animations**  
Small change that makes a big difference. Seriously, it feels like I'm using a CSS framework now :P. Post banners have a different animation, you might have noticed.
- **Improved Styles**  
All styles have been revisited to ensure they meet the new quality requirements.
- [Material You](@/nanolog/2024-11-11T01:15:00Z-material-you.md)  
All posts that have a banner will now use the accent color picked (manually) from the banner, so that the post itself is colored similarly to the banner. Post cards use it as well. This post may appear to use the same accent color as the rest of the site, and you're right, but if I change the global accent color in the future, it will still use the same accent color as it does now.
- [Nanolog](@/nanolog/2024-11-08T01:43:35Z-first-post.md)  
Like microblog, but even smaller (not really, I just liked the name). I plan to post there a lot since I really like the format and the style turned out pretty good. It's available [here](@/nanolog/_index.md). It even has its own Atom feed!
- [Bye Skeuo](@/nanolog/2024-11-10T00:42:00Z-bye-skeuo.md)  
The [coffee](@/coffee/index.md) page no longer has the skeuo mode switch. Sad, but it got way too annoying to fix. Maybe it'll come back later.
- **Blog Atom Feed Changed**  
Now it's under the `blog' directory instead of the site root. This is because it was mixed with nanolog, so I had to split it up.
- **Reworded Homepage**  
I've reworded (more like rewritten) most of the homepage, now it should make a bit more sense.
- **Spotlights**  
Now there are two spotlights on the [design](@/design/index.md) page... Yeah.
- **Moved Back to Codeberg**:  
Temporarily until the end of the month, due to reasons beyond my control.

Phew, those are the most noticeable changes. All in all, this site should feel more polished. You can see all the changes in [this diff](https://codeberg.org/daudix/website/compare/c2321d66848c54b767f81e6fbe1321d877f73b27..main), thanks Anthony for the [tip](https://social.exozy.me/@a/113443957407294174)!

I also plan to revisit the templates themselves and clean them up, but that doesn't affect the look and feel of the site, so I don't think it counts. I also plan to get rid of the homepage... Just kidding, I will just move it to `home` and the site root will be a welcome screen inspired by what [melankorin](https://melankorin.net) does.

And that's all for now, see you next time when I have an idea what to post :D

P.S. It's been a while since I did my last devlog.
