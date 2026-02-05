+++
title = "Home"
description = "The central hub."
aliases = ["home"]
[extra]
styles = ["home/style.css"]
scripts = ["home/script.js"]
no_header = true
graphics = [
	{ name = "4-by-3", text = "1024x768" },
	{ name = "no-js", text = "No Essential\nJavaScript" },
	{ name = "web-14", text = "14+", url = "https://www.mabsland.com/Adoption.html" },
	{ name = "profanity", text = "Mild Profanity" },
]
badges = [
  { name = "adhd.gif", url = "https://en.wikipedia.org/wiki/Attention_deficit_hyperactivity_disorder" },
  # { name = "blue-team.gif", url = "https://512kb.club" },
  { name = "dark-mode.gif", url = "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" },
  { name = "mobilefriendly.gif", url = "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" },
  { name = "righttorepair.gif", url = "https://www.ifixit.com/Right-to-Repair" },
  { name = "saynotoweb3.gif", url = "https://yesterweb.org/no-to-web3/" },
  { name = "snug-nook.gif", url = "https://snugnook.org" },
  { name = "standwith.gif", url = "https://decolonizepalestine.com" },
  { name = "vscodium.gif", url = "https://vscodium.com" },
]
contacts = [
  { name = "Discord", url = "https://discord.com/users/650757995378114581", favorite = true },
  { name = "Signal", url = "https://signal.me/#eu/b4KzM1OB3uW52mMywHUJa8h6yD4ATY_KXJJiuJtWUxOVAJP22PVO_qoNGFnf32W7" },
  { name = "Telegram", url = "https://t.me/ddaudix" },
  { name = "Matrix", url = "https://matrix.to/#/@daudix:envs.net" },
  { name = "XMPP", url = "xmpp:daudix@disroot.org" },
  { name = "Email", url = "mailto:me@daudix.one" },
]
socials = [
  { name = "Bluesky", url = "https://bsky.app/profile/daudix.one", favorite = true },
  { name = "Mastodon", url = "https://wetdry.world/@daudix" },
  { name = "SpaceHey", url = "https://spacehey.com/daudix" },
  { name = "Tumblr", url = "https://www.tumblr.com/ddaudix" },
  { name = "Pixelfed", url = "https://pixelfed.social/Daudix" },
  { name = "YouTube", url = "https://www.youtube.com/@ddaudix" },
]
forges = [
  { name = "Codeberg", url = "https://codeberg.org/daudix" },
  { name = "GitHub", url = "https://github.com/daudix" },
  # { name = "GitLab", url = "https://gitlab.com/daudix" },
]
+++

<div class="container-fill">
<div>

{{ polaroid() }}

<div id="title">

# David Lapshin

</div>

Greetings! Welcome to my little corner on the World Wild Web and a second home of mine. You might know me by my online handle; Daudix.

<div class="buttons start big">
  <a href="#about" class="suggested">About Me ↓</a>
  <a href="#splash">Splash →</a>
</div>

<div id="scroll-down">
{{ icon(name="caret-down") }}
{{ icon(name="caret-down") }}
</div>

</div>
</div>

## About

Thing I hate doing the most; telling about myself.

{% masonry(parent=true) %}

{% masonry(column=1) %}

{% masonry() %}
**I'm originating from Siberia,** but currently residing in <abbr id="abyss" title="If you know, you know">abyss</abbr>. That means that I'm a native Russian speaker, что в каком-то смысле довольно прикольно..?
{% end %}

{% masonry(fancy_list=true) %}
**Random things I like:**

- Purple <small>(lavender in particular)</small>
- Monokai Pro <small>(it got this sweet purple tint)</small>
- Photography <small>(mostly view from my window)</small>
- Amethysts and Ametrines
- Emoticons (but not emojis)
- Minor details and references
- Retro(futuristic) and vintage stuff
- Making this list look like a staircase
  {% end %}

{% masonry(fancy_list=true) %}
**I am {{ age() }} moons old.**

'07 was a busy year, too bad I couldn't see it with my own four eyes. Rawr XD
{% end %}

{% end %}

{% masonry(column=2) %}

{% masonry() %}
{{ window() }}
{% end %}

{% masonry() %}
**I'm rather shy.** Quoting [hyperreal](https://hyperreal.coffee) as I can't say it better:

> I'm <button id="shy">shy</button> and might come across as reserved and standoffish at first, but I open up when I get more comfortable with people.
> {% end %}

{% masonry(type="games", fancy_list=true) %}
**Games I like:**

{{ games() }}
{% end %}

{% end %}

{% end %}

## Online

Where and when to find me online.

{% masonry(parent=true) %}

{% masonry(column=1) %}

{% masonry(type="player") %}
{{ now_playing() }}
{% end %}

{% masonry(type="online", fancy_list=true) %}
<strong id="socials" class="title">Socials</strong>

{{ online(type="socials") }}
{% end %}

{% masonry(type="online", fancy_list=true) %}
<strong id="forges" class="title">Forges</strong>

{{ online(type="forges") }}
{% end %}

{% end %}

{% masonry(column=2) %}

{% masonry(type="online", fancy_list=true) %}
<strong id="contacts" class="title">Contacts</strong>

For me it's currently <time id="clock">09:41</time> <small>(UTC+3)</small> and I'm <span id="online-indicator"><i class="icon"></i><span id="online-indicator-text">Offline</span></span>.

Feel free to reach me out on any of these! Although I'm usually too shy to start the conversation, I'm happy to chat once someone messages me first.

{{ online(type="contacts") }}
{% end %}

{% masonry(type="snug-nook", fancy_list=true) %}
<strong id="snug-nook" class="title">Snug Nook</strong>

The community-focused community.

<img src="home/neofax.png" class="transparent no-hover drop-shadow" />
<a href="https://snugnook.org" title="Learn More"></a>
<div>
{{ icon(name="discord-logo") }}
{{ icon(name="matrix-logo") }}
</div>
{% end %}

{% end %}

{% end %}

## Works

<div>

{{ icons() }}

<div>

I ocasionally contribute to various FOSS projects by creating/improving icons, translating them into Russian, or crafting logos. Other times I make wallpapers for myself that I share with others. <small>(one is in [GNOME](https://www.gnome.org))</small>

<div class="buttons big">
  <a href="/design/">My Designs →</a>
</div>
</div>

</div>

## IndieWeb

{{ badges() }}

Simply put, IndieWeb is anything on the web that is hand-crafted and feels personal, at least that's what it is for me.

Everything about it is awesome, from 88x31 buttons to webrings. It also feels cozy and is hella fun, quite refreshing after the sterile corporate web.

I'm even a member of several [tildes](https://envs.net) and [CS clubs](https://exozy.me), even though I don't do much there, I still like being a part of them.

Better yet, I have a website on [neocities](https://neocities.org); It doesn't have any purpose except for being there and looking dated. [Check it out](https://daudix.neocities.org) if you want.

<img id="flutter" width="128" height="110" class="transparent no-hover" src="home/flutter.webp" alt="Fluttershy with a wide grin on her face.">
