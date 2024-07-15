+++
title = "Gradience Was Quite a Ride, Now It’s Time to Move On"
description = "The most complete history of Gradience you'll ever find."
draft = true
[taxonomies]
tags = ["100DaysToOffload"]
[extra]
disclaimer = """
- This post doesn't provide any names; this post isn't made to offend anyone but to give an idea of what was going on.
- This post doesn't link to mentioned posts since I was a different person two years ago and find it very cringy.
"""
toc = true
+++

## Backstory

Two years ago today, a project called AdwCustomizer emerged; a libadwaita app that allowed users to recolor their libadwaita and GTK3 apps (if the [adw-gtk3](https://github.com/lassekongo83/adw-gtk3) theme was present) using an easy-to-use interface.

{% alert(important=true) %}
My stance on theming didn't change; I still believe that distributions should *not* ship any theming out of the box. It's up to the user to decide whether they're okay with broken applications or not. See ["please don’t theme our apps"](https://stopthemingmy.app).
{% end %}

{% alert(note=true) %}
Personally, I stopped theming my desktop for a while; for more than a year or so I'm using vanilla GNOME with only a few extensions that add some missing features that I desperately need, like automatic dark mode on sunset.
{% end %}

### Discovering AdwCustomizer

I was super excited to be one of the first to find it, since I thought about such an app literally a few days prior to this. The same day, I opened an issue regarding the project name and its change, since it didn't follow the [GNOME HIG](https://developer.gnome.org/hig/guidelines/app-naming.html). The developer quickly responded, stating that the proposed "Adwaita Manager" sounded quite good, and very soon, the project was renamed.

### First Contributions

Then, I created an issue regarding the app icon and even tried designing something (in retrospect: the icon turned out to be complete shit, like any icon from that period), participated in a little heated argument with another designer, and even did some UI mockups (which, you guessed it, looked like shit).

### New Duty

Then, something unexpected happened: the developer announced that he was looking for a new (co-)maintainer. This was shocking for me since I really liked the project, so what I did is what any sensible human being would do: I commented that I would like to maintain it, and no, I didn't say that I'm no programmer and a joke of a designer...

To make things worse, I took responsibility into my own hands and... made an announcement on [r/gnome](https://old.reddit.com/r/gnome/) and [r/linux](https://old.reddit.com/r/linux/) that the project was looking for a maintainer. Without asking the developer first. *deep sigh* someone kill me, please.

No one came to maintain it from the Reddit post, but one guy commented under the initial announcement on GitHub Discussions from the developer, and said that he would like to maintain it. And so, soon I and this guy got added to the "AdwCustomizer Team" GitHub organization.

Since then, we continued working on the project; the new maintainer implemented a lot of the requested features like Material You preset generation and refreshed UI (following my mockups).

### Rename in Progress

A month later, the app was somewhat feature-complete, so we thought a bit and decided to make an announcement about it on <abbr title="This Week In GNOME">[TWIG](https://gitlab.gnome.org/Teams/Websites/thisweek.gnome.org/-/blob/main/README.md)</abbr>. Shortly after the TWIG was published, I got contacted by one of the GNOME designers, asking if the project could use a name that's less likely to be confused with an official GNOME app.

![rename request](rename-request.png)
<figcaption>Screenshot of the chat with GNOME designer asking about the rename</figcaption>

In retrospect, this makes perfect sense, but back then, I got... offended? Anyhow, I promptly opened a new discussion on GitHub and we started brainstorming the new name.

Since I was, um, dumber, and didn't understand English well enough, it was an awkward experience. In the end, we got a few name candidates and we made a Reddit poll for people to decide on which one should be used. And people chose... Gradience!

Again, since I was a dumb fuck, I really disliked the name, but people chose it so I couldn't do much about it. Eventually, I realized that it's freaking perfect. Good thing it wasn't changed.

Promptly, we renamed all occurances of Adwaita Manager in the project, then moved the GitHub organization to the new name.

### Growing Responsibilities

Time passed, new features were added, I did more UI mockups, icons, translated the project to Russian, spent a lot of time in the project's chat, and overall, got deeply involved in it. Gradually, I got more power and responsibility laid on my shoulders, but I didn't complain since it's cool to "maintain" a big project, r-right?

## The Beginning of an End

New GNOME versions came out, more and more presets (just a fancy name for Gradience color themes) were made, the app got more polished and powerful, and then all of a sudden... the maintainer disappeared.

Alright, it didn't happen suddenly, but gradually. It was still noticeable, though.

Some time later, the maintainer completely disappeared, and I was left alone to triage the issue tracker and answer all the questions in the support forum (there were lots, lots of them). I started to dislike all this, and eventually completely burned out and simply muted all Gradience chats. I would still come over and answer a question or two, but I really didn't want to spend my time there.

## The End

I understood that this couldn't continue forever. People *will ask* the same questions over and over, they *will ask* for the new release date, and I *will need* to answer this over and over again. To be fair, some folks did the work for me and answered these questions, so it wasn't this bad (you know who you are, thanks!).

Last month, I collected all the courage and the remaining social battery charge and did what I have planned for a while; I announced that the project was looking for a new maintainer. Again. Just like the first time.

But just like the first time, no one responded in two weeks, so I did what I thought about doing and one Reddit comment suggested: I archived the project; the entire GitHub organization.

## Farewell

What does this mean? In short, it won't get any updates anymore, and I will have a solid answer to all the questions that will be asked in the support forums.

I'm glad that I finally did it and this weight is removed from my shoulders (to some degree), but also, I feel kinda bad and sad about it. After all, this project indirectly allowed me to meet a lot of wonderful people, communities, and overall, become a better self. Special thanks go to Gradience's off-topic "Water Cooler" room; such a nice place to chit-chat with cool people about whatever you like to (it's still around, bt the way *wink-wink, nudge-nudge*).

This is the end. For now. Goodbye, Gradience.

I thought so at the moment of writing the early draft. There's some promising work being done by one of my friends, it's still in the early stages, but I'm looking forward to it.

*What is it? you gave us the most blurry description one can give!*

Okay okay! it's a Gradience rewrite, you ready? in Rust. Called Chameleon. You happy?
